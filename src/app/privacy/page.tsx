import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";
import { fetchPublishedLegalDocument } from "@/lib/legalDocuments";
import { BUILT_IN_LEGAL } from "@/lib/legalBuiltIn";
import { renderLegalDocument } from "@/lib/renderLegalMarkdown";

export const metadata: Metadata = {
  title: "Privacy Policy — Blyth",
  description: "How Blyth collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

const BUILT_IN_DATE = "Nov 10, 2026";

export default async function PrivacyPolicyPage() {
  const published = await fetchPublishedLegalDocument("privacy", BUILT_IN_DATE);
  const doc = published ?? { ...BUILT_IN_LEGAL.privacy, updatedLabel: BUILT_IN_DATE };
  return (
    <PolicyLayout title={doc.title} updated={doc.updatedLabel}>
      {renderLegalDocument(doc.body)}
    </PolicyLayout>
  );
}
