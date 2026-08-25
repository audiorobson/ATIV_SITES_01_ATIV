import { SiteLogo } from "./site-logo";

const navigation = [
  { href: "#conteudo-principal", label: "Fundação" },
  { href: "#contato", label: "Contato" },
] as const;

function NavigationItems() {
  return navigation.map((item) => (
    <li key={item.href}>
      <a href={item.href}>{item.label}</a>
    </li>
  ));
}

export function SiteHeader() {
  return (
    <header className="ativ-topo" id="inicio">
      <div className="ativ-topo__barra ativ-container">
        <a
          className="ativ-topo__marca"
          href="#inicio"
          aria-label="ATIV — início"
        >
          <SiteLogo />
          <SiteLogo variant="symbol" />
        </a>
        <nav aria-label="Navegação principal">
          <ul className="ativ-nav ativ-nav--inline">
            <NavigationItems />
          </ul>
        </nav>
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
              <NavigationItems />
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
