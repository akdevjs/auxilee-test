# Auxilee

Auxilee's marketing site is a Next.js App Router application using TypeScript, React, and Tailwind CSS.

## Run locally

Requires Node.js 20.9 or newer.

```sh
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production check, run `bun run build` followed by `bun run start`.

## Project structure

- `src/app/` contains all pages, route metadata, the dynamic blog article route, and booking API handlers.
- `src/components/` contains the shared header, footer, forms, video cards, and UI components.
- `src/lib/posts.ts` contains blog content; `src/lib/booking.ts` contains server-only Google Calendar integration.
- `public/assets/` contains the site's photos, logos, and software marks.
- `src/styles.css` contains the shared Tailwind theme and presentation rules.

## Search metadata

Canonical URLs, social sharing tags, `robots.txt`, `sitemap.xml`, and the optional `llms.txt` guide use `https://www.auxilee.com` by default. Set `NEXT_PUBLIC_SITE_URL` to the final public origin when building for another domain. Content pages, including Property Management Support and Management Reporting, and blog articles are statically generated; booking API requests run on the server.

## Booking connection

The scheduler needs `LOVABLE_API_KEY` and `GOOGLE_CALENDAR_API_KEY` in the server environment. Without them, the booking API returns an availability error and the form displays a retry message. The contact form opens a prepared email to `admin@auxilee.com`; it does not send mail from the server.
