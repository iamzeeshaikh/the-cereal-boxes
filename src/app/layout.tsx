import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebsiteSchema,
  createMetadata,
} from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thecerealboxes.com"),
  applicationName: "The Cereal Boxes",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  verification: {
    google: "9VlD3mpeTIxZewZjG9Z01Nbhr-z09YWWuwrGUCR7Nao",
  },
  ...createMetadata({
    title: "The Cereal Boxes | Premium Custom Cereal Boxes In The USA",
    description:
      "Premium custom cereal boxes, printed cereal packaging, cereal mylar bags, and wholesale cereal box solutions for brands across the USA.",
    keywords: [
      "custom cereal boxes",
      "cereal boxes",
      "custom printed cereal boxes",
      "wholesale cereal boxes",
      "cereal mylar bags",
      "cereal packaging",
    ],
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = buildOrganizationSchema();
  const localBusinessSchema = buildLocalBusinessSchema();
  const websiteSchema = buildWebsiteSchema();

  return (
    <html lang="en">
      <body>
        {/* ZeeOps live chat — replaced Zendesk/Zopim. Conversations land in the
            dashboard at chat.zeeops.dev under the `thecerealboxes` site. */}
        <Script
          id="zeeops-chat"
          strategy="lazyOnload"
          src="https://chat.zeeops.dev/widget.js?siteId=thecerealboxes"
        />
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(21,36,58,0.08)] bg-white/96 p-3 shadow-[0_-18px_36px_rgba(21,36,58,0.08)] backdrop-blur sm:hidden">
          <div className="mx-auto flex max-w-7xl gap-3 px-2">
            <a
              href="tel:+15034614788"
              className="flex-1 rounded-full border border-[rgba(21,36,58,0.08)] bg-[var(--color-shell)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-ink)]"
            >
              Call Now
            </a>
            <Link
              href="/request-a-quote/"
              className="flex-1 rounded-full bg-[var(--color-accent)] px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_30px_rgba(232,96,58,0.28)]"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <a
          href="https://api.whatsapp.com/send/?phone=15034614788&text=Hi+The+Cereal+Boxes!+I+need+more+info+about+The+Cereal+Boxes+https%3A%2F%2Fthecerealboxes.com%2F&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-24 left-6 z-[9999] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-transform hover:scale-110 sm:bottom-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="34" height="34">
            <path fill="white" d="M4.868 43.303l2.694-9.835a18.838 18.838 0 01-2.52-9.444C5.044 13.505 13.561 5 24.014 5a18.864 18.864 0 0113.37 5.536A18.843 18.843 0 0143 23.917c-.004 10.385-8.52 18.886-18.973 18.886a18.93 18.93 0 01-9.34-2.465L4.868 43.303zm10.733-6.19l.594.352a15.72 15.72 0 008.8 2.678c8.663 0 15.713-7.037 15.716-15.693a15.656 15.656 0 00-4.608-11.131A15.648 15.648 0 0024.027 8.28c-8.669 0-15.718 7.036-15.721 15.69a15.657 15.657 0 002.854 9.032l.444.705-1.888 6.893 6.885-1.787z"/>
            <path fill="white" fillRule="evenodd" d="M19.268 15.787c-.345-.768-.709-.784-1.037-.797-.268-.01-.576-.01-.883-.01a1.692 1.692 0 00-1.228.576c-.422.46-1.611 1.573-1.611 3.836s1.649 4.453 1.878 4.761c.23.307 3.221 5.146 7.927 7.008 3.921 1.547 4.72 1.238 5.572 1.16.852-.077 2.75-1.124 3.137-2.21.389-1.085.389-2.017.273-2.21-.115-.192-.422-.307-.882-.537-.46-.23-2.75-1.355-3.175-1.509-.422-.153-.729-.23-1.036.23-.307.46-1.19 1.509-1.458 1.816-.268.308-.537.346-.997.116-.46-.23-1.94-.714-3.695-2.28-1.365-1.218-2.286-2.723-2.554-3.183-.268-.46-.028-.71.2-.937.208-.206.46-.538.69-.806.23-.268.307-.461.46-.768.154-.307.077-.576-.038-.806-.116-.23-1.005-2.494-1.42-3.41z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
