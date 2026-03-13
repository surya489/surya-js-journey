import type { Challenge } from "@/types/challenge";

export const arrowTransformChallenge: Challenge = {
  slug: "arrow-transform",
  title: "Complete an arrow callback",
  summary:
    "Use an arrow function to transform a list of numbers into doubled values.",
  prompt:
    "Finish the arrow callback so the output becomes `2,4,6`. Do not rewrite the surrounding structure.",
  hints: [
    "The callback should return each item multiplied by `2`.",
    "A concise arrow body can return an expression directly.",
    "The final log joins the result for you.",
  ],
  starterCode: `const values = [1, 2, 3];
const doubled = values.map((value) => {
  // your code here
});

console.log(doubled.join(","));`,
  expectedOutcome: ["2,4,6"],
  difficulty: "Beginner",
  conceptSlugs: ["arrow-functions", "arrays-and-methods"],
  estimatedMinutes: 7,
};
