import Image from "next/image";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Testimonials | Auxilee",
  description: "Hear from the builders, investors, and contractors who work with Auxilee.",
  path: "/testimonials",
  image: "/assets/auxilee-testimonials-hero.webp",
});

import Link from "next/link";
import { ArrowRight } from "lucide-react";
const testimonialsHeroImage = "/assets/auxilee-testimonials-hero.webp";
import { Header } from "@/components/site";
import { Footer, Label } from "@/components/site-content";
import { Button } from "@/components/ui/button";
import {
  PendingVideoTestimonialCard,
  VideoTestimonialCard,
  videoTestimonials,
} from "@/components/video-testimonials";

export default function Testimonials() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header />

      <section className="pt-[72px]">
        <div className="mx-auto grid min-h-[650px] max-w-[1440px] md:grid-cols-[1.02fr_.98fr]">
          <div className="flex flex-col justify-center px-5 py-20 md:px-10 lg:px-16 lg:py-24">
            <Label>Client perspective</Label>
            <h1 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl lg:text-7xl">
              Built on real working relationships.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              Hear directly from the investors and construction companies we work with.
            </p>
          </div>
          <div className="relative min-h-[440px] overflow-hidden md:min-h-0">
            <Image
              src={testimonialsHeroImage}
              alt="Real estate and construction professionals discussing project financial reports"
              width={1408}
              height={1104}
              fetchPriority="high"
              loading="eager"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover "
            />
          </div>
        </div>
      </section>
      <section className="border-b border-primary-foreground/20 bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <h2 className="max-w-4xl font-display text-4xl leading-tight md:text-6xl">
            One partner. More of your business covered.
          </h2>
          <Button asChild variant="action" size="callout" className="shrink-0">
            <Link href="/contact">
              Talk With Our Team <ArrowRight className="text-primary" />
            </Link>
          </Button>
        </div>
      </section>
      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Label>Video testimonials</Label>
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            In their own words.
          </h2>
          <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
            {videoTestimonials.map((testimonial) => (
              <VideoTestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
            <PendingVideoTestimonialCard />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
