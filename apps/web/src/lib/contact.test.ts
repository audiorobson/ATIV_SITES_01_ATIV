import { describe, expect, it } from "vitest";

import { foundationHeadingClass } from "./foundation";
import { contactPageContract } from "./contact";

describe("contact surface", () => {
  it("uses the display heading role and the same skip target as the foundation", () => {
    expect(contactPageContract.headingClass).toBe(foundationHeadingClass);
    expect(contactPageContract.skipTarget).toBe("conteudo-principal");
    expect(contactPageContract.pathname).toBe("/contato/");
  });

  it("reserves the inventory URL without placeholder contact data", () => {
    const published = [
      contactPageContract.title,
      contactPageContract.description,
      contactPageContract.heading,
      contactPageContract.summary,
      ...contactPageContract.limits,
      ...contactPageContract.plannedFields,
    ].join(" ");

    expect(published).not.toContain(contactPageContract.forbiddenPhone);
    expect(published).not.toMatch(/@ativpro\.com/i);
    expect(contactPageContract.forbiddenPhone).toBe("+55 (11) 0000-0000");
  });
});
