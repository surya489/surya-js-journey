import type { Challenge } from "@/types/challenge";

export const tryCatchParseChallenge: Challenge = {
  slug: "try-catch-parse",
  title: "Handle invalid JSON safely",
  summary:
    "Wrap risky parsing logic so bad data does not break the whole flow.",
  prompt:
    "Use `try/catch` so invalid JSON logs `Invalid lesson data` instead of crashing.",
  hints: [
    "The parsing line is the risky part.",
    "Catch the thrown error and log the fallback message.",
    "You do not need to inspect the error object for this challenge.",
  ],
  starterCode: `JSON.parse("{ lesson: }");
console.log("Invalid lesson data");`,
  expectedOutcome: ["Invalid lesson data"],
  difficulty: "Beginner",
  conceptSlugs: ["try-catch"],
  estimatedMinutes: 7,
};
