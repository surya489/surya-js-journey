import type { Concept } from "@/types/concept";

export const typeCoercionConcept: Concept = {
  slug: "type-coercion",
  title: "Type Coercion",
  summary:
    "Type coercion is JavaScript converting one value type into another during operations or comparisons.",
  description:
    "JavaScript sometimes converts values automatically. For example, string concatenation can convert numbers to strings, and loose equality can coerce values before comparing them. Understanding coercion helps you predict odd outputs and write code that is explicit instead of surprising.",
  difficulty: "Beginner",
  category: "Core JavaScript",
  keyPoints: [
    "The `+` operator concatenates if one side is a string.",
    "Loose equality may convert values before comparing them.",
    "Explicit conversion with `Number`, `String`, or `Boolean` is usually clearer.",
  ],
  commonMistakes: [
    "Expecting `\"5\" + 1` to perform numeric addition.",
    "Using loose equality without understanding the conversion rules.",
    "Confusing truthy or falsy behavior with actual boolean values.",
  ],
  expectedOutput: ["51", "6", "true"],
  relatedConcepts: ["equality", "truthy-falsy", "data-types"],
  exampleCode: `console.log("5" + 1);
console.log(Number("5") + 1);
console.log(Boolean("hello"));`,
};
