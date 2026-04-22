import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { contentPages } from "@/data/catalog";
import {
  footerLegalLinks,
  footerQuickLinks,
  siteConfig,
} from "@/data/site";

const productLinks = contentPages
  .filter((page) =>
    [
      "cereal-boxes",
      "custom-printed-cereal-boxes",
      "blank-cereal-boxes",
      "mini-cereal-boxes",
      "cereal-mylar-bags",
      "wholesale-cereal-boxes",
    ].includes(page.slug),
  )
  .map((page) => ({ label: page.title, href: `/${page.slug}/` }));

export function Footer() {
  const popularSolutions = [
    { label: "Custom Cereal Boxes", href: "/cereal-boxes/" },
    { label: "Custom Printed Cereal Boxes", href: "/custom-printed-cereal-boxes/" },
    { label: "Blank Cereal Boxes", href: "/blank-cereal-boxes/" },
    { label: "Mini Cereal Boxes", href: "/mini-cereal-boxes/" },
  ];

  return (
    <footer className="mt-20 border-t border-[rgba(21,36,58,0.08)] bg-[var(--color-ink)] py-16 text-white">
      <Container>
        <div className="grid gap-8 rounded-[32px] border border-white/10 bg-white/4 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
              Ready To Launch?
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl">
              Start your custom cereal box project today.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
              Share your requirements and get a custom quote within 24 hours.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {["Low MOQ", "Free design support", "Fast turnaround"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/78"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/54">
                Popular Packaging Solutions
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {popularSolutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-white/76 transition hover:text-[var(--color-gold-strong)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button href="/request-a-quote/" variant="secondary">
              Request a Quote
            </Button>
            <Button
              href="/contact-us/"
              variant="ghost"
              className="border-white/28 bg-white/8 text-white hover:border-white/40 hover:bg-white/14"
            >
              Talk to Packaging Expert
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.85fr_0.85fr_0.85fr_1fr]">
          <div className="max-w-md">
            <Logo theme="dark" />
            <p className="mt-5 text-sm leading-7 text-white/72">
              The Cereal Boxes supplies custom cereal boxes, printed cereal packaging, blank cereal cartons, mini cereal boxes, cereal mylar bags, and wholesale packaging solutions for food brands across the USA.
            </p>
          </div>

          <FooterColumn title="Quick Links" items={footerQuickLinks} />
          <FooterColumn title="Product Links" items={productLinks} />
          <FooterColumn title="Legal" items={footerLegalLinks} />

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
              Contact
            </h3>
            <div className="mt-5 space-y-4 text-sm text-white/76">
              <Link href={`mailto:${siteConfig.email}`} className="flex gap-3 transition hover:text-[var(--color-gold-strong)]">
                <Mail className="mt-1 size-4 shrink-0 text-[var(--color-gold-strong)]" />
                <span>{siteConfig.email}</span>
              </Link>
              <Link href={siteConfig.phoneHref} className="flex gap-3 transition hover:text-[var(--color-gold-strong)]">
                <PhoneCall className="mt-1 size-4 shrink-0 text-[var(--color-gold-strong)]" />
                <span>{siteConfig.phone}</span>
              </Link>
              <p className="flex gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-[var(--color-gold-strong)]" />
                <span>{siteConfig.address}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
        {title}
      </h3>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm text-white/78 transition hover:text-[var(--color-gold-strong)]">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
