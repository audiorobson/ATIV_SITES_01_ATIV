import assert from "node:assert/strict";

const baseUrl = process.env.ROUTE_TEST_BASE_URL ?? "http://127.0.0.1:3100";

async function request(pathname) {
  return fetch(new URL(pathname, baseUrl), { redirect: "manual" });
}

const homeResponse = await request("/");
assert.equal(homeResponse.status, 200, "GET / must return 200");

const home = await homeResponse.text();
const h1Matches = home.match(/<h1(?:\s[^>]*)?>[\s\S]*?<\/h1>/gi) ?? [];
assert.equal(h1Matches.length, 1, "GET / must render exactly one H1");
assert.match(home, /<title>[^<]+<\/title>/i, "GET / must render a title");
assert.match(
  home,
  /<meta\s+name="description"\s+content="[^"]+"/i,
  "GET / must render a meta description",
);
assert.match(
  home,
  /<link\s+rel="canonical"\s+href="https?:\/\/[^"]+"/i,
  "GET / must render an absolute canonical URL",
);
assert.match(
  home,
  /<meta\s+name="robots"\s+content="noindex, follow"/i,
  "Technical and paid routes must remain crawlable while noindex",
);

const robotsResponse = await request("/robots.txt");
assert.equal(robotsResponse.status, 200, "GET /robots.txt must return 200");
const robots = await robotsResponse.text();
assert.match(robots, /^Allow: \/$/m, "robots.txt must keep routes crawlable");
assert.doesNotMatch(
  robots,
  /^Disallow: \/lp\//m,
  "robots.txt must not block paid landing pages",
);
assert.match(robots, /^Sitemap: https?:\/\//m, "robots.txt must advertise sitemap.xml");

const sitemapResponse = await request("/sitemap.xml");
assert.equal(sitemapResponse.status, 200, "GET /sitemap.xml must return 200");
const sitemap = await sitemapResponse.text();
assert.doesNotMatch(sitemap, /<loc>[^<]*\/lp\//i, "sitemap.xml must exclude /lp/**");

const missingResponse = await request("/route-contract-not-found");
assert.equal(missingResponse.status, 404, "Unknown routes must return 404");

console.log("Built route contracts verified.");
