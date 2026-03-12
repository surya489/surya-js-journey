import Link from "next/link";

import type { Challenge } from "@/types/challenge";

type ChallengeCardProps = {
  challenge: Challenge;
};

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <Link
      href={`/challenges/${challenge.slug}`}
      className="group rounded-[1.5rem] border border-border bg-surface-strong p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-accent/35"
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

      <p className="mt-4 text-sm leading-7 text-muted">{challenge.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-muted">
        <span className="rounded-full bg-background/70 px-3 py-1">
          {challenge.estimatedMinutes} min
        </span>
        <span className="rounded-full bg-background/70 px-3 py-1">
          {challenge.conceptSlugs.length} linked concepts
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm font-semibold text-foreground">
        <span>Open challenge</span>
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
