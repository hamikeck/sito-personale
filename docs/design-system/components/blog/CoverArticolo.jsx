import React from "react";

// Fallback deterministico dallo slug: somma dei char code pari → primary, dispari → secondary.
function coloreFallback(slug = "") {
  const somma = [...slug].reduce((h, c) => h + c.charCodeAt(0), 0);
  return somma % 2 === 0
    ? { background: "var(--primary)", color: "var(--primary-foreground)" }
    : { background: "var(--secondary)", color: "var(--secondary-foreground)" };
}

export function CoverArticolo({ slug, titolo, cover, aspect = "16 / 9", style }) {
  if (cover) {
    return (
      <div style={{ position: "relative", overflow: "hidden", aspectRatio: aspect, ...style }}>
        <img src={cover} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    );
  }
  return (
    <div aria-hidden="true" style={{ display: "flex", alignItems: "flex-end", overflow: "hidden", padding: 20, aspectRatio: aspect, ...coloreFallback(slug), ...style }}>
      <span style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", fontSize: 30, lineHeight: 1, fontWeight: 800, letterSpacing: "-0.025em", textWrap: "balance" }}>{titolo}</span>
    </div>
  );
}
