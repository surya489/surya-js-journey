import Link from "next/link";

import { FeaturedConceptCard } from "@/components/concept/FeaturedConceptCard";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { Reveal } from "@/components/layout/Reveal";
import { getAllChallenges } from "@/lib/challenges";
import { getAllConcepts } from "@/lib/concepts";

export default function Home() {
  const concepts = getAllConcepts();
  const challenges = getAllChallenges();
  const featuredConcepts = concepts.slice(0, 2);

  return (
    <LayoutWrapper concepts={concepts}>
      <div className="space-y-8">
        <Reveal>
          <section className="hero-surface surface-raise overflow-hidden rounded-[1.5rem] border border-border p-4 sm:p-6 md:p-8 xl:rounded-[1.75rem]">
            <div className="relative">
              <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-accent/8 blur-3xl" />
              <div className="max-w-4xl">
                <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                  JavaScript Learning Platform
                </p>
                <h2 className="relative mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1] xl:text-6xl xl:leading-[0.96]">
                  Learn JavaScript with clear concepts, runnable examples, and focused practice.
                </h2>
                <p className="relative mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                  Move from explanation to execution without switching contexts. Study one idea, run the code, solve a challenge, and verify async behavior visually when needed.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/concepts"
                    className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    Explore Concepts
                  </Link>
                  <Link
                    href="/challenges"
                    className="rounded-full border border-border bg-surface-strong px-5 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Solve Challenges
                  </Link>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="overlay-surface rounded-[1.2rem] border border-border/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(88,63,24,0.08)]">
                  <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                    Concepts
                  </p>
                  <p className="mt-3 text-3xl font-black text-foreground">{concepts.length}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Structured lessons with runnable examples.
                  </p>
                </div>
                <div className="overlay-surface rounded-[1.2rem] border border-border/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(88,63,24,0.08)]">
                  <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                    Challenges
                  </p>
                  <p className="mt-3 text-3xl font-black text-foreground">{challenges.length}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Validation-based practice sessions.
                  </p>
                </div>
                <div className="overlay-surface rounded-[1.2rem] border border-border/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(88,63,24,0.08)]">
                  <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                    Modes
                  </p>
                  <p className="mt-3 text-3xl font-black text-foreground">3</p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Concepts, challenges, and the visualizer.
                  </p>
                </div>
              </div>

              <div className="overlay-surface mt-4 rounded-[1.5rem] border border-border/70 p-5">
                <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                  Learning Flow
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-[1.1rem] bg-background/70 p-4 transition-all duration-300 hover:-translate-y-1">
                    <p className="text-sm font-semibold text-foreground">1. Study the concept</p>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      Read a focused explanation and identify the key behavior.
                    </p>
                  </div>
                  <div className="rounded-[1.1rem] bg-background/70 p-4 transition-all duration-300 hover:-translate-y-1">
                    <p className="text-sm font-semibold text-foreground">2. Run the example</p>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      Execute the example code and inspect the output directly.
                    </p>
                  </div>
                  <div className="rounded-[1.1rem] bg-background/70 p-4 transition-all duration-300 hover:-translate-y-1">
                    <p className="text-sm font-semibold text-foreground">3. Reinforce with practice</p>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      Solve a challenge or use the visualizer to understand the runtime sequence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="inverse-surface mt-4 rounded-[1.5rem] px-5 py-5">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-amber-300">
                  Includes
                </p>
                <p className="inverse-muted mt-3 leading-7">
                  Shared playground, event loop visualizer, concept pages, Monaco-based editing, and validation-driven challenge solving.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal delay={80}>
          <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="surface-raise rounded-[1.5rem] border border-border bg-surface-strong p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(88,63,24,0.08)]">
              <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                Platform Preview
              </p>
              <h3 className="mt-3 text-2xl font-bold text-foreground">
                One workspace, four focused learning paths
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.25rem] bg-background/70 p-4 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-sm font-semibold text-foreground">Concepts</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    Read topics like closures, hoisting, promises, async/await, and the event loop.
                  </p>
                </div>
                <div className="rounded-[1.25rem] bg-background/70 p-4 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-sm font-semibold text-foreground">Playground</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    Edit examples, run them instantly, and inspect console output in one place.
                  </p>
                </div>
                <div className="rounded-[1.25rem] bg-background/70 p-4 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-sm font-semibold text-foreground">Challenges</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    Practice with guided hints and pass/fail validation against expected output.
                  </p>
                </div>
                <div className="rounded-[1.25rem] bg-background/70 p-4 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-sm font-semibold text-foreground">Visualizer</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    Understand queues, execution order, and async behavior step by step.
                  </p>
                </div>
              </div>
            </div>

            <div className="inverse-surface surface-raise rounded-[1.5rem] border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(0,0,0,0.22)]">
              <p className="text-xs font-semibold tracking-[0.24em] uppercase text-amber-300">
                Built For Practice
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--inverse-foreground)]">
                Keep theory and execution in the same workflow.
              </h3>
              <p className="inverse-muted mt-4 text-sm leading-7">
                The platform is designed so each concept flows into code, each challenge reinforces a concept, and the visualizer handles the runtime cases that are difficult to explain with plain text alone.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/visualizer"
                  className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Open Visualizer
                </Link>
                <Link
                  href="/playground"
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-[var(--inverse-foreground)] transition-transform hover:-translate-y-0.5"
                >
                  Jump to Playground
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal delay={140}>
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
              <Link
                href="/concepts"
                className="hidden rounded-full border border-border bg-surface-strong px-4 py-2 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
              >
                View all concepts
              </Link>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {featuredConcepts.map((concept) => (
                <FeaturedConceptCard key={concept.slug} concept={concept} />
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </LayoutWrapper>
  );
}
