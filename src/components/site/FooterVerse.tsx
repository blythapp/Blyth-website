"use client";

import { useSyncExternalStore } from "react";
import { getTodaysVerse } from "@/lib/dailyVerses";

const subscribeToNothing = () => () => {};

export default function FooterVerse() {
  const verse = useSyncExternalStore(subscribeToNothing, () => getTodaysVerse(), () => null);
  return <span className="bl-verse">{verse ? verse.reference : " "}</span>;
}
