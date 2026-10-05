import Image from "next/image";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Bookkeeping & Payroll for Construction and Real Estate | Auxilee",
  description:
    "Specialized bookkeeping, payroll, cleanup, job costing, and property-level accounting for construction companies and real estate investors.",
  path: "/bookkeeping-payroll",
  image: "/assets/production-bookkeeping.webp",
});

import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
const hero = "/assets/production-bookkeeping.webp";
import { Header } from "@/components/site";
import { Footer, Label } from "@/components/site-content";
import { FAQBlock } from "@/components/marketing";
import { Button } from "@/components/ui/button";

const realEstateItems = [
  "Rental properties and property-level accounting",
  "Fix-and-flip projects",
  "Multiple LLCs and entities",
  "Property acquisitions and sales",
  "Closing statements",
  "Mortgages, hard-money loans and other financing",
  "Rehab and project costs",
  "Holding costs",
  "Repairs vs. capital improvements",
  "Owner contributions and distributions",
  "Transfers and transactions between entities",
] as const;

const constructionItems = [
  "Job and project costing",
  "Cost codes",
  "Labor allocation by job",
  "Materials and subcontractor costs",
  "Change orders",
  "Progress billing",
  "Retainage",
  "Work in progress (WIP)",
  "Payroll",
  "1099 subcontractors",
  "Estimated vs. actual project costs",
] as const;

const included = [
  [
    "Catch-Up & Clean-Up Bookkeeping",
    "Behind on your books or not confident they're right? We can review what's there, correct past issues and get your books caught up and ready for accurate ongoing bookkeeping.",
  ],
  [
    "Monthly Bookkeeping & Reconciliation",
    "Keep transactions categorized, accounts reconciled and your books current each month.",
  ],
  [
    "Accounts Payable & Receivable",
    "Help keep bills, payments, invoices and receivables organized and up to date.",
  ],
  [
    "Job, Property & Entity-Level Accounting",
    "Keep financial activity properly assigned so your books reflect the jobs, properties and entities behind the transactions.",
  ],
  ["Payroll", "Ongoing payroll support integrated with your bookkeeping and financial records."],
  [
    "1099 & Contractor Tracking",
    "Keep subcontractor and vendor information organized for year-end reporting.",
  ],
  [
    "Monthly Financial Statements",
    "Receive consistent financial reports based on books that have been reconciled and kept current.",
  ],
  ["QuickBooks Online", "Ongoing management and maintenance of your QuickBooks Online file."],
] as const;

const reportingItems = [
  "Job or project profitability",
  "Property and portfolio performance",
  "Budget vs. actual reporting",
  "Cash flow reporting",
  "Key financial and operating metrics",
  "Owner dashboards",
  "Customized management reports",
] as const;

const reasons = [
  [
    "We Specialize in Construction and Real Estate",
    "These aren't two industries buried in a long list of businesses we serve. They're what we know. Your bookkeeping team understands the transactions, terminology and accounting complexities that come with construction projects, real estate investments, multiple entities and growing portfolios.",
  ],
  [
    "We Know How to Clean Up a Mess",
    "If you've already had a bad bookkeeping experience, you're not alone. Auxilee regularly works with businesses whose books need to be caught up, corrected or reorganized before accurate monthly bookkeeping can begin. We can help get things back on track — and keep them there.",
  ],
  [
    "Your Bookkeeping Can Grow With You",
    "Maybe today you simply need clean monthly books and payroll. As your business becomes more complex, Auxilee can add management reporting, tax support and other specialized services without forcing you to piece together a completely new back-office team. For construction companies, that can extend beyond the financial side of the business to estimating and project coordination support as well.",
  ],
] as const;

const goodFit = [
  "You've been through a bookkeeper before and aren't confident your books are right.",
  "Your bookkeeping is behind and needs to be caught up or cleaned up.",
  "You own multiple properties, projects or entities and your books are getting more complicated.",
  "You need accurate job, property or entity-level accounting.",
  "You're tired of explaining construction or real estate transactions to a general bookkeeper.",
  "You need consistent monthly bookkeeping and payroll support.",
  "You want clean books ready for tax preparation and year-end reporting.",
  "You want the option to add more sophisticated management reporting as your business grows.",
] as const;

const notFit = [
  "You're simply looking for the lowest-cost bookkeeping option.",
  "You only need someone to categorize a few transactions occasionally.",
  "You don't want to provide the information and documentation needed to keep the books accurate and current.",
  "You're looking for a once-a-year bookkeeping scramble right before tax time rather than properly maintained books throughout the year.",
] as const;

const faqs = [
  [
    "Can you clean up books that haven't been done correctly?",
    "Yes. Catch-up and clean-up bookkeeping is a common starting point. We'll review the existing books, identify what needs attention and determine what it will take to get them current and properly organized before moving into ongoing bookkeeping.",
  ],
  [
    "How far back can you clean up our books?",
    "That depends on the condition of the books and what needs to be corrected. We'll review your situation first and recommend the appropriate scope.",
  ],
  [
    "Do you work with QuickBooks Online?",
    "Yes. QuickBooks Online is a primary accounting platform for Auxilee.",
  ],
  [
    "Can you handle multiple properties or entities?",
    "Yes. That's one of the reasons specialized bookkeeping matters. Auxilee works with real estate businesses that may have multiple properties, projects and entities and helps keep the activity properly organized and recorded.",
  ],
  [
    "Can you track construction costs by job?",
    "Yes. Construction bookkeeping can be structured to track costs by job and appropriate cost categories, giving you cleaner project-level financial information.",
  ],
  [
    "Can you work with our CPA or tax preparer?",
    "Yes. Properly maintained books make the tax process easier, whether you're using Auxilee's tax support or working with another tax professional.",
  ],
  ["Do you handle payroll?", "Yes. Auxilee offers payroll support alongside ongoing bookkeeping."],
  [
    "What reports will we receive?",
    "Monthly bookkeeping typically includes core financial statements. Additional management reporting can be added for businesses that want deeper financial and operational visibility.",
  ],
  [
    "Can you tell us whether our current books are right?",
    "We can review your existing books to identify areas that may need cleanup or correction and determine what should happen next.",
  ],
  [
    "How much does bookkeeping cost?",
    "Pricing depends on the complexity of your books, transaction volume, number of entities or projects, payroll needs, and the level of ongoing support required. If your books need cleanup first, we'll determine that scope separately before ongoing monthly bookkeeping begins.",
  ],
] as const;

function DashList({ items, dark = false }: { items: readonly string[]; dark?: boolean }) {
  return (
    <ul className={`border-t ${dark ? "border-primary-foreground/20" : "border-border"}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-4 border-b py-4 leading-7 ${dark ? "border-primary-foreground/20 text-primary-foreground/75" : "border-border text-muted-foreground"}`}
        >
          <span aria-hidden="true" className="text-action">
            —
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function BookkeepingPayrollPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header />

      <section className="bg-primary pt-[72px] text-primary-foreground">
        <div className="mx-auto grid min-h-[40rem] max-w-[90rem] md:grid-cols-[1.08fr_.92fr]">
          <div className="flex flex-col justify-center px-5 py-20 md:px-10 lg:px-16 lg:py-28">
            <Label dark>Bookkeeping & Payroll</Label>
            <h1 className="max-w-[48rem] font-display text-[2.5rem] leading-[1.06] md:text-[3.25rem] lg:text-[3.75rem]">
              Specialized Bookkeeping for Construction and Real Estate.
            </h1>
            <p className="mt-7 max-w-[46rem] text-[1rem] leading-8 text-primary-foreground/70 md:text-[1.1rem]">
              Auxilee provides bookkeeping and payroll support for construction companies and real
              estate investors — businesses where jobs, properties, entities, loans, payroll and
              project costs can make the books complicated fast. We keep your books clean, current
              and organized so they're ready when you need them — for tax time, financial reporting,
              job or property analysis, or simply knowing the numbers are right.
            </p>
            <div className="mt-9">
              <Button asChild variant="action" size="callout">
                <Link href="/contact">
                  Talk With Our Team <ArrowRight className="text-primary" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 max-w-[42rem] text-sm leading-6 text-primary-foreground/55">
              Already have books that need some work? That's okay. We clean those up, too.
            </p>
          </div>
          <div className="relative min-h-[26rem] overflow-hidden md:min-h-0">
            <Image
              src={hero}
              alt="Bookkeeping specialist reviewing financial records"
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
            <Label>Why specialization matters</Label>
            <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
              Not Every Bookkeeper Understands Your Business.
            </h2>
          </div>
          <p className="text-[1.05rem] leading-8 text-muted-foreground">
            Maybe you've already been through a bookkeeper or two. Everything looked fine on the
            surface. The accounts were reconciled. Reports were produced. Then you found out
            something wasn't right. Real estate and construction bookkeeping require more than
            knowing QuickBooks. Your bookkeeper needs to understand what the transactions mean and
            how they should be recorded. A property purchase isn't a normal expense. Loan payments
            include principal and interest. Repairs and capital improvements aren't the same thing.
            Multiple entities create another layer of complexity. Construction has its own rules.
            Job costs, labor, retainage, progress billing, subcontractors and change orders all need
            to be accounted for correctly. A bookkeeper can reconcile your accounts and still get
            your books wrong. That's why specialization matters. Auxilee understands the businesses
            behind the numbers — helping you get it right now instead of discovering problems months
            or years later.
          </p>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[80rem]">
          <Label dark>Industry-specific bookkeeping</Label>
          <h2 className="max-w-[52rem] font-display text-[2.25rem] leading-tight md:text-[3rem]">
            Two Industries. Two Very Different Sets of Books.
          </h2>
          <p className="mt-6 max-w-[52rem] leading-8 text-primary-foreground/65">
            Construction companies and real estate investors may both deal with properties and
            projects, but their accounting needs are very different. We know the difference.
          </p>
          <div className="mt-14 grid gap-px bg-primary-foreground/20 lg:grid-cols-2">
            <article className="bg-primary p-7 md:p-10">
              <h3 className="font-display text-2xl">For Real Estate Investors</h3>
              <p className="mt-5 leading-7 text-primary-foreground/65">
                Whether you own rentals, flip properties or operate through multiple entities, your
                bookkeeping needs to reflect what's actually happening across your portfolio.
                Auxilee understands:
              </p>
              <div className="mt-7">
                <DashList items={realEstateItems} dark />
              </div>
              <p className="mt-7 leading-7 text-primary-foreground/80">
                Your books should make it easy to see what's happening with each property and entity
                — without untangling everything at tax time.
              </p>
            </article>
            <article className="bg-primary p-7 md:p-10">
              <h3 className="font-display text-2xl">For Construction Companies</h3>
              <p className="mt-5 leading-7 text-primary-foreground/65">
                Construction bookkeeping needs to follow the work. Auxilee understands:
              </p>
              <div className="mt-7">
                <DashList items={constructionItems} dark />
              </div>
              <p className="mt-7 leading-7 text-primary-foreground/80">
                When the books are structured correctly, you have cleaner records for tax time and
                better information about what happened financially on each job.
              </p>
            </article>
          </div>
          <p className="mt-10 max-w-[58rem] font-display text-xl leading-8">
            Don't find out months or years later that your books weren't done right. Work with a
            team that understands your industry from the start.
          </p>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[80rem]">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <Label>What’s included</Label>
              <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
                Bookkeeping Support Built Around Your Business
              </h2>
              <p className="mt-6 leading-8 text-muted-foreground">
                Your bookkeeping should be handled consistently and correctly — without becoming
                another monthly project for you to manage. Depending on your business and the level
                of support you need, Auxilee can provide:
              </p>
            </div>
            <div className="border-t border-border">
              {included.map(([title, copy]) => (
                <article
                  key={title}
                  className="grid gap-3 border-b border-border py-6 md:grid-cols-[.8fr_1.2fr] md:gap-8"
                >
                  <h3 className="font-display text-xl">{title}</h3>
                  <p className="leading-7 text-muted-foreground">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[80rem] gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div>
            <Label dark>Connected support</Label>
            <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
              Bookkeeping and Payroll Should Work Together.
            </h2>
          </div>
          <div>
            <p className="text-[1.05rem] leading-8 text-primary-foreground/70">
              Payroll isn't just about making sure people get paid. For construction companies,
              labor is also a major project cost. When payroll and bookkeeping work together, labor
              can be properly allocated to the jobs where the work actually happened — giving you
              cleaner job costs and more useful project reporting. For real estate businesses with
              employees, payroll needs to be recorded correctly across the appropriate business or
              entity and reflected accurately in the books. Auxilee keeps bookkeeping and payroll
              connected rather than treating them as two completely separate functions.
            </p>
            <p className="mt-8 border-l-2 border-action pl-6 font-display text-xl">
              One team. Cleaner records. Fewer pieces for you to coordinate.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[80rem] gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div>
            <Label>Beyond the basics</Label>
            <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
              Need More Than Basic Bookkeeping?
            </h2>
            <p className="mt-6 leading-8 text-muted-foreground">
              Clean, accurate books are the foundation. But some owners want more than monthly
              reconciliations and financial statements. Auxilee can take your financial reporting
              further with management reports built around the information you actually need to run
              the business. Depending on your needs, that can include:
            </p>
          </div>
          <div>
            <DashList items={reportingItems} />
            <p className="mt-8 font-display text-xl">
              Start with clean books. Add deeper reporting when you're ready for it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[80rem]">
          <Label dark>Why Auxilee</Label>
          <h2 className="max-w-[52rem] font-display text-[2.25rem] leading-tight md:text-[3rem]">
            Why Choose Auxilee for Bookkeeping & Payroll?
          </h2>
          <p className="mt-5 max-w-[52rem] text-lg leading-8 text-primary-foreground/65">
            Your Books Are Too Important to Hand to Someone Who Doesn't Understand Your Business.
          </p>
          <div className="mt-14 grid gap-px bg-primary-foreground/20 lg:grid-cols-3">
            {reasons.map(([title, copy]) => (
              <article key={title} className="bg-primary p-7 md:p-9">
                <h3 className="font-display text-2xl leading-tight">{title}</h3>
                <p className="mt-5 leading-7 text-primary-foreground/65">{copy}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-[58rem] font-display text-xl leading-8">
            One Partner. More of Your Business Covered. Start with what you need. Add support as you
            grow.
          </p>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[80rem]">
          <Label>Fit</Label>
          <h2 className="max-w-[52rem] font-display text-[2.25rem] leading-tight md:text-[3rem]">
            Is Auxilee the Right Bookkeeping Partner for You?
          </h2>
          <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-2">
            <article className="bg-card p-7 md:p-10">
              <h3 className="font-display text-2xl">Auxilee could be a good fit if:</h3>
              <ul className="mt-7 space-y-4">
                {goodFit.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-muted-foreground">
                    <Check className="mt-1 size-4 shrink-0 text-action" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="bg-card p-7 md:p-10">
              <h3 className="font-display text-2xl">We may not be the right fit if:</h3>
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
          <p className="mt-9 font-display text-xl">
            Good bookkeeping isn't just about getting the accounts reconciled. It's about getting
            them right.
          </p>
        </div>
      </section>

      <section className="border-t border-border px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[80rem] gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
          <div>
            <Label>Frequently asked questions</Label>
            <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
              Bookkeeping & Payroll FAQs
            </h2>
          </div>
          <FAQBlock items={faqs} />
        </div>
      </section>

      <section className="border-b border-primary-foreground/20 bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto flex max-w-[80rem] flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <Label dark>Ready when you are</Label>
            <h2 className="max-w-[52rem] font-display text-[2.25rem] leading-tight md:text-[3rem]">
              Not Sure Your Books Are Right? Let's Take a Look.
            </h2>
            <p className="mt-6 max-w-[52rem] leading-8 text-primary-foreground/65">
              Whether your books need cleanup, you're ready for a better bookkeeping partner, or
              your business has simply become too complex for general bookkeeping, Auxilee can help
              you figure out the right next step. We'll learn how your business is structured, what
              you need from your bookkeeping and payroll, and whether anything needs to be corrected
              before we move forward.
            </p>
            <p className="mt-6 font-display text-xl leading-8">
              Get the books right. Keep them right. Add deeper support as your business grows.
            </p>
            <p className="mt-5 text-sm leading-6 text-primary-foreground/55">
              This is a conversation, not a sales pitch. Sometimes we're not the right fit, and
              we'll say so.
            </p>
          </div>
          <Button asChild variant="action" size="callout" className="shrink-0">
            <Link href="/contact">
              Talk With Our Team <ArrowRight className="text-primary" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
