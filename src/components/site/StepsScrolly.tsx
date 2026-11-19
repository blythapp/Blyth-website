"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    title: "Find it nearby",
    body: "Browse services and items from Helpers around you, see their work, and message them with questions.",
    src: "/images/site/discover.jpg",
    alt: "Finding Helpers nearby in Blyth",
  },
  {
    title: "Book a time",
    body: "Pick a day and time from the Helper’s availability, or add items to your cart, and pay in the app.",
    src: "/images/site/book.jpg",
    alt: "Picking a time for a booking",
  },
  {
    title: "Share your code when it’s done",
    body: "Welcome your Helper or pick up your item. Only then share your 4-digit code, and the order is complete.",
    src: "/images/site/order.jpg",
    alt: "An order with its confirmation code",
  },
];

export default function StepsScrolly() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [hinted, setHinted] = useState(false);

  useEffect(() => {
    const sc = sectionRef.current;
    if (!sc) return;
    let ticking = false;
    const update = () => {
      ticking = false;
      const pin = sc.firstElementChild as HTMLElement | null;
      if (!pin || getComputedStyle(pin).position !== "sticky") return;
      const total = sc.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = Math.min(1, Math.max(0, -sc.getBoundingClientRect().top / total));
      setActive(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length)));
      if (barRef.current) barRef.current.style.height = `${p * 100}%`;
      if (p > 0.08) setHinted(true);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function go(k: number) {
    const sc = sectionRef.current;
    if (!sc) return;
    const pin = sc.firstElementChild as HTMLElement | null;
    const pinned = pin ? getComputedStyle(pin).position === "sticky" : false;
    if (!pinned) {
      setActive(k);
      return;
    }
    const total = sc.offsetHeight - window.innerHeight;
    const top = sc.getBoundingClientRect().top + window.scrollY;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: Math.round(top + (total * (k + 0.5)) / STEPS.length), behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <div className="bl-scrolly" ref={sectionRef}>
      <div className="bl-pin">
        <div className="bl-wrap bl-pingrid">
          <div>
            <ol className="bl-story">
              {STEPS.map((step, k) => (
                <li
                  key={step.title}
                  className={k === active ? "on" : undefined}
                  tabIndex={0}
                  role="button"
                  aria-pressed={k === active}
                  aria-label={`Step ${k + 1}: ${step.title}`}
                  onClick={() => go(k)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      go(k);
                    }
                  }}
                >
                  <span className="bl-story-n">{String(k + 1).padStart(2, "0")}</span>
                  <div>
                    <b>{step.title}</b>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className={`bl-hint${hinted ? " gone" : ""}`}>
              <i aria-hidden="true" />
              Scroll, or tap a step, to see each one
            </div>
          </div>
          <div className="bl-stage">
            <div className="bl-track">
              <i ref={barRef} />
            </div>
            <div className="bl-ph">
              {STEPS.map((step, k) => (
                <Image
                  key={step.src}
                  src={step.src}
                  alt={step.alt}
                  width={720}
                  height={1565}
                  sizes="300px"
                  className={k === active ? "on" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
