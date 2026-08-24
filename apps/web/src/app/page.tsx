import { foundationChecks, foundationHeadingClass } from "@/lib/foundation";

export default function FoundationPage() {
  return (
    <main id="conteudo-principal">
      <header>
        <p className="ativ-rotulo">Plataforma digital ATIV</p>
        <h1 className={foundationHeadingClass}>Fundação técnica</h1>
        <p className="ativ-texto">
          Esta superfície temporária valida roteamento, React Server Components,
          metadata, tipagem e build. Ela não representa a Home ou o design final
          da plataforma.
        </p>
      </header>

      <section aria-labelledby="validacoes-fundacao">
        <h2 className="ativ-titulo-secao" id="validacoes-fundacao">
          Validações desta etapa
        </h2>
        <ul>
          {foundationChecks.map((check) => (
            <li key={check}>{check}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
