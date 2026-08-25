import { describe, expect, it } from "vitest";

import {
  foundationChecks,
  foundationPageContract,
  hasUniqueFoundationChecks,
} from "./foundation";

describe("foundation checks", () => {
  it("keeps the published checklist free of duplicate entries", () => {
    expect(hasUniqueFoundationChecks(foundationChecks)).toBe(true);
  });

  it("detects duplicate entries", () => {
    expect(hasUniqueFoundationChecks(["SSR", "SSR"])).toBe(false);
  });

  it("keeps the internal page section ids unique and aligned to the skip target", () => {
    const ids = [
      foundationPageContract.skipTarget,
      ...foundationPageContract.sectionIds,
    ];

    expect(new Set(ids).size).toBe(ids.length);
    expect(foundationPageContract.pageClass).toBe("ativ-pagina--solucao");
  });
});
