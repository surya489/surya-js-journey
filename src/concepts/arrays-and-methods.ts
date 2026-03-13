import type { Concept } from "@/types/concept";

export const arraysAndMethodsConcept: Concept = {
  slug: "arrays-and-methods",
  title: "Arrays and Methods",
  summary:
    "Arrays hold ordered collections of values, and their built-in methods make transformation and iteration much easier.",
  description:
    "JavaScript arrays come with powerful methods such as `map`, `filter`, `find`, and `reduce`. These methods are callback-driven and help you write cleaner, more declarative code compared with manual loops for many common tasks.",
  difficulty: "Beginner",
  category: "Data Handling",
  keyPoints: [
    "`map` transforms every item and returns a new array.",
    "`filter` keeps only the items that pass a condition.",
    "Most array methods return new arrays, but some methods mutate the original array.",
  ],
  commonMistakes: [
    "Using `map` when you only need side effects and should use `forEach`.",
    "Forgetting that some methods like `sort` mutate the original array.",
    "Assuming every array method returns a new array.",
  ],
  expectedOutput: ["2,4,6", "2,3"],
  relatedConcepts: ["callbacks", "objects", "data-types"],
  exampleCode: `const lessons = [1, 2, 3];
const doubled = lessons.map((lesson) => lesson * 2);
const filtered = lessons.filter((lesson) => lesson > 1);

console.log(doubled.join(","));
console.log(filtered.join(","));`,
};
