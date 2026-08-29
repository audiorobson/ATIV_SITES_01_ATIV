import { verifiedContact } from "@/lib/contact";

type ContactChannelsProps = Readonly<{
  heading?: string;
}>;

export function ContactChannels({ heading }: ContactChannelsProps) {
  return (
    <section className="ativ-pilha ativ-pilha--3">
      {heading ? (
        <h2 className="ativ-titulo-secao" id="canais">
          {heading}
        </h2>
      ) : (
        <p className="ativ-rotulo">Contato</p>
      )}
      <address>
        <dl className="ativ-pares">
          <div className="ativ-par">
            <dt>E-mail</dt>
            <dd>
              <a href={verifiedContact.emailHref}>{verifiedContact.email}</a>
            </dd>
          </div>
          <div className="ativ-par">
            <dt>Telefone</dt>
            <dd>
              <a href={verifiedContact.phoneHref}>
                {verifiedContact.phoneDisplay}
              </a>
            </dd>
          </div>
          <div className="ativ-par">
            <dt>Endereço</dt>
            <dd>
              {verifiedContact.street}
              <br />
              {verifiedContact.complement}
              <br />
              {verifiedContact.locality}
              <br />
              {verifiedContact.postalCode}
            </dd>
          </div>
        </dl>
      </address>
    </section>
  );
}
