import { LegalPageLayout } from "@/components/sections/legal-page-layout";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms & Conditions | The Cereal Boxes",
  description: "Review the terms and conditions for The Cereal Boxes website and packaging inquiries.",
  path: "/terms-conditions/",
});

export default function TermsConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      eyebrow="Legal"
      path="/terms-conditions/"
      description="These terms explain how website content, packaging inquiries, and project approvals are handled by The Cereal Boxes."
      sections={[
        {
          title: "Website use",
          body: [
            "All website content is provided for informational and marketing purposes related to custom cereal packaging, quote generation, and packaging support.",
            "Use of this website does not create a production contract or service agreement by itself.",
          ],
        },
        {
          title: "Quotes and project approvals",
          body: [
            "Quotes, timelines, production details, and final packaging specifications are confirmed separately during the project approval process.",
            "Artwork, dimensions, structures, and production details remain subject to feasibility, compliance, and brand-safety review before final approval.",
          ],
        },
        {
          title: "Production relationship",
          body: [
            "A packaging project is not considered finalized until specifications, pricing, and related terms are approved in writing through the formal order process.",
          ],
        },
      ]}
    />
  );
}
