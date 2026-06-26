import * as THREE from "three";

/**
 * G's particle cloud — an incomplete human silhouette.
 * Coherence follows trustG: high trust = tight human form, low trust = scattered.
 */
export class GParticleCloud {
  readonly mesh: THREE.Points;

  private readonly N = 3000;
  private targets!: Float32Array;
  private current!: Float32Array;
  private scatter!: Float32Array;
  private phases!: Float32Array;

  constructor() {
    this.buildSilhouette();

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(this.current, 3));

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uTrust: { value: 0.5 }, uAnomaly: { value: 0 } },
      vertexShader: `
        uniform float uTime;
        uniform float uTrust;
        varying float vA;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(2.8 / -mv.z * 9.0, 0.5, 5.0);
          vA = 0.4 + uTrust * 0.6;
        }
      `,
      fragmentShader: `
        varying float vA;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.1, d) * vA;
          gl_FragColor = vec4(0.22, 0.86, 0.80, a);
        }
      `,
    });

    this.mesh = new THREE.Points(geo, mat);
    this.mesh.position.set(0.65, -0.15, -3.6);
    this.mesh.visible = false;
  }

  private buildSilhouette() {
    this.targets = new Float32Array(this.N * 3);
    this.current = new Float32Array(this.N * 3);
    this.scatter  = new Float32Array(this.N * 3);
    this.phases   = new Float32Array(this.N);

    // Body region allocation
    const regions = [
      { frac: 0.14, fn: (t: number) => this.head(t) },
      { frac: 0.03, fn: (t: number) => this.neck(t) },
      { frac: 0.28, fn: (t: number) => this.torso(t) },
      { frac: 0.22, fn: (t: number) => this.arms(t) },
      { frac: 0.10, fn: (t: number) => this.hips(t) },
      { frac: 0.23, fn: (t: number) => this.legs(t) },
    ];

    let idx = 0;
    for (const r of regions) {
      const count = Math.round(this.N * r.frac);
      for (let i = 0; i < count && idx < this.N; i++, idx++) {
        const t = Math.random();
        const p = r.fn(t);
        this.targets[idx * 3]     = p.x;
        this.targets[idx * 3 + 1] = p.y;
        this.targets[idx * 3 + 2] = p.z;
        // Random initial scatter
        this.current[idx * 3]     = (Math.random() - 0.5) * 3;
        this.current[idx * 3 + 1] = (Math.random() - 0.5) * 3;
        this.current[idx * 3 + 2] = (Math.random() - 0.5) * 0.5;
        this.scatter[idx * 3]     = (Math.random() - 0.5);
        this.scatter[idx * 3 + 1] = (Math.random() - 0.5);
        this.scatter[idx * 3 + 2] = (Math.random() - 0.5) * 0.3;
        this.phases[idx] = Math.random() * Math.PI * 2;
      }
    }
  }

  private head(t: number)  { const a = t * Math.PI * 2; return { x: Math.cos(a) * 0.14, y: 0.82 + Math.sin(a) * 0.18, z: 0 }; }
  private neck(_: number)  { return { x: (Math.random() - 0.5) * 0.06, y: 0.58 + Math.random() * 0.12, z: 0 }; }
  private torso(t: number) { const w = 0.22 - Math.abs(t - 0.5) * 0.2; return { x: (Math.random() - 0.5) * w * 2, y: 0.05 + t * 0.52, z: 0 }; }
  private arms(t: number)  { const side = t < 0.5 ? 1 : -1; const s = (t % 0.5) * 2; return { x: side * (0.22 + s * 0.28), y: 0.3 + (1 - s) * 0.28 - s * 0.1, z: 0 }; }
  private hips(t: number)  { const w = 0.18 + Math.abs(t - 0.5) * 0.14; return { x: (Math.random() - 0.5) * w * 2, y: -0.05 + t * 0.12, z: 0 }; }
  private legs(t: number)  { const side = t < 0.5 ? 0.08 : -0.08; const s = (t % 0.5) * 2; return { x: side + (Math.random() - 0.5) * 0.09, y: -0.12 - s * 0.55, z: 0 }; }

  show()  { this.mesh.visible = true; }
  hide()  { this.mesh.visible = false; }

  update(t: number, trustG: number, anomaly: number, speaking: boolean) {
    if (!this.mesh.visible) return;

    const mat = this.mesh.material as THREE.ShaderMaterial;
    mat.uniforms.uTime.value  = t;
    mat.uniforms.uTrust.value = trustG / 100;
    mat.uniforms.uAnomaly.value = anomaly / 10;

    const trust01 = trustG / 100;
    const pull    = 0.015 + trust01 * 0.085;
    const scatter  = (1 - trust01) * 0.22;
    const glitch  = anomaly > 4 ? 0.015 : 0;

    const pos = this.mesh.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < this.N; i++) {
      if (Math.random() < glitch) {
        this.current[i * 3]     += (Math.random() - 0.5) * 0.8;
        this.current[i * 3 + 1] += (Math.random() - 0.5) * 0.8;
      }

      const wave = speaking ? Math.sin(t * 6 + this.phases[i]) * 0.02 : 0;

      for (let axis = 0; axis < 3; axis++) {
        const tgt = this.targets[i * 3 + axis]
          + this.scatter[i * 3 + axis] * scatter
          + (axis === 1 ? wave : 0);
        this.current[i * 3 + axis] += (tgt - this.current[i * 3 + axis]) * pull;
      }

      pos.array[i * 3]     = this.current[i * 3];
      pos.array[i * 3 + 1] = this.current[i * 3 + 1];
      pos.array[i * 3 + 2] = this.current[i * 3 + 2];
    }
    pos.needsUpdate = true;
  }
}
