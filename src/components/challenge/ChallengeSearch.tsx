"use client";

import { useEffect, useMemo, useState } from "react";

import { ChallengeCard } from "@/components/challenge/ChallengeCard";
import { CustomSelect } from "@/components/ui/CustomSelect";
import type { Challenge } from "@/types/challenge";
import { Reveal } from "../layout/Reveal";

type ChallengeSearchProps = {
  challenges: Challenge[];
};

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

export function ChallengeSearch({ challenges }: ChallengeSearchProps) {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [page, setPage] = useState(1);

  const filteredChallenges = useMemo(() => {
    return challenges.filter((challenge) => {
      const matchesDifficulty =
        difficulty === "All" || challenge.difficulty === difficulty;

      const normalizedQuery = query.trim().toLowerCase();
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [challenge.title, challenge.summary, challenge.prompt]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesDifficulty && matchesQuery;
    });
  }, [challenges, difficulty, query]);

  useEffect(() => {
    setPage(1);
  }, [query, difficulty]);

  const totalPages = Math.max(1, Math.ceil(filteredChallenges.length / PAGE_SIZE));
  const paginatedChallenges = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredChallenges.slice(start, start + PAGE_SIZE);
  }, [filteredChallenges, page]);
  const visiblePages = useMemo(
    () => getVisiblePages(page, totalPages),
    [page, totalPages],
  );

  const difficultyOptions = [
    { label: "All", value: "All" },
    { label: "Beginner", value: "Beginner" },
    { label: "Intermediate", value: "Intermediate" },
    { label: "Advanced", value: "Advanced" },
  ];

  return (
    <div className="space-y-5">
      <Reveal delay={200}>
      <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
          <label className="block">
            <span className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
              Search Challenges
            </span>
            <div className="control-surface mt-4 flex items-center gap-3 rounded-[1.15rem] border border-border px-4 py-3.5 text-sm text-muted transition-all duration-300 focus-within:border-accent/45 focus-within:shadow-[0_14px_30px_rgba(217,119,6,0.12)]">
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
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title or prompt"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
              />
            </div>
          </label>

          <label className="block">
            <span className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
              Difficulty
            </span>
            <div className="mt-4">
              <CustomSelect
                value={difficulty}
                onChange={setDifficulty}
                options={difficultyOptions}
                ariaLabel="Filter challenges by difficulty"
              />
            </div>
          </label>
        </div>

        <p className="mt-3 text-sm text-muted">
          Showing {filteredChallenges.length} of {challenges.length} challenges
        </p>
      </div>
      </Reveal>

      {filteredChallenges.length > 0 ? (
        <Reveal delay={260}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[1.25rem] border border-border bg-surface-strong p-4">
            <p className="text-sm font-semibold text-foreground">Visible Challenges</p>
            <p className="mt-2 text-3xl font-black text-accent">
              {filteredChallenges.length}
            </p>
          </div>
          <div className="rounded-[1.25rem] border border-border bg-surface-strong p-4">
            <p className="text-sm font-semibold text-foreground">Fastest Start</p>
            <p className="mt-2 text-base leading-7 text-muted">
              {Math.min(...filteredChallenges.map((challenge) => challenge.estimatedMinutes))}{" "}
              minutes to complete
            </p>
          </div>
          <div className="rounded-[1.25rem] border border-border bg-surface-strong p-4">
            <p className="text-sm font-semibold text-foreground">Focus</p>
            <p className="mt-2 text-base leading-7 text-muted">
              Choose a challenge, solve it in the editor, and validate the output.
            </p>
          </div>
        </div>
        </Reveal>
      ) : null}

      <Reveal delay={320}>
      <div className="grid gap-5 lg:grid-cols-2">
        {paginatedChallenges.map((challenge) => (
          <ChallengeCard key={challenge.slug} challenge={challenge} />
        ))}
      </div>
      </Reveal>

      {filteredChallenges.length > 0 ? (
        <div className="flex flex-col gap-4 rounded-[1.5rem] border border-border bg-surface-strong p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            Page {page} of {totalPages} • Showing {paginatedChallenges.length} of {filteredChallenges.length} challenges
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              disabled={page === 1}
              aria-label="Previous challenges page"
              title="Previous challenges page"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground disabled:opacity-45"
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
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    pageItem === page
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
              aria-label="Next challenges page"
              title="Next challenges page"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground disabled:opacity-45"
            >
              <PaginationArrow direction="right" />
            </button>
          </div>
        </div>
      ) : null}

      {filteredChallenges.length === 0 ? (
        <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5 text-sm leading-7 text-muted">
          No challenges match the current search. Try `promise`, `counter`, or
          a different difficulty.
        </div>
      ) : null}
    </div>
  );
}
