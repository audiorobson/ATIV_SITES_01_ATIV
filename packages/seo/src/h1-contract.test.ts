import { describe, expect, it } from "vitest";

import { inspectH1 } from "./h1-contract";

describe("H1 semantic contract", () => {
  it("accepts one meaningful semantic heading", () => {
    expect(
      inspectH1("<main><h1>Engenharia audiovisual</h1></main>").errors,
    ).toEqual([]);
  });

  it("rejects the legacy pipe-only heading", () => {
    expect(inspectH1("<h1>|</h1>").errors).toContain(
      "H1 must contain meaningful text.",
    );
  });

  it("rejects character-by-character spans", () => {
    const result = inspectH1(
      "<h1><span>A</span><span>T</span><span>I</span><span>V</span></h1>",
    );

    expect(result.errors).toContain(
      "H1 must not split words into character spans.",
    );
  });
});
