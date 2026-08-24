import { describe, expect, it } from "vitest";

import { foundationChecks, hasUniqueFoundationChecks } from "./foundation";

describe("foundation checks", () => {
  it("keeps the published checklist free of duplicate entries", () => {
    expect(hasUniqueFoundationChecks(foundationChecks)).toBe(true);
  });

  it("detects duplicate entries", () => {
    expect(hasUniqueFoundationChecks(["SSR", "SSR"])).toBe(false);
  });
});
