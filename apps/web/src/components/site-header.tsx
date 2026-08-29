import Image from "next/image";

import { SiteLogo } from "./site-logo";
import {
  contactCta,
  isNavBranch,
  primaryNav,
  type SiteNavBranch,
  type SiteNavFeatured,
  type SiteNavItem,
} from "@/lib/site-navigation";

function FeaturedLink({ card }: { card: SiteNavFeatured }) {
  return (
    <a className="ativ-nav__destaque" href={card.href}>
      <span className="ativ-quadro">
        <Image
          src={card.src}
          alt={card.alt}
          width={card.width}
          height={card.height}
          sizes="(max-width: 860px) 100vw, 22rem"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      </span>
      <span className="ativ-rotulo">{card.rotulo}</span>
      <strong>{card.title}</strong>
    </a>
  );
}

function NavPanel({ branch }: { branch: SiteNavBranch }) {
  return (
    <div className="ativ-nav__submenu ativ-nav__submenu--painel">
      <div className="ativ-nav__destaques">
        {branch.featured.map((card) => (
          <FeaturedLink card={card} key={card.href} />
        ))}
      </div>
      <div className="ativ-nav__grupos">        {branch.groups.map((group) => (
          <div key={group.rotulo}>
            <p className="ativ-rotulo">{group.rotulo}</p>
            <ul className="ativ-nav__grupo" role="list">
              {group.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function InlineItems({ items }: { items: readonly SiteNavItem[] }) {
  return items.map((item) => {
    if (isNavBranch(item)) {
      return (
        <li className="ativ-nav__ramo" key={item.id}>
          <a href={item.href}>{item.label}</a>
          <NavPanel branch={item} />
        </li>
      );
    }

    return (
      <li key={item.href}>
        <a href={item.href}>{item.label}</a>
      </li>
    );
  });
}

function CondensedItems({ items }: { items: readonly SiteNavItem[] }) {
  return items.map((item) => {
    if (isNavBranch(item)) {
      return (
        <li key={item.id}>
          <details className="ativ-nav__ramo">
            <summary>{item.label}</summary>
            <NavPanel branch={item} />
          </details>
        </li>
      );
    }

    return (
      <li key={item.href}>
        <a href={item.href}>{item.label}</a>
      </li>
    );
  });
}

export function SiteHeader() {
  return (
    <header className="ativ-topo" id="inicio">
      <div className="ativ-topo__barra ativ-container">
        <a
          className="ativ-topo__marca"
          href="/"
          aria-label="ATIV — início"
        >
          <SiteLogo />
          <SiteLogo variant="symbol" />
        </a>
        <nav aria-label="Navegação principal">
          <ul className="ativ-nav ativ-nav--inline">
            <InlineItems items={primaryNav} />
          </ul>
        </nav>
        <div className="ativ-topo__acoes">
          <a className="ativ-btn ativ-btn--primario" href={contactCta.href}>
            {contactCta.label}
          </a>
          <details className="ativ-menu">
            <summary>
              <span className="ativ-somente-leitura">Abrir ou fechar o menu</span>
              <span className="ativ-menu__tracos" aria-hidden="true">
                <span className="ativ-menu__traco" />
                <span className="ativ-menu__traco" />
                <span className="ativ-menu__traco" />
              </span>
            </summary>
            <nav className="ativ-menu__painel" aria-label="Navegação condensada">
              <ul className="ativ-nav">
                <CondensedItems items={primaryNav} />
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
