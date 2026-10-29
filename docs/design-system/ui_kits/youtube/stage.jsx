// Contenitore che scala un frame a pixel fissi (1920×1080, 2048×1152) alla larghezza disponibile.
function Stage({ w, h, children }) {
  const ref = React.useRef(null);
  const [s, setS] = React.useState(0.5);
  React.useEffect(() => {
    const fit = () => ref.current && setS(ref.current.clientWidth / w);
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [w]);
  return (
    <div ref={ref} style={{ width: "100%", aspectRatio: `${w} / ${h}`, position: "relative", overflow: "hidden", borderRadius: 16, border: "2px solid var(--sabbia)", boxShadow: "6px 6px 0 0 var(--terracotta)" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: w, height: h, transform: `scale(${s})`, transformOrigin: "0 0" }}>{children}</div>
    </div>
  );
}

// Fotogramma finto: "scuro" = camera fissa (foto reale), "chiaro" = ripresa dall'alto su scrivania chiara (segnaposto).
function Fotogramma({ fondo, children }) {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: fondo === "chiaro" ? "#e6e1d3" : "#1b1914" }}>
      {fondo === "scuro"
        ? <img src="../../assets/michele-ritratto.jpg" alt="" style={{ position: "absolute", left: "50%", top: 0, height: "100%", transform: "translateX(-50%)", objectFit: "cover", filter: "brightness(.9)" }} />
        : <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: "repeating-linear-gradient(0deg, rgba(34,32,26,.06) 0 2px, transparent 2px 60px), repeating-linear-gradient(90deg, rgba(34,32,26,.06) 0 2px, transparent 2px 60px)" }}>
            <div style={{ width: 460, height: 880, borderRadius: 72, border: "6px dashed rgba(34,32,26,.35)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 30, color: "rgba(34,32,26,.55)", textAlign: "center" }}>ripresa dall'alto<br />iPhone</div>
          </div>}
      {children}
    </div>
  );
}

Object.assign(window, { Stage, Fotogramma });
