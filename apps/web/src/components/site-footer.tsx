import { SiteLogo } from "./site-logo";

export function SiteFooter() {
  return (
    <footer className="ativ-rodape" id="contato">
      <div className="ativ-container">
        <div className="ativ-rodape__grade">
          <div className="ativ-rodape__marca ativ-pilha ativ-pilha--3">
            <a
              className="ativ-topo__marca"
              href="#inicio"
              aria-label="ATIV — voltar ao início"
            >
              <SiteLogo />
            </a>
            <p className="ativ-dado">Conteúdo comercial ainda não publicado.</p>
          </div>
          <nav aria-label="Navegação do rodapé">
            <p className="ativ-rotulo">Plataforma</p>
            <ul className="ativ-rodape__lista">
              <li>
                <a href="#conteudo-principal">Fundação</a>
              </li>
              <li>
                <a href="#inicio">Voltar ao início</a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="ativ-rodape__nota ativ-dado">
          Shell global preparado para receber conteúdo aprovado.
        </p>
      </div>
    </footer>
  );
}
