"use client";

import { NavbarSearch } from "@/components/layout/NavbarSearch";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import type { Concept } from "@/types/concept";

type NavbarProps = {
  concepts: Concept[];
  onMenuToggle: () => void;
};

export function Navbar({ concepts, onMenuToggle }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 rounded-[1.5rem] border border-border bg-surface/95 px-4 py-4 shadow-[var(--shadow)] backdrop-blur md:px-5 md:py-5 xl:static xl:rounded-[1.75rem]">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,26rem)] lg:items-center xl:grid-cols-[minmax(0,1fr)_minmax(24rem,30rem)]">
        <div className="max-w-2xl">
          <button
            type="button"
            onClick={onMenuToggle}
            className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-strong text-foreground transition-colors hover:border-accent/30 hover:text-accent xl:hidden"
            aria-label="Open navigation menu"
            title="Open navigation menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-none stroke-current"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
          <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">
            Surya JS Journey
          </p>
          <h1 className="mt-2 text-xl font-black tracking-tight text-foreground sm:text-2xl md:text-3xl">
            Learn JavaScript through concepts, code, and guided practice.
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
            A focused workspace for concept study, interactive examples, visual explanations, and challenge solving.
          </p>
        </div>

        <div className="hero-surface-soft rounded-[1.25rem] border border-border p-2.5 shadow-[0_14px_30px_rgba(88,63,24,0.08)] md:rounded-[1.4rem] md:p-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <NavbarSearch concepts={concepts} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
