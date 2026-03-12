"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Concept } from "@/types/concept";

type SidebarProps = {
  concepts: Concept[];
};

export function Sidebar({ concepts }: SidebarProps) {
  const pathname = usePathname();

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

      <div className="mt-5 flex gap-3 overflow-x-auto pb-1 xl:block xl:space-y-3 xl:overflow-visible">
        {concepts.map((concept) => (
          <Link
            key={concept.slug}
            href={`/concepts/${concept.slug}`}
            className={`block min-w-64 rounded-[1.25rem] border px-4 py-3 transition-colors xl:min-w-0 ${
              pathname === `/concepts/${concept.slug}`
                ? "border-accent bg-accent/10"
                : "border-border bg-surface-strong hover:border-accent/30"
            }`}
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
