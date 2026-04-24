import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { buildBreadcrumbSchema } from "@/lib/seo";

type LegalSection = {
  title: string;
  body: string[];
};

export function LegalPageLayout({
  title,
  eyebrow,
  description,
  path,
  sections,
}: {
  title: string;
  eyebrow: string;
  description: string;
  path: string;
  sections: LegalSection[];
}) {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: title, path },
  ]);

  return (
    <>
      <section className="section-space">
        <Container className="max-w-5xl">
          <div className="hero-shell px-7 py-8 sm:px-10 sm:py-10">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-5xl text-[var(--color-ink)] sm:text-6xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              {description}
            </p>
          </div>

          <div className="mt-8 grid gap-6">
            {sections.map((section) => (
              <div key={section.title} className="surface-card p-7 sm:p-9">
                <h2 className="text-3xl text-[var(--color-ink)] sm:text-4xl">{section.title}</h2>
                <div className="mt-4 grid gap-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-[var(--color-muted)]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
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
