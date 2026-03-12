import type { Concept } from "@/types/concept";

export const hoistingConcept: Concept = {
  slug: "hoisting",
  title: "Hoisting",
  summary:
    "Hoisting describes how JavaScript processes declarations before executing code line by line.",
  description:
    "Before JavaScript starts running a scope, it registers declarations. Function declarations are available immediately, while `var` declarations are initialized with `undefined` until assignment. `let` and `const` are also hoisted, but they remain inaccessible inside the temporal dead zone until their declaration is evaluated.",
  difficulty: "Beginner",
  category: "Functions",
  keyPoints: [
    "Function declarations can be called before they appear in the file.",
    "`var` is hoisted and initialized with `undefined`.",
    "`let` and `const` are hoisted too, but they are not usable before declaration.",
  ],
  commonMistakes: [
    "Thinking hoisting moves code physically upward.",
    "Expecting `let` and `const` to behave like `var`.",
    "Confusing function declarations with function expressions assigned to variables.",
  ],
  expectedOutput: ["undefined", "Hoisted function"],
  relatedConcepts: ["closure", "event-loop"],
  exampleCode: `console.log(topic);
var topic = "JavaScript";

console.log(speak());

function speak() {
  return "Hoisted function";
}`,
};
