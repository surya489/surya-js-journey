import type { Concept } from "@/types/concept";

export const promiseConcept: Concept = {
  slug: "promise",
  title: "Promise",
  summary:
    "Promises represent the eventual result of asynchronous operations and make async flows easier to compose.",
  description:
    "A promise can be pending, fulfilled, or rejected. It gives you a structured way to react when asynchronous work finishes. Promises are the foundation for chaining async operations and for using `async` and `await` cleanly in modern JavaScript applications.",
  difficulty: "Intermediate",
  category: "Async JavaScript",
  keyPoints: [
    "A promise represents a future value, not the value itself right now.",
    "`.then()` handles fulfilled values, and `.catch()` handles failures.",
    "`async` and `await` are built on top of promises.",
  ],
  commonMistakes: [
    "Trying to return async values synchronously from outside a promise chain.",
    "Forgetting to handle rejected promises.",
    "Mixing callbacks and promise chains inconsistently.",
  ],
  expectedOutput: ["Lesson loaded"],
  relatedConcepts: ["event-loop", "closure"],
  exampleCode: `function fetchLesson() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Lesson loaded"), 500);
  });
}

fetchLesson().then(console.log);`,
};
