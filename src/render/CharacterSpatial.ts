import * as THREE from "three";
import { CHARACTERS, type CharacterPose } from "../data/character-registry.js";

const W = 1.6, H = 2.4;

const VERT = /* glsl */`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
`;

const FRAG = /* glsl */`
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uTrust;
  uniform float uAnomaly;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    float aberr = 0.003 * uAnomaly;
    float cr = texture2D(uTexture, uv + vec2(aberr, 0.0)).r;
    float cg = texture2D(uTexture, uv).g;
    float cb = texture2D(uTexture, uv - vec2(aberr, 0.0)).b;
    vec3 col = vec3(cr, cg, cb);

    // White background removal (min-channel, not luminance)
    float minCh = min(col.r, min(col.g, col.b));
    float bgMask = 1.0 - smoothstep(0.86, 0.98, minCh);

    // Atmospheric color grade
    float grey = dot(col, vec3(0.333));
    col = mix(col, vec3(grey), 0.30);
    col *= 0.78;
    col = mix(col, col * vec3(0.60, 1.02, 0.96), 0.10);

    // Scan beam
    float scanPos = fract(uTime * 0.14);
    float beam = smoothstep(0.0, 0.012, abs(vUv.y - scanPos)) > 0.0 ? 0.0 : 0.18;
    col += beam * vec3(0.3, 1.0, 0.9);

    // Rectangular vignette — avoids circular edge blur
    float ex = smoothstep(0.0, 0.06, vUv.x) * smoothstep(1.0, 0.94, vUv.x);
    float ey = smoothstep(0.0, 0.04, vUv.y) * smoothstep(1.0, 0.96, vUv.y);
    float vign = ex * ey;

    float alpha = bgMask * vign * (0.72 + uTrust * 0.28);
    gl_FragColor = vec4(col, alpha);
  }
`;

export class CharacterSpatial {
  readonly group: THREE.Group;

  private mat: THREE.ShaderMaterial;
  private loader = new THREE.TextureLoader();

  constructor(initialImageUrl?: string) {
    this.group = new THREE.Group();

    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, side: THREE.DoubleSide,
      uniforms: {
        uTexture: { value: null },
        uTime:    { value: 0 },
        uTrust:   { value: 0.5 },
        uAnomaly: { value: 0 },
      },
      vertexShader: VERT,
      fragmentShader: FRAG,
    });

    const plane = new THREE.Mesh(new THREE.PlaneGeometry(W, H), this.mat);
    this.group.add(plane);
    this.group.add(this.buildBrackets());
    this.group.visible = false;

    if (initialImageUrl) this.setImage(initialImageUrl);
  }

  /** Load a static image pose. */
  setImage(url: string): void {
    this.loader.load(url, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      this.mat.uniforms.uTexture.value = tex;
      this.mat.needsUpdate = true;
    });
  }

  /**
   * Load a character pose from the registry.
   * Automatically picks video if supported; falls back to image.
   */
  setPose(characterId: string, poseName: string): void {
    const entry = CHARACTERS[characterId];
    if (!entry) { console.warn("[CharacterSpatial] unknown character:", characterId); return; }
    const pose = entry.poses[poseName];
    if (!pose) { console.warn("[CharacterSpatial] unknown pose:", poseName, "for", characterId); return; }
    this.applyPose(pose);
  }

  private applyPose(pose: CharacterPose): void {
    // Future: if pose.video is present and browser supports WebM alpha, use VideoTexture.
    // For now, always use static image.
    this.setImage(pose.image);
  }

  setPosition(x: number, y: number, z: number): void {
    this.group.position.set(x, y, z);
  }

  show()  { this.group.visible = true; }
  hide()  { this.group.visible = false; }

  update(t: number, trustG: number, anomaly: number): void {
    if (!this.group.visible) return;
    this.mat.uniforms.uTime.value    = t;
    this.mat.uniforms.uTrust.value   = trustG / 100;
    this.mat.uniforms.uAnomaly.value = anomaly / 10;
  }

  private buildBrackets(): THREE.LineSegments {
    const cx = W / 2, cy = H / 2, s = 0.12;
    const pts: [number, number][] = [
      [-cx, cy - s], [-cx, cy], [-cx + s, cy],  // top-left
      [cx - s, cy], [cx, cy], [cx, cy - s],      // top-right
      [cx, -cy + s], [cx, -cy], [cx - s, -cy],  // bottom-right
      [-cx + s, -cy], [-cx, -cy], [-cx, -cy + s], // bottom-left
    ];
    const verts: number[] = [];
    for (let i = 0; i < pts.length; i += 3) {
      verts.push(pts[i][0], pts[i][1], 0.001);
      verts.push(pts[i + 1][0], pts[i + 1][1], 0.001);
      verts.push(pts[i + 1][0], pts[i + 1][1], 0.001);
      verts.push(pts[i + 2][0], pts[i + 2][1], 0.001);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(verts), 3));
    return new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color: 0x38d6c8, transparent: true, opacity: 0.7 }));
  }
}
