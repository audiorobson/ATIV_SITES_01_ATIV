import { SiteLogo } from "./site-logo";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contato">
      <div className="ativ-container ativ-pilha ativ-pilha--6">
        <div className="site-footer__lead ativ-pilha ativ-pilha--3">
          <p className="ativ-rotulo">Plataforma ATIV</p>
          <h2 className="ativ-titulo-secao">Shell global em validação.</h2>
          <p className="ativ-texto ativ-medida">
            Navegação, acessibilidade e responsividade preparadas para receber o
            conteúdo aprovado.
          </p>
        </div>
        <div className="site-footer__base">
          <a
            className="site-brand"
            href="#inicio"
            aria-label="ATIV — voltar ao início"
          >
            <SiteLogo className="site-brand__logo" />
          </a>
          <p className="ativ-dado">Conteúdo comercial ainda não publicado.</p>
        </div>
      </div>
    </footer>
  );
}
