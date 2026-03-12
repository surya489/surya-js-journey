import Link from "next/link";

import type { Concept } from "@/types/concept";

type SidebarProps = {
  concepts: Concept[];
};

export function Sidebar({ concepts }: SidebarProps) {
  return (
    <aside className="rounded-[1.75rem] border border-border bg-surface p-5 shadow-[var(--shadow)] backdrop-blur">
      <div className="border-b border-border pb-4">
        <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
          Concepts
        </p>
        <h2 className="mt-2 text-xl font-bold text-foreground">
          Core JavaScript topics
        </h2>
        <p className="mt-2 text-sm leading-7 text-muted">
          Start with the fundamentals, then move into async behavior and runtime
          internals.
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {concepts.map((concept) => (
          <Link
            key={concept.slug}
            href={`/concepts/${concept.slug}`}
            className="block rounded-[1.25rem] border border-border bg-surface-strong px-4 py-3 transition-colors hover:border-accent/30"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {concept.title}
                </p>
                <p className="mt-1 text-xs text-muted">{concept.category}</p>
              </div>
              <span className="rounded-full bg-background px-2.5 py-1 text-[11px] font-semibold text-muted">
                {concept.difficulty}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
