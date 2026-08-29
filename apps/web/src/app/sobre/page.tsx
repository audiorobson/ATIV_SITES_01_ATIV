import { buildMetadata } from "@ativ/seo";
import { ReservedInventoryPage } from "@/components/reserved-inventory-page";
import { aboutPageContract } from "@/lib/about";

export const metadata = buildMetadata({
  title: aboutPageContract.title,
  description: aboutPageContract.description,
  pathname: aboutPageContract.pathname,
  index: false,
});

export default function AboutPage() {
  return (
    <ReservedInventoryPage
      skipTarget={aboutPageContract.skipTarget}
      eyebrow={aboutPageContract.eyebrow}
      heading={aboutPageContract.heading}
      headingClass={aboutPageContract.headingClass}
      summary={aboutPageContract.summary}
      cta={aboutPageContract.cta}
      sections={[
        {
          id: "limites",
          title: "O que esta página ainda não faz",
          items: aboutPageContract.limits,
        },
        {
          id: "blocos",
          title: "Blocos previstos",
          items: aboutPageContract.plannedBlocks,
        },
      ]}
    />
  );
}
