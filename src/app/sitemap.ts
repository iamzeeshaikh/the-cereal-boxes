import type { MetadataRoute } from "next";

import { blogPosts, contentPages } from "@/data/catalog";
import { siteConfig } from "@/data/site";

// Stable last-modified date for static and content pages. Bump this when content
// is materially updated. Using a fixed date instead of new Date() stops every
// URL's lastmod resetting on each build, which Google learns to distrust. Blog
// posts keep their own real publish dates below.
const LASTMOD = new Date("2026-07-09");

export default function sitemap(): MetadataRoute.Sitemap {
  const generatedAt = LASTMOD;
  const staticPages = [
    "/",
    "/about-us/",
    "/contact-us/",
    "/request-a-quote/",
    "/faq/",
    "/blog/",
    "/html-sitemap/",
  ].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: generatedAt,
  }));

  const contentUrls = contentPages
    .filter((page) => !page.noindex)
    .map((page) => ({
      url: `${siteConfig.siteUrl}${page.canonical ?? `/${page.slug}/`}`,
      lastModified: generatedAt,
    }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticPages, ...contentUrls, ...blogUrls];
}
