import type { SceneGraph } from "../types.js";
import { StateManager } from "./StateManager.js";
import { SphereViewer } from "../render/SphereViewer.js";
import { SphereRig }    from "../render/SphereRig.js";
import { GParticleCloud }  from "../render/GParticleCloud.js";
import { CharacterSpatial } from "../render/CharacterSpatial.js";
import { NarrativeLayer } from "../ui/NarrativeLayer.js";
import { HotspotsUI }    from "../ui/Hotspots.js";
import { ChoicesUI }     from "../ui/Choices.js";
import * as THREE from "three";

export class GameDirector {
  private state:     StateManager;
  private viewer:    SphereViewer;
  readonly rig:      SphereRig;
  private gCloud:    GParticleCloud;
  private character: CharacterSpatial;
  private narrative: NarrativeLayer;
  private hotspots:  HotspotsUI;
  private choices:   ChoicesUI;

  readonly renderer: THREE.WebGLRenderer;
  private currentNodeId = "";
  private nodeId_el: HTMLElement;
  private state_el: HTMLElement;

  constructor(canvas: HTMLCanvasElement, private graph: SceneGraph) {
    this.state = new StateManager();

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.setSize(innerWidth, innerHeight);

    this.viewer = new SphereViewer();
    this.rig    = new SphereRig(canvas);

    // G cloud — added to the 360 scene
    this.gCloud = new GParticleCloud();
    this.viewer.scene.add(this.gCloud.mesh);

    // Character overlay — lives in a separate overlay scene so it ignores camera rotation
    this.character = new CharacterSpatial();
    this.viewer.scene.add(this.character.group); // or use a separate scene below

    this.narrative = new NarrativeLayer(document.getElementById("narrative")!);
    this.hotspots  = new HotspotsUI(
      document.getElementById("hotspots")!,
      (id, goto, effect) => this.handleHotspot(id, goto, effect)
    );
    this.choices   = new ChoicesUI(
      document.getElementById("choices")!,
      (goto, effect) => this.handleChoice(goto, effect)
    );

    this.nodeId_el = document.getElementById("hud-node")!;
    this.state_el  = document.getElementById("hud-state")!;

    document.getElementById("reset-btn")!.addEventListener("click", () => this.reset());
    document.getElementById("panel-close")!.addEventListener("click", () => {
      document.getElementById("panel")!.classList.add("hidden");
    });

    window.addEventListener("resize", () => this.onResize());
  }

  async enter(nodeId: string): Promise<void> {
    const node = this.graph[nodeId];
    if (!node) { console.warn("[GameDirector] unknown node:", nodeId); return; }
    this.currentNodeId = nodeId;

    // Panorama swap
    await this.viewer.setScene(node.panorama);

    // HUD
    const s = this.state.get();
    this.nodeId_el.textContent = `NODE ${nodeId}`;
    this.state_el.textContent  = `trustG ${s.trustG} · anomaly ${s.anomalyLevel}`;

    // Character
    let characterVisible = false;
    if (node.character) {
      characterVisible = true;
      this.character.setPose(node.character.id, node.character.pose);
      this.character.setPosition(...node.character.position);
      this.character.show();
    } else {
      this.character.hide();
    }

    // G cloud — only when no human character is visible
    if (node.narrative) {
      if (!characterVisible) this.gCloud.show();
      else this.gCloud.hide();
      this.narrative.type(node.narrative);
    } else {
      this.gCloud.hide();
    }

    // Hotspots & choices
    const visibleHotspots = (node.hotspots ?? []).filter(h => this.state.checkCondition(h.condition));
    const visibleChoices  = (node.choices  ?? []).filter(c => this.state.checkCondition(c.condition));
    this.hotspots.render(visibleHotspots);
    this.choices.render(visibleChoices);
  }

  private handleHotspot(id: string, goto?: string, effect?: Record<string, number>): void {
    const node = this.graph[this.currentNodeId];
    const hs = node?.hotspots?.find(h => h.id === id);
    if (!hs) return;

    if (hs.description) {
      const panel = document.getElementById("panel")!;
      document.getElementById("panel-title")!.textContent = hs.label;
      document.getElementById("panel-body")!.textContent  = hs.description;
      panel.classList.remove("hidden");
    }

    if (effect) this.state.apply(effect);
    if (goto)   this.enter(goto);
  }

  private handleChoice(goto: string, effect?: Record<string, number>): void {
    if (effect) this.state.apply(effect);
    this.enter(goto);
  }

  reset(): void {
    this.state.reset();
    this.rig.reset();
    this.narrative.cancel();
    this.gCloud.hide();
    this.character.hide();
    const first = Object.keys(this.graph)[0];
    if (first) this.enter(first);
  }

  update(t: number): void {
    const s = this.state.get();
    this.rig.update();
    this.gCloud.update(t, s.trustG, s.anomalyLevel, this.narrative.isTyping);
    this.character.update(t, s.trustG, s.anomalyLevel);
    this.hotspots.tick(this.rig.camera);
    this.renderer.render(this.viewer.scene, this.rig.camera);

    // HUD refresh
    this.state_el.textContent = `trustG ${s.trustG} · anomaly ${s.anomalyLevel}`;
  }

  private onResize(): void {
    this.renderer.setSize(innerWidth, innerHeight);
    this.rig.onResize();
  }
}
