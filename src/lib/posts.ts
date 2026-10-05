const blogJobCosting = "/assets/blog-job-costing.webp";
const blogQuarterlyTax = "/assets/blog-quarterly-tax.webp";
const blogBidsFromBooks = "/assets/blog-bids-from-books.webp";
const blogCatchUpBooks = "/assets/blog-catch-up-books.webp";
const blogEntityStructure = "/assets/blog-entity-structure.webp";
const blogMarginReview = "/assets/blog-margin-review.webp";

export type BlogCategory = "Bookkeeping" | "Tax Strategy" | "Estimating";

export type BlogPostBlock = { heading?: string; text: string };

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  title: string;
  excerpt: string;
  date: string;
  publishedAt: string;
  image: string;
  imageAlt: string;
  body: BlogPostBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "job-costing-basics",
    category: "Bookkeeping",
    title: "Job costing 101: knowing what each project really earns",
    excerpt: "Revenue tells you what came in. Job costing tells you what you actually kept. Here is how to see it clearly.",
    date: "September 12, 2026",
    publishedAt: "2026-09-12",
    image: blogJobCosting,
    imageAlt: "A printed job cost report on a desk beside a calculator, receipts, and a pencil",
    body: [
      {
        text: "Most builders and investors can tell you their revenue for the year. Far fewer can tell you, per project, what they actually kept after labor, materials, subs, and overhead. That gap is where margins quietly disappear — and job costing is how you close it.",
      },
      {
        heading: "Start with a cost structure that mirrors how you work",
        text: "Your chart of accounts should reflect the phases and cost categories you actually manage: labor, materials, equipment, subcontractors, and general conditions. If your books lump everything into a single 'expenses' bucket, no report will ever tell you which phase of a job ran over.",
      },
      {
        heading: "Assign every transaction to a job",
        text: "Job costing only works if every dollar in and out carries a project tag. That means receipts coded at purchase, subcontractor invoices matched to the right job, and owner draws kept separate from project spend. It is unglamorous weekly work, and it is exactly what good bookkeeping provides.",
      },
      {
        heading: "Read the variance, not just the total",
        text: "A job that comes in on budget overall can still hide a framing phase that ran 15% over and a finishes phase that came in under. Reviewing budget-to-actual variance by phase each month is what turns historical numbers into better bids next time.",
      },
      {
        text: "If your current reports can't answer 'what did this project really earn?', that's a solvable problem — and usually faster to fix than most owners expect.",
      },
    ],
  },
  {
    slug: "quarterly-tax-rhythm",
    category: "Tax Strategy",
    title: "The quarterly tax rhythm that prevents year-end surprises",
    excerpt: "Tax strategy isn't a March activity. A simple quarterly check-in keeps decisions open while they can still change the outcome.",
    date: "August 28, 2026",
    publishedAt: "2026-08-28",
    image: blogQuarterlyTax,
    imageAlt: "A quarterly wall calendar behind a meeting table with a financial forecast and laptop",
    body: [
      {
        text: "By the time most business owners sit down with a tax preparer, the year is closed. Every decision that could have lowered the bill — timing a purchase, adjusting distributions, electing a different treatment — already happened. The return simply records it.",
      },
      {
        heading: "What a quarterly check-in actually covers",
        text: "A good quarterly review is short and concrete: year-to-date profit against projections, upcoming purchases or deals worth timing, estimated payment adjustments, and any entity or depreciation decisions with deadlines in the current year. An hour per quarter replaces a week of scrambling in March.",
      },
      {
        heading: "It only works if the books are current",
        text: "Strategy built on stale numbers is guesswork. This is why we run tax planning off the same monthly close as your bookkeeping — the projection your strategy depends on is only as good as last month's reconciliation.",
      },
      {
        text: "If your tax conversation currently starts when your CPA asks for documents, moving it to a quarterly rhythm is the single highest-leverage change you can make.",
      },
    ],
  },
  {
    slug: "bids-start-from-books",
    category: "Estimating",
    title: "Why your bids should start from your books, not industry averages",
    excerpt: "Industry benchmarks don't know your crew, your subs, or your overhead. Your job-cost history does.",
    date: "August 7, 2026",
    publishedAt: "2026-08-07",
    image: blogBidsFromBooks,
    imageAlt: "Hands comparing a printed construction bid estimate against architectural blueprints",
    body: [
      {
        text: "Ask ten estimators where their unit costs come from and most will point to a database, a rule of thumb, or last year's bid plus a percentage. All three share the same flaw: none of them describe what work actually costs your company.",
      },
      {
        heading: "Your history is the benchmark that matters",
        text: "Your crew's productivity, your subcontractor relationships, your overhead structure — these show up in your actual job costs. When estimating starts from reconciled books, labor rates and production factors reflect your operation, not a national average built from companies nothing like yours.",
      },
      {
        heading: "Close the loop after every job",
        text: "The estimate shouldn't be finished when the bid is submitted. Comparing estimated versus actual costs after each project — line by line — is what makes the next estimate sharper. Without that feedback loop, the same estimating error repeats on every bid.",
      },
      {
        text: "This is the practical reason we keep estimating, bookkeeping, and job costing under one roof: the bid, the books, and the post-job review all draw on the same numbers.",
      },
    ],
  },
  {
    slug: "catching-up-books",
    category: "Bookkeeping",
    title: "Catching up months of books without losing your mind",
    excerpt: "Falling behind on bookkeeping is common. Staying behind is optional. Here's the order that makes cleanup fast.",
    date: "July 18, 2026",
    publishedAt: "2026-07-18",
    image: blogCatchUpBooks,
    imageAlt: "Hands sorting months of bank statements and receipts into labeled monthly folders",
    body: [
      {
        text: "Almost every growing real estate or construction business hits a stretch where the books fall behind — a busy season, a staffing gap, a deal that consumed every spare hour. Six or eight months later, opening the accounting file feels like opening a wall without knowing what's behind it.",
      },
      {
        heading: "Work in this order",
        text: "Cleanup goes fastest when it's sequenced: bank and credit card reconciliations first (they anchor everything), then uncategorized transactions, then accounts payable and receivable, then job-cost allocation, and finally adjusting entries like accruals and owner distributions. Skipping ahead is what turns a three-week cleanup into a three-month one.",
      },
      {
        heading: "Don't let perfect delay done",
        text: "The goal of a catch-up isn't forensic perfection on every two-year-old receipt — it's books that are accurate, reconciled, and decision-ready. Materiality matters. Document assumptions where records are thin and keep moving.",
      },
      {
        heading: "Then protect the fresh start",
        text: "Clean books decay within a quarter without a monthly close rhythm. The cleanup is only worth doing if a monthly reconciliation, review, and report follow it. That ongoing cadence is the actual product — the cleanup just gets you to the starting line.",
      },
    ],
  },
  {
    slug: "entity-structure-real-estate",
    category: "Tax Strategy",
    title: "Entity structure decisions for growing real estate portfolios",
    excerpt: "One LLC or five? A holding company? The right answer depends on liability, financing, and how you plan to exit.",
    date: "June 30, 2026",
    publishedAt: "2026-06-30",
    image: blogEntityStructure,
    imageAlt: "A property acquisition agreement, entity structure diagram, and house keys on a conference table",
    body: [
      {
        text: "Entity structure questions usually arrive at the worst moment — after a property is under contract, or after a portfolio has quietly grown to a size where the original setup no longer fits. The best time to think about structure is before the next acquisition, not during it.",
      },
      {
        heading: "What structure is actually deciding",
        text: "An entity map makes three trade-offs: liability containment (keeping one property's problem from reaching the rest), financing flexibility (lenders have opinions about structure), and tax treatment (how income, depreciation, and eventual sale proceeds flow to you). Different portfolios legitimately land on different answers.",
      },
      {
        heading: "The cost of getting it wrong late",
        text: "Restructuring after the fact means deed transfers, potential transfer taxes, lender consent, and sometimes taxable events. None of these are reasons to stay in a bad structure — but all of them are reasons to decide deliberately before the portfolio grows.",
      },
      {
        text: "Structure decisions should be made with your tax picture and your books in view at the same time. When the people advising on structure can see your actual numbers, the advice gets specific fast.",
      },
    ],
  },
  {
    slug: "margin-review-before-submission",
    category: "Estimating",
    title: "Margin review before submission: a 15-minute habit",
    excerpt: "The cheapest place to catch a bad bid is before it leaves your desk. A short structured review catches most of them.",
    date: "June 5, 2026",
    publishedAt: "2026-06-05",
    image: blogMarginReview,
    imageAlt: "A construction project manager reviewing a printed margin report at a job site office",
    body: [
      {
        text: "Every estimator has a story about the bid that won and immediately became a problem — a missed scope item, an outdated material price, a labor assumption that belonged to a different kind of project. Most of those bids share a trait: nobody reviewed the margin before submission.",
      },
      {
        heading: "What a pre-submission review checks",
        text: "It doesn't need to be long. Fifteen structured minutes: does the margin match what this type of job historically returns? Are material prices current? Does the labor figure match your crew's actual production, not the hopeful version? Is anything in the drawings referenced but not priced?",
      },
      {
        heading: "Compare against your own history",
        text: "The most powerful check is the simplest: how does this bid's margin per square foot, per unit, or per phase compare to your last five similar jobs — as they actually finished, not as they were estimated? Your books already hold this answer.",
      },
      {
        text: "Winning work at the wrong margin is more expensive than losing it. A short review habit, grounded in real job-cost history, is how you bid to win the right projects.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
