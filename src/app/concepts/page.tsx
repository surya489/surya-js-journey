import { ConceptSearch } from "@/components/concept/ConceptSearch";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { getAllConcepts } from "@/lib/concepts";

export default function ConceptsPage() {
  const concepts = getAllConcepts();
  const categories = [...new Set(concepts.map((concept) => concept.category))];
  const intermediateCount = concepts.filter(
    (concept) => concept.difficulty === "Intermediate",
  ).length;

  return (
    <LayoutWrapper concepts={concepts}>
      <div className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
            Concept Library
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground">
            Explore JavaScript topics one concept at a time.
          </h2>
          <p className="mt-4 text-base leading-8 text-muted">
            Start with the fundamentals, compare related topics, and open each
            concept to study its explanation and example code in context.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.25rem] border border-border bg-surface-strong p-4">
            <p className="text-sm font-semibold text-foreground">Total Concepts</p>
            <p className="mt-2 text-3xl font-black text-accent">{concepts.length}</p>
          </div>
          <div className="rounded-[1.25rem] border border-border bg-surface-strong p-4">
            <p className="text-sm font-semibold text-foreground">Categories</p>
            <p className="mt-2 text-3xl font-black text-accent">{categories.length}</p>
          </div>
          <div className="rounded-[1.25rem] border border-border bg-surface-strong p-4">
            <p className="text-sm font-semibold text-foreground">Intermediate Topics</p>
            <p className="mt-2 text-3xl font-black text-accent">{intermediateCount}</p>
            <p className="mt-2 text-base leading-7 text-muted">
              Async flow, runtime behavior, function context, and performance patterns.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-[1.25rem] border border-border bg-surface-strong p-4"
            >
              <p className="text-sm font-semibold text-foreground">{category}</p>
              <p className="mt-2 text-sm leading-7 text-muted">
                {concepts.filter((concept) => concept.category === category).length} concepts
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
          <p className="text-sm font-semibold text-foreground">Library Direction</p>
          <p className="mt-2 text-base leading-7 text-muted">
            Study a concept, run the example, then continue into a linked challenge or
            the shared playground when you want deeper practice.
          </p>
        </div>

        <ConceptSearch concepts={concepts} />
      </div>
    </LayoutWrapper>
  );
}
