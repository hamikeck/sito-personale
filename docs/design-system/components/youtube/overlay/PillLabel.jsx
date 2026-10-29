import React from "react";

const toni = {
  terracotta: { background: "var(--terracotta)", color: "var(--crema)", border: "4px solid var(--crema)" },
  ambra: { background: "var(--ambra)", color: "var(--inchiostro)", border: "4px solid var(--inchiostro)" },
  scura: { background: "var(--overlay-surface)", color: "var(--crema)", border: "4px solid var(--crema)" },
  chiara: { background: "var(--crema)", color: "var(--inchiostro)", border: "4px solid var(--inchiostro)" },
};

// Etichetta a pillola in Geist Mono per parole chiave, dati, nomi. Unità px del frame 1920×1080.
export function PillLabel({ tono = "terracotta", punto = false, children, style }) {
  const t = toni[tono] || toni.terracotta;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 18, padding: "16px 36px", borderRadius: 9999, boxShadow: "8px 8px 0 0 var(--inchiostro)", fontFamily: "var(--font-mono)", fontSize: 40, lineHeight: 1.1, fontWeight: 700, whiteSpace: "nowrap", backdropFilter: tono === "scura" ? "blur(12px)" : undefined, ...t, ...style }}>
      {punto && <span style={{ width: 18, height: 18, borderRadius: 9999, background: "currentColor" }} />}
      {children}
    </span>
  );
}
