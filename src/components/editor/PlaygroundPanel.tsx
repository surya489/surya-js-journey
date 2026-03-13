"use client";

import { useEffect, useMemo, useState } from "react";

import { CodeEditor } from "@/components/editor/CodeEditor";
import type { ConsoleEntry } from "@/components/editor/OutputConsole";
import { OutputConsole } from "@/components/editor/OutputConsole";
import { RunButton } from "@/components/editor/RunButton";
import { Reveal } from "../layout/Reveal";

type PlaygroundPanelProps = {
  initialCode: string;
  expectedOutput?: string[];
  title?: string;
  mode?: "practice" | "challenge";
  validationLabel?: string;
};

function formatValue(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "undefined") {
    return "undefined";
  }

  if (typeof value === "function") {
    return "[Function]";
  }

  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

function executeCode(source: string) {
  const logs: ConsoleEntry[] = [];
  const createWriter =
    (type: ConsoleEntry["type"]) =>
    (...args: unknown[]) => {
      logs.push({
        type,
        message: args.map(formatValue).join(" "),
      });
    };

  const consoleMock = {
    log: createWriter("log"),
    info: createWriter("info"),
    warn: createWriter("warn"),
    error: createWriter("error"),
  };

  try {
    const runner = new Function("console", source);
    runner(consoleMock);

    return { logs, error: null as string | null };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred.";

    return { logs: [], error: message };
  }
}

function normalizeOutputLine(line: string) {
  return line.trim().replace(/\s+/g, " ");
}

export function PlaygroundPanel({
  initialCode,
  expectedOutput = [],
  title = "playground.js",
  mode = "practice",
  validationLabel = "Challenge Result",
}: PlaygroundPanelProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<ConsoleEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copyLabel, setCopyLabel] = useState("Copy");
  const [resetLabel, setResetLabel] = useState("Reset");
  const [validationState, setValidationState] = useState<
    "idle" | "passed" | "failed"
  >("idle");

  const expected = useMemo(() => expectedOutput.join("\n"), [expectedOutput]);
  const comparisonRows = useMemo(() => {
    const rowCount = Math.max(expectedOutput.length, output.length);

    return Array.from({ length: rowCount }, (_, index) => {
      const expectedLine = expectedOutput[index] ?? "";
      const actualLine = output[index]?.message ?? "";

      return {
        index,
        expectedLine,
        actualLine,
        matched:
          normalizeOutputLine(expectedLine) === normalizeOutputLine(actualLine),
      };
    });
  }, [expectedOutput, output]);

  useEffect(() => {
    setCode(initialCode);
    setOutput([]);
    setError(null);
    setCopyLabel("Copy");
    setResetLabel("Reset");
    setValidationState("idle");
  }, [initialCode]);

  useEffect(() => {
    if (copyLabel !== "Copied" && copyLabel !== "Copy Failed") {
      return;
    }

    const timeout = window.setTimeout(() => setCopyLabel("Copy"), 1500);
    return () => window.clearTimeout(timeout);
  }, [copyLabel]);

  useEffect(() => {
    if (resetLabel !== "Reset Done") {
      return;
    }

    const timeout = window.setTimeout(() => setResetLabel("Reset"), 1500);
    return () => window.clearTimeout(timeout);
  }, [resetLabel]);

  function handleRun() {
    const result = executeCode(code);
    setOutput(result.logs);
    setError(result.error);

    if (mode === "challenge") {
      const passed =
        result.error === null &&
        result.logs.filter((entry) => entry.type !== "error").length ===
          expectedOutput.length &&
        result.logs
          .filter((entry) => entry.type !== "error")
          .every(
          (line, index) =>
            normalizeOutputLine(line.message) ===
            normalizeOutputLine(expectedOutput[index] ?? ""),
          );

      setValidationState(passed ? "passed" : "failed");
    }
  }

  function handleReset() {
    setCode(initialCode);
    setOutput([]);
    setError(null);
    setResetLabel("Reset Done");
    setValidationState("idle");
  }

  function handleClearOutput() {
    setOutput([]);
    setError(null);
    if (mode === "challenge") {
      setValidationState("idle");
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopyLabel("Copied");
    } catch {
      setCopyLabel("Copy Failed");
    }
  }

  return (
    <div className="space-y-5">
      <Reveal delay={200}>
      <div className="rounded-[1.4rem] border border-border bg-surface-strong p-4 sm:p-5 md:rounded-[1.6rem] md:p-6">
        <div className="space-y-5">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
              {mode === "challenge" ? "Challenge Workspace" : "Practice Workspace"}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-foreground">{title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
              Edit the code, run it in the browser, and inspect the console
              output below. Reset restores the original snippet for this page.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,170px))]">
              <div className="rounded-[1rem] bg-background/65 px-4 py-3">
                <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                  Editor
                </p>
                <p className="mt-2 text-lg font-bold text-foreground">
                  {code.split("\n").length} lines
                </p>
              </div>
              <div className="rounded-[1rem] bg-background/65 px-4 py-3">
                <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                  Output
                </p>
                <p className="mt-2 text-lg font-bold text-foreground">
                  {output.length} entries
                </p>
              </div>
              <div className="rounded-[1rem] bg-background/65 px-4 py-3">
                <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                  Mode
                </p>
                <p className="mt-2 text-lg font-bold capitalize text-foreground">{mode}</p>
              </div>
            </div>
          </div>

          <div className="hero-surface-soft rounded-[1.2rem] border border-border px-4 py-4 text-sm text-muted shadow-[0_14px_30px_rgba(88,63,24,0.06)] md:rounded-[1.35rem] md:px-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between flex-wrap">
              <div className="max-w-xl">
                <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                  Workspace Notes
                </p>
                <p className="mt-2 leading-7">
                  Changes stay local until you run the code. Reset restores the original snippet immediately for another pass.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="overlay-surface-strong rounded-[0.95rem] px-4 py-3">
                  <p className="font-semibold text-foreground">Live editing</p>
                  <p className="mt-1 leading-6">Safe to change before every run.</p>
                </div>
                <div className="overlay-surface-strong rounded-[0.95rem] px-4 py-3">
                  <p className="font-semibold text-foreground">Fast reset</p>
                  <p className="mt-1 leading-6">Return to the original starter instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Reveal>

      <CodeEditor code={code} onChange={setCode} title={title} />
      <RunButton
        onRun={handleRun}
        onReset={handleReset}
        onCopy={handleCopy}
        onClearOutput={handleClearOutput}
        copyLabel={copyLabel}
        resetLabel={resetLabel}
        statusLabel={
          mode === "challenge"
            ? "Run your solution and compare the result with the expected challenge output."
            : "Use the editor to explore the example, then run it to inspect the console."
        }
      />
      <OutputConsole output={output} error={error} />

      {mode === "challenge" ? (
        <div
          className={`rounded-[1.5rem] border p-5 ${
            validationState === "passed"
              ? "border-emerald-400/40 bg-emerald-500/10"
              : validationState === "failed"
                ? "border-rose-400/40 bg-rose-500/10"
                : "border-border bg-surface-strong"
          }`}
        >
          <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
            {validationLabel}
          </p>
          <p className="mt-3 text-sm leading-7 text-foreground">
            {validationState === "idle"
              ? "Run the code to check whether your solution matches the expected outcome."
              : validationState === "passed"
                ? "Passed. Your console output matches the expected result."
                : "Not matched yet. Compare the console output with the expected result and try again."}
          </p>

          {validationState !== "idle" ? (
            <div className="mt-5 overflow-hidden rounded-[1.25rem] border border-border bg-background/60">
              <div className="grid grid-cols-[52px_minmax(0,1fr)_minmax(0,1fr)] border-b border-border bg-background/80 px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted sm:grid-cols-[64px_minmax(0,1fr)_minmax(0,1fr)] sm:px-4 sm:text-xs sm:tracking-[0.18em]">
                <span>Line</span>
                <span>Expected</span>
                <span>Actual</span>
              </div>
              <div className="divide-y divide-border">
                {comparisonRows.map((row) => (
                  <div
                    key={`${row.index}-${row.expectedLine}-${row.actualLine}`}
                    className={`grid grid-cols-[52px_minmax(0,1fr)_minmax(0,1fr)] gap-3 px-3 py-3 text-sm sm:grid-cols-[64px_minmax(0,1fr)_minmax(0,1fr)] sm:gap-4 sm:px-4 ${
                      row.matched ? "bg-emerald-500/5" : "bg-rose-500/5"
                    }`}
                  >
                    <span className="font-semibold text-muted">{row.index + 1}</span>
                    <span className="break-words text-foreground">
                      {row.expectedLine || "—"}
                    </span>
                    <span className="break-words text-foreground">
                      {row.actualLine || "—"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      {expected ? (
        <div className="rounded-[1.5rem] border border-border bg-surface-strong p-5">
          <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
            Expected Output
          </p>
          <pre className="mt-4 overflow-x-auto rounded-[1.25rem] border border-stone-900/10 bg-stone-950 px-4 py-4 text-sm leading-6 text-stone-100">
            <code>{expected}</code>
          </pre>
        </div>
      ) : null}
    </div>
  );
}
