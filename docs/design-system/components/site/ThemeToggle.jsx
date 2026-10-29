import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button.jsx";
import { Icon } from "../ui/Icon.jsx";

// Commuta la classe .dark su <html> e salva in localStorage("theme"), come il sito.
export function ThemeToggle({ target, onChange }) {
  const el = () => target || document.documentElement;
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(el().classList.contains("dark")); }, []);
  function toggle() {
    const next = !el().classList.contains("dark");
    el().classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch (e) {}
    setDark(next);
    onChange && onChange(next);
  }
  return (
    <Button variant="outline" size="icon" onClick={toggle} aria-label={dark ? "Passa al tema chiaro" : "Passa al tema scuro"}>
      <Icon name={dark ? "sun" : "moon"} size={16} />
    </Button>
  );
}
