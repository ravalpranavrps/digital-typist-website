import assert from "node:assert/strict";
import { siteUrl, siteTitle, siteDescription } from "../src/lib/site.mjs";

// Run against `next start` after building: node scripts/verify-seo.mjs [base URL]
const baseUrl = process.argv[2] || "http://127.0.0.1:3100";
const canonical = siteUrl;
assert.equal(siteUrl, "https://digitaltypist.digital");
const escapeHtml = (value) => value.replaceAll("&", "&amp;");

async function get(path, contentType) {
  const response = await fetch(new URL(path, baseUrl));
  assert.equal(response.status, 200, path);
  assert.ok(response.headers.get("content-type")?.includes(contentType), path);
  return response.text();
}

for (const path of ["/", "/?utm_source=seo-check"]) {
  const html = await get(path, "text/html");
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1];
  assert.ok(head, "Metadata must be in the initial HTML head");
  assert.deepEqual(head.match(/<title>.*?<\/title>/g), [
    `<title>${escapeHtml(siteTitle)}</title>`,
  ]);
  const tags = head.match(/<(?:meta|link)\b[^>]*>/g) || [];
  const expectTag = (attribute, key, valueAttribute, value) => {
    const matches = tags.filter((tag) => tag.includes(`${attribute}="${key}"`));
    assert.equal(matches.length, 1, `${path}: exactly one ${key}`);
    assert.ok(matches[0].includes(`${valueAttribute}="${escapeHtml(value)}"`), key);
  };
  expectTag("name", "description", "content", siteDescription);
  expectTag("rel", "canonical", "href", canonical);
  for (const [key, value] of Object.entries({
    "og:type": "website",
    "og:url": canonical,
    "og:site_name": "Digital Typist",
    "og:title": siteTitle,
    "og:description": siteDescription,
    "twitter:card": "summary",
    "twitter:title": siteTitle,
    "twitter:description": siteDescription,
  })) {
    expectTag(key.startsWith("og:") ? "property" : "name", key, "content", value);
  }
  assert.ok(!/og:image|twitter:image|twitter:site|twitter:creator/.test(head));
}

const xml = await get("/sitemap.xml", "xml");
assert.ok(xml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'));
assert.deepEqual([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]), [canonical]);
assert.ok(!xml.includes("<lastmod>"), "Do not fabricate modification dates");

const robots = await get("/robots.txt", "text/plain");
assert.equal(robots.trim().replaceAll("\r\n", "\n"),
  `User-Agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml`);

console.log("SEO checks passed: initial HTML metadata, no duplicate tags, canonical query handling, sitemap and robots.");
