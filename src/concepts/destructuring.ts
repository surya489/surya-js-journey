import type { Concept } from "@/types/concept";

export const destructuringConcept: Concept = {
  slug: "destructuring",
  title: "Destructuring",
  summary:
    "Destructuring lets you extract values from arrays and objects into named variables.",
  description:
    "Destructuring is a common syntax for pulling values out of objects and arrays more cleanly. It is used in function parameters, API response handling, state updates, and many everyday JavaScript patterns. It can improve readability when used carefully.",
  difficulty: "Beginner",
  category: "Data Handling",
  keyPoints: [
    "Object destructuring extracts properties by name.",
    "Array destructuring extracts values by position.",
    "You can rename destructured variables or provide defaults.",
  ],
  commonMistakes: [
    "Using the wrong property name and getting `undefined`.",
    "Forgetting that array destructuring depends on order, not labels.",
    "Overusing deep destructuring and making code harder to read.",
  ],
  expectedOutput: ["Surya", "JavaScript"],
  relatedConcepts: ["objects", "arrays-and-methods", "spread-rest"],
  exampleCode: `const user = { name: "Surya", skill: "JavaScript" };
const { name, skill } = user;

console.log(name);
console.log(skill);`,
};
