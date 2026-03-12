import Link from "next/link";
import { notFound } from "next/navigation";

import { PlaygroundPanel } from "@/components/editor/PlaygroundPanel";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { getAllChallenges, getChallengeBySlug, getChallengeSlugs } from "@/lib/challenges";
import { getAllConcepts, getRelatedConcepts } from "@/lib/concepts";

type ChallengePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getChallengeSlugs();
}

export default async function ChallengePage({ params }: ChallengePageProps) {
  const { slug } = await params;
  const concepts = getAllConcepts();
  const challenge = getChallengeBySlug(slug);

  if (!challenge) {
    notFound();
  }

  const relatedConcepts = getRelatedConcepts(challenge.conceptSlugs);

  return (
    <LayoutWrapper concepts={concepts}>
      <div className="space-y-8">
        <div className="flex flex-col gap-4 border-b border-border pb-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              Challenge
            </span>
            <span className="rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
              {challenge.difficulty}
            </span>
            <span className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-muted">
              {challenge.estimatedMinutes} min
            </span>
          </div>
          <div>
            <h2 className="text-4xl font-black tracking-tight text-foreground">
              {challenge.title}
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-foreground/80">
              {challenge.summary}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
              {challenge.prompt}
            </p>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
              <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                Challenge Brief
              </p>
              <p className="mt-4 text-sm leading-8 text-muted">
                Solve the exercise by editing the starter code and running it in
                the panel. Compare your result against the expected outcome, then
                refine your solution until the behavior matches.
              </p>
              <ol className="mt-5 space-y-3 text-sm leading-7 text-muted">
                <li className="rounded-xl bg-background/60 px-4 py-3">
                  1. Read the prompt carefully and identify the missing behavior.
                </li>
                <li className="rounded-xl bg-background/60 px-4 py-3">
                  2. Update only the parts of the starter code needed to solve it.
                </li>
                <li className="rounded-xl bg-background/60 px-4 py-3">
                  3. Run the code and compare actual output with the expected result.
                </li>
              </ol>
            </div>

            <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
              <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                Hints
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                {challenge.hints.map((hint) => (
                  <li key={hint} className="rounded-xl bg-background/60 px-4 py-3">
                    {hint}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
              <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                Related Concepts
              </p>
              <div className="mt-4 grid gap-3">
                {relatedConcepts.map((concept) => (
                  <Link
                    key={concept.slug}
                    href={`/concepts/${concept.slug}`}
                    className="rounded-xl bg-background/60 px-4 py-3 transition-colors hover:bg-background/90"
                  >
                    <p className="font-semibold text-foreground">{concept.title}</p>
                    <p className="mt-1 text-sm text-muted">{concept.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <PlaygroundPanel
              initialCode={challenge.starterCode}
              expectedOutput={challenge.expectedOutcome}
              title={`${challenge.slug}.js`}
              mode="challenge"
              validationLabel="Challenge Result"
            />

            <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
              <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                Continue in Playground
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Open this starter code in the shared playground if you want a
                focused space for experimenting outside the challenge page.
              </p>
              <Link
                href={`/playground?challenge=${challenge.slug}`}
                className="mt-4 inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
              >
                Open in Playground
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
