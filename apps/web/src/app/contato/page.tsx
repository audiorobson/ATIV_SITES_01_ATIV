import { buildMetadata } from "@ativ/seo";

import { ContactChannels } from "@/components/contact-channels";
import { EditorialPage } from "@/components/editorial-page";
import { ReservedInventoryPage } from "@/components/reserved-inventory-page";
import { contactPageContract } from "@/lib/contact";
import { findReservedDraftDocument } from "@/lib/published-content";

export const dynamic = "force-static";

export async function generateMetadata() {
  const document = await findReservedDraftDocument(
    contactPageContract.pathname,
  );

  return buildMetadata({
    title: document?.frontmatter.seo_title ?? contactPageContract.title,
    description:
      document?.frontmatter.meta_description ?? contactPageContract.description,
    pathname: contactPageContract.pathname,
    index: false,
  });
}

export default async function ContactPage() {
  const document = await findReservedDraftDocument(
    contactPageContract.pathname,
  );

  if (document) {
    return (
      <EditorialPage
        document={document}
        beforeBody={<ContactChannels heading="Dados de contato" />}
      />
    );
  }

  return (
    <ReservedInventoryPage
      skipTarget={contactPageContract.skipTarget}
      eyebrow={contactPageContract.eyebrow}
      heading={contactPageContract.heading}
      headingClass={contactPageContract.headingClass}
      summary={contactPageContract.summary}
      cta={contactPageContract.cta}
      sections={[
        {
          id: "limites",
          title: "O que esta página ainda não faz",
          items: contactPageContract.limits,
        },
        {
          id: "campos",
          title: "Campos previstos",
          items: contactPageContract.plannedFields,
        },
      ]}
    />
  );
}
