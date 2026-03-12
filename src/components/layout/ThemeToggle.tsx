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
      className="rounded-full border border-border bg-surface-strong px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent/30"
      aria-label="Toggle color theme"
    >
      {ready && theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
