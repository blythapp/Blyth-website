import Image from "next/image";
import Link from "next/link";
import HelperWaitlistForm from "./HelperWaitlistForm";
import ScrollEffects from "./site/ScrollEffects";
import { delay } from "./site/delay";

const FOOTER_LINKS = [
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/community-guidelines", label: "Community Guidelines" },
  { href: "/dmca", label: "DMCA" },
  { href: "/delete-account", label: "Delete Account" },
];

export default function ComingSoon() {
  return (
    <div className="bl bl-page bl-cs">
      <ScrollEffects />
      <div className="bl-wrap">
        <header className="bl-cs-top">
          <Image src="/images/logo-full-trim.png" alt="Blyth" width={690} height={240} priority draggable={false} />
          <span>
            Launching first in <b>Maryland</b>
          </span>
        </header>

        <main className="bl-cs-hero">
          <div>
            <p className="bl-eyebrow bl-rv" style={delay(0.35)}>
              Coming soon to iPhone and Android
            </p>
            <h1 className="bl-serif">
              <span className="bl-hl">
                <span>Local help and</span>
              </span>
              <span className="bl-hl" style={delay(0.12)}>
                <span>goods, from</span>
              </span>
              <span className="bl-hl" style={delay(0.24)}>
                <span>
                  <em>people nearby.</em>
                </span>
              </span>
            </h1>
            <p className="bl-lede bl-rv" style={delay(0.43)}>
              Book haircuts, cleaning, dog walks and more from verified Helpers in your neighborhood, or buy from
              neighbors. Pay in the app and confirm every order with a code.
            </p>
            <div className="bl-rv" style={delay(0.51)}>
              <HelperWaitlistForm />
            </div>
            <div className="bl-facts bl-rv" style={delay(0.59)}>
              <div>
                <b>ID-verified Helpers</b>
                Every Helper verifies their identity.
              </div>
              <div>
                <b>Secure payments</b>
                Card payments handled by Stripe.
              </div>
              <div>
                <b>Code-confirmed</b>
                Share it only once it&rsquo;s done.
              </div>
            </div>
          </div>
          <div className="bl-pair">
            <div className="bl-ph a bl-rv" style={delay(0.4)}>
              <Image src="/images/site/home.jpg" alt="The Blyth home screen" width={720} height={1565} sizes="268px" priority />
            </div>
            <div className="bl-ph b bl-rv" style={delay(0.55)}>
              <Image src="/images/site/book.jpg" alt="Booking a haircut in Blyth" width={720} height={1565} sizes="268px" />
            </div>
          </div>
        </main>

        <footer className="bl-cs-foot">
          <nav>
            {FOOTER_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div>&copy; {new Date().getFullYear()} Blyth. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}
