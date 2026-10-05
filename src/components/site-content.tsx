import Link from "next/link";
import type { ReactNode } from "react";
import { audiences, services } from "@/components/site-links";
import { socialLinks } from "@/components/social-links";

const logoWhite = "/assets/auxilee-logo-white.png";
const logoBlue = "/assets/auxilee-logo-blue.png";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Auxilee home">
      <img
        src={inverse ? logoWhite : logoBlue}
        alt="Auxilee Real Estate Services"
        className="h-auto w-[7.5rem] object-contain md:w-[8.5rem]"
      />
    </Link>
  );
}

export function Footer() {
  const columns = [
    {
      heading: "Company",
      links: [
        { label: "About", to: "/about" },
        { label: "Testimonials", to: "/testimonials" },
        { label: "Pricing", to: "/pricing" },
        { label: "Contact", to: "/contact" },
        { label: "Blog", to: "/blog" },
      ],
    },
    { heading: "Who We Serve", links: audiences },
    { heading: "Services", links: services },
  ] as const;

  return (
    <footer className="bg-primary px-5 pb-8 pt-20 text-primary-foreground md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-14 pb-20 lg:grid-cols-[.9fr_2.1fr]">
          <div>
            <Logo inverse />
            <p className="mt-7 max-w-sm font-display text-2xl font-medium leading-snug text-primary-foreground/75">
              One partner. More of your business covered.
            </p>
            <div className="mt-7 space-y-2 text-sm text-primary-foreground/60">
              <a href="tel:+18052422855" className="block hover:text-primary-foreground">
                +1 (805) 242-2855
              </a>
              <a href="mailto:admin@auxilee.com" className="block hover:text-primary-foreground">
                admin@auxilee.com
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Auxilee on ${label}`}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-primary-foreground/25 text-primary-foreground/75 transition-colors hover:border-primary-foreground/60 hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
                >
                  <Icon aria-hidden="true" className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.heading}>
                <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-primary-foreground/65">
                  {column.heading}
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-primary-foreground/70">
                  {column.links.map((link) => (
                    <li key={link.to}>
                      <Link href={link.to} className="hover:text-primary-foreground">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/65">
          © 2026 Auxilee. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function Label({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <p className={`section-label ${dark ? "section-label-dark" : ""}`}>{children}</p>;
}
