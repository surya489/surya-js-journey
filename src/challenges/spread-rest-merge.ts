import type { Challenge } from "@/types/challenge";

export const spreadRestMergeChallenge: Challenge = {
  slug: "spread-rest-merge",
  title: "Merge values with spread syntax",
  summary:
    "Use spread syntax to combine values into a new array without mutating the original one.",
  prompt:
    "Complete the array creation so the output becomes `1,2,3,4`. Keep the original `base` array unchanged and use spread syntax.",
  hints: [
    "Start from the existing `base` array.",
    "Spread the array into a new one before adding the extra values.",
    "Do not push directly into the original array.",
  ],
  starterCode: `const base = [1, 2];
const result = [
  // your code here
];

console.log(result.join(","));`,
  expectedOutcome: ["1,2,3,4"],
  difficulty: "Beginner",
  conceptSlugs: ["spread-rest", "arrays-and-methods"],
  estimatedMinutes: 8,
};
