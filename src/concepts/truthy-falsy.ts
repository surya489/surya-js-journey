import type { Concept } from "@/types/concept";

export const truthyFalsyConcept: Concept = {
  slug: "truthy-falsy",
  title: "Truthy and Falsy",
  summary:
    "JavaScript treats some values as truthy and some as falsy when evaluating conditions.",
  description:
    "Conditions in JavaScript do not require actual booleans. Values like `0`, `\"\"`, `null`, `undefined`, `NaN`, and `false` are falsy, while most other values are truthy. This matters in conditionals, logical operators, and default-value patterns.",
  difficulty: "Beginner",
  category: "Core JavaScript",
  keyPoints: [
    "Falsy values are limited and should be memorized.",
    "An empty array and empty object are still truthy.",
    "Truthiness is about conditional evaluation, not the original data type.",
  ],
  commonMistakes: [
    "Assuming `[]` or `{}` are falsy because they look empty.",
    "Using `||` for defaults when `0` or an empty string is a valid value.",
    "Confusing `null` and `undefined` checks with generic falsy checks.",
  ],
  expectedOutput: ["empty string is falsy", "empty array is truthy"],
  relatedConcepts: ["type-coercion", "equality", "data-types"],
  exampleCode: `if ("") {
  console.log("empty string is truthy");
} else {
  console.log("empty string is falsy");
}

if ([]) {
  console.log("empty array is truthy");
}`,
};
