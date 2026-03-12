import Link from "next/link";

import type { Challenge } from "@/types/challenge";

type ChallengeCardProps = {
  challenge: Challenge;
};

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <Link
      href={`/challenges/${challenge.slug}`}
      className="surface-raise group flex h-full min-h-[19rem] flex-col overflow-hidden rounded-[1.5rem] border border-border bg-surface-strong p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_20px_45px_rgba(217,119,6,0.12)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
            Challenge
          </p>
          <h3 className="mt-3 text-xl font-bold text-foreground">
            {challenge.title}
          </h3>
        </div>
        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          {challenge.difficulty}
        </span>
      </div>

      <p className="mt-4 line-clamp-4 text-sm leading-7 text-muted">{challenge.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-muted">
        <span className="rounded-full bg-background/70 px-3 py-1">
          {challenge.estimatedMinutes} min
        </span>
        <span className="rounded-full bg-background/70 px-3 py-1">
          {challenge.conceptSlugs.length} linked concepts
        </span>
      </div>

      <div className="mt-auto pt-8">
        <div className="inline-flex items-center gap-3 text-sm font-semibold">
          <span className="rounded-full bg-accent px-4 py-2 text-white transition-colors duration-200 group-hover:bg-accent-strong">
            Open challenge
          </span>
          <span className="text-accent transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
