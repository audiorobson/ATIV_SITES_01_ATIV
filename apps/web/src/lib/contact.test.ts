import { describe, expect, it } from "vitest";

import { foundationHeadingClass } from "./foundation";
import { contactPageContract, verifiedContact } from "./contact";

describe("contact surface", () => {
  it("uses the display heading role and the same skip target as the foundation", () => {
    expect(contactPageContract.headingClass).toBe(foundationHeadingClass);
    expect(contactPageContract.skipTarget).toBe("conteudo-principal");
    expect(contactPageContract.pathname).toBe("/contato/");
  });

  it("publishes verified channels and keeps the placeholder out", () => {
    expect(verifiedContact.email).toBe("contato@ativpro.com");
    expect(verifiedContact.emailHref).toBe("mailto:contato@ativpro.com");
    expect(verifiedContact.phoneDisplay).toBe("(11) 91111-0115");
    expect(verifiedContact.phoneHref).toBe("tel:+5511911110115");
    expect(verifiedContact.address).toContain("Joaquim Barreto");
    expect(verifiedContact.address).toContain("06700-170");
    expect(verifiedContact.phoneDisplay).not.toBe(
      contactPageContract.forbiddenPhone,
    );
    expect(contactPageContract.forbiddenPhone).toBe("+55 (11) 0000-0000");
    expect(contactPageContract.limits.join(" ")).not.toContain(
      contactPageContract.forbiddenPhone,
    );
  });
});
