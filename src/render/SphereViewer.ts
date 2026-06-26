import * as THREE from "three";

/**
 * Renders an equirectangular 2:1 panorama inside a sphere.
 * Camera sits at the origin and looks around freely.
 */
export class SphereViewer {
  readonly scene: THREE.Scene;

  private sphere: THREE.Mesh;
  private mat: THREE.MeshBasicMaterial;

  /** Sphere radius — hotspots sit just inside at 0.98× */
  static readonly RADIUS = 10;

  constructor() {
    this.scene = new THREE.Scene();

    // Invert the sphere normals so the texture faces inward
    const geo = new THREE.SphereGeometry(SphereViewer.RADIUS, 64, 32);
    geo.scale(-1, 1, 1);

    this.mat = new THREE.MeshBasicMaterial({ side: THREE.FrontSide });
    this.sphere = new THREE.Mesh(geo, this.mat);
    this.scene.add(this.sphere);
  }

  /** Load a new equirectangular panorama. Returns a promise that resolves when ready. */
  async setScene(panoramaUrl?: string): Promise<void> {
    if (!panoramaUrl) return;
    return new Promise((resolve) => {
      new THREE.TextureLoader().load(
        panoramaUrl,
        (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          this.mat.map = tex;
          this.mat.needsUpdate = true;
          resolve();
        },
        undefined,
        () => {
          console.warn("[SphereViewer] failed to load", panoramaUrl);
          resolve();
        }
      );
    });
  }

  /**
   * Convert lon/lat angles to a 3D world position on the sphere.
   * lon = 0 is +Z (forward), increases counterclockwise.
   * lat = 0 is the horizon, positive = up.
   */
  static lonLatToWorld(lon: number, lat: number): THREE.Vector3 {
    const phi   = THREE.MathUtils.degToRad(90 - lat);
    const theta = THREE.MathUtils.degToRad(lon);
    const r = SphereViewer.RADIUS * 0.98;
    return new THREE.Vector3(
      -Math.sin(phi) * Math.cos(theta),
       Math.cos(phi),
       Math.sin(phi) * Math.sin(theta)
    ).multiplyScalar(r);
  }
}
