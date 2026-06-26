import * as THREE from "three";

/**
 * Camera rig for 360° drag-to-look navigation.
 * Camera stays at origin; yaw/pitch controlled by mouse/touch with inertia.
 */
export class SphereRig {
  readonly camera: THREE.PerspectiveCamera;

  private lon = 0;      // yaw  (degrees)
  private lat = 0;      // pitch (degrees, clamped ±85)
  private lonVel = 0;   // inertia
  private latVel = 0;
  private isDragging = false;
  private lastX = 0;
  private lastY = 0;

  /** Drag sensitivity (degrees per pixel). */
  sensitivity = 0.22;

  constructor(canvas: HTMLElement) {
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.01,
      SphereViewer_RADIUS * 2
    );
    this.camera.position.set(0, 0, 0);
    this.camera.rotation.order = "YXZ"; // yaw then pitch, no roll

    // ── Mouse ──────────────────────────────────────────────────────────────
    canvas.addEventListener("mousedown", (e) => {
      this.isDragging = true;
      this.lastX = e.clientX;
      this.lastY = e.clientY;
    });
    window.addEventListener("mouseup", () => { this.isDragging = false; });
    window.addEventListener("mousemove", (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.lastX;
      const dy = e.clientY - this.lastY;
      this.lonVel -= dx * this.sensitivity;
      this.latVel -= dy * this.sensitivity;
      this.lastX = e.clientX;
      this.lastY = e.clientY;
    });

    // ── Touch ──────────────────────────────────────────────────────────────
    let lastTX = 0, lastTY = 0;
    canvas.addEventListener("touchstart", (e) => {
      lastTX = e.touches[0].clientX;
      lastTY = e.touches[0].clientY;
    });
    canvas.addEventListener("touchmove", (e) => {
      e.preventDefault();
      const dx = e.touches[0].clientX - lastTX;
      const dy = e.touches[0].clientY - lastTY;
      this.lonVel -= dx * this.sensitivity;
      this.latVel -= dy * this.sensitivity;
      lastTX = e.touches[0].clientX;
      lastTY = e.touches[0].clientY;
    }, { passive: false });

    // ── DeviceOrientation (mobile VR mode, optional) ───────────────────────
    // Uncomment to enable gyroscope on mobile:
    // window.addEventListener("deviceorientation", (e) => {
    //   if (e.beta == null || e.gamma == null) return;
    //   this.lat = e.beta - 45;
    //   this.lon = -e.gamma;
    // });
  }

  update(): void {
    this.lon += this.lonVel * 0.06;
    this.lat += this.latVel * 0.06;
    this.lonVel *= 0.88;
    this.latVel *= 0.88;
    this.lat = Math.max(-85, Math.min(85, this.lat));

    this.camera.rotation.y = THREE.MathUtils.degToRad(-this.lon);
    this.camera.rotation.x = THREE.MathUtils.degToRad(-this.lat);
  }

  onResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }

  reset(): void {
    this.lon = 0; this.lat = 0; this.lonVel = 0; this.latVel = 0;
  }

  /** Look toward a lon/lat angle (for cutscene camera moves). */
  lookAt(lon: number, lat: number): void {
    this.lon = lon; this.lat = lat;
    this.lonVel = 0; this.latVel = 0;
  }
}

// Forward-declare to avoid import circle
const SphereViewer_RADIUS = 10;
