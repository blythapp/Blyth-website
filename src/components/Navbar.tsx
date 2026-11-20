"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GetStartedLink, scrollToSection } from "./GetStartedLink";

const NAV_LINKS = [
  { label: "How it works", href: "/#how" },
  { label: "Features", href: "/#features" },
  { label: "What you can do", href: "/#services" },
  { label: "FAQ", href: "/#faq" },
  { label: "Support", href: "/support" },
];

const SECTION_IDS = ["how", "features", "services", "faq"] as const;
type SectionId = (typeof SECTION_IDS)[number];

function sectionOf(href: string): SectionId | null {
  const hash = href.startsWith("/#") ? href.slice(2) : null;
  return hash && (SECTION_IDS as readonly string[]).includes(hash) ? (hash as SectionId) : null;
}

function isActive(pathname: string, href: string, activeSection: SectionId | null) {
  const section = sectionOf(href);
  if (section) return pathname === "/" && activeSection === section;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isShareCardPath(pathname: string): boolean {
  return pathname.startsWith("/listings/") || pathname.startsWith("/helpers/");
}

export default function Navbar({ launched }: { launched: boolean }) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const minimal = isShareCardPath(pathname);
  const navLinks = launched ? NAV_LINKS : NAV_LINKS.filter((link) => !sectionOf(link.href));

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
    setActiveSection(null);
  }

  const handleNavClick = (href: string) => {
    if (pathname !== "/") return;
    const section = sectionOf(href);
    if (section && scrollToSection(section)) setActiveSection(section);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/" || !window.location.hash) return;
    const id = window.location.hash.slice(1);
    const timer = setTimeout(() => scrollToSection(id), 150);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    const visible = new Set<SectionId>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id as SectionId;
          if (entry.isIntersecting) visible.add(id);
          else visible.delete(id);
        }
        setActiveSection(SECTION_IDS.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    SECTION_IDS.map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const solid = scrolled || pathname !== "/";

  const renderLinks = (onPick?: () => void) =>
    navLinks.map((link) => {
      const active = isActive(pathname, link.href, activeSection);
      return (
        <Link
          key={link.href}
          href={link.href}
          className={active ? "active" : undefined}
          aria-current={active ? "page" : undefined}
          onClick={(e) => {
            onPick?.();
            if (pathname === "/" && sectionOf(link.href)) e.preventDefault();
            handleNavClick(link.href);
          }}
        >
          {link.label}
        </Link>
      );
    });

  return (
    <header className={`bl bl-nav${solid ? " solid" : ""}${menuOpen ? " open" : ""}`}>
      <div className="bl-wrap bl-nav-in">
        <Link
          href="/"
          className="bl-logo"
          onClick={(e) => {
            if (pathname !== "/") return;
            e.preventDefault();
            setActiveSection(null);
            if (window.location.hash) window.history.replaceState(null, "", "/");
            window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
          }}
        >
          <Image src="/images/logo-full-trim.png" alt="Blyth" width={690} height={240} priority draggable={false} />
        </Link>

        {!minimal && <nav className="bl-nav-links">{renderLinks()}</nav>}

        {!minimal && (
          <div className="bl-nav-end">
            {launched && <GetStartedLink className="bl-btn">Get the app</GetStartedLink>}
            <button
              type="button"
              className="bl-burger"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <i />
              <i />
            </button>
          </div>
        )}
      </div>
      {!minimal && <nav className="bl-mmenu" inert={!menuOpen}>{renderLinks(() => setMenuOpen(false))}</nav>}
    </header>
  );
}
