import { ImageResponse } from "next/og";

import { formattaData, getArticoli } from "@/lib/articoli";

export const alt = "Articolo dal blog di Michele Cacciapuoti";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Colori dei token di globals.css come esadecimali: qui Tailwind non c'è.
const carta = "#f4f2ec";
const inchiostro = "#22201a";
const arancio = "#e05d38";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articolo = (await getArticoli()).find((a) => a.slug === slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: carta,
          padding: 48,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 72px",
            border: `6px solid ${inchiostro}`,
            borderRadius: 40,
            background: carta,
            boxShadow: `12px 12px 0 0 ${inchiostro}`,
          }}
        >
          <div style={{ display: "flex", fontSize: 30, color: arancio }}>
            michele_ · blog
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              color: inchiostro,
              lineHeight: 1.15,
            }}
          >
            {articolo?.titolo ?? "Blog"}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: inchiostro,
              opacity: 0.7,
            }}
          >
            {articolo
              ? `${formattaData(articolo.data)} · ${articolo.tag.join(" · ")}`
              : "michelecacciapuoti"}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
