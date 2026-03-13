import type { Concept } from "@/types/concept";

export const valueVsReferenceConcept: Concept = {
  slug: "value-vs-reference",
  title: "Pass by Value vs Reference Behavior",
  summary:
    "Primitives are copied by value, while objects and arrays behave through shared references.",
  description:
    "JavaScript passes function arguments by value, but for objects and arrays that value is a reference to the same underlying data. This is why changing an object inside a function can affect the original, while reassigning a number or string does not. This distinction is essential for debugging mutation bugs.",
  difficulty: "Intermediate",
  category: "Data Handling",
  keyPoints: [
    "Primitive values are copied independently.",
    "Objects and arrays share a reference to the same data.",
    "Reassigning a variable is different from mutating the object it references.",
  ],
  commonMistakes: [
    "Expecting copied object variables to become independent values.",
    "Thinking JavaScript is purely pass-by-reference or purely pass-by-value without nuance.",
    "Mutating nested data and then being surprised when other code sees the change.",
  ],
  expectedOutput: ["1", "2"],
  relatedConcepts: ["data-types", "objects", "spread-rest"],
  exampleCode: `let count = 1;
let copiedCount = count;
copiedCount++;

const lesson = { completed: 1 };
const copiedLesson = lesson;
copiedLesson.completed++;

console.log(count);
console.log(lesson.completed);`,
};
