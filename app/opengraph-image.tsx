import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

export const alt =
  "Michele Cacciapuoti — a 16 anni creo siti web e racconto le mie passioni e la mia crescita";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Colori dei token di globals.css come esadecimali: qui Tailwind non c'è.
const carta = "#f4f2ec";
const inchiostro = "#22201a";
const arancio = "#e05d38";

export default async function Image() {
  const foto = await readFile(
    path.join(process.cwd(), "public", "michele.jpg")
  );
  const fotoSrc = `data:image/jpeg;base64,${foto.toString("base64")}`;

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
            alignItems: "center",
            gap: 56,
            padding: "0 72px",
            border: `6px solid ${inchiostro}`,
            borderRadius: 40,
            background: carta,
            boxShadow: `12px 12px 0 0 ${inchiostro}`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={fotoSrc}
            alt=""
            width={220}
            height={220}
            style={{
              borderRadius: 36,
              border: `6px solid ${inchiostro}`,
              objectFit: "cover",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: arancio,
              }}
            >
              michele_
            </div>
            <div
              style={{
                fontSize: 68,
                fontWeight: 800,
                color: inchiostro,
                lineHeight: 1.1,
              }}
            >
              Ciao, sono Michele
            </div>
            <div
              style={{
                marginTop: 18,
                fontSize: 32,
                color: arancio,
                lineHeight: 1.3,
                maxWidth: 700,
              }}
            >
              A 16 anni creo siti web e racconto le mie passioni e la mia
              crescita
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
