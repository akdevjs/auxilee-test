import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/seo";

const pages = [
  "/",
  "/about",
  "/blog",
  "/bookkeeping-payroll",
  "/construction-companies",
  "/contact",
  "/estimating-takeoffs",
  "/management-reporting",
  "/pricing",
  "/project-coordination",
  "/property-management-support",
  "/real-estate-investors",
  "/tax-preparation",
  "/testimonials",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((path) => ({ url: absoluteUrl(path) })),
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(`${post.publishedAt}T12:00:00Z`),
    })),
  ];
}
