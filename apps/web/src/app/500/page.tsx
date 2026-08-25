import { buildMetadata } from "@ativ/seo";
import { serverErrorPageContract } from "@/lib/server-error";

export const metadata = buildMetadata({
  title: serverErrorPageContract.title,
  description: serverErrorPageContract.description,
  pathname: "/",
  index: false,
});

export default function ServerErrorPage() {
  return (
    <main
      className="ativ-pagina"
      id={serverErrorPageContract.skipTarget}
      tabIndex={-1}
    >
      <header className="ativ-abertura-pagina">
        <div className="ativ-container">
          <div className="ativ-pilha ativ-pilha--5">
            <p className="ativ-rotulo">{serverErrorPageContract.eyebrow}</p>
            <h1 className={serverErrorPageContract.headingClass}>
              {serverErrorPageContract.heading}
            </h1>
            <p className="ativ-texto ativ-medida">
              {serverErrorPageContract.summary}
            </p>
            <div className="ativ-linha">
              <a className="ativ-btn ativ-btn--primario" href="/">
                {serverErrorPageContract.cta}
              </a>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
