import type { Concept } from "@/types/concept";

export const callbacksConcept: Concept = {
  slug: "callbacks",
  title: "Callbacks",
  summary:
    "A callback is a function passed into another function so it can run later or customize behavior.",
  description:
    "Callbacks are a fundamental JavaScript pattern. They are used in array methods, event listeners, timers, and asynchronous APIs. Before promises and `async`/`await`, callbacks were the main way to handle async results, and they are still everywhere in the language today.",
  difficulty: "Beginner",
  category: "Functions",
  keyPoints: [
    "Callbacks are just functions passed as values.",
    "They can run immediately, later, or many times depending on the API using them.",
    "Many core JavaScript methods like `map` and `forEach` rely on callbacks.",
  ],
  commonMistakes: [
    "Calling the function immediately instead of passing the function reference.",
    "Assuming every callback runs asynchronously.",
    "Writing deeply nested callbacks when a clearer structure is available.",
  ],
  expectedOutput: ["Starting lesson", "Finished lesson"],
  relatedConcepts: ["closure", "promise", "event-delegation"],
  exampleCode: `function runLesson(callback) {
  console.log("Starting lesson");
  callback();
}

runLesson(() => {
  console.log("Finished lesson");
});`,
};
