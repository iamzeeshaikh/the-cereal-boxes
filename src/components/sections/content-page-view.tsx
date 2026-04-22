import Image from "next/image";
import Link from "next/link";

import { LeadForm } from "@/components/forms/lead-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import type { ContentPage } from "@/data/catalog";
import { buildExpandedFaqs } from "@/data/catalog";

const trustPoints = ["Low MOQ", "Free Design Support", "Fast Turnaround"];

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

              <div className="surface-card overflow-hidden p-3">
                <div className="relative aspect-[1.04/0.9] overflow-hidden rounded-[24px]">
                  <Image
                    src={page.image}
                    alt={page.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="grid gap-10">
            <div className="surface-card p-7 sm:p-9">
              <h2 className="text-3xl text-[var(--color-ink)] sm:text-4xl">
                Specifications
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                Use this table as a quick planning snapshot for {page.title.toLowerCase()} before
                requesting a quote.
              </p>
              <div className="mt-6 overflow-hidden rounded-[24px] border border-[rgba(21,36,58,0.08)]">
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
                    Custom cereal boxes for retail brands
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                    {page.title} is built for cereal brands that need retail-ready packaging with
                    stronger shelf presence, practical product protection, and clear front-panel
                    communication. If you also need stronger print impact, explore{" "}
                    <Link href="/custom-printed-cereal-boxes/" className="micro-link">
                      Custom Printed Cereal Boxes
                    </Link>{" "}
                    for branding-led retail packaging programs.
                  </p>
                </div>

                <div className="surface-card p-7 sm:p-9">
                  <h2 className="text-3xl text-[var(--color-ink)] sm:text-4xl">Materials used</h2>
                  <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                    Common material choices include SBS paperboard, natural kraft, and lightweight
                    cardboard-based retail cartons depending on the cereal product, fill format, and
                    shelf goals. If you are comparing unprinted formats, see{" "}
                    <Link href="/blank-cereal-boxes/" className="micro-link">
                      Blank Cereal Boxes
                    </Link>{" "}
                    for label-ready and plain carton options.
                  </p>
                </div>

                <div className="surface-card p-7 sm:p-9">
                  <h2 className="text-3xl text-[var(--color-ink)] sm:text-4xl">Printing options</h2>
                  <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                    Printing options can include CMYK process, Pantone-led color matching, inside
                    print, pattern printing, and messaging layouts designed around barcodes,
                    nutrition panels, and promotional callouts. For more print-heavy packaging
                    direction, visit{" "}
                    <Link href="/custom-printed-cereal-boxes/" className="micro-link">
                      Custom Printed Cereal Boxes
                    </Link>
                    .
                  </p>
                </div>

                <div className="surface-card p-7 sm:p-9">
                  <h2 className="text-3xl text-[var(--color-ink)] sm:text-4xl">
                    Finishing and add-ons
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                    Finishing can include matte and gloss coatings, soft-touch lamination, foil
                    accents, embossing, debossing, window patching, inserts, and promotional
                    structural add-ons. These upgrades help cereal packaging feel more premium
                    without losing practicality.
                  </p>
                </div>

                <div className="surface-card p-7 sm:p-9">
                  <h2 className="text-3xl text-[var(--color-ink)] sm:text-4xl">
                    Custom sizes and dielines
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                    Custom length, width, and depth decisions affect fill efficiency, visual
                    hierarchy, and case-pack planning. If you need help defining the right size,
                    review our{" "}
                    <Link href="/cereal-box-dimensions/" className="micro-link">
                      Cereal Box Dimensions
                    </Link>{" "}
                    guide. If your project involves smaller promotional packs, our{" "}
                    <Link href="/mini-cereal-boxes/" className="micro-link">
                      Mini Cereal Boxes
                    </Link>{" "}
                    page is also worth reviewing.
                  </p>
                </div>

                <div className="surface-card p-7 sm:p-9">
                  <h2 className="text-3xl text-[var(--color-ink)] sm:text-4xl">
                    Wholesale production
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                    We support both low MOQ launches and larger-volume wholesale cereal packaging.
                    If your project requires an inner freshness format as well, see{" "}
                    <Link href="/cereal-mylar-bags/" className="micro-link">
                      Cereal Mylar Bags
                    </Link>{" "}
                    to plan a more complete bag-and-box system.
                  </p>
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

                <div className="surface-card p-7 sm:p-9">
                  <h2 className="text-3xl text-[var(--color-ink)] sm:text-4xl">
                    Custom vs blank cereal boxes
                  </h2>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-[24px] border border-[rgba(21,36,58,0.08)] bg-white p-5">
                      <h3 className="text-2xl text-[var(--color-ink)]">Custom printed cereal boxes</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                        Best when branding, shelf presence, and stronger retail conversion matter.
                        See{" "}
                        <Link href="/custom-printed-cereal-boxes/" className="micro-link">
                          Custom Printed Cereal Boxes
                        </Link>{" "}
                        for a deeper print-focused breakdown.
                      </p>
                    </div>
                    <div className="rounded-[24px] border border-[rgba(21,36,58,0.08)] bg-white p-5">
                      <h3 className="text-2xl text-[var(--color-ink)]">Blank cereal boxes</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                        Best for labels, warehouse use, private label flexibility, and shorter-run
                        testing. Compare with{" "}
                        <Link href="/blank-cereal-boxes/" className="micro-link">
                          Blank Cereal Boxes
                        </Link>{" "}
                        if you need a simpler outer carton.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : null}

            {page.sections.map((section) => (
              <div key={section.title} className="surface-card p-7 sm:p-9">
                <h2 className="text-3xl text-[var(--color-ink)] sm:text-4xl">{section.title}</h2>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{section.body}</p>
                {section.bullets?.length ? (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-[20px] border border-[rgba(21,36,58,0.08)] bg-white px-4 py-4 text-sm leading-7 text-[var(--color-ink)]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

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

          <div className="grid gap-6">
            <LeadForm title="Get A Fast Packaging Quote" />
            <div className="surface-card p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Why Brands Choose Us
              </p>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-[var(--color-ink)]">
                <li>Low minimums for new cereal product launches</li>
                <li>Premium retail printing and finishing options</li>
                <li>Custom sizes, shapes, inserts, and structural guidance</li>
                <li>Wholesale-friendly planning for repeat packaging runs</li>
              </ul>
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
