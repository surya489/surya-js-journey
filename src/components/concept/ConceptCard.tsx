import Link from "next/link";

import type { Concept } from "@/types/concept";

type ConceptCardProps = {
  concept: Concept;
};

export function ConceptCard({ concept }: ConceptCardProps) {
  return (
    <Link
      href={`/concepts/${concept.slug}`}
      className="surface-raise group flex h-full min-h-[18rem] flex-col overflow-hidden rounded-[1.5rem] border border-border bg-surface-strong p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_20px_45px_rgba(217,119,6,0.12)]"
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

      <p className="mt-4 line-clamp-4 text-sm leading-7 text-muted">{concept.summary}</p>

      <div className="mt-auto pt-8">
        <div className="rounded-[1rem] bg-background/55 px-4 py-3 text-xs leading-6 text-muted">
          {concept.keyPoints[0]}
        </div>
        <div className="mt-4 inline-flex items-center gap-3">
          <span className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-accent-strong">
            Open concept
          </span>
          <span className="text-sm font-semibold text-accent transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
