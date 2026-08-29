import { buildMetadata } from "@ativ/seo";
import { ReservedInventoryPage } from "@/components/reserved-inventory-page";
import { contactPageContract } from "@/lib/contact";

export const metadata = buildMetadata({
  title: contactPageContract.title,
  description: contactPageContract.description,
  pathname: contactPageContract.pathname,
  index: false,
});

export default function ContactPage() {
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
