import { notFound } from "next/navigation";
import Link from "next/link";

import { PlaygroundPanel } from "@/components/editor/PlaygroundPanel";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { getChallengesByConceptSlug } from "@/lib/challenges";
import {
  getAllConcepts,
  getConceptBySlug,
  getConceptSlugs,
  getRelatedConcepts,
} from "@/lib/concepts";

type ConceptPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getConceptSlugs();
}

export default async function ConceptPage({ params }: ConceptPageProps) {
  const { slug } = await params;
  const concepts = getAllConcepts();
  const concept = getConceptBySlug(slug);

  if (!concept) {
    notFound();
  }

  const relatedConcepts = getRelatedConcepts(concept.relatedConcepts);
  const relatedChallenges = getChallengesByConceptSlug(concept.slug);

  return (
    <LayoutWrapper concepts={concepts}>
      <div className="space-y-8">
        <div className="flex flex-col gap-4 border-b border-border pb-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              {concept.category}
            </span>
            <span className="rounded-full bg-surface-strong px-3 py-1 text-xs font-semibold text-foreground">
              {concept.difficulty}
            </span>
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              {concept.title}
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-foreground/80">
              {concept.summary}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
              {concept.description}
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
              <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                Explanation
              </p>
              <p className="mt-4 text-sm leading-8 text-muted">
                {concept.description}
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
              <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                Key Points
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                {concept.keyPoints.map((point) => (
                  <li key={point} className="rounded-xl bg-background/60 px-4 py-3">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
              <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                Common Mistakes
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                {concept.commonMistakes.map((mistake) => (
                  <li key={mistake} className="rounded-xl bg-background/60 px-4 py-3">
                    {mistake}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <PlaygroundPanel
              initialCode={concept.exampleCode}
              expectedOutput={concept.expectedOutput}
              title={`${concept.slug}.js`}
            />

            <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
              <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                Continue in Playground
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Open this concept example in the shared playground to keep
                experimenting without leaving the broader workspace flow.
              </p>
              <Link
                href={`/playground?concept=${concept.slug}`}
                className="mt-4 inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
              >
                Open in Playground
              </Link>
            </div>

            <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
              <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                Related Concepts
              </p>
              <div className="mt-4 grid gap-3">
                {relatedConcepts.map((relatedConcept) => (
                  <Link
                    key={relatedConcept.slug}
                    href={`/concepts/${relatedConcept.slug}`}
                    className="rounded-xl bg-background/60 px-4 py-3 transition-colors hover:bg-background/90"
                  >
                    <p className="font-semibold text-foreground">
                      {relatedConcept.title}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      {relatedConcept.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {relatedChallenges.length > 0 ? (
              <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
                <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                  Practice Challenges
                </p>
                <div className="mt-4 grid gap-3">
                  {relatedChallenges.map((challenge) => (
                    <Link
                      key={challenge.slug}
                      href={`/challenges/${challenge.slug}`}
                      className="rounded-xl bg-background/60 px-4 py-3 transition-colors hover:bg-background/90"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-semibold text-foreground">{challenge.title}</p>
                        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                          {challenge.estimatedMinutes} min
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted">{challenge.summary}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {concept.slug === "event-loop" ? (
              <div className="inverse-surface rounded-[1.5rem] border border-border p-5">
                <p className="text-xs font-semibold tracking-[0.24em] uppercase text-amber-300">
                  Visual Learning
                </p>
                <p className="inverse-muted mt-3 text-sm leading-7">
                  Open the guided event loop visualizer to see the call stack,
                  microtasks, and macrotasks change step by step.
                </p>
                <Link
                  href="/visualizer"
                  className="mt-4 inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
                >
                  Open Visualizer
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
