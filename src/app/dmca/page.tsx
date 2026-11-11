import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";
import { fetchPublishedLegalDocument } from "@/lib/legalDocuments";
import { BUILT_IN_LEGAL } from "@/lib/legalBuiltIn";
import { renderLegalDocument } from "@/lib/renderLegalMarkdown";

export const metadata: Metadata = {
  title: "Copyright Policy — Blyth",
  description:
    "How to report copyright infringement on Blyth, and how we respond.",
  alternates: { canonical: "/dmca" },
};

const BUILT_IN_DATE = "Nov 10, 2026";

export default async function DmcaPolicyPage() {
  const published = await fetchPublishedLegalDocument("dmca", BUILT_IN_DATE);
  const doc = published ?? { ...BUILT_IN_LEGAL.dmca, updatedLabel: BUILT_IN_DATE };
  return (
    <PolicyLayout title={doc.title} updated={doc.updatedLabel}>
      {renderLegalDocument(doc.body)}
    </PolicyLayout>
  );
}
