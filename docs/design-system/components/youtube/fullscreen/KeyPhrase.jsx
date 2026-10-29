import React from "react";
import { Logo } from "../../site/Logo.jsx";

const sfondi = {
  scuro: { bg: "var(--marrone)", fg: "var(--crema)", hl: "var(--terracotta)", label: "var(--ambra)" },
  crema: { bg: "var(--crema)", fg: "var(--inchiostro)", hl: "var(--terracotta)", label: "var(--terracotta)" },
  terracotta: { bg: "var(--terracotta)", fg: "var(--crema)", hl: "var(--inchiostro)", label: "var(--inchiostro)" },
};

// Frase chiave a tutto schermo 1920×1080. `evidenza` = parte della frase da colorare.
export function KeyPhrase({ frase, evidenza, etichetta = "frase chiave", sfondo = "scuro", scale = 1, style }) {
  const s = sfondi[sfondo] || sfondi.scuro;
  let parti = [frase];
  if (evidenza && frase.includes(evidenza)) {
    const i = frase.indexOf(evidenza);
    parti = [frase.slice(0, i), <span key="e" style={{ color: s.hl }}>{evidenza}</span>, frase.slice(i + evidenza.length)];
  }
  return (
    <div style={{ width: 1920 * scale, height: 1080 * scale, overflow: "hidden", position: "relative", flexShrink: 0, ...style }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: 1920, height: 1080, transform: `scale(${scale})`, transformOrigin: "0 0", background: s.bg, color: s.fg, fontFamily: "var(--font-sans)", padding: "140px 160px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 40 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 40, fontWeight: 700, color: s.label }}>## {etichetta}</div>
        <div style={{ fontSize: 132, lineHeight: 1.04, fontWeight: 800, letterSpacing: "-0.035em", textWrap: "balance", maxWidth: 1600 }}>{parti}</div>
        <Logo size={40} color={s.fg} cursorColor={sfondo === "terracotta" ? "var(--inchiostro)" : "var(--terracotta)"} style={{ position: "absolute", left: 160, bottom: 90 }} />
      </div>
    </div>
  );
}
