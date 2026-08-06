import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { ProductQuickForm } from "@/components/forms/product-quick-form";
import { BoxConfigurator } from "@/components/sections/box-configurator";
import { cerealConfiguratorConfig } from "@/data/configurator";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { CheckList } from "@/components/ui/check-list";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { ProductGallery } from "@/components/ui/product-gallery";
import type { ContentPage } from "@/data/catalog";
import { buildExpandedFaqs } from "@/data/catalog";

const trustPoints = ["Low MOQ", "Free Design Support", "Fast Turnaround"];
const startingPrice = "$1.00";

// Render section body text, turning inline [anchor](/slug/) markers into
// contextual internal links so links sit naturally inside the prose.
function renderBody(body: string) {
  const parts: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\((\/[a-z0-9/-]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(body)) !== null) {
    if (match.index > lastIndex) parts.push(body.slice(lastIndex, match.index));
    parts.push(
      <Link key={key++} href={match[2]} className="micro-link">
        {match[1]}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < body.length) parts.push(body.slice(lastIndex));
  return parts;
}

export function ContentPageView({
  page,
  relatedPages,
}: {
  page: ContentPage;
  relatedPages: ContentPage[];
}) {
  const expandedFaqs = buildExpandedFaqs(page);
  const specRows = buildSpecRows(page);
  const gallery = buildGallery(page);
  const galleryImages = gallery
    .filter((item, index, all) => all.findIndex((other) => other.image === item.image) === index)
    .map((item) => ({ src: item.image, alt: item.alt, label: item.label }));
  const showStartingPrice = page.kind === "product";
  const showProductEnhancements =
    page.kind === "product" || page.kind === "category" || page.kind === "service";

  return (
    <>
      <section className="pt-8 pb-12 sm:pt-10">
        <Container>
          <div className="hero-shell px-6 py-8 sm:px-10 sm:py-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                {
                  label: page.kind === "guide" ? "Resources" : "Cereal Boxes",
                  href: page.kind === "guide" ? "/blog/" : "/cereal-boxes/",
                },
                { label: page.title },
              ]}
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:items-center">
              <div>
                <span className="chip">{page.heroLabel}</span>
                <h1 className="mt-5 max-w-3xl text-5xl leading-[0.95] text-[var(--color-ink)] sm:text-6xl">
                  {page.title}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
                  {page.intro}
                </p>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-muted)]">
                  {page.title} from The Cereal Boxes is designed for brands that need stronger shelf
                  appeal, reliable production planning, and a cereal packaging partner that can
                  support both launch-stage projects and repeat wholesale orders.
                </p>
                {showStartingPrice ? (
                  <div className="mt-5 inline-flex flex-wrap items-center gap-3 rounded-[20px] border border-[rgba(21,36,58,0.08)] bg-[var(--color-shell)] px-4 py-3">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Starting at
                    </span>
                    <span className="text-2xl font-semibold text-[var(--color-ink)]">
                      {startingPrice}
                    </span>
                    <span className="text-sm leading-7 text-[var(--color-muted)]">
                      per unit for custom cereal packaging quote requests
                    </span>
                  </div>
                ) : null}
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/request-a-quote/" variant="secondary">
                    Request a Quote
                  </Button>
                  <Button href="/contact-us/" variant="ghost">
                    Talk to Packaging Expert
                  </Button>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {trustPoints.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {showProductEnhancements ? (
                <ProductGallery images={galleryImages} productName={page.title} />
              ) : (
                <div className="surface-card overflow-hidden p-3">
                  <div className="relative aspect-[1.04/0.9] overflow-hidden rounded-[24px]">
                    <Image
                      src={page.image}
                      alt={page.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <ProductQuickForm productName={page.title} title="Get a Fast Packaging Quote" />
          <div className="surface-card p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Why Brands Choose Us
            </p>
            <CheckList
              className="mt-4"
              items={[
                "Low minimums for new cereal product launches",
                "Premium retail printing and finishing options",
                "Custom sizes, shapes, inserts, and structural guidance",
                "Wholesale-friendly planning for repeat packaging runs",
              ]}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/request-a-quote/" variant="secondary">
                Request a Quote
              </Button>
              <Button href="/contact-us/" variant="ghost">
                Talk to Packaging Expert
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid min-w-0 gap-10">
          <div className="grid min-w-0 gap-10">
            <div className="surface-card p-7 sm:p-9">
              <h2 className="text-3xl text-[var(--color-ink)] sm:text-4xl">
                Specifications
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                Use this table as a quick planning snapshot for {page.title.toLowerCase()} before
                requesting a quote.
              </p>
              <div className="mt-6 overflow-x-auto rounded-[24px] border border-[rgba(21,36,58,0.08)]">
                <table className="w-full border-collapse text-left">
                  <tbody>
                    {specRows.map((row, index) => (
                      <tr key={row.label} className={index % 2 === 0 ? "bg-white" : "bg-[var(--color-shell)]"}>
                        <th className="w-[32%] px-5 py-4 text-sm font-semibold text-[var(--color-ink)] sm:px-6">
                          {row.label}
                        </th>
                        <td className="px-5 py-4 text-sm leading-7 text-[var(--color-muted)] sm:px-6">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {showProductEnhancements ? (
              <>
                <div className="surface-card p-7 sm:p-9">
                  <h2 className="text-3xl text-[var(--color-ink)] sm:text-4xl">
                    Product images and packaging views
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                    Review mockups, print detail references, dieline-style planning visuals, and
                    packaging variations relevant to {page.title.toLowerCase()}.
                  </p>
                  <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {gallery.map((item) => (
                      <div key={item.label} className="rounded-[24px] border border-[rgba(21,36,58,0.08)] bg-white p-3">
                        <div className="relative aspect-[0.95/1] overflow-hidden rounded-[18px]">
                          <Image
                            src={item.image}
                            alt={item.alt}
                            fill
                            sizes="(min-width: 1280px) 16vw, (min-width: 768px) 30vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                        <p className="mt-4 text-sm font-semibold text-[var(--color-ink)]">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="surface-card p-7 sm:p-9">
                  <h2 className="text-3xl text-[var(--color-ink)] sm:text-4xl">
                    Why choose The Cereal Boxes
                  </h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Low minimums for new cereal product launches",
                      "Free design support for dielines and print planning",
                      "Fast turnaround workflow for quotes and approvals",
                      "Nationwide delivery support across the USA",
                      "Premium print, finish, and structural packaging options",
                      "Wholesale-friendly planning for repeat production orders",
                    ].map((item) => (
                      <div key={item} className="rounded-[20px] bg-[var(--color-shell)] px-4 py-4 text-sm leading-7 text-[var(--color-ink)]">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : null}

            {page.sections.map((section) => (
              <div key={section.title} className="surface-card p-7 sm:p-9">
                <h2 className="text-3xl text-[var(--color-ink)] sm:text-4xl">{section.title}</h2>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{renderBody(section.body)}</p>
                {section.bullets?.length ? (
                  <CheckList className="mt-6" variant="card" items={section.bullets} />
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {showProductEnhancements ? (
        <BoxConfigurator productName={page.title} config={cerealConfiguratorConfig} />
      ) : null}

      <section className="pb-16">
        <Container className="grid min-w-0 gap-10">
          <div className="grid min-w-0 gap-10">
            <div className="surface-card p-7 sm:p-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                    Frequently Asked Questions
                  </p>
                  <h2 className="mt-3 text-3xl text-[var(--color-ink)] sm:text-4xl">
                    Questions buyers ask before ordering.
                  </h2>
                </div>
                <Link href="/faq/" className="micro-link">
                  Visit the full FAQ page
                </Link>
              </div>
              <div className="mt-8">
                <FAQAccordion items={expandedFaqs} />
              </div>
            </div>

            {relatedPages.length ? (
              <div className="surface-card p-7 sm:p-9">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                      Related Products
                    </p>
                    <h2 className="mt-3 text-3xl text-[var(--color-ink)] sm:text-4xl">
                      Keep exploring cereal packaging options.
                    </h2>
                  </div>
                  <Link href="/cereal-boxes/" className="micro-link">
                    See all cereal box pages
                  </Link>
                </div>
                <div className="mt-8 editorial-grid">
                  {relatedPages.slice(0, 6).map((relatedPage) => (
                    <Link
                      key={relatedPage.slug}
                      href={`/${relatedPage.slug}/`}
                      className="rounded-[24px] border border-[rgba(21,36,58,0.08)] bg-white p-4 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(21,36,58,0.08)]"
                    >
                      <div className="relative aspect-[1.1/0.88] overflow-hidden rounded-[18px]">
                        <Image
                          src={relatedPage.image}
                          alt={relatedPage.imageAlt}
                          fill
                          sizes="(min-width: 1280px) 20vw, (min-width: 768px) 40vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <h3 className="mt-4 text-2xl text-[var(--color-ink)]">{relatedPage.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                        {relatedPage.intro}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="rounded-[32px] border border-[rgba(21,36,58,0.08)] bg-[linear-gradient(135deg,#0f1b2e,#15243a)] p-7 text-white shadow-[0_24px_60px_rgba(21,36,58,0.2)] sm:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/58">
                Start Your Project
              </p>
              <h2 className="mt-3 text-4xl text-white sm:text-5xl">
                Start your custom cereal box project today
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/74">
                Get a custom quote within 24 hours and talk through materials, printing, dielines,
                sizes, and wholesale production with our packaging team.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/request-a-quote/" variant="secondary">
                  Request a Quote
                </Button>
                <Button
                  href="/contact-us/"
                  variant="ghost"
                  className="border-white/18 bg-white/6 text-white hover:bg-white/12 hover:text-white"
                >
                  Talk to Packaging Expert
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function buildSpecRows(page: ContentPage) {
  return [
    {
      label: "Material",
      value:
        page.specs.find((item) => /material/i.test(item.label))?.value ||
        "SBS paperboard, kraft board, cardboard retail cartons, and related cereal packaging board options.",
    },
    {
      label: "Printing",
      value:
        page.specs.find((item) => /print/i.test(item.label))?.value ||
        "CMYK and Pantone-led print workflows with support for retail graphics, nutrition panels, and barcode placement.",
    },
    {
      label: "Finishing",
      value:
        "Matte, gloss, aqueous coating, soft-touch, foil, embossing, debossing, inserts, and optional window patching.",
    },
    {
      label: "Sizes",
      value:
        "Custom sizes available based on cereal weight, inner bag requirements, shelf orientation, and case-pack planning.",
    },
    {
      label: "MOQ",
      value: "Low MOQ options available, with support for larger wholesale and repeat-order programs.",
    },
    {
      label: "Turnaround",
      value:
        "Fast quote handling and production planning based on quantity, print complexity, and finishing requirements.",
    },
  ];
}

function buildGallery(page: ContentPage) {
  return [
    {
      label: "Main mockup",
      image: page.image,
      alt: page.imageAlt,
    },
    {
      label: "Close-up printing",
      image: "/images/cereal/custom-printed-cereal-boxes.jpg",
      alt: "Close-up cereal box printing reference.",
    },
    {
      label: "Dieline planning",
      image: "/images/cereal/cereal-box-dimensions.jpg",
      alt: "Cereal box dimensions and dieline planning visual.",
    },
    {
      label: "Packaging variations",
      image:
        page.slug === "mini-cereal-boxes" || page.slug === "small-cereal-boxes"
          ? "/images/cereal/mini-cereal-boxes.jpg"
          : page.slug === "blank-cereal-boxes" || page.slug === "plain-cereal-boxes"
            ? "/images/cereal/blank-cereal-boxes.jpg"
            : "/images/cereal/cereal-mylar-bags.jpg",
      alt: "Cereal packaging variation reference.",
    },
  ];
}
