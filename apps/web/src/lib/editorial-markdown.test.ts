import { describe, expect, it } from "vitest";

import {
  headingId,
  isSafeEditorialHref,
  parseEditorialMarkdown,
  plainEditorialText,
} from "./editorial-markdown";

describe("editorial markdown", () => {
  it("keeps only safe internal hrefs", () => {
    expect(isSafeEditorialHref("/solucoes/")).toBe(true);
    expect(isSafeEditorialHref("#setores")).toBe(true);
    expect(isSafeEditorialHref("mailto:contato@ativpro.com")).toBe(true);
    expect(isSafeEditorialHref("tel:+5511911110115")).toBe(true);
    expect(isSafeEditorialHref("https://example.com")).toBe(false);
    expect(isSafeEditorialHref("mailto:javascript:alert(1)")).toBe(false);
  });

  it("builds heading ids without accents", () => {
    expect(headingId("Não sabe por onde começar")).toBe(
      "nao-sabe-por-onde-comecar",
    );
  });

  it("parses headings, lists, tables, links and omits reviewer notes", () => {
    const blocks = parseEditorialMarkdown(`## Soluções

Texto com [Abrir página](/solucoes/audiovisual/) e **ênfase**.

- Item

| Coluna | Destino |
| --- | --- |
| Corporativo | [Corporativo](/setores/corporativo/) |

## Notas ao revisor

Não renderizar.
`);

    expect(blocks.map((block) => block.type)).toEqual([
      "h2",
      "p",
      "ul",
      "table",
    ]);
    expect(blocks[0]).toMatchObject({ type: "h2", id: "solucoes" });
    expect(plainEditorialText(blocks[0] && "inlines" in blocks[0] ? blocks[0].inlines : [])).toBe(
      "Soluções",
    );

    const paragraph = blocks[1];
    expect(paragraph?.type).toBe("p");
    if (paragraph?.type === "p") {
      expect(paragraph.inlines).toEqual([
        { type: "text", value: "Texto com " },
        {
          type: "link",
          href: "/solucoes/audiovisual/",
          value: "Abrir página",
        },
        { type: "text", value: " e " },
        { type: "strong", value: "ênfase" },
        { type: "text", value: "." },
      ]);
    }

    const table = blocks[3];
    expect(table?.type).toBe("table");
    if (table?.type === "table") {
      expect(table.headers).toEqual(["Coluna", "Destino"]);
      expect(table.rows[0]?.[1]).toEqual([
        { type: "link", href: "/setores/corporativo/", value: "Corporativo" },
      ]);
    }
  });
});
