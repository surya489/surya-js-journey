import type { Challenge } from "@/types/challenge";

export const closureCounterChallenge: Challenge = {
  slug: "closure-counter",
  title: "Build a counter with closures",
  summary:
    "Use lexical scope to keep private state and expose controlled behavior through returned functions.",
  prompt:
    "Create a `createCounter` function that keeps `count` private. It should return an object with `increment` and `reset` methods. `increment` should increase the count and log the current value. `reset` should set the count back to zero and log a confirmation message.",
  hints: [
    "Keep `count` inside the outer function so it stays private.",
    "Return methods that still reference the same `count` variable.",
    "Use `console.log` inside both `increment` and `reset`.",
  ],
  starterCode: `function createCounter() {
  let count = 0;

  return {
    increment() {
      // your code here
    },
    reset() {
      // your code here
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.reset();`,
  expectedOutcome: ["1", "2", "Counter reset"],
  difficulty: "Beginner",
  conceptSlugs: ["closure"],
  estimatedMinutes: 10,
};
