# PROJECT BIBLE — 지게꾼 (PORTER)

A 360° interactive FMV (branching narrative) built on Three.js + Vite + TypeScript.
This document is the **handoff spec**: it describes the entire system precisely enough
that another developer or AI agent (e.g. Codex) can pick it up and finish building it
without prior context. Read it top to bottom before touching code.

- **Repository:** `gangmonne/chiggy_360`
- **Active branch:** `claude/project-setup-4agm4r`
- **Runtime target:** modern browser (desktop + mobile), static hosting
- **Language of content:** Korean (narrative prose in `scenes.json`)
- **Language of code/comments:** English + Korean comments

---

## 1. What this project is

A single-player, choice-driven interactive story rendered inside a 360° equirectangular
panorama. The player is **만술 (Mansul)**, a teenage civilian *porter* (지게꾼) conscripted
to haul ammunition up and down mountains for the ROK Army during the Korean War
(1950–1953). Each in-game "day" is a chapter. The player drags to look around a 360°
backdrop, reads typewriter narration, and picks dialogue/action choices that set hidden
flags. Those flags silently accumulate and, at the end, select which of several
epilogue variants the player sees. There is no combat UI, no score shown to the player —
the state is emotional bookkeeping, not a game score.

**Theme:** the anonymity of the ~170,000 civilian porters, almost none of whose names
were recorded. The mechanics reinforce this: the "right" ending is not a reward, it's
whether the player *remembered a name*.

### Structure at a glance

```
D-21 (conscription day)  →  D-20 → … → D-1   (21 "day" chapters, counting DOWN)
        ↓
   D-DAY PIVOT   (the turning point — a separate act)
        ↓
   ENDING        (5 route variants selected by accumulated flags)
```

Node-ID day prefixes count DOWN from `d21` to `d1`, then `pivot`, then `ending`.
So `d21_*` is the FIRST chapter (conscription) and `d1_*` is the LAST full day before
the pivot. Do not be misled by numeric sort — **narrative order is d21 → d1 → pivot → ending.**

---

## 2. Tech stack & how to run

| Concern | Choice |
|---|---|
| Bundler / dev server | **Vite 5** (`vite`, `vite build`, `vite preview`) |
| 3D | **Three.js ^0.167** (`WebGLRenderer`, `Scene`, `PerspectiveCamera`, `ShaderMaterial`) |
| Language | **TypeScript ^5.4**, strict mode, `moduleResolution: bundler` |
| Data | `src/data/scenes.json` imported directly (`resolveJsonModule: true`) |
| Hosting | Static. `vite.config.ts` sets `base: "./"` → the built `dist/` works at any subpath (GitHub Pages subpath-safe). |

```bash
npm install          # installs three + vite + typescript
npm run dev          # Vite dev server (hot reload) — develop here
npm run build        # tsc typecheck + vite build → dist/
npm run preview      # serve the built dist/ locally
```

`dist/` and `node_modules/` are git-ignored. The deployable artifact is whatever
`npm run build` produces in `dist/` (index.html + hashed `assets/index-*.js` + `.css`).

**Entry point:** `index.html` → `src/main.ts`. `main.ts` strips the `_meta` key from
`scenes.json`, constructs a `GameDirector` with a big flat `initialState` object (all
flags initialized to 0), enters the FIRST scene-graph key, and starts a
`requestAnimationFrame` loop calling `director.update(t)`.

---

## 3. Directory map

```
index.html                 # HTML shell: <canvas id="scene">, HUD, #narrative, #choices, #hotspots, #panel
vite.config.ts             # base: "./"
tsconfig.json              # strict, ES2022, bundler resolution, resolveJsonModule
package.json               # three / vite / typescript

src/
  main.ts                  # bootstrap: build graph, init state, enter first node, RAF loop
  style.css                # all UI styling (HUD, narrative, choice buttons, hotspots, panel)
  types.ts                 # THE DATA CONTRACT — SceneNode / Choice / Hotspot / Condition / etc.

  core/
    GameDirector.ts        # orchestrator: enter(nodeId), handleChoice, handleHotspot, update loop
    StateManager.ts        # flag store, localStorage persistence, checkCondition()

  render/
    SphereViewer.ts        # inverted sphere + equirect texture; lonLatToWorld() helper
    SphereRig.ts           # drag-to-look camera (yaw/pitch + inertia), touch, optional gyro
    GParticleCloud.ts      # "G" particle-silhouette effect (legacy template flavor — see §8)
    CharacterSpatial.ts    # 3D billboard for character art w/ chroma-key shader (UNUSED — see §8)

  ui/
    NarrativeLayer.ts      # typewriter effect into #narrative
    Choices.ts             # renders choice buttons → onSelect(goto, effect)
    Hotspots.ts            # projects lon/lat hotspots to screen each frame

  data/
    scenes.json            # ★ THE ENTIRE STORY — 408 scene nodes + _meta. Single source of truth.
    character-registry.ts  # character/pose→image registry (template boilerplate, UNUSED — see §8)

docs/
  PROJECT_BIBLE.md         # this file
  panorama-prompts.md      # ready-to-use image-gen prompts for the 23 panorama archetypes
```

---

## 4. The data contract (`src/types.ts`)

**This is the most important file to understand.** The engine is generic; the entire
game is data in `scenes.json` conforming to these shapes. `types.ts` only validates
shapes — it contains no logic.

```ts
interface Condition { gte?: number; lte?: number; eq?: number; }   // one flag's test

type Effect = Record<string, number>;   // flag deltas applied additively

interface Hotspot {
  id: string;
  label: string;
  lon: number;   // horizontal degrees: 0 = forward, +90 = left, -90 = right
  lat: number;   // vertical degrees:   0 = horizon,  +45 = up,   -45 = down
  description?: string;   // shown in the #panel popup when clicked
  log?: string;
  effect?: Effect;                         // applied on activation
  goto?: string;                           // navigate on activation
  condition?: Record<string, Condition>;   // visibility gate
}

interface Choice {
  label: string;
  goto: string;                            // REQUIRED — target node id
  effect?: Effect;                         // flags to add on selection
  condition?: Record<string, Condition>;   // visibility gate (all keys ANDed)
}

interface NarrativeVariant {
  condition: Record<string, Condition>;    // {} = always matches (use as final fallback)
  text: string;
}

interface SceneNode {
  panorama?: string;                       // equirect 2:1 image path (see §6)
  character?: { id: string; pose: string; position: [number,number,number] };  // UNUSED
  narrative?: string;                      // default narration
  narrativeVariants?: NarrativeVariant[];  // checked IN ORDER; first match overrides `narrative`
  hotspots?: Hotspot[];
  choices?: Choice[];
  next?: string;                           // for choiceless scenes: single "▶" continue → next
  unlockedLogs?: string[];
}

type SceneGraph = Record<string, SceneNode>;   // keyed by node id
interface GameState { [key: string]: number; } // ALL state is number-valued flags
```

### Condition semantics (critical)

A `condition` is an object mapping flag-name → `{gte?, lte?, eq?}`. **All keys in one
condition object are ANDed.** A missing flag reads as `0`.

```ts
// StateManager.checkCondition — the exact rule
for (const [flag, c] of Object.entries(cond)) {
  const v = state[flag] ?? 0;
  if (c.gte !== undefined && v <  c.gte) return false;
  if (c.lte !== undefined && v >  c.lte) return false;
  if (c.eq  !== undefined && v !== c.eq) return false;
}
return true;   // no condition, or all passed
```

There is **no OR operator.** To express OR, author multiple `narrativeVariants` (they're
checked in order, first match wins) or multiple conditional `choices`.

---

## 5. The engine (control flow)

### `GameDirector.enter(nodeId)` — the heart of the loop

Called on every navigation. In order:

1. Look up `graph[nodeId]`; warn + return if unknown.
2. `viewer.setScene(node.panorama)` — awaits texture load, swaps the sphere material map.
3. Update HUD (`NODE <id>`, flag readout).
4. **Character:** if `node.character` present, show billboard; else hide. *(No node uses this — see §8.)*
5. **Narrative:** pick the FIRST `narrativeVariants` entry whose `condition` passes; if none,
   use `node.narrative`. Typewrite it into `#narrative`.
6. **Hotspots:** filter by `condition`, render (projected to screen each frame in `update`).
7. **Choices:** filter `node.choices` by `condition`.
   - If ≥1 visible choice → render them as buttons.
   - If 0 visible choices **and** `node.next` exists → render a single `▶` continue button that navigates to `next`.
   - If 0 choices and no `next` → terminal node (the story ends; only `ending_end` is terminal).

### Selection handlers

```ts
handleChoice(goto, effect)  { if (effect) state.apply(effect); enter(goto); }
handleHotspot(id, goto?, effect?) { show panel if description; if (effect) apply; if (goto) enter(goto); }
```

`state.apply(effect)` adds each delta to the current flag value (default 0) and persists
to `localStorage` under key `fmv360_state`.

### Persistence & reset

`StateManager` loads `localStorage["fmv360_state"]` on construction and merges it over the
`initial` object, so a refresh **resumes** flag state (but not current node — the app always
re-enters the first node on load). The `↺` reset button (`#reset-btn`) clears localStorage,
resets flags to `initial`, resets the camera, and re-enters the first node.

> ⚠️ Note: current position is NOT persisted — only flags. A page reload restarts the
> narrative from `d21_01` but with previously-earned flags intact. If you want full
> save/resume, persist `currentNodeId` too (see §9 "Known gaps").

### The render loop (`update(t)`, every frame)

```ts
rig.update();                                  // apply camera inertia
gCloud.update(t, trustG, anomalyLevel, typing); // legacy particle effect (§8)
character.update(t, trustG, anomalyLevel);      // no-op (hidden)
hotspots.tick(rig.camera);                      // reproject hotspot DOM positions
renderer.render(viewer.scene, rig.camera);
```

---

## 6. Panorama assets (the archetype system)

Every scene node has a `panorama` path. Originally there were **254 unique** per-scene
image paths; these were **consolidated to 23 reusable "archetype" images** to make asset
production tractable. All paths now look like:

```
/panorama/archetypes/<archetype>.jpg
```

The 23 archetypes and what they depict are fully specified — with ready-to-use
image-generation prompts and a shared style prefix — in **`docs/panorama-prompts.md`**.
The archetypes are:

```
tent_morning  tent_night   tent_rain     camp_morning  camp_load    camp_evening
basecamp      mountain_ascent  mountain_descent  mountain_rest
summit_clear  summit_busy  combat_gunfire  rain_camp   rain_ascent  rain_descent
valley_open   burned_village  bear_encounter  us_camp_scene  truck_road  home_paddy
ending_hill
```

**Asset pipeline to finish the build:**

1. Generate each of the 23 images as an **equirectangular 360° panorama, 2:1 aspect ratio**
   (e.g. 4096×2048), seamless horizontal wrap. Use the prompts in `docs/panorama-prompts.md`.
2. Save them to **`public/panorama/archetypes/<archetype>.jpg`** — filenames must match
   exactly. `public/` is Vite's static root; `/panorama/...` resolves to `public/panorama/...`.
3. No code changes needed — `scenes.json` already references these paths. The
   `public/panorama/archetypes/` directory does not yet exist / is empty; creating the
   files is the remaining work.

Rationale for consolidation: the *prose* carries each scene's specific meaning; the
backdrop only needs to convey a general place/mood. 23 shared plates preserve 100% of
narrative distinctiveness while cutting image production ~11×.

**Missing-image behavior:** `SphereViewer.setScene` fails gracefully — on load error it
logs a warning and keeps the previous texture (or a blank sphere). The app still runs and
is fully playable with narration/choices even before any images exist.

---

## 7. `scenes.json` — the story data

- **408 scene nodes** + one `_meta` key (stripped at load).
- **Entry node:** the FIRST key in the object = `d21_01` (conscription dawn). `main.ts`
  enters `Object.keys(sceneGraph)[0]`, so **key order matters** — keep `d21_01` first.
- **Node id convention:** `<day>_<NN>` e.g. `d21_01`, `d12_18`, plus `pivot_01..pivot_22`,
  `ending_01..ending_09`, `ending_end`, and per-day terminals like `d1_end`.
- Feature counts (current):
  - 188 nodes with `choices`
  - 235 nodes with `next` (choiceless auto-advance)
  - 183 nodes with `narrativeVariants` (state-reactive prose)
  - 1 node with `hotspots` (`d21_11`, the 지게/A-frame — the hotspot system is otherwise
    unused but fully working)
  - 0 nodes with `character`
  - 408 nodes with `panorama`
- **184 unique flag keys** are referenced across effects/conditions. `main.ts` initializes
  the full set to 0 (keeping them enumerated there also drives the HUD readout).

### Day → pivot → ending wiring

- Each day chapter flows scene-to-scene via `choices`/`next`, ending at a per-day night
  node (often `dN_end` or `dN_..._tent_night`).
- `d1_end` leads into **`pivot_01`** (2 goto refs point at `pivot_01`).
- The PIVOT act (`pivot_01`..`pivot_22`) is the climax; it branches into the ENDING.
- **`ending_09`** is the payoff node: 5 ordered `narrativeVariants` select the epilogue by
  accumulated flags (see below). It flows to **`ending_end`**, the single terminal node,
  which prints the historical epigraph and "END." fade-out.

### Example: the 5-route ending selector (`ending_09`)

`narrativeVariants` are evaluated top-to-bottom; first match wins. The ordering encodes
priority (most specific / most "remembered" first, empty-condition fallback last):

1. `bonggilDistance≥5 AND knowsSeongchil≥1` → silent, stayed close to both — the fullest ending
2. `bonggilDistance≥5` → repeats 봉길's rain/rice line
3. `knowsSeongchil≥1` → calls his own name the way 성칠 did
4. `knowsJaebok≥1` → reads the half-name off 재복's name tag ("이" — only half a name)
5. `{}` (always) → no name to call; just dots and wind — the "forgot everyone" ending

This is the core mechanic: the flags are relationship/attention counters set by dozens of
small choices across 21 days. The player is never told they're being scored. **When editing,
preserve the first-match-wins ordering and always keep a final `{}` fallback variant.**

---

## 8. Legacy / unused subsystems (do not mistake for active features)

The engine began as a generic sci-fi "FMV template" (an AI character named "G",
trust/anomaly meters). Several pieces survive but are **NOT used** by the PORTER content.
Decide per-piece whether to keep, repurpose, or strip:

| Piece | Status | Notes |
|---|---|---|
| `GParticleCloud` ("G" silhouette) | Active in render loop, but only shows when a node has narrative **and no character**. Since no node uses `character`, it renders a faint teal particle cloud during narration. | Reads `trustG` / `anomalyLevel` flags, which the PORTER content never sets (so it sits at defaults). **Decide:** keep as an ambient effect, or remove from `GameDirector` (`this.gCloud` construction + `update`) if unwanted. |
| `CharacterSpatial` + `character-registry.ts` | **Unused.** 0 nodes set `node.character`. Registry defines a placeholder `subject_a` only. | Fully working chroma-key billboard system if you later want on-scene character art. Otherwise safe to delete `CharacterSpatial.ts`, `character-registry.ts`, and the `character` field usage in `GameDirector`/`types`. |
| `trustG`, `anomalyLevel` flags | Referenced only by the two effects above and the HUD. PORTER content doesn't set them. | Harmless. The HUD line `hud-state` shows all flags; with 184 flags this readout is long — consider hiding or trimming the HUD for release. |
| Hotspots | Working, used exactly once (`d21_11`). | Keep — it's a valid interaction primitive. |
| `deviceorientation` gyro | Commented out in `SphereRig`. | Uncomment to enable mobile look-by-tilt. |

**Recommendation for the finishing developer:** the game is fully playable as pure
narrative + panorama + choices. The cleanest path is to (a) generate the 23 panoramas,
(b) decide whether to keep or strip the "G" cloud, (c) trim/hide the debug HUD, and
(d) optionally add save-resume for `currentNodeId`.

---

## 9. Coordinate & rendering conventions

- **Panorama sphere:** radius 10, normals inverted (`geo.scale(-1,1,1)`), `MeshBasicMaterial`
  with the equirect texture, `SRGBColorSpace`. Camera sits at origin (0,0,0) and only rotates.
- **Camera:** `PerspectiveCamera(75°, aspect, 0.01, 20)`, `rotation.order = "YXZ"` (yaw then
  pitch, no roll). Pitch clamped to ±85°. Drag sensitivity 0.22°/px, inertia damping 0.88.
- **lon/lat → world** (for hotspots), via `SphereViewer.lonLatToWorld`:
  - `lon = 0` faces +Z (forward), increases counterclockwise (+90 = left).
  - `lat = 0` = horizon, positive = up. Hotspots sit at radius × 0.98 (just inside the sphere).
- **Hotspot projection:** each frame, `HotspotsUI.tick` hides hotspots facing away
  (`dir·world < 0.1`) and projects the rest to screen pixels via `vector.project(camera)`.

---

## 10. Known gaps / TODO for whoever finishes this

1. **Generate the 23 panorama images** → `public/panorama/archetypes/*.jpg` (see §6, prompts in `docs/panorama-prompts.md`). This is the single biggest remaining task.
2. **Decide on legacy subsystems** (§8): keep or strip the "G" particle cloud and the character/registry system.
3. **HUD for release:** `#hud-state` currently dumps all flags — hide or reduce it for players.
4. **Save/resume position:** persist `currentNodeId` (not just flags) if you want true resume. Currently reload restarts at `d21_01` with flags intact.
5. **Audio:** none exists. There are no sound hooks in the engine — would need adding.
6. **Link validation:** every `goto`/`next` should resolve to an existing node id. A build-time
   validator over `scenes.json` (assert all targets exist, assert a final `{}` variant on
   multi-variant nodes) would prevent authoring errors. Not yet present.
7. **Deployment:** `dist/` is subpath-safe (`base:"./"`). A `gh-pages` branch exists from an
   earlier deploy but predates the panorama consolidation — rebuild and redeploy after images exist.

---

## 11. How to author / edit content (quick reference)

To add a scene: add a key to `scenes.json`:

```jsonc
"d7_09": {
  "panorama": "/panorama/archetypes/mountain_rest.jpg",
  "narrative": "기본 나레이션…",
  "narrativeVariants": [
    { "condition": { "knowsSeongchil": { "gte": 1 } }, "text": "성칠을 아는 경우의 나레이션…" }
  ],
  "choices": [
    { "label": "A. …", "goto": "d7_10", "effect": { "someFlag": 1 } },
    { "label": "B. …", "goto": "d7_10" }
  ]
}
```

Rules of thumb:
- Every `goto`/`next` MUST point to an existing node id.
- New flags: add them to `main.ts`'s `initialState` (initialize to 0) so they're enumerated.
- Multi-variant nodes: order specific→general, end with a `{ "condition": {}, ... }` fallback.
- Choiceless scenes: use `"next": "<id>"` to get a single `▶` continue button.
- Keep `d21_01` as the first key (it's the entry point).

---

*End of bible. The story data (`scenes.json`) is the source of truth; the engine is
generic and stable. The main unfinished work is asset generation, not code.*
