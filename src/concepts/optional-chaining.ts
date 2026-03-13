import type { Concept } from "@/types/concept";

export const optionalChainingConcept: Concept = {
  slug: "optional-chaining",
  title: "Optional Chaining",
  summary:
    "Optional chaining safely reads nested properties without throwing when an intermediate value is missing.",
  description:
    "Optional chaining uses `?.` to stop property access or function calls when the left side is `null` or `undefined`. It helps avoid repetitive guard checks and reduces runtime errors when working with data that may be incomplete or partially loaded.",
  difficulty: "Beginner",
  category: "Core JavaScript",
  keyPoints: [
    "Optional chaining returns `undefined` instead of throwing when the left side is missing.",
    "It is useful for nested objects, arrays, and optional callbacks.",
    "It does not replace understanding the actual data shape.",
  ],
  commonMistakes: [
    "Using optional chaining everywhere instead of fixing unclear data assumptions.",
    "Expecting it to handle every falsy value instead of specifically `null` and `undefined`.",
    "Forgetting that the result may still be `undefined` and require a fallback.",
  ],
  expectedOutput: ["Surya", "undefined"],
  relatedConcepts: ["nullish-coalescing", "objects", "truthy-falsy"],
  exampleCode: `const user = {
  profile: {
    name: "Surya",
  },
};

console.log(user.profile?.name);
console.log(user.settings?.theme);`,
};
