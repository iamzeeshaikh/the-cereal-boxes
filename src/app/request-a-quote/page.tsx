import { QuoteForm } from "@/components/forms/quote-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Request A Quote | Custom Cereal Boxes",
  description:
    "Request a quote for custom cereal boxes, printed cereal packaging, blank cereal boxes, mini cereal boxes, cereal mylar bags, and wholesale cereal box projects.",
  path: "/request-a-quote/",
});

export default function RequestQuotePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Request a Quote", path: "/request-a-quote/" },
  ]);

  return (
    <>
      <PageHero
        eyebrow="Request A Quote"
        title="Send your cereal packaging specs and get a custom quote."
        description="Share your dimensions, quantity, material preferences, print requirements, and artwork files so we can prepare a quote for your cereal packaging project."
      />

      <section className="section-space">
        <Container className="grid gap-8 xl:grid-cols-[1fr_360px]">
          <div className="grid gap-6">
            <div className="surface-card p-7 sm:p-9">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Request A Quote" }]} />
              <h2 className="text-4xl text-[var(--color-ink)]">What to include in your quote request</h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                A stronger quote starts with clearer specifications. Share as much detail as you
                can and our team will shape the right packaging path from there.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  "Product type or preferred page",
                  "Quantity and target timeline",
                  "Length, width, and depth",
                  "Material and printing preferences",
                  "Any artwork files, dielines, or packaging briefs",
                ].map((item) => (
                  <div key={item} className="rounded-[20px] bg-[var(--color-shell)] px-4 py-4 text-sm leading-7 text-[var(--color-ink)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <QuoteForm />
          </div>

          <div className="grid gap-6">
            <div className="surface-card h-fit p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Fast Quote Workflow
              </p>
              <div className="mt-5 grid gap-4 text-sm leading-7 text-[var(--color-muted)]">
                <p>We review your packaging scope, confirm specs, and recommend the right structure and material path for the project.</p>
                <p>Our quote process is built for both low MOQ projects and larger wholesale packaging inquiries.</p>
                <p>Artwork files can be uploaded now and connected to a deeper CRM or quote handling workflow later.</p>
              </div>
            </div>

            <div className="surface-card p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Quote Benefits
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "Low MOQ support for new cereal packaging launches",
                  "Free design guidance for structure and print planning",
                  "Fast turnaround conversations for urgent projects",
                  "Support for cereal cartons, mini boxes, and mylar bags",
                ].map((item) => (
                  <div key={item} className="rounded-[20px] bg-[var(--color-shell)] px-4 py-4 text-sm leading-7 text-[var(--color-ink)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
