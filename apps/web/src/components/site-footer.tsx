import { ContactChannels } from "./contact-channels";
import { SiteLogo } from "./site-logo";
import { sectorMenu, solutionMenu } from "@/lib/site-navigation";

export function SiteFooter() {
  return (
    <footer className="ativ-rodape" id="contato">
      <div className="ativ-container">
        <div className="ativ-rodape__grade">
          <div className="ativ-rodape__marca ativ-pilha ativ-pilha--3">
            <a
              className="ativ-topo__marca"
              href="/"
              aria-label="ATIV — voltar ao início"
            >
              <SiteLogo />
            </a>
            <p className="ativ-dado">Conteúdo comercial ainda não publicado.</p>
          </div>
          <nav aria-label="Soluções">
            <p className="ativ-rotulo">Soluções</p>
            <ul className="ativ-rodape__lista">
              {solutionMenu.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Navegação do rodapé">
            <p className="ativ-rotulo">Plataforma</p>
            <ul className="ativ-rodape__lista">
              <li>
                <a href="/">Fundação</a>
              </li>
              {sectorMenu.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href="/sobre/">Sobre</a>
              </li>
              <li>
                <a href="/contato/">Contato</a>
              </li>
            </ul>
          </nav>
          <ContactChannels />
        </div>
        <p className="ativ-rodape__nota ativ-dado">
          Shell global preparado para receber conteúdo aprovado.
        </p>
      </div>
    </footer>
  );
}
