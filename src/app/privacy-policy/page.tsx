import { LegalPageLayout } from "@/components/sections/legal-page-layout";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy | The Cereal Boxes",
  description: "Read the privacy policy for The Cereal Boxes website and inquiry forms.",
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      eyebrow="Legal"
      path="/privacy-policy/"
      description="This policy explains how The Cereal Boxes handles website inquiries, quote form submissions, uploaded files, and related communication data."
      sections={[
        {
          title: "Information we collect",
          body: [
            "We collect the information you choose to submit through our contact and quote forms so we can respond to custom cereal packaging inquiries and project requests.",
            "This may include your name, email, phone number, company name, packaging specifications, quantity, dimensions, artwork notes, and any files you upload.",
          ],
        },
        {
          title: "How information is used",
          body: [
            "We use submitted information to respond to inquiries, prepare quotes, manage packaging conversations, and maintain service records for active projects.",
            "We do not sell your personal information. Data is used to support customer communication and business operations related to packaging services.",
          ],
        },
        {
          title: "Contact and updates",
          body: [
            "If you need information corrected, updated, or removed, contact us at Info@thecerealboxes.com and our team will review the request.",
          ],
        },
      ]}
    />
  );
}
