import type { EventLoopScenario } from "@/types/visualizer";

export const eventLoopScenarios: EventLoopScenario[] = [
  {
    slug: "promise-vs-timeout",
    title: "Promise vs setTimeout",
    description:
      "See how synchronous code runs first, promise callbacks enter the microtask queue, and timers wait in the macrotask queue.",
    code: `console.log("start");

setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));

console.log("end");`,
    snapshots: [
      {
        label: "Initial script evaluation",
        explanation:
          "The main script enters the call stack. No queued tasks have run yet.",
        activeCallStack: ["global()"],
        microtaskQueue: [],
        macrotaskQueue: [],
        consoleOutput: [],
      },
      {
        label: "Synchronous start log",
        explanation:
          "The first console.log runs immediately because synchronous code always executes before queued work.",
        activeCallStack: ["global()", 'console.log("start")'],
        microtaskQueue: [],
        macrotaskQueue: [],
        consoleOutput: ["start"],
      },
      {
        label: "Timer registered",
        explanation:
          "setTimeout schedules its callback in the macrotask queue. It does not run right away.",
        activeCallStack: ["global()", "setTimeout(...)"],
        microtaskQueue: [],
        macrotaskQueue: ['() => console.log("timeout")'],
        consoleOutput: ["start"],
      },
      {
        label: "Promise callback queued",
        explanation:
          "Resolved promises place their callback into the microtask queue, which has higher priority than macrotasks.",
        activeCallStack: ["global()", "Promise.resolve().then(...)"],
        microtaskQueue: ['() => console.log("promise")'],
        macrotaskQueue: ['() => console.log("timeout")'],
        consoleOutput: ["start"],
      },
      {
        label: "Synchronous end log",
        explanation:
          "The last synchronous statement runs before the event loop checks queued callbacks.",
        activeCallStack: ["global()", 'console.log("end")'],
        microtaskQueue: ['() => console.log("promise")'],
        macrotaskQueue: ['() => console.log("timeout")'],
        consoleOutput: ["start", "end"],
      },
      {
        label: "Microtask runs first",
        explanation:
          "After the call stack clears, the event loop flushes the microtask queue before moving to timers.",
        activeCallStack: ['() => console.log("promise")'],
        microtaskQueue: [],
        macrotaskQueue: ['() => console.log("timeout")'],
        consoleOutput: ["start", "end", "promise"],
      },
      {
        label: "Macrotask runs last",
        explanation:
          "Only after microtasks finish does the event loop process the timer callback from the macrotask queue.",
        activeCallStack: ['() => console.log("timeout")'],
        microtaskQueue: [],
        macrotaskQueue: [],
        consoleOutput: ["start", "end", "promise", "timeout"],
      },
    ],
  },
  {
    slug: "multiple-promises",
    title: "Multiple promise callbacks",
    description:
      "Watch how several resolved promise callbacks line up in the microtask queue and execute before any timer callback.",
    code: `console.log("script start");

Promise.resolve().then(() => console.log("promise one"));
Promise.resolve().then(() => console.log("promise two"));

setTimeout(() => console.log("timeout"), 0);

console.log("script end");`,
    snapshots: [
      {
        label: "Main script begins",
        explanation:
          "The global script enters the call stack before any microtasks or timers are queued.",
        activeCallStack: ["global()"],
        microtaskQueue: [],
        macrotaskQueue: [],
        consoleOutput: [],
      },
      {
        label: "First synchronous log",
        explanation:
          "The first console log runs immediately because it is part of the main script.",
        activeCallStack: ["global()", 'console.log("script start")'],
        microtaskQueue: [],
        macrotaskQueue: [],
        consoleOutput: ["script start"],
      },
      {
        label: "Two promise handlers queued",
        explanation:
          "Each resolved promise places its callback into the microtask queue in registration order.",
        activeCallStack: ["global()", "Promise.resolve().then(...)"],
        microtaskQueue: ['() => console.log("promise one")', '() => console.log("promise two")'],
        macrotaskQueue: [],
        consoleOutput: ["script start"],
      },
      {
        label: "Timer queued after promises",
        explanation:
          "The timeout callback enters the macrotask queue, but it still waits until all microtasks finish.",
        activeCallStack: ["global()", "setTimeout(...)"],
        microtaskQueue: ['() => console.log("promise one")', '() => console.log("promise two")'],
        macrotaskQueue: ['() => console.log("timeout")'],
        consoleOutput: ["script start"],
      },
      {
        label: "Second synchronous log",
        explanation:
          "The script completes its final synchronous line before queued callbacks run.",
        activeCallStack: ["global()", 'console.log("script end")'],
        microtaskQueue: ['() => console.log("promise one")', '() => console.log("promise two")'],
        macrotaskQueue: ['() => console.log("timeout")'],
        consoleOutput: ["script start", "script end"],
      },
      {
        label: "First microtask executes",
        explanation:
          "The event loop starts draining the microtask queue from front to back.",
        activeCallStack: ['() => console.log("promise one")'],
        microtaskQueue: ['() => console.log("promise two")'],
        macrotaskQueue: ['() => console.log("timeout")'],
        consoleOutput: ["script start", "script end", "promise one"],
      },
      {
        label: "Second microtask executes",
        explanation:
          "The next promise callback runs before the event loop touches the timer queue.",
        activeCallStack: ['() => console.log("promise two")'],
        microtaskQueue: [],
        macrotaskQueue: ['() => console.log("timeout")'],
        consoleOutput: ["script start", "script end", "promise one", "promise two"],
      },
      {
        label: "Timer callback finishes last",
        explanation:
          "After microtasks are empty, the event loop can finally take the macrotask from the timer queue.",
        activeCallStack: ['() => console.log("timeout")'],
        microtaskQueue: [],
        macrotaskQueue: [],
        consoleOutput: ["script start", "script end", "promise one", "promise two", "timeout"],
      },
    ],
  },
  {
    slug: "async-await-order",
    title: "Async/await order",
    description:
      "Understand how `await` pauses an async function and resumes it later through the microtask queue.",
    code: `async function runLesson() {
  console.log("inside async start");
  await Promise.resolve();
  console.log("inside async end");
}

console.log("before async");
runLesson();
console.log("after async");`,
    snapshots: [
      {
        label: "Script enters the stack",
        explanation:
          "The main script starts running. The async function is declared but has not executed yet.",
        activeCallStack: ["global()"],
        microtaskQueue: [],
        macrotaskQueue: [],
        consoleOutput: [],
      },
      {
        label: "Before async log",
        explanation:
          "The main script logs first because it is plain synchronous code.",
        activeCallStack: ["global()", 'console.log("before async")'],
        microtaskQueue: [],
        macrotaskQueue: [],
        consoleOutput: ["before async"],
      },
      {
        label: "Async function starts running",
        explanation:
          "Calling the async function puts its body on the call stack and runs until the first `await`.",
        activeCallStack: ["global()", "runLesson()", 'console.log("inside async start")'],
        microtaskQueue: [],
        macrotaskQueue: [],
        consoleOutput: ["before async", "inside async start"],
      },
      {
        label: "Await pauses the function",
        explanation:
          "When the awaited promise resolves, the rest of the async function is scheduled as a microtask.",
        activeCallStack: ["global()", "runLesson()", "await Promise.resolve()"],
        microtaskQueue: ['resume runLesson()'],
        macrotaskQueue: [],
        consoleOutput: ["before async", "inside async start"],
      },
      {
        label: "Main script continues",
        explanation:
          "The async function yields control, so the main script keeps running and logs the next line.",
        activeCallStack: ["global()", 'console.log("after async")'],
        microtaskQueue: ['resume runLesson()'],
        macrotaskQueue: [],
        consoleOutput: ["before async", "inside async start", "after async"],
      },
      {
        label: "Async function resumes",
        explanation:
          "Once the call stack clears, the event loop executes the microtask that resumes the async function.",
        activeCallStack: ['resume runLesson()', 'console.log("inside async end")'],
        microtaskQueue: [],
        macrotaskQueue: [],
        consoleOutput: ["before async", "inside async start", "after async", "inside async end"],
      },
    ],
  },
];

export function getEventLoopScenarioBySlug(slug: string) {
  return eventLoopScenarios.find((scenario) => scenario.slug === slug);
}
