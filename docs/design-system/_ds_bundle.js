/* @ds-bundle: {"format":4,"namespace":"MicheleDesignSystem_402387","components":[{"name":"CardInEvidenza","sourcePath":"components/blog/CardInEvidenza.jsx"},{"name":"CoverArticolo","sourcePath":"components/blog/CoverArticolo.jsx"},{"name":"TagFilter","sourcePath":"components/blog/TagFilter.jsx"},{"name":"Hero","sourcePath":"components/home/Hero.jsx"},{"name":"SezioneContatti","sourcePath":"components/home/SezioneContatti.jsx"},{"name":"ArticleCard","sourcePath":"components/site/ArticleCard.jsx"},{"name":"Header","sourcePath":"components/site/Header.jsx"},{"name":"Logo","sourcePath":"components/site/Logo.jsx"},{"name":"ProjectCard","sourcePath":"components/site/ProjectCard.jsx"},{"name":"SectionHeading","sourcePath":"components/site/SectionHeading.jsx"},{"name":"SOCIALS","sourcePath":"components/site/SocialIcon.jsx"},{"name":"SocialIcon","sourcePath":"components/site/SocialIcon.jsx"},{"name":"ThemeToggle","sourcePath":"components/site/ThemeToggle.jsx"},{"name":"YouTubePlayer","sourcePath":"components/site/YouTubePlayer.jsx"},{"name":"Badge","sourcePath":"components/ui/Badge.jsx"},{"name":"Button","sourcePath":"components/ui/Button.jsx"},{"name":"Card","sourcePath":"components/ui/Card.jsx"},{"name":"CardHeader","sourcePath":"components/ui/Card.jsx"},{"name":"CardMeta","sourcePath":"components/ui/Card.jsx"},{"name":"CardTitle","sourcePath":"components/ui/Card.jsx"},{"name":"CardDescription","sourcePath":"components/ui/Card.jsx"},{"name":"Icon","sourcePath":"components/ui/Icon.jsx"},{"name":"Separator","sourcePath":"components/ui/Separator.jsx"},{"name":"ChannelBanner","sourcePath":"components/youtube/banner/ChannelBanner.jsx"},{"name":"EndScreen","sourcePath":"components/youtube/fullscreen/EndScreen.jsx"},{"name":"KeyPhrase","sourcePath":"components/youtube/fullscreen/KeyPhrase.jsx"},{"name":"AppCard","sourcePath":"components/youtube/overlay/AppCard.jsx"},{"name":"ChapterTitle","sourcePath":"components/youtube/overlay/ChapterTitle.jsx"},{"name":"PillLabel","sourcePath":"components/youtube/overlay/PillLabel.jsx"},{"name":"AppTile","sourcePath":"components/youtube/thumbnail/AppTile.jsx"},{"name":"Thumbnail","sourcePath":"components/youtube/thumbnail/Thumbnail.jsx"}],"sourceHashes":{"components/blog/CardInEvidenza.jsx":"5f3b68cdae29","components/blog/CoverArticolo.jsx":"4731136be8c4","components/blog/TagFilter.jsx":"d2ad4abdbe29","components/home/Hero.jsx":"74be18af36b7","components/home/SezioneContatti.jsx":"951a6001fc88","components/site/ArticleCard.jsx":"d6178eaf3a4d","components/site/Header.jsx":"fcfc14d60eda","components/site/Logo.jsx":"794811636d5b","components/site/ProjectCard.jsx":"70dd3c2bbc80","components/site/SectionHeading.jsx":"30a997e3083c","components/site/SocialIcon.jsx":"ea496fe0b33f","components/site/ThemeToggle.jsx":"0b1597518342","components/site/YouTubePlayer.jsx":"9fafbd141f4c","components/ui/Badge.jsx":"8fb60c293693","components/ui/Button.jsx":"5b02eca1447f","components/ui/Card.jsx":"49610a25ce97","components/ui/Icon.jsx":"7a4e9a4f75f3","components/ui/Separator.jsx":"548ee15b5b0c","components/youtube/banner/ChannelBanner.jsx":"a2a9d217877e","components/youtube/fullscreen/EndScreen.jsx":"3e2134591651","components/youtube/fullscreen/KeyPhrase.jsx":"82ac14ec70de","components/youtube/overlay/AppCard.jsx":"60afcff8c2a9","components/youtube/overlay/ChapterTitle.jsx":"f805649357b6","components/youtube/overlay/PillLabel.jsx":"e4eb1369fae3","components/youtube/thumbnail/AppTile.jsx":"c3e8ba5b334c","components/youtube/thumbnail/Thumbnail.jsx":"25c078c428ea","ui_kits/sito/articoli.jsx":"ad6c975ba0fa","ui_kits/sito/data.js":"a0ac0f898d2e","ui_kits/sito/home.jsx":"05f3bbdd8268","ui_kits/youtube/stage.jsx":"7f0354129e65"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MicheleDesignSystem_402387 = window.MicheleDesignSystem_402387 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/blog/CoverArticolo.jsx
try { (() => {
// Fallback deterministico dallo slug: somma dei char code pari → primary, dispari → secondary.
function coloreFallback(slug = "") {
  const somma = [...slug].reduce((h, c) => h + c.charCodeAt(0), 0);
  return somma % 2 === 0 ? {
    background: "var(--primary)",
    color: "var(--primary-foreground)"
  } : {
    background: "var(--secondary)",
    color: "var(--secondary-foreground)"
  };
}
function CoverArticolo({
  slug,
  titolo,
  cover,
  aspect = "16 / 9",
  style
}) {
  if (cover) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        overflow: "hidden",
        aspectRatio: aspect,
        ...style
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: cover,
      alt: "",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden",
      padding: 20,
      aspectRatio: aspect,
      ...coloreFallback(slug),
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      fontSize: 30,
      lineHeight: 1,
      fontWeight: 800,
      letterSpacing: "-0.025em",
      textWrap: "balance"
    }
  }, titolo));
}
Object.assign(__ds_scope, { CoverArticolo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blog/CoverArticolo.jsx", error: String((e && e.message) || e) }); }

// components/site/Logo.jsx
try { (() => {
// Logo testuale: "michele" + "_" in primary, come un cursore. Nessun marchio grafico oltre a questo e al favicon "m_".
function Logo({
  size = 18,
  cursorColor = "var(--primary)",
  color = "inherit",
  blink = false,
  href,
  style
}) {
  const cursore = /*#__PURE__*/React.createElement("span", {
    style: {
      color: cursorColor,
      animation: blink ? "michele-cursor 1.06s steps(1) infinite" : undefined
    }
  }, "_");
  const Tag = href ? "a" : "span";
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: size,
      lineHeight: 1.4,
      color,
      textDecoration: "none",
      letterSpacing: 0,
      ...style
    }
  }, blink && /*#__PURE__*/React.createElement("style", null, "@keyframes michele-cursor{0%,50%{opacity:1}50.01%,100%{opacity:0}}"), "michele", cursore);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Logo.jsx", error: String((e && e.message) || e) }); }

// components/site/SectionHeading.jsx
try { (() => {
function SectionHeading({
  etichetta,
  titolo,
  livello = "h2",
  inverse = false,
  style
}) {
  const T = livello;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32,
      ...style
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 700,
      color: inverse ? "var(--secondary)" : "var(--primary)"
    }
  }, "## ", etichetta), /*#__PURE__*/React.createElement(T, {
    style: {
      margin: "4px 0 0",
      fontSize: 30,
      lineHeight: "36px",
      fontWeight: 800,
      letterSpacing: "-0.025em",
      textWrap: "balance"
    }
  }, titolo));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/site/SocialIcon.jsx
try { (() => {
// Path ufficiali dei loghi da Simple Icons (https://simpleicons.org), viewBox 24×24 — copiati da components/site/social-icon.tsx
const percorsi = {
  github: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  instagram: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
  youtube: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
};
const SOCIALS = [{
  nome: "GitHub",
  url: "https://github.com/hamikeck",
  icona: "github"
}, {
  nome: "LinkedIn",
  url: "https://www.linkedin.com/in/michele-cacciapuoti-07586a33a/",
  icona: "linkedin"
}, {
  nome: "Instagram",
  url: "https://www.instagram.com/michelecaccia__",
  icona: "instagram"
}, {
  nome: "YouTube",
  url: "https://www.youtube.com/@michele-cacciapuoti",
  icona: "youtube"
}];
function SocialIcon({
  icona,
  size = 20,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentColor",
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: percorsi[icona]
  }));
}
Object.assign(__ds_scope, { SOCIALS, SocialIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/SocialIcon.jsx", error: String((e && e.message) || e) }); }

// components/home/SezioneContatti.jsx
try { (() => {
const {
  useState
} = React;
function Pillola({
  href,
  primary,
  children
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: primary ? undefined : "_blank",
    rel: "noopener noreferrer",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      borderRadius: 9999,
      border: "2px solid var(--background)",
      background: primary ? "var(--primary)" : "transparent",
      color: primary ? "var(--primary-foreground)" : "var(--background)",
      padding: "8px 20px",
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: primary ? 700 : 500,
      textDecoration: "none",
      transition: "transform 150ms var(--ease)",
      transform: h ? "var(--lift-sm)" : "none"
    }
  }, children);
}
function SezioneContatti({
  email = "michelecacciapuotipiccolo@gmail.com",
  anno = new Date().getFullYear()
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "contatti",
    style: {
      borderTop: "2px solid var(--foreground)",
      background: "var(--foreground)",
      color: "var(--background)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 auto",
      maxWidth: "var(--container-page)",
      padding: "64px 16px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      fontWeight: 700,
      color: "var(--secondary)"
    }
  }, "## Contatti"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "4px 0 0",
      fontSize: 30,
      lineHeight: "36px",
      fontWeight: 800,
      letterSpacing: "-0.025em"
    }
  }, "Parliamone \u2709\uFE0F"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      maxWidth: "28rem",
      color: "color-mix(in srgb, var(--background) 70%, transparent)"
    }
  }, "Hai un'attivit\xE0 e ti serve un sito? O vuoi solo dire ciao? Scrivimi."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Pillola, {
    href: `mailto:${email}`,
    primary: true
  }, email), __ds_scope.SOCIALS.map(s => /*#__PURE__*/React.createElement(Pillola, {
    key: s.url,
    href: s.url
  }, /*#__PURE__*/React.createElement(__ds_scope.SocialIcon, {
    icona: s.icona,
    size: 16
  }), s.nome))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "48px 0 0",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "color-mix(in srgb, var(--background) 50%, transparent)"
    }
  }, "\xA9 ", anno, " michele_ \xB7 fatto con Next.js e caff\xE8")));
}
Object.assign(__ds_scope, { SezioneContatti });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/home/SezioneContatti.jsx", error: String((e && e.message) || e) }); }

// components/ui/Badge.jsx
try { (() => {
const varianti = {
  default: {
    background: "var(--primary)",
    color: "var(--primary-foreground)",
    borderColor: "transparent"
  },
  secondary: {
    background: "var(--secondary)",
    color: "var(--secondary-foreground)",
    borderColor: "transparent"
  },
  outline: {
    background: "transparent",
    color: "var(--foreground)",
    borderColor: "var(--foreground)"
  },
  ghost: {
    background: "transparent",
    color: "var(--foreground)",
    borderColor: "transparent"
  },
  destructive: {
    background: "color-mix(in srgb, var(--destructive) 10%, transparent)",
    color: "var(--destructive)",
    borderColor: "transparent"
  }
};

// size "sm" = Badge shadcn (h-5, text-xs, bordo 1px); "md" = tag/filtro del blog (border-2, px-4 py-1, mono text-sm bold); "label" = "ULTIMO" su ambra
function Badge({
  variant = "outline",
  size = "sm",
  mono = true,
  as = "span",
  onClick,
  pressed,
  children,
  style
}) {
  const v = varianti[variant] || varianti.outline;
  const base = size === "sm" ? {
    height: 20,
    padding: "2px 8px",
    fontSize: 12,
    fontWeight: 500,
    borderWidth: 1
  } : size === "label" ? {
    padding: "2px 12px",
    fontSize: 12,
    fontWeight: 700,
    borderWidth: 2,
    borderColor: "var(--foreground)"
  } : {
    padding: "4px 16px",
    fontSize: 14,
    fontWeight: 700,
    borderWidth: 2,
    borderColor: "var(--foreground)"
  };
  const Tag = onClick ? "button" : as;
  return /*#__PURE__*/React.createElement(Tag, {
    onClick: onClick,
    "aria-pressed": onClick ? !!pressed : undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      width: "fit-content",
      whiteSpace: "nowrap",
      borderStyle: "solid",
      borderRadius: "var(--radius-4xl)",
      fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
      lineHeight: 1.33,
      cursor: onClick ? "pointer" : undefined,
      ...v,
      ...base,
      ...(size !== "sm" ? {
        borderColor: "var(--foreground)"
      } : {}),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Badge.jsx", error: String((e && e.message) || e) }); }

// components/blog/CardInEvidenza.jsx
try { (() => {
const {
  useState
} = React;
// Card orizzontale 55% / 45% per l'ultimo articolo in /articoli.
function CardInEvidenza({
  slug,
  titolo,
  data,
  minutiLettura,
  tag = [],
  descrizione,
  cover,
  onClick,
  stacked = false
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: stacked ? "flex" : "grid",
      flexDirection: "column",
      gridTemplateColumns: "55% 1fr",
      overflow: "hidden",
      borderRadius: "var(--radius-2xl)",
      border: "2px solid var(--foreground)",
      background: "var(--card)",
      color: "var(--card-foreground)",
      boxShadow: "var(--shadow-brut)",
      cursor: "pointer",
      transition: "transform 150ms var(--ease)",
      transform: h ? "var(--lift)" : "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CoverArticolo, {
    slug: slug,
    titolo: titolo,
    cover: cover,
    aspect: stacked ? "16 / 9" : "auto",
    style: stacked ? {
      borderBottom: "2px solid var(--foreground)"
    } : {
      height: "100%",
      minHeight: 224
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: stacked ? 20 : 24,
      borderLeft: stacked ? "none" : "2px solid var(--foreground)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "secondary",
    size: "label"
  }, "ULTIMO"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 30,
      lineHeight: "36px",
      fontWeight: 800,
      letterSpacing: "-0.025em",
      textWrap: "balance"
    }
  }, titolo), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--muted-foreground)"
    }
  }, descrizione), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--muted-foreground)"
    }
  }, data, " \xB7 ", minutiLettura, " min di lettura"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, tag.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t,
    variant: "outline",
    style: {
      borderColor: "var(--foreground)"
    }
  }, t)))));
}
Object.assign(__ds_scope, { CardInEvidenza });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blog/CardInEvidenza.jsx", error: String((e && e.message) || e) }); }

// components/blog/TagFilter.jsx
try { (() => {
// Filtro tag del blog (da elenco-articoli.tsx): "tutti" + tag ordinati; attivo = default (terracotta), altri outline.
function TagFilter({
  tags = [],
  attivo = null,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    size: "md",
    variant: attivo === null ? "default" : "outline",
    pressed: attivo === null,
    onClick: () => onChange && onChange(null)
  }, "tutti"), tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t,
    size: "md",
    variant: t === attivo ? "default" : "outline",
    pressed: t === attivo,
    onClick: () => onChange && onChange(t === attivo ? null : t)
  }, t)));
}
Object.assign(__ds_scope, { TagFilter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blog/TagFilter.jsx", error: String((e && e.message) || e) }); }

// components/ui/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const altezze = {
  xs: 24,
  sm: 28,
  default: 32,
  lg: 36,
  icon: 32,
  "icon-sm": 28,
  "icon-lg": 36,
  xl: 44
};
function stileVariante(variant, hover) {
  switch (variant) {
    case "outline":
      return {
        background: hover ? "var(--muted)" : "var(--background)",
        color: "var(--foreground)",
        borderColor: "var(--border)"
      };
    case "secondary":
      return {
        background: hover ? "color-mix(in oklch, var(--secondary), var(--foreground) 5%)" : "var(--secondary)",
        color: "var(--secondary-foreground)"
      };
    case "ghost":
      return {
        background: hover ? "var(--muted)" : "transparent",
        color: "var(--foreground)"
      };
    case "destructive":
      return {
        background: hover ? "color-mix(in srgb, var(--destructive) 20%, transparent)" : "color-mix(in srgb, var(--destructive) 10%, transparent)",
        color: "var(--destructive)"
      };
    case "link":
      return {
        background: "transparent",
        color: "var(--primary)",
        textDecoration: hover ? "underline" : "none",
        textUnderlineOffset: 4
      };
    default:
      return {
        background: hover ? "color-mix(in srgb, var(--primary) 80%, transparent)" : "var(--primary)",
        color: "var(--primary-foreground)"
      };
  }
}
function Button({
  variant = "default",
  size = "default",
  brut = true,
  href,
  disabled,
  iconStart,
  iconEnd,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const h = altezze[size] || 32;
  const isIcon = String(size).startsWith("icon");
  const pad = isIcon ? 0 : size === "xs" ? 8 : size === "xl" ? 20 : 10;
  const tondo = brut && variant !== "link";
  const s = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: size === "xs" || size === "sm" ? 4 : 6,
    height: h,
    minWidth: isIcon ? h : undefined,
    width: isIcon ? h : undefined,
    padding: `0 ${pad}px`,
    fontFamily: "var(--font-sans)",
    fontSize: size === "xs" ? 12 : size === "sm" ? 12.8 : size === "xl" ? 16 : 14,
    fontWeight: brut ? 700 : 500,
    whiteSpace: "nowrap",
    textDecoration: "none",
    cursor: disabled ? "default" : "pointer",
    borderRadius: tondo ? 9999 : size === "xs" ? 10 : size === "sm" ? 12 : "var(--radius-lg)",
    border: tondo ? "2px solid var(--foreground)" : "1px solid transparent",
    boxShadow: tondo && variant !== "ghost" ? "var(--shadow-brut-sm)" : "none",
    transition: "all 150ms var(--ease)",
    transform: press ? "var(--press)" : "none",
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? "none" : undefined,
    ...stileVariante(variant, hover),
    ...(tondo ? {
      borderColor: "var(--foreground)"
    } : {}),
    ...style
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    disabled: Tag === "button" ? disabled : undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconStart, children, iconEnd);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Button.jsx", error: String((e && e.message) || e) }); }

// components/home/Hero.jsx
try { (() => {
const {
  useState
} = React;
function SocialTondo({
  s
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: s.url,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": s.nome,
    title: s.nome,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "flex",
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 9999,
      border: "2px solid var(--foreground)",
      background: "var(--card)",
      color: "var(--foreground)",
      boxShadow: "var(--shadow-brut-sm)",
      transition: "transform 150ms var(--ease)",
      transform: h ? "var(--lift-sm)" : "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SocialIcon, {
    icona: s.icona,
    size: 20
  }));
}
function Hero({
  foto,
  titolo = "Ciao, sono Michele 👋",
  sottotitolo = "A 16 anni creo siti web e racconto le mie passioni e la mia crescita",
  testo = "Questo è il diario pubblico del mio percorso: ogni sito che consegno, ogni esperimento, ogni cosa che imparo finisce qui. Se hai un'attività e ti serve un sito, sei nel posto giusto.",
  onNavigate
}) {
  const nav = href => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      margin: "0 auto",
      maxWidth: "var(--container-page)",
      padding: "96px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, foto && /*#__PURE__*/React.createElement("img", {
    src: foto,
    alt: "Foto di Michele",
    style: {
      width: 112,
      height: 112,
      flexShrink: 0,
      borderRadius: "var(--radius-2xl)",
      border: "2px solid var(--foreground)",
      objectFit: "cover",
      boxShadow: "var(--shadow-brut-sm)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 36,
      lineHeight: "40px",
      fontWeight: 800,
      letterSpacing: "-0.025em"
    }
  }, titolo), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: 20,
      lineHeight: "28px",
      color: "var(--primary)"
    }
  }, sottotitolo))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "24px 0 0",
      maxWidth: "var(--container-hero-text)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--muted-foreground)"
    }
  }, testo), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    href: "/#progetti",
    onClick: nav("/#progetti")
  }, "Guarda i progetti \u2193"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    variant: "outline",
    href: "/articoli",
    onClick: nav("/articoli")
  }, "Leggi il blog"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    variant: "outline",
    href: "https://www.youtube.com/@michele-cacciapuoti",
    target: "_blank"
  }, "Guarda i video")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 12
    }
  }, __ds_scope.SOCIALS.map(s => /*#__PURE__*/React.createElement(SocialTondo, {
    key: s.url,
    s: s
  }))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/home/Hero.jsx", error: String((e && e.message) || e) }); }

// components/ui/Card.jsx
try { (() => {
const {
  useState
} = React; // Card del sito: rounded-2xl (radius ×1.8), border-2 inchiostro, bg-card, shadow-brut; se interactive si solleva di 4px all'hover.
function Card({
  interactive = false,
  href,
  dashed = false,
  padding = 0,
  children,
  style,
  onClick
}) {
  const [hover, setHover] = useState(false);
  const Tag = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      borderRadius: "var(--radius-2xl)",
      border: `2px ${dashed ? "dashed" : "solid"} var(--foreground)`,
      background: "var(--card)",
      color: "var(--card-foreground)",
      boxShadow: dashed ? "none" : "var(--shadow-brut)",
      padding,
      textDecoration: "none",
      fontSize: 14,
      cursor: interactive || href || onClick ? "pointer" : undefined,
      transition: "transform 150ms var(--ease)",
      transform: (interactive || href || onClick) && hover ? "var(--lift)" : "none",
      ...style
    }
  }, children);
}
function CardHeader({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 4,
      padding: 16,
      ...style
    }
  }, children);
}
function CardMeta({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--muted-foreground)",
      ...style
    }
  }, children);
}
function CardTitle({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 1.375,
      fontWeight: 700,
      color: "var(--card-foreground)",
      ...style
    }
  }, children);
}
function CardDescription({
  children,
  clamp = 2,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--muted-foreground)",
      display: "-webkit-box",
      WebkitLineClamp: clamp,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardMeta, CardTitle, CardDescription });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Card.jsx", error: String((e && e.message) || e) }); }

// components/site/ArticleCard.jsx
try { (() => {
function ArticleCard({
  slug,
  titolo,
  data,
  minutiLettura,
  tag = [],
  descrizione,
  cover,
  onClick,
  href
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    href: href,
    onClick: onClick,
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CoverArticolo, {
    slug: slug,
    titolo: titolo,
    cover: cover,
    style: {
      borderBottom: "2px solid var(--foreground)"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.CardHeader, null, /*#__PURE__*/React.createElement(__ds_scope.CardMeta, null, data, " \xB7 ", minutiLettura, " min \xB7 ", tag.join(" · ")), /*#__PURE__*/React.createElement(__ds_scope.CardTitle, null, titolo), /*#__PURE__*/React.createElement(__ds_scope.CardDescription, null, descrizione)));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/ui/Icon.jsx
try { (() => {
// Glifi Lucide (lucide.dev, ISC) — il sito usa lucide-react: Moon, Sun, ArrowUpRight, Play.
const glifi = {
  moon: [["path", {
    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
  }]],
  sun: [["circle", {
    cx: 12,
    cy: 12,
    r: 4
  }], ["path", {
    d: "M12 2v2"
  }], ["path", {
    d: "M12 20v2"
  }], ["path", {
    d: "m4.93 4.93 1.41 1.41"
  }], ["path", {
    d: "m17.66 17.66 1.41 1.41"
  }], ["path", {
    d: "M2 12h2"
  }], ["path", {
    d: "M20 12h2"
  }], ["path", {
    d: "m6.34 17.66-1.41 1.41"
  }], ["path", {
    d: "m19.07 4.93-1.41 1.41"
  }]],
  "arrow-up-right": [["path", {
    d: "M7 7h10v10"
  }], ["path", {
    d: "M7 17 17 7"
  }]],
  play: [["polygon", {
    points: "6 3 20 12 6 21 6 3"
  }]],
  lock: [["rect", {
    x: 3,
    y: 11,
    width: 18,
    height: 11,
    rx: 2,
    ry: 2
  }], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  }]]
};
function Icon({
  name,
  size = 16,
  fill = "none",
  strokeWidth = 2,
  style
}) {
  const parti = glifi[name] || [];
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill,
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    style: {
      flexShrink: 0,
      ...style
    }
  }, parti.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Icon.jsx", error: String((e && e.message) || e) }); }

// components/site/ProjectCard.jsx
try { (() => {
const {
  useState
} = React;
function ProjectCard({
  nome,
  descrizione,
  url,
  screenshot,
  onClick
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "block",
      overflow: "hidden",
      borderRadius: "var(--radius-2xl)",
      border: "2px solid var(--foreground)",
      background: "var(--card)",
      color: "var(--card-foreground)",
      boxShadow: "var(--shadow-brut)",
      textDecoration: "none",
      transition: "transform 150ms var(--ease)",
      transform: h ? "var(--lift)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "8 / 5",
      borderBottom: "2px solid var(--foreground)",
      background: "var(--muted)"
    }
  }, screenshot && /*#__PURE__*/React.createElement("img", {
    src: screenshot,
    alt: `Screenshot del sito ${nome}`,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: "24px",
      fontWeight: 700
    }
  }, nome), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--muted-foreground)"
    }
  }, descrizione), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      fontWeight: 700,
      color: "var(--primary)"
    }
  }, "visita il sito", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 16,
    style: {
      transition: "transform 150ms",
      transform: h ? "translate(2px,-2px)" : "none"
    }
  }))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/site/ThemeToggle.jsx
try { (() => {
const {
  useEffect,
  useState
} = React;
// Commuta la classe .dark su <html> e salva in localStorage("theme"), come il sito.
function ThemeToggle({
  target,
  onChange
}) {
  const el = () => target || document.documentElement;
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(el().classList.contains("dark"));
  }, []);
  function toggle() {
    const next = !el().classList.contains("dark");
    el().classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {}
    setDark(next);
    onChange && onChange(next);
  }
  return /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "icon",
    onClick: toggle,
    "aria-label": dark ? "Passa al tema chiaro" : "Passa al tema scuro"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: dark ? "sun" : "moon",
    size: 16
  }));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/site/Header.jsx
try { (() => {
const {
  useState
} = React;
const VOCI = [{
  nome: "Progetti",
  href: "/progetti"
}, {
  nome: "Articoli",
  href: "/articoli"
}, {
  nome: "Video",
  href: "/#video"
}, {
  nome: "Contatti",
  href: "/#contatti"
}];
function Voce({
  voce,
  onNavigate,
  attiva
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: voce.href,
    onClick: onNavigate ? e => {
      e.preventDefault();
      onNavigate(voce.href);
    } : undefined,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: h || attiva ? "var(--primary)" : "var(--foreground)",
      textDecoration: "none"
    }
  }, voce.nome);
}
function Header({
  voci = VOCI,
  attiva,
  onNavigate,
  themeTarget,
  sticky = true
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? "sticky" : "relative",
      top: 0,
      zIndex: 50,
      borderBottom: "2px solid var(--foreground)",
      background: "color-mix(in srgb, var(--background) 90%, transparent)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 auto",
      display: "flex",
      maxWidth: "var(--container-page)",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      padding: "12px 16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onNavigate ? () => onNavigate("/") : undefined,
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: 18,
    href: onNavigate ? undefined : "/",
    color: "var(--foreground)"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, voci.map(v => /*#__PURE__*/React.createElement("li", {
    key: v.nome
  }, /*#__PURE__*/React.createElement(Voce, {
    voce: v,
    onNavigate: onNavigate,
    attiva: attiva === v.href
  })))), /*#__PURE__*/React.createElement(__ds_scope.ThemeToggle, {
    target: themeTarget
  }))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Header.jsx", error: String((e && e.message) || e) }); }

// components/site/YouTubePlayer.jsx
try { (() => {
const {
  useState
} = React;
// Player "leggero": solo miniatura + pulsante Play terracotta finché non si clicca.
function YouTubePlayer({
  id,
  titolo,
  miniatura,
  style
}) {
  const [attivo, setAttivo] = useState(false);
  const [h, setH] = useState(false);
  const [src, setSrc] = useState(miniatura || (id ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg` : ""));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 9",
      overflow: "hidden",
      borderRadius: "var(--radius-2xl)",
      border: "2px solid var(--foreground)",
      background: "var(--foreground)",
      boxShadow: "var(--shadow-brut)",
      ...style
    }
  }, attivo && id ? /*#__PURE__*/React.createElement("iframe", {
    src: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`,
    title: titolo,
    allow: "autoplay; encrypted-media; picture-in-picture",
    allowFullScreen: true,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      border: 0
    }
  }) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setAttivo(true),
    "aria-label": `Guarda il video: ${titolo}`,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      padding: 0,
      border: 0,
      background: "transparent",
      cursor: "pointer"
    }
  }, src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    onError: () => id && setSrc(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`),
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      display: "flex",
      width: 64,
      height: 64,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 9999,
      border: "2px solid var(--foreground)",
      background: "var(--primary)",
      color: "var(--primary-foreground)",
      boxShadow: "var(--shadow-brut)",
      transition: "transform 150ms var(--ease)",
      transform: `translate(-50%,-50%) scale(${h ? 1.1 : 1})`
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "play",
    size: 28,
    fill: "currentColor",
    style: {
      marginLeft: 4
    }
  }))));
}
Object.assign(__ds_scope, { YouTubePlayer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/YouTubePlayer.jsx", error: String((e && e.message) || e) }); }

// components/ui/Separator.jsx
try { (() => {
// Nel sito: h-px bg-border; negli articoli "my-12 bg-foreground h-0.5" (2px).
function Separator({
  orientation = "horizontal",
  thick = false,
  style
}) {
  const t = thick ? 2 : 1;
  const s = orientation === "vertical" ? {
    width: t,
    alignSelf: "stretch"
  } : {
    height: t,
    width: "100%"
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: {
      flexShrink: 0,
      background: "var(--foreground)",
      ...s,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Separator.jsx", error: String((e && e.message) || e) }); }

// components/youtube/banner/ChannelBanner.jsx
try { (() => {
// Banner canale 2048×1152. Area sicura per tutti i dispositivi: 1235×338 al centro.
function ChannelBanner({
  etichetta = "PAGINA 16",
  nome = "Michele Cacciapuoti",
  frase = "Il mio diario",
  evidenza = "a cielo aperto",
  categorie = ["TECH", "SPORT", "VITA DA STUDENTE"],
  guide = false,
  scale = 1,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 2048 * scale,
      height: 1152 * scale,
      overflow: "hidden",
      position: "relative",
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 2048,
      height: 1152,
      transform: `scale(${scale})`,
      transformOrigin: "0 0",
      background: "var(--marrone)",
      color: "var(--crema)",
      fontFamily: "var(--font-sans)",
      backgroundImage: "repeating-linear-gradient(180deg, transparent 0 56px, rgba(243,242,235,.05) 56px 58px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 240,
      top: 0,
      bottom: 0,
      width: 3,
      background: "var(--terracotta)",
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1700,
      top: 330,
      width: 190,
      height: 70,
      background: "var(--terracotta)",
      border: "4px solid var(--crema)",
      transform: "rotate(12deg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 160,
      top: 742,
      width: 170,
      height: 62,
      background: "var(--ambra)",
      border: "4px solid var(--inchiostro)",
      transform: "rotate(-8deg)",
      opacity: 0.9
    }
  }), guide && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 406,
      top: 407,
      width: 1235,
      height: 338,
      outline: "3px dashed rgba(226,93,57,.8)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 406,
      top: 407,
      width: 1235,
      height: 338,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: "0.2em",
      color: "var(--sabbia-muted)"
    }
  }, etichetta), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 124,
      lineHeight: 0.95,
      fontWeight: 900,
      letterSpacing: "-0.045em",
      whiteSpace: "nowrap"
    }
  }, nome, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--terracotta)"
    }
  }, "_")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44,
      fontWeight: 600,
      letterSpacing: "-0.02em"
    }
  }, frase, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--terracotta)",
      fontWeight: 800,
      textDecoration: "underline",
      textDecorationThickness: 5,
      textUnderlineOffset: 10
    }
  }, evidenza)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: "flex",
      gap: 22,
      fontFamily: "var(--font-mono)",
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: "0.16em"
    }
  }, categorie.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: c
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--terracotta)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, c)))))));
}
Object.assign(__ds_scope, { ChannelBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/youtube/banner/ChannelBanner.jsx", error: String((e && e.message) || e) }); }

// components/youtube/fullscreen/EndScreen.jsx
try { (() => {
// Schermata finale 1920×1080 (ultimi 5–20 s). Gli slot tratteggiati sono dove YouTube posiziona gli elementi finali.
function EndScreen({
  titolo = "Grazie per aver guardato",
  sottotitolo = "Il prossimo video è qui accanto →",
  foto,
  guide = true,
  scale = 1,
  style
}) {
  const slot = {
    position: "absolute",
    border: guide ? "4px dashed rgba(243,242,235,.45)" : "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-mono)",
    fontSize: 28,
    color: "rgba(243,242,235,.55)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1920 * scale,
      height: 1080 * scale,
      overflow: "hidden",
      position: "relative",
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 1920,
      height: 1080,
      transform: `scale(${scale})`,
      transformOrigin: "0 0",
      background: "var(--marrone)",
      color: "var(--crema)",
      fontFamily: "var(--font-sans)",
      backgroundImage: "repeating-linear-gradient(0deg, rgba(243,242,235,.035) 0 2px, transparent 2px 58px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 120,
      top: 110
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: 44,
    color: "var(--crema)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      fontSize: 96,
      lineHeight: 1.02,
      fontWeight: 800,
      letterSpacing: "-0.035em",
      maxWidth: 820
    }
  }, titolo), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      fontFamily: "var(--font-mono)",
      fontSize: 36,
      color: "var(--ambra)"
    }
  }, sottotitolo)), /*#__PURE__*/React.createElement("div", {
    style: {
      ...slot,
      left: 1000,
      top: 110,
      width: 800,
      height: 450,
      borderRadius: 32,
      background: guide ? "rgba(243,242,235,.04)" : "transparent"
    }
  }, guide && "video consigliato"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...slot,
      left: 1000,
      top: 610,
      width: 800,
      height: 360,
      borderRadius: 32,
      background: guide ? "rgba(243,242,235,.04)" : "transparent"
    }
  }, guide && "video / playlist"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 120,
      top: 620,
      width: 340,
      height: 340,
      borderRadius: 9999,
      border: "6px solid var(--crema)",
      boxShadow: "12px 12px 0 0 var(--terracotta)",
      overflow: "hidden",
      background: "var(--marrone-card)"
    }
  }, foto ? /*#__PURE__*/React.createElement("img", {
    src: foto,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      ...slot,
      position: "static",
      width: "100%",
      height: "100%",
      border: 0
    }
  }, "iscriviti")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 510,
      top: 740,
      display: "inline-flex",
      padding: "18px 36px",
      borderRadius: 9999,
      background: "var(--terracotta)",
      border: "4px solid var(--crema)",
      fontSize: 44,
      fontWeight: 800,
      letterSpacing: "-0.02em"
    }
  }, "Iscriviti")));
}
Object.assign(__ds_scope, { EndScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/youtube/fullscreen/EndScreen.jsx", error: String((e && e.message) || e) }); }

// components/youtube/fullscreen/KeyPhrase.jsx
try { (() => {
const sfondi = {
  scuro: {
    bg: "var(--marrone)",
    fg: "var(--crema)",
    hl: "var(--terracotta)",
    label: "var(--ambra)"
  },
  crema: {
    bg: "var(--crema)",
    fg: "var(--inchiostro)",
    hl: "var(--terracotta)",
    label: "var(--terracotta)"
  },
  terracotta: {
    bg: "var(--terracotta)",
    fg: "var(--crema)",
    hl: "var(--inchiostro)",
    label: "var(--inchiostro)"
  }
};

// Frase chiave a tutto schermo 1920×1080. `evidenza` = parte della frase da colorare.
function KeyPhrase({
  frase,
  evidenza,
  etichetta = "frase chiave",
  sfondo = "scuro",
  scale = 1,
  style
}) {
  const s = sfondi[sfondo] || sfondi.scuro;
  let parti = [frase];
  if (evidenza && frase.includes(evidenza)) {
    const i = frase.indexOf(evidenza);
    parti = [frase.slice(0, i), /*#__PURE__*/React.createElement("span", {
      key: "e",
      style: {
        color: s.hl
      }
    }, evidenza), frase.slice(i + evidenza.length)];
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1920 * scale,
      height: 1080 * scale,
      overflow: "hidden",
      position: "relative",
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 1920,
      height: 1080,
      transform: `scale(${scale})`,
      transformOrigin: "0 0",
      background: s.bg,
      color: s.fg,
      fontFamily: "var(--font-sans)",
      padding: "140px 160px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 40,
      fontWeight: 700,
      color: s.label
    }
  }, "## ", etichetta), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 132,
      lineHeight: 1.04,
      fontWeight: 800,
      letterSpacing: "-0.035em",
      textWrap: "balance",
      maxWidth: 1600
    }
  }, parti), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: 40,
    color: s.fg,
    cursorColor: sfondo === "terracotta" ? "var(--inchiostro)" : "var(--terracotta)",
    style: {
      position: "absolute",
      left: 160,
      bottom: 90
    }
  })));
}
Object.assign(__ds_scope, { KeyPhrase });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/youtube/fullscreen/KeyPhrase.jsx", error: String((e && e.message) || e) }); }

// components/youtube/overlay/ChapterTitle.jsx
try { (() => {
// Titolo di capitolo: numero mono in blocco terracotta + titolo su card scura. Unità px del frame 1920×1080.
function ChapterTitle({
  numero = 1,
  titolo,
  etichetta = "capitolo",
  style
}) {
  const n = String(numero).padStart(2, "0");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      gap: 20,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 32,
      fontWeight: 700,
      color: "var(--crema)",
      textShadow: "0 2px 12px rgba(34,32,26,.6)"
    }
  }, "## ", etichetta, " ", n), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "0 40px",
      background: "var(--terracotta)",
      border: "4px solid var(--crema)",
      borderRadius: "36px 0 0 36px",
      fontFamily: "var(--font-mono)",
      fontSize: 96,
      fontWeight: 800,
      color: "var(--crema)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "28px 56px",
      background: "var(--overlay-surface-strong)",
      border: "4px solid var(--crema)",
      borderLeft: 0,
      borderRadius: "0 36px 36px 0",
      fontSize: 96,
      lineHeight: 1.05,
      fontWeight: 800,
      letterSpacing: "-0.03em",
      color: "var(--crema)"
    }
  }, titolo)));
}
Object.assign(__ds_scope, { ChapterTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/youtube/overlay/ChapterTitle.jsx", error: String((e && e.message) || e) }); }

// components/youtube/overlay/PillLabel.jsx
try { (() => {
const toni = {
  terracotta: {
    background: "var(--terracotta)",
    color: "var(--crema)",
    border: "4px solid var(--crema)"
  },
  ambra: {
    background: "var(--ambra)",
    color: "var(--inchiostro)",
    border: "4px solid var(--inchiostro)"
  },
  scura: {
    background: "var(--overlay-surface)",
    color: "var(--crema)",
    border: "4px solid var(--crema)"
  },
  chiara: {
    background: "var(--crema)",
    color: "var(--inchiostro)",
    border: "4px solid var(--inchiostro)"
  }
};

// Etichetta a pillola in Geist Mono per parole chiave, dati, nomi. Unità px del frame 1920×1080.
function PillLabel({
  tono = "terracotta",
  punto = false,
  children,
  style
}) {
  const t = toni[tono] || toni.terracotta;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 18,
      padding: "16px 36px",
      borderRadius: 9999,
      boxShadow: "8px 8px 0 0 var(--inchiostro)",
      fontFamily: "var(--font-mono)",
      fontSize: 40,
      lineHeight: 1.1,
      fontWeight: 700,
      whiteSpace: "nowrap",
      backdropFilter: tono === "scura" ? "blur(12px)" : undefined,
      ...t,
      ...style
    }
  }, punto && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 9999,
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { PillLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/youtube/overlay/PillLabel.jsx", error: String((e && e.message) || e) }); }

// components/youtube/thumbnail/AppTile.jsx
try { (() => {
// Tessera chiara per icone vere di app (miniature, schede app). Unità: px del frame 1920×1080.
function AppTile({
  src,
  icona,
  size = 260,
  locked = false,
  tone = "light",
  rotate = 0,
  children,
  style
}) {
  const bordo = Math.round(size * 0.03);
  const r = Math.round(size * 0.22);
  const ombra = Math.round(size * 0.055);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      flexShrink: 0,
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: r,
      border: `${bordo}px solid var(--inchiostro)`,
      background: tone === "dark" ? "var(--inchiostro)" : "var(--crema)",
      boxShadow: `${ombra}px ${ombra}px 0 0 var(--inchiostro)`,
      overflow: "hidden"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: "74%",
      height: "74%",
      objectFit: "cover",
      borderRadius: r * 0.7
    }
  }) : icona ? /*#__PURE__*/React.createElement(__ds_scope.SocialIcon, {
    icona: icona,
    size: size * 0.52,
    style: {
      color: tone === "dark" ? "var(--crema)" : "var(--inchiostro)"
    }
  }) : children), locked && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -size * 0.1,
      bottom: -size * 0.1,
      width: size * 0.36,
      height: size * 0.36,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 9999,
      border: `${bordo}px solid var(--inchiostro)`,
      background: "var(--ambra)",
      color: "var(--inchiostro)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: size * 0.18,
    strokeWidth: 2.5
  })));
}
Object.assign(__ds_scope, { AppTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/youtube/thumbnail/AppTile.jsx", error: String((e && e.message) || e) }); }

// components/youtube/overlay/AppCard.jsx
try { (() => {
// Scheda app in sovraimpressione: card scura semi-opaca, barra colorata a sinistra, tessera icona, nome + dettaglio mono.
function AppCard({
  nome,
  dettaglio,
  src,
  icona,
  accento = "var(--terracotta)",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "stretch",
      borderRadius: 40,
      overflow: "hidden",
      background: "var(--overlay-surface)",
      border: "4px solid rgba(243,242,235,.9)",
      boxShadow: "10px 10px 0 0 var(--inchiostro)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      background: accento,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 36,
      padding: "32px 56px 32px 36px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.AppTile, {
    src: src,
    icona: icona,
    size: 136
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 72,
      lineHeight: 1,
      fontWeight: 800,
      letterSpacing: "-0.025em",
      color: "var(--crema)"
    }
  }, nome), dettaglio && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 32,
      lineHeight: 1.2,
      fontWeight: 500,
      color: "var(--ambra)"
    }
  }, dettaglio))));
}
Object.assign(__ds_scope, { AppCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/youtube/overlay/AppCard.jsx", error: String((e && e.message) || e) }); }

// components/youtube/thumbnail/Thumbnail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const angoli = {
  "top-left": "polygon(0 0, 100% 0, 0 100%)",
  "top-right": "polygon(0 0, 100% 0, 100% 100%)",
  "bottom-left": "polygon(0 0, 100% 100%, 0 100%)",
  "bottom-right": "polygon(100% 0, 100% 100%, 0 100%)"
};
const posAngolo = {
  "top-left": {
    top: 0,
    left: 0
  },
  "top-right": {
    top: 0,
    right: 0
  },
  "bottom-left": {
    bottom: 0,
    left: 0
  },
  "bottom-right": {
    bottom: 0,
    right: 0
  }
};

// Miniatura 1920×1080: foto scrivania dall'alto, telefono al centro, simbolo gigante, tessere app, fascia in un angolo.
function Thumbnail({
  image,
  simbolo = "?",
  simboloLato = "left",
  fascia = "top-left",
  fasciaColore = "var(--terracotta)",
  tessere = [],
  testo,
  scale = 1,
  style
}) {
  const lato = simboloLato === "left" ? {
    left: 70
  } : {
    right: 70
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1920 * scale,
      height: 1080 * scale,
      overflow: "hidden",
      position: "relative",
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 1920,
      height: 1080,
      transform: `scale(${scale})`,
      transformOrigin: "0 0",
      background: "#1d1b16",
      fontFamily: "var(--font-sans)"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "repeating-linear-gradient(0deg, rgba(243,242,235,.05) 0 2px, transparent 2px 60px), repeating-linear-gradient(90deg, rgba(243,242,235,.05) 0 2px, transparent 2px 60px), #2a2720"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 470,
      height: 900,
      borderRadius: 72,
      border: "6px dashed rgba(243,242,235,.35)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 30,
      color: "rgba(243,242,235,.6)",
      textAlign: "center",
      padding: 40
    }
  }, "foto scrivania dall'alto", /*#__PURE__*/React.createElement("br", null), "iPhone al centro")), fascia && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      ...posAngolo[fascia],
      width: 560,
      height: 500,
      background: fasciaColore,
      clipPath: angoli[fascia]
    }
  }), simbolo && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      ...lato,
      top: 120,
      fontSize: 820,
      lineHeight: 0.9,
      fontWeight: 900,
      letterSpacing: "-0.04em",
      color: "var(--crema)",
      WebkitTextStroke: "14px var(--inchiostro)",
      paintOrder: "stroke fill",
      textShadow: "22px 22px 0 var(--inchiostro)"
    }
  }, simbolo), tessere.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.AppTile, _extends({
    key: i
  }, t, {
    style: {
      position: "absolute",
      left: t.x,
      top: t.y
    }
  }))), testo && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      bottom: 80,
      padding: "18px 40px",
      borderRadius: 9999,
      background: "var(--crema)",
      border: "8px solid var(--inchiostro)",
      boxShadow: "14px 14px 0 0 var(--inchiostro)",
      fontSize: 88,
      lineHeight: 1,
      fontWeight: 900,
      letterSpacing: "-0.03em",
      color: "var(--inchiostro)"
    }
  }, testo)));
}
Object.assign(__ds_scope, { Thumbnail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/youtube/thumbnail/Thumbnail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sito/articoli.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BlogNS = window.MicheleDesignSystem_402387;
function SitoArticoli({
  go
}) {
  const {
    SectionHeading,
    TagFilter,
    CardInEvidenza,
    ArticleCard
  } = BlogNS;
  const tutti = window.SITO_DATI.articoli;
  const [tag, setTag] = React.useState(null);
  const tags = [...new Set(tutti.flatMap(a => a.tag))].sort();
  const visibili = tag ? tutti.filter(a => a.tag.includes(tag)) : tutti;
  const [primo, ...altri] = visibili;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 auto",
      maxWidth: "var(--container-page)",
      padding: "64px 16px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    etichetta: "Articoli",
    titolo: "Tutto quello che ho scritto",
    livello: "h1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(TagFilter, {
    tags: tags,
    attivo: tag,
    onChange: setTag
  })), primo ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(CardInEvidenza, _extends({}, primo, {
    onClick: () => go("/articoli/" + primo.slug)
  })), altri.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: 24
    }
  }, altri.map(a => /*#__PURE__*/React.createElement(ArticleCard, _extends({
    key: a.slug
  }, a, {
    onClick: () => go("/articoli/" + a.slug)
  }))))) : /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--muted-foreground)"
    }
  }, "Nessun articolo per questo tag."));
}
const prosa = {
  p: {
    margin: "0 0 20px",
    fontSize: 16,
    lineHeight: 1.75
  },
  h2: {
    margin: "48px 0 16px",
    fontSize: 24,
    lineHeight: 1.33,
    fontWeight: 800
  }
};
function SitoArticolo({
  slug,
  go
}) {
  const {
    CoverArticolo,
    Badge,
    Separator,
    ArticleCard,
    YouTubePlayer
  } = BlogNS;
  const a = window.SITO_DATI.articoli.find(x => x.slug === slug) || window.SITO_DATI.articoli[0];
  const correlati = window.SITO_DATI.articoli.filter(x => x.slug !== a.slug);
  return /*#__PURE__*/React.createElement("article", {
    style: {
      margin: "0 auto",
      maxWidth: "var(--container-article)",
      padding: "64px 16px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("/articoli");
    },
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      fontWeight: 700,
      color: "var(--primary)"
    }
  }, "\u2190 tutti gli articoli"), /*#__PURE__*/React.createElement(CoverArticolo, {
    slug: a.slug,
    titolo: a.titolo,
    cover: a.cover,
    aspect: "2 / 1",
    style: {
      marginTop: 32,
      borderRadius: "var(--radius-2xl)",
      border: "2px solid var(--foreground)",
      boxShadow: "var(--shadow-brut)"
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "32px 0 0",
      fontSize: 48,
      lineHeight: 1,
      fontWeight: 800,
      letterSpacing: "-0.025em",
      textWrap: "balance"
    }
  }, a.titolo), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "8px 12px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--muted-foreground)"
    }
  }, a.data, " \xB7 ", a.minutiLettura, " min di lettura"), a.tag.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, a.slug === "benvenuto" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: prosa.p
  }, "Ciao! Questo \xE8 il primo articolo del mio spazio personale."), /*#__PURE__*/React.createElement("p", {
    style: prosa.p
  }, "Qui racconter\xF2 quello che costruisco e quello che imparo: i siti che realizzo per le attivit\xE0 della mia zona, gli esperimenti tech e \u2014 presto \u2014 il percorso che documenter\xF2 anche su YouTube."), /*#__PURE__*/React.createElement("h2", {
    style: prosa.h2
  }, "Perch\xE9 un sito personale"), /*#__PURE__*/React.createElement("p", {
    style: prosa.p
  }, "Volevo un posto ", /*#__PURE__*/React.createElement("strong", null, "mio"), ", libero dai formati dei social, che potesse crescere insieme a me."), /*#__PURE__*/React.createElement("p", {
    style: prosa.p
  }, "A presto!")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: prosa.p
  }, "Salve a tutti, io sono Michele Cacciapuoti, uno studente di 16 anni che frequenta il liceo scientifico a Napoli. Sono appassionato di tecnologia da quando sono bambino e ho deciso di aprire il mio blog per condividere la mia vita in uno spazio personale dove parlo degli argomenti che pi\xF9 mi appassionano."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "32px 0"
    }
  }, /*#__PURE__*/React.createElement(YouTubePlayer, {
    id: "lQXLUlokGOA",
    titolo: "Vivere nell'era dell'AI: il punto di vista di un sedicenne"
  })), /*#__PURE__*/React.createElement("h2", {
    style: prosa.h2
  }, "Dal punto di vista di un sedicenne"), /*#__PURE__*/React.createElement("p", {
    style: prosa.p
  }, "L'uso corretto ed etico dell'AI \xE8 un tema che mi sta molto a cuore perch\xE9 ritengo sia importante ai fini del futuro e della propria crescita personale."))), correlati.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Separator, {
    thick: true,
    style: {
      margin: "48px 0"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: "-0.025em"
    }
  }, "Continua a leggere"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
      gap: 24
    }
  }, correlati.map(c => /*#__PURE__*/React.createElement(ArticleCard, _extends({
    key: c.slug
  }, c, {
    onClick: () => go("/articoli/" + c.slug)
  }))))));
}
Object.assign(window, {
  SitoArticoli,
  SitoArticolo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sito/articoli.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sito/data.js
try { (() => {
// Contenuti reali da hamikeck/sito-personale (content/progetti.ts, content/articoli/*.mdx, lib/site.ts)
window.SITO_DATI = {
  progetti: [{
    nome: "Pizzeria da Salvatore",
    descrizione: "Sito per una pizzeria storica: hero immersivo, menù digitale, orari sempre visibili e CTA dirette per chiamata e prenotazione.",
    url: "https://pizzeriasalvatore.it",
    screenshot: "../../assets/progetti/pizzeria-da-salvatore.jpg"
  }, {
    nome: "Belle Époque 1985",
    descrizione: "Sito per il bar pasticceria di Giugliano, in stile francese vintage: atmosfera d'altri tempi, storia del locale, vetrina dei prodotti e recensioni in evidenza.",
    url: "https://www.belleepoque1985.com/",
    screenshot: "../../assets/progetti/belle-epoque.jpg"
  }, {
    nome: "Planet Gym",
    descrizione: "Sito per una palestra: tema scuro d'impatto, presentazione di corsi e servizi, prezzi chiari e prenotazione della consulenza gratuita.",
    url: "https://planet-gym.com",
    screenshot: "../../assets/progetti/planet-gym.jpg"
  }, {
    nome: "Arturo Cerullo Pizzeria",
    descrizione: "Sito per una pizzeria napoletana di Qualiano: atmosfera neon, menù integrato, storia e informazioni sul locale, ordini rapidi su Glovo, Just Eat e Deliveroo.",
    url: "https://www.arturocerullopizzeria.it/",
    screenshot: "../../assets/progetti/arturo-cerullo.jpg"
  }],
  articoli: [{
    slug: "intelligenza-artificiale-sedicenne",
    titolo: "L'Intelligenza Artificiale dal punto di vista di un sedicenne",
    data: "5 agosto 2026",
    minutiLettura: 8,
    tag: ["tecnologia", "scuola"],
    descrizione: "Come la usano davvero i miei compagni di classe, come la uso io per studiare e lavorare, e cosa penso stia per succedere al lavoro. Scritto a mano, senza AI.",
    cover: "../../assets/articoli/copertina-ia-sedicenne.jpg"
  }, {
    slug: "benvenuto",
    titolo: "Benvenuto nel mio spazio",
    data: "8 luglio 2026",
    minutiLettura: 1,
    tag: ["vita"],
    descrizione: "Perché ho creato questo sito e cosa ci troverai: progetti, articoli e il mio percorso."
  }],
  video: [{
    id: "lQXLUlokGOA",
    titolo: "Vivere nell'era dell'AI: il punto di vista di un sedicenne"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sito/data.js", error: String((e && e.message) || e) }); }

// ui_kits/sito/home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SitoNS = window.MicheleDesignSystem_402387;
function LinkMono({
  children,
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick && onClick();
    },
    style: {
      marginTop: 24,
      display: "inline-block",
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      fontWeight: 700,
      color: "var(--primary)"
    }
  }, children);
}
function Sezione({
  id,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      borderTop: "2px solid var(--foreground)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 auto",
      maxWidth: "var(--container-page)",
      padding: "64px 16px"
    }
  }, children));
}
function SitoHome({
  go
}) {
  const {
    Hero,
    SectionHeading,
    ProjectCard,
    ArticleCard,
    YouTubePlayer
  } = SitoNS;
  const D = window.SITO_DATI;
  const [v] = D.video;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    foto: "../../assets/michele.jpg",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Sezione, {
    id: "progetti"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    etichetta: "Progetti",
    titolo: "Siti che ho realizzato"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: 24
    }
  }, D.progetti.slice(0, 2).map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.url
  }, p, {
    onClick: e => e.preventDefault()
  })))), /*#__PURE__*/React.createElement(LinkMono, {
    onClick: () => go("/progetti")
  }, "\u2192 tutti i progetti")), /*#__PURE__*/React.createElement(Sezione, {
    id: "articoli"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    etichetta: "Articoli",
    titolo: "Ultime cose che ho scritto"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
      gap: 24
    }
  }, D.articoli.slice(0, 3).map(a => /*#__PURE__*/React.createElement(ArticleCard, _extends({
    key: a.slug
  }, a, {
    onClick: () => go("/articoli/" + a.slug)
  })))), /*#__PURE__*/React.createElement(LinkMono, {
    onClick: () => go("/articoli")
  }, "\u2192 tutti gli articoli")), /*#__PURE__*/React.createElement(Sezione, {
    id: "video"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    etichetta: "Video",
    titolo: "Ultimi video su YouTube \uD83C\uDFAC"
  }), /*#__PURE__*/React.createElement(YouTubePlayer, {
    id: v.id,
    titolo: v.titolo
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "16px 0 0",
      fontSize: 20,
      fontWeight: 700
    }
  }, v.titolo), /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/@michele-cacciapuoti",
    target: "_blank",
    style: {
      marginTop: 24,
      display: "inline-block",
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      fontWeight: 700,
      color: "var(--primary)"
    }
  }, "\u2192 vai al canale")));
}
function SitoProgetti() {
  const {
    SectionHeading,
    ProjectCard
  } = SitoNS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 auto",
      maxWidth: "var(--container-page)",
      padding: "64px 16px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    etichetta: "Progetti",
    titolo: "Tutti i siti che ho realizzato",
    livello: "h1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: 24
    }
  }, window.SITO_DATI.progetti.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.url
  }, p, {
    onClick: e => e.preventDefault()
  })))));
}
function SitoNotFound({
  go
}) {
  const {
    Button
  } = SitoNS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      margin: "0 auto",
      maxWidth: "42rem",
      padding: "96px 16px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      display: "inline-block",
      margin: 0,
      borderRadius: "var(--radius-2xl)",
      border: "2px solid var(--foreground)",
      background: "var(--card)",
      padding: "16px 32px",
      fontFamily: "var(--font-mono)",
      fontSize: 96,
      lineHeight: 1,
      fontWeight: 800,
      letterSpacing: "-0.025em",
      boxShadow: "var(--shadow-brut)"
    }
  }, "404"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "32px 0 0",
      fontSize: 36,
      lineHeight: "40px",
      fontWeight: 800,
      letterSpacing: "-0.025em"
    }
  }, "Pagina non trovata"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px auto 0",
      maxWidth: "28rem",
      color: "var(--muted-foreground)"
    }
  }, "Questa pagina non esiste (o non esiste pi\xF9). Nessun problema: da qui puoi ripartire."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("/")
  }, "Torna alla home"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => go("/articoli")
  }, "Leggi gli articoli")));
}
Object.assign(window, {
  SitoHome,
  SitoProgetti,
  SitoNotFound
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sito/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/youtube/stage.jsx
try { (() => {
// Contenitore che scala un frame a pixel fissi (1920×1080, 2048×1152) alla larghezza disponibile.
function Stage({
  w,
  h,
  children
}) {
  const ref = React.useRef(null);
  const [s, setS] = React.useState(0.5);
  React.useEffect(() => {
    const fit = () => ref.current && setS(ref.current.clientWidth / w);
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [w]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      width: "100%",
      aspectRatio: `${w} / ${h}`,
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      border: "2px solid var(--sabbia)",
      boxShadow: "6px 6px 0 0 var(--terracotta)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: w,
      height: h,
      transform: `scale(${s})`,
      transformOrigin: "0 0"
    }
  }, children));
}

// Fotogramma finto: "scuro" = camera fissa (foto reale), "chiaro" = ripresa dall'alto su scrivania chiara (segnaposto).
function Fotogramma({
  fondo,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      background: fondo === "chiaro" ? "#e6e1d3" : "#1b1914"
    }
  }, fondo === "scuro" ? /*#__PURE__*/React.createElement("img", {
    src: "../../assets/michele-ritratto.jpg",
    alt: "",
    style: {
      position: "absolute",
      left: "50%",
      top: 0,
      height: "100%",
      transform: "translateX(-50%)",
      objectFit: "cover",
      filter: "brightness(.9)"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: "repeating-linear-gradient(0deg, rgba(34,32,26,.06) 0 2px, transparent 2px 60px), repeating-linear-gradient(90deg, rgba(34,32,26,.06) 0 2px, transparent 2px 60px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 460,
      height: 880,
      borderRadius: 72,
      border: "6px dashed rgba(34,32,26,.35)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 30,
      color: "rgba(34,32,26,.55)",
      textAlign: "center"
    }
  }, "ripresa dall'alto", /*#__PURE__*/React.createElement("br", null), "iPhone")), children);
}
Object.assign(window, {
  Stage,
  Fotogramma
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/youtube/stage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CardInEvidenza = __ds_scope.CardInEvidenza;

__ds_ns.CoverArticolo = __ds_scope.CoverArticolo;

__ds_ns.TagFilter = __ds_scope.TagFilter;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.SezioneContatti = __ds_scope.SezioneContatti;

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SOCIALS = __ds_scope.SOCIALS;

__ds_ns.SocialIcon = __ds_scope.SocialIcon;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.YouTubePlayer = __ds_scope.YouTubePlayer;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardMeta = __ds_scope.CardMeta;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.ChannelBanner = __ds_scope.ChannelBanner;

__ds_ns.EndScreen = __ds_scope.EndScreen;

__ds_ns.KeyPhrase = __ds_scope.KeyPhrase;

__ds_ns.AppCard = __ds_scope.AppCard;

__ds_ns.ChapterTitle = __ds_scope.ChapterTitle;

__ds_ns.PillLabel = __ds_scope.PillLabel;

__ds_ns.AppTile = __ds_scope.AppTile;

__ds_ns.Thumbnail = __ds_scope.Thumbnail;

})();
