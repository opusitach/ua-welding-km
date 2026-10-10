"use client";

import { useEffect } from "react";

/**
 * Mount once per page. Watches every element with [data-reveal] and adds .is-visible
 * when it enters the viewport (styles in globals.css). Usage in markup:
 *   <div data-reveal>…</div>                       fade + slide up
 *   <div data-reveal="left" style={{"--reveal-delay": "120ms"}}>…</div>
 * Variants: (default) up | fade | left | right.
 */
export default function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
