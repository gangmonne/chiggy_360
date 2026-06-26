import type { SceneGraph } from "./types.js";
import { GameDirector } from "./core/GameDirector.js";
import scenesRaw from "./data/scenes.json";

// Strip the _meta key which is not a scene node
const { _meta: _, ...graph } = scenesRaw as Record<string, unknown>;
const sceneGraph = graph as SceneGraph;

const canvas  = document.getElementById("scene") as HTMLCanvasElement;
const loading = document.getElementById("loading")!;

const director = new GameDirector(canvas, sceneGraph, {
  riceKept: 0,
  knowsSeongchil: 0,
  knowsJaebok: 0,
  valleyEyeContact: 0,
  bonggilDistance: 0,
  countsSmoke: 0,
});

const firstNode = Object.keys(sceneGraph)[0];
director.enter(firstNode).then(() => {
  loading.style.display = "none";
});

let t0 = 0;
function loop(ts: number) {
  const t = (ts - t0) / 1000;
  director.update(t);
  requestAnimationFrame(loop);
}
requestAnimationFrame((ts) => { t0 = ts; loop(ts); });
