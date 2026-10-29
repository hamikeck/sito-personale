import React, { useState } from "react";

const altezze = { xs: 24, sm: 28, default: 32, lg: 36, icon: 32, "icon-sm": 28, "icon-lg": 36, xl: 44 };

function stileVariante(variant, hover) {
  switch (variant) {
    case "outline":
      return { background: hover ? "var(--muted)" : "var(--background)", color: "var(--foreground)", borderColor: "var(--border)" };
    case "secondary":
      return { background: hover ? "color-mix(in oklch, var(--secondary), var(--foreground) 5%)" : "var(--secondary)", color: "var(--secondary-foreground)" };
    case "ghost":
      return { background: hover ? "var(--muted)" : "transparent", color: "var(--foreground)" };
    case "destructive":
      return { background: hover ? "color-mix(in srgb, var(--destructive) 20%, transparent)" : "color-mix(in srgb, var(--destructive) 10%, transparent)", color: "var(--destructive)" };
    case "link":
      return { background: "transparent", color: "var(--primary)", textDecoration: hover ? "underline" : "none", textUnderlineOffset: 4 };
    default:
      return { background: hover ? "color-mix(in srgb, var(--primary) 80%, transparent)" : "var(--primary)", color: "var(--primary-foreground)" };
  }
}

export function Button({ variant = "default", size = "default", brut = true, href, disabled, iconStart, iconEnd, onClick, children, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const h = altezze[size] || 32;
  const isIcon = String(size).startsWith("icon");
  const pad = isIcon ? 0 : size === "xs" ? 8 : size === "xl" ? 20 : 10;
  const tondo = brut && variant !== "link";
  const s = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: size === "xs" || size === "sm" ? 4 : 6,
    height: h, minWidth: isIcon ? h : undefined, width: isIcon ? h : undefined, padding: `0 ${pad}px`,
    fontFamily: "var(--font-sans)", fontSize: size === "xs" ? 12 : size === "sm" ? 12.8 : size === "xl" ? 16 : 14,
    fontWeight: brut ? 700 : 500, whiteSpace: "nowrap", textDecoration: "none", cursor: disabled ? "default" : "pointer",
    borderRadius: tondo ? 9999 : size === "xs" ? 10 : size === "sm" ? 12 : "var(--radius-lg)",
    border: tondo ? "2px solid var(--foreground)" : "1px solid transparent",
    boxShadow: tondo && variant !== "ghost" ? "var(--shadow-brut-sm)" : "none",
    transition: "all 150ms var(--ease)", transform: press ? "var(--press)" : "none",
    opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? "none" : undefined,
    ...stileVariante(variant, hover),
    ...(tondo ? { borderColor: "var(--foreground)" } : {}),
    ...style,
  };
  const Tag = href ? "a" : "button";
  return (
    <Tag href={href} onClick={onClick} disabled={Tag === "button" ? disabled : undefined} style={s}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)} {...rest}>
      {iconStart}{children}{iconEnd}
    </Tag>
  );
}
