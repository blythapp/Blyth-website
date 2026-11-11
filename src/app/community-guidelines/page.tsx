import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";
import { fetchPublishedLegalDocument } from "@/lib/legalDocuments";
import { BUILT_IN_LEGAL } from "@/lib/legalBuiltIn";
import { renderLegalDocument } from "@/lib/renderLegalMarkdown";

export const metadata: Metadata = {
  title: "Community Guidelines — Blyth",
  description:
    "The rules that keep Blyth a safe, trustworthy marketplace for neighbors and helpers.",
  alternates: { canonical: "/community-guidelines" },
};

const BUILT_IN_DATE = "Nov 10, 2026";

export default async function CommunityGuidelinesPage() {
  const published = await fetchPublishedLegalDocument("guidelines", BUILT_IN_DATE);
  const doc = published ?? { ...BUILT_IN_LEGAL.guidelines, updatedLabel: BUILT_IN_DATE };
  return (
    <PolicyLayout title={doc.title} updated={doc.updatedLabel}>
      {renderLegalDocument(doc.body)}
    </PolicyLayout>
  );
}
