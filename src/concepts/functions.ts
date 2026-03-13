import type { Concept } from "@/types/concept";

export const functionsConcept: Concept = {
  slug: "functions",
  title: "Functions",
  summary:
    "Functions package reusable behavior and are one of the most important building blocks in JavaScript.",
  description:
    "A function can take input parameters, perform logic, and return a result. JavaScript treats functions as first-class values, which means they can be stored in variables, passed into other functions, and returned from functions. This flexibility powers callbacks, closures, and many APIs across the language.",
  difficulty: "Beginner",
  category: "Functions",
  keyPoints: [
    "Functions can receive parameters and return values.",
    "Functions are values and can be passed around like other data.",
    "A function without `return` produces `undefined`.",
  ],
  commonMistakes: [
    "Forgetting to return a value when later code expects one.",
    "Calling a function immediately when you intended to pass it as a callback.",
    "Mixing function declarations and function expressions without understanding the difference.",
  ],
  expectedOutput: ["12"],
  relatedConcepts: ["callbacks", "arrow-functions", "closure"],
  exampleCode: `function add(a, b) {
  return a + b;
}

console.log(add(5, 7));`,
};
