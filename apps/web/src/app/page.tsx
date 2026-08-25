import { foundationChecks, foundationHeadingClass } from "@/lib/foundation";

export default function FoundationPage() {
  return (
    <main
      className="ativ-pagina ativ-pagina--solucao"
      id="conteudo-principal"
      tabIndex={-1}
    >
      <header className="ativ-abertura-pagina">
        <div className="ativ-container ativ-com-lateral">
          <div className="ativ-pilha ativ-pilha--5">
            <p className="ativ-rotulo">Fundação — não é Home comercial</p>
            <h1 className={foundationHeadingClass}>Fundação técnica</h1>
            <p className="ativ-texto ativ-medida">
              Esta superfície temporária valida roteamento, React Server
              Components, metadata, tipagem e o contrato visual de página
              interna. Ela não representa a Home nem copy aprovada da
              plataforma.
            </p>
            <div className="ativ-linha">
              <a className="ativ-btn ativ-btn--primario" href="#validacoes">
                Ver validações
              </a>
              <a className="ativ-btn ativ-btn--secundario" href="#contato">
                Ir ao rodapé
              </a>
            </div>
          </div>
          <figure className="ativ-figura">
            <div
              className="ativ-quadro ativ-quadro--vazio"
              aria-label="Slot de mídia vazio"
            >
              <p className="ativ-dado">Slot vazio — sem fotografia de case</p>
            </div>
            <figcaption className="ativ-legenda">
              Candidata — fundação técnica. Não é case.
            </figcaption>
          </figure>
        </div>
      </header>

      <div className="ativ-pagina__corpo">
        <div className="ativ-container ativ-com-lateral">
          <nav className="ativ-indice" aria-labelledby="indice-fundacao-titulo">
            <p className="ativ-rotulo" id="indice-fundacao-titulo">
              Nesta página
            </p>
            <ol role="list">
              <li>
                <a href="#contexto">Contexto</a>
              </li>
              <li>
                <a href="#validacoes">Validações</a>
              </li>
              <li>
                <a href="#limites">Limites</a>
              </li>
              <li>
                <a href="#contato">Rodapé</a>
              </li>
            </ol>
          </nav>

          <div className="ativ-pilha ativ-pilha--7">
            <section>
              <h2 className="ativ-titulo-secao" id="contexto">
                Contexto desta etapa
              </h2>
              <p className="ativ-texto ativ-medida">
                Header, rodapé e recipes de página interna já existem. A Home
                comercial, hubs de soluções e setores só entram com conteúdo
                aprovado, rotas do inventário SEO e sem claims inventados.
              </p>
            </section>

            <section aria-labelledby="validacoes">
              <h2 className="ativ-titulo-secao" id="validacoes">
                Validações desta etapa
              </h2>
              <ul className="ativ-texto ativ-medida">
                {foundationChecks.map((check) => (
                  <li key={check}>{check}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="ativ-titulo-secao" id="limites">
                Limites desta superfície
              </h2>
              <ul className="ativ-texto ativ-medida">
                <li>Rota `/` permanece técnica e `noindex`.</li>
                <li>
                  Não cria `/solucoes/` nem `/setores/` antes do conteúdo.
                </li>
                <li>Não altera sitemap, canonical nem redirects.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
