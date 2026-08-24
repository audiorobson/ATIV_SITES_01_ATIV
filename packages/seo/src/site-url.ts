const localDevelopmentOrigin = "http://localhost:3000";

export function resolveSiteOrigin(
  value = process.env.NEXT_PUBLIC_SITE_URL,
): string {
  const candidate = value?.trim() || localDevelopmentOrigin;
  const url = new URL(candidate);

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("Site origin must use HTTP or HTTPS.");
  }

  if (
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    url.pathname !== "/"
  ) {
    throw new Error(
      "Site origin must not include credentials, path, query, or fragment.",
    );
  }

  return url.origin;
}

export function canonicalUrl(
  pathname: string,
  origin = resolveSiteOrigin(),
): string {
  if (!pathname.startsWith("/") || pathname.startsWith("//")) {
    throw new Error("Canonical pathname must be an absolute site path.");
  }

  return new URL(pathname, `${origin}/`).toString();
}
