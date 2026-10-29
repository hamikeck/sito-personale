import React from "react";

export function SectionHeading({ etichetta, titolo, livello = "h2", inverse = false, style }) {
  const T = livello;
  return (
    <div style={{ marginBottom: 32, ...style }}>
      <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 14, lineHeight: "20px", fontWeight: 700, color: inverse ? "var(--secondary)" : "var(--primary)" }}>## {etichetta}</p>
      <T style={{ margin: "4px 0 0", fontSize: 30, lineHeight: "36px", fontWeight: 800, letterSpacing: "-0.025em", textWrap: "balance" }}>{titolo}</T>
    </div>
  );
}
