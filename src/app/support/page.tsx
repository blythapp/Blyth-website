import type { Metadata } from "next";
import PageReveal from "@/components/PageReveal";

export const metadata: Metadata = {
  title: "Support — Blyth",
  description: "Get help with your Blyth account, orders, and the app.",
  alternates: { canonical: "/support" },
};

const FAQS = [
  {
    question: "How do I download the app?",
    answer:
      "Blyth is coming to iOS and Android. Use the “Get the App” buttons at the bottom of the home page or in the footer; they open the App Store or Google Play as soon as the app is live there.",
  },
  {
    question: "How do I report a problem with an order or an account?",
    answer:
      "Open the order or profile in question from the app and use the Report option. For anything not working in the app, go to Profile → Report a Problem to chat with our team. You can also email us.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "You can delete your account at any time from Account Settings in the app. See our Privacy Policy for what happens to your data when you do.",
  },
];

export default function SupportPage() {
  return (
    <main className="policy-page">
      <div className="container">
        <PageReveal>
          <div className="policy-header">
            <h1 className="policy-title">Support</h1>
            <p className="policy-updated">
              We&rsquo;re here to help with anything Blyth-related.
            </p>
          </div>
        </PageReveal>

        <div className="policy-content">
          <PageReveal cascade delay={90}>
            <section className="policy-section">
              <h2>Contact us</h2>
              <p>
                The fastest way to reach us is the support chat in the app: go to Profile &rarr; Help &amp; Support. If you can&rsquo;t
                sign in, email us at support[at]blythapp.com and we&rsquo;ll reply within one business day.
              </p>
            </section>

            <section className="policy-section">
              <h2>Support hours</h2>
              <p>Our team answers chats at these times (US Eastern time):</p>
              <ul>
                <li>Monday to Friday: 8 am to 8 pm</li>
                <li>Saturday and Sunday: 10 am to 6 pm</li>
              </ul>
              <p>
                You can message us any time. Outside these hours the app tells you when we&rsquo;re back, and we reply as soon as we are.
              </p>
              <p>
                <strong>If you&rsquo;re in danger or need urgent help, call 911.</strong> Blyth isn&rsquo;t an emergency service.
              </p>
            </section>

            <section className="policy-section">
              <h2>FAQs</h2>
              {FAQS.map((faq) => (
                <div className="policy-subsection" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </section>
          </PageReveal>
        </div>
      </div>
    </main>
  );
}
