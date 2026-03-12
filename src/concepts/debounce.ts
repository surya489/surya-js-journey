import type { Concept } from "@/types/concept";

export const debounceConcept: Concept = {
  slug: "debounce",
  title: "Debounce",
  summary:
    "Debouncing delays repeated function calls so only the final trigger within a time window runs.",
  description:
    "Debounce is a performance technique used when events fire rapidly, such as typing, scrolling, or resizing. Instead of running a function every time the event fires, debounce waits for activity to stop for a given delay, then runs the latest call once.",
  difficulty: "Intermediate",
  category: "Performance",
  keyPoints: [
    "Debounce reduces repeated work during bursty user input.",
    "It is commonly used for search inputs and resize handlers.",
    "A timer is usually cleared and recreated on each new trigger.",
  ],
  commonMistakes: [
    "Forgetting to clear the previous timeout before setting a new one.",
    "Using debounce when throttle is the better fit.",
    "Losing the latest arguments or `this` context in the wrapped function.",
  ],
  expectedOutput: ["searching for closures"],
  relatedConcepts: ["closure", "event-loop"],
  exampleCode: `function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delay);
  };
}

const search = debounce((term) => {
  console.log("searching for", term);
}, 300);

search("closures");`,
};
