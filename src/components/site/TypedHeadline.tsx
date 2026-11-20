"use client";

import { Fragment, useEffect, useState } from "react";

const PARTS = [
  { text: "It’s not just a Marketplace, it’s Your ", accent: false },
  { text: "Neighborhood.", accent: true },
];

const LABEL = PARTS.map((p) => p.text).join("").trim();
const CHARS = PARTS.map((p) => p.text).join("");
const TOTAL = CHARS.length;
const PAUSES = new Set([CHARS.indexOf(",") + 1, PARTS[0].text.length]);

export default function TypedHeadline() {
  const [count, setCount] = useState(TOTAL);
  const [live, setLive] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLive(true);
      return;
    }
    let n = 0;
    let timer: ReturnType<typeof setTimeout>;
    setCount(0);
    setLive(true);
    const step = () => {
      n += 1;
      setCount(n);
      if (n >= TOTAL) {
        setTyping(false);
        return;
      }
      let wait = 20 + Math.random() * 30;
      if (CHARS[n - 1] === " ") wait += 20;
      if (PAUSES.has(n)) wait += 160;
      timer = setTimeout(step, wait);
    };
    timer = setTimeout(() => {
      setTyping(true);
      step();
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const caret = live ? <i className={`bl-caret${typing ? " is-typing" : ""}`} /> : null;
  let index = 0;

  return (
    <h1 className={`bl-h1 bl-serif bl-typed${live ? " is-live" : ""}`} aria-label={LABEL}>
      <span aria-hidden="true">
        {PARTS.map((part) => {
          const chars = Array.from(part.text).map((ch) => {
            const k = index++;
            return (
              <Fragment key={k}>
                {k === count && caret}
                <span className={k < count ? "bl-ch" : "bl-ch off"}>{ch}</span>
              </Fragment>
            );
          });
          return part.accent ? <em key={part.text}>{chars}</em> : <Fragment key={part.text}>{chars}</Fragment>;
        })}
        {count >= TOTAL && caret}
      </span>
    </h1>
  );
}
