import React, { useState } from "react";
import { Button } from "../ui/Button.jsx";
import { SocialIcon, SOCIALS } from "../site/SocialIcon.jsx";

function SocialTondo({ s }) {
  const [h, setH] = useState(false);
  return (
    <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.nome} title={s.nome}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: "flex", width: 40, height: 40, alignItems: "center", justifyContent: "center", borderRadius: 9999, border: "2px solid var(--foreground)", background: "var(--card)", color: "var(--foreground)", boxShadow: "var(--shadow-brut-sm)", transition: "transform 150ms var(--ease)", transform: h ? "var(--lift-sm)" : "none" }}>
      <SocialIcon icona={s.icona} size={20} />
    </a>
  );
}

export function Hero({
  foto,
  titolo = "Ciao, sono Michele 👋",
  sottotitolo = "A 16 anni creo siti web e racconto le mie passioni e la mia crescita",
  testo = "Questo è il diario pubblico del mio percorso: ogni sito che consegno, ogni esperimento, ogni cosa che imparo finisce qui. Se hai un'attività e ti serve un sito, sei nel posto giusto.",
  onNavigate,
}) {
  const nav = (href) => (e) => { if (onNavigate) { e.preventDefault(); onNavigate(href); } };
  return (
    <section style={{ margin: "0 auto", maxWidth: "var(--container-page)", padding: "96px 16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {foto && <img src={foto} alt="Foto di Michele" style={{ width: 112, height: 112, flexShrink: 0, borderRadius: "var(--radius-2xl)", border: "2px solid var(--foreground)", objectFit: "cover", boxShadow: "var(--shadow-brut-sm)" }} />}
        <div>
          <h1 style={{ margin: 0, fontSize: 36, lineHeight: "40px", fontWeight: 800, letterSpacing: "-0.025em" }}>{titolo}</h1>
          <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 20, lineHeight: "28px", color: "var(--primary)" }}>{sottotitolo}</p>
        </div>
      </div>
      <p style={{ margin: "24px 0 0", maxWidth: "var(--container-hero-text)", fontSize: 16, lineHeight: "24px", color: "var(--muted-foreground)" }}>{testo}</p>
      <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12 }}>
        <Button size="lg" href="/#progetti" onClick={nav("/#progetti")}>Guarda i progetti ↓</Button>
        <Button size="lg" variant="outline" href="/articoli" onClick={nav("/articoli")}>Leggi il blog</Button>
        <Button size="lg" variant="outline" href="https://www.youtube.com/@michele-cacciapuoti" target="_blank">Guarda i video</Button>
      </div>
      <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
        {SOCIALS.map((s) => <SocialTondo key={s.url} s={s} />)}
      </div>
    </section>
  );
}
