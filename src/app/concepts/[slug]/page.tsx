import { notFound } from "next/navigation";

import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { concepts, getConceptBySlug } from "@/concepts/data";

type ConceptPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ConceptPage({ params }: ConceptPageProps) {
  const { slug } = await params;
  const concept = getConceptBySlug(slug);

  if (!concept) {
    notFound();
  }

  return (
    <LayoutWrapper concepts={concepts}>
      <div className="space-y-8">
        <div className="flex flex-col gap-4 border-b border-border pb-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              {concept.category}
            </span>
            <span className="rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
              {concept.difficulty}
            </span>
          </div>
          <div>
            <h2 className="text-4xl font-black tracking-tight text-foreground">
              {concept.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
              {concept.description}
            </p>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
            <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
              Explanation
            </p>
            <p className="mt-4 text-sm leading-8 text-muted">
              Review the core idea first, then study the example to understand
              how this concept behaves in real JavaScript code. This page is
              structured to support deeper explanations and hands-on practice.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-stone-900/10 bg-stone-950 text-stone-100">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-stone-400">
              <span>{concept.slug}.js</span>
              <span>Example code</span>
            </div>
            <pre className="overflow-x-auto px-4 py-5 text-sm leading-7">
              <code>{concept.exampleCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
