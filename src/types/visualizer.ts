export type EventLoopSnapshot = {
  label: string;
  explanation: string;
  activeCallStack: string[];
  microtaskQueue: string[];
  macrotaskQueue: string[];
  consoleOutput: string[];
};

export type EventLoopScenario = {
  slug: string;
  title: string;
  description: string;
  code: string;
  snapshots: EventLoopSnapshot[];
};
