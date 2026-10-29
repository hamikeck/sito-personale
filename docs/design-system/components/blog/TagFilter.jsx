import React from "react";
import { Badge } from "../ui/Badge.jsx";

// Filtro tag del blog (da elenco-articoli.tsx): "tutti" + tag ordinati; attivo = default (terracotta), altri outline.
export function TagFilter({ tags = [], attivo = null, onChange }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Badge size="md" variant={attivo === null ? "default" : "outline"} pressed={attivo === null} onClick={() => onChange && onChange(null)}>tutti</Badge>
      {tags.map((t) => (
        <Badge key={t} size="md" variant={t === attivo ? "default" : "outline"} pressed={t === attivo} onClick={() => onChange && onChange(t === attivo ? null : t)}>{t}</Badge>
      ))}
    </div>
  );
}
