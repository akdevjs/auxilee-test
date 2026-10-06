import Image from "next/image";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Construction Project Coordination & Support | Auxilee",
  description:
    "Dedicated construction project coordination support for RFIs, submittals, schedules, documentation, vendors, change orders, and closeout.",
  path: "/project-coordination",
  image: "/assets/production-project-coordination.webp",
});

import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
const hero = "/assets/production-project-coordination.webp";
const autodeskLogo = "/assets/software/autodesk.svg";
const buildertrendLogo = "/assets/software/buildertrend.webp";
const jobberLogo = "/assets/software/jobber.webp";
const jobtreadLogo = "/assets/software/jobtread.svg";
const procoreLogo = "/assets/software/procore.svg";
import { FAQBlock } from "@/components/marketing";
import { Header } from "@/components/site";
import { Footer, Label } from "@/components/site-content";
import { Button } from "@/components/ui/button";

const included = [
  [
    "RFIs & Submittals",
    "Log, route and track RFIs and submittals, follow up on outstanding items and keep their status current.",
  ],
  [
    "Project Documentation & Document Control",
    "Keep drawings, revisions, addenda, project directories, logs and other documentation organized and current.",
  ],
  [
    "Schedule & Action-Item Tracking",
    "Track milestones, open items, commitments and deadlines so your PM has a clear view of what needs attention.",
  ],
  [
    "Subcontractor & Vendor Coordination",
    "Follow up on outstanding information, documentation, commitments and deliveries.",
  ],
  [
    "Meeting Coordination & Follow-Up",
    "Help prepare agendas, document meeting notes, assign action items and follow up on what's still outstanding.",
  ],
  [
    "Change Order Documentation",
    "Track change requests and supporting documentation so your PM has the information needed to review, price and manage changes.",
  ],
  [
    "Closeout Support",
    "Help collect and organize warranties, O&Ms, lien waivers and other required closeout documentation.",
  ],
] as const;

const scenarios = [
  [
    "You're the Owner and the PM",
    "You're managing projects while also running the company. A dedicated coordinator can take much of the tracking, documentation and follow-up off your plate so you can spend more time with clients, subs, jobsites — and running the business.",
  ],
  [
    "Your PMs Are Stretched Thin",
    "Your PMs know how to manage projects. They simply have too much competing for their attention. Give them coordination support so they can stay focused on schedules, budgets, clients, subcontractors and the issues that actually require their experience.",
  ],
  [
    "You're Growing and Need More Project Capacity",
    "More projects usually mean more coordination. Instead of automatically adding another PM, give your existing project management team dedicated support that helps them handle more work effectively.",
  ],
] as const;

const tiers = [
  [
    "Part-time (20hrs/week)  Project Coordination",
    "Additional support without adding a Full-time (40hrs/week)  position. A good fit when your PM or project team needs consistent help with coordination, documentation and follow-through, but you don't need a Full-time (40hrs/week)  resource.",
  ],
  [
    "Full-time (40hrs/week)  Project Coordination",
    "Dedicated coordination capacity for a busy or growing project team. A Full-time (40hrs/week)  resource who can become more deeply integrated into your day-to-day workflow and support multiple active projects.",
  ],
] as const;

const software = [
  { name: "Buildertrend", logo: buildertrendLogo },
  { name: "JobTread", logo: jobtreadLogo },
  { name: "Procore", logo: procoreLogo },
  { name: "Jobber", logo: jobberLogo },
  { name: "Autodesk Construction Cloud", logo: autodeskLogo },
] as const;

const reasons = [
  [
    "Construction Knowledge Is Already Baked In",
    "Your coordinator isn't starting from zero. They understand construction workflows, terminology and the day-to-day coordination that happens behind a PM. You can spend your time teaching them how your company works, rather than teaching them construction.",
  ],
  [
    "Skip the Recruiting and Hiring Process",
    "You don't have to post a job, sort through applicants or spend weeks searching for someone with the right background. Auxilee provides the resource. You get the additional capacity.",
  ],
  [
    "Dedicated to Your Team",
    "This isn't a task desk where a different person handles your request every time. Your coordinator becomes a dedicated part of your operation — learning your projects, PMs, subcontractors, systems and the way your company works.",
  ],
  [
    "Part-time or Full-time Capacity",
    "Get the level of support your project team needs without automatically adding another Full-time employee to payroll.",
  ],
  [
    "More Support as Your Business Grows",
    "Project coordination doesn't have to operate in a silo. Auxilee can also support estimating, bookkeeping, payroll and management reporting as your needs change.",
  ],
] as const;

const goodFit = [
  "Your project managers are spending too much time on documentation, tracking and follow-up.",
  "You want your existing PMs to have the capacity to manage more projects.",
  "You're the owner and still carrying too much of the project management and coordination yourself.",
  "Your PMs are stretched thin and important details are starting to fall through the cracks.",
  "You want better project organization, communication and follow-through.",
  "Your company is growing, but you're not ready to add another Full-time (40hrs/week)  project manager.",
  "You want a dedicated coordinator who understands construction and can become part of your team.",
  "You need consistent project coordination support, either Part-time (20hrs/week)  or Full-time (40hrs/week) .",
] as const;

const notFit = [
  "What you really need is an on-site superintendent or foreman.",
  "You need someone physically inspecting work or directing field crews.",
  "You're looking for someone else to make the project decisions your PM or owner should be making.",
  "You only need occasional help with a few administrative tasks.",
  "You're looking for the lowest-cost virtual assistant rather than dedicated construction project support.",
] as const;

const faqs = [
  [
    "How does a remote project coordinator support an active construction project?",
    "Your coordinator handles much of the tracking, documentation, communication and follow-up that happens behind the scenes. Your PM and field team remain responsible for managing the project and the work happening on site.",
  ],
  [
    "What can our project coordinator handle?",
    "Depending on your needs, support can include RFIs and submittals, document control, schedule and action-item tracking, subcontractor and vendor follow-up, meeting coordination, change order documentation and project closeout.",
  ],
  [
    "Can our coordinator communicate directly with subcontractors and vendors?",
    "Yes. Your coordinator can help follow up on outstanding information, documents, commitments and deliveries based on the communication process you establish with them.",
  ],
  [
    "Can they work with our existing project management software?",
    "Yes. Your coordinator works within your existing systems whenever possible. Auxilee supports common construction platforms including Buildertrend, JobTread, Procore, Jobber and Autodesk Construction Cloud.",
  ],
  [
    "Who makes project decisions and approvals?",
    "Your team does. Your PM, owner and other designated team members retain responsibility for project decisions and approvals. Your coordinator helps keep the information, documentation and follow-up organized so those decisions can happen efficiently.",
  ],
  [
    "Can one coordinator support multiple projects or project managers?",
    "Yes, depending on project volume and the level of coordination required. Auxilee can help determine whether Part-time (20hrs/week)  or Full-time (40hrs/week)  support makes the most sense for your workload.",
  ],
  [
    "Is our coordinator dedicated to our company?",
    "Yes. The model is built around dedicated support rather than sending individual tasks to whichever person happens to be available.",
  ],
  [
    "How quickly can a coordinator get started?",
    "There will be an onboarding period to learn your company's systems, workflows, active projects and expectations. Because your coordinator already understands construction workflows, the focus can be on learning your business rather than learning construction from scratch.",
  ],
  [
    "Do we have to hire someone Full-time (40hrs/week) ?",
    "No. Auxilee offers both Part-time (20hrs/week)  and Full-time (40hrs/week)  dedicated project coordination support, so you can choose the capacity that fits your current workload.",
  ],
] as const;

function ContactButton() {
  return (
    <Button asChild variant="action" size="callout">
      <Link href="/contact">
        Talk With Our Team <ArrowRight className="text-primary" />
      </Link>
    </Button>
  );
}

export default function ProjectCoordinationPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header />

      <section className="bg-primary pt-[4.5rem] text-primary-foreground">
        <div className="mx-auto grid min-h-[42rem] max-w-[90rem] md:grid-cols-[1.08fr_.92fr]">
          <div className="flex flex-col justify-center px-5 py-20 md:px-10 lg:px-16 lg:py-28">
            <Label dark>Project Coordination &amp; Support</Label>
            <h1 className="max-w-[48rem] font-display text-[2.4rem] leading-[1.06] md:text-[3.1rem] lg:text-[3.55rem]">
              Give Your Project Managers the Support to Manage More.
            </h1>
            <p className="mt-7 max-w-[46rem] text-[1rem] leading-8 text-primary-foreground/70 md:text-[1.05rem]">
              Your project managers are most valuable when they're managing projects — working with
              clients and subcontractors, solving problems and keeping jobs moving. Auxilee gives
              them dedicated construction project coordination support to handle the tracking,
              documentation and follow-through happening behind the scenes. Your PMs stay focused on
              managing the work. Your coordinator keeps the details moving — giving your existing
              team the capacity to manage more projects and manage them better.
            </p>
            <div className="mt-9">
              <ContactButton />
            </div>
            <p className="mt-6 max-w-[43rem] text-sm leading-6 text-primary-foreground/55">
              Tell us how your project team works today. We'll help you determine where dedicated
              coordination support can give them more capacity.
            </p>
          </div>
          <div className="relative min-h-[26rem] overflow-hidden md:min-h-0">
            <Image
              src={hero}
              alt="Construction project coordinator reviewing schedules and project documentation"
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
            <Label>Project management capacity</Label>
            <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
              Your Project Managers Can Only Do So Much Alone.
            </h2>
          </div>
          <div>
            <p className="text-[1.05rem] leading-8 text-muted-foreground">
              There's a limit to how many projects one PM can effectively manage when they're also
              responsible for every RFI, submittal, change order, schedule update, document request
              and follow-up. And those tasks don't just take time. They pull your PM's attention
              away from where their experience matters most — the jobsite, your clients, your
              subcontractors and the decisions that keep projects moving.
            </p>
            <h3 className="mt-9 font-display text-2xl">Give Your PMs Leverage.</h3>
            <p className="mt-5 text-[1.05rem] leading-8 text-muted-foreground">
              Put a dedicated project coordinator behind them to handle the day-to-day tracking,
              documentation and follow-through. That gives your PM more time to stay ahead of the
              schedule, communicate with clients and subs, catch problems earlier and keep tighter
              control over the project. And that matters. When project managers are stretched too
              thin, details get missed. Communication slows down. Decisions take longer. Change
              orders and costly mistakes can become harder to avoid. And clients feel it. Give them
              the right support and the opposite can happen: better-managed projects, tighter
              communication, fewer things falling through the cracks and a better experience for
              your clients.
            </p>
            <p className="mt-8 border-l-2 border-action pl-6 font-display text-xl leading-8">
              The result: more capacity from the project management team you already have — whether
              that means managing more projects or managing your current projects better.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[80rem] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <Label dark>What’s included</Label>
            <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
              Take the Coordination Work Off Your PM's Plate.
            </h2>
            <p className="mt-6 leading-8 text-primary-foreground/65">
              Your project manager doesn't need to personally handle every log, follow-up and piece
              of documentation for the project to stay organized. A dedicated Auxilee project
              coordinator can support your team with:
            </p>
          </div>
          <div>
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
            <p className="mt-8 font-display text-xl leading-8">
              Your PM stays in control of the project. Your coordinator makes sure the details
              behind it keep moving.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[80rem] gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div>
            <Label>Support behind the PM</Label>
            <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
              Expand Your PM's Capacity — Not Their Workload.
            </h2>
          </div>
          <div>
            <p className="text-[1.05rem] leading-8 text-muted-foreground">
              A project coordinator isn't there to replace your project manager. They're there to
              make your project manager more effective. Your PM still manages the project, makes
              decisions, works with the client and subs, monitors the schedule and budget, and leads
              the job. Your coordinator works behind them — tracking what's open, keeping
              documentation current, following up with the right people and making sure important
              details don't disappear into an inbox or meeting notes. Think of it as adding another
              layer of capacity to the project team without adding another project manager.
            </p>
            <p className="mt-8 border-l-2 border-action pl-6 font-display text-xl leading-8">
              One PM can stay focused on higher-value project management because someone else is
              making sure the coordination work gets done.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[80rem]">
          <Label dark>Who this supports</Label>
          <h2 className="max-w-[54rem] font-display text-[2.25rem] leading-tight md:text-[3rem]">
            Built to Support the Project Team You Already Have.
          </h2>
          <p className="mt-6 max-w-[56rem] leading-8 text-primary-foreground/65">
            You don't need to restructure your team to add project coordination support. Auxilee
            adds a dedicated coordinator behind the people already managing your work — giving them
            more capacity without adding another PM.
          </p>
          <div className="mt-14 grid gap-px bg-primary-foreground/20 lg:grid-cols-3">
            {scenarios.map(([title, copy]) => (
              <article key={title} className="bg-primary p-7 md:p-9">
                <h3 className="font-display text-2xl leading-tight">{title}</h3>
                <p className="mt-5 leading-7 text-primary-foreground/65">{copy}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 font-display text-xl">
            More support behind your PMs means more capacity in front of them.
          </p>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[80rem]">
          <Label>Dedicated capacity</Label>
          <h2 className="max-w-[54rem] font-display text-[2.25rem] leading-tight md:text-[3rem]">
            Dedicated Support. Part-time or Full-time .
          </h2>
          <p className="mt-6 max-w-[56rem] leading-8 text-muted-foreground">
            Your project coordinator becomes a dedicated extension of your team — learning your
            projects, your people, your systems and the way you work. Choose the capacity that fits
            your workload.
          </p>
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
            {tiers.map(([title, copy]) => (
              <article key={title} className="bg-card p-7 md:p-10">
                <h3 className="font-display text-2xl leading-tight">{title}</h3>
                <p className="mt-5 leading-7 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-8 border-t border-border pt-10 lg:flex-row lg:items-center">
            <p className="max-w-[52rem] font-display text-xl leading-8">
              In either case, the goal is the same: Give your project managers the support they need
              to spend more of their time actually managing projects.
            </p>
            <ContactButton />
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-20 text-primary-foreground md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[72rem] text-center">
          <Label dark>Software</Label>
          <h2 className="font-display text-[2rem] leading-tight md:text-[2.5rem]">
            We Work With the Systems You Already Use
          </h2>
          <p className="mx-auto mt-5 max-w-[50rem] leading-8 text-primary-foreground/65">
            Your coordinator works inside the tools your team already uses — so you don't have to
            change your process just to get more support.
          </p>
          <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {software.map((item) => (
              <li
                key={item.name}
                className="dark-card flex min-h-[8.5rem] flex-col items-center justify-center gap-4 rounded-2xl border border-primary-foreground/15 bg-background px-5 py-6 text-foreground"
              >
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  loading="lazy"
                  className="software-logo h-auto max-h-[2.5rem] w-auto max-w-[9rem] object-contain"
                />
                <span className="text-xs font-medium text-muted-foreground">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[80rem]">
          <Label>Why Auxilee</Label>
          <h2 className="max-w-[56rem] font-display text-[2.25rem] leading-tight md:text-[3rem]">
            Why Choose Auxilee for Project Coordination?
          </h2>
          <p className="mt-5 max-w-[56rem] font-display text-xl leading-8">
            Get a Construction-Ready Coordinator Without Starting From Scratch.
          </p>
          <p className="mt-5 max-w-[58rem] leading-8 text-muted-foreground">
            Finding a good project coordinator takes time. You have to recruit them. Interview them.
            Figure out whether they actually understand construction. Hire them. Train them. Get
            them up to speed on your systems and processes — and hope you made the right hire.
            Auxilee gives you another option.
          </p>
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-6">
            {reasons.map(([title, copy], index) => (
              <article
                key={title}
                className={`bg-card p-7 md:p-9 ${index < 3 ? "lg:col-span-2" : index === 3 ? "lg:col-span-3" : "lg:col-span-3"}`}
              >
                <h3 className="font-display text-2xl leading-tight">{title}</h3>
                <p className="mt-5 leading-7 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 font-display text-xl">One partner. More of your business covered.</p>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[80rem]">
          <Label dark>Fit checklist</Label>
          <h2 className="max-w-[56rem] font-display text-[2.25rem] leading-tight md:text-[3rem]">
            Is Auxilee the Right Project Coordination Partner for You?
          </h2>
          <div className="mt-12 grid gap-px bg-primary-foreground/20 lg:grid-cols-2">
            <article className="bg-primary p-7 md:p-10">
              <h3 className="font-display text-2xl">Auxilee could be a good fit if:</h3>
              <ul className="mt-7 space-y-4">
                {goodFit.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-primary-foreground/70">
                    <Check className="mt-1 size-4 shrink-0 text-action" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="bg-primary p-7 md:p-10">
              <h3 className="font-display text-2xl">We're probably not the right fit if:</h3>
              <ul className="mt-7 space-y-4">
                {notFit.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-primary-foreground/70">
                    <X className="mt-1 size-4 shrink-0 text-primary-foreground/45" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mt-10 font-display text-xl leading-8">
            The goal isn't to replace your project management team. It's to make the team you
            already have more effective.
          </p>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[80rem] gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
          <div>
            <Label>Frequently asked questions</Label>
            <h2 className="font-display text-[2.25rem] leading-tight md:text-[3rem]">
              Project Coordination FAQs
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
              Give Your Project Managers the Support to Do More.
            </h2>
            <p className="mt-6 max-w-[52rem] leading-8 text-primary-foreground/65">
              If your PMs are spending too much time tracking, documenting and following up — or
              your company needs more project capacity without immediately adding another project
              manager — let's talk. We'll learn how your project team works today, where your PMs
              are losing time, and whether Part-time (20hrs/week) or Full-time (40hrs/week)
              dedicated coordination support makes sense.
            </p>
            <p className="mt-6 font-display text-xl leading-8">
              Give your PMs more time to manage the work, serve your clients and keep projects
              moving.
            </p>
            <p className="mt-5 text-sm leading-6 text-primary-foreground/55">
              Start with the team you already have. Add the support that helps them do more.
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
