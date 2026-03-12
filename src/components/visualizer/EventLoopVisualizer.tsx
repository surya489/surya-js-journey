"use client";

import { useEffect, useMemo, useState } from "react";

import { CustomSelect } from "@/components/ui/CustomSelect";
import type { EventLoopScenario } from "@/types/visualizer";

type EventLoopVisualizerProps = {
  scenarios: EventLoopScenario[];
  defaultScenarioSlug?: string;
};

function ControlIcon({
  kind,
}: {
  kind: "play" | "pause" | "previous" | "next" | "reset";
}) {
  if (kind === "play") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M7 5.5v13l10-6.5-10-6.5Z" />
      </svg>
    );
  }

  if (kind === "pause") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
      </svg>
    );
  }

  if (kind === "previous") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-none stroke-current"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 6 10 12l8 6" />
        <path d="M6 6v12" />
      </svg>
    );
  }

  if (kind === "next") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-none stroke-current"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m6 6 8 6-8 6" />
        <path d="M18 6v12" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 11a8 8 0 1 0 2 5.3" />
      <path d="M20 4v7h-7" />
    </svg>
  );
}

function QueuePanel({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
      <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
        {title}
      </p>
      <div className="mt-4 space-y-3">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item} className="rounded-xl bg-background/60 px-4 py-3 text-sm text-foreground">
              {item}
            </div>
          ))
        ) : (
          <div className="rounded-xl bg-background/40 px-4 py-3 text-sm text-muted">
            Empty
          </div>
        )}
      </div>
    </div>
  );
}

function getScenarioMetrics(scenario: EventLoopScenario) {
  const maxMicrotasks = Math.max(
    ...scenario.snapshots.map((snapshot) => snapshot.microtaskQueue.length),
  );
  const maxMacrotasks = Math.max(
    ...scenario.snapshots.map((snapshot) => snapshot.macrotaskQueue.length),
  );

  return {
    steps: scenario.snapshots.length,
    maxMicrotasks,
    maxMacrotasks,
  };
}

export function EventLoopVisualizer({
  scenarios,
  defaultScenarioSlug,
}: EventLoopVisualizerProps) {
  const [selectedScenarioSlug, setSelectedScenarioSlug] = useState(
    defaultScenarioSlug ?? scenarios[0]?.slug ?? "",
  );
  const [stepIndex, setStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scenario = useMemo(
    () =>
      scenarios.find((item) => item.slug === selectedScenarioSlug) ?? scenarios[0],
    [scenarios, selectedScenarioSlug],
  );

  const snapshot = scenario.snapshots[stepIndex];
  const metrics = useMemo(() => getScenarioMetrics(scenario), [scenario]);
  const scenarioOptions = scenarios.map((item) => ({
    label: item.title,
    value: item.slug,
  }));

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    if (stepIndex === scenario.snapshots.length - 1) {
      setIsPlaying(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setStepIndex((current) => Math.min(current + 1, scenario.snapshots.length - 1));
    }, 1400);

    return () => window.clearTimeout(timer);
  }, [isPlaying, scenario.snapshots.length, stepIndex]);

  function handleScenarioChange(nextSlug: string) {
    setSelectedScenarioSlug(nextSlug);
    setStepIndex(0);
    setIsPlaying(false);
  }

  function handleNext() {
    setStepIndex((current) => Math.min(current + 1, scenario.snapshots.length - 1));
  }

  function handlePrev() {
    setStepIndex((current) => Math.max(current - 1, 0));
  }

  function handleReset() {
    setStepIndex(0);
    setIsPlaying(false);
  }

  function handlePlayPause() {
    if (stepIndex === scenario.snapshots.length - 1) {
      setStepIndex(0);
      setIsPlaying(true);
      return;
    }

    setIsPlaying((current) => !current);
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
              Scenario
            </p>
            <h3 className="mt-3 text-2xl font-bold text-foreground">
              {scenario.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              {scenario.description}
            </p>
          </div>

          <label className="block text-sm font-semibold text-foreground">
            Scenario picker
            <div className="mt-3 w-full sm:max-w-sm lg:min-w-64">
              <CustomSelect
                value={scenario.slug}
                onChange={handleScenarioChange}
                options={scenarioOptions}
                ariaLabel="Select visualizer scenario"
              />
            </div>
          </label>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.25rem] bg-background/70 p-4">
            <p className="text-sm font-semibold text-foreground">Total Steps</p>
            <p className="mt-2 text-3xl font-black text-accent">{metrics.steps}</p>
          </div>
          <div className="rounded-[1.25rem] bg-background/70 p-4">
            <p className="text-sm font-semibold text-foreground">Peak Microtasks</p>
            <p className="mt-2 text-3xl font-black text-accent">{metrics.maxMicrotasks}</p>
          </div>
          <div className="rounded-[1.25rem] bg-background/70 p-4">
            <p className="text-sm font-semibold text-foreground">Peak Macrotasks</p>
            <p className="mt-2 text-3xl font-black text-accent">{metrics.maxMacrotasks}</p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.5rem] border border-stone-900/10 bg-stone-950 text-stone-100">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-stone-400">
          <span>{scenario.slug}.js</span>
          <span>Scenario code</span>
        </div>
        <pre className="overflow-x-auto px-4 py-5 text-sm leading-6">
          <code>{scenario.code.trim()}</code>
        </pre>
      </div>

      <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
              Current Step
            </p>
            <h4 className="mt-2 text-xl font-bold text-foreground">
              {snapshot.label}
            </h4>
            <p className="mt-3 text-sm leading-7 text-muted">
              {snapshot.explanation}
            </p>
          </div>

          <div className="overlay-surface rounded-[1.2rem] border border-border p-2.5">
            <div className="flex flex-wrap gap-2 lg:justify-end">
            <button
              type="button"
              onClick={handlePlayPause}
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
              title={isPlaying ? "Pause autoplay" : "Play autoplay"}
              className="overlay-surface-strong inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent/30"
            >
              <ControlIcon kind={isPlaying ? "pause" : "play"} />
            </button>
            <button
              type="button"
              onClick={handlePrev}
              disabled={stepIndex === 0 || isPlaying}
              aria-label="Previous step"
              title="Previous step"
              className="overlay-surface-strong inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent/30 disabled:opacity-50"
            >
              <ControlIcon kind="previous" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={stepIndex === scenario.snapshots.length - 1 || isPlaying}
              aria-label="Next step"
              title="Next step"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white transition-colors disabled:opacity-50"
            >
              <ControlIcon kind="next" />
            </button>
            <button
              type="button"
              onClick={handleReset}
              aria-label="Reset visualizer"
              title="Reset visualizer"
              className="overlay-surface-strong inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent/30"
            >
              <ControlIcon kind="reset" />
            </button>
            </div>
          </div>
        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-background/70">
          <div
            className="h-full rounded-full bg-accent transition-all"
            style={{
              width: `${((stepIndex + 1) / scenario.snapshots.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <QueuePanel title="Call Stack" items={snapshot.activeCallStack} />
        <QueuePanel title="Microtask Queue" items={snapshot.microtaskQueue} />
        <QueuePanel title="Macrotask Queue" items={snapshot.macrotaskQueue} />
      </div>

      <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
        <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
          Reading Guide
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.25rem] bg-background/70 p-4">
            <p className="text-sm font-semibold text-foreground">Call Stack</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              Shows what is executing right now. JavaScript handles one active stack of work at a time.
            </p>
          </div>
          <div className="rounded-[1.25rem] bg-background/70 p-4">
            <p className="text-sm font-semibold text-foreground">Microtask Queue</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              Promise callbacks and async resumptions run here before timers are allowed to continue.
            </p>
          </div>
          <div className="rounded-[1.25rem] bg-background/70 p-4">
            <p className="text-sm font-semibold text-foreground">Macrotask Queue</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              Timers and similar callbacks wait here until the call stack clears and microtasks finish.
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.5rem] border border-stone-900/10 bg-stone-950 text-stone-100">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-stone-400">
          <span>Console Output</span>
          <span>{snapshot.consoleOutput.length} lines</span>
        </div>
        <pre className="min-h-40 overflow-x-auto px-4 py-5 text-sm leading-6">
          <code>
            {snapshot.consoleOutput.length > 0
              ? snapshot.consoleOutput.join("\n")
              : "No output yet."}
          </code>
        </pre>
      </div>
    </div>
  );
}
