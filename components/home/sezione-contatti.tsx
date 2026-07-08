import { email, socials } from "@/lib/site";

export function SezioneContatti() {
  return (
    <section
      id="contatti"
      className="scroll-mt-20 border-t-2 border-foreground bg-foreground text-background"
    >
      <div className="mx-auto max-w-4xl px-4 py-16">
        <p className="font-mono text-sm font-bold text-secondary">
          ## Contatti
        </p>
        <h2 className="mt-1 text-3xl font-extrabold tracking-tight">
          Parliamone ✉️
        </h2>
        <p className="mt-3 max-w-md text-background/70">
          Hai un&apos;attività e ti serve un sito? O vuoi solo dire ciao? Scrivimi.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${email}`}
            className="rounded-full border-2 border-background bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {email}
          </a>
          {socials.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-background px-5 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              {social.nome}
            </a>
          ))}
        </div>
        <p className="mt-12 font-mono text-xs text-background/50">
          © {new Date().getFullYear()} michele_ · fatto con Next.js e caffè
        </p>
      </div>
    </section>
  );
}
