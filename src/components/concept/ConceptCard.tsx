import Link from "next/link";

import type { Concept } from "@/types/concept";

type ConceptCardProps = {
  concept: Concept;
};

export function ConceptCard({ concept }: ConceptCardProps) {
  return (
    <Link
      href={`/concepts/${concept.slug}`}
      className="group rounded-[1.5rem] border border-border bg-surface-strong p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-accent/35"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
            {concept.category}
          </p>
          <h3 className="mt-3 text-xl font-bold text-foreground">
            {concept.title}
          </h3>
        </div>
        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          {concept.difficulty}
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-muted">{concept.description}</p>

      <div className="mt-5 flex items-center justify-between text-sm font-semibold text-foreground">
        <span>Open concept</span>
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
