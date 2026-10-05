import { blogPosts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const articles = blogPosts.map((post) =>
    `- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${post.excerpt}`,
  );

  const content = [
    "# Auxilee",
    "",
    "> Auxilee provides specialized bookkeeping, payroll, tax preparation support, construction estimating, and project coordination for construction companies and real estate investors.",
    "",
    "The linked pages contain the current service details. Contact Auxilee to discuss scope, availability, and pricing for a specific business.",
    "",
    "## Company",
    "",
    `- [About Auxilee](${absoluteUrl("/about")}): The company, its approach, and who it serves.`,
    `- [Pricing](${absoluteUrl("/pricing")}): How support is scoped and priced.`,
    `- [Testimonials](${absoluteUrl("/testimonials")}): Client perspectives and video testimonials.`,
    `- [Contact](${absoluteUrl("/contact")}): Contact details and options to schedule a discovery call.`,
    "",
    "## Who We Serve",
    "",
    `- [Construction Companies](${absoluteUrl("/construction-companies")}): Support for builders, contractors, remodelers, and specialty trades.`,
    `- [Real Estate Investors and Property Owners](${absoluteUrl("/real-estate-investors")}): Support for rental, flip, development, and multi-entity portfolios.`,
    "",
    "## Services",
    "",
    `- [Bookkeeping and Payroll](${absoluteUrl("/bookkeeping-payroll")}): Bookkeeping, payroll, job costing, cleanup, and property-level accounting.`,
    `- [Tax Preparation Support](${absoluteUrl("/tax-preparation")}): Tax preparation and year-round planning support.`,
    `- [Construction Estimating and Takeoffs](${absoluteUrl("/estimating-takeoffs")}): Quantity takeoffs, cost estimates, and bid support.`,
    `- [Project Coordination](${absoluteUrl("/project-coordination")}): Documentation, schedules, vendor follow-up, and project administration.`,
    `- [Property Management Support](${absoluteUrl("/property-management-support")}): Tenant communication, maintenance and vendor coordination, leases, payments, and records.`,
    `- [Management Reporting and Custom Dashboards](${absoluteUrl("/management-reporting")}): Financial and operational KPIs for construction and real estate businesses.`,
    "",
    "## Insights",
    "",
    `- [All insights](${absoluteUrl("/blog")}): Articles on bookkeeping, tax strategy, and estimating.`,
    ...articles,
    "",
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
