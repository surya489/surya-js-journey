import type { Concept } from "@/types/concept";

export const nullishCoalescingConcept: Concept = {
  slug: "nullish-coalescing",
  title: "Nullish Coalescing",
  summary:
    "Nullish coalescing provides a fallback only when a value is `null` or `undefined`.",
  description:
    "The `??` operator is similar to `||`, but it is more precise. It only falls back when the left side is actually missing, not when it is `0`, `false`, or an empty string. This makes it safer for default values when valid data can be falsy.",
  difficulty: "Beginner",
  category: "Core JavaScript",
  keyPoints: [
    "`??` only falls back for `null` or `undefined`.",
    "It is often better than `||` when `0`, `false`, or `\"\"` are valid inputs.",
    "It pairs naturally with optional chaining.",
  ],
  commonMistakes: [
    "Using `||` and accidentally replacing valid falsy values.",
    "Expecting `??` to treat every falsy value as missing.",
    "Mixing `??` and `||` carelessly without understanding precedence.",
  ],
  expectedOutput: ["0", "guest"],
  relatedConcepts: ["optional-chaining", "truthy-falsy", "type-coercion"],
  exampleCode: `const lessonCount = 0;
const username = undefined;

console.log(lessonCount ?? 10);
console.log(username ?? "guest");`,
};
