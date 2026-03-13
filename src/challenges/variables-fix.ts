import type { Challenge } from "@/types/challenge";

export const variablesFixChallenge: Challenge = {
  slug: "variables-fix",
  title: "Choose the right declaration",
  summary:
    "Replace the wrong declaration so the counter can change and the lesson title stays constant.",
  prompt:
    "Make the code run without errors. `count` should increase to `2`, and `title` should stay unchanged. Use the appropriate declaration keywords.",
  hints: [
    "The variable being reassigned should not be `const`.",
    "The value that never changes can stay constant.",
    "Only change the declarations, not the logs.",
  ],
  starterCode: `const count = 1;
let title = "JavaScript";

count += 1;

console.log(count);
console.log(title);`,
  expectedOutcome: ["2", "JavaScript"],
  difficulty: "Beginner",
  conceptSlugs: ["variables-declarations"],
  estimatedMinutes: 6,
};
