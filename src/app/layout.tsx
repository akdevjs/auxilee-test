import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles.css";
import { absoluteUrl, jsonLd, siteUrl } from "@/lib/seo";
import { socialLinks } from "@/components/social-links";

const generalSans = localFont({
  src: "../fonts/general-sans-variable.woff2",
  variable: "--font-general-sans",
  weight: "200 700",
  display: "swap",
});
const manrope = localFont({
  src: "../fonts/manrope-latin.woff2",
  variable: "--font-manrope",
  weight: "500 700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Auxilee",
  title: "Auxilee",
  description: "Specialized business support for construction companies and real estate investors.",
  icons: { icon: "/favicon.png" },
  authors: [{ name: "Auxilee" }],
  category: "business",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Auxilee",
      url: siteUrl,
      logo: absoluteUrl("/assets/auxilee-logo-blue.png"),
      email: "admin@auxilee.com",
      telephone: "+1-805-242-2855",
      sameAs: socialLinks.map(({ href }) => href),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Auxilee",
      url: siteUrl,
      inLanguage: "en-US",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${generalSans.variable} ${manrope.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organizationJsonLd) }} />{children}</body></html>;
}
