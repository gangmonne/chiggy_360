import * as THREE from "three";
import type { Hotspot } from "../types.js";
import { SphereViewer } from "../render/SphereViewer.js";

interface LiveHotspot {
  el: HTMLElement;
  world: THREE.Vector3;
  data: Hotspot;
}

/**
 * Projects lon/lat hotspots onto the screen using the live camera transform.
 * Hotspots that face away from the camera (dot product < 0) are hidden.
 */
export class HotspotsUI {
  private container: HTMLElement;
  private onActivate: (id: string, goto?: string, effect?: Record<string, number>) => void;
  private live: LiveHotspot[] = [];

  private _ndc = new THREE.Vector3();

  constructor(
    container: HTMLElement,
    onActivate: (id: string, goto?: string, effect?: Record<string, number>) => void
  ) {
    this.container = container;
    this.onActivate = onActivate;
  }

  render(hotspots: Hotspot[]): void {
    this.container.innerHTML = "";
    this.live = [];

    for (const hs of hotspots) {
      const world = SphereViewer.lonLatToWorld(hs.lon, hs.lat);

      const el = document.createElement("div");
      el.className = "hotspot";
      el.setAttribute("data-id", hs.id);
      const label = document.createElement("span");
      label.className = "hotspot-label";
      label.textContent = hs.label;
      el.appendChild(label);

      el.addEventListener("click", () => this.onActivate(hs.id, hs.goto, hs.effect));
      this.container.appendChild(el);
      this.live.push({ el, world, data: hs });
    }
  }

  /** Call every frame to reproject hotspot positions. */
  tick(camera: THREE.PerspectiveCamera): void {
    const dir = new THREE.Vector3();
    for (const { el, world } of this.live) {
      // Check if hotspot is in front of the camera
      camera.getWorldDirection(dir);
      const dot = dir.dot(world.clone().normalize());
      if (dot < 0.1) {
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
        continue;
      }

      this._ndc.copy(world).project(camera);
      const x = ( this._ndc.x * 0.5 + 0.5) * window.innerWidth;
      const y = (-this._ndc.y * 0.5 + 0.5) * window.innerHeight;

      el.style.left    = `${x}px`;
      el.style.top     = `${y}px`;
      el.style.opacity = String(Math.min(1, (dot - 0.1) * 3));
      el.style.pointerEvents = "auto";
    }
  }
}
