import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  canonicalPath?: string;
  keywords?: string[];
  noindex?: boolean;
  image?: string;
  imageAlt?: string;
};

export function createMetadata({
  title,
  description,
  path = "/",
  canonicalPath,
  keywords = [],
  noindex = false,
  image = "/og-default.jpg",
  imageAlt = "The Cereal Boxes premium custom cereal packaging",
}: MetadataInput): Metadata {
  const url = new URL(path, siteConfig.siteUrl).toString();
  const canonicalUrl = new URL(canonicalPath ?? path, siteConfig.siteUrl).toString();
  const imageUrl = new URL(image, siteConfig.siteUrl).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      site: "@thecerealboxes",
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/og-default.jpg`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2975 Coburn Hollow Road",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: "US",
      availableLanguage: "English",
    },
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.siteUrl}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/og-default.jpg`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2975 Coburn Hollow Road",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.country,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.siteUrl}/blog/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.siteUrl).toString(),
    })),
  };
}

export function buildFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Per-unit wholesale price band derived from the on-site quote configurator
 * (src/data/configurator.ts + QTY_SCALE in box-configurator.tsx):
 * - lowPrice: cheapest build (kraft board, unprinted) at the 10,000-unit tier,
 *   low estimate band → (0.95 - 0.18) × 0.82 × 0.88 ≈ $0.56/unit.
 * - highPrice: premium rigid build (both-side print, gold foil, soft-touch,
 *   window, liner) at the 100-unit tier, high estimate band ≈ $15.90/unit.
 * - offerCount: 5 materials × 7 quantity tiers = 35 configurable offer points.
 */
const CONFIGURATOR_LOW_PRICE = "0.56";
const CONFIGURATOR_HIGH_PRICE = "15.90";
const CONFIGURATOR_OFFER_COUNT = 35;

export function buildProductSchema(input: {
  name: string;
  description: string;
  path: string;
  image: string;
  category: string;
  sku?: string;
  additionalProperty?: Array<{ name: string; value: string }>;
}) {
  // Canonical URLs on thecerealboxes.com never carry a trailing slash
  // (the server 308-redirects /x/ to /x), so strip it for schema URLs.
  const productUrl = new URL(input.path, siteConfig.siteUrl)
    .toString()
    .replace(/\/+$/, "");
  const sku =
    input.sku ?? input.path.replace(/\/+$/, "").split("/").filter(Boolean).pop() ?? "cereal-box";

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    image: [new URL(input.image, siteConfig.siteUrl).toString()],
    sku,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    category: input.category,
    url: productUrl,
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    offers: {
      "@type": "AggregateOffer",
      url: productUrl,
      priceCurrency: "USD",
      lowPrice: CONFIGURATOR_LOW_PRICE,
      highPrice: CONFIGURATOR_HIGH_PRICE,
      offerCount: CONFIGURATOR_OFFER_COUNT,
      priceValidUntil: "2027-08-04",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
      },
      // Mirrors /shipping-policy: nationwide US delivery is offered, but the
      // policy states timelines vary by project and are confirmed at quoting,
      // so no fixed handling/transit day counts are advertised here.
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "US",
        },
      },
      // Mirrors /refund-returns-policy: custom-produced packaging, returns
      // generally not accepted after production approval.
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "US",
        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
        url: `${siteConfig.siteUrl}/refund-returns-policy`,
      },
    },
    additionalProperty: input.additionalProperty?.map((item) => ({
      "@type": "PropertyValue",
      name: item.name,
      value: item.value,
    })),
  };
}

export function buildServiceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    areaServed: "United States",
    url: new URL(input.path, siteConfig.siteUrl).toString(),
  };
}
