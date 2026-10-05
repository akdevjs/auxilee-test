import Image from "next/image";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Auxilee | Specialized Support for Construction & Real Estate",
  description:
    "Estimating, project coordination, bookkeeping, payroll, reporting and tax preparation support for construction companies and real estate investors.",
  path: "/",
  image: "/assets/production-home-hero.webp",
});

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
const hero = "/assets/production-home-hero2.webp";
const construction = "/assets/production-construction.webp";
const realEstate = "/assets/production-real-estate.webp";
import { ContactBlock } from "@/components/contact-block";
import { Header } from "@/components/site";
import { Footer, Label } from "@/components/site-content";
import { FAQBlock } from "@/components/marketing";
import { Button } from "@/components/ui/button";
import { VideoTestimonialCard, videoTestimonials } from "@/components/video-testimonials";
const billLogo = "/assets/software/bill.svg";
const buildertrendLogo = "/assets/software/buildertrend.webp";
const coconstructLogo = "/assets/software/coconstruct.webp";
const gustoLogo = "/assets/software/gusto.svg";
const houzzLogo = "/assets/software/houzz.svg";
const jobberLogo = "/assets/software/jobber.webp";
const jobtreadLogo = "/assets/software/jobtread.svg";
const microsoftLogo = "/assets/software/microsoft-365.svg";
const procoreLogo = "/assets/software/procore.svg";
const quickbooksLogo = "/assets/software/quickbooks-wordmark.png";
const rampLogo = "/assets/software/ramp.webp";
const buildiumLogo = "/assets/software/buildium-wordmark.svg";
const innagoLogo = "/assets/software/innago.webp";
const appfolioLogo = "/assets/software/appfolio.svg";
const deluxeLogo = "/assets/software/deluxe.svg";
const rentrediLogo = "/assets/software/rentredi.png";

const pad = "px-5 md:px-10 lg:px-16";
const sec = `${pad} py-24 md:py-32`;
const dark = "bg-primary text-primary-foreground";

function Cta({ className = "" }: { className?: string }) {
  return (
    <Button asChild variant="action" size="callout" className={className}>
      <Link href="/contact">
        Talk With Our Team <ArrowRight className="text-primary" />
      </Link>
    </Button>
  );
}
function TextLink({ to, children }: { to: string; children: string }) {
  return (
    <Link href={to} className="inline-flex items-center text-sm font-medium">
      {children} <span className="ml-2 text-action">→</span>
    </Link>
  );
}

const industries = [
  {
    title: "Construction Companies",
    img: construction,
    alt: "Construction crew reviewing plans on a job site",
    tags: "Home builders · Remodelers · General contractors · Specialty trades",
    body: "When you're running jobs, the work behind the work adds up fast. Estimating. Project coordination. Job costing. Bookkeeping and payroll. Reporting. Tax preparation support. Auxilee can step in where you need more capacity — whether that's one part of the business or several.",
    link: "Explore Support for Construction Companies",
    to: "/construction-companies",
  },
  {
    title: "Real Estate Investors & Property Owners",
    img: realEstate,
    alt: "Residential property exterior",
    tags: "Landlords · Multifamily · Flippers · Wholesalers · Developers",
    body: "More properties and transactions mean more to keep organized — from bookkeeping and reporting to property management support and tax preparation support. Get specialized help with what you need now, with the flexibility to add support as your portfolio and business evolve.",
    link: "Explore Support for Real Estate Investors",
    to: "/real-estate-investors",
  },
];

const groups = [
  {
    title: "Accounting & Financial Support",
    intro:
      "Keep the numbers organized — and get a clearer view of how your business is performing.",
    link: "Explore Accounting & Financial Support",
    to: "/bookkeeping-payroll",
    items: [
      {
        title: "Bookkeeping & Payroll",
        copy: "Keep your books current, your financial records organized and payroll running smoothly.",
        to: "/bookkeeping-payroll",
      },
      {
        title: "Management Reporting & Custom Dashboards",
        copy: "Turn the numbers behind your business into useful reporting that helps you see what's happening and make better decisions.",
        to: "/management-reporting",
      },
      {
        title: "Tax Preparation Support",
        copy: "Get your financial information organized and prepared for tax time, with support that understands the complexities of construction and real estate.",
        to: "/tax-preparation",
      },
    ],
  },
  {
    title: "Construction Operations Support",
    intro:
      "Add capacity behind your projects — from the bid through the day-to-day work of keeping jobs moving.",
    link: "Explore Construction Operations Support",
    to: "/construction-companies",
    items: [
      {
        title: "Estimating & Takeoffs",
        copy: "Get accurate, detailed estimates and takeoffs without making every bid dependent on your own time or your in-house team's capacity.",
        to: "/estimating-takeoffs",
      },
      {
        title: "Remote Project Coordination",
        copy: "Get help with the administrative and coordination work behind active jobs — including schedules, subcontractor and vendor coordination, purchasing, documentation, invoicing and work inside platforms such as JobTread and Buildertrend.",
        to: "/project-coordination",
      },
    ],
  },
  {
    title: "Real Estate Operations Support",
    intro: "Get help with the day-to-day work behind the properties you own and operate.",
    link: "Explore Real Estate Operations Support",
    to: "/real-estate-investors",
    items: [
      {
        title: "Property Management Support",
        copy: "Get administrative support with tenant communications, maintenance coordination, rent and payment tracking, property records, vendor coordination and other day-to-day property operations — while you retain the decisions and responsibilities that belong with the property owner or licensed professionals.",
        to: "/property-management-support",
      },
    ],
  },
];

const software = [
  { name: "QuickBooks Online", logo: quickbooksLogo },
  { name: "JobTread", logo: jobtreadLogo },
  { name: "Buildertrend", logo: buildertrendLogo },
  { name: "Procore", logo: procoreLogo },
  { name: "CoConstruct", logo: coconstructLogo },
  { name: "Houzz Pro", logo: houzzLogo },
  { name: "Jobber", logo: jobberLogo },
  { name: "Gusto", logo: gustoLogo },
  { name: "BILL", logo: billLogo },
  { name: "Deluxe eChecks", logo: deluxeLogo },
  { name: "Ramp", logo: rampLogo },
  { name: "Microsoft 365", logo: microsoftLogo },
  { name: "Buildium", logo: buildiumLogo },
  { name: "Innago", logo: innagoLogo },
  { name: "AppFolio", logo: appfolioLogo },
  { name: "RentRedi", logo: rentrediLogo },
];

const flows = [
  {
    title: "For Construction Companies",
    steps: [
      "Estimate",
      "Project",
      "Job Costing",
      "Bookkeeping",
      "Reporting",
      "Tax Preparation Support",
    ],
    note: "The numbers and decisions made at one stage affect what happens at the next.",
  },
  {
    title: "For Real Estate Investors",
    steps: ["Properties", "Bookkeeping", "Reporting", "Tax Preparation Support"],
    note: "As your portfolio and transactions grow, your financial and operational needs grow with them.",
  },
];

const steps = [
  {
    title: "Start with what you need now",
    copy: "Begin with the capability that would make the biggest difference today — whether that's estimating, bookkeeping, project coordination or another area of support.",
  },
  {
    title: "Get specialized support",
    copy: "Work with people who understand the systems, workflows and financial realities of construction and real estate.",
  },
  {
    title: "Add more support when you need it",
    copy: "As your workload, team or portfolio changes, you can broaden your support without starting over with a new provider.",
  },
];

const why = [
  {
    title: "Industry-Specific",
    copy: "Support designed around the realities of builders, contractors, real estate investors and property owners — not a generic back-office model.",
  },
  {
    title: "More Connected",
    copy: "Get support across multiple parts of the business from one partner that can see more of the picture.",
  },
  {
    title: "Flexible by Design",
    copy: "Start with one need. Add, reduce or broaden support as your business changes.",
  },
  {
    title: "Built From Real-World Experience",
    copy: "Auxilee was founded by William Morgan, an active real estate investor and developer with hands-on experience in construction, property management and growing construction businesses.",
  },
];

const faqs = [
  [
    "Who does Auxilee work with?",
    "We specialize in construction companies, real estate investors, property owners, and teams managing multiple projects or entities.",
  ],
  [
    "Do we need every service?",
    "No. Start with the function creating the most pressure, then add connected support as the business grows.",
  ],
  [
    "Can you work with our existing CPA and software?",
    "Yes. We coordinate with existing professionals and begin with the systems already in place.",
  ],
  [
    "Is your project support remote?",
    "Yes. Financial and coordination support is delivered remotely, with clear ownership and a dependable communication rhythm.",
  ],
] as const;

export default function Home() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header />

      <section className={`${dark} pt-18`}>
        <div className="mx-auto grid h-[clamp(600px,calc(100vh-72px),1200px)] max-h-225 max-w-360 md:grid-cols-[1.20fr_.80fr]">
          <div className={`split-copy flex flex-col justify-center ${pad} py-20`}>
            <h1 className="max-w-3xl font-display text-[2.25rem] font-medium leading-[1.04] md:text-[2.5rem] lg:text-[2.75rem] xl:text-[3rem]">
              Specialized Business Support for Construction Companies and Real Estate Investors
            </h1>
            <p className="mt-6 max-w-2xl font-display text-[1.2rem] font-medium leading-[1.2] text-primary-foreground/85">
              More support for your business. One partner to bring it together.
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/65">
              From estimating and project coordination to bookkeeping, payroll, management reporting
              and tax preparation support, Auxilee gives you specialized help with the work behind
              your business.
            </p>
            <p className="mt-10 max-w-xl text-sm leading-6 text-primary-foreground/80">
              Get the specialized help you need today — with more support available when you need
              it.
            </p>
            <Cta className="mt-5 self-start" />
          </div>
          <div className="relative min-h-120 overflow-hidden md:min-h-0">
            <Image
              src={hero}
              alt="Smiling construction owner on a job site"
              width={1408}
              height={1152}
              fetchPriority="high"
              loading="eager"
              sizes="(min-width: 768px) 50vw, 100vw "
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className={sec}>
        <div className="mx-auto max-w-[1280px]">
          <Label>Who we serve</Label>
          <h2 className="max-w-4xl font-display text-4xl leading-tight md:text-6xl">
            Different Businesses. Different Support Needs.
          </h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
            Construction companies and real estate investors have different workflows, different
            numbers and different demands on their time. Your support should understand the
            difference.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {industries.map((c) => (
              <article key={c.to} className="flex flex-col border border-border bg-card">
                <Image
                  src={c.img}
                  alt={c.alt}
                  width={1200}
                  height={750}
                  loading="lazy"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[16/10] w-full object-cover "
                />
                <div className="flex flex-1 flex-col p-8 md:p-10">
                  <h3 className="font-display text-3xl">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{c.tags}</p>
                  <p className="mt-6 leading-8">{c.body}</p>
                  <div className="mt-auto pt-8">
                    <TextLink to={c.to}>{c.link}</TextLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${dark} ${sec}`}>
        <div className="mx-auto max-w-[960px]">
          <Label dark>The work behind growth</Label>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            More Projects. More Properties. More Moving Parts.
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-8 text-primary-foreground/70">
            <p>
              As your business grows, so does the work behind it. More bids to get out. More
              projects to keep on track. More properties and transactions to manage. More bills,
              payroll, reporting and financial details that need attention.
            </p>
            <p>
              You need more capacity — but that doesn't always mean hiring a full in-house team for
              every function. And piecing together a different outside provider for every need can
              create another problem: more people to manage, more handoffs and more disconnected
              information.
            </p>
            <p className="text-primary-foreground">Auxilee gives you another option.</p>
          </div>
          <p className="mt-12 border-l-2 border-action pl-6 font-display text-2xl leading-snug">
            Get specialized support where you need it, while keeping the flexibility to add more as
            your business changes.
          </p>
        </div>
      </section>

      <section className={sec}>
        <div className="mx-auto max-w-[1280px]">
          <Label>Services</Label>
          <h2 className="max-w-4xl font-display text-4xl leading-tight md:text-6xl">
            Start Where You Need Help Today.
          </h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
            You don't need to outsource everything. Start with one service or get support across
            several areas of your business.
          </p>
          <div className="mt-16 space-y-16">
            {groups.map((g) => (
              <div
                key={g.title}
                className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[.8fr_2fr] lg:gap-14"
              >
                <div>
                  <h3 className="font-display text-2xl md:text-3xl">{g.title}</h3>
                  <p className="mt-4 leading-7 text-muted-foreground">{g.intro}</p>
                  <div className="mt-6">
                    <TextLink to={g.to}>{g.link}</TextLink>
                  </div>
                </div>
                <div
                  className={`grid gap-px border border-border bg-border ${g.items.length > 1 ? "md:grid-cols-2" : ""} ${g.items.length === 3 ? "xl:grid-cols-3" : ""}`}
                >
                  {g.items.map((i) => (
                    <Link key={i.to} href={i.to} className="group flex flex-col bg-card p-7 md:p-8">
                      <h4 className="font-display text-xl">{i.title}</h4>
                      <p className="mt-4 leading-7 text-muted-foreground">{i.copy}</p>
                      <span className="mt-auto pt-6 text-action">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-16 font-display text-2xl md:text-3xl">
            Get the help you need now. Add more support when it makes sense.
          </p>
        </div>
      </section>

      <section className={`bg-card ${pad} py-20 md:py-24`}>
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="font-display text-3xl md:text-4xl">
            We Work With the Software You Already Use
          </h2>
          <ul className="software-grid mt-[3rem] grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {software.map((item) => (
              <li
                key={item.name}
                className="flex min-h-[7.5rem] items-center justify-center rounded-2xl border border-border bg-background px-[1.25rem] py-[1.5rem] sm:min-h-[8rem] lg:min-h-[8.5rem]"
              >
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  loading="lazy"
                  className={`software-logo h-auto max-h-[2.5rem] w-auto max-w-full object-contain lg:max-h-[2.75rem] ${item.name === "RentRedi" ? "scale-[1.6]" : ""}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${dark} ${sec}`}>
        <div className="mx-auto max-w-[1280px]">
          <Label dark>Connected support</Label>
          <h2 className="max-w-5xl font-display text-4xl leading-tight md:text-6xl">
            When Your Support Team Sees the Bigger Picture, Everything Works Better.
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-primary-foreground/70">
            Your estimating, projects, job costs, books and reporting aren't separate from one
            another. Neither are your properties, transactions, financials and taxes. When you use
            different providers for every function, each one may only see their piece. Auxilee can
            support more of the work behind your business — giving you a team that understands how
            the pieces fit together.
          </p>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {flows.map((f) => (
              <div
                key={f.title}
                className="dark-card rounded-2xl border border-primary-foreground/15 bg-primary p-8 md:p-10"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-primary-foreground/55">
                  {f.title}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {f.steps.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-3 font-display text-lg leading-snug md:text-xl"
                    >
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-action/15">
                        <Check className="size-3.5 text-action" />
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 leading-7 text-primary-foreground/65">{f.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-14 max-w-3xl font-display text-2xl leading-snug">
            You don't have to use Auxilee for everything. But when you need more support, you
            already have a partner who understands your business.
          </p>
        </div>
      </section>

      <section className={sec}>
        <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <Label>How it works</Label>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Support That Changes With Your Business.
            </h2>
            <p className="mt-7 text-lg leading-8 text-muted-foreground">
              Your needs won't stay the same. Auxilee is designed so your support doesn't have to
              stay the same either.
            </p>
            <Cta className="mt-10" />
          </div>
          <ol className="border-t border-border">
            {steps.map((s) => (
              <li key={s.title} className="flex gap-6 border-b border-border py-8">
                <span className="mt-2.5 size-2 shrink-0 bg-action" aria-hidden />
                <div>
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{s.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${dark} ${sec}`}>
        <div className="mx-auto max-w-[1280px]">
          <Label dark>Why Auxilee</Label>
          <h2 className="max-w-4xl font-display text-4xl leading-tight md:text-6xl">
            Built for Construction and Real Estate. Not Adapted to It.
          </h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-primary-foreground/70">
            Your business has its own language, workflows and numbers. Auxilee is built around them.
          </p>
          <div className="mt-16 grid gap-px border border-primary-foreground/20 bg-primary-foreground/20 md:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <article key={w.title} className="bg-primary p-8">
                <h3 className="font-display text-2xl">{w.title}</h3>
                <p className="mt-5 leading-7 text-primary-foreground/65">{w.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-card ${sec}`}>
        <div className="mx-auto max-w-[1280px]">
          <Label>Client perspective</Label>
          <div className="relative text-left">
            <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">
              Built on real working relationships.
            </h2>
            <div className="mt-6 md:absolute md:bottom-2 md:right-0 md:mt-0">
              <TextLink to="/testimonials">View all testimonials</TextLink>
            </div>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videoTestimonials.slice(0, 3).map((t) => (
              <VideoTestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <section className={sec}>
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <Label>Frequently asked</Label>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              A practical place to start.
            </h2>
          </div>
          <FAQBlock items={faqs} />
        </div>
      </section>

      <section className={`border-t border-border ${sec}`}>
        <div className="mx-auto max-w-[1280px]">
          <Label>Start the conversation</Label>
          <h2 className="mb-14 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            Tell us where the operation feels stretched.
          </h2>
          <ContactBlock />
        </div>
      </section>

      <section className={`${dark} ${sec} border-b border-primary-foreground/20`}>
        <div className="mx-auto max-w-[960px]">
          <Label dark>Ready when you are</Label>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            What Can We Take Off Your Plate?
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-primary-foreground/70">
            <p>
              You don't need another complicated solution. You need the right help in the parts of
              your business that are taking too much time, slowing things down or stretching your
              team too thin.
            </p>
            <p>
              Tell us where you need support today. We'll talk through what Auxilee can help with —
              and whether we're the right fit.
            </p>
          </div>
          <Cta className="mt-10" />
          <p className="mt-10 font-display text-xl">
            Start with what you need now. Add more support when you need it.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
