import type { GameState } from "../types.js";

const STORAGE_KEY = "fmv360_state";

export class StateManager {
  private state: GameState;

  constructor(private readonly initial: GameState = {}) {
    const saved = localStorage.getItem(STORAGE_KEY);
    this.state = saved ? { ...initial, ...JSON.parse(saved) } : { ...initial };
  }

  get(): Readonly<GameState> { return this.state; }

  apply(effect?: Record<string, number>): void {
    if (!effect) return;
    for (const [k, v] of Object.entries(effect)) {
      this.state[k] = (this.state[k] ?? 0) + v;
    }
    this.save();
  }

  set(key: string, value: number): void {
    this.state[key] = value;
    this.save();
  }

  reset(): void {
    this.state = { ...this.initial };
    localStorage.removeItem(STORAGE_KEY);
  }

  checkCondition(cond?: Record<string, { gte?: number; lte?: number; eq?: number }>): boolean {
    if (!cond) return true;
    for (const [k, c] of Object.entries(cond)) {
      const v = this.state[k] ?? 0;
      if (c.gte !== undefined && v < c.gte) return false;
      if (c.lte !== undefined && v > c.lte) return false;
      if (c.eq  !== undefined && v !== c.eq)  return false;
    }
    return true;
  }

  private save(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
  }
}
