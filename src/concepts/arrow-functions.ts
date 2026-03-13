import type { Concept } from "@/types/concept";

export const arrowFunctionsConcept: Concept = {
  slug: "arrow-functions",
  title: "Arrow Functions",
  summary:
    "Arrow functions provide a shorter function syntax and handle `this` differently from regular functions.",
  description:
    "Arrow functions are concise and commonly used in callbacks, array methods, and modern component logic. Unlike regular functions, they do not create their own `this`, which makes them useful in some cases and inappropriate in others. Understanding both the syntax and the `this` behavior is essential.",
  difficulty: "Beginner",
  category: "Functions",
  keyPoints: [
    "Arrow functions are shorter and often clearer for small callback logic.",
    "They do not bind their own `this` value.",
    "A concise arrow body can return an expression implicitly.",
  ],
  commonMistakes: [
    "Using an arrow function as an object method and expecting `this` to point to the object.",
    "Forgetting parentheses or braces when switching between implicit and explicit return styles.",
    "Assuming arrow functions always replace regular functions safely.",
  ],
  expectedOutput: ["6"],
  relatedConcepts: ["functions", "this-keyword", "callbacks"],
  exampleCode: `const triple = (value) => value * 3;

console.log(triple(2));`,
};
