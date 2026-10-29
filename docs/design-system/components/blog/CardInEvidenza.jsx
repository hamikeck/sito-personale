import React, { useState } from "react";
import { CoverArticolo } from "./CoverArticolo.jsx";
import { Badge } from "../ui/Badge.jsx";

// Card orizzontale 55% / 45% per l'ultimo articolo in /articoli.
export function CardInEvidenza({ slug, titolo, data, minutiLettura, tag = [], descrizione, cover, onClick, stacked = false }) {
  const [h, setH] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: stacked ? "flex" : "grid", flexDirection: "column", gridTemplateColumns: "55% 1fr", overflow: "hidden", borderRadius: "var(--radius-2xl)", border: "2px solid var(--foreground)", background: "var(--card)", color: "var(--card-foreground)", boxShadow: "var(--shadow-brut)", cursor: "pointer", transition: "transform 150ms var(--ease)", transform: h ? "var(--lift)" : "none" }}>
      <CoverArticolo slug={slug} titolo={titolo} cover={cover} aspect={stacked ? "16 / 9" : "auto"} style={stacked ? { borderBottom: "2px solid var(--foreground)" } : { height: "100%", minHeight: 224 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: stacked ? 20 : 24, borderLeft: stacked ? "none" : "2px solid var(--foreground)" }}>
        <Badge variant="secondary" size="label">ULTIMO</Badge>
        <h2 style={{ margin: 0, fontSize: 30, lineHeight: "36px", fontWeight: 800, letterSpacing: "-0.025em", textWrap: "balance" }}>{titolo}</h2>
        <p style={{ margin: 0, fontSize: 16, lineHeight: "24px", color: "var(--muted-foreground)" }}>{descrizione}</p>
        <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--muted-foreground)" }}>{data} · {minutiLettura} min di lettura</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {tag.map((t) => <Badge key={t} variant="outline" style={{ borderColor: "var(--foreground)" }}>{t}</Badge>)}
        </div>
      </div>
    </div>
  );
}
