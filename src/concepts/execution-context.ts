import type { Concept } from "@/types/concept";

export const executionContextConcept: Concept = {
  slug: "execution-context",
  title: "Execution Context",
  summary:
    "An execution context is the environment JavaScript creates to evaluate code, track variables, and determine `this`.",
  description:
    "Whenever JavaScript runs global code or calls a function, it creates an execution context. That context stores variable bindings, function declarations, scope references, and the current `this` value. Execution contexts are pushed onto the call stack as functions run and removed when they finish.",
  difficulty: "Intermediate",
  category: "Browser Internals",
  keyPoints: [
    "Global code starts in the global execution context.",
    "Each function call creates a new execution context.",
    "Execution contexts are stacked and removed as function calls complete.",
  ],
  commonMistakes: [
    "Mixing up lexical scope with the temporary execution context created at runtime.",
    "Assuming a function reuses the same local context on every call.",
    "Ignoring how `this` is resolved inside each new call context.",
  ],
  expectedOutput: ["global", "inside lesson"],
  relatedConcepts: ["scope", "hoisting", "event-loop"],
  exampleCode: `const current = "global";

function lesson() {
  const current = "inside lesson";
  console.log(current);
}

console.log(current);
lesson();`,
};
