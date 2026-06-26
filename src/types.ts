// ── Narrative graph data model ─────────────────────────────────────────────
// Edit scenes.json to author your scenario. This file only validates shapes.

export interface Condition {
  gte?: number;
  lte?: number;
  eq?: number;
}

export type Effect = Record<string, number>;

export interface Hotspot {
  id: string;
  label: string;
  /** Horizontal angle in degrees. 0 = forward, +90 = left, -90 = right. */
  lon: number;
  /** Vertical angle in degrees. 0 = horizon, +45 = up, -45 = down. */
  lat: number;
  description?: string;
  log?: string;
  effect?: Effect;
  goto?: string;
  condition?: Record<string, Condition>;
}

export interface Choice {
  label: string;
  goto: string;
  effect?: Effect;
  condition?: Record<string, Condition>;
}

export interface SceneNode {
  /** Path to an equirectangular 2:1 panorama image (or video in the future). */
  panorama?: string;
  /** Optional: which character pose to show in this scene. */
  character?: { id: string; pose: string; position: [number, number, number] };
  /** G's narration typewritten into the HUD. */
  narrative?: string;
  hotspots?: Hotspot[];
  choices?: Choice[];
  unlockedLogs?: string[];
}

export type SceneGraph = Record<string, SceneNode>;

export interface GameState {
  trustG: number;
  anomalyLevel: number;
  loopCount: number;
  [key: string]: number;
}
