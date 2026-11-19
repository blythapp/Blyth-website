"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SiteChrome({ children, comingSoon }: { children: ReactNode; comingSoon: boolean }) {
  const pathname = usePathname();

  if (comingSoon && pathname === "/") {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar launched={!comingSoon} />
      {children}
      <Footer />
    </>
  );
}
