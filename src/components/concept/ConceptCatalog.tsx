"use client";

import { useEffect, useMemo, useState } from "react";

import { ConceptCard } from "@/components/concept/ConceptCard";
import { CustomSelect } from "@/components/ui/CustomSelect";
import type { Concept } from "@/types/concept";
import { Reveal } from "../layout/Reveal";
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

function getVisiblePages(currentPage: number, totalPages: number) {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, "...", currentPage, "...", totalPages];
}

type ConceptCatalogProps = {
  concepts: Concept[];
};

export function ConceptCatalog({ concepts }: ConceptCatalogProps) {
  const categoryOptions = useMemo(
    () => [
      { label: "All categories", value: "All" },
      ...[...new Set(concepts.map((concept) => concept.category))]
        .sort()
        .map((category) => ({
          label: category,
          value: category,
        })),
    ],
    [concepts],
  );

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);
  const filteredConcepts = useMemo(
    () =>
      selectedCategory === "All"
        ? concepts
        : concepts.filter((concept) => concept.category === selectedCategory),
    [concepts, selectedCategory],
  );
  const totalPages = Math.max(1, Math.ceil(filteredConcepts.length / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [filteredConcepts.length, selectedCategory]);

  const paginatedConcepts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredConcepts.slice(start, start + PAGE_SIZE);
  }, [filteredConcepts, page]);
  const visiblePages = useMemo(
    () => getVisiblePages(page, totalPages),
    [page, totalPages],
  );
  const categorySummary = useMemo(
    () =>
      categoryOptions
        .filter((option) => option.value !== "All")
        .map((option) => ({
          label: option.label,
          count: concepts.filter((concept) => concept.category === option.value).length,
        })),
    [categoryOptions, concepts],
  );

  return (
    <div className="space-y-6">

      <Reveal delay={260}>
        <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                Browse Concepts
              </p>
              <h3 className="mt-2 text-2xl font-bold text-foreground">
                Four concepts per page for focused reading
              </h3>
            </div>
            <div className="w-full lg:w-[17rem]">
              <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                Category Filter
              </p>
              <div className="mt-3">
                <CustomSelect
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  options={categoryOptions}
                  ariaLabel="Filter concepts by category"
                />
              </div>
            </div>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            Use the top search to jump directly to one concept, or filter by category here and move page by page through the library.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {categorySummary.map((item) => {
              const active = selectedCategory === item.label;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() =>
                    setSelectedCategory((current) =>
                      current === item.label ? "All" : item.label,
                    )
                  }
                  className={`rounded-[1.2rem] border p-4 text-left transition-all duration-200 ${active
                      ? "border-accent bg-accent text-white shadow-[0_16px_34px_rgba(217,119,6,0.18)]"
                      : "border-border bg-background/55 text-foreground hover:border-accent/30"
                    }`}
                >
                  <p className={`text-xs font-semibold tracking-[0.18em] uppercase ${active ? "text-amber-50/85" : "text-accent"}`}>
                    Category
                  </p>
                  <p className="mt-3 text-lg font-bold">{item.label}</p>
                  <p className={`mt-2 text-sm ${active ? "text-amber-50/85" : "text-muted"}`}>
                    {item.count} concepts
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal delay={320}>
        <div className="flex flex-col gap-2 rounded-[1.5rem] border border-border bg-surface-strong p-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
              Current Library View
            </p>
            <h3 className="mt-2 text-2xl font-bold text-foreground">
              {selectedCategory === "All"
                ? "All concept categories"
                : `${selectedCategory} concepts`}
            </h3>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted">
            Showing {filteredConcepts.length} matching concepts. Pagination updates automatically when the current filter changes.
          </p>
        </div>
      </Reveal>

      <Reveal delay={380}>
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
      </Reveal>
      <Reveal delay={440}>
        <div className="flex flex-col gap-4 rounded-[1.5rem] border border-border bg-surface-strong p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            Page {page} of {totalPages} • Showing {paginatedConcepts.length} of {filteredConcepts.length} concepts
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
            {visiblePages.map((pageItem, index) =>
              pageItem === "..." ? (
                <span
                  key={`ellipsis-${index}`}
                  className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-border bg-background/45 px-3 text-sm font-semibold text-muted"
                >
                  ...
                </span>
              ) : (
                <button
                  key={pageItem}
                  type="button"
                  onClick={() => setPage(Number(pageItem))}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${pageItem === page
                      ? "bg-accent text-white"
                      : "border border-border bg-background/70 text-foreground"
                    }`}
                >
                  {pageItem}
                </button>
              ),
            )}
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
      </Reveal>
    </div >
  );
}
