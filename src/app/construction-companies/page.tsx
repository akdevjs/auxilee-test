import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Accounting & Operations for Construction Companies | Auxilee",
  description:
    "Specialized estimating, project coordination, bookkeeping, payroll, reporting, and tax support for builders, contractors, remodelers, and specialty trades.",
  path: "/construction-companies",
});

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/site";
import { Footer, Label } from "@/components/site-content";
import { Button } from "@/components/ui/button";

const trades = [
  {
    title: "Home Builders & General Contractors",
    line: "Custom homes · Spec homes · Residential construction · General contracting",
  },
  {
    title: "Remodelers & Design-Build Firms",
    line: "Whole-home remodeling · Design-build · Kitchen & bath · Home improvement",
  },
  {
    title: "HVAC, Plumbing & Electrical",
    line: "Service · Replacement · Installation · New construction",
  },
  { title: "Roofing & Exterior Contractors", line: "Roofing · Siding · Windows & doors · Solar" },
  {
    title: "Concrete, Excavation & Site Work",
    line: "Concrete · Foundations · Excavation · Grading · Site work",
  },
  {
    title: "Interior & Finish Trades",
    line: "Framing · Drywall · Painting · Flooring · Tile · Cabinets · Finish carpentry",
  },
  {
    title: "Landscaping & Outdoor Construction",
    line: "Landscaping · Hardscape · Outdoor living · Pools",
  },
  {
    title: "Restoration & Remediation",
    line: "Water damage · Fire damage · Mold remediation · Disaster restoration",
  },
  {
    title: "Other Specialty Trades",
    line: "Framing · Masonry · Tile · Siding · Insulation · Solar · Finish carpentry · Restoration · And more",
  },
] as const;

const services = [
  {
    title: "Estimating & Takeoffs",
    copy: "Get more estimates out the door with accurate quantity takeoffs and cost estimates — without immediately adding another Full-time (40hrs/week)  estimator.",
    link: "Explore Construction Estimating & Takeoffs",
    to: "/estimating-takeoffs" as const,
  },
  {
    title: "Project Coordination",
    copy: "Give your PMs support with documentation, tracking and follow-up so they can spend more time managing projects and less time behind a computer.",
    link: "Explore Project Coordination & Support",
    to: "/project-coordination" as const,
  },
  {
    title: "Bookkeeping & Payroll",
    copy: "Get construction bookkeeping built around job costing, payroll, billing and real-time visibility into project profitability.",
    link: "Explore Bookkeeping & Payroll",
    to: "/bookkeeping-payroll" as const,
  },
  {
    title: "Management Reporting",
    copy: "See job profitability, margins, WIP, cash flow and company performance in numbers you can actually use to run the business.",
    link: "Explore Management Reporting & Custom Dashboards",
    to: "/management-reporting" as const,
  },
  {
    title: "Tax Preparation & Strategic Planning Support",
    copy: "Bring your bookkeeping and tax support under one roof, with year-round financial information that supports better tax preparation and planning.",
    link: "Explore Tax Preparation & Strategic Planning",
    to: "/tax-preparation" as const,
  },
] as const;

const reasons = [
  {
    title: "Construction Specialists",
    copy: "Work with people who understand contractors, construction workflows and the financial realities behind every job.",
  },
  {
    title: "Job Costing That Tells You What's Really Happening",
    copy: "Know what each project is costing, how actual costs compare with the estimate and whether the margin is holding.",
  },
  {
    title: "Financial Visibility You Can Actually Use",
    copy: "Get clean books by project, useful WIP information and reporting that helps you understand profitability, cash flow and company performance.",
  },
  {
    title: "More of Your Business Supported in One Place",
    copy: "Estimating, project coordination, bookkeeping, reporting and tax support — with the flexibility to start with one service and add more as you grow.",
  },
] as const;

const fitItems = [
  "You care about profit, cash flow and sustainable growth.",
  "You want clean books and accurate, real-time job costs.",
  "You want financial reporting that helps you make better decisions.",
  "You want a team that understands construction and your industry.",
  "You want one partner that can support more of your business as you grow.",
] as const;

const section = "px-5 py-24 md:px-10 md:py-32 lg:px-16";

function ContactButton() {
  return (
    <Button asChild variant="action" size="callout">
      <Link href="/contact">
        Talk With Our Team <ArrowRight className="text-primary" />
      </Link>
    </Button>
  );
}

function ServiceLink({
  to,
  children,
  dark = false,
}: {
  to: (typeof services)[number]["to"];
  children: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={to}
      className={`inline-flex items-start text-sm font-medium leading-6 ${dark ? "text-primary-foreground" : "text-foreground"}`}
    >
      {children} <span className="ml-2 shrink-0 text-action">→</span>
    </Link>
  );
}

export default function ConstructionCompanies() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header />

      <section className="bg-primary px-5 pb-24 pt-[9rem] text-primary-foreground md:px-10 md:pb-32 md:pt-[11rem] lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Label dark>For Construction Companies</Label>
          <h1 className="max-w-[64rem] font-display text-[2.5rem] font-medium leading-[1.05] md:text-[3.5rem] lg:text-[4rem]">
            Accounting &amp; Operational Support for Construction Companies
          </h1>
          <div className="mt-10 grid gap-10 border-t border-primary-foreground/20 pt-8 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
            <p className="max-w-[52rem] text-base leading-8 text-primary-foreground/70 md:text-lg">
              Auxilee provides specialized accounting and operational support for home builders,
              remodelers, general contractors and specialty trades. From getting estimates out the
              door to managing projects, tracking job profitability, keeping the books right and
              planning for taxes, we understand the financial and operational demands of running a
              construction company.
            </p>
            <div className="flex flex-col items-start lg:items-end">
              <p className="max-w-[24rem] font-display text-xl font-medium leading-snug lg:text-right">
                One partner. More of your construction business covered.
              </p>
              <div className="mt-7">
                <ContactButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className="mx-auto max-w-[1280px]">
          <Label>Who we serve</Label>
          <h2 className="max-w-[56rem] font-display text-4xl font-medium leading-tight md:text-5xl">
            No Two Construction Companies Work Exactly the Same.
          </h2>
          <p className="mt-7 max-w-[54rem] text-base leading-8 text-muted-foreground md:text-lg">
            A custom home builder doesn't operate like an HVAC company. A remodeler has different
            challenges than a roofer. That's why specialized experience matters. We work with
            construction companies and trades of all kinds. Find yours below — and if you don't see
            it, there's a good chance we can still help.
          </p>
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {trades.map((trade) => (
              <article key={trade.title} className="min-h-[13rem] bg-card p-7 md:p-8">
                <h3 className="font-display text-xl font-medium leading-snug md:text-2xl">
                  {trade.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">{trade.line}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-8 border-t border-border pt-10 md:flex-row md:items-center">
            <p className="max-w-[52rem] font-display text-xl font-medium leading-snug md:text-2xl">
              Don't see your trade? If you build it, remodel it, install it, repair it or restore
              it, there's a good chance we understand the business behind it.
            </p>
            <div className="shrink-0">
              <ContactButton />
            </div>
          </div>
        </div>
      </section>

      <section className={`bg-card ${section}`}>
        <div className="mx-auto max-w-[1280px]">
          <Label>Connected construction support</Label>
          <h2 className="max-w-[58rem] font-display text-4xl font-medium leading-tight md:text-5xl">
            More Than Accounting. Operational Support Across Your Business.
          </h2>
          <p className="mt-7 max-w-[50rem] text-base leading-8 text-muted-foreground md:text-lg">
            Auxilee provides many of the financial and operational services construction business
            owners need — all from one specialized partner.
          </p>
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-6">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`flex min-h-[22rem] flex-col bg-background p-7 md:p-9 ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
              >
                <h3 className="font-display text-2xl font-medium leading-snug">{service.title}</h3>
                <p className="mt-5 leading-8 text-muted-foreground">{service.copy}</p>
                <div className="mt-auto pt-8">
                  <ServiceLink to={service.to}>{service.link}</ServiceLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-primary text-primary-foreground ${section}`}>
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <Label dark>Flexible capacity</Label>
            <h2 className="max-w-[40rem] font-display text-4xl font-medium leading-tight md:text-5xl">
              Add Capacity Without Adding Another Full-time (40hrs/week) Hire.
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-primary-foreground/70 md:text-lg">
              Sometimes you need another estimator. Sometimes your PM needs backup. Sometimes your
              books and reporting have simply outgrown the person handling them. Auxilee lets you
              add experienced support where you need it — without automatically adding another
              Full-time (40hrs/week) salary and payroll expense.
            </p>
            <p className="mt-8 border-t border-primary-foreground/20 pt-6 font-display text-xl font-medium md:text-2xl">
              Start with what you need. Add support as you grow.
            </p>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className="mx-auto max-w-[1080px]">
          <Label>Better visibility</Label>
          <h2 className="max-w-[56rem] font-display text-4xl font-medium leading-tight md:text-5xl">
            Know What's Happening While There's Still Time to Do Something About It.
          </h2>
          <p className="mt-7 max-w-[56rem] text-base leading-8 text-muted-foreground md:text-lg">
            You shouldn't have to wait until a project closes to find out whether it made money. Get
            better visibility into real-time job costs, estimated vs. actual, WIP, project
            profitability, gross margins and cash flow — so you can spot problems sooner and make
            better decisions while the work is still underway.
          </p>
          <div className="mt-8">
            <ServiceLink to="/management-reporting">
              Explore Management Reporting &amp; Custom Dashboards
            </ServiceLink>
          </div>
        </div>
      </section>

      <section className={`bg-primary text-primary-foreground ${section}`}>
        <div className="mx-auto max-w-[1080px]">
          <Label dark>Year-round financial context</Label>
          <h2 className="max-w-[54rem] font-display text-4xl font-medium leading-tight md:text-5xl">
            Keep Your Books and Tax Strategy Working Together.
          </h2>
          <p className="mt-7 max-w-[56rem] text-base leading-8 text-primary-foreground/70 md:text-lg">
            Construction companies make decisions all year that affect their tax position —
            equipment and vehicles, payroll, owner compensation, entity structure, depreciation and
            the timing of income and expenses. Keeping bookkeeping and tax support under the same
            roof means tax planning starts with financial information that's already current and
            organized.
          </p>
          <div className="mt-8">
            <ServiceLink to="/tax-preparation" dark>
              Explore Tax Preparation &amp; Strategic Planning
            </ServiceLink>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className="mx-auto max-w-[1280px]">
          <Label>Why Auxilee</Label>
          <h2 className="max-w-[50rem] font-display text-4xl font-medium leading-tight md:text-5xl">
            Why Construction Companies Choose Auxilee
          </h2>
          <p className="mt-6 max-w-[48rem] text-lg leading-8 text-muted-foreground">
            Specialized Support Built Around How Construction Actually Works.
          </p>
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
            {reasons.map((reason) => (
              <article key={reason.title} className="min-h-[18rem] bg-card p-7 md:p-10">
                <h3 className="max-w-[28rem] font-display text-2xl font-medium leading-snug">
                  {reason.title}
                </h3>
                <p className="mt-5 max-w-[32rem] leading-8 text-muted-foreground">{reason.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-primary text-primary-foreground ${section}`}>
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div>
            <Label dark>Fit checklist</Label>
            <h2 className="max-w-[40rem] font-display text-4xl font-medium leading-tight md:text-5xl">
              Is Auxilee Right for Your Construction Company?
            </h2>
            <p className="mt-7 max-w-[40rem] leading-8 text-primary-foreground/70">
              Auxilee is built for growing construction companies that need more expertise and
              capacity to scale and grow their business. We're a strong fit if:
            </p>
          </div>
          <div>
            <ul className="border-t border-primary-foreground/20">
              {fitItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-primary-foreground/20 py-5 text-base leading-7 md:text-lg"
                >
                  <Check className="mt-1 size-5 shrink-0 text-action" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 font-display text-xl font-medium leading-snug md:text-2xl">
              Get the expertise and capacity of a stronger back office — without having to build all
              of it yourself.
            </p>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <Label>Let's talk</Label>
            <h2 className="max-w-[52rem] font-display text-4xl font-medium leading-tight md:text-6xl">
              What Does Your Construction Company Need Most Right Now?
            </h2>
            <p className="mt-7 max-w-[46rem] text-base leading-8 text-muted-foreground md:text-lg">
              Tell us where you need more support. We'll help you figure out the best place to
              start.
            </p>
          </div>
          <div className="shrink-0">
            <ContactButton />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
