import type { Concept } from "@/types/concept";

export const asyncAwaitConcept: Concept = {
  slug: "async-await",
  title: "Async / Await",
  summary:
    "Async and await let you write promise-based logic in a style that reads like synchronous code.",
  description:
    "The `async` keyword makes a function return a promise, and `await` pauses execution inside that function until a promise settles. This reduces promise-chaining noise and makes asynchronous code easier to read. Under the hood, `await` still resumes execution through the microtask queue.",
  difficulty: "Intermediate",
  category: "Async JavaScript",
  keyPoints: [
    "`async` functions always return a promise.",
    "`await` can only be used inside async functions or supported module scopes.",
    "Errors from awaited promises should be handled with `try` / `catch`.",
  ],
  commonMistakes: [
    "Forgetting that the returned value is wrapped in a promise.",
    "Using `await` outside an async context.",
    "Assuming `await` blocks the whole JavaScript thread.",
  ],
  expectedOutput: ["loading lesson", "lesson ready"],
  relatedConcepts: ["promise", "event-loop"],
  exampleCode: `async function loadLesson() {
  console.log("loading lesson");
  await Promise.resolve();
  console.log("lesson ready");
}

loadLesson();`,
};
