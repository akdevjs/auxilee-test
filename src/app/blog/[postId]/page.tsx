import Image from "next/image";
import type { Metadata } from "next";
import { absoluteUrl, createPageMetadata, jsonLd, siteUrl } from "@/lib/seo";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts, getPost } from "@/lib/posts";
import { Header } from "@/components/site";
import { Footer, Label } from "@/components/site-content";
import { Button } from "@/components/ui/button";

type Params = { params: Promise<{ postId: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ postId: slug }));
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPost((await params).postId);
  if (!post) return { title: "Article not found | Auxilee", robots: { index: false } };
  return createPageMetadata({
    title: `${post.title} | Auxilee Insights`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    imageAlt: post.imageAlt,
    publishedTime: post.publishedAt,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params;
  const post = getPost(postId);
  if (!post) notFound();

  const articleUrl = absoluteUrl(`/blog/${post.slug}`);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    mainEntityOfPage: articleUrl,
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    datePublished: post.publishedAt,
    author: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Auxilee" },
    publisher: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Auxilee" },
  };

  return (
    <main className="bg-background text-foreground">
      <Header />

      <article className="px-5 pb-24 pt-40 md:px-10 md:pb-32 md:pt-52 lg:px-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(articleJsonLd) }}
        />
        <div className="mx-auto max-w-[1280px]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-3.5 text-action" /> All insights
          </Link>
          <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
            {post.category}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-sm text-muted-foreground">
            By{" "}
            <Link href="/about" className="underline underline-offset-2 hover:text-foreground">
              Auxilee
            </Link>{" "}
            · <time dateTime={post.publishedAt}>{post.date}</time>
          </p>

          <div className="mt-12 overflow-hidden border border-border">
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={1200}
              height={900}
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="aspect-[2/1] w-full object-cover "
            />
          </div>

          <div className="mx-auto mt-14 max-w-3xl space-y-8">
            {post.body.map((block, index) => (
              <div key={index}>
                {block.heading && (
                  <h2 className="mb-4 font-display text-2xl leading-snug">{block.heading}</h2>
                )}
                <p className="text-base leading-8 text-muted-foreground">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <section className="border-b border-primary-foreground/20 bg-primary px-5 py-20 text-primary-foreground md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Label dark>Next step</Label>
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            One partner. More of your business covered.
          </h2>
          <div className="mt-9">
            <Button asChild variant="action" size="callout">
              <Link href="/contact">
                Talk With Our Team <ArrowRight className="text-primary" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
