import Link from "next/link";

import { getChallengeBySlug } from "@/lib/challenges";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { PlaygroundPanel } from "@/components/editor/PlaygroundPanel";
import { getAllConcepts, getConceptBySlug } from "@/lib/concepts";

const starterCode = `function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Surya"));
console.log(greet("JavaScript"));`;

type PlaygroundPageProps = {
  searchParams: Promise<{
    concept?: string;
    challenge?: string;
  }>;
};

export default async function PlaygroundPage({
  searchParams,
}: PlaygroundPageProps) {
  const { concept: conceptSlug, challenge: challengeSlug } = await searchParams;
  const concepts = getAllConcepts();
  const selectedConcept = conceptSlug ? getConceptBySlug(conceptSlug) : undefined;
  const selectedChallenge = challengeSlug
    ? getChallengeBySlug(challengeSlug)
    : undefined;

  const playgroundSource = selectedChallenge
    ? {
        eyebrow: "Challenge Playground",
        title: selectedChallenge.title,
        description: selectedChallenge.prompt,
        code: selectedChallenge.starterCode,
        output: selectedChallenge.expectedOutcome,
        fileName: `${selectedChallenge.slug}.js`,
        mode: "challenge" as const,
      }
    : selectedConcept
      ? {
          eyebrow: "Concept Playground",
          title: selectedConcept.title,
          description: selectedConcept.description,
          code: selectedConcept.exampleCode,
          output: selectedConcept.expectedOutput,
          fileName: `${selectedConcept.slug}.js`,
          mode: "practice" as const,
        }
      : {
          eyebrow: "Playground",
          title: "Edit JavaScript and run it in the browser.",
          description:
            "Use this workspace to experiment freely. You can change the code, run it, inspect the output, and reset back to the starter snippet at any time.",
          code: starterCode,
          output: undefined,
          fileName: "playground.js",
          mode: "practice" as const,
        };

  const modeLabel =
    playgroundSource.mode === "challenge" ? "Challenge mode" : "Practice mode";
  const sourceLabel = selectedChallenge
    ? "Loaded from a challenge"
    : selectedConcept
      ? "Loaded from a concept"
      : "Default starter workspace";

  return (
    <LayoutWrapper concepts={concepts}>
      <div className="space-y-8">
        <section className="hero-surface overflow-hidden rounded-[1.5rem] border border-border p-4 sm:p-6 md:p-8 xl:rounded-[1.75rem]">
          <div className="relative">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/8 blur-3xl" />
            <div className="max-w-4xl">
              <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                {playgroundSource.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1.02]">
                {playgroundSource.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
                {playgroundSource.description}
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overlay-surface rounded-[1.2rem] border border-border/70 p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                  Mode
                </p>
                <p className="mt-3 text-xl font-bold text-foreground">{modeLabel}</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Run code, inspect output, and reset instantly.
                </p>
              </div>
              <div className="overlay-surface rounded-[1.2rem] border border-border/70 p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                  Source
                </p>
                <p className="mt-3 text-xl font-bold text-foreground">{sourceLabel}</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Starter code is loaded directly into the editor.
                </p>
              </div>
              <div className="overlay-surface rounded-[1.2rem] border border-border/70 p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                  File
                </p>
                <p className="mt-3 text-xl font-bold text-foreground break-words">
                  {playgroundSource.fileName}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Same code, editable immediately in the browser.
                </p>
              </div>
            </div>

            <div className="inverse-surface mt-4 rounded-[1.5rem] border border-border p-5">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-amber-300">
                Workspace Flow
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-[1rem] bg-white/6 px-4 py-3">
                  <p className="text-sm font-semibold text-[var(--inverse-foreground)]">1. Edit the snippet</p>
                  <p className="inverse-muted mt-2 text-sm leading-7">
                    Change the code freely to test ideas and edge cases.
                  </p>
                </div>
                <div className="rounded-[1rem] bg-white/6 px-4 py-3">
                  <p className="text-sm font-semibold text-[var(--inverse-foreground)]">2. Run and inspect</p>
                  <p className="inverse-muted mt-2 text-sm leading-7">
                    Use the output panel to confirm behavior and catch runtime errors.
                  </p>
                </div>
                <div className="rounded-[1rem] bg-white/6 px-4 py-3">
                  <p className="text-sm font-semibold text-[var(--inverse-foreground)]">3. Reset or continue</p>
                  <p className="inverse-muted mt-2 text-sm leading-7">
                    Restore the starter or branch into your own experiment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PlaygroundPanel
          initialCode={playgroundSource.code}
          expectedOutput={playgroundSource.output}
          title={playgroundSource.fileName}
          mode={playgroundSource.mode}
          validationLabel="Challenge Result"
        />

        {(selectedConcept || selectedChallenge) ? (
          <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
            <p className="text-sm leading-7 text-muted">
              Want a blank workspace again? Go back to the{" "}
              <Link href="/playground" className="font-semibold text-accent">
                default playground
              </Link>
              .
            </p>
          </div>
        ) : null}
      </div>
    </LayoutWrapper>
  );
}
