import React from "react";

// Banner canale 2048×1152. Area sicura per tutti i dispositivi: 1235×338 al centro.
export function ChannelBanner({
  etichetta = "PAGINA 16",
  nome = "Michele Cacciapuoti",
  frase = "Il mio diario",
  evidenza = "a cielo aperto",
  categorie = ["TECH", "SPORT", "VITA DA STUDENTE"],
  guide = false,
  scale = 1,
  style,
}) {
  return (
    <div style={{ width: 2048 * scale, height: 1152 * scale, overflow: "hidden", position: "relative", flexShrink: 0, ...style }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: 2048, height: 1152, transform: `scale(${scale})`, transformOrigin: "0 0", background: "var(--marrone)", color: "var(--crema)", fontFamily: "var(--font-sans)", backgroundImage: "repeating-linear-gradient(180deg, transparent 0 56px, rgba(243,242,235,.05) 56px 58px)" }}>
        <div style={{ position: "absolute", left: 240, top: 0, bottom: 0, width: 3, background: "var(--terracotta)", opacity: 0.7 }} />
        <div style={{ position: "absolute", left: 1700, top: 330, width: 190, height: 70, background: "var(--terracotta)", border: "4px solid var(--crema)", transform: "rotate(12deg)" }} />
        <div style={{ position: "absolute", left: 160, top: 742, width: 170, height: 62, background: "var(--ambra)", border: "4px solid var(--inchiostro)", transform: "rotate(-8deg)", opacity: 0.9 }} />
        {guide && <div style={{ position: "absolute", left: 406, top: 407, width: 1235, height: 338, outline: "3px dashed rgba(226,93,57,.8)" }} />}
        <div style={{ position: "absolute", left: 406, top: 407, width: 1235, height: 338, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 26, fontWeight: 700, letterSpacing: "0.2em", color: "var(--sabbia-muted)" }}>{etichetta}</div>
          <div style={{ fontSize: 124, lineHeight: 0.95, fontWeight: 900, letterSpacing: "-0.045em", whiteSpace: "nowrap" }}>{nome}<span style={{ color: "var(--terracotta)" }}>_</span></div>
          <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.02em" }}>{frase} <span style={{ color: "var(--terracotta)", fontWeight: 800, textDecoration: "underline", textDecorationThickness: 5, textUnderlineOffset: 10 }}>{evidenza}</span></div>
          <div style={{ marginTop: 10, display: "flex", gap: 22, fontFamily: "var(--font-mono)", fontSize: 26, fontWeight: 700, letterSpacing: "0.16em" }}>
            {categorie.map((c, i) => <React.Fragment key={c}>{i > 0 && <span style={{ color: "var(--terracotta)" }}>·</span>}<span>{c}</span></React.Fragment>)}
          </div>
        </div>
      </div>
    </div>
  );
}
