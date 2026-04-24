import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { contentPages } from "@/data/catalog";
import { homepageFaqs } from "@/data/site";
import { buildBreadcrumbSchema, buildFaqSchema, createMetadata } from "@/lib/seo";

const faqItems = [...homepageFaqs, ...contentPages.slice(0, 6).flatMap((page) => page.faq)].slice(0, 12);

export const metadata = createMetadata({
  title: "FAQ | The Cereal Boxes",
  description:
    "Frequently asked questions about custom cereal boxes, printing, materials, dimensions, minimum orders, wholesale production, and cereal packaging support.",
  path: "/faq/",
});

export default function FAQPage() {
  const faqSchema = buildFaqSchema(faqItems);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq/" },
  ]);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers to common cereal packaging, print, and quote questions."
        description="This FAQ page helps buyers understand custom cereal box sizes, printing, low MOQ support, wholesale production, food packaging options, and project timelines."
      />
      <section className="section-space">
        <Container>
          <div className="surface-card p-7 sm:p-9">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ["MOQ and pricing", "Learn how low minimums and wholesale quantities are handled."],
                ["Design and printing", "See how dielines, artwork, and finishing support works."],
                ["Turnaround and shipping", "Understand production planning and nationwide delivery."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-[22px] bg-[var(--color-shell)] p-5">
                  <h2 className="text-2xl text-[var(--color-ink)]">{title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </Container>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
