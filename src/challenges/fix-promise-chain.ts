import type { Challenge } from "@/types/challenge";

export const fixPromiseChainChallenge: Challenge = {
  slug: "fix-promise-chain",
  title: "Fix a broken promise chain",
  summary:
    "Repair an async flow so success and failure are handled in a predictable order.",
  prompt:
    "Update the code so the fetched message is logged on success and the error message is logged on failure. Make sure the final cleanup line always runs, regardless of success or failure.",
  hints: [
    "You need both success and failure handling.",
    "Use `.catch()` for the error path.",
    "Use `.finally()` to log the cleanup line every time.",
  ],
  starterCode: `function fetchMessage(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Request failed"));
      } else {
        resolve("Message received");
      }
    }, 300);
  });
}

fetchMessage(false)
  .then((message) => {
    // your code here
  });
`,
  expectedOutcome: ["Message received", "Done"],
  difficulty: "Intermediate",
  conceptSlugs: ["promise"],
  estimatedMinutes: 12,
};
