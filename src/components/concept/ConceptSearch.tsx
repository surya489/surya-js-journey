"use client";

import { useMemo, useState } from "react";

import { ConceptCard } from "@/components/concept/ConceptCard";
import type { Concept } from "@/types/concept";

type ConceptSearchProps = {
  concepts: Concept[];
};

export function ConceptSearch({ concepts }: ConceptSearchProps) {
  const [query, setQuery] = useState("");

  const filteredConcepts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return concepts;
    }

    return concepts.filter((concept) => {
      const haystack = [
        concept.title,
        concept.summary,
        concept.category,
        concept.difficulty,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [concepts, query]);

  return (
    <div className="space-y-5">
      <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
        <label className="block">
          <span className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
            Search Concepts
          </span>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title, category, or difficulty"
            className="mt-4 w-full rounded-[1.1rem] border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent/40"
          />
        </label>
        <p className="mt-3 text-sm text-muted">
          Showing {filteredConcepts.length} of {concepts.length} concepts
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        {filteredConcepts.map((concept) => (
          <ConceptCard key={concept.slug} concept={concept} />
        ))}
      </div>

      {filteredConcepts.length === 0 ? (
        <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5 text-sm leading-7 text-muted">
          No concepts match this search yet. Try a topic like `closure`,
          `promise`, or `browser`.
        </div>
      ) : null}
    </div>
  );
}
