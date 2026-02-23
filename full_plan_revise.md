# ACS Website Redesign - Implementation Plan

## Context

The current Next.js site replicates the existing WordPress site but lacks the conversion-focused design, expanded service coverage, and lead generation infrastructure that competitors demonstrate. The ACS Webpage Priorities PDF identifies significant content gaps (TX RAS, CASp, inspection services, training expansion), while competitive analysis of ~12 firms reveals ACS is behind on testimonials, quantified stats, CTAs, fee schedules, and pain-point messaging. Stakeholder input (see `usp_needs_notes.md`) adds: positioning must reflect arch/construction industry (not medical/insurance); clarify ACS as for-profit subsidiary of United Spinal (avoid confusion with the nonprofit); and emphasize that ACS works with architects, contractors, and developers—not with people with disabilities (that’s USp). Stakeholders also note that competitor and prospect sites feel more **professional**, with **moving images and video**, **crisp graphics**, and **dynamic menus** (vs. flat/static). This plan addresses priorities, messaging, and that look-and-feel bar.

---

## Look & feel (cross-phase)

Close the gap vs. competitor "slickness" (see `usp_needs_notes.md`):

| Gap | Plan |
|-----|------|
| **Professional** | Architectural/construction aesthetic, consistent theme tokens, clear hierarchy, accreditation badges. |
| **Moving images / video** | Hero: support optional background video or subtle motion (e.g. Ken Burns on hero image); consider short explainer or testimonial video on homepage/About. Video content from ACS or placeholder for Phase 2+. |
| **Crisp graphics** | High-res imagery (drawings, sites, accessible features); avoid low-res or generic stock; SVG where appropriate for icons and logos. |
| **Dynamic menus** | Mega-menu (Phase 4F) with smooth expand/collapse and hover states—not a flat link list; consider light stagger/fade for dropdown content. Nav and key CTAs use clear hover/active states. |
| **Polish** | Consistent transitions (e.g. 200–300 ms) on cards, buttons, and dropdowns; testimonial carousel animated; optional subtle scroll or hover effects on service cards. Respect reduced-motion preferences (`prefers-reduced-motion`). |

---

## Phase 1: Foundation & Data Layer (no visible changes)

Extract all hardcoded content into centralized data files and create reusable components. Every subsequent phase depends on this.

### 1A. Data files (`/src/data/`)

| File | Purpose |
|------|---------|
| `types.ts` | Shared TypeScript interfaces: TeamMember, Service, Project, BlogPost, Testimonial, FAQ, Stat, OfficeLocation, TrainingEvent |
| `team.ts` | 11 team members migrated from team/page.tsx + new fields: `location`, `credentials[]`, `slug` |
| `services.ts` | 4 existing + 5 new services with: `slug`, `painPointHeadline`, `category`, `featured` flag + helper functions (`getServiceBySlug`, `getFeaturedServices`, `getServicesByCategory`) |
| `projects.ts` | Projects with `vertical` categorization (residential, hotel, retail, educational, civic, office, entertainment, healthcare, transit, recreation) |
| `blogs.ts` | 3 existing blog posts extracted from individual page files |
| `testimonials.ts` | New file, initially placeholder content (needs real quotes from ACS) |
| `faqs.ts` | New file with general ADA FAQs + per-service FAQs |
| `stats.ts` | Quantified stats: years experience, projects completed, specialists, states served |
| `offices.ts` | HQ (Fort Totten NY) + future TX and CA offices |
| `events.ts` | Training events with date, format, registration info |

### 1B. Reusable components (`/src/components/`)

| Component | Replaces | Used On |
|-----------|----------|---------|
| `PageHeader.tsx` | The identical `bg-[#f8f8f8] py-12` block in 12+ pages | Every interior page |
| `Container.tsx` | `max-w-7xl mx-auto px-4` wrapper | Every page |
| `ServiceCard.tsx` | Inline card markup in homepage + consulting page | Homepage, consulting, service pages |
| `BlogCard.tsx` | Inline card markup in homepage + blogs page | Homepage, blogs |
| `TeamCard.tsx` | Inline card markup in team page (adds credential badges + location) | Team page |
| `CTAButton.tsx` | Raw `bg-[#dd3333]` button markup everywhere | Every page |
| `CTASection.tsx` | **NEW** - full-width CTA band at end of sections | Every page |
| `StatBar.tsx` | **NEW** - horizontal stat counters | Homepage, about |
| `TestimonialCard.tsx` | **NEW** - single testimonial display | Service pages, homepage |
| `FAQAccordion.tsx` | **NEW** - expandable Q&A section | Service pages, consulting |
| `CredentialBadge.tsx` | **NEW** - small colored pill for certifications | Team cards, service pages |
| `SectionHeading.tsx` | Repeated heading + subtitle + accent line pattern | Every section |

### 1C. Fix theme token usage

Replace all raw hex values across every file:
- `bg-[#dd3333]` → `bg-accent` | `hover:bg-[#bb2222]` → `hover:bg-accent-hover`
- `text-[#dd3333]` → `text-accent` | `bg-[#141414]` → `bg-bg-dark`
- `bg-[#333333]` → `bg-bg-gray` | `bg-[#f8f8f8]` → `bg-bg-light`

### 1D. Dynamic route templates

**Create `/src/app/services/[slug]/page.tsx`** - Dynamic service page with `generateStaticParams()` from services.ts. Template includes: PageHeader, hero image, pain-point headline, description, testimonials, FAQs, related services, CTA. Replaces 4 individual service page directories.

**Create `/src/app/blogs/[slug]/page.tsx`** - Dynamic blog page with `generateStaticParams()` from blogs.ts. Replaces 3 individual blog page directories.

**Delete after migration:** `services/site-assessment/`, `services/design-and-consultation/`, `services/code-review/`, `services/expert-witness/`, `blogs/forbes-accessibility-100/`, `blogs/doorway-accessible/`, `blogs/museums-disability-inclusive/`

### 1E. Refactor all existing pages

Every page imports from `/src/data/` and uses shared components. No new content, just structural cleanup.

---

## Phase 2: Homepage Redesign

**Modify: `/src/app/page.tsx`**

| Section | Current | New |
|---------|---------|-----|
| Hero | Generic skyscrapers, descriptive text, "Contact Us" | Pain-point headline ("Facing an ADA Compliance Deadline?"), two CTAs (Free Consultation + View Services), Forbes badge overlay; **visual:** high-res hero image and/or optional background video / subtle motion (see Look & feel) |
| Stats | None | Full-width `StatBar` below hero: "50+ Years \| 1,000+ Projects \| 48 States \| 11 Certified Specialists" |
| Services | 4 cards on dark bg | 6-8 cards in two rows: primary services + state-specific (TX RAS, CASp), each with pain-point sub-headline |
| About | 4 generic info boxes + image | "Why Choose ACS?" value props + credential badges row (AIA, ICC logos) + Forbes callout; **positioning**: mission-focused experts, subsidiary of United Spinal (deep disability expertise), we work with architects, builders, developers, contractors—avoid confusion with United Spinal nonprofit |
| Testimonials | None | **NEW** testimonial carousel section (animated; see Look & feel) |
| Blog | 3 cards, no metadata | 3 cards with dates/authors, "Latest Insights" heading + "View All" link |
| CTA Band | None | **NEW** full-width "Schedule Your Free Consultation" before footer |

---

## Phase 3: New Service Pages

All use the dynamic `[slug]/page.tsx` template. Key work is data population.

### 3A. TX RAS (`/services/tx-ras`)
- Headline: "Need a Texas RAS review before your TDLR deadline?"
- Custom sections: TDLR form links, fee schedule table, TX-specific projects, TX office emphasis
- **New components:** `FeeScheduleTable.tsx`, `RegulatoryLinks.tsx`
- **New image needed:** `/public/images/services/tx-ras.jpg`

### 3B. CASp (`/services/casp`)
- Headline: "Received an ADA lawsuit in California? A CASp report is your best defense."
- Custom sections: "Qualified defendant" explainer, fee schedule, CA projects, CA office emphasis
- **New image needed:** `/public/images/services/casp.jpg`

### 3C. Inspection/Certification (`/services/inspection`)
- Headline: "Need a certified accessibility inspection before opening day?"
- **New image needed:** `/public/images/services/inspection.jpg`

### 3D. Technical Assistance (`/services/technical-assistance`)
- Headline: "Have a quick accessibility question? We're here to help."
- Custom section: Related blog posts filtered by tag
- **New image needed:** `/public/images/services/technical-assistance.jpg`

### 3E. Universal Design (`/services/universal-design`)
- Headline: "Want to go beyond minimum compliance? Design for everyone."
- **New image needed:** `/public/images/services/universal-design.jpg`

### 3F. Template enhancements for service categories
- State-specific services get: fee schedule, state office highlight, regulatory links, state-filtered projects
- All services get: testimonials filtered by `serviceSlug`, FAQs filtered by `serviceSlug`, related services grid, CTA section
- **New component:** `RelatedServices.tsx`

### 3G. Additional state pages (deferred)
- ACS has skills/certs in OK, FL, NY in addition to CA and TX. **Future phase:** consider "page per state" with state-specific keywords for SEO (CA and TX remain priority for this plan).

---

## Phase 4: Enhanced Existing Pages

### 4A. Team page (`/src/app/team/page.tsx`)
- Add location display per member ("Based in New York, NY")
- Add credential badges as colored pills below title (not buried in bio)
- Add filter bar: All / New York / Texas / California
- **New components:** `TeamFilter.tsx` (client component)

### 4B. Projects page (`/src/app/projects/page.tsx`) - major overhaul
- Replace logo strip + text tags with filterable project portfolio
- Vertical filter bar (horizontal scrollable pills)
- Project cards with name, client, vertical tag, location, description
- Client logo strip preserved below as social proof
- **New components:** `ProjectCard.tsx`, `VerticalFilter.tsx`

### 4C. Consulting page (`/src/app/consulting/page.tsx`)
- Add Inspection/Certification as 4th service card
- Add "State-Specific Services" section with TX RAS + CASp cards
- Add testimonials section + FAQ section + CTA band

### 4D. Training page (`/src/app/training/page.tsx`)
- Expand with: training offerings grid, upcoming events list, accreditation badges, attendee testimonials
- **New component:** `EventCard.tsx`

### 4E. About page (`/src/app/about/page.tsx`)
- Add: mission callout, history timeline (helped write ADA, founded, Forbes), accreditations section, stats bar
- **Positioning copy:** Clarify ACS vs. United Spinal: ACS is the for-profit consulting division; we work with able-bodied architects, contractors, and developers; United Spinal (nonprofit) works with people with disabilities; "mission-focused experts" + "subsidiary so we know the issues deeply"
- **New component:** `Timeline.tsx`

### 4F. Header (`/src/components/Header.tsx`)
- Services dropdown **mega-menu** organized by category—**dynamic**: smooth expand/collapse, hover states (not flat link list); optional stagger/fade on dropdown (see Look & feel)
- Phone number in header bar
- "Free Consultation" accent CTA button in nav (hover/active states)
- **New components:** `MegaMenu.tsx`, `Breadcrumbs.tsx`

### 4G. Footer (`/src/components/Footer.tsx`)
- 4-column layout: Logo+description, Services links, Company links, Contact info
- Accreditation logos row (AIA, ICC, United Spinal)

---

## Phase 5: Contact & Lead Generation

### 5A. Enhanced contact form (`/src/app/contact/page.tsx`)
- New fields: first/last name, company, **service selector** (from services.ts), state/location, **preferred contact method** (radio), **file attachment**, "how did you hear about us"
- Reads `?service=` URL param to pre-select service dropdown
- **Create: `/src/app/api/contact/route.ts`** - API route for form submission + email via Resend
- **New dependency:** `resend` package

### 5B. CTAs on every page
- Every service page: "Get a Free Consultation About [Service Name]" → `/contact?service=[slug]`
- Every major section ends with contextual CTA (using `CTASection`)

### 5C. Free consultation offer
- **Create: `/src/components/FreeConsultationBanner.tsx`** - Reusable banner for homepage, service pages, blog sidebar
- **Create: `/src/app/free-consultation/page.tsx`** - Dedicated landing page with simplified form

### 5D. Floating contact widget
- **Create: `/src/components/FloatingCTA.tsx`** - Bottom-right button expanding to phone/email/form link options

---

## Phase 6: Dream Features

### 6A. Search functionality
- Client-side search using `flexsearch` indexing all data files
- **Create: `/src/components/SearchOverlay.tsx`** - Full modal with results grouped by category
- Wire into existing Header search button

### 6B. Training registration & payment (sub-phases)
1. Event listing with external registration links (Eventbrite etc.)
2. Built-in registration form + API route
3. Stripe payment integration (`stripe` + `@stripe/stripe-js`)
4. Self-learning modules (requires auth - NextAuth/Clerk - separate project)

### 6C. Chat (Phase II: AI chat)
- **Phase II target:** AI chat widget (Advocara integration) to build business—preferred over generic live chat.
- If Phase II not ready: interim third-party live chat (e.g. Crisp) in layout.tsx, lazy-loaded.

### 6D. Blog CMS
- Migrate from hardcoded to MDX files in `/src/content/blog/`
- Install `@next/mdx`, `gray-matter`, `remark`, `rehype`

### 6E. State/location customization (future)
- Explore state-by-IP lookup or AI-driven prompts to customize site/answers by state (e.g. surface TX RAS vs. CASp). Backlog; no implementation in current phases.

---

## Competitive Intelligence Summary

### Competitors Analyzed

**Tier 1 - Large Multi-Discipline Firms:**
- [Jensen Hughes](https://www.jensenhughes.com/services/accessibility) - accessibility as one line among fire/life safety; sells via expert credentialing, framing accessibility as design improvement
- [TERPconsulting](https://terpconsulting.com/) - project portfolio showcase (Fontainebleau, LA Chargers), 4 testimonials, stats ("15 engineers, 15 years, 5 offices")

**Tier 2 - Dedicated Accessibility Firms (direct competitors):**
- [Disability Access Consultants (DAC)](https://dac-corp.com/) - scale positioning ("one of the nation's largest"), proprietary DACTrak software; weak on testimonials/CTAs
- [Higgins & Associates](https://higginsassoc.com/what-we-do/accessibility-consulting/) - **strongest seller**: 8 testimonials, CTA after every section, 6 service categories, FAQ section, PE credentials
- [Accessibility Consultants (LA)](https://www.accessibilityconsultants.com/) - clean modern aesthetic, "Accessibility should be empowering, not complicated"; weak on social proof

**Tier 3 - Regional/State Specialists:**
- [Access IQ (TX)](https://www.accessiq-usa.com/) - **best regional seller**: published fee schedule ($350-$1,125), "GET STARTED" CTAs, two offices
- [Johnson Kelley (TX)](https://www.johnsonkelley.com/) - hard stats ("26,000+ reviews, 33 years"), action CTAs ("Fast Track Your Project"), loyalty programs
- [ADA Consultant Services (CA)](https://adaconsultantservices.com/) - **leads with pain point** ("You've been notified of a violation"), free exterior audit, YouTube videos, "400+ evaluations"

**ACS-identified competitors (add to intel as needed):**
- Steven Winters & Associates
- CSI

### Key Patterns ACS Lacks vs. Best Competitors

| Tactic | Who Does It Best | ACS Currently |
|--------|-----------------|---------------|
| Published fee schedules | Access IQ, Johnson Kelley | None |
| Client testimonials | Higgins (8), TERP (4) | None |
| Quantified stats | Johnson Kelley (26K reviews), Access IQ (thousands) | Vague "50+ years" |
| Named expert profiles w/ credentials | Jensen Hughes, Higgins | Team page lacks certifications |
| Project portfolio with descriptions | TERP (Fontainebleau, etc.) | Logo strip only |
| Free entry offer / lead magnet | ADA Consultant Svcs (free audit) | None |
| Video content / moving imagery | ADA Consultant Svcs (YouTube), TERP (polish) | None; plan adds hero motion/video option + video in Content Needed |
| CTA after every section | Higgins, Access IQ | Single contact page |
| Pain-point-first messaging | ADA Consultant Svcs | Feature-first messaging |
| FAQ sections | Higgins | None |
| Proprietary tech/tools | DAC (DACTrak) | None |

---

## Content Needed From ACS (not code)

Before or during implementation, ACS must provide:

1. **Testimonials** - 4-6 client quotes with permission
2. **Project descriptions** - for UN, Highmark Stadium, San Diego Zoo, Marriott, etc.
3. **Fee schedules** - TX RAS and CASp tiers
4. **TX RAS content** - TDLR form links, Texas regulatory details
5. **CASp content** - "Qualified defendant" explanation, CA regulatory details
6. **Team locations** - which office each member is based in
7. **Team credentials** - complete certification list per person
8. **Office addresses** - Texas and California office details
9. **Phone number** - for header and CTAs
10. **Quantified stats** - exact numbers for projects, years, states
11. **New imagery** - architectural drawings, accessible features, team on-site (high-res; crisp graphics). **Video (optional):** hero or short explainer/testimonial clip for moving imagery
12. **FAQ content** - common questions per service
13. **Training schedule** - upcoming events if any
14. **ACS vs. United Spinal positioning copy** - approved wording for "for-profit subsidiary," "we work with architects/contractors," "mission-focused experts," and avoiding nonprofit confusion
15. **Optional (if state pages expand later)** - OK, FL, NY service/SEO content and keywords

---

## New Dependencies

| Package | Phase | Purpose |
|---------|-------|---------|
| `resend` | 5A | Contact form email delivery |
| `flexsearch` | 6A | Client-side search |
| `stripe` + `@stripe/stripe-js` | 6B | Training payment |
| `@next/mdx` + `gray-matter` | 6D | Blog CMS |

Phases 1-4 require **zero new dependencies**.

---

## Verification

After each phase:
1. `npm run build` - must compile with zero errors
2. `npm run dev` on port 3020 - visually verify all pages
3. Test responsive at mobile (375px), tablet (768px), desktop (1280px)
4. Verify all internal links work (no 404s)
5. Lighthouse audit: target 90+ on Performance, Accessibility, SEO
6. After Phase 5A: test form submission end-to-end (submit → email received)
