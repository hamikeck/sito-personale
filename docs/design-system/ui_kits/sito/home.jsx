const SitoNS = window.MicheleDesignSystem_402387;

function LinkMono({ children, onClick }) {
  return <a href="#" onClick={(e) => { e.preventDefault(); onClick && onClick(); }} style={{ marginTop: 24, display: "inline-block", fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, color: "var(--primary)" }}>{children}</a>;
}

function Sezione({ id, children }) {
  return <section id={id} style={{ borderTop: "2px solid var(--foreground)" }}><div style={{ margin: "0 auto", maxWidth: "var(--container-page)", padding: "64px 16px" }}>{children}</div></section>;
}

function SitoHome({ go }) {
  const { Hero, SectionHeading, ProjectCard, ArticleCard, YouTubePlayer } = SitoNS;
  const D = window.SITO_DATI;
  const [v] = D.video;
  return (
    <>
      <Hero foto="../../assets/michele.jpg" onNavigate={go} />
      <Sezione id="progetti">
        <SectionHeading etichetta="Progetti" titolo="Siti che ho realizzato" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
          {D.progetti.slice(0, 2).map((p) => <ProjectCard key={p.url} {...p} onClick={(e) => e.preventDefault()} />)}
        </div>
        <LinkMono onClick={() => go("/progetti")}>→ tutti i progetti</LinkMono>
      </Sezione>
      <Sezione id="articoli">
        <SectionHeading etichetta="Articoli" titolo="Ultime cose che ho scritto" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 24 }}>
          {D.articoli.slice(0, 3).map((a) => <ArticleCard key={a.slug} {...a} onClick={() => go("/articoli/" + a.slug)} />)}
        </div>
        <LinkMono onClick={() => go("/articoli")}>→ tutti gli articoli</LinkMono>
      </Sezione>
      <Sezione id="video">
        <SectionHeading etichetta="Video" titolo="Ultimi video su YouTube 🎬" />
        <YouTubePlayer id={v.id} titolo={v.titolo} />
        <h3 style={{ margin: "16px 0 0", fontSize: 20, fontWeight: 700 }}>{v.titolo}</h3>
        <a href="https://www.youtube.com/@michele-cacciapuoti" target="_blank" style={{ marginTop: 24, display: "inline-block", fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, color: "var(--primary)" }}>→ vai al canale</a>
      </Sezione>
    </>
  );
}

function SitoProgetti() {
  const { SectionHeading, ProjectCard } = SitoNS;
  return (
    <div style={{ margin: "0 auto", maxWidth: "var(--container-page)", padding: "64px 16px" }}>
      <SectionHeading etichetta="Progetti" titolo="Tutti i siti che ho realizzato" livello="h1" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
        {window.SITO_DATI.progetti.map((p) => <ProjectCard key={p.url} {...p} onClick={(e) => e.preventDefault()} />)}
      </div>
    </div>
  );
}

function SitoNotFound({ go }) {
  const { Button } = SitoNS;
  return (
    <section style={{ margin: "0 auto", maxWidth: "42rem", padding: "96px 16px", textAlign: "center" }}>
      <p style={{ display: "inline-block", margin: 0, borderRadius: "var(--radius-2xl)", border: "2px solid var(--foreground)", background: "var(--card)", padding: "16px 32px", fontFamily: "var(--font-mono)", fontSize: 96, lineHeight: 1, fontWeight: 800, letterSpacing: "-0.025em", boxShadow: "var(--shadow-brut)" }}>404</p>
      <h1 style={{ margin: "32px 0 0", fontSize: 36, lineHeight: "40px", fontWeight: 800, letterSpacing: "-0.025em" }}>Pagina non trovata</h1>
      <p style={{ margin: "16px auto 0", maxWidth: "28rem", color: "var(--muted-foreground)" }}>Questa pagina non esiste (o non esiste più). Nessun problema: da qui puoi ripartire.</p>
      <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
        <Button size="lg" onClick={() => go("/")}>Torna alla home</Button>
        <Button size="lg" variant="outline" onClick={() => go("/articoli")}>Leggi gli articoli</Button>
      </div>
    </section>
  );
}

Object.assign(window, { SitoHome, SitoProgetti, SitoNotFound });
