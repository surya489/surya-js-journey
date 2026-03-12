"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const navItems = [
  {
    href: "/",
    label: "Home",
    description: "Start here",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5.5v-6h-5v6H4a1 1 0 0 1-1-1v-9.5Z" />
      </svg>
    ),
  },
  {
    href: "/concepts",
    label: "Concepts",
    description: "Study topics",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 4.5h11A2.5 2.5 0 0 1 18.5 7v13H7.8A2.8 2.8 0 0 0 5 22.8V4.5Zm0 0A2.5 2.5 0 0 0 2.5 7v10.8A2.8 2.8 0 0 1 5.3 15H18.5" />
      </svg>
    ),
  },
  {
    href: "/playground",
    label: "Playground",
    description: "Run examples",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8 7-4 5 4 5M16 7l4 5-4 5M13.5 4l-3 16" />
      </svg>
    ),
  },
  {
    href: "/challenges",
    label: "Challenges",
    description: "Practice solving",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.5a3 3 0 1 1 6 0c0 1.3-.7 2.1-1.8 2.9-1 .7-1.7 1.3-1.7 2.6M12 17.5h.01" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.5 12 3l7.5 3.5v5c0 5-3.4 8.8-7.5 9.5-4.1-.7-7.5-4.5-7.5-9.5v-5Z" />
      </svg>
    ),
  },
  {
    href: "/visualizer",
    label: "Visualizer",
    description: "See execution",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M7 16V9M12 16V5M17 16v-3" />
      </svg>
    ),
  },
];

type SidebarProps = {
  mobile?: boolean;
  onClose?: () => void;
};

export function Sidebar({ mobile = false, onClose }: SidebarProps) {
  const pathname = usePathname();

  useEffect(() => {
    onClose?.();
  }, [pathname]);

  return (
    <aside
      className={`h-full rounded-[1.5rem] border border-border bg-surface p-4 shadow-[var(--shadow)] backdrop-blur xl:rounded-[1.75rem] xl:p-5 ${
        mobile ? "custom-scrollbar overflow-y-auto" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
            Navigation
          </p>
          <h2 className="mt-2 text-xl font-bold text-foreground">
            Explore the platform
          </h2>
          <p className="mt-2 text-sm leading-7 text-muted xl:block">
            Move between concepts, practice space, challenges, and the event loop visualizer from one place.
          </p>
        </div>
        {mobile ? (
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface-strong text-foreground transition-colors hover:border-accent/30 hover:text-accent xl:hidden"
            aria-label="Close navigation menu"
            title="Close navigation menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-none stroke-current"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        ) : null}
      </div>

      <div className="mt-4 grid gap-3 xl:mt-5">
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => onClose?.()}
              className={`block rounded-[1.1rem] border px-4 py-3 transition-all duration-300 xl:rounded-[1.25rem] ${
                active
                  ? "border-accent bg-accent text-white shadow-[0_18px_40px_rgba(217,119,6,0.22)]"
                  : "border-border bg-surface-strong hover:-translate-y-0.5 hover:border-accent/30"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={active ? "text-white" : "text-accent"}>{item.icon}</span>
                <div>
                  <p className={`text-sm font-semibold ${active ? "text-white" : "text-foreground"}`}>
                    {item.label}
                  </p>
                  <p className={`mt-1 text-xs ${active ? "text-amber-50/80" : "text-muted"}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-4 rounded-[1.1rem] border border-border bg-background/55 p-4 text-sm leading-7 text-muted xl:mt-5 xl:rounded-[1.25rem]">
        <p className="font-semibold text-foreground">Learning flow</p>
        <p className="mt-2">
          Study a concept, run the example, then move into challenges or the visualizer when you want deeper practice.
        </p>
      </div>
    </aside>
  );
}
