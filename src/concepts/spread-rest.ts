import type { Concept } from "@/types/concept";

export const spreadRestConcept: Concept = {
  slug: "spread-rest",
  title: "Spread and Rest",
  summary:
    "Spread expands values outward, while rest collects remaining values into an array or object.",
  description:
    "Spread syntax is used to copy or combine arrays and objects, and rest syntax is used to gather remaining values in function parameters or destructuring. They look similar but solve opposite problems. These operators appear everywhere in modern JavaScript code.",
  difficulty: "Beginner",
  category: "Data Handling",
  keyPoints: [
    "Spread expands iterable or object values into a new structure.",
    "Rest collects remaining values into one variable.",
    "Spread is useful for shallow copies, but it does not deep clone nested data.",
  ],
  commonMistakes: [
    "Confusing spread with rest because they use the same `...` syntax.",
    "Assuming spread performs a deep copy.",
    "Using rest in a position where JavaScript does not allow it.",
  ],
  expectedOutput: ["1,2,3", "4,5"],
  relatedConcepts: ["destructuring", "objects", "arrays-and-methods"],
  exampleCode: `const start = [1, 2];
const combined = [...start, 3];

function collect(first, ...rest) {
  console.log(combined.join(","));
  console.log(rest.join(","));
}

collect(0, 4, 5);`,
};
