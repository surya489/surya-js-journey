"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import type { Concept } from "@/types/concept";

type NavbarSearchProps = {
  concepts: Concept[];
};

export function NavbarSearch({ concepts }: NavbarSearchProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setDebouncedQuery(query.trim().toLowerCase());
    }, 220);

    return () => window.clearTimeout(timeout);
  }, [query]);

  useEffect(() => {
    setOpen(false);
    setQuery("");
    setDebouncedQuery("");
  }, [pathname]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const results = useMemo(() => {
    if (!debouncedQuery) {
      return [];
    }

    return concepts
      .filter((concept) =>
        [concept.title, concept.summary, concept.category, concept.difficulty]
          .join(" ")
          .toLowerCase()
          .includes(debouncedQuery),
      )
      .slice(0, 6);
  }, [concepts, debouncedQuery]);

  return (
    <div ref={containerRef} className="relative min-w-0 flex-1">
      <label className="block">
        <span className="sr-only">Search concepts</span>
        <div className="control-surface flex items-center gap-3 rounded-[1rem] border border-border px-3 py-3 text-sm text-muted transition-all duration-300 focus-within:border-accent/45 focus-within:shadow-[0_14px_30px_rgba(217,119,6,0.12)] sm:rounded-[1.15rem] sm:px-4 sm:py-3.5">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-none stroke-current text-accent"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="6.5" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setOpen(event.target.value.trim().length > 0);
            }}
            onFocus={() => setOpen(true)}
            placeholder="Search concepts"
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
          />
        </div>
      </label>

      {open && debouncedQuery ? (
        <div className="absolute left-0 right-0 top-[calc(100%+0.55rem)] z-40 overflow-hidden rounded-[1rem] border border-border bg-surface shadow-[var(--shadow)] animate-[float-up_0.22s_ease-out_both] sm:top-[calc(100%+0.7rem)] sm:rounded-[1.25rem]">
          {results.length > 0 ? (
            <div className="max-h-80 overflow-y-auto p-2">
              {results.map((concept) => (
                <Link
                  key={concept.slug}
                  href={`/concepts/${concept.slug}`}
                  className="block rounded-[1rem] px-4 py-3 transition-all duration-200 hover:bg-background/70"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {concept.title}
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        {concept.category} • {concept.difficulty}
                      </p>
                    </div>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent">
                      Open
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-4 py-4 text-sm text-muted">
              No concept matches “{query}”.
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
