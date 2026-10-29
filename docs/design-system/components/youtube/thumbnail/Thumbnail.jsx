import React from "react";
import { AppTile } from "./AppTile.jsx";

const angoli = {
  "top-left": "polygon(0 0, 100% 0, 0 100%)",
  "top-right": "polygon(0 0, 100% 0, 100% 100%)",
  "bottom-left": "polygon(0 0, 100% 100%, 0 100%)",
  "bottom-right": "polygon(100% 0, 100% 100%, 0 100%)",
};
const posAngolo = {
  "top-left": { top: 0, left: 0 }, "top-right": { top: 0, right: 0 },
  "bottom-left": { bottom: 0, left: 0 }, "bottom-right": { bottom: 0, right: 0 },
};

// Miniatura 1920×1080: foto scrivania dall'alto, telefono al centro, simbolo gigante, tessere app, fascia in un angolo.
export function Thumbnail({ image, simbolo = "?", simboloLato = "left", fascia = "top-left", fasciaColore = "var(--terracotta)", tessere = [], testo, scale = 1, style }) {
  const lato = simboloLato === "left" ? { left: 70 } : { right: 70 };
  return (
    <div style={{ width: 1920 * scale, height: 1080 * scale, overflow: "hidden", position: "relative", flexShrink: 0, ...style }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: 1920, height: 1080, transform: `scale(${scale})`, transformOrigin: "0 0", background: "#1d1b16", fontFamily: "var(--font-sans)" }}>
        {image
          ? <img src={image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          : <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "repeating-linear-gradient(0deg, rgba(243,242,235,.05) 0 2px, transparent 2px 60px), repeating-linear-gradient(90deg, rgba(243,242,235,.05) 0 2px, transparent 2px 60px), #2a2720" }}>
              <div style={{ width: 470, height: 900, borderRadius: 72, border: "6px dashed rgba(243,242,235,.35)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 30, color: "rgba(243,242,235,.6)", textAlign: "center", padding: 40 }}>foto scrivania dall'alto<br />iPhone al centro</div>
            </div>}
        {fascia && <div style={{ position: "absolute", ...posAngolo[fascia], width: 560, height: 500, background: fasciaColore, clipPath: angoli[fascia] }} />}
        {simbolo && (
          <div style={{ position: "absolute", ...lato, top: 120, fontSize: 820, lineHeight: 0.9, fontWeight: 900, letterSpacing: "-0.04em", color: "var(--crema)", WebkitTextStroke: "14px var(--inchiostro)", paintOrder: "stroke fill", textShadow: "22px 22px 0 var(--inchiostro)" }}>{simbolo}</div>
        )}
        {tessere.map((t, i) => (
          <AppTile key={i} {...t} style={{ position: "absolute", left: t.x, top: t.y }} />
        ))}
        {testo && (
          <div style={{ position: "absolute", left: 80, bottom: 80, padding: "18px 40px", borderRadius: 9999, background: "var(--crema)", border: "8px solid var(--inchiostro)", boxShadow: "14px 14px 0 0 var(--inchiostro)", fontSize: 88, lineHeight: 1, fontWeight: 900, letterSpacing: "-0.03em", color: "var(--inchiostro)" }}>{testo}</div>
        )}
      </div>
    </div>
  );
}
