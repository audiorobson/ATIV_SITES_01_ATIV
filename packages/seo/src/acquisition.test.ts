import { describe, expect, it } from "vitest";

import { readAcquisitionContext } from "./acquisition";

describe("acquisition contract", () => {
  it("keeps approved campaign identifiers and ignores unknown parameters", () => {
    const params = new URLSearchParams(
      "utm_source=google&gclid=abc123&email=person@example.com",
    );

    expect(readAcquisitionContext(params)).toEqual({
      utm_source: "google",
      gclid: "abc123",
    });
  });
});
