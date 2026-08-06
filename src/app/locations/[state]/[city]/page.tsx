import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getContentPageBySlug } from "@/data/catalog";
import {
  allCityParams,
  getLocationCity,
  cerealLinkTargets,
  cerealAnchor,
  cerealPick,
} from "@/data/locations";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  createMetadata,
} from "@/lib/seo";

export function generateStaticParams() {
  return allCityParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state, city } = await params;
  const found = getLocationCity(state, city);
  if (!found) return {};
  return createMetadata({
    title: found.city.metaTitle,
    description: found.city.metaDescription,
    path: `/locations/${state}/${city}/`,
  });
}

export default async function CityLocationPage({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state: stateSlug, city: citySlug } = await params;
  const found = getLocationCity(stateSlug, citySlug);
  if (!found) notFound();
  const { state, city } = found;
  const basePath = `/locations/${state.slug}/${city.slug}/`;
  const siblings = state.cities.filter((c) => c.slug !== city.slug);

  // Varied internal links — unique target, anchor, and sentence per page.
  const seedKey = city.slug + state.slug;
  const lt = cerealLinkTargets(seedKey, 4);
  const L = lt.map((s, i) => ({ href: `/${s}/`, text: cerealAnchor(s, seedKey, i) }));
  const styleGrid = cerealLinkTargets("style-" + seedKey, 4)
    .map((s) => getContentPageBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const answerLine = cerealPick([
    { pre: `A favourite among ${city.name} brands is our `, post: `, printed to your dieline and ready for the shelf.` },
    { pre: `${city.name} food brands often start with our `, post: `.` },
    { pre: `One of the most-ordered choices for ${city.name} makers is our `, post: `, built for retail impact.` },
  ], seedKey, 0);
  const sceneLine = cerealPick([
    { pre: `However your cereal reaches ${city.name} shoppers, the box does the selling. Our `, post: ` fit the way local brands go to market.` },
    { pre: `To stand out on a ${city.name} shelf, brands lean on our `, post: `.` },
    { pre: `Our `, post: ` suit the retail-ready look ${city.name} food brands need.` },
  ], seedKey, 1);
  const useLine = cerealPick([
    { pre: `From first retail run to national rollout, ${city.name} brands box it all — including with our `, post: `.` },
    { pre: `Whatever the format, our `, post: ` keep a ${city.name} product looking its best.` },
    { pre: `Popular for exactly this in ${city.name} are our `, post: `.` },
  ], seedKey, 2);
  const whyLine = cerealPick([
    { pre: `Ready to compare formats? Explore our `, post: ` or start a ${city.name} quote today.` },
    { pre: `Weighing sizes and finishes? Our `, post: ` are a great place to begin.` },
    { pre: `Not sure which suits your product? Start with our `, post: ` and we'll help you choose.` },
  ], seedKey, 3);

  const useCases = [
    "Breakfast cereal and flakes",
    "Granola, muesli, and clusters",
    "Kids and novelty cereal",
    "Snack mixes and trail mix",
    "Single-serve and sample boxes",
    "Private-label and contract runs",
  ];

  const faqs: Array<{ question: string; answer: string }> = [
    { question: `Do you print custom cereal boxes for ${city.name} brands?`, answer: city.faqCityAnswer },
    { question: `What is the minimum order for ${city.name} food brands?`, answer: `Our minimums stay low so ${city.name} startups and small brands can launch without a huge first run, and the per-box price drops as volume grows. Tell us your target quantity for exact pricing.` },
    { question: `Are your cereal boxes food-grade and safe for direct contact?`, answer: `Yes. We offer food-grade board and liner options suitable for cereal and dry-food contact, and we can pair boxes with liners or ${city.name}-bound mylar bags for freshness where needed.` },
    { question: `Can you print to my exact dieline and box dimensions?`, answer: `Absolutely. We print to your dieline and specifications, or help you build one. Share your cereal box's dimensions and we'll produce a box that fits your product and your case-pack.` },
    { question: `Do you offer eco-friendly or recycled board?`, answer: `Yes. Recyclable cardboard and eco-friendly board options are available for ${city.name} brands that want sustainable retail packaging without sacrificing print quality.` },
    { question: `Can I add my branding, nutrition panel, and barcodes?`, answer: `Yes. Boxes are printed to your full artwork — logo, front-of-pack design, nutrition facts panel, ingredients, and barcodes — so your ${city.name} product arrives retail-ready and compliant.` },
    { question: `Do you send a proof before printing?`, answer: `Always. Every ${city.name} order includes a proof so you can approve structure, color, and copy before production. Nothing prints until you sign off.` },
    { question: `How much do custom cereal boxes cost?`, answer: `Cost depends on size, quantity, material, and finish, but custom boxes are the most effective way to make a cereal brand look retail-ready — especially at volume. Send your details for a fast, no-obligation quote.` },
    { question: `Do you handle wholesale and private-label runs?`, answer: `Yes. We produce wholesale and private-label cereal boxes at volume for ${city.name} brands, contract manufacturers, and grocery programs, with consistent color and structure on every reorder.` },
    { question: `How fast can you ship cereal boxes to ${city.name}?`, answer: `Most orders print and ship on a reliable timeline to every ${city.name} address. If you have a retail launch or promo deadline, tell us and we'll confirm timing up front.` },
  ];

  const schema = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Locations", path: "/locations/" },
      { name: state.name, path: `/locations/${state.slug}/` },
      { name: city.name, path: basePath },
    ]),
    buildServiceSchema({
      name: `Custom Cereal Box Printing — ${city.name}, ${state.abbr}`,
      description: city.metaDescription,
      path: basePath,
    }),
    buildFaqSchema(faqs),
  ];

  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* Hero */}
      <section className="bg-[var(--color-cream)] py-14">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">{state.name} · USA</span>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-[var(--color-ink)] sm:text-4xl">{city.h1}</h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)]">{city.intro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/request-a-quote/" variant="primary">Get a Free Quote</Button>
              <Button href={`/locations/${state.slug}/`} variant="secondary">All {state.name} Locations</Button>
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
            <p className="border-b border-[var(--color-border)] pb-3 text-base font-bold text-[var(--color-ink)]">▸ {city.stat}</p>
            <ul className="mt-3 space-y-2.5 text-sm text-[var(--color-ink)]">
              {["Printed to your dieline & specs", "Food-grade & recyclable board options", "Retail-ready: panels, barcodes, finishes", "Free proof · low minimums"].map((t) => (
                <li key={t} className="flex items-start gap-2"><Check className="mt-1.5 h-3.5 w-3.5 flex-none text-[var(--color-accent)]" strokeWidth={3} aria-hidden />{t}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Answer */}
      <section className="py-12">
        <Container className="max-w-4xl">
          <h2 className="text-2xl font-bold text-[var(--color-ink)]">Custom Cereal Boxes in {city.name}</h2>
          <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
            The Cereal Boxes prints custom, retail-ready cereal packaging for food brands across {city.name} and {state.name}. Every box is printed to your dieline and artwork — the fastest way to make a new cereal or granola look shelf-ready for {city.signatureSector}. {answerLine.pre}
            <Link href={L[0].href} className="font-semibold text-[var(--color-accent)] underline">{L[0].text}</Link>{answerLine.post}
          </p>
        </Container>
      </section>

      {/* Local scene + districts */}
      <section className="bg-[var(--color-cream)] py-12">
        <Container className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">On the Ground in {city.name}</span>
            <h2 className="mt-2 text-2xl font-bold text-[var(--color-ink)]">{city.sceneHeading}</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-muted)]">{city.localScene}</p>
            <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
              {sceneLine.pre}<Link href={L[1].href} className="font-semibold text-[var(--color-accent)] underline">{L[1].text}</Link>{sceneLine.post}
            </p>
            <h3 className="mt-6 text-base font-bold text-[var(--color-ink)]">Areas We Serve in {city.name}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {city.districts.map((d) => (
                <span key={d} className="rounded-full border border-[var(--color-border)] bg-white px-3.5 py-1.5 text-sm text-[var(--color-ink-soft)]">{d}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
            <h3 className="text-base font-bold text-[var(--color-ink)]">Get a {city.name} Quote</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">Send your box size, quantity, and artwork or dieline for a fast, free quote.</p>
            <Button href="/request-a-quote/" variant="primary" className="mt-4 w-full justify-center">Request a Quote</Button>
          </div>
        </Container>
      </section>

      {/* Box styles grid */}
      <section className="py-12">
        <Container>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">Box Styles</span>
          <h2 className="mt-2 text-2xl font-bold text-[var(--color-ink)]">Cereal Box Styles {city.name} Brands Order</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {styleGrid.map((p) => (
              <Link key={p.slug} href={`/${p.slug}/`} className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white transition-shadow hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden bg-[var(--color-cream)]">
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

      {/* Built for the shelf (cereal-specific) */}
      <section className="bg-[var(--color-cream)] py-12">
        <Container>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">Retail-Ready</span>
          <h2 className="mt-2 text-2xl font-bold text-[var(--color-ink)]">Built for the {city.name} Retail Shelf</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              { t: "Shelf impact", d: `Bold front-of-pack printing that catches a shopper's eye and holds its own against national brands on a ${city.name} shelf.` },
              { t: "Retail-ready specs", d: "Dielines, nutrition panels, ingredient lists, and barcodes printed accurately, so your box is compliant and scannable from day one." },
              { t: "Freshness & structure", d: "Food-grade board with liner and mylar-bag options to protect texture and shelf life through the supply chain." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
                <h3 className="text-lg font-bold text-[var(--color-ink)]">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{x.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Use cases */}
      <section className="py-12">
        <Container className="max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">What We Box</span>
          <h2 className="mt-2 text-2xl font-bold text-[var(--color-ink)]">What {city.name} Brands Box With Us</h2>
          <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
            {useLine.pre}<Link href={L[2].href} className="font-semibold text-[var(--color-accent)] underline">{L[2].text}</Link>{useLine.post}
          </p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {useCases.map((u) => (
              <li key={u} className="flex items-start gap-2 text-[var(--color-ink)]"><ChevronRight className="mt-1.5 h-3.5 w-3.5 flex-none text-[var(--color-accent)]" strokeWidth={3} aria-hidden />{u}</li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Why us */}
      <section className="bg-[var(--color-cream)] py-12">
        <Container className="max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">Why Us</span>
          <h2 className="mt-2 text-2xl font-bold text-[var(--color-ink)]">Why {city.name} Food Brands Print With Us</h2>
          <p className="mt-4 leading-relaxed text-[var(--color-muted)]">{city.deliveryNote}</p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {["Printed to your exact dieline", "Food-grade & recyclable board options", "Retail-ready panels, barcodes & finishes", "Free proof on every order", "Low minimums with bulk pricing", "Fast turnaround & nationwide shipping"].map((t) => (
              <li key={t} className="flex items-start gap-2 text-[var(--color-ink)]"><Check className="mt-1.5 h-3.5 w-3.5 flex-none text-[var(--color-accent)]" strokeWidth={3} aria-hidden />{t}</li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
            {whyLine.pre}<Link href={L[3].href} className="font-semibold text-[var(--color-accent)] underline">{L[3].text}</Link>{whyLine.post}
          </p>
        </Container>
      </section>

      {/* Nearby */}
      {siblings.length > 0 && (
        <section className="py-12">
          <Container>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">Also Serving</span>
            <h2 className="mt-2 text-2xl font-bold text-[var(--color-ink)]">Other {state.name} Cities We Print For</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {siblings.map((c) => (
                <Link key={c.slug} href={`/locations/${state.slug}/${c.slug}/`} className="rounded-2xl border border-[var(--color-border)] bg-white p-5 transition-shadow hover:shadow-lg">
                  <h3 className="text-lg font-bold text-[var(--color-ink)]">{c.name}, {state.abbr}</h3>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{c.intro.slice(0, 95)}…</p>
                  <span className="mt-2 inline-block text-sm font-semibold text-[var(--color-accent)]">Cereal boxes in {c.name} →</span>
                </Link>
              ))}
            </div>
            <p className="mt-5"><Link href="/locations/" className="font-semibold text-[var(--color-accent)] underline">View all USA cereal box locations →</Link></p>
          </Container>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-12">
        <Container className="max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">FAQs</span>
          <h2 className="mt-2 text-2xl font-bold text-[var(--color-ink)]">{city.name} Cereal Boxes — Frequently Asked Questions</h2>
          <div className="mt-5 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
            {faqs.map((f) => (
              <details key={f.question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[var(--color-ink)]">
                  {f.question}
                  <span className="text-xl text-[var(--color-accent)] group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{f.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ink)] py-14 text-center">
        <Container className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to Box Your Cereal in {city.name}?</h2>
          <p className="mt-3 leading-relaxed text-white/75">Send your box size and artwork for a free, no-obligation quote. We'll proof it for approval and ship fast to {city.name}.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/request-a-quote/" variant="primary">Get a Free Quote</Button>
            <Button href="/contact-us/" variant="secondary">Contact Us</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
