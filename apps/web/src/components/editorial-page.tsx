import type { ContentDocument } from "@ativ/content";
import type { ReactNode } from "react";
import Image from "next/image";

import {
  editorialIndexHeadings,
  editorialNextLink,
  editorialRelatedLinks,
  firstLink,
  groupEditorialSections,
  linksInBlocks,
  type EditorialSection,
} from "@/lib/editorial-compose";
import {
  parseEditorialMarkdown,
  plainEditorialText,
  type EditorialBlock,
  type EditorialInline,
} from "@/lib/editorial-markdown";
import {
  editorialCrumbs,
  editorialMedia,
  editorialPageClass,
  editorialPageContract,
} from "@/lib/editorial-page";
import {
  isCurrentNavHref,
  isSolutionSurface,
  solutionMenu,
} from "@/lib/site-navigation";

function InlineText({ parts }: { parts: readonly EditorialInline[] }) {
  return parts.map((part, index) => {
    if (part.type === "strong") return <strong key={index}>{part.value}</strong>;
    if (part.type === "link") {
      return (
        <a key={index} href={part.href}>
          {part.value}
        </a>
      );
    }
    return <span key={index}>{part.value}</span>;
  });
}

function SpecificationTable({
  block,
}: {
  block: Extract<EditorialBlock, { type: "table" }>;
}) {
  const rowHeading = block.headers.length === 2;

  return (
    <div className="ativ-especificacao">
      <table className="ativ-ficha">
        <thead>
          <tr>
            {block.headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => {
                const content = <InlineText parts={cell} />;
                if (rowHeading && cellIndex === 0) {
                  return (
                    <th key={cellIndex} scope="row">
                      {content}
                    </th>
                  );
                }
                return (
                  <td
                    key={cellIndex}
                    data-rotulo={block.headers[cellIndex] ?? ""}
                  >
                    {content}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function integrationCards(blocks: readonly EditorialBlock[]) {
  const cards: { title: string; href: string; lede: string }[] = [];
  let current: { title: string; href: string; lede: string } | undefined;

  const flush = () => {
    if (current?.href) cards.push(current);
    current = undefined;
  };

  for (const block of blocks) {
    if (block.type === "h3") {
      flush();
      current = {
        title: plainEditorialText(block.inlines),
        href: "",
        lede: "",
      };
      continue;
    }
    if (!current) continue;
    if (block.type === "p") {
      const link = firstLink(block.inlines);
      if (link) current.href = link.href;
      else current.lede = plainEditorialText(block.inlines);
    }
  }
  flush();
  return cards;
}

function SectionBlocks({
  section,
  ctaHref,
}: {
  section: EditorialSection;
  ctaHref?: string;
}) {
  const flowList = section.role === "process" || section.role === "architecture";
  const cards =
    section.role === "integrations" ? integrationCards(section.blocks) : [];

  if (cards.length > 0) {
    return (
      <ul className="ativ-carrossel" aria-label="Soluções">
        {cards.map((card) => (
          <li key={card.href}>
            <a className="ativ-cartao ativ-cartao--interativo" href={card.href}>
              <span className="ativ-rotulo">Solução</span>
              <strong className="ativ-texto">{card.title}</strong>
              {card.lede ? <p className="ativ-texto">{card.lede}</p> : null}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  if (section.role === "integrations") {
    const links = linksInBlocks(section.blocks);
    if (links.length > 0) {
      return (
        <ul className="ativ-carrossel" aria-label="Soluções relacionadas">
          {links.map((link) => (
            <li key={link.href}>
              <a className="ativ-cartao ativ-cartao--interativo" href={link.href}>
                <span className="ativ-rotulo">Solução</span>
                <strong className="ativ-texto">{link.label}</strong>
              </a>
            </li>
          ))}
        </ul>
      );
    }
  }

  return section.blocks.map((block, index) => {
    if (block.type === "h3") {
      return (
        <h3 id={block.id} key={block.id}>
          <InlineText parts={block.inlines} />
        </h3>
      );
    }

    if (block.type === "p") {
      const link = firstLink(block.inlines);
      if (
        section.role === "next" &&
        ctaHref &&
        link?.href === ctaHref &&
        plainEditorialText(block.inlines) === link.label
      ) {
        return null;
      }
      return (
        <p className="ativ-texto ativ-medida" key={`p-${index}`}>
          <InlineText parts={block.inlines} />
        </p>
      );
    }

    if (block.type === "ul" || block.type === "ol") {
      if (
        section.role === "next" &&
        block.items.every((item) => firstLink(item)?.href !== "/contato/")
      ) {
        return null;
      }
      const List = block.type;
      return (
        <List
          className={
            flowList && block.type === "ol" ? "ativ-fluxo" : "ativ-texto ativ-medida"
          }
          key={`${block.type}-${index}`}
        >
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>
              <InlineText parts={item} />
            </li>
          ))}
        </List>
      );
    }

    if (block.type === "pre") {
      return (
        <pre key={`pre-${index}`}>
          <code>{block.value}</code>
        </pre>
      );
    }

    if (block.type !== "table") return null;

    return <SpecificationTable block={block} key={`table-${index}`} />;
  });
}

function sectionLinks(
  items: readonly { id: string; label: string }[],
  catalog?: { current: string; items: readonly { href: string; label: string }[] },
): ReactNode {
  if (!catalog && items.length < 2) return null;

  const titleId = catalog ? "menu-solucoes-titulo" : "indice-pagina-titulo";

  return (
    <nav className="ativ-indice" aria-labelledby={titleId}>
      {catalog ? (
        <>
          <p className="ativ-rotulo" id="menu-solucoes-titulo">
            Soluções
          </p>
          <ol className="ativ-indice__solucoes" role="list">
            {catalog.items.map((item) => (
              <li key={item.href}>
                {isCurrentNavHref(catalog.current, item.href) ? (
                  <span aria-current="page">{item.label}</span>
                ) : (
                  <a href={item.href}>{item.label}</a>
                )}
              </li>
            ))}
          </ol>
        </>
      ) : null}
      {items.length >= 2 ? (
        <>
          <p className="ativ-rotulo" id="indice-pagina-titulo">
            Nesta página
          </p>
          <ol role="list">
            {items.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ol>
        </>
      ) : null}
    </nav>
  );
}

export function EditorialPage({
  document,
  beforeBody,
}: {
  document: ContentDocument;
  beforeBody?: ReactNode;
}) {
  const { frontmatter } = document;
  const blocks = parseEditorialMarkdown(document.body);
  const sections = groupEditorialSections(blocks);
  const media = editorialMedia(document);
  const related = editorialRelatedLinks(document, sections);
  const next = editorialNextLink(document);
  const mainSections = sections.filter((section) => section.role !== "related");
  const sectorBody =
    frontmatter.page_type === "sector" ||
    frontmatter.page_type === "sectors_index";

  return (
    <main
      className={editorialPageClass(frontmatter.page_type)}
      id={editorialPageContract.skipTarget}
      tabIndex={-1}
    >
      <nav aria-label="Trilha">
        <ol className="ativ-trilha">
          {editorialCrumbs(document).map((crumb) => (
            <li key={crumb.label}>
              {crumb.href ? (
                <a href={crumb.href}>{crumb.label}</a>
              ) : (
                <span aria-current="page">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <header className="ativ-abertura-pagina">
        <div
          className={
            media ? "ativ-container ativ-com-lateral" : "ativ-container"
          }
        >
          <div className="ativ-pilha ativ-pilha--5">
            <p className="ativ-rotulo">{frontmatter.eyebrow}</p>
            <p className="ativ-dado">{editorialPageContract.reviewLabel}</p>
            <h1 className={editorialPageContract.headingClass}>
              {frontmatter.heading}
            </h1>
            <p className="ativ-texto ativ-medida">{frontmatter.lede}</p>
            <div className="ativ-linha">
              <a
                className="ativ-btn ativ-btn--primario"
                href={frontmatter.primary_cta_href}
              >
                {frontmatter.primary_cta}
              </a>
              <a
                className="ativ-btn ativ-btn--secundario"
                href={frontmatter.secondary_cta_href}
              >
                {frontmatter.secondary_cta}
              </a>
            </div>
          </div>
          {media ? (
            <figure className="ativ-figura ativ-figura--espaco">
              <div className="ativ-quadro">
                <Image
                  src={media.src}
                  alt={media.alt}
                  width={media.width}
                  height={media.height}
                  priority
                  decoding="async"
                />
              </div>
              <figcaption className="ativ-legenda">{media.caption}</figcaption>
            </figure>
          ) : null}
        </div>
      </header>

      <div className="ativ-pagina__corpo">
        <div
          className={
            sectorBody
              ? "ativ-container ativ-pilha ativ-pilha--7"
              : "ativ-container ativ-com-lateral"
          }
        >
          {sectionLinks(
            editorialIndexHeadings(
              sections,
              beforeBody ? [{ id: "canais", label: "Dados de contato" }] : [],
              related.length > 0,
            ),
            isSolutionSurface(frontmatter.page_type)
              ? { current: frontmatter.route, items: solutionMenu }
              : undefined,
          )}
          <div className="ativ-pilha ativ-pilha--7">
            {beforeBody}
            {mainSections.map((section) => (
              <section key={section.heading?.id ?? section.role}>
                {section.heading ? (
                  <h2 className="ativ-titulo-secao" id={section.heading.id}>
                    <InlineText parts={section.heading.inlines} />
                  </h2>
                ) : null}
                <SectionBlocks
                  section={section}
                  ctaHref={frontmatter.primary_cta_href}
                />
                {section.role === "next" && frontmatter.primary_cta_href ? (
                  <div className="ativ-linha">
                    <a
                      className="ativ-btn ativ-btn--primario"
                      href={frontmatter.primary_cta_href}
                    >
                      {frontmatter.primary_cta}
                    </a>
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <aside
          className="ativ-relacionados"
          aria-labelledby="leituras-relacionadas"
        >
          <div className="ativ-container ativ-pilha ativ-pilha--5">
            <h2 className="ativ-titulo-secao" id="leituras-relacionadas">
              Leituras relacionadas
            </h2>
            <ul role="list">
              {related.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      ) : null}

      {next ? (
        <nav className="ativ-proxima" aria-label="Próxima leitura">
          <div className="ativ-container">
            <a href={next.href}>
              <span className="ativ-rotulo">Próxima leitura</span>
              <span className="ativ-texto">{next.label}</span>
            </a>
          </div>
        </nav>
      ) : null}
    </main>
  );
}
