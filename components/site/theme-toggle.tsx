"use client";

import { useState, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

function sottoscriviTema(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

export function ThemeToggle() {
  // Il server non conosce il tema: parte da false e si allinea al DOM dopo l'idratazione.
  const dark = useSyncExternalStore(
    sottoscriviTema,
    () => document.documentElement.classList.contains("dark"),
    () => false
  );
  // L'icona gira solo dopo un click, non all'idratazione con il tema salvato scuro.
  const [cliccato, setCliccato] = useState(false);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setCliccato(true);
  }

  const giro = cliccato ? "motion-safe:animate-giro" : undefined;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggle}
      aria-label={dark ? "Passa al tema chiaro" : "Passa al tema scuro"}
      className="premi premi-sm rounded-full border-2 border-foreground active:not-aria-[haspopup]:translate-y-0"
    >
      {dark ? <Sun className={giro} /> : <Moon className={giro} />}
    </Button>
  );
}
