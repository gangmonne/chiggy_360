export class NarrativeLayer {
  private el: HTMLElement;
  private timeout: ReturnType<typeof setTimeout> | null = null;
  private _typing = false;

  get isTyping(): boolean { return this._typing; }

  constructor(el: HTMLElement) { this.el = el; }

  type(text: string, speed = 38): void {
    this.cancel();
    this._typing = true;
    this.el.textContent = "";
    let i = 0;
    const cursor = document.createElement("span");
    cursor.className = "narrative-cursor";
    cursor.textContent = "▮";

    const tick = () => {
      if (i < text.length) {
        this.el.textContent = text.slice(0, ++i);
        this.el.appendChild(cursor);
        this.timeout = setTimeout(tick, speed);
      } else {
        cursor.remove();
        this._typing = false;
      }
    };
    tick();
  }

  cancel(): void {
    if (this.timeout) { clearTimeout(this.timeout); this.timeout = null; }
    this._typing = false;
  }
}
