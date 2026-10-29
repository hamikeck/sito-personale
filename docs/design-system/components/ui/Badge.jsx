import React from "react";

const varianti = {
  default: { background: "var(--primary)", color: "var(--primary-foreground)", borderColor: "transparent" },
  secondary: { background: "var(--secondary)", color: "var(--secondary-foreground)", borderColor: "transparent" },
  outline: { background: "transparent", color: "var(--foreground)", borderColor: "var(--foreground)" },
  ghost: { background: "transparent", color: "var(--foreground)", borderColor: "transparent" },
  destructive: { background: "color-mix(in srgb, var(--destructive) 10%, transparent)", color: "var(--destructive)", borderColor: "transparent" },
};

// size "sm" = Badge shadcn (h-5, text-xs, bordo 1px); "md" = tag/filtro del blog (border-2, px-4 py-1, mono text-sm bold); "label" = "ULTIMO" su ambra
export function Badge({ variant = "outline", size = "sm", mono = true, as = "span", onClick, pressed, children, style }) {
  const v = varianti[variant] || varianti.outline;
  const base = size === "sm"
    ? { height: 20, padding: "2px 8px", fontSize: 12, fontWeight: 500, borderWidth: 1 }
    : size === "label"
    ? { padding: "2px 12px", fontSize: 12, fontWeight: 700, borderWidth: 2, borderColor: "var(--foreground)" }
    : { padding: "4px 16px", fontSize: 14, fontWeight: 700, borderWidth: 2, borderColor: "var(--foreground)" };
  const Tag = onClick ? "button" : as;
  return (
    <Tag onClick={onClick} aria-pressed={onClick ? !!pressed : undefined}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 4, width: "fit-content", whiteSpace: "nowrap", borderStyle: "solid", borderRadius: "var(--radius-4xl)", fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)", lineHeight: 1.33, cursor: onClick ? "pointer" : undefined, ...v, ...base, ...(size !== "sm" ? { borderColor: "var(--foreground)" } : {}), ...style }}>
      {children}
    </Tag>
  );
}
