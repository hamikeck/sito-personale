import React from "react";

// Logo testuale: "michele" + "_" in primary, come un cursore. Nessun marchio grafico oltre a questo e al favicon "m_".
export function Logo({ size = 18, cursorColor = "var(--primary)", color = "inherit", blink = false, href, style }) {
  const cursore = <span style={{ color: cursorColor, animation: blink ? "michele-cursor 1.06s steps(1) infinite" : undefined }}>_</span>;
  const Tag = href ? "a" : "span";
  return (
    <Tag href={href} style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: size, lineHeight: 1.4, color, textDecoration: "none", letterSpacing: 0, ...style }}>
      {blink && <style>{"@keyframes michele-cursor{0%,50%{opacity:1}50.01%,100%{opacity:0}}"}</style>}
      michele{cursore}
    </Tag>
  );
}
