import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site";
import { Footer, Label } from "@/components/site-content";
export default function PostNotFound() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <section className="px-5 py-40 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Label>Insights</Label>
          <h1 className="font-display text-4xl leading-tight md:text-5xl">That article isn't available.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
            It may have been moved or renamed. Browse the latest notes instead.
          </p>
          <Link href="/blog" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
            <ArrowLeft className="size-4 text-action" /> All insights
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

