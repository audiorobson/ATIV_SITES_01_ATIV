import { describe, expect, it } from "vitest";

import { routePlanPathnames } from "./route-plan";

describe("route plan pathnames", () => {
  it("reads the first column and ignores the header", () => {
    const csv = [
      "route,purpose",
      "/contato/,contact",
      "/sobre/,company",
      "",
    ].join("\n");

    expect(routePlanPathnames(csv)).toEqual(["/contato/", "/sobre/"]);
  });
});
