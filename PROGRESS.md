# ACS Website Redesign - Progress

Last updated: 2026-02-18

## Completed

### Phase 1: Foundation & Data Layer
- [x] **Data files** (`/src/data/`) — 10 files: types.ts, team.ts, services.ts, projects.ts, blogs.ts, testimonials.ts, faqs.ts, stats.ts, offices.ts, events.ts
- [x] **Reusable components** (`/src/components/`) — 20+ components: PageHeader, Container, SectionHeading, CTAButton, CTASection, StatBar, ServiceCard, BlogCard, TeamCard, TestimonialCard, FAQAccordion, CredentialBadge, FeeScheduleTable, RegulatoryLinks, RelatedServices, FloatingCTA, EventCard, ProjectCard, Timeline, TeamFilter, VerticalFilter
- [x] **Theme token migration** — All raw hex values (`bg-[#dd3333]`, etc.) replaced with Tailwind theme tokens (`bg-accent`, `bg-bg-dark`, etc.) across every source file
- [x] **Dynamic route templates** — `/services/[slug]` (9 services) and `/blogs/[slug]` (3 posts) with `generateStaticParams()`
- [x] **Old static pages deleted** — 7 individual service/blog page directories removed
- [x] **All existing pages refactored** — Every page now imports from `/src/data/` and uses shared components

### Phase 2: Homepage Redesign
- [x] Pain-point hero headline ("Facing an ADA Compliance Deadline?")
- [x] Dual CTAs (Free Consultation + View Services)
- [x] StatBar below hero (50+ Years | 1,000+ Projects | 48 States | 11 Specialists)
- [x] Testimonials section
- [x] "Latest Insights" blog section with "View All" link
- [x] Full-width CTA band before footer

### Phase 3: New Service Pages
- [x] TX RAS (`/services/tx-ras`) — with TDLR regulatory links and fee schedule
- [x] CASp (`/services/casp`) — with DSA regulatory links, "qualified defendant" content, fee schedule
- [x] Inspection & Certification (`/services/inspection`)
- [x] Technical Assistance (`/services/technical-assistance`)
- [x] Universal Design (`/services/universal-design`)
- [x] All services have: pain-point headline, testimonials, FAQs, related services, CTA

### Phase 4: Enhanced Existing Pages
- [x] **Team** — Location filter bar (pill buttons), credential badges, location display
- [x] **Projects** — Filterable by vertical (civic, entertainment, recreation, hotel, retail), project cards with descriptions
- [x] **Consulting** — Services organized by category (Core, State-Specific, Specialized) + testimonials + FAQs + CTA
- [x] **Training** — Training offerings grid, upcoming events with format badges, accreditation badges, CTA
- [x] **About** — Mission callout, StatBar, history timeline (1946-2024), accreditations section
- [x] **Header** — Top bar with email, mega-menu dropdown (3 columns), "Free Consultation" CTA in nav, improved mobile menu with service submenu
- [x] **Footer** — 4-column layout (About, Services, Company, Contact), accreditation badges, dynamic copyright year

### Phase 5: Contact & Lead Generation
- [x] **Enhanced contact form** — First/last name, company, service selector (pre-populated from `?service=` URL param), state, preferred contact method (radio), "how did you hear about us"
- [x] **Success confirmation** — Form submits to success state with "send another" option
- [x] **Free consultation page** (`/free-consultation`) — Simplified landing page with stats and streamlined form
- [x] **Floating CTA widget** — Bottom-right button expanding to email/form options
- [x] **Contextual CTAs** — Every service page links to `/contact?service=[slug]`

## Build Status

- **24 pages** generated statically, **zero build errors**
- All pages use theme tokens (no raw hex in any `.tsx` file)
- Dev server: `npm run dev` on port 3020

## Not Yet Implemented (Phase 6: Dream Features)

These require new npm dependencies and/or real content from ACS:

| Feature | Dependency | Status |
|---------|-----------|--------|
| Client-side search | `flexsearch` | Not started |
| Training registration/payment | `stripe`, `@stripe/stripe-js` | Not started |
| Live chat widget | Crisp (3rd party script) | Not started |
| Blog CMS (MDX) | `@next/mdx`, `gray-matter`, `remark`, `rehype` | Not started |
| Contact form backend | `resend` | Scaffolded, not wired |

## Content Needed From ACS

Before the site can go live, ACS must provide:

1. **Real testimonials** — 4-6 client quotes with permission (currently placeholder)
2. **Project descriptions** — Detailed write-ups for UN, Highmark Stadium, San Diego Zoo, Marriott, Urban Edge
3. **Fee schedules** — TX RAS and CASp pricing tiers (currently "Contact us for pricing")
4. **TX RAS content** — TDLR form links, Texas regulatory details
5. **CASp content** — "Qualified defendant" legal explanation, CA regulatory details
6. **Team locations** — Which office each member is based in (all defaulted to "New York")
7. **Team credentials** — Complete certification list per person (only Jimmy Zuehl, Bill Hudson, Ivan Heredia have creds listed)
8. **Office addresses** — Texas and California office details (only NY HQ exists)
9. **Phone number** — For header and CTAs (not currently on the site)
10. **Quantified stats** — Exact numbers for projects completed, years in operation, states served
11. **New service images** — TX RAS, CASp, Inspection, Technical Assistance, Universal Design (currently reusing existing images)
12. **FAQ content** — Additional questions per service
13. **Training schedule** — Real upcoming events (currently placeholder)
14. **Full blog post content** — All 3 blog posts are still stubs (one paragraph each)

## Known Issues / Technical Notes

- **Unused images** in `public/images/new/` — 4 webp files (architectural drawings, accessible building exterior, geometric separator, team collaboration) are not referenced anywhere. Could be used for new service pages or hero variants.
- **Font variable mismatch** — `layout.tsx` sets `--font-source-sans` and `--font-poppins` via `next/font`, but `globals.css` references `var(--font-sans)` (defined in `@theme`) and hardcodes `"Poppins"` in heading rules. The `next/font` variables are applied to `<body>` class but not consumed by the CSS. This works but is technically redundant — could be cleaned up.
- **Contact form** — Currently client-side only (`alert()` / state toggle). Needs Resend API route (`/api/contact/route.ts`) for production.
- **Search** — Header search bar opens an overlay but has no actual search functionality. Needs `flexsearch` integration (Phase 6A).
- **Back-to-top button** — Always visible, no scroll-position detection. Could add `IntersectionObserver` to show/hide based on scroll position.
- **Git** — Repo initialized with 2 commits; redesign work is uncommitted.
