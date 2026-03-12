"use client";

import { useMemo, useState } from "react";

import { ChallengeCard } from "@/components/challenge/ChallengeCard";
import type { Challenge } from "@/types/challenge";

type ChallengeSearchProps = {
  challenges: Challenge[];
};

export function ChallengeSearch({ challenges }: ChallengeSearchProps) {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("All");

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

  return (
    <div className="space-y-5">
      <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
          <label className="block">
            <span className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
              Search Challenges
            </span>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title or prompt"
              className="mt-4 w-full rounded-[1.1rem] border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent/40"
            />
          </label>

          <label className="block">
            <span className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
              Difficulty
            </span>
            <select
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value)}
              className="mt-4 w-full rounded-[1.1rem] border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent/40"
            >
              <option value="All">All</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </label>
        </div>

        <p className="mt-3 text-sm text-muted">
          Showing {filteredChallenges.length} of {challenges.length} challenges
        </p>
      </div>

      {filteredChallenges.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-3">
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
      ) : null}

      <div className="grid gap-5 xl:grid-cols-3">
        {filteredChallenges.map((challenge) => (
          <ChallengeCard key={challenge.slug} challenge={challenge} />
        ))}
      </div>

      {filteredChallenges.length === 0 ? (
        <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5 text-sm leading-7 text-muted">
          No challenges match the current search. Try `promise`, `counter`, or
          a different difficulty.
        </div>
      ) : null}
    </div>
  );
}
