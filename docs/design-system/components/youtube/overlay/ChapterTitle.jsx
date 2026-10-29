import React from "react";

// Titolo di capitolo: numero mono in blocco terracotta + titolo su card scura. Unità px del frame 1920×1080.
export function ChapterTitle({ numero = 1, titolo, etichetta = "capitolo", style }) {
  const n = String(numero).padStart(2, "0");
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)", ...style }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 32, fontWeight: 700, color: "var(--crema)", textShadow: "0 2px 12px rgba(34,32,26,.6)" }}>## {etichetta} {n}</div>
      <div style={{ display: "inline-flex", alignItems: "stretch" }}>
        <div style={{ display: "flex", alignItems: "center", padding: "0 40px", background: "var(--terracotta)", border: "4px solid var(--crema)", borderRadius: "36px 0 0 36px", fontFamily: "var(--font-mono)", fontSize: 96, fontWeight: 800, color: "var(--crema)" }}>{n}</div>
        <div style={{ display: "flex", alignItems: "center", padding: "28px 56px", background: "var(--overlay-surface-strong)", border: "4px solid var(--crema)", borderLeft: 0, borderRadius: "0 36px 36px 0", fontSize: 96, lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--crema)" }}>{titolo}</div>
      </div>
    </div>
  );
}
