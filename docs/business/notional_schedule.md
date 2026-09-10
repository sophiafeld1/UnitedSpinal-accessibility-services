# ACS Website — Notional Phased Schedule

**Purpose:** Working plan to support a **statement of work (SOW)** and **contract**. Dates are **notional** until agreed with ACS; this document maps **what is already built**, **what ACS must supply**, and **suggested phase boundaries** so work can be funded and delivered incrementally—not as a single big bang.

**Sources:** `docs/plan/PROGRESS.md` (last updated 2026-02-18), `docs/requirements/usp_needs_notes.md` (call notes), `docs/requirements/ACS_priorities.md` (prioritized page/feature list).

---

## 1. Baseline (already in code)

Per `docs/plan/PROGRESS.md`, the following are largely **complete in the repository**:

- Data layer (`/src/data/`), shared components, theme tokens, dynamic service/blog routes  
- Homepage redesign (hero, StatBar, testimonials section, blog teaser, CTA band)  
- Service pages (including TX RAS, CASp, inspection, technical assistance, universal design) with shared patterns (headlines, FAQs, related services, CTAs)  
- Team (filters, credentials where present), Projects (vertical filters), Consulting, Training, About (timeline, accreditations)  
- Header mega-menu, footer, contact and free-consultation **UI**, floating CTA  
- Static generation: **24 pages**, build clean  

**Explicitly out of early phases (defer unless SOW expands):**

- Client-side search (`flexsearch`) — listed as Phase 6 / dream  
- Training registration, payment, certificates — Stripe + auth; **no automated training integration** in initial phases unless added by change order  
- Live chat (e.g. Crisp)  
- Full blog CMS (MDX pipeline)  
- “Ask an expert” paid TA flow  

These stay on a **backlog** for later SOW amendments.

---

## 2. Priority framework (for SOW language)

Priorities tie **launch risk** and **trust/credibility** to `docs/plan/PROGRESS.md` “Content Needed From ACS” and **Known Issues**. **IDs are stable** (no priority baked in); change rank in the **Priority** column or in the shared tracker without renaming rows.

**Priority meanings (default):**

- **P0** — Must fix or obtain before a serious “go-live” decision  
- **P1** — Strongly desirable for a “professional” launch; can trail P0 slightly  
- **P2** — Nice to have; post-launch or later phases  

**ID prefix meanings** (first letter only; number is arbitrary order within that bucket):

| Prefix | Meaning |
|--------|---------|
| **T-** | **Technical** — implementation, wiring, or code/UX fixes (vendor-led unless noted) |
| **C-** | **Content** — copy, assets, facts, or approvals supplied mainly by ACS (may need vendor to publish) |
| **R-** | **Review / alignment** — workshop, positioning, or thematic decisions (typically joint) |
| **F-** | **Follow-on** — deferred enhancements; often post-launch or separate change order |

| ID | Priority | Item | Owner | Notes |
|----|----------|------|--------|------|
| T-01 | P0 | Contact form delivers to ACS/USp email | Vendor | `PROGRESS`: Resend API route scaffolded, not wired; replace `alert()` behavior |
| C-01 | P0 | Phone number (header, CTAs) | ACS | Not on site today |
| C-02 | P0 | Quantified stats (years, projects, states, specialists) — **accurate** | ACS | StatBar exists; numbers must be validated |
| C-03 | P0 | Real testimonials (4–6, with permission) | ACS | Placeholders today |
| C-04 | P0 | TX RAS: TDLR links, regulatory detail, fee schedule (if promised) | ACS | ACS priorities: forms + fee schedule for smaller projects |
| C-05 | P0 | CASp: qualified-defendant explanation, CA regulatory detail, fee schedule (if promised) | ACS | Aligns with priorities + call notes (SEO terms) |
| C-06 | P0 | CA + TX office addresses/contact lines (not only NY HQ) | ACS | Call notes + priorities emphasize state offices |
| R-01 | P0 | Team review: tone, positioning, industry focus (arch/contract vs medical/insurance) | Joint | `docs/requirements/usp_needs_notes.md` — **thematic**; may drive copy/layout on key pages |
| C-07 | P1 | Project write-ups (UN, Highmark Stadium, San Diego Zoo, Marriott, Urban Edge) | ACS | |
| C-08 | P1 | Team credentials complete; office location per member | ACS | Many creds missing; locations default NY |
| C-09 | P1 | Service imagery (TX RAS, CASp, Inspection, TA, Universal Design) | ACS / Vendor | Better assets per ACS priorities aesthetic |
| C-10 | P1 | FAQ expansion per service | ACS | |
| C-11 | P1 | Legal defense / expert witness page depth | ACS + Vendor | Listed in ACS priorities as its own emphasis area |
| T-02 | P1 | Header search **or** remove/hide until implemented | Vendor | Avoid dead-end UX |
| T-03 | P1 | Font/token cleanup (`layout.tsx` vs `globals.css`) | Vendor | Technical debt from PROGRESS |
| F-01 | P2 | Blog: full posts + sustainable update process (lightweight CMS or workflow) | Mixed | |
| F-02 | P2 | Training: real schedule; link-out to PaaS (e.g. Thinkific) without full native payment in v1 | Mixed | |
| F-03 | P2 | Consult scheduling (Calendly, etc.) | Mixed | |
| F-04 | P2 | State landing pages (CA, TX, OK, FL, NY) for SEO | Mixed | Call notes |
| F-05 | P2 | Motion/video, richer visual polish | Mixed | Competitor benchmark in notes |
| F-06 | P2 | Unused images in `public/images/new/` integrated or removed | Vendor | |

---

## 3. Phased schedule (notional)

Assumptions:

- **ACS content turnaround:** **2 weeks** from request to delivered copy/approvals for items that block a phase exit (adjust in contract).  
- **Calendar slack:** ACS may prefer slower periods; phases can **pause at milestone boundaries** without re-scoping completed work, if the contract allows hold points.  
- **Rough vs launchable:** Phase I ends with a **review-ready** site; Phase II targets **publishable** once P0 content and P0 tech are in place.

### Phase I — Stabilize platform, P0 technical, thematic alignment (~3 weeks)

**Week 1**

- Internal/vendor pass: confirm build, hosting assumptions, and production checklist.  
- Implement **T-01** (contact delivery) once ACS provides target inbox/domain DNS any requirements.  
- Workshop with ACS: positioning, audience (architects/contractors/owners), USP vs United Spinal confusion, state-office messaging. Produce a **short decision log** (bullet priorities for copy).  
- Publish backlog (IDs + **Priority** column) in shared tracker; ACS marks owners and due dates.

**Week 2**

- Implement **P0** items that do **not** depend on ACS (e.g. hide broken search if agreed, small UX fixes).  
- Apply **first-pass copy/layout** updates from workshop on **home + consulting** (or agreed subset)—scoped to decisions, not full rewrite of all pages.  
- **ACS request package:** testimonials template, stats confirmation, phone, office addresses, TX/CASp fee and regulatory inputs, logo/legal approvals if needed.  
- **Due from ACS within 2 weeks** of package send for Phase I closure items that need content (see Week 3).

**Week 3**

- Integrate whatever ACS returns by agreed date; stub or clearly mark remaining gaps.  
- **Exit criteria (Phase I):** Contact path works end-to-end (or explicitly staged to staging-only if email not ready); no known **broken** critical UX; thematic direction documented; **P0 content gaps** listed with dates.  
- **Explicit non-goal:** Site may still be **not launchable** (placeholder testimonials, missing phone, etc.).

**Payment milestone (notional):** **25–30%** of fixed fee on Phase I acceptance (defined in SOW: e.g. deployed preview + checklist + ACS sign-off on direction).

---

### Phase II — Trust content + CA/TX depth; “publishable” (~3–4 weeks after ACS P0 package)

**Depends on:** ACS meeting the **2-week** turnaround for P0 content **or** contract allowing proceed with placeholders for any late items.

**Weeks 1–2 (vendor)**

- Replace placeholders: **testimonials**, **stats**, **phone**, **offices**.  
- TX RAS + CASp: regulatory copy, links, fee presentation per ACS-approved content.  
- Team: locations and credentials **as provided**.  
- Optional: **P1** project blurbs if delivered in this window.

**Week 3**

- QA, accessibility spot-check, broken-link pass, mobile pass.  
- **Exit criteria (Phase II):** All items currently ranked **P0** satisfied **or** explicitly waived in writing by ACS; **P1** gaps documented for Phase III/IV.  
- **Goal:** Site **can be published** if ACS chooses (DNS, hosting, analytics as separate tasks).

**Payment milestone (notional):** **25–30%** on “publish-ready” acceptance (staging or production per SOW).

---

### Phase III — Deep iteration: first set of major pages (~4 weeks)

**Target cadence:** about **one major page per week**, or **2–3 pages per 2 weeks**—whichever matches ACS review capacity.

**Suggested first four (adjust with ACS):**

1. Homepage (messaging, visuals, service grid alignment with priorities)  
2. Consulting (+ plan review / inspection themes per `docs/requirements/ACS_priorities.md`)  
3. TX RAS  
4. CASp  

**Per page:** content revision from ACS feedback, SEO pass for agreed keywords (e.g. CASp, qualified defendant, RAS, TDLR), CTA and contact pre-fill verification.

**Exit criteria:** Four pages signed off; remaining issues logged with **P1** / **P2** priority in the tracker.

**Payment milestone (notional):** **15–20%** on Phase III sign-off.

---

### Phase IV — Remaining major pages (~4 weeks)

**Suggested remaining (4–5 pages, pick order with ACS):**

- Training (content + **link-out** to schedule/PaaS; **no** native paywall unless change order)  
- Projects / client list  
- About (team depth, locations)  
- Technical assistance (+ blog links as stubs or real posts)  
- Legal defense / expert witness (if not merged into consulting)  
- Contact / Free consultation (polish, analytics events if desired)  

**Exit criteria:** Agreed page set complete per backlog; handoff doc (how to update data files or future CMS).

**Payment milestone (notional):** **15–20%** on Phase IV sign-off.

**Retention / final (notional):** **5–10%** on warranty period end (e.g. 30 days post-launch bug-fix window)—define in contract.

---

## 4. Timeline rollup (illustrative)

| Phase | Duration (vendor effort) | Parallel ACS obligation |
|-------|---------------------------|-------------------------|
| I | ~3 weeks | 2-week content turnaround for Phase I close items |
| II | ~3–4 weeks | P0 assets/copy; approvals within 2 weeks of each request where possible |
| III | ~4 weeks | Page-by-page feedback within **~5 business days** ideal; 2 weeks max per round if needed |
| IV | ~4 weeks | Same as III |

**Total notional elapsed:** ~14–15 weeks of **sequential** vendor work, **plus** ACS latency. Real-world calendar often **longer** if ACS uses flexible scheduling—contract should define **milestone dates** from ACS delivery dates, not only clock time.

---

## 5. Contract-friendly clauses (summary bullets)

- **Change order** for scope outside phased backlog (search, Stripe training, chat, CMS, state IP personalization, etc.).  
- **Dependency clause:** Vendor timeline extends **day-for-day** (or as capped) when ACS misses agreed content dates.  
- **Acceptance:** Written sign-off per phase; **two rounds** of revision per page included unless SOW says otherwise.  
- **Out of scope v1:** Automated training registration/payment, live chat, full CMS, flexsearch—unless added later.

---

## 6. Next steps toward SOW

Draft statement of work: `docs/business/SOW_main_ACS_site.md`.

1. ACS confirms **P0/P1** list and **which “major pages”** belong in Phases III vs IV.  
2. Fix **Phase I workshop** date and **first content due date**.  
3. Attach this schedule as **Appendix A**; attach **backlog spreadsheet** as **Appendix B**.  
4. Legal reviews **payment terms**, **IP**, **warranty**, and **liability** (not covered in this technical schedule).

---

*This file is a planning artifact only; it does not constitute a binding agreement.*
