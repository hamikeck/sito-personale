import React, { useState } from "react";
import { Logo } from "./Logo.jsx";
import { ThemeToggle } from "./ThemeToggle.jsx";

const VOCI = [
  { nome: "Progetti", href: "/progetti" },
  { nome: "Articoli", href: "/articoli" },
  { nome: "Video", href: "/#video" },
  { nome: "Contatti", href: "/#contatti" },
];

function Voce({ voce, onNavigate, attiva }) {
  const [h, setH] = useState(false);
  return (
    <a href={voce.href} onClick={onNavigate ? (e) => { e.preventDefault(); onNavigate(voce.href); } : undefined}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ fontSize: 14, fontWeight: 500, color: h || attiva ? "var(--primary)" : "var(--foreground)", textDecoration: "none" }}>{voce.nome}</a>
  );
}

export function Header({ voci = VOCI, attiva, onNavigate, themeTarget, sticky = true }) {
  return (
    <header style={{ position: sticky ? "sticky" : "relative", top: 0, zIndex: 50, borderBottom: "2px solid var(--foreground)", background: "color-mix(in srgb, var(--background) 90%, transparent)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
      <div style={{ margin: "0 auto", display: "flex", maxWidth: "var(--container-page)", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "12px 16px" }}>
        <span onClick={onNavigate ? () => onNavigate("/") : undefined} style={{ cursor: "pointer" }}>
          <Logo size={18} href={onNavigate ? undefined : "/"} color="var(--foreground)" />
        </span>
        <nav style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <ul style={{ display: "flex", alignItems: "center", gap: 16, listStyle: "none", margin: 0, padding: 0 }}>
            {voci.map((v) => <li key={v.nome}><Voce voce={v} onNavigate={onNavigate} attiva={attiva === v.href} /></li>)}
          </ul>
          <ThemeToggle target={themeTarget} />
        </nav>
      </div>
    </header>
  );
}
