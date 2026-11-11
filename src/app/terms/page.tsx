import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";
import { fetchPublishedLegalDocument } from "@/lib/legalDocuments";
import { BUILT_IN_LEGAL } from "@/lib/legalBuiltIn";
import { renderLegalDocument } from "@/lib/renderLegalMarkdown";

export const metadata: Metadata = {
  title: "Terms of Service — Blyth",
  description:
    "The terms that govern your access to and use of the Blyth platform.",
  alternates: { canonical: "/terms" },
};

const BUILT_IN_DATE = "Nov 10, 2026";

export default async function TermsOfServicePage() {
  const published = await fetchPublishedLegalDocument("terms", BUILT_IN_DATE);
  const doc = published ?? { ...BUILT_IN_LEGAL.terms, updatedLabel: BUILT_IN_DATE };
  return (
    <PolicyLayout title={doc.title} updated={doc.updatedLabel}>
      {renderLegalDocument(doc.body)}
    </PolicyLayout>
  );
}
