import Image from "next/image";
import ScrollEffects from "./ScrollEffects";
import StepsScrolly from "./StepsScrolly";
import FaqList from "./FaqList";
import StoreLinks from "./StoreLinks";
import { delay } from "./delay";

const PROOF = [
  { title: "Verified Helpers", body: "Every Helper confirms their identity with a government ID before they can take orders." },
  { title: "Pay in the app", body: "Your card is charged through Stripe. Helpers never see your card details." },
  { title: "A code for every order", body: "Share your 4-digit code only once you have your item or the job is done." },
];

const HELPER_STEPS = [
  { title: "Verify and list", body: "Confirm your ID, link your bank, and post your services or items." },
  { title: "Accept orders", body: "Set your hours and accept the requests that work for you." },
  { title: "Get paid", body: "Enter the buyer’s code when you’re done and withdraw your earnings." },
];

const FEATURES_LEFT = [
  { title: "Discover nearby", body: "See services and items from Helpers close to you, with distance, price and reviews." },
  { title: "Book a time that works", body: "Pick a day and time from the Helper’s real availability." },
  { title: "Message Helpers", body: "Ask questions and sort out details before and after you book." },
];

const FEATURES_RIGHT = [
  { title: "Browse fresh posts", body: "Photos of real work from Helpers near you, to get ideas and decide." },
  { title: "Ratings and reviews", body: "See what other neighbors said before choosing a Helper." },
  { title: "Earn as a Helper", body: "Manage listings and orders, and cash out to your bank." },
];

const TILES = [
  { title: "Hair & beauty", body: "Cuts, braids, nails, at their place or yours" },
  { title: "Cleaning", body: "Regular cleans, deep cleans, move-outs" },
  { title: "Pet care", body: "Walks, sitting, grooming" },
  { title: "Handyman", body: "Mounting, assembly, small repairs" },
  { title: "Moving help", body: "Lifting, loading, hauling" },
  { title: "Tutoring", body: "Homework help, music, languages" },
  { title: "Errands", body: "Pickups, drop-offs, everyday tasks" },
  { title: "Things for sale", body: "Electronics, furniture and more" },
];

const CONTROL = [
  { title: "Your money waits", body: "Helpers are paid only after you share your code." },
  { title: "Talk before you book", body: "Message any Helper to ask questions or arrange the details." },
  { title: "Ratings from real orders", body: "Reviews come only from completed orders." },
  { title: "Help when you need it", body: "Report a problem from the order, or chat with support." },
];

function Phone({ src, alt, className, priority }: { src: string; alt: string; className?: string; priority?: boolean }) {
  return (
    <div className={`bl-ph${className ? ` ${className}` : ""}`}>
      <Image src={src} alt={alt} width={720} height={1565} sizes="300px" priority={priority} />
    </div>
  );
}

export default function HomePage({ qrSvg }: { qrSvg: string }) {
  return (
    <main className="bl bl-page">
      <ScrollEffects />

      <div className="bl-band">
        <div className="bl-wrap">
          <div className="bl-hero">
            <div>
              <h1 className="bl-h1 bl-serif">
                <span className="bl-hl">
                  <span>Book local help.</span>
                </span>
                <span className="bl-hl" style={delay(0.12)}>
                  <span>
                    <em>Buy from</em>
                  </span>
                </span>
                <span className="bl-hl" style={delay(0.24)}>
                  <span>
                    <em>neighbors.</em>
                  </span>
                </span>
              </h1>
              <p className="bl-lede bl-rv" style={delay(0.35)}>
                Blyth connects you with verified Helpers nearby for haircuts, cleaning, dog walks and errands, and with
                neighbors selling things you need. Pay in the app, and confirm every order with a code when it&rsquo;s
                done.
              </p>
              <div className="bl-ctas bl-rv" style={delay(0.43)}>
                <StoreLinks />
              </div>
              <p className="bl-area bl-rv" style={delay(0.51)}>
                <span>Payments by Stripe</span>
                <span>ID-verified Helpers</span>
                <span>Starting in Maryland</span>
              </p>
            </div>
            <div className="bl-par">
              <div className="bl-rv" style={delay(0.59)}>
                <Phone src="/images/site/discover.jpg" alt="The Blyth Discover feed" priority />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bl-band alt bl-proof">
        <div className="bl-wrap">
          {PROOF.map((item, i) => (
            <div key={item.title} className="bl-proof-item bl-rv" style={delay(i * 0.1)}>
              <b>{item.title}</b>
              <span>{item.body}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bl-band" id="how">
        <div className="bl-wrap">
          <div className="bl-sec bl-center" style={{ paddingBottom: 24 }}>
            <h2 className="bl-h2 bl-serif bl-rv">From request to done in three steps</h2>
            <p className="bl-intro bl-rv">Here&rsquo;s how a booking works when you need a hand.</p>
          </div>
        </div>
        <StepsScrolly />
        <div className="bl-wrap">
          <div className="bl-helperrow">
            <h3 className="bl-rv">If you&rsquo;re a Helper</h3>
            <div className="bl-hsteps">
              {HELPER_STEPS.map((step, i) => (
                <div key={step.title} className="bl-rv" style={delay(i * 0.1)}>
                  <span>{i + 1}</span>
                  <b>{step.title}</b>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bl-band alt">
        <div className="bl-wrap">
          <section className="bl-sec bl-center" id="features">
            <h2 className="bl-h2 bl-serif bl-rv">One app for both sides of the neighborhood</h2>
            <p className="bl-intro bl-rv">Everything you need to find help or offer it, in one place.</p>
            <div className="bl-feat">
              <div className="bl-feat-col l">
                {FEATURES_LEFT.map((f, i) => (
                  <div key={f.title} className="bl-rv bl-rv-l" style={delay(0.15 + i * 0.1)}>
                    <b>{f.title}</b>
                    <span>{f.body}</span>
                  </div>
                ))}
              </div>
              <div className="bl-par">
                <div className="bl-rv">
                  <Phone src="/images/site/home.jpg" alt="The Blyth home screen" />
                </div>
              </div>
              <div className="bl-feat-col">
                {FEATURES_RIGHT.map((f, i) => (
                  <div key={f.title} className="bl-rv bl-rv-r" style={delay(0.15 + i * 0.1)}>
                    <b>{f.title}</b>
                    <span>{f.body}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="bl-band">
        <div className="bl-wrap">
          <section className="bl-sec" id="services">
            <div className="bl-headrow">
              <div>
                <h2 className="bl-h2 bl-serif bl-rv">What you can do on Blyth</h2>
                <p className="bl-intro bl-rv">Services from people in your area, plus things neighbors are selling.</p>
              </div>
              <p className="bl-aside bl-rv">Prices are set by each Helper, and you always see the total before you pay.</p>
            </div>
            <div className="bl-tiles">
              {TILES.map((t, i) => (
                <div key={t.title} className="bl-tile bl-rv" style={delay((i % 4) * 0.07 + Math.floor(i / 4) * 0.1)}>
                  <b>{t.title}</b>
                  <span>{t.body}</span>
                </div>
              ))}
            </div>
            <p className="bl-more bl-rv">&hellip;and many others, from car care to event help.</p>
          </section>
        </div>
      </div>

      <div className="bl-band">
        <div className="bl-wrap">
          <section className="bl-sec bl-center" id="prices">
            <h2 className="bl-h2 bl-serif bl-rv">The price you see is the price you pay</h2>
            <p className="bl-intro bl-rv">
              The listing price already includes Blyth&rsquo;s fee, and checkout shows exactly what&rsquo;s inside it.
            </p>
            <div className="bl-eq">
              <div className="bl-card bl-rv">
                <div className="bl-eq-k">On the listing</div>
                <div className="bl-eq-big">$109.47</div>
                <div className="bl-eq-sub">Wireless headphones</div>
              </div>
              <div className="bl-eq-is" aria-hidden="true">
                =
              </div>
              <div className="bl-card bl-rv" style={delay(0.5)}>
                <div className="bl-eq-k">At checkout</div>
                <div className="bl-eq-ln">
                  <span>Item price</span>
                  <span>$106.00</span>
                </div>
                <div className="bl-eq-ln">
                  <span>Service fee</span>
                  <span>$3.47</span>
                </div>
                <div className="bl-eq-ln t">
                  <span>Total</span>
                  <span>$109.47</span>
                </div>
              </div>
            </div>
            <p className="bl-note">Sales tax is added at checkout where it applies.</p>
          </section>
        </div>
      </div>

      <div className="bl-band alt">
        <div className="bl-wrap">
          <section className="bl-sec">
            <div className="bl-ctl">
              <div className="bl-code bl-rv">
                <div className="bl-code-t">Confirmation code</div>
                <div className="bl-digits" aria-label="Example code 4 8 2 7">
                  <b>4</b>
                  <b>8</b>
                  <b>2</b>
                  <b>7</b>
                </div>
                <p>Only give this to your Helper once the job is done or you have your item.</p>
                <div className="bl-ok">
                  <i aria-hidden="true">&#10003;</i>
                  Order complete. Helper paid.
                </div>
              </div>
              <div>
                <h2 className="bl-h2 bl-serif bl-rv">
                  You stay in control of <em>every order</em>
                </h2>
                <div className="bl-grid4">
                  {CONTROL.map((c, i) => (
                    <div key={c.title} className="bl-rv" style={delay(0.1 + i * 0.08)}>
                      <b>{c.title}</b>
                      <span>{c.body}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="bl-band">
        <div className="bl-wrap">
          <section className="bl-sec" id="faq">
            <div className="bl-faqgrid">
              <div className="bl-faqhead">
                <h2 className="bl-h2 bl-serif bl-rv">Questions</h2>
                <p className="bl-intro bl-rv">
                  Can&rsquo;t find what you need? Chat with our support team in the app, or email{" "}
                  <a href="mailto:support@blythapp.com">support[at]blythapp.com</a>.
                </p>
              </div>
              <FaqList />
            </div>
          </section>
        </div>
      </div>

      <div className="bl-band orange" id="get-app">
        <div className="bl-wrap">
          <div className="bl-dl">
            <div className="bl-dl-copy">
              <h2 className="bl-serif bl-rv">Get help, or give it, right from your phone</h2>
              <p className="bl-rv">Book trusted local Helpers, buy from neighbors, or start earning from your own skills.</p>
              <div className="bl-dl-stores bl-rv" style={delay(0.2)}>
                <StoreLinks />
              </div>
              <div className="bl-qr bl-rv" style={delay(0.28)}>
                <div
                  className="bl-qr-code"
                  role="img"
                  aria-label="QR code for blythapp.com"
                  dangerouslySetInnerHTML={{ __html: qrSvg }}
                />
                <span>
                  On a computer?
                  <br />
                  Scan to get Blyth
                  <br />
                  on your phone.
                </span>
              </div>
            </div>
            <div className="bl-phones">
              <div className="bl-ph a bl-rv" style={delay(0.15)}>
                <Image src="/images/site/book.jpg" alt="" width={720} height={1565} sizes="230px" />
              </div>
              <div className="bl-ph b bl-rv" style={delay(0.3)}>
                <Image src="/images/site/discover.jpg" alt="" width={720} height={1565} sizes="230px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
