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
          output: ["Hello, Surya!", "Hello, JavaScript!"],
          fileName: "playground.js",
          mode: "practice" as const,
        };

  return (
    <LayoutWrapper concepts={concepts}>
      <div className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
            {playgroundSource.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground">
            {playgroundSource.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-muted">
            {playgroundSource.description}
          </p>
        </div>

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
