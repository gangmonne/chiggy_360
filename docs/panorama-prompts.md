# Panorama generation prompts

Format requirement for every image: **equirectangular 360° panorama, 2:1 aspect ratio**
(e.g. 4096×2048 or 6144×3072), seamless left/right wrap, single coherent horizon line,
no visible camera/tripod/seams, no text/watermarks/UI.

## Shared style prefix

Prepend this to every prompt below for visual consistency across the set:

> Equirectangular 360-degree panorama, 2:1 aspect ratio, seamless horizontal wrap.
> Korean War, summer/early autumn 1950–1953, rural mountainous Korea. Muted,
> desaturated color palette — dust, khaki, faded green, overcast grays. Realistic
> but painterly illustration style (not photoreal), like a somber war-memoir
> graphic novel — visible brushwork, soft film-grain texture, no sharp digital
> clarity. Low contrast, no dramatic lens flares, no stylized fantasy lighting.
> No visible human faces in close-up (silhouettes / distant figures only — this
> is a background plate, characters are layered separately). No text, no logos,
> no watermark, no camera rig visible at nadir/zenith.

---

### 1. `tent_morning`
Inside a canvas military tent at dawn. Soft gray light filtering through the
tent fabric and a half-open flap. Bedrolls and packs on the dirt floor. Quiet,
still, no one standing. A faint view of a misty hillside through the tent opening.

### 2. `tent_night`
Inside the same canvas tent at night. Near-total darkness, lit only by a single
dim lantern or moonlight through the tent seam. Shadowed bedrolls. Heavy, close,
claustrophobic stillness.

### 3. `tent_rain`
Inside the tent during rain. Water beading and dripping through canvas seams,
a damp dirt floor, gray daylight through the tent flap showing rain falling outside.

### 4. `camp_morning`
An outdoor military supply-line camp at dawn/early morning. Rows of canvas
tents, cooking fires with thin smoke, scattered packs and A-frame carrying
racks (지게) leaning against crates, mountains in the misty background.
Sense of quiet routine, no large crowd.

### 5. `camp_load`
The same camp, midday harsh light, focused on a loading area: ammunition
crates stacked, ropes and straps, a few A-frame porter racks being loaded.
Functional, dusty, utilitarian — no people in frame (foreground empty for
character overlay).

### 6. `camp_evening`
The camp at dusk — long shadows, a low cooking fire glowing orange, a metal
rice bowl on a flat stone, mountains silhouetted against an orange-to-violet
sky. Quiet, contemplative mood.

### 7. `basecamp`
A larger forward military base camp — more tents, a few jeeps/trucks parked
at a distance, telephone wire strung between poles, Korean and a couple of
American military vehicles visible far in the background. Busier but still
hazy/distant, not action-packed.

### 8. `mountain_ascent`
A steep dirt mountain trail switchbacking upward through sparse pine and
scrub, seen as if looking up the slope mid-climb. Loose rock, dust, a faint
line of distant figures further up the trail. Harsh midday sun, heat haze.

### 9. `mountain_descent`
A similar mountain trail, but the view faces downhill — the trail dropping
away into a valley below, hazy distant rice paddies and roads. Slightly later
light (afternoon), dust kicked up on the path.

### 10. `mountain_rest`
A flat resting ledge partway up a mountain trail — a few flat rocks to sit on,
sparse pine shade, packs and A-frames leaned against a boulder. Calmer, soft
midday light filtering through thin tree cover.

### 11. `summit_clear`
The top of a bare mountain pass. Wide open sky, a 360° view of layered ridge
lines fading into haze in every direction, no structures, just rock, low scrub,
and wind-bent grass. Bright but hazy daylight.

### 12. `summit_busy`
The same kind of mountain-pass summit, but now cluttered with military
activity: stacked supply crates, a couple of US and Korean soldiers and
medics at a distance, hastily-rigged tarps, more chaotic energy. Slightly
overcast.

### 13. `combat_gunfire`
A mountain trail or ridge during a artillery/gunfire moment — distant smoke
plumes rising from a ridge or valley in the background, no visible explosions
or weapons in close frame, just smoke, dust haze, and an unsettled empty trail
in the foreground (the violence is implied, distant, not depicted graphically).

### 14. `rain_camp`
The outdoor camp area in heavy rain — gray sheets of rain, muddy ground,
tents sagging slightly under water weight, no fire lit, overall murky and cold.

### 15. `rain_ascent`
A muddy mountain trail in heavy rain, slick rock, water running down the
path in rivulets, low visibility/mist further up the slope.

### 16. `rain_descent`
A similar rain-soaked trail facing downhill, mud and runoff, a hazy gray
valley below barely visible through the rain.

### 17. `valley_open`
A wide, exposed valley floor seen from a low ridge — rice paddies long gone
fallow or trampled, a narrow river or stream cutting through, very open and
exposed with no cover, distant tree line at the valley's far edge. Tense,
flat light, no shadows to hide in.

### 18. `burned_village`
A small rural Korean village seen from a near distance — collapsed thatch
roofs, charred timber framing, one or two structures still partially standing,
empty dirt paths between houses, no people. Heavy, somber, daylight but
overcast.

### 19. `bear_encounter`
A narrow forest mountain trail at dusk/dim light, dense pine and underbrush
close on both sides, the trail curving so visibility ahead is limited.
Atmosphere of sudden tension — no bear visible, just the claustrophobic
forest pressing in and a sense of something unseen nearby.

### 20. `us_camp_scene`
A section of the camp where US forces are visibly present — a US military
jeep or supply truck, ration crates with English-language stencil markings,
maybe a coil of communication wire, a couple of distant US soldiers in 1950s
fatigues. Slightly more orderly/equipped-looking than the Korean porter camp.

### 21. `truck_road`
A dirt rural road at dawn, a flatbed military truck (cab visible at one edge
or just out of frame) idling with its bed open, fields and a small village
visible in the background, a handful of distant figures being gathered/loaded.

### 22. `home_paddy`
A rural rice paddy at dawn, lush green young rice in shallow water, a small
thatched-roof farmhouse at the field's edge, low misty hills in the distance.
Peaceful, pre-war calm — visually the gentlest, most pastoral image in the set.

### 23. `ending_hill`
A solitary grass-covered hill, distinct from the rocky mountain passes
elsewhere in the set — rounder, gentler, wind-bent tall grass, no military
equipment or camp debris anywhere, wide open sky. Same desaturated palette
but with a slightly more open, melancholy, "after everything" quality —
empty and quiet rather than tense.

---

## File destinations

Save each generated image to `public/panorama/archetypes/<name>.jpg` matching
the archetype names above exactly — `scenes.json` already references these
paths and needs no further changes once the files exist.
