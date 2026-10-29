import React, { useState } from "react";
import { SocialIcon, SOCIALS } from "../site/SocialIcon.jsx";

function Pillola({ href, primary, children }) {
  const [h, setH] = useState(false);
  return (
    <a href={href} target={primary ? undefined : "_blank"} rel="noopener noreferrer"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 9999, border: "2px solid var(--background)", background: primary ? "var(--primary)" : "transparent", color: primary ? "var(--primary-foreground)" : "var(--background)", padding: "8px 20px", fontSize: 14, lineHeight: "20px", fontWeight: primary ? 700 : 500, textDecoration: "none", transition: "transform 150ms var(--ease)", transform: h ? "var(--lift-sm)" : "none" }}>
      {children}
    </a>
  );
}

export function SezioneContatti({ email = "michelecacciapuotipiccolo@gmail.com", anno = new Date().getFullYear() }) {
  return (
    <section id="contatti" style={{ borderTop: "2px solid var(--foreground)", background: "var(--foreground)", color: "var(--background)" }}>
      <div style={{ margin: "0 auto", maxWidth: "var(--container-page)", padding: "64px 16px" }}>
        <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, color: "var(--secondary)" }}>## Contatti</p>
        <h2 style={{ margin: "4px 0 0", fontSize: 30, lineHeight: "36px", fontWeight: 800, letterSpacing: "-0.025em" }}>Parliamone ✉️</h2>
        <p style={{ margin: "12px 0 0", maxWidth: "28rem", color: "color-mix(in srgb, var(--background) 70%, transparent)" }}>Hai un'attività e ti serve un sito? O vuoi solo dire ciao? Scrivimi.</p>
        <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
          <Pillola href={`mailto:${email}`} primary>{email}</Pillola>
          {SOCIALS.map((s) => <Pillola key={s.url} href={s.url}><SocialIcon icona={s.icona} size={16} />{s.nome}</Pillola>)}
        </div>
        <p style={{ margin: "48px 0 0", fontFamily: "var(--font-mono)", fontSize: 12, color: "color-mix(in srgb, var(--background) 50%, transparent)" }}>© {anno} michele_ · fatto con Next.js e caffè</p>
      </div>
    </section>
  );
}
