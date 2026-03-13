import type { Challenge } from "@/types/challenge";

export const nullishDefaultsChallenge: Challenge = {
  slug: "nullish-defaults",
  title: "Keep valid falsy values",
  summary:
    "Use nullish coalescing so valid values like `0` are not replaced by defaults.",
  prompt:
    "Change the fallback logic so the first log stays `0` and the second log becomes `guest`.",
  hints: [
    "`||` treats `0` as missing, which is not what you want here.",
    "Use the operator that only falls back for `null` and `undefined`.",
    "You need the same pattern for both logs.",
  ],
  starterCode: `const lessonCount = 0;
const username = undefined;

console.log(lessonCount || 10);
console.log(username || "guest");`,
  expectedOutcome: ["0", "guest"],
  difficulty: "Beginner",
  conceptSlugs: ["nullish-coalescing", "truthy-falsy"],
  estimatedMinutes: 7,
};
