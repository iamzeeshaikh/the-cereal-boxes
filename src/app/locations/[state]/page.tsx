import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getContentPageBySlug } from "@/data/catalog";
import {
  locationStates,
  getLocationState,
  cerealLinkTargets,
  cerealAnchor,
  cerealPick,
} from "@/data/locations";
import { buildBreadcrumbSchema, buildFaqSchema, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locationStates.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const s = getLocationState(state);
  if (!s) return {};
  return createMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/locations/${state}/` });
}

export default async function StateLocationPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateSlug } = await params;
  const state = getLocationState(stateSlug);
  if (!state) notFound();
  const basePath = `/locations/${state.slug}/`;

  const styleGrid = cerealLinkTargets("style-" + state.slug, 4)
    .map((s) => getContentPageBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const lt = cerealLinkTargets(state.slug, 2);
  const L = lt.map((s, i) => ({ href: `/${s}/`, text: cerealAnchor(s, state.slug, i) }));
  const sceneLine = cerealPick([
    { pre: `Across the state, brands reach for our `, post: ` to look retail-ready from day one.` },
    { pre: `From startups to grocery programs, ${state.name} food brands lean on our `, post: `.` },
    { pre: `The most-ordered pick across ${state.name} tends to be our `, post: `, printed to spec.` },
  ], state.slug, 0);
  const whoLine = cerealPick([
    { pre: `We print for the full range of ${state.name} food brands — many start with our `, post: ` and scale from there.` },
    { pre: `From first retail run to national rollout, ${state.name} brands order from us, including our `, post: `.` },
    { pre: `Whatever your product, there's a fit — our `, post: ` included.` },
  ], state.slug, 1);

  const faqs: Array<{ question: string; answer: string }> = [
    { question: `Do you print custom cereal boxes across ${state.name}?`, answer: `Yes. We print and ship custom cereal boxes to food brands across ${state.name}, including ${state.cities.map((c) => c.name).join(", ")} and surrounding areas. Send your dieline or artwork for a quote.` },
    { question: `What is the minimum order?`, answer: `Minimums stay low so smaller ${state.name} brands can launch comfortably, with better per-unit pricing as volumes grow. Share your target quantity for a tailored quote.` },
    { question: `Are your cereal boxes food-grade?`, answer: `Yes — we offer food-grade board and liner options suitable for cereal and dry-food contact, plus mylar bags for freshness where ${state.name} brands need them.` },
    { question: `Can you print to my dieline and dimensions?`, answer: `Absolutely. We print to your dieline and box dimensions, or help you build one, so your box fits your product and case-pack.` },
    { question: `Do you offer eco-friendly board?`, answer: `Yes. Recyclable cardboard and eco-friendly board options are available for ${state.name} brands that want sustainable retail packaging.` },
    { question: `Can I add branding, nutrition panels, and barcodes?`, answer: `Yes. Boxes print to your full artwork — logo, front-of-pack design, nutrition facts, ingredients, and barcodes — so your product is retail-ready and compliant.` },
    { question: `Do you send a proof before printing?`, answer: `Yes. Every ${state.name} order includes a proof so you can approve structure, color, and copy before production.` },
    { question: `How much do custom cereal boxes cost?`, answer: `Pricing depends on size, quantity, material, and finish, but custom boxes are the most effective way to look retail-ready — especially at volume. Request a fast quote.` },
    { question: `Do you handle wholesale and private label?`, answer: `Yes. We produce wholesale and private-label cereal boxes at volume for ${state.name} brands, contract manufacturers, and grocery programs, with consistent reorders.` },
    { question: `How fast can you ship across ${state.name}?`, answer: `Most orders print and ship on a reliable timeline to every ${state.name} address. If you have a launch deadline, tell us and we'll confirm timing up front.` },
  ];

  const schema = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Locations", path: "/locations/" },
      { name: state.name, path: basePath },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `Custom Cereal Boxes in ${state.name}`,
      url: `https://thecerealboxes.com${basePath}`,
      description: state.metaDescription,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: state.cities.map((c, i) => ({
          "@type": "ListItem", position: i + 1,
          name: `Custom Cereal Boxes in ${c.name}`,
          url: `https://thecerealboxes.com/locations/${state.slug}/${c.slug}/`,
        })),
      },
    },
    buildFaqSchema(faqs),
  ];

  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <section className="bg-[var(--color-cream)] py-14">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">USA · {state.abbr}</span>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-[var(--color-ink)] sm:text-4xl">{state.h1}</h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)]">{state.intro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/request-a-quote/" variant="primary">Get a Free Quote</Button>
              <Button href="/locations/" variant="secondary">All USA Locations</Button>
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
            <p className="border-b border-[var(--color-border)] pb-3 text-base font-bold text-[var(--color-ink)]">▸ {state.stat}</p>
            <ul className="mt-3 space-y-2.5 text-sm text-[var(--color-ink)]">
              {state.cities.map((c) => (<li key={c.slug} className="flex items-start gap-2"><ChevronRight className="mt-1.5 h-3.5 w-3.5 flex-none text-[var(--color-accent)]" strokeWidth={3} aria-hidden />{c.name}, {state.abbr}</li>))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-ink)]">{state.sceneHeading}</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-muted)]">{state.marketScene}</p>
            <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
              {sceneLine.pre}<Link href={L[0].href} className="font-semibold text-[var(--color-accent)] underline">{L[0].text}</Link>{sceneLine.post}
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
            <h3 className="text-base font-bold text-[var(--color-ink)]">Get a {state.name} Quote</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">Send your box size and quantity for a fast, free quote.</p>
            <Button href="/request-a-quote/" variant="primary" className="mt-4 w-full justify-center">Request a Quote</Button>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-cream)] py-12">
        <Container className="max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">Who We Print For</span>
          <h2 className="mt-2 text-2xl font-bold text-[var(--color-ink)]">{state.name} Food Brands We Serve</h2>
          <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
            {whoLine.pre}<Link href={L[1].href} className="font-semibold text-[var(--color-accent)] underline">{L[1].text}</Link>{whoLine.post}
          </p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {state.industries.map((i) => (<li key={i} className="flex items-start gap-2 text-[var(--color-ink)]"><Check className="mt-1.5 h-3.5 w-3.5 flex-none text-[var(--color-accent)]" strokeWidth={3} aria-hidden />{i}</li>))}
          </ul>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">Cities</span>
          <h2 className="mt-2 text-2xl font-bold text-[var(--color-ink)]">Custom Cereal Boxes by City in {state.name}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {state.cities.map((c) => (
              <Link key={c.slug} href={`/locations/${state.slug}/${c.slug}/`} className="rounded-2xl border border-[var(--color-border)] bg-white p-5 transition-shadow hover:shadow-lg">
                <h3 className="text-lg font-bold text-[var(--color-ink)]">{c.name}, {state.abbr}</h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{c.intro.slice(0, 100)}…</p>
                <span className="mt-2 inline-block text-sm font-semibold text-[var(--color-accent)]">Cereal boxes in {c.name} →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-cream)] py-12">
        <Container>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">Box Styles</span>
          <h2 className="mt-2 text-2xl font-bold text-[var(--color-ink)]">Popular Cereal Box Styles in {state.name}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {styleGrid.map((p) => (
              <Link key={p.slug} href={`/${p.slug}/`} className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white transition-shadow hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.imageAlt} width={800} height={600} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-[var(--color-ink)]">{p.title}</h3>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{p.intro.slice(0, 80)}…</p>
                  <span className="mt-2 inline-block text-sm font-semibold text-[var(--color-accent)]">View {p.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">FAQs</span>
          <h2 className="mt-2 text-2xl font-bold text-[var(--color-ink)]">{state.name} Cereal Boxes — Frequently Asked Questions</h2>
          <div className="mt-5 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
            {faqs.map((f) => (
              <details key={f.question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[var(--color-ink)]">
                  {f.question}<span className="text-xl text-[var(--color-accent)] group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{f.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-ink)] py-14 text-center">
        <Container className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Print Custom Cereal Boxes Anywhere in {state.name}</h2>
          <p className="mt-3 leading-relaxed text-white/75">Send your box size and artwork for a free quote. We'll proof it and ship fast to any {state.name} city.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/request-a-quote/" variant="primary">Get a Free Quote</Button>
            <Button href="/contact-us/" variant="secondary">Contact Us</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
