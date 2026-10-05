import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import { ClosingCTA, PageHero } from "@/components/marketing";
import { Header } from "@/components/site";
import { Footer, Label } from "@/components/site-content";
import { Button } from "@/components/ui/button";

export const metadata = createPageMetadata({
  title: "Property Management Support | Auxilee",
  description: "Tenant communication, maintenance and vendor coordination, lease administration, payment follow-up, and property records support for real estate investors.",
  path: "/property-management-support",
});

const support = [
  ["Tenant Communication & Support", "Manage routine tenant communication, questions, requests and follow-up."],
  ["Maintenance Coordination", "Track maintenance requests, coordinate with vendors and keep repairs moving through completion."],
  ["Vendor Coordination", "Schedule work, communicate with vendors, track progress and follow up on outstanding items."],
  ["Lease & Renewal Administration", "Support the administrative work behind leases, renewals, notices, records and documentation."],
  ["Rent & Payment Administration", "Help track payments, outstanding balances and routine payment-related follow-up."],
  ["Move-In & Move-Out Coordination", "Keep the tasks, documentation and communication surrounding tenant transitions organized."],
  ["Property Records & Documentation", "Keep leases, vendor information, property records, invoices and other important documents organized and accessible."],
  ["Property Management Software Administration", "Keep property information, tasks, communication and activity current inside your property management system."],
] as const;

const reasons = [
  ["Communication You Don’t Have to Chase", "We prioritize clear communication, responsiveness and follow-through so you don’t have to manage the people you hired to make life easier."],
  ["Your Tenants Matter, Too", "Professional, responsive tenant communication and service are a priority because the way tenants are treated reflects on you and your properties."],
  ["Follow-Through From Request to Resolution", "We coordinate maintenance work, follow up and keep requests moving through completion."],
  ["Your Systems — or Ours", "We can step into the software, vendors and processes you already use, or bring more structure where you need it."],
  ["Real Estate Specialists", "We understand that your properties are investments and that good operational support should make owning them easier."],
] as const;

const connected = [
  ["Property Management Support", "Keep tenant communication, maintenance, vendors and recurring property administration moving.", "/property-management-support"],
  ["Bookkeeping & Property-Level Accounting", "Keep income and expenses organized by property and entity so you can see how each investment is performing.", "/bookkeeping-payroll"],
  ["Management Reporting", "Get clearer visibility into portfolio performance, property profitability and cash flow.", "/management-reporting"],
  ["Tax Preparation & Strategic Planning Support", "Keep accurate property financials connected to tax preparation and longer-term planning.", "/tax-preparation"],
] as const;

export default function PropertyManagementSupport() {
  return <main className="overflow-hidden bg-background text-foreground">
    <Header />
    <PageHero label="Property management support" title="Day-to-Day Support for Your Rental Properties and Portfolio." copy="Auxilee helps real estate investors handle the ongoing administrative and operational work behind their rental properties — from tenant communication and maintenance coordination to leases, vendors, payments and property records. Whether you need help with a few recurring tasks or support across a larger portfolio, we can step in where you need us." image="/assets/production-real-estate.webp" alt="Residential rental property" />

    <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16"><div className="mx-auto max-w-[1280px]">
      <div className="max-w-3xl"><Label>Hand off the details</Label><h2 className="font-display text-4xl leading-tight md:text-6xl">Hand Off More of the Day-to-Day Work.</h2><p className="mt-5 font-display text-2xl">Property Management Support Built Around Your Portfolio.</p><p className="mt-6 text-lg leading-8 text-muted-foreground">You may need help with one part of your operation or someone to take on a substantial portion of the recurring workload. Depending on your portfolio and needs, Auxilee can provide support with:</p></div>
      <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-4">{support.map(([title, copy]) => <article key={title} className="min-h-56 bg-card p-7 md:p-8"><h3 className="font-display text-xl leading-snug">{title}</h3><p className="mt-5 leading-7 text-muted-foreground">{copy}</p></article>)}</div>
      <div className="mt-10"><Button asChild variant="line" size="callout"><Link href="/contact">Tell us what you’d like to get off your plate <ArrowRight className="text-action" /></Link></Button></div>
    </div></section>

    <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16"><div className="mx-auto max-w-[1280px]"><Label dark>Why Auxilee</Label><h2 className="max-w-4xl font-display text-4xl leading-tight md:text-6xl">Why Real Estate Investors Choose Auxilee</h2><p className="mt-6 max-w-3xl font-display text-2xl leading-snug">Good Property Support Is About Communication, Service and Follow-Through.</p><p className="mt-6 max-w-3xl leading-8 text-primary-foreground/70">When someone helps manage the day-to-day work behind your properties, getting tasks done is only part of the job. You need people who communicate, follow through and represent you well with tenants and vendors.</p><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{reasons.map(([title, copy]) => <article key={title} className="dark-card rounded-2xl border border-primary-foreground/15 bg-primary p-7 md:p-8"><h3 className="font-display text-xl">{title}</h3><p className="mt-5 leading-7 text-primary-foreground/70">{copy}</p></article>)}</div></div></section>

    <section className="bg-card px-5 py-20 md:px-10 md:py-24 lg:px-16"><div className="mx-auto max-w-[1280px] text-center"><Label>Software</Label><h2 className="font-display text-3xl leading-tight md:text-5xl">We Work With Leading Property Management Software.</h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">Buildium · AppFolio · Propertyware · Rent Manager · TenantCloud</p></div></section>

    <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16"><div className="mx-auto max-w-[1280px]"><div className="max-w-4xl"><Label>Connected support</Label><h2 className="font-display text-4xl leading-tight md:text-6xl">Property Operations + Financial Support</h2><p className="mt-5 font-display text-2xl">More of Your Real Estate Business, Under One Roof.</p><p className="mt-7 text-lg leading-8 text-muted-foreground">Rent, repairs, vendor invoices, property expenses and other day-to-day activity eventually flow into your books and affect how you evaluate each investment. Auxilee can support both sides — helping with the work behind your properties while also providing specialized bookkeeping, management reporting and tax preparation support for real estate investors.</p></div><div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">{connected.map(([title, copy, href]) => <Link key={title} href={href} className="block bg-card p-7 md:p-9"><h3 className="font-display text-2xl">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{copy}</p><span className="mt-6 inline-block text-action">Explore service →</span></Link>)}</div><p className="mt-10 font-display text-2xl">One partner. More of your real estate business covered.</p><Link href="/real-estate-investors" className="mt-4 inline-block font-medium text-action">Explore Real Estate Investor Services →</Link></div></section>

    <section className="bg-card px-5 py-24 md:px-10 md:py-32 lg:px-16"><div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-2 lg:gap-20"><div><Label>Portfolio fit</Label><h2 className="font-display text-4xl leading-tight md:text-5xl">Is Auxilee Right for Your Portfolio?</h2></div><div className="space-y-6 text-lg leading-8 text-muted-foreground"><p>Auxilee may be a good fit if you own rental properties and want to spend less time managing the day-to-day details, need more capacity as your portfolio grows, or already have an established operation and simply need reliable people to take on more of the workload.</p><p>We can work within the systems and processes you already have or bring more structure where you need it. Whether you own a handful of rentals or manage a larger portfolio, the goal is the same: less for you to manage and better support behind your properties.</p><Button asChild variant="action" size="callout"><Link href="/contact">Talk With Our Team <ArrowRight className="text-primary" /></Link></Button></div></div></section>

    <ClosingCTA title="What Would You Like to Get Off Your Plate?" line="Tell us where you need more support. We’ll help you figure out what you can hand off and the best place to start." />
    <Footer />
  </main>;
}
