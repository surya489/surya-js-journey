import type { Challenge } from "@/types/challenge";

export const eventLoopOrderChallenge: Challenge = {
  slug: "event-loop-order",
  title: "Predict the event loop output",
  summary:
    "Read mixed synchronous, promise, and timer code and determine the true execution order.",
  prompt:
    "Without changing the code, explain which line logs first, second, third, and fourth. Then run it to verify your reasoning and write a short explanation of why promises resolve before the timeout callback.",
  hints: [
    "Run through synchronous statements before looking at queued callbacks.",
    "Promise callbacks go into the microtask queue.",
    "Timers wait in the macrotask queue until microtasks are empty.",
  ],
  starterCode: `console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");`,
  expectedOutcome: ["A", "D", "C", "B"],
  difficulty: "Intermediate",
  conceptSlugs: ["event-loop", "promise"],
  estimatedMinutes: 8,
};
