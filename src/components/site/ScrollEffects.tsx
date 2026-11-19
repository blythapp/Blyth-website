"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    document.documentElement.classList.add("bl-js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.remove("is-up");
            el.classList.add("is-in");
          } else {
            el.classList.remove("is-in");
            el.classList.toggle("is-up", entry.boundingClientRect.top < 0);
          }
        }
      },
      { threshold: 0.12, rootMargin: "-4% 0px -6% 0px" },
    );
    document.querySelectorAll(".bl-rv, .bl-eq, .bl-code").forEach((el) => io.observe(el));

    const pars = Array.from(document.querySelectorAll<HTMLElement>(".bl-par"));
    let ticking = false;
    const update = () => {
      ticking = false;
      for (const el of pars) {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) continue;
        const c = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        el.style.transform = `translateY(${(c * -40).toFixed(1)}px)`;
      }
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    if (!reduce && pars.length) {
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      pars.forEach((el) => (el.style.transform = ""));
    };
  }, []);

  return null;
}
