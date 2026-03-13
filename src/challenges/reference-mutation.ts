import type { Challenge } from "@/types/challenge";

export const referenceMutationChallenge: Challenge = {
  slug: "reference-mutation",
  title: "Spot shared object mutation",
  summary:
    "Fix the output so copying an object does not mutate the original lesson state.",
  prompt:
    "Update the copy logic so the first log prints `1` and the second log prints `2`. Do not change the final two `console.log` calls.",
  hints: [
    "Assigning an object to another variable shares the same reference.",
    "Create a shallow copy before changing `copied.completed`.",
    "Spread syntax is enough for this object shape.",
  ],
  starterCode: `const lesson = { completed: 1 };
const copied = lesson;

copied.completed = 2;

console.log(lesson.completed);
console.log(copied.completed);`,
  expectedOutcome: ["1", "2"],
  difficulty: "Intermediate",
  conceptSlugs: ["value-vs-reference", "spread-rest", "objects"],
  estimatedMinutes: 9,
};
