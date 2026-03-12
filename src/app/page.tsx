import Link from "next/link";

import { ConceptCard } from "@/components/concept/ConceptCard";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { getAllChallenges } from "@/lib/challenges";
import { getAllConcepts } from "@/lib/concepts";

export default function Home() {
  const concepts = getAllConcepts();
  const challenges = getAllChallenges();
  const featuredConcepts = concepts.slice(0, 3);

  return (
    <LayoutWrapper concepts={concepts}>
      <div className="space-y-8">
        <section className="rounded-[1.75rem] border border-border bg-[linear-gradient(135deg,rgba(255,250,240,0.95),rgba(255,237,213,0.92))] p-6">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                JavaScript Learning Platform
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-5xl">
                Learn core JavaScript concepts through explanation, examples, and hands-on practice.
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                Surya JS Journey is designed to help you move from theory to
                working code. Browse key concepts, study examples, and build
                confidence with an interface made for focused learning.
              </p>
            </div>

            <div className="grid gap-3 rounded-[1.5rem] border border-border bg-surface-strong p-5 text-sm text-muted xl:min-w-80">
              <p className="font-semibold text-foreground">What you can do</p>
              <p>{concepts.length} concepts across focused JavaScript topics</p>
              <p>{challenges.length} challenge flows with validation</p>
              <p>Guided visualizer, playground, and concept deep-dives</p>
            </div>
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
            <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
              Platform Preview
            </p>
            <h3 className="mt-3 text-2xl font-bold text-foreground">
              Built for structured learning
            </h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.25rem] bg-background/70 p-4">
                <p className="text-sm font-semibold text-foreground">
                  Concepts
                </p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Browse topics like closures, hoisting, promises, and the event
                  loop.
                </p>
              </div>
              <div className="rounded-[1.25rem] bg-background/70 p-4">
                <p className="text-sm font-semibold text-foreground">
                  Playground
                </p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Practice code in a dedicated space with room for editing,
                  execution, and output-driven learning.
                </p>
              </div>
              <div className="rounded-[1.25rem] bg-background/70 p-4">
                <p className="text-sm font-semibold text-foreground">
                  Challenges
                </p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Solve practical exercises with hints, validation, and linked concepts.
                </p>
              </div>
              <div className="rounded-[1.25rem] bg-background/70 p-4">
                <p className="text-sm font-semibold text-foreground">
                  Visualizer
                </p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Step through event loop scenarios with queue-by-queue feedback.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-border bg-foreground p-5 text-background">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-amber-300">
              Platform Direction
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-amber-50/80">
              <li>Clear explanations for essential JavaScript behavior</li>
              <li>Interactive examples and playground-based exploration</li>
              <li>Challenge-driven practice for interview preparation</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/concepts"
                className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
              >
                Explore Concepts
              </Link>
              <Link
                href="/visualizer"
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-amber-50"
              >
                Open Visualizer
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
            <p className="text-sm font-semibold text-foreground">Concept Library</p>
            <p className="mt-3 text-3xl font-black text-accent">{concepts.length}</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              Functions, async behavior, runtime internals, and performance patterns.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
            <p className="text-sm font-semibold text-foreground">Challenge Bank</p>
            <p className="mt-3 text-3xl font-black text-accent">{challenges.length}</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              Practical exercises with hints, validation, and linked concept review.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
            <p className="text-sm font-semibold text-foreground">Interactive Modes</p>
            <p className="mt-3 text-3xl font-black text-accent">3</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              Playground practice, challenge solving, and visual execution walkthroughs.
            </p>
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                Featured Concepts
              </p>
              <h3 className="mt-2 text-2xl font-bold text-foreground">
                Start with these fundamentals
              </h3>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-3">
            {featuredConcepts.map((concept) => (
              <ConceptCard key={concept.slug} concept={concept} />
            ))}
          </div>
        </section>
      </div>
    </LayoutWrapper>
  );
}
