"use client";

export type ConsoleEntry = {
  type: "log" | "info" | "warn" | "error";
  message: string;
};

type OutputConsoleProps = {
  output: ConsoleEntry[];
  error: string | null;
};

export function OutputConsole({ output, error }: OutputConsoleProps) {
  const lines = error
    ? [{ type: "error" as const, message: error }]
    : output;

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-stone-900/10 bg-stone-950 text-stone-100">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-3 py-3 text-[11px] text-stone-400 sm:px-4 sm:text-xs">
        <span>Console</span>
        <span>{error ? "Runtime error" : `${output.length} entries`}</span>
      </div>
      <div className="min-h-28 overflow-x-auto px-4 py-4">
        {lines.length > 0 ? (
          <div className="space-y-3 font-mono text-sm leading-6">
            {lines.map((line, index) => (
              <div
                key={`${line.type}-${line.message}-${index}`}
                className="grid gap-1 sm:grid-cols-[72px_minmax(0,1fr)] sm:gap-4"
              >
                <span
                  className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                    line.type === "error"
                      ? "text-rose-300"
                      : line.type === "warn"
                        ? "text-amber-300"
                        : line.type === "info"
                          ? "text-sky-300"
                          : "text-emerald-300"
                  }`}
                >
                  {line.type}
                </span>
                <code
                  className={
                    line.type === "error"
                      ? "break-words text-rose-200"
                      : "break-words text-stone-100"
                  }
                >
                  {line.message}
                </code>
              </div>
            ))}
          </div>
        ) : (
          <p className="font-mono text-sm leading-6 text-stone-400">
            Run the code to see output here.
          </p>
        )}
      </div>
    </div>
  );
}
