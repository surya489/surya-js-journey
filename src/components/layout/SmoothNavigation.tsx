"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";

export function SmoothNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const frameRef = useRef<number | null>(null);
  const pendingScrollRef = useRef(false);

  const routeKey = useMemo(() => {
    const query = searchParams.toString();
    return query ? `${pathname}?${query}` : pathname;
  }, [pathname, searchParams]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a");

      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (anchor.target && anchor.target !== "_self") {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href || href.startsWith("#")) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);

      if (url.origin !== window.location.origin) {
        return;
      }

      if (url.pathname === window.location.pathname && url.search === window.location.search) {
        return;
      }

      pendingScrollRef.current = true;
      event.preventDefault();
      router.push(`${url.pathname}${url.search}${url.hash}`, { scroll: false });
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [router]);

  useEffect(() => {
    function easeInOutQuart(progress: number) {
      return progress < 0.5
        ? 8 * progress * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 4) / 2;
    }

    function smoothScrollToTop(duration = 1200) {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      const startY = window.scrollY;

      if (startY <= 0) {
        pendingScrollRef.current = false;
        return;
      }

      const startTime = performance.now();

      function step(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutQuart(progress);
        const nextY = startY * (1 - eased);

        window.scrollTo(0, nextY);

        if (progress < 1) {
          frameRef.current = window.requestAnimationFrame(step);
        } else {
          frameRef.current = null;
          pendingScrollRef.current = false;
          window.scrollTo(0, 0);
        }
      }

      frameRef.current = window.requestAnimationFrame(step);
    }

    if (!pendingScrollRef.current) {
      return;
    }

    const start = window.requestAnimationFrame(() => {
      const settle = window.requestAnimationFrame(() => {
        smoothScrollToTop();
      });

      frameRef.current = settle;
    });

    return () => {
      window.cancelAnimationFrame(start);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [routeKey]);

  return null;
}
