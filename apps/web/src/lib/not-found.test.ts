import { describe, expect, it } from "vitest";

import { foundationHeadingClass } from "./foundation";
import { notFoundPageContract } from "./not-found";

describe("not-found surface", () => {
  it("uses the display heading role and the same skip target as the foundation", () => {
    expect(notFoundPageContract.headingClass).toBe(foundationHeadingClass);
    expect(notFoundPageContract.skipTarget).toBe("conteudo-principal");
  });

  it("keeps the 404 title unique and non-indexable in contract", () => {
    expect(notFoundPageContract.title).toContain("não encontrada");
    expect(notFoundPageContract.heading.split(" ").length).toBeGreaterThan(1);
  });
});
