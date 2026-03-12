"use client";

import { useEffect, useRef, useState } from "react";

type SelectOption = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  ariaLabel: string;
  className?: string;
};

export function CustomSelect({
  value,
  onChange,
  options,
  ariaLabel,
  className = "",
}: CustomSelectProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const selectedOption =
    options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="control-surface flex w-full items-center justify-between rounded-[1.15rem] border border-border px-4 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/35 focus:border-accent/45 focus:shadow-[0_14px_30px_rgba(217,119,6,0.12)] focus:outline-none"
      >
        <span>{selectedOption?.label}</span>
        <span className={`text-accent transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m7 10 5 5 5-5" />
          </svg>
        </span>
      </button>

      {open ? (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+0.6rem)] z-40 overflow-hidden rounded-[1.2rem] border border-border bg-surface shadow-[var(--shadow)] animate-[float-up_0.22s_ease-out_both]"
        >
          <div className="p-2">
            {options.map((option) => {
              const selected = option.value === value;

              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-[0.95rem] px-4 py-3 text-left text-sm transition-colors ${
                    selected
                      ? "bg-accent text-white"
                      : "text-foreground hover:bg-background/70"
                  }`}
                >
                  <span>{option.label}</span>
                  {selected ? (
                    <span className="text-xs font-semibold text-white/90">Selected</span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
