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

export interface NarrativeVariant {
  condition: Record<string, Condition>;
  text: string;
}

export interface SceneNode {
  /** Path to an equirectangular 2:1 panorama image (or video in the future). */
  panorama?: string;
  /** Optional: which character pose to show in this scene. */
  character?: { id: string; pose: string; position: [number, number, number] };
  /** Narration typewritten into the HUD. Default text when no variant matches. */
  narrative?: string;
  /** Checked in order; the first whose condition passes overrides `narrative`. */
  narrativeVariants?: NarrativeVariant[];
  hotspots?: Hotspot[];
  choices?: Choice[];
  /**
   * For scenes with no choices ("선택지 없음") — where to go once the player
   * continues. Rendered as a single "계속" prompt.
   */
  next?: string;
  unlockedLogs?: string[];
}

export type SceneGraph = Record<string, SceneNode>;

export interface GameState {
  [key: string]: number;
}
