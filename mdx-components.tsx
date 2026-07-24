import Image from "next/image";
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  // Immagini del corpo: next/image in cornice brand, alt come didascalia.
  // Niente <figure>: MDX mette l'immagine dentro un <p>, dove i block element
  // non sono validi — Image e span invece sì.
  img: ({ src, alt }) => (
    <>
      <Image
        src={typeof src === "string" ? src : ""}
        alt={alt ?? ""}
        width={1600}
        height={900}
        sizes="(min-width: 44rem) 42rem, 100vw"
        className="my-2 h-auto w-full rounded-2xl border-2 border-foreground shadow-brut"
      />
      {alt && (
        <span className="mb-2 block text-center font-mono text-xs text-muted-foreground">
          {alt}
        </span>
      )}
    </>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
