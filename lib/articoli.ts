import { readdir } from "node:fs/promises";
import path from "node:path";

import type { ArticoloMeta } from "@/lib/articoli-meta";

export { formattaData, type ArticoloMeta } from "@/lib/articoli-meta";

export async function getArticoli(): Promise<ArticoloMeta[]> {
  const dir = path.join(process.cwd(), "content", "articoli");
  const file = (await readdir(dir)).filter((f) => f.endsWith(".mdx"));

  const articoli = await Promise.all(
    file.map(async (f) => {
      const slug = f.replace(/\.mdx$/, "");
      const { metadata } = await import(`@/content/articoli/${slug}.mdx`);
      return { slug, ...metadata } as ArticoloMeta;
    })
  );

  return articoli
    .filter((a) => !a.bozza)
    .sort((a, b) => b.data.localeCompare(a.data));
}
