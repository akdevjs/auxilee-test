import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, X } from "lucide-react";
import { Header } from "@/components/site";
import { Footer, Label } from "@/components/site-content";
import { Button } from "@/components/ui/button";

export type SitePath =
  | "/contact"
  | "/bookkeeping-payroll"
  | "/tax-preparation"
  | "/estimating-takeoffs"
  | "/project-coordination"
  | "/management-reporting"
  | "/property-management-support"
  | "/construction-companies"
  | "/real-estate-investors";

export function PageHero({
  label,
  title,
  copy,
  image,
  alt,
  dark = true,
}: {
  label: string;
  title: string;
  copy: string;
  image: string;
  alt: string;
  dark?: boolean;
}) {
  return (
    <section
      className={`${dark ? "bg-primary text-primary-foreground" : "bg-background text-foreground"} pt-[72px]`}
    >
      <div className="mx-auto grid min-h-[660px] max-w-[1440px] md:grid-cols-[1.03fr_.97fr]">
        <div className="flex flex-col justify-center px-5 py-20 md:px-10 lg:px-16 lg:py-28">
          <Label dark={dark}>{label}</Label>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.04] md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p
            className={`mt-7 max-w-2xl text-base leading-8 md:text-lg ${dark ? "text-primary-foreground/65" : "text-muted-foreground"}`}
          >
            {copy}
          </p>
          <div className="mt-10">
            <Button asChild variant="action" size="callout">
              <Link href="/contact">
                Talk With Our Team <ArrowRight className="text-primary" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative min-h-[430px] overflow-hidden md:min-h-0">
          <Image
            src={image}
            alt={alt}
            width={1408}
            height={1056}
            fetchPriority="high"
            loading="eager"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="absolute inset-0 h-full w-full object-cover "
          />
        </div>
      </div>
    </section>
  );
}

export function DividedList({ items, dark = false }: { items: readonly string[]; dark?: boolean }) {
  return (
    <ul className={`border-t ${dark ? "border-primary-foreground/20" : "border-border"}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-4 border-b py-5 text-base leading-7 md:text-lg ${dark ? "border-primary-foreground/20" : "border-border"}`}
        >
          <span
            aria-hidden="true"
            className={dark ? "text-primary-foreground/45" : "text-muted-foreground"}
          >
            —
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FitBlock({ good, notFit }: { good: readonly string[]; notFit: readonly string[] }) {
  return (
    <div className="grid gap-px border border-border bg-border md:grid-cols-2">
      <article className="bg-card p-7 md:p-10">
        <h3 className="font-display text-2xl">A good fit if</h3>
        <ul className="mt-7 space-y-4">
          {good.map((item) => (
            <li key={item} className="flex gap-3 leading-7 text-muted-foreground">
              <Check className="mt-1 size-4 shrink-0 text-foreground" />
              {item}
            </li>
          ))}
        </ul>
      </article>
      <article className="bg-card p-7 md:p-10">
        <h3 className="font-display text-2xl">Not a fit if</h3>
        <ul className="mt-7 space-y-4">
          {notFit.map((item) => (
            <li key={item} className="flex gap-3 leading-7 text-muted-foreground">
              <X className="mt-1 size-4 shrink-0 text-muted-foreground" />
              {item}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export function FAQBlock({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <div className="border-t border-border">
      {items.map(([question, answer]) => (
        <details key={question} name="faq" className="group border-b border-border">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left font-display text-xl font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action md:text-2xl [&::-webkit-details-marker]:hidden">
            <span>{question}</span>
            <ChevronDown
              aria-hidden="true"
              className="size-5 shrink-0 transition-transform group-open:rotate-180"
            />
          </summary>
          <p className="max-w-3xl pb-6 text-base leading-8 text-muted-foreground">{answer}</p>
        </details>
      ))}
    </div>
  );
}

export function ExploreLinks({ links }: { links: readonly { label: string; to: SitePath }[] }) {
  return (
    <div className="grid gap-px border border-border bg-border md:grid-cols-2">
      {links.map((link) => (
        <Link
          key={link.to}
          href={link.to}
          className="bg-card p-7 font-medium text-foreground md:p-9"
        >
          Explore {link.label} <span className="text-action">→</span>
        </Link>
      ))}
    </div>
  );
}

export function ClosingCTA({
  title = "One partner. More of your business covered.",
  line = "Start with the support you need now, then add more as your business grows.",
}: {
  title?: string;
  line?: string;
}) {
  return (
    <section className="border-b border-primary-foreground/20 bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div>
          <Label dark>Ready when you are</Label>
          <h2 className="max-w-4xl font-display text-4xl leading-tight md:text-6xl">{title}</h2>
          <p className="mt-6 max-w-2xl leading-8 text-primary-foreground/65">{line}</p>
        </div>
        <Button asChild variant="action" size="callout" className="shrink-0">
          <Link href="/contact">
            Talk With Our Team <ArrowRight className="text-primary" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export function ServicePage({
  hero,
  intro,
  included,
  outcomes,
  good,
  notFit,
  faq,
  explore,
}: {
  hero: { label: string; title: string; copy: string; image: string; alt: string };
  intro: { title: string; copy: string };
  included: readonly string[];
  outcomes: readonly string[];
  good: readonly string[];
  notFit: readonly string[];
  faq: readonly (readonly [string, string])[];
  explore: readonly { label: string; to: SitePath }[];
}) {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header />
      <PageHero {...hero} />
      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div>
            <Label>Why it matters</Label>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">{intro.title}</h2>
          </div>
          <p className="text-lg leading-8 text-muted-foreground">{intro.copy}</p>
        </div>
      </section>
      <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <Label dark>What’s included</Label>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              The work, handled with context.
            </h2>
          </div>
          <DividedList items={included} dark />
        </div>
      </section>
      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Label>What changes</Label>
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            More useful information. Fewer loose ends.
          </h2>
          <div className="mt-12">
            <DividedList items={outcomes} />
          </div>
        </div>
      </section>
      <section className="px-5 pb-24 md:px-10 md:pb-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Label>Is this right for you?</Label>
          <FitBlock good={good} notFit={notFit} />
        </div>
      </section>
      <section className="bg-card px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <Label>Frequently asked</Label>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Clear answers before we start.
            </h2>
          </div>
          <FAQBlock items={faq} />
        </div>
      </section>
      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Label>Connected support</Label>
          <h2 className="mb-12 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            Keep the rest of the operation moving.
          </h2>
          <ExploreLinks links={explore} />
        </div>
      </section>
      <ClosingCTA title="Start with what you need. Add support as you grow." />
      <Footer />
    </main>
  );
}

export function IndustryPage({
  hero,
  challenges,
  services,
  good,
  notFit,
  faq,
}: {
  hero: { label: string; title: string; copy: string; image: string; alt: string };
  challenges: readonly string[];
  services: readonly { label: string; to: SitePath }[];
  good: readonly string[];
  notFit: readonly string[];
  faq: readonly (readonly [string, string])[];
}) {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header />
      <PageHero {...hero} />
      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <Label>Built for your operating reality</Label>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              The back office should understand the work.
            </h2>
          </div>
          <DividedList items={challenges} />
        </div>
      </section>
      <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Label dark>How we support you</Label>
          <h2 className="mb-12 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            Connected support across the operation.
          </h2>
          <div className="grid gap-px border border-primary-foreground/20 bg-primary-foreground/20 md:grid-cols-2">
            {services.map((link) => (
              <Link key={link.to} href={link.to} className="bg-primary p-7 font-medium md:p-9">
                Explore {link.label} <span className="text-action">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Label>Working together</Label>
          <FitBlock good={good} notFit={notFit} />
        </div>
      </section>
      <section className="bg-card px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <Label>Frequently asked</Label>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              The practical details.
            </h2>
          </div>
          <FAQBlock items={faq} />
        </div>
      </section>
      <ClosingCTA />
      <Footer />
    </main>
  );
}

export function ComingSoonPage({
  label,
  title,
  copy,
}: {
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="flex min-h-[720px] items-center px-5 pb-24 pt-40 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-[1280px]">
          <Label>{label}</Label>
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.1em] text-action">
            Coming soon
          </p>
          <h1 className="max-w-4xl font-display text-4xl leading-tight md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{copy}</p>
          <div className="mt-10">
            <Button asChild variant="action" size="callout">
              <Link href="/contact">
                Talk With Our Team <ArrowRight className="text-primary" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
