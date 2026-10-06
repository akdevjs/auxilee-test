import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import { ContactBlock } from "@/components/contact-block";
import { ClosingCTA, PageHero } from "@/components/marketing";
import { Header } from "@/components/site";
import { Footer, Label } from "@/components/site-content";
import { Button } from "@/components/ui/button";

export const metadata = createPageMetadata({
  title: "Pricing | Auxilee Bookkeeping & Dedicated Support",
  description:
    "Explore monthly bookkeeping packages and Part-time (20hrs/week)  or Full-time (40hrs/week)  dedicated support for bookkeeping, property management, project coordination, and estimating.",
  path: "/pricing",
});

const plans = [
  ["Starter", "$199/month", "Core monthly support for lower-volume operations."],
  ["Essential", "$299/month", "A more complete outsourced accounting rhythm for growing activity."],
  [
    "Advanced",
    "$399/month",
    "Ongoing class, property, and project organization with deeper support.",
  ],
  [
    "Custom",
    "$499–$999/month",
    "Multiple entities, higher volume, and broader operational coverage.",
  ],
] as const;

const dedicated = [
  ["Dedicated Bookkeeping Support", "$1,500", "$2,500"],
  ["Property Management Support", "$999", "$1,500"],
  ["Project Coordinator", "$1,500", "$2,500"],
  ["Estimating Services", "$1,800", "$3,000"],
] as const;

export default function Pricing() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header />
      <PageHero
        dark={false}
        label="Pricing"
        title="Flexible support for businesses with moving parts."
        copy="Every operation is different. Most clients start with a conversation so scope, volume, systems, and responsibilities are clear before work begins."
        image="/assets/auxilee-pricing-hero.webp"
        alt="Business owners reviewing an Auxilee support plan"
      />

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Label>Monthly bookkeeping packages</Label>
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            A clear place to begin.
          </h2>
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
            {plans.map(([name, price, copy]) => (
              <article key={name} className="flex min-h-80 flex-col bg-card p-7 md:p-8">
                <h3 className="font-display text-2xl">{name}</h3>
                <p className="mt-8 font-display text-3xl">{price}</p>
                <p className="mt-6 leading-7 text-muted-foreground">{copy}</p>
                <Button
                  asChild
                  variant={name === "Custom" ? "action" : "line"}
                  size="callout"
                  className="mt-auto"
                >
                  <Link href="/contact">
                    Talk With Our Team{" "}
                    <ArrowRight className={name === "Custom" ? "text-primary" : "text-action"} />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">
            Final pricing depends on transaction volume, entities, payroll, project count, systems,
            clean-up needs, and the combination of services selected.
          </p>
        </div>
      </section>

      <section className="bg-card px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Label>Dedicated support seats</Label>
          <h2 className="max-w-4xl font-display text-4xl leading-tight md:text-6xl">
            Part-time or Full-time capacity, dedicated to your business.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Choose the service and level of support that fits your workload. These dedicated seats
            are available in addition to the monthly bookkeeping packages above.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {dedicated.map(([name, partTime, fullTime]) => (
              <article
                key={name}
                className="flex flex-col rounded-2xl border border-border bg-background p-7 md:p-9"
              >
                <h3 className="font-display text-2xl md:text-3xl">{name}</h3>
                <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                  <div className="bg-card p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Part-time (20hrs/week){" "}
                    </p>
                    <p className="mt-3 font-display text-2xl">
                      {partTime}
                      <span className="text-base text-muted-foreground">/month</span>
                    </p>
                  </div>
                  <div className="bg-card p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Full-time (40hrs/week)
                    </p>
                    <p className="mt-3 font-display text-2xl">
                      {fullTime}
                      <span className="text-base text-muted-foreground">/month</span>
                    </p>
                  </div>
                </div>
                <Button asChild variant="line" size="callout" className="mt-8 self-start">
                  <Link href="/contact">
                    Discuss This Service <ArrowRight className="text-action" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2">
          <div>
            <Label dark>Simple by design</Label>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Clear scope before the work begins.
            </h2>
          </div>
          <ul className="border-t border-primary-foreground/20">
            {[
              "No long-term contracts",
              "Cancel anytime",
              "Free consultation before you commit",
              "Direct coordination with your existing CPA",
              "Add support as needs change",
            ].map((item) => (
              <li key={item} className="border-b border-primary-foreground/20 py-5 text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Label>Find the right fit</Label>
          <h2 className="mb-14 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            Tell us what the business needs covered.
          </h2>
          <ContactBlock />
        </div>
      </section>
      <ClosingCTA />
      <Footer />
    </main>
  );
}
