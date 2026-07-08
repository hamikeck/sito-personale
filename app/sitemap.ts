import type { MetadataRoute } from "next";

import { getArticoli } from "@/lib/articoli";
import { siteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articoli = await getArticoli();

  return [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/articoli`, lastModified: new Date() },
    ...articoli.map((a) => ({
      url: `${siteUrl}/articoli/${a.slug}`,
      lastModified: new Date(a.data),
    })),
  ];
}
