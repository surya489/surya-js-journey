import type { Concept } from "@/types/concept";

export const tryCatchConcept: Concept = {
  slug: "try-catch",
  title: "Try / Catch",
  summary:
    "Try/catch handles runtime errors so your program can recover or report issues gracefully.",
  description:
    "JavaScript throws errors when something goes wrong at runtime. A `try` block lets you attempt code that may fail, and `catch` gives you a place to handle the failure. This pattern is essential for robust async code, parsing, and user-facing applications.",
  difficulty: "Beginner",
  category: "Core JavaScript",
  keyPoints: [
    "`try` runs code that may throw.",
    "`catch` receives the error and lets you handle it safely.",
    "`finally` can be used for cleanup that should always happen.",
  ],
  commonMistakes: [
    "Catching errors and then silently ignoring useful debugging information.",
    "Assuming `try/catch` can intercept every asynchronous error automatically.",
    "Using broad catch blocks without deciding what recovery should happen.",
  ],
  expectedOutput: ["Invalid lesson data"],
  relatedConcepts: ["async-await", "promise", "data-types"],
  exampleCode: `try {
  JSON.parse("{ lesson: }");
} catch (error) {
  console.log("Invalid lesson data");
}`,
};
