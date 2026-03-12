import type { Concept } from "@/types/concept";

export const closureConcept: Concept = {
  slug: "closure",
  title: "Closure",
  summary:
    "Closures let inner functions keep access to variables from the scope where they were created.",
  description:
    "A closure is created when a function remembers variables from its lexical scope even after the outer function has finished running. This is one of the most important ideas in JavaScript because it powers patterns like private state, factory functions, and callbacks that need access to surrounding data.",
  difficulty: "Beginner",
  category: "Functions",
  keyPoints: [
    "Closures depend on lexical scope, not where a function is called from.",
    "They allow functions to preserve state between calls.",
    "They are commonly used for encapsulation and factories.",
  ],
  commonMistakes: [
    "Assuming the outer variables are copied instead of referenced.",
    "Forgetting that closures can retain memory if they keep large objects alive.",
    "Using closures in loops without understanding how the captured variable behaves.",
  ],
  expectedOutput: ["1", "2"],
  relatedConcepts: ["hoisting", "promise"],
  exampleCode: `function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter());
console.log(counter());`,
};
