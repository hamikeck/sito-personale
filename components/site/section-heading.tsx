import { cn } from "@/lib/utils";

export function SectionHeading({
  etichetta,
  titolo,
  livello: Titolo = "h2",
  className,
}: {
  etichetta: string;
  titolo: string;
  livello?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={cn("mb-8", className)}>
      <p className="font-mono text-sm font-bold text-primary">## {etichetta}</p>
      <Titolo className="mt-1 text-3xl font-extrabold tracking-tight">
        {titolo}
      </Titolo>
    </div>
  );
}
