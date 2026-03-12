import type { Concept } from "@/types/concept";

export const eventLoopConcept: Concept = {
  slug: "event-loop",
  title: "Event Loop",
  summary:
    "The event loop coordinates synchronous code, queued tasks, and microtasks so JavaScript can handle async behavior.",
  description:
    "JavaScript runs one call stack at a time, but it can still handle asynchronous work by delegating tasks and later placing callbacks into queues. The event loop decides when queued tasks can run. Microtasks, such as resolved promise callbacks, are processed before the next macrotask like `setTimeout`.",
  difficulty: "Intermediate",
  category: "Browser Internals",
  keyPoints: [
    "Synchronous code runs first on the call stack.",
    "Promise callbacks are microtasks and run before timer callbacks.",
    "Understanding task order is essential for debugging async output.",
  ],
  commonMistakes: [
    "Expecting `setTimeout(..., 0)` to run immediately.",
    "Ignoring the difference between microtasks and macrotasks.",
    "Assuming async code always runs in the order it appears.",
  ],
  expectedOutput: ["start", "end", "promise", "timeout"],
  relatedConcepts: ["promise", "hoisting"],
  exampleCode: `console.log("start");

setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));

console.log("end");`,
};
