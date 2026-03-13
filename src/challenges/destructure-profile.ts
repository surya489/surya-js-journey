import type { Challenge } from "@/types/challenge";

export const destructureProfileChallenge: Challenge = {
  slug: "destructure-profile",
  title: "Destructure a profile object",
  summary:
    "Extract the right properties from an object using destructuring syntax.",
  prompt:
    "Use destructuring so the two logs print `Surya` and `JavaScript`. Do not access the properties directly in the `console.log` calls.",
  hints: [
    "Pull the two properties out before logging them.",
    "The property names already exist on the object.",
    "Use object destructuring, not array destructuring.",
  ],
  starterCode: `const profile = {
  name: "Surya",
  skill: "JavaScript",
};

// destructure here

console.log(name);
console.log(skill);`,
  expectedOutcome: ["Surya", "JavaScript"],
  difficulty: "Beginner",
  conceptSlugs: ["destructuring", "objects"],
  estimatedMinutes: 7,
};
