import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Insights | Auxilee",
  description: "Practical notes on bookkeeping, tax strategy, and estimating for real estate investors, flippers, and construction companies.",
  path: "/blog",
});

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogFilters from "@/views/blog-index";
import { Header } from "@/components/site";
import { Footer, Label } from "@/components/site-content";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  return <main className="bg-background text-foreground">
    <Header />
    <section className="px-5 pb-24 pt-40 md:px-10 md:pb-32 md:pt-52 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <Label>Insights</Label>
        <h1 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">Notes on bookkeeping, tax, and building smarter.</h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">Practical guidance for real estate investors, flippers, and construction companies.</p>
      </div>
    </section>
    <BlogFilters />
    <section className="border-b border-primary-foreground/20 bg-primary px-5 py-20 text-primary-foreground md:px-10 md:py-28 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <Label dark>Next step</Label>
        <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">Start with what you need. Add support as you grow.</h2>
        <div className="mt-9"><Button asChild variant="action" size="callout"><Link href="/contact">Talk With Our Team <ArrowRight className="text-primary" /></Link></Button></div>
      </div>
    </section>
    <Footer />
  </main>;
}
