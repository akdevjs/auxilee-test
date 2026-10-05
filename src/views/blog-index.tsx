"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { blogPosts, type BlogCategory } from "@/lib/posts";

const filters = ["All", "Bookkeeping", "Tax Strategy", "Estimating"] as const;
type Filter = (typeof filters)[number];

export default function BlogFilters() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible =
    filter === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === (filter as BlogCategory));
  return (
    <section className="px-5 pb-24 md:px-10 md:pb-32 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div
          className="flex flex-wrap gap-x-8 gap-y-3 border-b border-border"
          role="tablist"
          aria-label="Filter posts by category"
        >
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              onClick={() => setFilter(item)}
              className={`relative pb-3 text-[11px] font-medium uppercase tracking-[0.1em] transition-colors ${
                filter === item
                  ? "text-foreground after:absolute after:inset-x-0 after:bottom-[-1px] after:h-px after:bg-action"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <article key={post.slug} className="flex flex-col overflow-hidden bg-card">
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[4/3] w-full object-cover "
                />
              </Link>
              <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                  {post.category}
                </p>
                <h2 className="mt-3 font-display text-2xl leading-snug">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                <time dateTime={post.publishedAt} className="mt-4 text-xs text-muted-foreground">
                  {post.date}
                </time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  Read more <ArrowRight className="size-4 text-action" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
