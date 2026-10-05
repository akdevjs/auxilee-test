import type { Metadata } from "next";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.auxilee.com";
export const siteUrl = configuredSiteUrl.replace(/\/+$/, "");
export const absoluteUrl = (path: string) => path === "/" ? siteUrl : new URL(path, `${siteUrl}/`).toString();

const defaultImage = "/assets/production-home-hero.webp";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
  publishedTime?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  imageAlt = title,
  noIndex = false,
  publishedTime,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const sharedOpenGraph = {
    title,
    description,
    url,
    siteName: "Auxilee",
    locale: "en_US",
    images: [{ url: imageUrl, alt: imageAlt }],
  };

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: !noIndex, follow: true },
    openGraph: publishedTime
      ? { ...sharedOpenGraph, type: "article", publishedTime }
      : { ...sharedOpenGraph, type: "website" },
    twitter: { card: "summary_large_image", title, description, images: [imageUrl] },
  };
}

export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
