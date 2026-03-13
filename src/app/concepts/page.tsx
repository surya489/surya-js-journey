import { ConceptCatalog } from "@/components/concept/ConceptCatalog";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { getAllConcepts } from "@/lib/concepts";
import { Reveal } from "@/components/layout/Reveal";

export default function ConceptsPage() {
  const concepts = getAllConcepts();
  const categories = [...new Set(concepts.map((concept) => concept.category))];
  const intermediateCount = concepts.filter(
    (concept) => concept.difficulty === "Intermediate",
  ).length;
  const coreCount = concepts.filter(
    (concept) => concept.category === "Core JavaScript",
  ).length;
  const dataHandlingCount = concepts.filter(
    (concept) => concept.category === "Data Handling",
  ).length;
  const runtimeCount = concepts.filter((concept) =>
    ["Async JavaScript", "Browser Internals", "Browser Events"].includes(
      concept.category,
    ),
  ).length;
  const functionCount = concepts.filter(
    (concept) => concept.category === "Functions",
  ).length;

  return (
    <LayoutWrapper concepts={concepts}>
      <div className="space-y-8">
        <Reveal>
          <section className="hero-surface overflow-hidden rounded-[1.5rem] border border-border p-4 sm:p-6 md:p-8 xl:rounded-[1.75rem]">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                Concept Library
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1.02]">
                Explore JavaScript topics in a cleaner, focused flow.
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                The library is intentionally paginated in groups of four so the grid stays readable. Use the top search bar when you want to jump straight to one concept.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overlay-surface rounded-[1.2rem] border border-border/70 p-5">
                <p className="text-sm font-semibold text-foreground">Total Concepts</p>
                <p className="mt-3 text-3xl font-black text-accent">{concepts.length}</p>
              </div>
              <div className="overlay-surface rounded-[1.2rem] border border-border/70 p-5">
                <p className="text-sm font-semibold text-foreground">Categories</p>
                <p className="mt-3 text-3xl font-black text-accent">{categories.length}</p>
              </div>
              <div className="overlay-surface rounded-[1.2rem] border border-border/70 p-5">
                <p className="text-sm font-semibold text-foreground">Intermediate</p>
                <p className="mt-3 text-3xl font-black text-accent">{intermediateCount}</p>
              </div>
            </div>

            <div className="overlay-surface mt-4 rounded-[1.3rem] border border-border/70 p-5">
              <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                Study Mode
              </p>
              <h3 className="mt-3 text-2xl font-bold text-foreground">
                Move through the library without visual clutter.
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Read one concept, run the example, then continue into a challenge or the shared playground when you want deeper practice.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-[1.25rem] border border-border bg-surface-strong p-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                  Category
                </p>
                <p className="mt-3 text-lg font-bold text-foreground">{category}</p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {concepts.filter((concept) => concept.category === category).length} concepts
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="inverse-surface rounded-[1.5rem] border border-border p-6">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-amber-300">
                Library Direction
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--inverse-foreground)]">
                Learn the concept, then validate it with code.
              </h3>
              <p className="inverse-muted mt-4 text-sm leading-7">
                Each topic is written to move you from explanation to execution. The grid stays compact here, and the deeper practice happens inside the concept page and challenge flow.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-border bg-surface-strong p-6">
              <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                Coverage
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                The library now covers language basics, functions, data handling, runtime behavior, and browser event patterns. Use the category filter below to narrow the grid without losing pagination clarity.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.2rem] bg-background/70 p-4">
                  <p className="text-sm font-semibold text-foreground">Core JavaScript</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {coreCount} concepts covering declarations, types, coercion, equality, optional chaining, and error handling.
                  </p>
                </div>
                <div className="rounded-[1.2rem] bg-background/70 p-4">
                  <p className="text-sm font-semibold text-foreground">Functions and Scope</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {functionCount} concepts focused on declarations, arrow functions, callbacks, closures, hoisting, and `this`.
                  </p>
                </div>
                <div className="rounded-[1.2rem] bg-background/70 p-4">
                  <p className="text-sm font-semibold text-foreground">Data Handling</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {dataHandlingCount} concepts covering objects, arrays, destructuring, spread/rest, and reference behavior.
                  </p>
                </div>
                <div className="rounded-[1.2rem] bg-background/70 p-4">
                  <p className="text-sm font-semibold text-foreground">Runtime and Browser</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {runtimeCount} concepts covering promises, async flow, the event loop, event delegation, and related behavior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <ConceptCatalog concepts={concepts} />
        </Reveal>
      </div>
    </LayoutWrapper>
  );
}
