import type { Concept } from "@/types/concept";

export const objectsConcept: Concept = {
  slug: "objects",
  title: "Objects",
  summary:
    "Objects store related data and behavior as key-value pairs and are one of JavaScript’s core building blocks.",
  description:
    "Objects let you group related values under named properties. They are used for configuration, application state, API responses, and custom behavior with methods. Since objects are reference types, mutation and copying need special attention in real applications.",
  difficulty: "Beginner",
  category: "Data Handling",
  keyPoints: [
    "Properties can be read with dot notation or bracket notation.",
    "Objects are mutable reference values.",
    "Methods are functions stored on objects.",
  ],
  commonMistakes: [
    "Expecting object assignment to create a deep copy.",
    "Using dot notation when the property name is dynamic.",
    "Mutating shared objects without realizing other code references the same object.",
  ],
  expectedOutput: ["Surya", "3"],
  relatedConcepts: ["data-types", "arrays-and-methods", "equality"],
  exampleCode: `const profile = {
  name: "Surya",
  lessonsCompleted: 3,
};

console.log(profile.name);
console.log(profile["lessonsCompleted"]);`,
};
