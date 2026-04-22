import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { LeadForm } from "@/components/forms/lead-form";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { blogPosts, contentPages, featuredHomeSlugs } from "@/data/catalog";
import {
  customizationOptions,
  homeTrustBadges,
  homepageFaqs,
  industries,
  materialOptions,
  processSteps,
  serviceReasons,
  trustHighlights,
} from "@/data/site";
import { buildFaqSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Custom Cereal Boxes In The USA | The Cereal Boxes",
  description:
    "Premium custom cereal boxes for USA brands. Explore printed cereal packaging, blank cereal boxes, mini cereal boxes, cereal mylar bags, and wholesale cereal box solutions.",
  path: "/",
  keywords: [
    "custom cereal boxes",
    "printed cereal packaging",
    "wholesale cereal boxes",
    "blank cereal boxes",
    "mini cereal boxes",
  ],
});

export default function HomePage() {
  const featuredPages = contentPages.filter((page) => featuredHomeSlugs.includes(page.slug));
  const faqSchema = buildFaqSchema(homepageFaqs);
  const heroFeaturedCards = [
    {
      title: "Custom Cereal Boxes",
      href: "/cereal-boxes/",
      image: "/images/cereal/cereal-boxes.jpg",
      alt: "Custom cereal boxes packaging category.",
    },
    {
      title: "Custom Printed Cereal Boxes",
      href: "/custom-printed-cereal-boxes/",
      image: "/images/cereal/custom-printed-cereal-boxes.jpg",
      alt: "Custom printed cereal boxes packaging category.",
    },
    {
      title: "Blank Cereal Boxes",
      href: "/blank-cereal-boxes/",
      image: "/images/cereal/blank-cereal-boxes.jpg",
      alt: "Blank cereal boxes packaging category.",
    },
    {
      title: "Mini Cereal Boxes",
      href: "/mini-cereal-boxes/",
      image: "/images/cereal/mini-cereal-boxes.jpg",
      alt: "Mini cereal boxes packaging category.",
    },
    {
      title: "Cereal Mylar Bags",
      href: "/cereal-mylar-bags/",
      image: "/images/cereal/cereal-mylar-bags.jpg",
      alt: "Cereal mylar bags packaging category.",
    },
    {
      title: "Wholesale Cereal Packaging",
      href: "/wholesale-cereal-boxes/",
      image: "/images/cereal/wholesale-cereal-boxes.jpg",
      alt: "Wholesale cereal packaging category.",
    },
  ];
  const heroUsps = ["Low MOQ", "Free Design Support", "Fast Turnaround", "Nationwide Delivery"];

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0e1a2b_0%,#15243a_62%,#1d2e47_100%)] pb-18 pt-8 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,201,93,0.24),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(244,201,93,0.16),transparent_22%),radial-gradient(circle_at_75%_65%,rgba(232,96,58,0.16),transparent_26%)]" />
        <div className="absolute inset-y-0 right-0 hidden w-[42%] opacity-20 lg:block">
          <div className="absolute left-10 top-16 h-44 w-44 rounded-[2.5rem] border border-white/14" />
          <div className="absolute right-16 top-40 h-60 w-60 rounded-[3rem] border border-[rgba(244,201,93,0.28)]" />
          <div className="absolute bottom-12 left-24 h-40 w-56 rounded-[2.5rem] border border-white/10" />
        </div>

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">
                {homeTrustBadges.slice(0, 3).map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border border-white/14 bg-white/7 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <h1 className="mt-6 max-w-4xl text-[2.8rem] leading-[0.94] text-white sm:text-[3.6rem] lg:text-[4.4rem]">
                Premium custom cereal packaging for modern food brands.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(255,255,255,0.76)] sm:text-lg">
                The Cereal Boxes manufactures custom cereal boxes, printed cartons, cereal mylar bags, and wholesale-ready packaging built for retail shelves, launches, and nationwide delivery.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href="/request-a-quote/"
                  variant="secondary"
                  icon={<ArrowRight className="size-4" />}
                  className="px-6 py-3.5"
                >
                  Request a Quote
                </Button>
                <Button
                  href="/contact-us/"
                  variant="ghost"
                  className="border-white/18 bg-transparent text-white hover:border-white/30 hover:bg-white/8 hover:text-white"
                >
                  Talk to Packaging Expert
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {heroUsps.map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-white/12 bg-white/6 px-4 py-3 text-sm font-semibold text-white/84 backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[42rem]">
              <div className="absolute inset-x-10 top-8 h-24 rounded-full bg-[rgba(244,201,93,0.22)] blur-3xl" />
              <div className="relative aspect-[1.12/0.96]">
                <div className="absolute left-0 top-[14%] w-[31%] rounded-[1.9rem] border border-white/16 bg-white/92 p-3 shadow-[0_26px_60px_rgba(5,10,18,0.35)]">
                  <div className="relative aspect-[0.8/1] overflow-hidden rounded-[1.3rem]">
                    <Image
                      src="/images/cereal/custom-printed-cereal-boxes.jpg"
                      alt="Custom printed cereal box mockup."
                      fill
                      sizes="(min-width: 1024px) 12vw, 24vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="absolute right-0 top-0 w-[72%] rounded-[2.4rem] border border-white/18 bg-white/95 p-4 shadow-[0_34px_80px_rgba(5,10,18,0.42)]">
                  <div className="relative aspect-[1.04/0.9] overflow-hidden rounded-[1.8rem] bg-[var(--color-shell)]">
                    <Image
                      src="/images/cereal/cereal-boxes.jpg"
                      alt="Premium custom cereal packaging hero visual."
                      fill
                      priority
                      sizes="(min-width: 1024px) 34vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 right-[10%] w-[34%] rounded-[1.8rem] border border-white/16 bg-white/94 p-3 shadow-[0_24px_56px_rgba(5,10,18,0.34)]">
                  <div className="relative aspect-[0.9/1] overflow-hidden rounded-[1.2rem]">
                    <Image
                      src="/images/cereal/cereal-mylar-bags.jpg"
                      alt="Cereal mylar bag packaging mockup."
                      fill
                      sizes="(min-width: 1024px) 12vw, 24vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="-mt-10 pb-16 sm:-mt-12">
        <Container>
          <div className="rounded-[2rem] border border-[rgba(21,36,58,0.08)] bg-white p-5 shadow-[0_20px_50px_rgba(21,36,58,0.08)] sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Featured Categories
                </p>
                <h2 className="mt-2 text-3xl text-[var(--color-ink)] sm:text-4xl">
                  Explore our core cereal packaging lines.
                </h2>
              </div>
              <Link href="/cereal-boxes/" className="micro-link">
                View all cereal packaging
              </Link>
            </div>

            <div className="mt-8 editorial-grid">
              {heroFeaturedCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="surface-card overflow-hidden p-4 transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(21,36,58,0.1)]"
                >
                  <div className="relative aspect-[1.05/0.82] overflow-hidden rounded-[22px]">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 1280px) 20vw, (min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h2 className="mt-5 text-3xl text-[var(--color-ink)]">{card.title}</h2>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="editorial-grid">
          {featuredPages.map((page) => (
            <Link
              key={page.slug}
              href={`/${page.slug}/`}
              className="surface-card overflow-hidden p-4 transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(21,36,58,0.1)]"
            >
              <div className="relative aspect-[1.05/0.82] overflow-hidden rounded-[22px]">
                <Image
                  src={page.image}
                  alt={page.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h2 className="mt-5 text-3xl text-[var(--color-ink)]">{page.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{page.intro}</p>
            </Link>
          ))}
        </Container>
      </section>

      <section className="section-space bg-[linear-gradient(180deg,rgba(247,239,216,0.42),rgba(255,255,255,0.7))]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Why Choose The Cereal Boxes
            </p>
            <h2 className="mt-4 text-4xl text-[var(--color-ink)] sm:text-5xl">
              A premium packaging partner for cereal brands that need design, structure, and conversion all working together.
            </h2>
          </div>
          <div className="mt-10 editorial-grid">
            {trustHighlights.map((item) => (
              <div key={item.title} className="surface-card p-6">
                <item.icon className="size-6 text-[var(--color-accent)]" />
                <h3 className="mt-4 text-2xl text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-8 xl:grid-cols-2">
          <div className="surface-card p-7 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Customization Options
            </p>
            <h2 className="mt-4 text-4xl text-[var(--color-ink)]">Built around your specs, not forced into a stock template.</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {customizationOptions.map((item) => (
                <div key={item} className="rounded-[20px] bg-[var(--color-shell)] px-4 py-4 text-sm leading-7 text-[var(--color-ink)]">
                  {item}
                </div>
              ))}
            </div>
            <Link href="/customization-printing-options/" className="micro-link mt-6">
              Explore customization and printing options
            </Link>
          </div>

          <div className="surface-card p-7 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Materials And Finishes
            </p>
            <h2 className="mt-4 text-4xl text-[var(--color-ink)]">Food packaging materials paired with premium retail finishes.</h2>
            <div className="mt-6 grid gap-3">
              {materialOptions.map((item) => (
                <div key={item} className="rounded-[20px] border border-[rgba(21,36,58,0.08)] bg-white px-4 py-4 text-sm leading-7 text-[var(--color-ink)]">
                  {item}
                </div>
              ))}
            </div>
            <Link href="/materials-finishes/" className="micro-link mt-6">
              Review materials and finishes
            </Link>
          </div>
        </Container>
      </section>

      <section className="section-space bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(247,239,216,0.54))]">
        <Container className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <LeadForm title="Get A Quote For Custom Cereal Packaging" />

          <div className="grid gap-6">
            <div className="surface-card p-7 sm:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Our Process
              </p>
              <div className="mt-6 grid gap-4">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="rounded-[24px] border border-[rgba(21,36,58,0.08)] bg-white px-5 py-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 text-2xl text-[var(--color-ink)]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card p-7 sm:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Industries We Serve
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {industries.map((industry) => (
                  <div key={industry.title} className="rounded-[22px] bg-[var(--color-shell)] p-5">
                    <h3 className="text-2xl text-[var(--color-ink)]">{industry.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{industry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-12 pb-16 sm:pt-14 sm:pb-18">
        <Container className="grid gap-8 xl:grid-cols-[1fr_0.95fr]">
          <div className="surface-card p-7 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Conversion-Focused Trust
            </p>
            <h2 className="mt-4 text-4xl text-[var(--color-ink)]">Built to rank, built to convert, built to scale.</h2>
            <div className="mt-6 grid gap-3">
              {serviceReasons.map((item) => (
                <div key={item} className="rounded-[20px] border border-[rgba(21,36,58,0.08)] bg-white px-4 py-4 text-sm leading-7 text-[var(--color-ink)]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-7 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Resources
            </p>
            <h2 className="mt-4 text-4xl text-[var(--color-ink)]">Supportive content built around real packaging decisions.</h2>
            <div className="mt-6 grid gap-4">
              {blogPosts.slice(0, 4).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}/`} className="rounded-[22px] bg-[var(--color-shell)] p-5 transition hover:-translate-y-0.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                    {post.category}
                  </p>
                  <h3 className="mt-2 text-2xl text-[var(--color-ink)]">{post.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{post.excerpt}</p>
                </Link>
              ))}
            </div>
            <Link href="/blog/" className="micro-link mt-6">
              Explore all resources
            </Link>
          </div>
        </Container>
      </section>

      <section className="pt-8 pb-16 sm:pt-10 sm:pb-18 bg-[linear-gradient(180deg,rgba(247,239,216,0.48),rgba(255,255,255,0.8))]">
        <Container className="surface-card p-7 sm:p-9">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              FAQ
            </p>
            <h2 className="mt-4 text-4xl text-[var(--color-ink)] sm:text-5xl">
              Answers to common cereal packaging questions.
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              These answers cover common questions about minimum order quantity, turnaround, cereal box design support, wholesale supply, and custom packaging specifications.
            </p>
          </div>
          <div className="mt-10">
            <FAQAccordion items={homepageFaqs} />
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
