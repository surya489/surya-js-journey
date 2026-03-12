"use client";

import { useEffect, useMemo, useState } from "react";

import { ConceptCard } from "@/components/concept/ConceptCard";
import type { Concept } from "@/types/concept";

const PAGE_SIZE = 4;

function PaginationArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <path d="m15 6-6 6 6 6" />
      ) : (
        <path d="m9 6 6 6-6 6" />
      )}
    </svg>
  );
}

type ConceptCatalogProps = {
  concepts: Concept[];
};

export function ConceptCatalog({ concepts }: ConceptCatalogProps) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(concepts.length / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [concepts.length]);

  const paginatedConcepts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return concepts.slice(start, start + PAGE_SIZE);
  }, [concepts, page]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 rounded-[1.5rem] border border-border bg-surface-strong p-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
            Browse Concepts
          </p>
          <h3 className="mt-2 text-2xl font-bold text-foreground">
            Four concepts per page for focused reading
          </h3>
        </div>
        <p className="max-w-xl text-sm leading-7 text-muted">
          Use the top search to jump directly to one concept, or move page by page through the library here.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {paginatedConcepts.map((concept, index) => (
          <div
            key={concept.slug}
            className="animate-[float-up_0.45s_ease-out_both]"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <ConceptCard concept={concept} />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 rounded-[1.5rem] border border-border bg-surface-strong p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Page {page} of {totalPages} • Showing {paginatedConcepts.length} of {concepts.length} concepts
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={page === 1}
            aria-label="Previous concepts page"
            title="Previous concepts page"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition-colors disabled:opacity-45"
          >
            <PaginationArrow direction="left" />
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              onClick={() => setPage(pageNumber)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                pageNumber === page
                  ? "bg-accent text-white"
                  : "border border-border bg-background/70 text-foreground"
              }`}
            >
              {pageNumber}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            disabled={page === totalPages}
            aria-label="Next concepts page"
            title="Next concepts page"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition-colors disabled:opacity-45"
          >
            <PaginationArrow direction="right" />
          </button>
        </div>
      </div>
    </div>
  );
}
