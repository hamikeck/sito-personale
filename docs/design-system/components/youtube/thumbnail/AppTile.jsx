import React from "react";
import { SocialIcon } from "../../site/SocialIcon.jsx";
import { Icon } from "../../ui/Icon.jsx";

// Tessera chiara per icone vere di app (miniature, schede app). Unità: px del frame 1920×1080.
export function AppTile({ src, icona, size = 260, locked = false, tone = "light", rotate = 0, children, style }) {
  const bordo = Math.round(size * 0.03);
  const r = Math.round(size * 0.22);
  const ombra = Math.round(size * 0.055);
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0, transform: rotate ? `rotate(${rotate}deg)` : undefined, ...style }}>
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: r, border: `${bordo}px solid var(--inchiostro)`, background: tone === "dark" ? "var(--inchiostro)" : "var(--crema)", boxShadow: `${ombra}px ${ombra}px 0 0 var(--inchiostro)`, overflow: "hidden" }}>
        {src ? <img src={src} alt="" style={{ width: "74%", height: "74%", objectFit: "cover", borderRadius: r * 0.7 }} />
          : icona ? <SocialIcon icona={icona} size={size * 0.52} style={{ color: tone === "dark" ? "var(--crema)" : "var(--inchiostro)" }} />
          : children}
      </div>
      {locked && (
        <div style={{ position: "absolute", right: -size * 0.1, bottom: -size * 0.1, width: size * 0.36, height: size * 0.36, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 9999, border: `${bordo}px solid var(--inchiostro)`, background: "var(--ambra)", color: "var(--inchiostro)" }}>
          <Icon name="lock" size={size * 0.18} strokeWidth={2.5} />
        </div>
      )}
    </div>
  );
}
