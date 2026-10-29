import React, { useState } from "react";

// Card del sito: rounded-2xl (radius ×1.8), border-2 inchiostro, bg-card, shadow-brut; se interactive si solleva di 4px all'hover.
export function Card({ interactive = false, href, dashed = false, padding = 0, children, style, onClick }) {
  const [hover, setHover] = useState(false);
  const Tag = href ? "a" : "div";
  return (
    <Tag href={href} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "flex", flexDirection: "column", overflow: "hidden", borderRadius: "var(--radius-2xl)", border: `2px ${dashed ? "dashed" : "solid"} var(--foreground)`, background: "var(--card)", color: "var(--card-foreground)", boxShadow: dashed ? "none" : "var(--shadow-brut)", padding, textDecoration: "none", fontSize: 14, cursor: interactive || href || onClick ? "pointer" : undefined, transition: "transform 150ms var(--ease)", transform: (interactive || href || onClick) && hover ? "var(--lift)" : "none", ...style }}>
      {children}
    </Tag>
  );
}

export function CardHeader({ children, style }) {
  return <div style={{ display: "grid", gap: 4, padding: 16, ...style }}>{children}</div>;
}

export function CardMeta({ children, style }) {
  return <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 12, lineHeight: "16px", color: "var(--muted-foreground)", ...style }}>{children}</p>;
}

export function CardTitle({ children, style }) {
  return <div style={{ fontSize: 16, lineHeight: 1.375, fontWeight: 700, color: "var(--card-foreground)", ...style }}>{children}</div>;
}

export function CardDescription({ children, clamp = 2, style }) {
  return <div style={{ fontSize: 14, lineHeight: "20px", color: "var(--muted-foreground)", display: "-webkit-box", WebkitLineClamp: clamp, WebkitBoxOrient: "vertical", overflow: "hidden", ...style }}>{children}</div>;
}
