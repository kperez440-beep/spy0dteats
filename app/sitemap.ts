import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://spypivotpro.com", changeFrequency: "weekly", priority: 1 },
    { url: "https://spypivotpro.com/privacy", changeFrequency: "yearly", priority: 0.3 },
  ];
}
