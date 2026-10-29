import React, { useState } from "react";
import { Icon } from "../ui/Icon.jsx";

// Player "leggero": solo miniatura + pulsante Play terracotta finché non si clicca.
export function YouTubePlayer({ id, titolo, miniatura, style }) {
  const [attivo, setAttivo] = useState(false);
  const [h, setH] = useState(false);
  const [src, setSrc] = useState(miniatura || (id ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg` : ""));
  return (
    <div style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden", borderRadius: "var(--radius-2xl)", border: "2px solid var(--foreground)", background: "var(--foreground)", boxShadow: "var(--shadow-brut)", ...style }}>
      {attivo && id ? (
        <iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title={titolo} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }} />
      ) : (
        <button type="button" onClick={() => setAttivo(true)} aria-label={`Guarda il video: ${titolo}`}
          onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", padding: 0, border: 0, background: "transparent", cursor: "pointer" }}>
          {src && <img src={src} alt="" onError={() => id && setSrc(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />}
          <span style={{ position: "absolute", top: "50%", left: "50%", display: "flex", width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: 9999, border: "2px solid var(--foreground)", background: "var(--primary)", color: "var(--primary-foreground)", boxShadow: "var(--shadow-brut)", transition: "transform 150ms var(--ease)", transform: `translate(-50%,-50%) scale(${h ? 1.1 : 1})` }}>
            <Icon name="play" size={28} fill="currentColor" style={{ marginLeft: 4 }} />
          </span>
        </button>
      )}
    </div>
  );
}
