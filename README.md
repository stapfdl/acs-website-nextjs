# ACS Website — Next.js Static Export

**Next.js 15 + React 19 + Tailwind CSS 3** — fully static HTML export for Cloudflare Pages.

## Why Next.js?

The previous React+Vite SPA rendered all HTML client-side, meaning Google/Bing crawlers saw an empty page until JavaScript executed. This Next.js version **pre-renders every page to static HTML** at build time, so crawlers see the full `<title>`, `<meta description>`, `<h1>`, `<h2>`, and `<link rel="canonical">` tags without JavaScript.

## Build

```bash
# Install dependencies
npm install

# Build static export (outputs to /out directory)
npm run build

# The /out directory contains all static HTML files ready for deployment
```

> **Important:** The `NODE_ENV=production` flag is baked into the build script. Do not override it.

## Deploy to Cloudflare Pages

1. Push this repository to GitHub
2. In Cloudflare Pages, create a new project connected to the GitHub repo
3. Set **build command**: `npm run build`
4. Set **output directory**: `out`
5. No environment variables needed

## Project Structure

```
app/                    ← Next.js App Router pages
  layout.tsx            ← Root layout (Navbar, Footer, GA4, Ahrefs)
  page.tsx              ← Homepage (/)
  minneapolis/page.tsx  ← City page (/minneapolis)
  managed-it/page.tsx   ← Service page (/managed-it)
  news/page.tsx         ← Blog listing (/news)
  news/[slug]/page.tsx  ← Blog post (/news/why-smbs-need-managed-it-2025)
  sitemap.ts            ← Auto-generated /sitemap.xml
  robots.ts             ← Auto-generated /robots.txt
  not-found.tsx         ← 404 page
components/
  Navbar.tsx            ← Fixed top navigation (client component)
  Footer.tsx            ← Footer with city links
  CityPage.tsx          ← Reusable city page template
lib/
  newsData.ts           ← Blog post data
  utils.ts              ← className utility
pages/
  _error.tsx            ← Required to suppress Next.js pages router 404 error
public/
  _headers              ← Cloudflare Pages security headers
  _redirects            ← Cloudflare Pages redirects
```

## SEO Features

- **Pre-rendered HTML** — all pages output as static `.html` files
- **`generateMetadata()`** — unique `<title>`, `<meta description>`, `<link rel="canonical">` per page
- **Structured data** — LocalBusiness, FAQPage, Article JSON-LD schemas
- **Sitemap** — `/sitemap.xml` with all 27 URLs and priorities
- **Robots.txt** — `/robots.txt` pointing to sitemap
- **Open Graph** — og:title, og:description, og:url, og:image per page
- **Twitter Card** — summary_large_image

## Pages

| Route | Type | SEO Title |
|-------|------|-----------|
| `/` | Home | Managed IT Services Minneapolis |
| `/minneapolis` | City | IT Support Minneapolis MN |
| `/st-paul` | City | IT Support St. Paul MN |
| `/bloomington` | City | IT Support Bloomington MN |
| `/minnetonka` | City | IT Support Minnetonka MN |
| `/maple-grove` | City | IT Support Maple Grove MN |
| `/edina` | City | IT Support Edina MN |
| `/eagan` | City | IT Support Eagan MN |
| `/woodbury` | City | IT Support Woodbury MN |
| `/chicago` | City | IT Support Chicago Suburbs IL |
| `/managed-it` | Service | Managed IT Services Minneapolis |
| `/cybersecurity` | Service | Cybersecurity Services Minneapolis |
| `/cloud` | Service | Cloud Services Minneapolis |
| `/it-consulting` | Service | IT Consulting & vCIO Minneapolis |
| `/ai-solutions` | Service | AI Business Solutions Minneapolis |
| `/news` | Blog | IT News & Insights Blog |
| `/news/[slug]` | Blog Post | Individual article pages |
| `/about` | About | About Accelerated Cloud Solutions |
| `/contact` | Contact | Contact ACS |
| `/privacy` | Legal | Privacy Policy |
| `/terms` | Legal | Terms of Service |
