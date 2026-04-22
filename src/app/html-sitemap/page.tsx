import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { blogPosts, contentPages } from "@/data/catalog";
import { footerLegalLinks, footerQuickLinks } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HTML Sitemap | The Cereal Boxes",
  description: "Browse the complete HTML sitemap for The Cereal Boxes website.",
  path: "/html-sitemap/",
});

export default function HtmlSitemapPage() {
  return (
    <section className="section-space">
      <Container>
        <div className="hero-shell px-7 py-8 sm:px-10 sm:py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "HTML Sitemap" }]} />
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
            HTML Sitemap
          </p>
          <h1 className="mt-3 text-5xl text-[var(--color-ink)] sm:text-6xl">Browse the complete website structure</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
            This page lists the core cereal packaging pages, resource content, and legal sections to
            keep navigation crawlable, simple, and transparent for both users and search engines.
          </p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <SitemapColumn title="Main Pages" links={footerQuickLinks} />
          <SitemapColumn
            title="Cereal Packaging Pages"
            links={contentPages.map((page) => ({ label: page.title, href: `/${page.slug}/` }))}
          />
          <SitemapColumn
            title="Blog"
            links={blogPosts.map((post) => ({ label: post.title, href: `/blog/${post.slug}/` }))}
          />
          <SitemapColumn title="Legal" links={footerLegalLinks} />
        </div>
      </Container>
    </section>
  );
}

function SitemapColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="surface-card p-7">
      <h2 className="text-2xl text-[var(--color-ink)]">{title}</h2>
      <div className="mt-4 grid gap-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-sm leading-7 text-[var(--color-muted)] transition hover:text-[var(--color-accent)]">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
