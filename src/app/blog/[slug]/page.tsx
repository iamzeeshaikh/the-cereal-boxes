import Link from "next/link";
import { Check } from "lucide-react";
import { notFound } from "next/navigation";
import Image from "next/image";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { PageHero } from "@/components/ui/page-hero";
import { blogPosts, getBlogPostBySlug, getContentPageBySlug } from "@/data/catalog";
import { buildBreadcrumbSchema, buildFaqSchema, createMetadata } from "@/lib/seo";

// Render inline [anchor](/path) markdown links in body copy as internal links.
function renderRichText(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;
    const [, label, href] = match;
    return (
      <Link
        key={index}
        href={href}
        className="font-semibold text-[var(--color-accent)] underline underline-offset-2"
      >
        {label}
      </Link>
    );
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}/`,
    image: post.image,
    imageAlt: post.imageAlt,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPages = post.relatedSlugs
    .map((relatedSlug) => getContentPageBySlug(relatedSlug))
    .filter((page): page is NonNullable<typeof page> => Boolean(page));

  const faqSchema = buildFaqSchema(post.faq);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog/" },
    { name: post.title, path: `/blog/${post.slug}/` },
  ]);

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt} />
      <section className="section-space">
        <Container className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="grid gap-6">
            <div className="surface-card p-7 sm:p-9">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog/" }, { label: post.title }]} />
              <div className="relative mt-6 aspect-[1.2/0.6] overflow-hidden rounded-[24px]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1280px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="chip">{post.category}</span>
                <span className="chip">{post.readTime}</span>
              </div>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{post.intro}</p>
            </div>
            {post.sections.map((section) => (
              <div key={section.title} className="surface-card p-7 sm:p-9">
                <h2 className="text-4xl text-[var(--color-ink)]">{section.title}</h2>
                <div className="mt-4 grid gap-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-[var(--color-muted)]">
                      {renderRichText(paragraph)}
                    </p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 rounded-[20px] bg-[var(--color-shell)] px-4 py-4 text-sm leading-7 text-[var(--color-ink)]">
                        <span aria-hidden className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--color-accent)]/12 text-[var(--color-accent)]">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        <span className="min-w-0">{renderRichText(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
            <div className="surface-card p-7 sm:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl text-[var(--color-ink)] sm:text-4xl">
                Common follow-up questions
              </h2>
              <div className="mt-6">
              <FAQAccordion items={post.faq} />
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="surface-card p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                In This Article
              </p>
              <div className="mt-4 grid gap-3">
                {post.sections.map((section) => (
                  <div key={section.title} className="rounded-[18px] bg-[var(--color-shell)] px-4 py-3 text-sm font-medium text-[var(--color-ink)]">
                    {section.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="surface-card p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Related Pages
              </p>
              <div className="mt-4 grid gap-3">
                {relatedPages.map((page) => (
                  <Link key={page.slug} href={`/${page.slug}/`} className="rounded-[20px] bg-[var(--color-shell)] px-4 py-4 text-sm font-semibold text-[var(--color-ink)]">
                    {page.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-[rgba(21,36,58,0.08)] bg-[linear-gradient(135deg,#0f1b2e,#15243a)] p-6 text-white shadow-[0_24px_60px_rgba(21,36,58,0.18)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/58">
                Need Packaging Help?
              </p>
              <h3 className="mt-3 text-3xl text-white">Start your custom cereal box project today</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Use the quote page to share your packaging specs and get a custom quote within 24 hours.
              </p>
              <div className="mt-5">
                <Link
                  href="/request-a-quote/"
                  className="inline-flex rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_28px_rgba(232,96,58,0.25)]"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
