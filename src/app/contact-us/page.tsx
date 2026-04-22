import { ContactForm } from "@/components/forms/contact-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { contactCards, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Us | The Cereal Boxes",
  description:
    "Contact The Cereal Boxes for custom cereal boxes, printed cereal packaging, cereal mylar bags, and wholesale packaging support in the USA.",
  path: "/contact-us/",
});

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to a packaging expert about custom cereal boxes."
        description="Use the contact form, call us directly, or email your project details to start a quote for custom cereal packaging, wholesale cereal boxes, or specialty packaging support."
      />

      <section className="section-space">
        <Container className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-6">
            <div className="surface-card p-7 sm:p-9">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
              <h2 className="text-4xl text-[var(--color-ink)]">Direct contact details</h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                Reach out by phone, email, or the inquiry form if you need pricing, packaging advice,
                or support choosing the right cereal box format.
              </p>
              <div className="mt-6 grid gap-4">
                {contactCards.map((card) => (
                  <a
                    key={card.title}
                    href={card.href}
                    className="rounded-[22px] border border-[rgba(21,36,58,0.08)] bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(21,36,58,0.06)]"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      {card.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-ink)]">{card.value}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="surface-card p-7 sm:p-9">
              <h3 className="text-3xl text-[var(--color-ink)]">Map and service area</h3>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                We serve cereal packaging buyers across the United States while maintaining clear
                local business information for trust and NAP consistency.
              </p>
              <div className="mt-6 rounded-[26px] border border-dashed border-[rgba(21,36,58,0.14)] bg-[linear-gradient(135deg,rgba(247,239,216,0.9),rgba(255,255,255,0.96))] p-8 text-sm leading-7 text-[var(--color-muted)]">
                <p className="font-semibold text-[var(--color-ink)]">Map embed placeholder</p>
                <p className="mt-2">{siteConfig.address}</p>
                <p className="mt-2">Nationwide custom cereal packaging support across the USA.</p>
              </div>
            </div>

            <div className="surface-card p-7 sm:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Response Promise
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "Fast packaging consultation for new projects",
                  "Help choosing sizes, materials, and printing direction",
                  "Support for low MOQ and wholesale cereal packaging",
                ].map((item) => (
                  <div key={item} className="rounded-[20px] bg-[var(--color-shell)] px-4 py-4 text-sm leading-7 text-[var(--color-ink)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
