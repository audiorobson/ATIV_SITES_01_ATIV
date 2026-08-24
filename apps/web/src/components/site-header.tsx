const navigation = [
  { href: "#conteudo-principal", label: "Fundação" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="ativ-container site-header__inner">
        <a className="site-brand" href="#inicio" aria-label="ATIV — início">
          <span aria-hidden="true">ATIV</span>
        </a>
        <nav aria-label="Navegação principal">
          <ul className="site-navigation">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="ativ-btn ativ-btn--primario site-header__cta"
          href="#contato"
        >
          Contato
        </a>
      </div>
    </header>
  );
}
