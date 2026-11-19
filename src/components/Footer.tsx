import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { label: "Support", href: "/support" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Community Guidelines", href: "/community-guidelines" },
  { label: "Copyright Policy", href: "/dmca" },
  { label: "Delete Account", href: "/delete-account" },
];

export default function Footer() {
  return (
    <footer className="bl bl-foot">
      <div className="bl-wrap bl-foot-in">
        <div className="bl-foot-top">
          <div>
            <Link href="/" className="bl-logo">
              <Image src="/images/logo-full-trim.png" alt="Blyth" width={690} height={240} draggable={false} />
            </Link>
            <p className="bl-foot-desc">Book trusted local Helpers and buy from neighbors near you.</p>
            <nav aria-label="Footer">
              {LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="bl-social">
            <a href="https://www.instagram.com/blythapp/" target="_blank" rel="noopener noreferrer" aria-label="Blyth on Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <a href="https://x.com/blythapp_" target="_blank" rel="noopener noreferrer" aria-label="Blyth on X">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3zm-1.08 16.17h1.7L7.4 4.74H5.58l11.09 14.43z"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/blythllc/" target="_blank" rel="noopener noreferrer" aria-label="Blyth on LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9.75h4V21H3V9.75zm7 0h3.83v1.54h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.3-1.92 2.63V21h-4V9.75z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="bl-foot-bot">
          <span>&copy; 2026 Blyth. All rights reserved.</span>
          <span>Maryland</span>
        </div>
      </div>
    </footer>
  );
}
