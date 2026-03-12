import Link from "next/link";

import type { Concept } from "@/types/concept";

type FeaturedConceptCardProps = {
  concept: Concept;
};

export function FeaturedConceptCard({ concept }: FeaturedConceptCardProps) {
  return (
    <Link
      href={`/concepts/${concept.slug}`}
      className="hero-surface-soft surface-raise group relative flex min-h-[18rem] flex-col overflow-hidden rounded-[1.6rem] border border-border p-6 shadow-[0_18px_40px_rgba(88,63,24,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-[0_24px_50px_rgba(217,119,6,0.16)]"
    >
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-accent/8 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.26em] text-accent uppercase">
            {concept.category}
          </p>
          <h3 className="mt-4 text-[1.9rem] font-black tracking-tight text-foreground">
            {concept.title}
          </h3>
        </div>
        <span className="rounded-full border border-accent/15 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          {concept.difficulty}
        </span>
      </div>

      <p className="relative mt-4 max-w-xl text-base leading-8 text-muted">
        {concept.summary}
      </p>

      <div className="relative mt-auto pt-8">
        <div className="overlay-surface rounded-[1.1rem] border border-border/70 px-4 py-3 text-sm leading-7 text-muted">
          {concept.keyPoints[0]}
        </div>

        <div className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-foreground">
          <span className="rounded-full bg-accent px-4 py-2 text-white transition-colors duration-300 group-hover:bg-accent-strong">
            Open concept
          </span>
          <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
