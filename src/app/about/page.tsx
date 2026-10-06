import Image from "next/image";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "About Auxilee | Construction & Real Estate Support",
  description:
    "Meet Auxilee, the specialized business support partner built around the financial and operational realities of construction and real estate.",
  path: "/about",
  image: "/assets/production-about-hero.webp",
});

import Link from "next/link";
import { ArrowRight } from "lucide-react";
const founderPhoto = "/assets/production-about-hero.webp";
import { Header } from "@/components/site";
import { Footer, Label } from "@/components/site-content";
import { Button } from "@/components/ui/button";

const expectations = [
  {
    title: "People Who Understand Your Business",
    copy: "Spend less time explaining how your business works. Our support is built around the systems, terminology, workflows and financial realities of construction and real estate.",
  },
  {
    title: "More Capacity Without More Overhead",
    copy: "Get experienced support where your team needs it without automatically adding another Full-time (40hrs/week)  position for every function.",
  },
  {
    title: "Fewer People and Providers to Manage",
    copy: "When you need help in another part of the business, you don't necessarily have to find another company, onboard another provider and start from scratch.",
  },
  {
    title: "Support That Can Change With You",
    copy: "Busy seasons happen. Portfolios grow. Teams change. Your support can adjust as your business and needs change.",
  },
  {
    title: "Help That Gives You Time Back",
    copy: "The right support should take work off your plate — not give you another person or process to manage.",
  },
];

const industries = [
  {
    title: "Construction Companies",
    types: "Home builders · Remodelers · General contractors · Specialty trades",
    copy: "Auxilee understands the workflows, numbers and demands behind running construction projects and growing a construction company.",
    link: "Explore Support for Construction Companies",
    to: "/construction-companies" as const,
  },
  {
    title: "Real Estate Investors & Property Owners",
    types: "Landlords · Multifamily owners · Flippers · Developers",
    copy: "Auxilee understands the financial and operational complexity that comes with owning, operating and growing a real estate portfolio.",
    link: "Explore Support for Real Estate Investors",
    to: "/real-estate-investors" as const,
  },
];

function ContactButton() {
  return (
    <Button asChild variant="action" size="callout">
      <Link href="/contact">
        Talk With Our Team <ArrowRight className="text-primary" />
      </Link>
    </Button>
  );
}

export default function About() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header />

      <section className="px-5 pb-24 pt-[9rem] md:px-10 md:pb-32 md:pt-[11rem] lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Label>About Auxilee</Label>
          <h1 className="max-w-[64rem] font-display text-[2.65rem] font-medium leading-[1.04] md:text-[4rem] lg:text-[4.75rem]">
            Specialized Business Support for Construction and Real Estate.
          </h1>
          <div className="mt-10 grid gap-10 border-t border-border pt-8 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
            <div className="lg:pt-1">
              <ContactButton />
            </div>
            <p className="max-w-[48rem] text-base leading-8 text-muted-foreground md:text-lg">
              We understand that running a construction company or real estate business comes with a
              lot of moving parts and complexity. Auxilee gives construction companies and real
              estate investors specialized support across the financial and operational sides of
              their businesses — with the flexibility to start with what you need now and add more
              support as your business grows.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1.04fr_.96fr]">
          <div className="flex flex-col justify-center px-5 py-24 md:px-10 md:py-32 lg:px-16">
            <Label dark>Founder story</Label>
            <h2 className="max-w-[42rem] font-display text-4xl font-medium leading-tight md:text-5xl">
              We Know These Businesses Because We're In Them, Too.
            </h2>
            <p className="mt-8 max-w-[44rem] text-base leading-8 text-primary-foreground/70 md:text-lg">
              Auxilee was founded by William Morgan, an active real estate investor, flipper and
              developer who owns rental properties and is also part owner of a construction company.
              As a fellow business owner and investor, he understands firsthand what it takes to
              manage projects, properties, transactions, teams and the financial complexity that
              comes with growing these businesses. Auxilee's support services are built around the
              way construction companies and real estate investors actually operate — their
              workflows, their numbers and the demands placed on the owners running them.
            </p>
          </div>
          <div className="relative min-h-[28rem] overflow-hidden lg:min-h-[48rem]">
            <Image
              src={founderPhoto}
              alt="Smiling Auxilee team working together around construction plans"
              width={1408}
              height={1056}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover "
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <Label>Who we serve</Label>
              <h2 className="max-w-[38rem] font-display text-4xl font-medium leading-tight md:text-5xl">
                We Specialize in Only Two Industries.
              </h2>
            </div>
            <p className="max-w-[46rem] text-base leading-8 text-muted-foreground md:text-lg lg:pt-8">
              Auxilee focuses exclusively on construction companies and real estate investors. We
              recognize the unique needs of these businesses because we operate and invest in them,
              too. That firsthand experience allows us to provide support built specifically around
              how they work.
            </p>
          </div>
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="flex min-h-[25rem] flex-col bg-card p-7 md:p-10 lg:p-12"
              >
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                  {industry.types}
                </p>
                <h3 className="mt-7 max-w-[30rem] font-display text-3xl font-medium leading-tight md:text-4xl">
                  {industry.title}
                </h3>
                <p className="mt-6 max-w-[34rem] leading-8 text-muted-foreground">
                  {industry.copy}
                </p>
                <Link
                  href={industry.to}
                  className="mt-auto inline-flex items-center pt-10 text-sm font-medium text-foreground"
                >
                  {industry.link} <span className="ml-2 text-action">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-10 md:pb-32 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <Label>Working with us</Label>
            <h2 className="max-w-[34rem] font-display text-4xl font-medium leading-tight md:text-5xl">
              What You Can Expect From Auxilee
            </h2>
          </div>
          <div className="grid gap-4">
            {expectations.map((item) => (
              <article
                key={item.title}
                className="grid gap-3 bg-card px-6 py-7 md:grid-cols-[.8fr_1.2fr] md:gap-10 md:px-8 md:py-8"
              >
                <h3 className="font-display text-xl font-medium leading-snug md:text-2xl">
                  {item.title}
                </h3>
                <p className="leading-7 text-muted-foreground">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Label dark>Flexible by design</Label>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <h2 className="max-w-[42rem] font-display text-4xl font-medium leading-tight md:text-5xl">
              Get the Support You Need, When You Need It.
            </h2>
            <div>
              <p className="max-w-[44rem] text-base leading-8 text-primary-foreground/70 md:text-lg">
                You don't need every Auxilee service at once. Start with the support that would make
                the biggest difference today. As your workload, team or portfolio changes, add more
                when it makes sense.
              </p>
              <p className="mt-8 border-t border-primary-foreground/20 pt-6 font-display text-xl font-medium md:text-2xl">
                Start with what you need. Add support as you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <Label>Let's talk</Label>
            <h2 className="max-w-[50rem] font-display text-4xl font-medium leading-tight md:text-6xl">
              What Do You Need Most Right Now?
            </h2>
            <p className="mt-7 max-w-[48rem] text-base leading-8 text-muted-foreground md:text-lg">
              Tell us what's taking too much time, where you need more capacity or what simply isn't
              getting done. We'll talk through where Auxilee can help and the best place to start.
            </p>
          </div>
          <ContactButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}
