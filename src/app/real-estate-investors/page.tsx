import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Support for Real Estate Investors & Property Owners | Auxilee",
  description: "Specialized bookkeeping, tax preparation support, reporting, and property operations for real estate investors and property owners.",
  path: "/real-estate-investors",
});

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/site";
import { Footer, Label } from "@/components/site-content";
import { Button } from "@/components/ui/button";

const strategies = [
  { title: "Buy-and-Hold & Long-Term Rentals", copy: "Keep rental income, expenses, loans, improvements and financial records organized across the properties and entities you own." },
  { title: "Fix-and-Flip", copy: "Track acquisition, rehab, holding and sale costs so each project has a clear financial history from purchase through disposition." },
  { title: "Short-Term Rentals", copy: "Keep the financial activity behind Airbnb and other short-term rental properties organized alongside the rest of your portfolio." },
  { title: "Wholesaling", copy: "Keep wholesaling income, expenses and transactions organized without mixing them into unrelated investment activity." },
  { title: "Multifamily, Commercial & Ground Up Development", copy: "Get more support as larger properties, development projects, partnerships and higher transaction volume create more financial and reporting complexity." },
  { title: "Multiple Businesses & Entities", copy: "Keep activity organized across LLCs, partnerships, syndications and related businesses without treating everything as if it belongs in one bucket." },
] as const;

const services = [
  { title: "Bookkeeping & Property-Level Accounting", copy: "Keep your books current with accurate cost tracking across rentals, flips, acquisitions, sales, loans, rehab costs, multiple entities and individual properties.", link: "Explore Bookkeeping & Payroll", to: "/bookkeeping-payroll" as const },
  { title: "Tax Preparation & Strategic Planning Support", copy: "Real estate tax planning can involve depreciation, cost segregation, 1031 exchanges, capital gains timing, entity structure, passive activity considerations and other strategies that affect how much capital stays available to reinvest.", link: "Explore Tax Preparation & Strategic Planning", to: "/tax-preparation" as const },
  { title: "Management Reporting & Custom Dashboards", copy: "Turn the numbers behind your portfolio into useful reporting that helps you see performance by property, project, entity or across the business.", link: "Explore Management Reporting & Custom Dashboards", to: "/management-reporting" as const },
  { title: "Property Management Support", copy: "Get help with tenant communications, maintenance coordination, vendor follow-up, property records and other administrative work behind the properties you operate.", link: "Explore Property Management Support", to: "/property-management-support" as const },
] as const;

const bookkeepingItems = [
  "Multiple properties, LLCs and partnerships",
  "Acquisitions, sales and closing statements",
  "Mortgages, hard-money loans and other financing",
  "Rental income and property expenses",
  "Rehab, development and holding costs",
  "Repairs vs. capital improvements",
  "Owner contributions and distributions",
  "Transactions between entities",
] as const;

const fitItems = [
  "Own multiple rental properties, projects or real estate entities.",
  "Combine strategies such as long-term rentals, short-term rentals, flips, wholesaling or development.",
  "Need accurate property-level or project-level cost tracking.",
  "Have outgrown DIY bookkeeping or a general bookkeeper who doesn't understand real estate.",
  "Want cleaner information for tax planning, deductions and investment decisions.",
  "Need better visibility across properties, entities or partnerships.",
  "Want more operational help behind the properties you manage.",
  "Want specialized support without building every function in-house.",
] as const;

const section = "px-5 py-24 md:px-10 md:py-32 lg:px-16";

function ContactButton() {
  return <Button asChild variant="action" size="callout"><Link href="/contact">Talk With Our Team <ArrowRight className="text-primary" /></Link></Button>;
}

function ServiceLink({ to, children, dark = false }: { to: typeof services[number]["to"]; children: string; dark?: boolean }) {
  return <Link href={to} className={`inline-flex items-start text-sm font-medium leading-6 ${dark ? "text-primary-foreground" : "text-foreground"}`}>{children} <span className="ml-2 shrink-0 text-action">→</span></Link>;
}

export default function RealEstateInvestors() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header />

      <section className="bg-primary px-5 pb-24 pt-[9rem] text-primary-foreground md:px-10 md:pb-32 md:pt-[11rem] lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Label dark>For Real Estate Investors &amp; Property Owners</Label>
          <h1 className="max-w-[68rem] font-display text-[2.5rem] font-medium leading-[1.05] md:text-[3.5rem] lg:text-[4rem]">Your Real Estate Business Is More Than the Properties You Own.</h1>
          <div className="mt-10 grid gap-10 border-t border-primary-foreground/20 pt-8 lg:grid-cols-[1.3fr_.7fr] lg:gap-20">
            <p className="max-w-[56rem] text-base leading-8 text-primary-foreground/70 md:text-lg">Auxilee provides specialized financial and operational support for real estate investors. We understand that every property you purchase brings another set of transactions, expenses, decisions and tax considerations. Add multiple entities, financing, renovations, tenants and different investment strategies, and the business behind your portfolio gets complicated fast. That's why it helps to work with people who specialize in real estate and understand how investors actually operate their businesses and grow their investment portfolios.</p>
            <div className="flex items-start lg:justify-end"><ContactButton /></div>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div><Label>Growing portfolios</Label><h2 className="max-w-[38rem] font-display text-4xl font-medium leading-tight md:text-5xl">More Properties. More Entities. More Complexity.</h2></div>
          <p className="max-w-[48rem] text-base leading-8 text-muted-foreground md:text-lg lg:pt-8">What worked when you owned one or two properties doesn't always work as your portfolio grows. One LLC becomes several. You add rentals, work on a few flips, refinance a property, move money between entities or expand into short-term rentals, multifamily or commercial deals. Now accurate cost tracking, property and project accounting, entity structure, depreciation, capital improvements, financing and tax planning all matter more. The goal isn't simply to keep the books reconciled. It's to create clean financial information that helps you understand what you own, how it's performing and what decisions may be coming next.</p>
        </div>
      </section>

      <section className={`bg-card ${section}`}>
        <div className="mx-auto max-w-[1280px]">
          <Label>Investment strategies</Label>
          <h2 className="max-w-[56rem] font-display text-4xl font-medium leading-tight md:text-5xl">Real Estate Investors Rarely Do Just One Thing.</h2>
          <p className="mt-7 max-w-[58rem] text-base leading-8 text-muted-foreground md:text-lg">You may flip houses and keep some as rentals. Own long-term rentals and a few Airbnbs. Wholesale some deals, buy/sell land or do ground up development properties. Have a real estate brokerage alongside your rentals — all under multiple types of entities. The vast majority of Auxilee clients operate multiple strategies at the same time. We get it.</p>
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {strategies.map((strategy) => <article key={strategy.title} className="min-h-[18rem] bg-background p-7 md:p-9"><h3 className="font-display text-2xl font-medium leading-snug">{strategy.title}</h3><p className="mt-5 leading-8 text-muted-foreground">{strategy.copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className="mx-auto max-w-[1280px]">
          <Label>Connected real estate support</Label>
          <h2 className="max-w-[60rem] font-display text-4xl font-medium leading-tight md:text-5xl">Specialized Support Across More of Your Real Estate Business.</h2>
          <p className="mt-7 max-w-[52rem] text-base leading-8 text-muted-foreground md:text-lg">You may simply need the right people handling the parts of your business that are consuming your time or becoming too complex to manage yourself.</p>
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
            {services.map((service) => <article key={service.title} className="flex min-h-[24rem] flex-col bg-card p-7 md:p-10"><h3 className="max-w-[30rem] font-display text-2xl font-medium leading-snug">{service.title}</h3><p className="mt-5 max-w-[34rem] leading-8 text-muted-foreground">{service.copy}</p><div className="mt-auto pt-8"><ServiceLink to={service.to}>{service.link}</ServiceLink></div></article>)}
          </div>
        </div>
      </section>

      <section className={`bg-primary text-primary-foreground ${section}`}>
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div><Label dark>Property-level accuracy</Label><h2 className="max-w-[38rem] font-display text-4xl font-medium leading-tight md:text-5xl">Accurate Bookkeeping Matters.</h2><p className="mt-7 max-w-[40rem] leading-8 text-primary-foreground/70">For real estate investors, clean bookkeeping isn't simply about categorizing transactions and reconciling accounts. You need to know which property, entity and project the activity belongs to — especially when you're managing:</p></div>
          <div>
            <ul className="grid border-t border-primary-foreground/20 sm:grid-cols-2">{bookkeepingItems.map((item) => <li key={item} className="flex gap-4 border-b border-primary-foreground/20 py-5 pr-6 leading-7"><Check className="mt-1 size-5 shrink-0 text-action" /><span>{item}</span></li>)}</ul>
            <p className="mt-9 max-w-[46rem] text-base leading-8 text-primary-foreground/70 md:text-lg">Accurate property and project accounting gives you cleaner information for tax preparation, better visibility into performance and fewer surprises when it's time to sell, refinance or make the next investment.</p>
            <div className="mt-8"><ServiceLink to="/bookkeeping-payroll" dark>Explore Bookkeeping for Real Estate Investors</ServiceLink></div>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className="mx-auto max-w-[1080px]">
          <Label>Year-round planning</Label>
          <h2 className="max-w-[52rem] font-display text-4xl font-medium leading-tight md:text-5xl">Better Books. Smarter Tax Planning.</h2>
          <p className="mt-7 max-w-[58rem] text-base leading-8 text-muted-foreground md:text-lg">Your bookkeeping and tax planning shouldn't meet for the first time at year-end. When property and entity activity is recorded correctly throughout the year, it's easier to identify deductions, evaluate strategies such as cost segregation or a 1031 exchange, plan around capital gains and understand the tax impact of buying, improving or selling a property. The objective is bigger than tax compliance: better information, fewer missed opportunities and a multi-year view that helps you make tax decisions with your broader investment strategy in mind.</p>
          <div className="mt-8"><ServiceLink to="/tax-preparation">Explore Tax Preparation &amp; Strategic Planning</ServiceLink></div>
        </div>
      </section>

      <section className={`bg-primary text-primary-foreground ${section}`}>
        <div className="mx-auto max-w-[1080px]">
          <Label dark>Portfolio visibility</Label>
          <h2 className="max-w-[54rem] font-display text-4xl font-medium leading-tight md:text-5xl">See More Than a Set of Financial Statements.</h2>
          <p className="mt-7 max-w-[58rem] text-base leading-8 text-primary-foreground/70 md:text-lg">As your portfolio grows, you may want to know which properties are performing best, where cash is going, how one entity compares with another, and what the portfolio looks like as a whole. Auxilee can add management reporting and owner dashboards that turn your financial information into something more useful for running the business, evaluating investments and deciding where to put capital next.</p>
          <div className="mt-8"><ServiceLink to="/management-reporting" dark>Explore Management Reporting &amp; Custom Dashboards</ServiceLink></div>
        </div>
      </section>

      <section className={section}>
        <div className="mx-auto max-w-[1080px]">
          <Label>Property operations</Label>
          <h2 className="max-w-[52rem] font-display text-4xl font-medium leading-tight md:text-5xl">Get Some of the Property Work Off Your Plate.</h2>
          <p className="mt-7 max-w-[58rem] text-base leading-8 text-muted-foreground md:text-lg">Long-term and short-term rentals create another layer of work: tenant questions, maintenance requests, vendors, records, payments and follow-up. Auxilee can support the administrative work behind the properties you operate while you retain control of the decisions and responsibilities that belong with you or your licensed professionals.</p>
          <div className="mt-8"><ServiceLink to="/property-management-support">Explore Property Management Support</ServiceLink></div>
        </div>
      </section>

      <section className={`bg-primary text-primary-foreground ${section}`}>
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div><Label dark>Investor-founded</Label><h2 className="max-w-[42rem] font-display text-4xl font-medium leading-tight md:text-5xl">We Understand Real Estate Because We're Investors, Too.</h2></div>
          <p className="max-w-[48rem] text-base leading-8 text-primary-foreground/70 md:text-lg lg:pt-8">Auxilee was founded by William Morgan, an active real estate investor, flipper and developer who owns rental properties himself. As a fellow investor, he understands that a rental isn't the same as a flip, a property isn't necessarily the same as the LLC or partnership that owns it, and decisions about financing, entity structure, taxes and when to sell can affect far more than one year's numbers. You shouldn't have to teach the people supporting your business how real estate investing works.</p>
        </div>
      </section>

      <section className={section}>
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div><Label>Flexible by design</Label><h2 className="max-w-[40rem] font-display text-4xl font-medium leading-tight md:text-5xl">Start With What You Need Most.</h2></div>
          <div><p className="max-w-[48rem] text-base leading-8 text-muted-foreground md:text-lg">You don't need to hand over your entire back office. Start with the area where you need the most help — bookkeeping, tax preparation and planning support, better reporting or help with the day-to-day work behind your properties. Add more support as your portfolio and needs change.</p><p className="mt-8 border-t border-border pt-6 font-display text-xl font-medium md:text-2xl">Start with what you need. Add support as you grow.</p></div>
        </div>
      </section>

      <section className={`bg-primary text-primary-foreground ${section}`}>
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div><Label dark>Fit checklist</Label><h2 className="max-w-[42rem] font-display text-4xl font-medium leading-tight md:text-5xl">Is Auxilee a Good Fit for Your Real Estate Business?</h2><p className="mt-7 max-w-[40rem] leading-8 text-primary-foreground/70">Auxilee may be a good fit if you:</p></div>
          <div><ul className="border-t border-primary-foreground/20">{fitItems.map((item) => <li key={item} className="flex gap-4 border-b border-primary-foreground/20 py-5 text-base leading-7 md:text-lg"><Check className="mt-1 size-5 shrink-0 text-action" /><span>{item}</span></li>)}</ul><p className="mt-10 font-display text-xl font-medium leading-snug md:text-2xl">You don't need a massive portfolio. You simply need enough complexity that having the right support behind you matters.</p></div>
        </div>
      </section>

      <section className={section}>
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div><Label>Let's talk</Label><h2 className="max-w-[52rem] font-display text-4xl font-medium leading-tight md:text-6xl">What Do You Need Most Right Now?</h2><p className="mt-7 max-w-[48rem] text-base leading-8 text-muted-foreground md:text-lg">Tell us what's taking too much time or where your real estate business needs more support. We'll help you figure out the best place to start.</p></div>
          <div className="shrink-0"><ContactButton /></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}