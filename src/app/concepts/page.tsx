import { ConceptCard } from "@/components/concept/ConceptCard";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { concepts } from "@/concepts/data";

export default function ConceptsPage() {
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

        <div className="grid gap-5 xl:grid-cols-2">
          {concepts.map((concept) => (
            <ConceptCard key={concept.slug} concept={concept} />
          ))}
        </div>
      </div>
    </LayoutWrapper>
  );
}
