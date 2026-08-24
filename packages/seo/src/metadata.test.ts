import { describe, expect, it } from "vitest";

import { buildMetadata, buildPaidLandingMetadata } from "./metadata";
import { canonicalUrl, resolveSiteOrigin } from "./site-url";

describe("metadata contract", () => {
  it("builds absolute canonical and social metadata on the server", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://www.ativpro.com";
    const metadata = buildMetadata({
      title: "Engenharia audiovisual | ATIV",
      description: "Conteúdo técnico verificável.",
      pathname: "/solucoes/audiovisual/",
      index: true,
    });

    expect(metadata.alternates?.canonical).toBe(
      "https://www.ativpro.com/solucoes/audiovisual/",
    );
    expect(metadata.robots).toMatchObject({ index: true, follow: true });
    expect(metadata.openGraph).toMatchObject({ siteName: "ATIV" });
  });

  it("forces paid landing metadata to noindex,follow", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://www.ativpro.com";
    const metadata = buildPaidLandingMetadata({
      title: "Avaliação técnica | ATIV",
      description: "Infraestrutura para uma futura landing page.",
      pathname: "/lp/exemplo/",
    });

    expect(metadata.robots).toMatchObject({ index: false, follow: true });
  });

  it("rejects unsafe canonical inputs", () => {
    expect(() =>
      canonicalUrl("//example.com/path", "https://www.ativpro.com"),
    ).toThrow();
    expect(() => resolveSiteOrigin("javascript:alert(1)")).toThrow();
  });
});
