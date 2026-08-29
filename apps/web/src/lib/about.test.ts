import { describe, expect, it } from "vitest";

import { aboutPageContract } from "./about";
import { foundationHeadingClass } from "./foundation";

describe("about surface", () => {
  it("uses the display heading role and the same skip target as the foundation", () => {
    expect(aboutPageContract.headingClass).toBe(foundationHeadingClass);
    expect(aboutPageContract.skipTarget).toBe("conteudo-principal");
    expect(aboutPageContract.pathname).toBe("/sobre/");
  });

  it("reserves the inventory URL without invented institutional claims", () => {
    const published = [
      aboutPageContract.title,
      aboutPageContract.description,
      aboutPageContract.heading,
      aboutPageContract.summary,
      ...aboutPageContract.limits,
      ...aboutPageContract.plannedBlocks,
    ].join(" ");

    expect(published).not.toMatch(/ATIV PRO/i);
    expect(published).not.toMatch(/\b\d{2,}\s+anos\b/i);
    expect(aboutPageContract.forbiddenName).toBe("ATIV Pro");
    expect(aboutPageContract.summary).toContain("A empresa é ATIV.");
  });
});
