import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // L'articolo "benvenuto" (8 luglio 2026) e diventato la pagina /chi-sono.
  // Il redirect e permanente perche l'URL vecchio non tornera: chi lo ha
  // salvato o linkato deve arrivare alla pagina che lo ha sostituito.
  async redirects() {
    return [
      {
        source: "/articoli/benvenuto",
        destination: "/chi-sono",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
