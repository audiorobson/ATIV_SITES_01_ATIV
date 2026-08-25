import { buildMetadata } from "@ativ/seo";
import { notFoundPageContract } from "@/lib/not-found";

export const metadata = buildMetadata({
  title: notFoundPageContract.title,
  description: notFoundPageContract.description,
  pathname: "/",
  index: false,
});

export default function NotFoundPage() {
  return (
    <main
      className="ativ-pagina"
      id={notFoundPageContract.skipTarget}
      tabIndex={-1}
    >
      <header className="ativ-abertura-pagina">
        <div className="ativ-container">
          <div className="ativ-pilha ativ-pilha--5">
            <p className="ativ-rotulo">{notFoundPageContract.eyebrow}</p>
            <h1 className={notFoundPageContract.headingClass}>
              {notFoundPageContract.heading}
            </h1>
            <p className="ativ-texto ativ-medida">
              {notFoundPageContract.summary}
            </p>
            <div className="ativ-linha">
              <a className="ativ-btn ativ-btn--primario" href="/">
                {notFoundPageContract.cta}
              </a>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
