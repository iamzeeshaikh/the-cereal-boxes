import { LegalPageLayout } from "@/components/sections/legal-page-layout";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Refund / Returns Policy | The Cereal Boxes",
  description: "Review refund and returns information for packaging orders from The Cereal Boxes.",
  path: "/refund-returns-policy/",
});

export default function RefundReturnsPolicyPage() {
  return (
    <LegalPageLayout
      title="Refund / Returns Policy"
      eyebrow="Legal"
      description="Because cereal packaging is usually produced to custom specifications, refund and return requests are reviewed according to project approvals and confirmed order details."
      sections={[
        {
          title: "Custom production policy",
          body: [
            "Because custom cereal boxes and printed packaging are produced to project specifications, returns are generally not accepted after production approval unless a confirmed issue is identified.",
          ],
        },
        {
          title: "Issue reporting",
          body: [
            "If there is a problem with a completed order, contact us promptly with order details, photos, and a description of the concern so the matter can be reviewed properly.",
          ],
        },
        {
          title: "Resolution review",
          body: [
            "Refunds, credits, or replacement decisions depend on the approved specifications, project documentation, and the nature of the issue reported.",
            "Please review proofs, artwork, dimensions, and production approvals carefully before confirming the final order.",
          ],
        },
      ]}
    />
  );
}
