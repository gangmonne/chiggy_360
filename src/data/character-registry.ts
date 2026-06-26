// ── Character asset registry ───────────────────────────────────────────────
//
// Each character has named "poses". A pose can be:
//   - image only  → static webp/png
//   - image + video → video plays on the 3D plane; image is fallback
//   - image + video + videoFallback → WebM alpha for Chrome, MP4 split-alpha for Safari
//
// To swap an image for a video later, add `video` and `videoFallback` keys —
// no other code changes needed.

export interface CharacterPose {
  /** Static image (always required as fallback). White background is ok — shader removes it. */
  image: string;
  /** WebM VP9 with alpha channel (Chrome / Firefox). */
  video?: string;
  /** MP4 with split-alpha (top=color, bottom=mask) for Safari. Needs shader mode "split". */
  videoFallback?: string;
}

export interface CharacterEntry {
  id: string;
  poses: Record<string, CharacterPose>;
}

// ── Add your characters here ──────────────────────────────────────────────
export const CHARACTERS: Record<string, CharacterEntry> = {
  subject_a: {
    id: "subject_a",
    poses: {
      idle: {
        image: "/characters/subject_a/idle.webp",
        // video: "/characters/subject_a/idle.webm",
        // videoFallback: "/characters/subject_a/idle_alpha.mp4",
      },
      talk: {
        image: "/characters/subject_a/talk.webp",
      },
    },
  },

  // Add more characters:
  // subject_b: { id: "subject_b", poses: { idle: { image: "..." } } },
};
