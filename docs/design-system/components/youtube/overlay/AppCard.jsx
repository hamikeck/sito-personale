import React from "react";
import { AppTile } from "../thumbnail/AppTile.jsx";

// Scheda app in sovraimpressione: card scura semi-opaca, barra colorata a sinistra, tessera icona, nome + dettaglio mono.
export function AppCard({ nome, dettaglio, src, icona, accento = "var(--terracotta)", style }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "stretch", borderRadius: 40, overflow: "hidden", background: "var(--overlay-surface)", border: "4px solid rgba(243,242,235,.9)", boxShadow: "10px 10px 0 0 var(--inchiostro)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", fontFamily: "var(--font-sans)", ...style }}>
      <div style={{ width: 20, background: accento, flexShrink: 0 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 36, padding: "32px 56px 32px 36px" }}>
        <AppTile src={src} icona={icona} size={136} />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 72, lineHeight: 1, fontWeight: 800, letterSpacing: "-0.025em", color: "var(--crema)" }}>{nome}</div>
          {dettaglio && <div style={{ fontFamily: "var(--font-mono)", fontSize: 32, lineHeight: 1.2, fontWeight: 500, color: "var(--ambra)" }}>{dettaglio}</div>}
        </div>
      </div>
    </div>
  );
}
