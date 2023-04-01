import { generateHash } from "./generateHash";

export interface Rule {
  id: number;
  css: string;
}

export class Sheet {
  private rules: Rule[];
  constructor() {
    this.rules = [];
  }

  addRule(css: string): number {
    const id = generateHash(css);
    const existingRule = this.rules.find((rule) => rule.id === id);
    if (!existingRule) this.rules.push({ id, css });
    return id;
  }

  getCSS(): string {
    return this.rules.map((rule) => `.${rule.id} {${rule.css}}`).join("\n");
  }
}