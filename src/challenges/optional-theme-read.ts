import type { Challenge } from "@/types/challenge";

export const optionalThemeReadChallenge: Challenge = {
  slug: "optional-theme-read",
  title: "Read nested data safely",
  summary:
    "Use optional chaining so missing nested data does not throw an error.",
  prompt:
    "Update the final log so the code prints `undefined` instead of crashing when `settings` is missing.",
  hints: [
    "A normal nested property access throws when an intermediate object is missing.",
    "Use `?.` where the missing object might appear.",
    "The output should be the string form of `undefined` from `console.log`.",
  ],
  starterCode: `const user = {
  profile: {
    name: "Surya",
  },
};

console.log(user.settings.theme);`,
  expectedOutcome: ["undefined"],
  difficulty: "Beginner",
  conceptSlugs: ["optional-chaining", "objects"],
  estimatedMinutes: 6,
};
