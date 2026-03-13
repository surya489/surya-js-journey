import type { Concept } from "@/types/concept";

export const dataTypesConcept: Concept = {
  slug: "data-types",
  title: "Data Types",
  summary:
    "JavaScript has primitive and reference data types, and knowing the difference affects comparison, copying, and mutation.",
  description:
    "The main primitive types are string, number, bigint, boolean, undefined, symbol, and null. Objects, arrays, and functions are reference types. A strong grasp of JavaScript data types helps you understand how values are stored, passed around, and checked in real programs.",
  difficulty: "Beginner",
  category: "Core JavaScript",
  keyPoints: [
    "Primitive values are copied by value.",
    "Objects and arrays are reference types and can be mutated through shared references.",
    "`typeof null` is a historical JavaScript quirk and returns `\"object\"`.",
  ],
  commonMistakes: [
    "Treating arrays as a primitive value instead of an object reference.",
    "Relying only on `typeof` when you actually need to detect arrays or null.",
    "Assuming copied object variables are independent copies.",
  ],
  expectedOutput: ["number", "object", "true"],
  relatedConcepts: ["objects", "arrays-and-methods", "type-coercion"],
  exampleCode: `console.log(typeof 42);
console.log(typeof null);
console.log(Array.isArray(["js", "ts"]));`,
};
