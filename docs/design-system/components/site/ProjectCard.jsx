import React, { useState } from "react";
import { Icon } from "../ui/Icon.jsx";

export function ProjectCard({ nome, descrizione, url, screenshot, onClick }) {
  const [h, setH] = useState(false);
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: "block", overflow: "hidden", borderRadius: "var(--radius-2xl)", border: "2px solid var(--foreground)", background: "var(--card)", color: "var(--card-foreground)", boxShadow: "var(--shadow-brut)", textDecoration: "none", transition: "transform 150ms var(--ease)", transform: h ? "var(--lift)" : "none" }}>
      <div style={{ position: "relative", aspectRatio: "8 / 5", borderBottom: "2px solid var(--foreground)", background: "var(--muted)" }}>
        {screenshot && <img src={screenshot} alt={`Screenshot del sito ${nome}`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />}
      </div>
      <div style={{ padding: 16 }}>
        <h3 style={{ margin: 0, fontSize: 16, lineHeight: "24px", fontWeight: 700 }}>{nome}</h3>
        <p style={{ margin: "2px 0 0", fontSize: 14, lineHeight: "20px", color: "var(--muted-foreground)" }}>{descrizione}</p>
        <p style={{ margin: "8px 0 0", display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, color: "var(--primary)" }}>
          visita il sito
          <Icon name="arrow-up-right" size={16} style={{ transition: "transform 150ms", transform: h ? "translate(2px,-2px)" : "none" }} />
        </p>
      </div>
    </a>
  );
}
