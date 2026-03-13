import type { Concept } from "@/types/concept";

export const equalityConcept: Concept = {
  slug: "equality",
  title: "Equality",
  summary:
    "JavaScript has loose and strict equality, and they behave differently because loose equality allows coercion.",
  description:
    "Strict equality (`===`) compares both value and type, while loose equality (`==`) may convert values before comparing them. Most JavaScript code should prefer strict equality because it avoids surprising conversions and makes conditions easier to reason about.",
  difficulty: "Beginner",
  category: "Core JavaScript",
  keyPoints: [
    "`===` compares without coercion.",
    "`==` may coerce values before comparing them.",
    "Reference types compare by reference, not by content.",
  ],
  commonMistakes: [
    "Using `==` because it appears shorter, not because coercion is intentionally needed.",
    "Expecting two identical object literals to be equal with `===`.",
    "Mixing equality rules in the same codebase and making conditionals harder to read.",
  ],
  expectedOutput: ["true", "false", "false"],
  relatedConcepts: ["type-coercion", "truthy-falsy", "objects"],
  exampleCode: `console.log(5 === 5);
console.log("5" === 5);
console.log({ topic: "js" } === { topic: "js" });`,
};
