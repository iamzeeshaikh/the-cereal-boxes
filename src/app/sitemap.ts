import type { MetadataRoute } from "next";

import { blogPosts, contentPages } from "@/data/catalog";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const generatedAt = new Date();
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
