import type { Challenge } from "@/types/challenge";

export const asyncAwaitRefactorChallenge: Challenge = {
  slug: "async-await-refactor",
  title: "Refactor a promise chain with async/await",
  summary:
    "Rewrite a chained async flow using async/await while preserving the final output order.",
  prompt:
    "Convert the chained promise logic into an async function. Keep the same output order and handle any failure with `try` / `catch`. When the request succeeds, log the message and then log `complete`.",
  hints: [
    "Wrap the flow in an `async function`.",
    "Use `await fetchTopic()` to get the resolved message.",
    "Keep the final log order the same as the original behavior.",
  ],
  starterCode: `function fetchTopic() {
  return Promise.resolve("async topic ready");
}

// rewrite this using async / await
fetchTopic().then((message) => {
  console.log(message);
  console.log("complete");
});`,
  expectedOutcome: ["async topic ready", "complete"],
  difficulty: "Intermediate",
  conceptSlugs: ["async-await", "promise"],
  estimatedMinutes: 10,
};
