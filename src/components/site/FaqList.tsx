"use client";

import type { MouseEvent } from "react";
import { delay } from "./delay";

const FAQS = [
  {
    q: "Can I cancel?",
    a: "Yes. Before the Helper accepts, cancelling is free. After they accept, you can still cancel, but the service fee isn’t refunded.",
  },
  {
    q: "Can I change the time of a booking?",
    a: "Yes, once. Ask for a new time from the booking in the app, up to 5 hours before it starts. The Helper accepts or declines, with no extra charge.",
  },
  { q: "Do Helpers see my card details?", a: "No. Payments go through Stripe, and Helpers never see your card." },
  {
    q: "What if something goes wrong?",
    a: "Open a dispute from the order in the app. The payment stays on hold while our team looks at it.",
  },
  {
    q: "How do I become a Helper?",
    a: "Download the app, verify your ID and add your bank account, then post your first listing.",
  },
  { q: "Is Blyth in my area?", a: "We’re starting in Maryland and growing from there." },
];

function toggle(e: MouseEvent<HTMLElement>) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const details = e.currentTarget.parentElement as HTMLDetailsElement;
  const p = details.querySelector("p");
  if (!p || typeof p.animate !== "function") return;
  e.preventDefault();
  if (details.open) {
    const anim = p.animate(
      [
        { height: `${p.scrollHeight}px`, opacity: 1 },
        { height: "0px", opacity: 0 },
      ],
      { duration: 250, easing: "ease" },
    );
    anim.onfinish = () => {
      details.open = false;
    };
  } else {
    details.open = true;
    p.animate(
      [
        { height: "0px", opacity: 0 },
        { height: `${p.scrollHeight}px`, opacity: 1 },
      ],
      { duration: 300, easing: "ease" },
    );
  }
}

export default function FaqList() {
  return (
    <div className="bl-faq">
      {FAQS.map((item, i) => (
        <details key={item.q} open={i === 0} className="bl-rv" style={delay(i * 0.06)}>
          <summary onClick={toggle}>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
