# storefront-next

Headless storefront on the Next.js App Router. Catalogue from an external API,
cart in context, ISR revalidated by tag.

## run

    cp .env.example .env.local
    npm ci && npm run dev

## what it covers

- product page with `revalidateTag("produto:" + slug)`
- cart in context, persisted in localStorage, hydrated after mount
- `next/image` with `sizes`, no layout shift
- generated metadata, canonical and sitemap
- vitest on the formatting and parsing layer

## decisions

- server components by default; the cart is the only client island
- zod parses the API response, so a shape change fails loud
- revalidation by tag instead of `revalidate: 60`, which invalidates the index

## limits

No checkout integration — the scope was the storefront.
