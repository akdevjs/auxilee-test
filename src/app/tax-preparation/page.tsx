import Image from "next/image";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Tax Preparation Support for Real Estate & Construction | Auxilee",
  description:
    "Specialized tax preparation support for construction companies and real estate investors with complex properties, projects, entities, payroll, and transactions.",
  path: "/tax-preparation",
  image: "/assets/production-tax.webp",
});

import Link from "next/link";
import { ArrowRight } from "lucide-react";
const hero = "/assets/production-tax.webp";
import { FAQBlock } from "@/components/marketing";
import { Header } from "@/components/site";
import { Footer, Label } from "@/components/site-content";
import { Button } from "@/components/ui/button";

const investorTags = [
  "Rental properties",
  "Flips",
  "Short-term rentals",
  "Multifamily",
  "Partnerships",
  "Multiple entities",
  "Syndicates & funds",
  "Brokerage & agent activity",
  "Passive activity losses",
  "Depreciation",
  "Cost segregation",
  "Bonus depreciation",
  "Property sales",
] as const;

const contractorTags = [
  "Job costing",
  "WIP",
  "Payroll",
  "1099 contractors",
  "Equipment & vehicles",
  "Owner compensation",
  "Entity structure",
  "Estimated taxes",
  "Timing of income and expenses",
] as const;

const included = [
  [
    "Real Estate Tax Preparation",
    "Tax preparation for real estate investors, developers, agents and brokers — including rentals, flips, multifamily, partnerships, syndicates and funds, development activity and complex multi-entity portfolios.",
  ],
  [
    "Construction Business Tax Preparation",
    "Specialized tax preparation for general contractors, home builders, remodelers and specialty trades — with an understanding of job costing, WIP, subcontractors, equipment and the financial realities behind construction businesses.",
  ],
  [
    "1099 Preparation",
    "Help organizing contractor and vendor information and preparing required 1099s accurately and on time.",
  ],
  [
    "Year-Round Tax Support",
    "Stay ahead of tax time with a partner who can help identify issues, upcoming decisions and legitimate opportunities worth addressing before year-end.",
  ],
] as const;

const reasons = [
  [
    "Built for Construction and Real Estate",
    "This isn't one specialty among dozens. We focus on construction companies and real estate investors, so your team already understands the businesses, terminology and financial complexities behind your return.",
  ],
  [
    "We Look Beyond Tax Season",
    "Good tax preparation handles what already happened. We also keep an eye on what's happening now — helping identify issues and opportunities while there may still be time to do something about them.",
  ],
  [
    "Your Numbers Don't Live in Silos",
    "Bookkeeping affects reporting. Reporting affects the decisions you make. And all of it eventually affects tax preparation. Auxilee can support more of that connected financial picture instead of seeing only the return.",
  ],
  [
    "Built From Real-World Experience",
    "Auxilee was founded by William Morgan, an active real estate investor and developer with hands-on experience in construction, property management and growing construction businesses. Your tax partner understands these businesses because they're the businesses we work in — and come from.",
  ],
] as const;

const faqs = [
  [
    "Do I have to use Auxilee for bookkeeping to use your tax preparation services?",
    "No. You can start with tax preparation support. If your books need cleanup or you want ongoing bookkeeping, payroll or management reporting, those services can be added when they make sense.",
  ],
  [
    "Can you work with multiple businesses, entities and properties?",
    "Yes. Multi-entity businesses and portfolios are common in construction and real estate, and the page is designed around that complexity.",
  ],
  [
    "Do you prepare 1099s?",
    "Yes. Auxilee can help organize contractor and vendor information and prepare required 1099s as part of your tax support.",
  ],
  [
    "Can you help if my books aren't ready for tax time?",
    "Yes. Auxilee also provides bookkeeping support, so we can help get the financial information organized before tax preparation begins.",
  ],
  [
    "Do you provide year-round tax support?",
    "Yes. Engagement options can include support beyond tax season, with attention to issues, upcoming decisions and legitimate opportunities worth addressing before year-end.",
  ],
  [
    "Can you work alongside my existing CPA or other tax professional?",
    "Yes. Where another licensed professional is involved, Auxilee can help keep the financial information organized and coordinate the information needed for tax work.",
  ],
] as const;

function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-7 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="border border-border bg-background px-3 py-2 text-sm text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TaxPreparationPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header />

      <section className="bg-primary pt-[72px] text-primary-foreground">
        <div className="mx-auto grid min-h-[42rem] max-w-[90rem] md:grid-cols-[1.08fr_.92fr]">
          <div className="flex min-w-0 flex-col justify-center px-5 py-20 md:px-10 lg:px-16 lg:py-28">
            <Label dark>Tax Preparation</Label>
            <h1 className="max-w-[48rem] break-words font-display text-[clamp(2rem,10vw,2.4rem)] leading-[1.06] md:text-[3.1rem] lg:text-[3.55rem]">
              Tax Preparation for Real Estate Investors &amp; Construction Companies
            </h1>
            <p className="mt-6 max-w-[44rem] font-display text-[1.2rem] leading-7 text-primary-foreground/90">
              Your business isn't typical. Your tax support shouldn't be either.
            </p>
            <p className="mt-5 max-w-[46rem] text-[1rem] leading-8 text-primary-foreground/70 md:text-[1.05rem]">
              We work with construction companies and real estate investors every day. We understand
              the entities, transactions and tax considerations behind these businesses — from
              rentals, flips and partnerships to job costing, payroll, 1099s and equipment
              purchases. Get specialized tax preparation support from a team that understands your
              industry, knows what to look for and keeps an eye out for legitimate opportunities to
              help you keep more of what you make.
            </p>
            <div className="mt-9">
              <Button
                asChild
                variant="action"
                size="callout"
                className="h-auto min-h-11 max-w-full whitespace-normal py-3 text-center"
              >
                <Link href="/contact">
                  Get Your Free Tax Position Review <ArrowRight className="text-primary" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 max-w-[43rem] text-sm leading-6 text-primary-foreground/55">
              Send us last year's return. We'll review where you stand, share what we see and talk
              through where Auxilee may be able to help.
            </p>
          </div>
          <div className="relative min-h-[26rem] overflow-hidden md:min-h-0">
            <Image
              src={hero}
              alt="Business owner reviewing organized tax records"
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

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[80rem] gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div>
            <Label>Industry complexity</Label>
            <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
              Construction and Real Estate Have Their Own Tax Complexity. We Work in It Every Day.
            </h2>
          </div>
          <div>
            <p className="text-[1.05rem] leading-8 text-muted-foreground">
              A contractor's tax picture doesn't look like a retailer's. And an investor with
              rentals, flips, partnerships or multiple entities doesn't have the same needs as an
              e-commerce business. We specialize in construction and real estate, so we understand
              the financial activity behind the return. For investors, that can mean rental and
              short-term rental income, passive activity, depreciation, cost segregation, property
              sales, partnerships, syndicates and multiple entities. For contractors and builders,
              it can mean WIP and job costing, payroll and 1099s, equipment and vehicle purchases,
              owner compensation, entity structure and the timing of income and expenses. And
              getting the return done is only part of what matters. You also want to know you're not
              overlooking legitimate opportunities to reduce your tax exposure and keep more of what
              you make. We keep an eye out for issues and potential opportunities worth raising — so
              they can be addressed with the appropriate tax professional when needed.
            </p>
            <p className="mt-8 border-l-2 border-action pl-6 font-display text-xl leading-8">
              Prepare the return. Understand the business behind it. Keep an eye on what could make
              a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[80rem] gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div>
            <Label dark>Looking ahead</Label>
            <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
              Tax Preparation Looks Back. The Right Tax Partner Also Looks Ahead.
            </h2>
          </div>
          <div>
            <p className="text-[1.05rem] leading-8 text-primary-foreground/70">
              Tax preparation is largely about what already happened. The right tax partner is also
              paying attention to what's happening now — and looking ahead for issues, decisions and
              legitimate opportunities that could affect what you ultimately owe. Because by the
              time tax season arrives, some of those opportunities may already be gone. We're not
              here to push aggressive tax strategies. We're here to understand your business, keep
              your financial information organized, and recognize when something deserves a closer
              look — so you have time to act when appropriate.
            </p>
            <p className="mt-8 border-l-2 border-action pl-6 font-display text-xl leading-8">
              The goal: fewer surprises at tax time and more opportunities to keep more of what you
              make.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[80rem]">
          <Label>Who we support</Label>
          <h2 className="max-w-[56rem] font-display text-[2.25rem] leading-tight md:text-[3rem]">
            Specialized Tax Preparation for the Way You Do Business.
          </h2>
          <p className="mt-6 max-w-[58rem] leading-8 text-muted-foreground">
            Construction and real estate businesses can get complicated fast. Multiple entities.
            Different types of income. Properties, partnerships, projects, payroll, equipment and
            transactions — each with its own tax considerations. That's why specialization matters.
            We work with construction companies and real estate investors every day. We understand
            the complexity because these are the businesses we work in.
          </p>
          <div className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-2">
            <article className="bg-card p-7 md:p-10">
              <h3 className="font-display text-2xl">For Real Estate Investors &amp; Developers</h3>
              <p className="mt-4 font-display text-lg leading-7">
                You're Not Just Managing Properties. You're Managing a Complex Tax Picture.
              </p>
              <p className="mt-5 leading-7 text-muted-foreground">
                One rental can be relatively straightforward. Add flips, short-term rentals,
                partnerships, multiple LLCs, a syndication or development activity — or a brokerage
                or agent business alongside your investments — and the tax picture changes quickly.
                We understand the moving pieces that come with building a real estate portfolio and
                operating in the industry — and the tax considerations investors should be thinking
                about along the way.
              </p>
              <TagList items={investorTags} />
              <p className="mt-7 leading-7 text-muted-foreground">
                Whether you're a buy-and-hold investor, active flipper, developer, agent or broker
                who also invests, or managing several types of real estate activity at once, your
                tax partner should understand how those pieces fit together. And because Auxilee can
                also support your bookkeeping and management reporting, tax preparation doesn't have
                to begin with someone trying to decipher your business once a year.
              </p>
            </article>
            <article className="bg-card p-7 md:p-10">
              <h3 className="font-display text-2xl">For Contractors, Builders &amp; Trades</h3>
              <p className="mt-4 font-display text-lg leading-7">
                Your Jobs Drive Your Numbers. Your Tax Partner Should Understand Both.
              </p>
              <p className="mt-5 leading-7 text-muted-foreground">
                Construction businesses have their own financial realities. Revenue and expenses
                move with projects. Labor can include employees and subcontractors. Equipment and
                vehicles matter. Job costing matters. WIP matters. And decisions made throughout the
                year can affect what ultimately shows up at tax time.
              </p>
              <TagList items={contractorTags} />
              <p className="mt-7 leading-7 text-muted-foreground">
                We work with general contractors, home builders, remodelers and specialty trades.
                That means less time explaining how your business works — and a tax partner who
                understands the numbers behind your actual jobs.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[80rem]">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <Label dark>What’s included</Label>
              <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
                More Than a Tax Return. The Tax Preparation Partner Your Business Needs.
              </h2>
              <p className="mt-6 leading-8 text-primary-foreground/65">
                Your tax return is the end result of a lot of financial activity throughout the
                year. We help bring those pieces together — with specialized tax preparation and a
                team that understands what to look for along the way.
              </p>
            </div>
            <div className="border-t border-primary-foreground/20">
              {included.map(([title, copy]) => (
                <article
                  key={title}
                  className="grid gap-3 border-b border-primary-foreground/20 py-7 md:grid-cols-[.8fr_1.2fr] md:gap-8"
                >
                  <h3 className="font-display text-xl">{title}</h3>
                  <p className="leading-7 text-primary-foreground/65">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[80rem] gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div>
            <Label>Connected financial support</Label>
            <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
              Better Books Make Tax Time Better.
            </h2>
          </div>
          <div>
            <p className="text-[1.05rem] leading-8 text-muted-foreground">
              If your books aren't current, organized and accurate, tax preparation gets harder than
              it needs to be. Transactions have to be sorted out. Accounts need to be reconciled.
              Contractor information has to be tracked down. Questions that could have been
              addressed months ago suddenly become urgent. Auxilee can support your bookkeeping,
              payroll, management reporting and tax preparation — so the people working with your
              taxes aren't starting from scratch at year-end. For construction companies, that can
              mean cleaner job costing, payroll and contractor records throughout the year. For real
              estate investors, it can mean keeping properties, entities, income and expenses
              properly organized as the portfolio grows. You don't have to use Auxilee for
              everything. But when your books and tax preparation are handled by a team that
              understands the bigger picture, there are fewer handoffs, fewer surprises and less
              explaining your business over and over again.
            </p>
            <p className="mt-8 border-l-2 border-action pl-6 font-display text-xl">
              One partner. More of your business covered.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[80rem]">
          <Label dark>Why Auxilee</Label>
          <h2 className="max-w-[56rem] font-display text-[2.25rem] leading-tight md:text-[3rem]">
            Why Choose Auxilee as Your Tax Preparation Partner?
          </h2>
          <div className="mt-14 grid gap-px bg-primary-foreground/20 md:grid-cols-2">
            {reasons.map(([title, copy]) => (
              <article key={title} className="bg-primary p-7 md:p-10">
                <h3 className="font-display text-2xl leading-tight">{title}</h3>
                <p className="mt-5 leading-7 text-primary-foreground/65">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[80rem]">
          <Label>Fit</Label>
          <h2 className="max-w-[52rem] font-display text-[2.25rem] leading-tight md:text-[3rem]">
            Is Auxilee the Right Tax Partner for You?
          </h2>
          <p className="mt-6 max-w-[52rem] text-lg leading-8 text-muted-foreground">
            Auxilee is designed for owners whose business and tax picture require more than generic,
            once-a-year preparation.
          </p>
        </div>
      </section>

      <section className="border-t border-border px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[80rem] gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
          <div>
            <Label>Frequently asked questions</Label>
            <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
              Tax Preparation FAQs
            </h2>
          </div>
          <FAQBlock items={faqs} />
        </div>
      </section>

      <section className="border-b border-primary-foreground/20 bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto flex max-w-[80rem] flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <Label dark>Tax Position Review</Label>
            <h2 className="max-w-[52rem] font-display text-[2.25rem] leading-tight md:text-[3rem]">
              Know Where You Stand Before Tax Season.
            </h2>
            <p className="mt-6 max-w-[52rem] leading-8 text-primary-foreground/65">
              If your business has grown more complex — or you simply want a tax partner who
              understands construction and real estate — start with a Tax Position Review. Send us
              last year's return. We'll review where you stand, share what we see and talk through
              where Auxilee may be able to help.
            </p>
            <p className="mt-5 text-sm leading-6 text-primary-foreground/55">
              This is a conversation, not a sales pitch. Sometimes we're not the right fit, and
              we'll say so.
            </p>
          </div>
          <Button
            asChild
            variant="action"
            size="callout"
            className="h-auto min-h-11 max-w-full whitespace-normal py-3 text-center lg:shrink-0"
          >
            <Link href="/contact">
              Get Your Free Tax Position Review <ArrowRight className="text-primary" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
