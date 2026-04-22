import Link from "next/link";

import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Thank You | The Cereal Boxes",
  description: "Thank you for contacting The Cereal Boxes.",
  path: "/thank-you/",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <section className="section-space">
      <Container>
        <div className="rounded-[34px] border border-[rgba(21,36,58,0.08)] bg-[linear-gradient(135deg,#0f1b2e,#15243a)] px-8 py-12 text-center text-white shadow-[0_24px_60px_rgba(21,36,58,0.2)] sm:px-12">
          <p className="inline-flex rounded-full border border-white/14 bg-white/6 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/76">
            Request Received
          </p>
          <h1 className="mt-6 text-5xl text-white sm:text-6xl">
            Thank you for contacting The Cereal Boxes.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/74">
            Your submission is on its way to our team. We will review your cereal packaging
            requirements and follow up through the details you provided.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/request-a-quote/"
              className="inline-flex rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_28px_rgba(232,96,58,0.25)]"
            >
              Submit another quote
            </Link>
            <Link
              href="/cereal-boxes/"
              className="inline-flex rounded-full border border-white/18 bg-white/6 px-5 py-3 text-sm font-semibold text-white"
            >
              Explore cereal box pages
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
