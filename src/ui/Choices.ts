import type { Choice } from "../types.js";

export class ChoicesUI {
  private container: HTMLElement;
  private onSelect: (goto: string, effect?: Record<string, number>) => void;

  constructor(
    container: HTMLElement,
    onSelect: (goto: string, effect?: Record<string, number>) => void
  ) {
    this.container = container;
    this.onSelect  = onSelect;
  }

  render(choices: Choice[]): void {
    this.container.innerHTML = "";
    choices.forEach((c, i) => {
      const btn = document.createElement("button");
      btn.className = "choice";
      btn.innerHTML = `<span class="tag">[${i + 1}]</span> ${c.label}`;
      btn.addEventListener("click", () => this.onSelect(c.goto, c.effect));
      this.container.appendChild(btn);
    });
  }
}
