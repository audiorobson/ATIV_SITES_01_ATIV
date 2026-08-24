import type {
  Article,
  BreadcrumbList,
  ListItem,
  Organization,
  Person,
  Thing,
  WebSite,
  WithContext,
} from "schema-dts";

export function organizationJsonLd(input: {
  name: string;
  url: string;
  logo?: string;
}): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: input.name,
    url: input.url,
    ...(input.logo ? { logo: input.logo } : {}),
  };
}

export function webSiteJsonLd(input: {
  name: string;
  url: string;
}): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: input.name,
    url: input.url,
  };
}

export function breadcrumbJsonLd(
  items: readonly { name: string; url: string }[],
): WithContext<BreadcrumbList> {
  const itemListElement: ListItem[] = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export function articleJsonLd(input: {
  headline: string;
  url: string;
  datePublished: string;
  author: Person | Organization;
}): WithContext<Article> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    url: input.url,
    datePublished: input.datePublished,
    author: input.author,
  };
}

export function serializeJsonLd(value: WithContext<Thing>): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
