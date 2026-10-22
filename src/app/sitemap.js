import { siteUrl } from "../lib/site.mjs";

export default function sitemap() {
  // Sections on the homepage are anchors, not separate indexable pages.
  return [{ url: siteUrl }];
}
