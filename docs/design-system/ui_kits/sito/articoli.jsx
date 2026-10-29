const BlogNS = window.MicheleDesignSystem_402387;

function SitoArticoli({ go }) {
  const { SectionHeading, TagFilter, CardInEvidenza, ArticleCard } = BlogNS;
  const tutti = window.SITO_DATI.articoli;
  const [tag, setTag] = React.useState(null);
  const tags = [...new Set(tutti.flatMap((a) => a.tag))].sort();
  const visibili = tag ? tutti.filter((a) => a.tag.includes(tag)) : tutti;
  const [primo, ...altri] = visibili;
  return (
    <div style={{ margin: "0 auto", maxWidth: "var(--container-page)", padding: "64px 16px" }}>
      <SectionHeading etichetta="Articoli" titolo="Tutto quello che ho scritto" livello="h1" />
      <div style={{ marginBottom: 32 }}><TagFilter tags={tags} attivo={tag} onChange={setTag} /></div>
      {primo ? (
        <div style={{ display: "grid", gap: 24 }}>
          <CardInEvidenza {...primo} onClick={() => go("/articoli/" + primo.slug)} />
          {altri.length > 0 && <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>{altri.map((a) => <ArticleCard key={a.slug} {...a} onClick={() => go("/articoli/" + a.slug)} />)}</div>}
        </div>
      ) : <p style={{ color: "var(--muted-foreground)" }}>Nessun articolo per questo tag.</p>}
    </div>
  );
}

const prosa = { p: { margin: "0 0 20px", fontSize: 16, lineHeight: 1.75 }, h2: { margin: "48px 0 16px", fontSize: 24, lineHeight: 1.33, fontWeight: 800 } };

function SitoArticolo({ slug, go }) {
  const { CoverArticolo, Badge, Separator, ArticleCard, YouTubePlayer } = BlogNS;
  const a = window.SITO_DATI.articoli.find((x) => x.slug === slug) || window.SITO_DATI.articoli[0];
  const correlati = window.SITO_DATI.articoli.filter((x) => x.slug !== a.slug);
  return (
    <article style={{ margin: "0 auto", maxWidth: "var(--container-article)", padding: "64px 16px" }}>
      <a href="#" onClick={(e) => { e.preventDefault(); go("/articoli"); }} style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, color: "var(--primary)" }}>← tutti gli articoli</a>
      <CoverArticolo slug={a.slug} titolo={a.titolo} cover={a.cover} aspect="2 / 1" style={{ marginTop: 32, borderRadius: "var(--radius-2xl)", border: "2px solid var(--foreground)", boxShadow: "var(--shadow-brut)" }} />
      <h1 style={{ margin: "32px 0 0", fontSize: 48, lineHeight: 1, fontWeight: 800, letterSpacing: "-0.025em", textWrap: "balance" }}>{a.titolo}</h1>
      <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px" }}>
        <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--muted-foreground)" }}>{a.data} · {a.minutiLettura} min di lettura</p>
        {a.tag.map((t) => <Badge key={t}>{t}</Badge>)}
      </div>
      <div style={{ marginTop: 32 }}>
        {a.slug === "benvenuto" ? (
          <>
            <p style={prosa.p}>Ciao! Questo è il primo articolo del mio spazio personale.</p>
            <p style={prosa.p}>Qui racconterò quello che costruisco e quello che imparo: i siti che realizzo per le attività della mia zona, gli esperimenti tech e — presto — il percorso che documenterò anche su YouTube.</p>
            <h2 style={prosa.h2}>Perché un sito personale</h2>
            <p style={prosa.p}>Volevo un posto <strong>mio</strong>, libero dai formati dei social, che potesse crescere insieme a me.</p>
            <p style={prosa.p}>A presto!</p>
          </>
        ) : (
          <>
            <p style={prosa.p}>Salve a tutti, io sono Michele Cacciapuoti, uno studente di 16 anni che frequenta il liceo scientifico a Napoli. Sono appassionato di tecnologia da quando sono bambino e ho deciso di aprire il mio blog per condividere la mia vita in uno spazio personale dove parlo degli argomenti che più mi appassionano.</p>
            <div style={{ margin: "32px 0" }}><YouTubePlayer id="lQXLUlokGOA" titolo="Vivere nell'era dell'AI: il punto di vista di un sedicenne" /></div>
            <h2 style={prosa.h2}>Dal punto di vista di un sedicenne</h2>
            <p style={prosa.p}>L'uso corretto ed etico dell'AI è un tema che mi sta molto a cuore perché ritengo sia importante ai fini del futuro e della propria crescita personale.</p>
          </>
        )}
      </div>
      {correlati.length > 0 && (
        <>
          <Separator thick style={{ margin: "48px 0" }} />
          <h2 style={{ margin: 0, fontSize: 24, fontWeight: 800, letterSpacing: "-0.025em" }}>Continua a leggere</h2>
          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24 }}>
            {correlati.map((c) => <ArticleCard key={c.slug} {...c} onClick={() => go("/articoli/" + c.slug)} />)}
          </div>
        </>
      )}
    </article>
  );
}

Object.assign(window, { SitoArticoli, SitoArticolo });
