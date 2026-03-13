import type { Challenge } from "@/types/challenge";

export const functionReturnChallenge: Challenge = {
  slug: "function-return",
  title: "Return the missing result",
  summary:
    "Finish a function so the computed value is returned instead of disappearing as `undefined`.",
  prompt:
    "Fix the `multiply` function so the final log prints `12`. Do not change the `console.log` line.",
  hints: [
    "The function computes the value but never sends it back.",
    "Use `return` for the final expression.",
    "Keep the same function parameters.",
  ],
  starterCode: `function multiply(a, b) {
  a * b;
}

console.log(multiply(3, 4));`,
  expectedOutcome: ["12"],
  difficulty: "Beginner",
  conceptSlugs: ["functions"],
  estimatedMinutes: 6,
};
