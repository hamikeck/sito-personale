import React from "react";

// Nel sito: h-px bg-border; negli articoli "my-12 bg-foreground h-0.5" (2px).
export function Separator({ orientation = "horizontal", thick = false, style }) {
  const t = thick ? 2 : 1;
  const s = orientation === "vertical"
    ? { width: t, alignSelf: "stretch" }
    : { height: t, width: "100%" };
  return <div role="separator" style={{ flexShrink: 0, background: "var(--foreground)", ...s, ...style }} />;
}
