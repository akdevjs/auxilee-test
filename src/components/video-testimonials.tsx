export type VideoTestimonial = {
  id: string;
  name: string;
  company: string;
  description: string;
};

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "beBzsv44nCg",
    name: "Lyle Spann",
    company: "Auxilee client",
    description: "Lyle shares what it is like to work with a financial partner who understands the realities behind the business.",
  },
  {
    id: "Js5jjN_MF5s",
    name: "Inessa Chernioglo",
    company: "Auxilee client",
    description: "Inessa reflects on the confidence that comes from dependable support and a clearer view of the numbers.",
  },
  {
    id: "IAT9GwFY5OI",
    name: "Sarah Carlyle",
    company: "Auxilee client",
    description: "Sarah describes her experience with Auxilee and the value of responsive, consistent financial support.",
  },
  {
    id: "U-zaJZAZTWE",
    name: "Matt R. Johnson",
    company: "Auxilee client",
    description: "Matt discusses the working relationship and what organized financial operations mean for a growing business.",
  },
  {
    id: "7lyXxBJMFVs",
    name: "Amir Keyvanmanesh",
    company: "Auxilee client",
    description: "Amir shares why clear communication and a hands-on partnership matter when the financial details get complex.",
  },
];

export function VideoTestimonialCard({ testimonial }: { testimonial: VideoTestimonial }) {
  return (
    <article className="flex h-full flex-col border-t border-border pt-6">
      <p className="min-h-[4.5rem] text-lg leading-7 text-foreground">{testimonial.description}</p>
      <div className="relative mt-6 aspect-video overflow-hidden bg-muted">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${testimonial.id}?rel=0`}
          title={`Video testimonial from ${testimonial.name}`}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <a
          href={`https://www.youtube.com/watch?v=${testimonial.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 z-10 rounded-sm bg-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow-lg hover:bg-primary/90"
        >
          Watch on YouTube
        </a>
      </div>
      <p className="mt-5 font-display text-xl font-medium">{testimonial.name}</p>
      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">{testimonial.company}</p>
    </article>
  );
}

export function PendingVideoTestimonialCard() {
  return (
    <article className="flex h-full flex-col border-t border-border pt-6">
      <p className="min-h-[4.5rem] text-lg leading-7 text-foreground">Another client perspective will be added here soon.</p>
      <div className="mt-6 grid aspect-video place-items-center border border-border bg-secondary">
        <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">Video coming soon</span>
      </div>
      <p className="mt-5 font-display text-xl font-medium">Client story</p>
      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">Sixth review pending</p>
    </article>
  );
}