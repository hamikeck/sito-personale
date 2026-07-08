import { cn } from "@/lib/utils";

export function SectionHeading({
  etichetta,
  titolo,
  className,
}: {
  etichetta: string;
  titolo: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-8", className)}>
      <p className="font-mono text-sm font-bold text-primary">## {etichetta}</p>
      <h2 className="mt-1 text-3xl font-extrabold tracking-tight">{titolo}</h2>
    </div>
  );
}
