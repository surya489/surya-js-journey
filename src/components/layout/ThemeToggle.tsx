"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "surya-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    const nextTheme =
      storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light";

    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
    setReady(true);
  }, []);

  function handleToggle() {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-strong text-foreground transition-colors hover:border-accent/30 hover:text-accent"
      aria-label="Toggle color theme"
      title={ready && theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {ready && theme === "dark" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-none stroke-current"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-none stroke-current"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.2 14.4A8.5 8.5 0 1 1 9.6 3.8a7.2 7.2 0 0 0 10.6 10.6Z" />
        </svg>
      )}
    </button>
  );
}
