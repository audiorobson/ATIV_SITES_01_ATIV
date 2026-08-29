type ReservedSection = Readonly<{
  id: string;
  title: string;
  items: readonly string[];
}>;

type ReservedInventoryPageProps = Readonly<{
  skipTarget: string;
  eyebrow: string;
  heading: string;
  headingClass: string;
  summary: string;
  cta: string;
  sections: readonly ReservedSection[];
}>;

export function ReservedInventoryPage({
  skipTarget,
  eyebrow,
  heading,
  headingClass,
  summary,
  cta,
  sections,
}: ReservedInventoryPageProps) {
  return (
    <main className="ativ-pagina" id={skipTarget} tabIndex={-1}>
      <header className="ativ-abertura-pagina">
        <div className="ativ-container">
          <div className="ativ-pilha ativ-pilha--5">
            <p className="ativ-rotulo">{eyebrow}</p>
            <h1 className={headingClass}>{heading}</h1>
            <p className="ativ-texto ativ-medida">{summary}</p>
            <div className="ativ-linha">
              <a className="ativ-btn ativ-btn--primario" href="/">
                {cta}
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="ativ-pagina__corpo">
        <div className="ativ-container">
          <div className="ativ-pilha ativ-pilha--7">
            {sections.map((section) => (
              <section key={section.id}>
                <h2 className="ativ-titulo-secao" id={section.id}>
                  {section.title}
                </h2>
                <ul className="ativ-texto ativ-medida">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
