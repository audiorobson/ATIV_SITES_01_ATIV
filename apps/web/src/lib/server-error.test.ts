import { describe, expect, it } from "vitest";

import { foundationHeadingClass } from "./foundation";
import { serverErrorPageContract } from "./server-error";

describe("server-error surface", () => {
  it("uses the display heading role and the same skip target as the foundation", () => {
    expect(serverErrorPageContract.headingClass).toBe(foundationHeadingClass);
    expect(serverErrorPageContract.skipTarget).toBe("conteudo-principal");
  });

  it("keeps the 500 title unique and non-indexable in contract", () => {
    expect(serverErrorPageContract.title).toContain("servidor");
    expect(serverErrorPageContract.heading.split(" ").length).toBeGreaterThan(
      1,
    );
  });
});
