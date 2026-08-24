import type { Metadata } from "next";

import { canonicalUrl, resolveSiteOrigin } from "./site-url";

export type MetadataContract = Readonly<{
  title: string;
  description: string;
  pathname: string;
  index: boolean;
  type?: "website" | "article";
}>;

function requireText(value: string, field: string): string {
  const normalized = value.trim();

  if (!normalized) {
    throw new Error(`${field} is required.`);
  }

  return normalized;
}

export function buildMetadata(contract: MetadataContract): Metadata {
  const title = requireText(contract.title, "Metadata title");
  const description = requireText(contract.description, "Metadata description");
  const origin = resolveSiteOrigin();
  const canonical = canonicalUrl(contract.pathname, origin);

  return {
    metadataBase: new URL(origin),
    title,
    description,
    alternates: {
      canonical,
    },
    robots: {
      index: contract.index,
      follow: true,
      googleBot: {
        index: contract.index,
        follow: true,
      },
    },
    openGraph: {
      type: contract.type ?? "website",
      siteName: "ATIV",
      url: canonical,
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export function buildPaidLandingMetadata(
  contract: Omit<MetadataContract, "index">,
): Metadata {
  return buildMetadata({ ...contract, index: false });
}
