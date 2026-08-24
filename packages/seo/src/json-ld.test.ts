import { describe, expect, it } from "vitest";

import {
  breadcrumbJsonLd,
  organizationJsonLd,
  serializeJsonLd,
} from "./json-ld";

describe("typed JSON-LD", () => {
  it("creates ordered breadcrumbs", () => {
    const graph = breadcrumbJsonLd([
      { name: "Início", url: "https://www.ativpro.com/" },
      { name: "Soluções", url: "https://www.ativpro.com/solucoes/" },
    ]);

    expect(graph.itemListElement).toHaveLength(2);
  });

  it("escapes markup-sensitive characters when serialized", () => {
    const graph = organizationJsonLd({
      name: "ATIV <script>",
      url: "https://www.ativpro.com/",
    });

    expect(serializeJsonLd(graph)).not.toContain("<script>");
    expect(serializeJsonLd(graph)).toContain("\\u003cscript>");
  });
});
