# ACS Website Redesign — Plan Options

The ACS website can be improved in phases. One phase (initial rewrite) is foundational, but can be accelereated and done at moderate cost with modern AI-powered tooling.

From that foundational rewrite, two proposed add-ons are recommended:
- Phase II: Moving images / video · Filterable projects · Messaging review
- Phase III: AI chat · Editable content (CMS)


---

## Phase I: Initial rewrite (required)

**Goal:** Replace the current site with a single, coherent, professional site that reflects ACS priorities. This is the **minimal viable redesign** — one clear deliverable that can go live.

Phase I establishes a consistent, maintainable base so the site can grow without redoing structure:

- Consistent look and feel through re-use
   - common page headers
   - copy is used in multiple places to avoid copy/paste errors and maintenance headaches. E.g. services in separate serice pages, but also in small service preview blocks on the main page. Testimonials used wherever a page needs to establish trust, etc.
   - consistent color and typography
   - templates for common elements to make additions easier later: service page template, blog post template, articles

These are the “foundation” that all later phases rely on.

#### Technologies
Suggest modern web site (next.js) hosted on Vercel. This is a more "code-oriented" approach that is far easier for modern AI tools to consume and modify, vs older builders like wordpress or wix.

Vercel provides low hosting cost and many features such as previews of any new change before it is deployed.

### Homepage (initial / phase I)

Phase I delivers a new homepage with these elements, each explained for non-technical stakeholders:

| Element | What it is |
|--------|-------------|
| **New hero** | The main banner at the top of the site: an inspiring main image (or placeholder), a clear pain-point headline (e.g. facing a compliance deadline), and two calls to action (Free Consultation, View Services). |
| **Trust stats** | A short row of numbers that build credibility (e.g. years in business, projects completed, states served, certified specialists). |
| **Service cards** | Blocks on the main page that summarize each offering in a few lines with a headline and link. These are *not* full per-service pages — they are shorter teasers so visitors can quickly see what ACS does and click through to the right place. Full per-service pages are also included. |
| **“Why Choose ACS?”** | A section that states value and differentiates ACS (including the relationship to United Spinal) in clear, benefit-focused language. |
| **Differentiators** | Key reasons to choose ACS must appear on the site: e.g. **national scope**, **strong reputation**, and **consultants with many years of experience**. These are called out in “Why Choose ACS?” on the homepage and reinforced on the About page (and optionally in service or footer context). |
| **Testimonials** | A rotating strip of short client quotes to build trust. |
| **Blog strip** | A few recent posts with titles and links so the site feels current. |
| **CTA band** | A full-width strip near the bottom (e.g. “Schedule your free consultation”) that drives visitors to contact or book. |


### Core pages (Phase I)

Phase I includes a focused set of core pages that **organize content so different prospects can find what they need** and see **messaging tailored to their role** (e.g. architect, contractor, developer, attorney). That structure is also **important for SEO**: clear sections and later per-service pages help search engines and visitors match intent (e.g. “Texas RAS” or “CASp”) to the right content.

| Page | Phase I scope |
|------|----------------|
| **About** | Mission, brief history/timeline, positioning (ACS and United Spinal), **differentiators** (national scope, reputation, depth of experience), accreditation. |
| **Team** | Profiles with locations and credential badges so visitors see who they’ll work with. |
| **Consulting** | Overview of consulting services with short blocks (cards) for each offering, including state-specific callouts (e.g. TX RAS, CASp). |
| **Projects** | A curated list or grid of projects with names, sectors, and short descriptions. **Filtering by sector/type is Phase II** to keep the Phase I foundation smaller. |
| **Training** | Offerings and upcoming events in a clear list. |
| **Contact** | Enhanced form (service of interest, file upload, etc.) that submits to ACS, plus CTAs on key pages. |
| **Service Pages** | (dedicated pages for TX RAS, CASp, inspection, technical assistance, universal design, with full detail, fee schedules, and regulatory links) are key for SEO and conversion once the phase I site rewrite is live.|

### Navigation (Phase I)

- **Header:** Main menu with a **dropdown for Services** (click or hover opens a panel of service links), so visitors can reach consulting, state-specific services, training, and contact without scrolling. Phone number and a prominent “Free Consultation” (or similar) button in the header.
- **Footer:** Four columns — who we are, services, company links, contact — plus a row of accreditation logos (e.g. AIA, ICC, United Spinal).

### Look and feel update (phase I)

Phase I raises the bar from the current site in concrete ways:

| Current site | Phase I improvement |
|-------------|---------------------|
| Generic or flat visuals | Architectural and construction-focused aesthetic; consistent colors and typography. |
| Static or basic menus | Dropdown menus that open and close smoothly, with clear hover states so the site feels responsive. |
| Little or no social proof | Trust stats, credential badges, and a testimonial strip. |
| Single “Contact” destination | Multiple, contextual calls to action (e.g. by service or section) so visitors are guided to the next step. |
| Inconsistent layout and tone | Reusable components and one design system so every page feels part of one professional site. |

Video or moving hero imagery pushed to Phase II and will also help give a modern feel.

### Calls to action, pain points, and conversion

**Pain points** (e.g. “Facing an ADA compliance deadline?” or “Received an ADA lawsuit in California?”) speak directly to the visitor’s situation. **Differentiated content** (e.g. separate emphasis for Texas vs. California, or for architects vs. attorneys) matches what each prospect type cares about. **Calls to action** (buttons and links to contact, book a consultation, or view a service) turn that relevance into a next step.

Threading pain-point headlines, prospect-specific messaging, and clear CTAs through the site supports both SEO (search engines and users find the right pages) and **conversion** (visitors know why to submit their details or book a meeting). Phase I builds this pattern into the homepage and core pages; Phase II can extend it to full per-service pages and deeper messaging.

### Copy and imagery in Phase I

- **Copy:** Use existing solid copy where it fits. Any new or revised copy (e.g. positioning, pain-point headlines) should be **treated as paid work** — either as a defined line item in Phase I or a separate copy engagement (audit, ownership, consistency).
- **Imagery:** Phase I can use existing or temporary images where needed. 

**Open question:** Who generates creative imagery?
Option 1: Advocara uses sora or similar to generate images (we did 4 already to prep)
Option 2: ACS provides images - from existing site or new images as needed


### Summary of Deliverable for Phase I

A complete, launch-ready site: new homepage with hero, trust stats, service cards, **differentiators** (“Why Choose ACS?” plus national scope, reputation, experience), testimonials, and CTAs; all core pages (About, Team, Consulting, Projects, Training, Contact) including **differentiators on About**; clear navigation with Services dropdown and prominent contact path; professional look and feel with consistent design and social proof; and working contact form and lead-generation flow. Responsive, fast, and hosted on Vercel.

---

## Phase II Option 

Phase II adds richness and refinement on top of the Phase I foundation. Items can be scoped and scheduled independently.

### Moving images and video

- Hero: background video or subtle motion (e.g. slow zoom on hero image).
- Optional: short explainer or testimonial video on the homepage or About page.
- Requires: Phase I in place; video or motion assets (from ACS or produced separately).

### Filterable projects

- Replace the Phase I project list with a filterable portfolio (e.g. by sector: retail, hospitality, education, civic, etc.) so prospects can find relevant work quickly.
- Supports SEO and credibility.

### Messaging review and USp vs. ACS positioning

- Iterate headlines, value props, and “Why Choose ACS?” with ACS.
- **Recast the United Spinal vs. ACS relationship as a clear positive:** e.g. “mission-focused experts with deep experience and reach-back to wheelchair users and disabled communities”; “a subsidiary of United Spinal, so we really know the issues deeply and care about them”; and “a fully independent, responsive commercial entity focused on architecture, construction, and accessibility consulting.” The goal is to avoid confusion while highlighting expertise and independence.

This can move to Phase I also

### Per-offering pages (Phase II option)

- Dedicated pages for each offering (TX RAS, CASp, inspection/certification, technical assistance, universal design) with pain-point headlines, fee schedules, regulatory links, state office emphasis, FAQs, and CTAs.
- Key for SEO and for directing the right prospects to the right content.

### Refined imagery 

Initial image updates in Phase I. Extensive review of all imagery, what can be moving vs static, how imagery fits with messaging take longer because AI image gen tools are powerful but require multiple slow iterations. 

Rework may be needed if assets are not quite right; Phase I structure makes swapping images straightforward.

For this reason, extensive imagery changes pushed to Phase II

---

## Phase III: Advanced features 

The biggest revenue impact, and also of particular business interest to advocara, is adding a small chatbot that engages users and helps book meetings.

### AI chat

- **Goal:** Encourage the visitor to engage and meet (e.g. submit contact details or book a consultation).
- **Flow:** Ask what they need; ask their state if relevant; explain why they should share their email or book a consultation (e.g. via Calendly or similar).
- Can be state-aware (e.g. surface TX RAS vs. CASp) to support conversion.
- Implementation option: Advocara or equivalent; depends on Phase I being live and, ideally, industry phrasing and per-service content from Phase II.

### Editable content (CMS)

- Blog posts and selected content (e.g. training offerings, events) editable in a **user-friendly web portal** (e.g. Sanity Studio or similar) so ACS can publish and update without touching code.
- Enables regular updates and keeps the site current.

---


## Ideally use existing materials to guide the redesign and content

AI generation will keep quality high and costs down in some areas. Human review and edits are still needed and will be included.

To assist, other content that clarifies terminology, selling points and messaging is helpful. This may include:

- existing proposals, RFP responses, capability statements, and project write-ups

Goal is to generate proof points, ideal language, and distill differentiators.

