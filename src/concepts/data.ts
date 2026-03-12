import type { Concept } from "@/types/concept";

export const concepts: Concept[] = [
  {
    slug: "closure",
    title: "Closure",
    description:
      "A closure gives an inner function continued access to variables from its outer scope.",
    difficulty: "Beginner",
    category: "Functions",
    exampleCode: `function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2`,
  },
  {
    slug: "hoisting",
    title: "Hoisting",
    description:
      "Hoisting explains how declarations are processed before code execution begins.",
    difficulty: "Beginner",
    category: "Functions",
    exampleCode: `console.log(topic);
var topic = "JavaScript";

function speak() {
  return "Hoisted function";
}`,
  },
  {
    slug: "promise",
    title: "Promise",
    description:
      "Promises model asynchronous work and let you handle success, failure, and chaining cleanly.",
    difficulty: "Intermediate",
    category: "Async JavaScript",
    exampleCode: `function fetchLesson() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Lesson loaded"), 500);
  });
}

fetchLesson().then(console.log);`,
  },
  {
    slug: "event-loop",
    title: "Event Loop",
    description:
      "The event loop coordinates call stack work, microtasks, and browser or Node task queues.",
    difficulty: "Intermediate",
    category: "Browser Internals",
    exampleCode: `console.log("start");

setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));

console.log("end");`,
  },
];

export function getConceptBySlug(slug: string) {
  return concepts.find((concept) => concept.slug === slug);
}
