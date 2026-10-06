import Image from "next/image";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Construction Takeoffs & Cost Estimating Services | Auxilee",
  description:
    "Detailed construction takeoffs and cost estimating support for residential, multifamily, and light commercial contractors.",
  path: "/estimating-takeoffs",
  image: "/assets/production-construction.webp",
});

import Link from "next/link";
import { ArrowRight } from "lucide-react";
const hero = "/assets/production-construction.webp";
import { FAQBlock } from "@/components/marketing";
import { Header } from "@/components/site";
import { Footer, Label } from "@/components/site-content";
import { Button } from "@/components/ui/button";

const pipelineScenarios = [
  [
    "You're Still Doing the Estimating Yourself",
    "The takeoffs, pricing, revisions and bid deadlines all land on your desk. Every hour you spend estimating is an hour you're not spending running jobs, talking with clients, developing new opportunities — or getting your nights and weekends back. You don't necessarily need a Full-time (40hrs/week)  estimator. You need someone reliable who can take estimating work off your plate.",
  ],
  [
    "You Have an Estimator. They're Just at Capacity",
    "Your estimator can handle the normal workload. Then three bid opportunities land at once. Now something has to give — turnaround time, opportunities you pursue, or the attention your current estimates deserve. Auxilee gives your existing team overflow capacity when they need it, without permanently adding headcount just to handle the peaks.",
  ],
  [
    "You Need More Estimating Capacity as You Grow",
    "At some point, estimating becomes bigger than one person. But bid volume isn't always predictable enough to justify building a larger internal department. Auxilee can become an extension of your team — giving you estimating capacity that can expand or contract with your workload.",
  ],
] as const;

const deliverables = [
  [
    "Quantity & Material Takeoffs",
    "Detailed quantities organized by trade, material or scope so you know what the project requires.",
  ],
  [
    "Labor & Material Cost Estimates",
    "Cost estimates that bring quantities together with labor and material pricing to help you build your bid.",
  ],
  [
    "Trade-Specific Estimates",
    "Need help with one portion of the job? We can provide focused takeoffs and estimates for individual trades or scopes.",
  ],
  [
    "Full-Project Estimates",
    "For general contractors and builders who need multiple trades brought together into a comprehensive project estimate.",
  ],
  [
    "Bid & Budget Estimates",
    "Whether you're preparing a competitive bid or evaluating a project before moving forward, we can build the level of estimating detail around what you need to know.",
  ],
] as const;

const tiers = [
  [
    "Project-Based",
    "For contractors who need estimating help one project at a time. Send us the plans when you need support. A good fit for occasional estimates, overflow work or contractors who want to try Auxilee before committing to anything ongoing.",
  ],
  [
    "Monthly Estimating Support",
    "For contractors with a steady flow of bids who need reliable additional capacity. Get ongoing estimating support each month so more projects keep moving without everything landing on you or your in-house estimator.",
  ],
  [
    "Dedicated Estimating Support",
    "For growing contractors who need substantial, consistent estimating capacity. Add a more dedicated estimating resource that works as an extension of your team — without building out another Full-time (40hrs/week)  internal position.",
  ],
] as const;

const trustItems = [
  [
    "Detailed, Organized Takeoffs",
    "Quantities broken down in a way that makes the estimate easy to review, price and use.",
  ],
  [
    "Clear Scope & Assumptions",
    "Know what's included, what isn't, and where assumptions have been made instead of trying to reverse-engineer someone else's estimate.",
  ],
  [
    "Pricing That Fits the Project",
    "Labor and material costs incorporated based on the scope and pricing requirements of the estimate.",
  ],
  [
    "A Team You Can Come Back To",
    "Questions, revisions and plan changes are part of construction. You need an estimating partner you can work with, not just a spreadsheet delivered to your inbox.",
  ],
] as const;

const reasons = [
  [
    "We Understand Construction",
    "A good estimate isn't just a list of quantities. It needs to make sense for the way contractors actually scope, price, bid and build work.",
  ],
  [
    "Add Capacity Without Adding Headcount",
    "Use Auxilee when you need us — for a single project, overflow support or more consistent estimating capacity as you grow.",
  ],
  [
    "We Work Like an Extension of Your Team",
    "The goal isn't simply to hand you a takeoff. It's to become a reliable estimating resource that understands how you work and makes it easier to keep bids moving.",
  ],
  [
    "Support Doesn't Have to Stop When You Win the Job",
    "Estimating is only one part of running a construction company. Auxilee can also support other parts of your operation, including project coordination, bookkeeping and management reporting.",
  ],
] as const;

const faqs = [
  [
    "What do you need from us to get started?",
    "Send us the project plans, specifications and any addenda or scope notes you have, along with the project location and bid deadline. PDF plan sets are typically the easiest place to start. We'll review what you send and let you know if anything else is needed before we begin.",
  ],
  [
    "How long does an estimate take?",
    "Turnaround depends on the size, complexity and number of trades involved. Many estimating services complete standard projects in roughly 2–5 business days, with smaller scopes sometimes completed sooner. We'll confirm the expected turnaround after reviewing your plans and bid deadline.",
  ],
  [
    "Can you work with our existing estimator?",
    "Yes. Auxilee can provide overflow capacity alongside your existing estimator when bid volume spikes, deadlines overlap or your internal team is already at capacity.",
  ],
  [
    "Can you use our labor rates and material pricing?",
    "Yes. If you have preferred labor rates, supplier pricing, production assumptions or other internal cost information, send it with the project and we can use those inputs where appropriate.",
  ],
  [
    "What happens if the plans change?",
    "Send us the revised drawings or addenda and we can update the affected portions of the estimate. Minor clarifications are commonly handled as revisions; significant scope or drawing changes may require additional time and cost, which should be confirmed before the revision work begins.",
  ],
  [
    "Can you estimate just one trade or part of a project?",
    "Yes. Estimating support can be scoped to a specific trade or portion of the work, or expanded into a more comprehensive multi-trade project estimate.",
  ],
  [
    "What will I receive with my estimate?",
    "Deliverables commonly include an organized quantity takeoff and cost breakdown, with the level of detail tailored to the project and scope.",
  ],
  [
    "Do I have to commit to ongoing estimating support?",
    "No. You can start with an individual project and add monthly or dedicated estimating capacity later if your bid volume and workload justify it.",
  ],
] as const;

export default function EstimatingTakeoffsPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header />

      <section className="bg-primary pt-[4.5rem] text-primary-foreground">
        <div className="mx-auto grid min-h-[42rem] max-w-[90rem] md:grid-cols-[1.08fr_.92fr]">
          <div className="flex flex-col justify-center px-5 py-20 md:px-10 lg:px-16 lg:py-28">
            <Label dark>Estimating &amp; Takeoffs</Label>
            <h1 className="max-w-[48rem] font-display text-[2.4rem] leading-[1.06] md:text-[3.1rem] lg:text-[3.55rem]">
              Construction Takeoffs &amp; Cost Estimating Services
            </h1>
            <p className="mt-6 max-w-[44rem] font-display text-[1.2rem] leading-7 text-primary-foreground/90">
              More estimating capacity without another Full-time (40hrs/week) hire.
            </p>
            <p className="mt-5 max-w-[46rem] text-[1rem] leading-8 text-primary-foreground/70 md:text-[1.05rem]">
              Whether you're estimating every project yourself, your in-house estimator is stretched
              thin, or your company simply needs more estimating capacity, Auxilee gives you
              experienced support when and where you need it. Get detailed construction takeoffs and
              cost estimates for residential, multifamily and light commercial projects — without
              making every bid dependent on your time or the capacity of your in-house team.
            </p>
            <p className="mt-6 max-w-[44rem] border-l-2 border-action pl-5 font-display text-lg leading-7">
              Start with one project. Send us overflow when things get busy. Or build ongoing
              estimating support around your workload.
            </p>
            <div className="mt-9">
              <Button asChild variant="action" size="callout">
                <Link href="/contact">
                  Get an Estimate <ArrowRight className="text-primary" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 max-w-[43rem] text-sm leading-6 text-primary-foreground/55">
              Send us your plans. We'll review the project, confirm the scope and let you know the
              cost and expected turnaround before you commit.
            </p>
          </div>
          <div className="relative min-h-[26rem] overflow-hidden md:min-h-0">
            <Image
              src={hero}
              alt="Construction estimator preparing a detailed takeoff from project plans"
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
        <div className="mx-auto max-w-[80rem]">
          <Label>Estimating capacity</Label>
          <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
            <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
              Your Pipeline Shouldn't Be Limited by Your Estimating Capacity.
            </h2>
            <p className="text-[1.05rem] leading-8 text-muted-foreground">
              There may be more work you could pursue. The problem is getting every opportunity
              properly estimated while still running the business and delivering the work you've
              already won. And that problem looks different depending on where your company is
              today.
            </p>
          </div>
          <div className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-3">
            {pipelineScenarios.map(([title, copy]) => (
              <article key={title} className="bg-card p-7 md:p-9">
                <h3 className="font-display text-2xl leading-tight">{title}</h3>
                <p className="mt-5 leading-7 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
          <p className="mt-9 font-display text-xl leading-8">
            One project. Overflow support. Ongoing capacity. Start with what you need now.
          </p>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[80rem] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <Label dark>What you receive</Label>
            <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
              From Plans to a Bid-Ready Estimate.
            </h2>
            <p className="mt-6 leading-8 text-primary-foreground/65">
              You send us the plans. We handle the detailed work of turning them into quantities,
              costs and an organized estimate you can use to price the job.
            </p>
          </div>
          <div>
            <div className="border-t border-primary-foreground/20">
              {deliverables.map(([title, copy]) => (
                <article
                  key={title}
                  className="grid gap-3 border-b border-primary-foreground/20 py-7 md:grid-cols-[.8fr_1.2fr] md:gap-8"
                >
                  <h3 className="font-display text-xl">{title}</h3>
                  <p className="leading-7 text-primary-foreground/65">{copy}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 leading-8 text-primary-foreground/80">
              Plans change? Scope changes? Another bid lands on your desk? Send it our way. We can
              help with individual estimates, revisions and ongoing estimating support as your
              workload changes. You focus on winning and building the work. We'll help you get the
              numbers together.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[80rem] gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div>
            <Label>Flexible support</Label>
            <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
              Estimating Support That Flexes With Your Workload.
            </h2>
          </div>
          <p className="text-[1.05rem] leading-8 text-muted-foreground">
            Your estimating needs won't be the same every month. You may need help with one project,
            overflow when several bids hit at once, or consistent estimating capacity as your
            company grows. Auxilee lets you add estimating capacity when you need it — without
            building a bigger in-house team.
          </p>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[80rem]">
          <Label dark>Ways to work together</Label>
          <h2 className="max-w-[54rem] font-display text-[2.25rem] leading-tight md:text-[3rem]">
            Choose the Estimating Support That Fits Your Business.
          </h2>
          <div className="mt-14 grid gap-px bg-primary-foreground/20 lg:grid-cols-3">
            {tiers.map(([title, copy]) => (
              <article key={title} className="bg-primary p-7 md:p-9">
                <h3 className="font-display text-2xl leading-tight">{title}</h3>
                <p className="mt-5 leading-7 text-primary-foreground/65">{copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-8 border-t border-primary-foreground/20 pt-10 lg:flex-row lg:items-center">
            <p className="max-w-[50rem] leading-8 text-primary-foreground/75">
              <strong className="font-display text-xl font-medium text-primary-foreground">
                Not Sure Which Fits?
              </strong>{" "}
              Send us your next project. We'll review the plans and scope, talk through what you
              need, and recommend the level of estimating support that makes sense.
            </p>
            <Button asChild variant="action" size="callout" className="shrink-0">
              <Link href="/contact">
                Get an Estimate <ArrowRight className="text-primary" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[80rem] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <Label>Trust the work</Label>
            <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
              An Estimate Is Only Useful If You Can Trust the Numbers.
            </h2>
            <p className="mt-6 leading-8 text-muted-foreground">
              When you hand off an estimate, you're trusting someone else with a critical part of
              your bid. The quantities need to be right. The scope needs to be understood. The
              assumptions need to be clear. And you need an estimate organized well enough that you
              can review it before you put your number on the line. That's why our estimating
              process is built around more than getting a takeoff back to you quickly.
            </p>
          </div>
          <div className="border-t border-border">
            {trustItems.map(([title, copy]) => (
              <article
                key={title}
                className="grid gap-3 border-b border-border py-7 md:grid-cols-[.8fr_1.2fr] md:gap-8"
              >
                <h3 className="font-display text-xl">{title}</h3>
                <p className="leading-7 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[80rem]">
          <Label dark>Why Auxilee</Label>
          <h2 className="max-w-[54rem] font-display text-[2.25rem] leading-tight md:text-[3rem]">
            Why Choose Auxilee for Estimating?
          </h2>
          <div className="mt-14 grid gap-px bg-primary-foreground/20 md:grid-cols-2">
            {reasons.map(([title, copy]) => (
              <article key={title} className="bg-primary p-7 md:p-10">
                <h3 className="font-display text-2xl leading-tight">{title}</h3>
                <p className="mt-5 leading-7 text-primary-foreground/65">{copy}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 font-display text-xl">One partner. More of your business covered.</p>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[80rem]">
          <Label>Fit</Label>
          <h2 className="max-w-[54rem] font-display text-[2.25rem] leading-tight md:text-[3rem]">
            Is Auxilee the Right Estimating Partner for You?
          </h2>
          <p className="mt-6 max-w-[54rem] text-lg leading-8 text-muted-foreground">
            Auxilee is a good fit for contractors who need more estimating capacity — without
            automatically adding another Full-time (40hrs/week) person to the team.
          </p>
        </div>
      </section>

      <section className="border-t border-border px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[80rem] gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
          <div>
            <Label>Frequently asked questions</Label>
            <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
              Estimating &amp; Takeoffs FAQs
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
              Have a Project That Needs Estimating?
            </h2>
            <p className="mt-6 max-w-[52rem] leading-8 text-primary-foreground/65">
              Send us the plans. We'll review the scope, talk through what you need, and let you
              know the cost and expected turnaround before you commit.
            </p>
            <p className="mt-5 text-sm leading-6 text-primary-foreground/55">
              Need one estimate now? Start there. If you need more capacity later, Auxilee can grow
              with you.
            </p>
          </div>
          <Button asChild variant="action" size="callout" className="shrink-0">
            <Link href="/contact">
              Get an Estimate <ArrowRight className="text-primary" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
