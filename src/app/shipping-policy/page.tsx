import { LegalPageLayout } from "@/components/sections/legal-page-layout";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Shipping Policy | The Cereal Boxes",
  description: "Read the shipping policy for custom cereal box orders from The Cereal Boxes.",
  path: "/shipping-policy/",
});

export default function ShippingPolicyPage() {
  return (
    <LegalPageLayout
      title="Shipping Policy"
      eyebrow="Legal"
      description="This page explains how delivery timing and shipping expectations are handled for custom cereal packaging projects."
      sections={[
        {
          title: "Shipping timelines",
          body: [
            "Shipping timelines vary based on project scope, quantity, printing complexity, finishing requirements, and destination.",
            "Estimated turnaround and delivery expectations are discussed during the quoting process and confirmed before production begins.",
          ],
        },
        {
          title: "Transit and delivery",
          body: [
            "Transit timing can vary by carrier, destination, and season. Expedited options may be available for selected packaging projects upon request.",
            "Please review your shipping address and receiving requirements carefully before final approval.",
          ],
        },
      ]}
    />
  );
}
