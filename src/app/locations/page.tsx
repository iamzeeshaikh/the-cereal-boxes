import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { locationStates } from "@/data/locations";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/seo";

export function generateMetadata() {
  return createMetadata({
    title: "Custom Cereal Boxes by State & City | The Cereal Boxes",
    description:
      "The Cereal Boxes prints custom, retail-ready cereal packaging for food brands across the USA — browse locations by state and city, or request a free quote.",
    path: "/locations/",
  });
}

export default function LocationsHubPage() {
  const totalCities = locationStates.reduce((n, s) => n + s.cities.length, 0);
  const schema = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Locations", path: "/locations/" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "USA Cereal Box Printing Locations — The Cereal Boxes",
      itemListElement: locationStates.map((s, i) => ({
        "@type": "ListItem", position: i + 1,
        name: `Custom Cereal Boxes in ${s.name}`,
        url: `https://thecerealboxes.com/locations/${s.slug}/`,
      })),
    },
  ];

  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <section className="bg-[var(--color-cream)] py-14">
        <Container>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">USA Cereal Box Printing</span>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-[var(--color-ink)] sm:text-4xl">Custom Cereal Boxes Printed Across the USA</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
            From LA breakfast startups and Brooklyn granola makers to Seattle's organic brands and Austin's natural-food scene, we print custom, retail-ready cereal boxes for food brands in every corner of the country. Browse {locationStates.length} states and {totalCities} cities, or{" "}
            <Link href="/request-a-quote/" className="font-semibold text-[var(--color-accent)] underline">get a free quote</Link> to start.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">By State</span>
          <h2 className="mt-2 text-2xl font-bold text-[var(--color-ink)]">Find a Cereal Box Printer in Your State</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {locationStates.map((s) => (
              <Link key={s.slug} href={`/locations/${s.slug}/`} className="rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-shadow hover:shadow-lg">
                <h3 className="text-lg font-bold text-[var(--color-ink)]">{s.name} ({s.abbr})</h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{s.stat}. Serving {s.cities.map((c) => c.name).join(", ")}.</p>
                <span className="mt-2 inline-block text-sm font-semibold text-[var(--color-accent)]">Cereal boxes in {s.name} →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-ink)] py-14 text-center">
        <Container className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Don&apos;t See Your City?</h2>
          <p className="mt-3 leading-relaxed text-white/75">We print custom, retail-ready cereal boxes for food brands across the whole country. Tell us where you&apos;re based and what you make, and we&apos;ll get you a free quote.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/request-a-quote/" variant="primary">Get a Free Quote</Button>
            <Button href="/products/" variant="secondary">Browse Box Styles</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
