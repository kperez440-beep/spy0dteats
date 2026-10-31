import type { MetadataRoute } from "next";

// Internal pages (wireframe, graphics source) stay out of search results.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/wireframe", "/brand-assets"] },
    sitemap: "https://spypivotpro.com/sitemap.xml",
  };
}
