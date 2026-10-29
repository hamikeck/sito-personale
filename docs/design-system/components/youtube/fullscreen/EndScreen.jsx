import React from "react";
import { Logo } from "../../site/Logo.jsx";

// Schermata finale 1920×1080 (ultimi 5–20 s). Gli slot tratteggiati sono dove YouTube posiziona gli elementi finali.
export function EndScreen({ titolo = "Grazie per aver guardato", sottotitolo = "Il prossimo video è qui accanto →", foto, guide = true, scale = 1, style }) {
  const slot = { position: "absolute", border: guide ? "4px dashed rgba(243,242,235,.45)" : "none", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 28, color: "rgba(243,242,235,.55)" };
  return (
    <div style={{ width: 1920 * scale, height: 1080 * scale, overflow: "hidden", position: "relative", flexShrink: 0, ...style }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: 1920, height: 1080, transform: `scale(${scale})`, transformOrigin: "0 0", background: "var(--marrone)", color: "var(--crema)", fontFamily: "var(--font-sans)", backgroundImage: "repeating-linear-gradient(0deg, rgba(243,242,235,.035) 0 2px, transparent 2px 58px)" }}>
        <div style={{ position: "absolute", left: 120, top: 110 }}>
          <Logo size={44} color="var(--crema)" />
          <div style={{ marginTop: 28, fontSize: 96, lineHeight: 1.02, fontWeight: 800, letterSpacing: "-0.035em", maxWidth: 820 }}>{titolo}</div>
          <div style={{ marginTop: 20, fontFamily: "var(--font-mono)", fontSize: 36, color: "var(--ambra)" }}>{sottotitolo}</div>
        </div>
        <div style={{ ...slot, left: 1000, top: 110, width: 800, height: 450, borderRadius: 32, background: guide ? "rgba(243,242,235,.04)" : "transparent" }}>{guide && "video consigliato"}</div>
        <div style={{ ...slot, left: 1000, top: 610, width: 800, height: 360, borderRadius: 32, background: guide ? "rgba(243,242,235,.04)" : "transparent" }}>{guide && "video / playlist"}</div>
        <div style={{ position: "absolute", left: 120, top: 620, width: 340, height: 340, borderRadius: 9999, border: "6px solid var(--crema)", boxShadow: "12px 12px 0 0 var(--terracotta)", overflow: "hidden", background: "var(--marrone-card)" }}>
          {foto ? <img src={foto} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <div style={{ ...slot, position: "static", width: "100%", height: "100%", border: 0 }}>iscriviti</div>}
        </div>
        <div style={{ position: "absolute", left: 510, top: 740, display: "inline-flex", padding: "18px 36px", borderRadius: 9999, background: "var(--terracotta)", border: "4px solid var(--crema)", fontSize: 44, fontWeight: 800, letterSpacing: "-0.02em" }}>Iscriviti</div>
      </div>
    </div>
  );
}
