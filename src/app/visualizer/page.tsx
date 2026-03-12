import Link from "next/link";

import { EventLoopVisualizer } from "@/components/visualizer/EventLoopVisualizer";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { eventLoopScenarios } from "@/lib/event-loop-scenarios";
import { getAllConcepts } from "@/lib/concepts";

export default function VisualizerPage() {
  const concepts = getAllConcepts();

  return (
    <LayoutWrapper concepts={concepts}>
      <div className="space-y-8">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
            Event Loop Visualizer
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Step through how JavaScript processes the call stack and queues.
          </h2>
          <p className="mt-4 text-base leading-8 text-muted">
            This guided simulator shows when synchronous work runs, how promise
            callbacks enter the microtask queue, and why timer callbacks wait in
            the macrotask queue. Use it alongside the event loop concept page to
            build stronger intuition.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[1.25rem] border border-border bg-surface-strong p-4">
            <p className="text-sm font-semibold text-foreground">Scenarios</p>
            <p className="mt-2 text-3xl font-black text-accent">
              {eventLoopScenarios.length}
            </p>
          </div>
          <div className="rounded-[1.25rem] border border-border bg-surface-strong p-4">
            <p className="text-sm font-semibold text-foreground">Learning Mode</p>
            <p className="mt-2 text-base leading-7 text-muted">
              Manual stepping, autoplay, and queue-by-queue explanation.
            </p>
          </div>
          <div className="rounded-[1.25rem] border border-border bg-surface-strong p-4">
            <p className="text-sm font-semibold text-foreground">Best Paired With</p>
            <p className="mt-2 text-base leading-7 text-muted">
              Promise, async/await, and event loop concept pages.
            </p>
          </div>
        </div>

        <EventLoopVisualizer scenarios={eventLoopScenarios} />

        <div className="inverse-surface rounded-[1.5rem] border border-border p-5">
          <p className="text-xs font-semibold tracking-[0.24em] uppercase text-amber-300">
            Continue Learning
          </p>
          <p className="inverse-muted mt-3 text-sm leading-7">
            Want the concept explanation too? Open the{" "}
            <Link href="/concepts/event-loop" className="font-semibold text-amber-300">
              event loop concept
            </Link>{" "}
            and compare the visualizer with the runnable example.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/concepts/event-loop"
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
            >
              Open Event Loop Concept
            </Link>
            <Link
              href="/playground?concept=event-loop"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-[var(--inverse-foreground)]"
            >
              Practice in Playground
            </Link>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
