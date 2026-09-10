# ACS Website Redesign - Analysis Notes

Supporting research and detailed findings behind the implementation plan.

---

## 1. Original Site Content Inventory

### All content scraped from https://accessibility-services.com/

**Homepage Hero Text:**
> "Making Our Built Environment Accessible"
> "Accessibility Services is a team of certified accessibility specialists, plan examiners, attorneys, architects, and code enforcement officials who are skilled in applying state and federal accessibility requirements, including, the 2010 ADA Standards, the Fair Housing Act Accessibility Guidelines, UFAS, and state/local accessibility requirements to your project."

**Homepage About Section Text:**
> "Accessibility Services is proud to be recognized on the Forbes Accessibility 100 List for our commitment to inclusive design and accessibility. We're a Registered Provider for the International Code Council and an American Institute of Architects Approved Provider of Continuing Education"

**About Boxes (4):**

1. **Accessibility Services** - "With our decades of experience, Accessibility Services can help you navigate the often conflicting requirements of aesthetics and accessibility. We will keep you updated on changes and revisions in building codes at all levels, offering innovative solutions to accessibility for any facility."

2. **Accessibility Consulting** - "We work with you throughout your project, from reviewing architectural plans to site inspections and every step in between. Frequently overlooked aspects of building design, such as the placement of grab bars, doorway widths and ramp slopes, can create insurmountable difficulties for people with disabilities."

3. **Accessibility Training** - "Accessibility Services is a widely respected, registered provider of continuing education for the American Institute of Architects (AIA) and the International Code Council (ICC). We offer custom-designed training programs tailored to your needs and conveniently presented at your facility or virtually."

4. **A Program of United Spinal Association** - "Accessibility Services is renowned for its exclusive dedication to making our built environment accessible to people with disabilities. A proud program of United Spinal Association, a national nonprofit serving wheelchair users, our unique expertise sets us apart and instills confidence in our clients."

---

### Team Members (complete data from original site)

| Name | Title | Email | Image File |
|------|-------|-------|------------|
| Adam Berger | Senior Accessibility Consultant | aberger@accessibility-services.com | adam-berger.jpg |
| Bernardo Deschamps | Accessibility Compliance Specialist | bdeschamps@accessibility-services.com | bernardo-deschamps.png |
| Bill Hudson | Accessibility Compliance Specialist | whudson@accessibility-services.com | bill-hudson.jpg |
| Dominic Marinelli | Vice President | DMarinelli@accessibility-services.com | dominic-marinelli.jpg |
| Ivan Heredia, AIA | Architect | IHeredia@accessibility-services.com | ivan-heredia.jpg |
| Jimmy Zuehl | Senior Accessibility Compliance Specialist (CASp, NYS-CEO, ICC-AIPE) | jzuehl@accessibility-services.com | jimmy-zuehl.jpg |
| Kleo King | Senior Director of Accessibility Operations & Counsel | kking@unitedspinal.org | kleo-king.jpg |
| Marsha Mazz | Director of Accessibility Codes and Standards | mmazz@accessibility-services.com | marsha-mazz.jpg |
| Nathan Roether | Accessibility Compliance Specialist, Accessibility Inspector/Plans Examiner | nroether@accessibility-services.com | nathan-roether.jpg |
| Patrick Joksimovic | Accessibility Compliance Specialist | PJoksimovic@accessibility-services.com | patrick-joksimovic.jpg |
| Travis Monroe | Accessibility Compliance Specialist | tmonroe@accessibility-services.com | travis-monroe.jpg |

**Notable bios:**
- **Bill Hudson** - "one of approximately 800 certified Master Code Professionals worldwide"
- **Dominic Marinelli** - "over 35 years of experience", heads the program
- **Ivan Heredia** - "registered architect with 11 years of comprehensive experience"
- **Jimmy Zuehl** - "over 20 years of experience in architecture" (has CASp, NYS-CEO, ICC-AIPE certs in title)
- **Kleo King** - "began her career with United Spinal in 1987" (legal counsel)
- **Marsha Mazz** - "headed the United States Access Board's Office of Technical and Information Services" (developed federal accessibility guidelines)
- **Nathan Roether** - "focal point of Accessibility Services operations in the Midwest"

**Credentials extractable from titles:**
- Ivan Heredia: AIA
- Jimmy Zuehl: CASp, NYS-CEO, ICC-AIPE
- Kleo King: JD (implied from "Counsel" title)
- Nathan Roether: Accessibility Inspector/Plans Examiner

**Note:** Most members' credentials are NOT visible in their titles. ACS should provide full certification lists.

---

### Service Pages Content

**Site Assessment:**
> "One of our trained professionals will tour the facility and discuss your concerns. A comprehensive report is prepared which summarizes the site visit and contains design solutions in the form of plans and specifications that address all the issues discovered during the site visit."

**Design and Consultation:**
> "Depending on your requirements, we can develop conceptual drawings for your project as well as construction documents. We are a premier resource for architects and building owners for design assistance to incorporating accessible elements into a project."

**Plan/Code Review:**
> "We will perform a comprehensive and accurate review of your plans, in a timely fashion, for compliance with applicable accessibility codes."

**Expert Witness:**
> "Our expert witnesses are knowledgeable on matters related to Americans with Disabilities Act (ADA) Compliance."
> "The work of the ACS team has become essential in responding to the epidemic of accessibility-based lawsuits by firms and individuals who are looking for financial settlements more than improvements."
> "Drive-by accessibility lawsuits have become a cottage industry."

**Consulting (hub page):**
> "We will get your project through the myriad of state and federal accessibility requirements to successful completion."
> "When you work with Accessibility Services, you get an entire team for the same cost as a single consultant."

---

### About Us Page Content

> "We helped write the landmark Americans with Disabilities Act," plus the Air Carrier Access Act and Fair Housing Amendments Act.
> They actively collaborate with jurisdictions on building code updates and partner with the International Building Code Council on accessibility standards.

**Services listed:**
- Plan reviews for new construction and renovations
- Construction site inspections for compliance monitoring
- Existing building accessibility assessments
- Expert witness services for legal compliance support
- Ongoing technical assistance throughout projects

---

### Projects Page Content

> "From giant sports stadiums to mom-and-pop restaurants, we have provided accessibility consulting services for a wide range of projects."

**Named clients (logo strip):** United Nations, Highmark Stadium, San Diego Zoo, Marriott, Urban Edge Properties

**Service areas listed:** Architectural Firms, Commerce and Industry, Education Facilities, Hotels, Local/State/Federal Government Administration, Mass Transit, Medical Facilities, Museums, Recreation

---

### Training Page Content

> Recognized continuing education provider for AIA and ICC.
> Delivers specialized training programs customized to client requirements, offered either at client locations or via virtual formats.

Photo caption: "Dominic Marinelli, VP of Accessibility Services, training at a conference in Florida."

---

### Contact Page

**Address:** 102 Duane Road, Fort Totten, NY 11359
**Note:** No phone number found anywhere on the site.

---

### Footer Content

> "We are an AIA/CES Approved Provider of Continuing Education for the American Institute of Architects (AIA) as well as a registered provider for the International Code Council (ICC) and other professional organizations."
> "Accessibility Services is a program of United Spinal Association."

---

### Blog Posts (3 total on site)

1. "Accessibility Services Named in Forbes' first-ever Accessibility 100."
2. "What is required for a business to make its doorway accessible?"
3. "Accessibility Services Helps Museums Like This One Become Disability-Inclusive"

---

## 2. Original Site Technical Details

- **Platform:** WordPress 6.9.1
- **Theme:** construction-hub-pro (by Themespride)
- **CSS Framework:** Bootstrap (loaded from theme)
- **Fonts loaded:** PT Sans, Roboto, Roboto Condensed, Open Sans, Overpass, Montserrat, Playball, Poppins, Source Sans Pro, and ~60+ others (massive Google Fonts load)
- **JS:** jQuery 3.7.1, Bootstrap JS, Owl Carousel, Superfish, SmoothScroll, custom.js
- **Analytics:** Clicky (site ID 207007), Pardot (piAId 1039263, piCId 43028, hostname info.accessibility-services.com)
- **SEO:** Yoast SEO plugin v27.0
- **Caching:** WP-Optimize with gzip
- **SSL verification:** GlobalSign domain verification meta tag present
- **Team plugin:** "team-showcase-supreme" plugin

**Pardot note:** The existing site uses Pardot (Salesforce) for marketing automation. This is relevant for Phase 5 CRM integration -- the contact form may need to submit to Pardot rather than (or in addition to) a generic email service.

---

## 3. ACS Webpage Priorities Document - Full Analysis

### What the PDF gets right:
- Correct identification of all service lines that need pages
- Good instinct on TX RAS and CASp as distinct market verticals
- Contact form requirements are practical and specific
- Project categorization by vertical is the right approach
- Training expansion (modules, registration, certification) is forward-thinking

### What the PDF misses:

**Conversion strategy:**
- No mention of testimonials or social proof anywhere
- No discussion of CTAs beyond "include link to contact form"
- No lead magnets (free consultation, free audit, free guide)
- No mention of pain-point messaging vs. feature-first messaging

**SEO/Content:**
- No keyword strategy per page
- No blog content cadence or topic plan
- No local SEO for TX and CA offices (Google Business profiles)
- No mention of schema.org structured data (current site has basic Yoast schema)

**Analytics & tracking:**
- No mention of what happens after form submission (CRM workflow)
- No analytics requirements (current site uses Clicky + Pardot)
- No conversion tracking goals defined

**Accessibility (ironic gap):**
- No mention of WCAG compliance for their own site
- For an accessibility consulting firm, their site should be a showcase of best practices
- Should include an accessibility statement page

**Mobile:**
- No mobile-specific requirements mentioned
- No consideration of AMP or mobile-first design

**Missing pages the PDF doesn't mention but competitors have:**
- Resources/downloads page (guides, checklists, whitepapers)
- Careers page
- News/press page (Forbes mention deserves its own press section)
- Accessibility statement page
- Privacy policy / terms of service

### The "Dream Functions" are undersized:

| Feature | PDF calls it "dream" | Reality |
|---------|---------------------|---------|
| Live chat | Dream | One-day integration (Crisp, Tawk.to) |
| Contact form with attachments | Dream | Standard form feature |
| Training registration + payment | Dream | Stripe + booking = 3-5 days |
| "Ask an Expert" for a fee | Dream | Calendly + Stripe = 1 day |
| Training completion certification | Dream | PDF generation = 1-2 days |

---

## 4. Detailed Competitor Analysis

### Disability Access Consultants (DAC) - https://dac-corp.com/
- **Founded:** 1998
- **Positioning:** "One of the nation's largest consulting firms specializing in accessibility compliance"
- **Key differentiator:** Proprietary technology -- DACTrak (web-based reporting) and DACTrak Mobile
- **Services:** Facility surveys, compliance management tools, self-evaluation analysis, policies review, expert witness, plan reviews
- **Pricing:** "Low cost, effective barrier removal solutions"
- **CTAs:** Passive "view more" links. Phone (800) 743-7067 repeated in header/body/footer
- **Social proof:** 2010 ADA Green Award. No testimonials, no client logos, no case studies
- **Weakness:** Dated design, no conversion optimization, no testimonials
- **What ACS can learn:** The proprietary technology angle (DACTrak) is a differentiator ACS doesn't have. Consider whether ACS's reporting/deliverable format could be productized.

### Higgins & Associates - https://higginsassoc.com/what-we-do/accessibility-consulting/
- **The strongest seller in the competitor set**
- **Services organized into 6 categories:** ADA Compliance, FHA Support, Compliance Consulting, Plan Review & Field Verification, Insurance Compliance, Expert Documentation
- **Core messaging:** "Bridging the gap between legal requirements and real-world accessibility"
- **Communication style:** "Clear communication over jargon" -- explicitly anti-jargon positioning
- **8 testimonials** with names and titles. Quote example: "Their ability to tackle complex engineering challenges with efficiency"
- **CTAs:** "Get a Consultation" after EVERY service description + "Speak to our Experts" + "Request a Consultation"
- **FAQ section** addresses common concerns
- **Credentials:** P.E. licenses, NCEES records displayed
- **What ACS should copy:** CTA placement strategy (after every section), testimonial integration, FAQ section, credential display approach

### Access IQ (TX) - https://www.accessiq-usa.com/
- **Best regional seller**
- **Target:** Commercial construction projects in Texas costing $50,000+
- **Positioning:** "Your Trusted Advisor for third-party verification services since 2008"
- **Three services:** TAS Plan Review, TAS Inspection, Consulting
- **Published fee schedule (key competitive intel):**
  - Based on construction cost tiers
  - Range: $350 - $1,125+ for combined services
  - Travel expenses and registration fees excluded
- **CTAs:** "GET STARTED" buttons prominent on every service section
- **Stats:** "Thousands of projects", "Senior-level staff"
- **Offices:** Dallas HQ + Houston office
- **What ACS should copy:** Published fee schedule format, "GET STARTED" action CTAs, clear targeting of construction cost threshold

### Johnson Kelley Associates (TX) - https://www.johnsonkelley.com/
- **Oldest TX RAS firm** - "33 year milestone"
- **Hard stats:** "Over 26,000 reviews to date" -- the most specific quantification in the competitor set
- **Contract provider** for State of Texas TDLR since 1995
- **Consulting for 700+ properties** across the US
- **Action-oriented CTAs:** "Fast Track Your Project", "Register Project", "Submit A Project", "Schedule An Inspection"
- **Unique:** Loyalty programs -- gift cards, 10% discounts
- **Fee schedule:** Available via PDF download (not inline)
- **Weakness:** Dated website design, no testimonials, references "available upon request"
- **What ACS should copy:** Hard quantified stats, action-verb CTAs, the concept of making project submission easy/fast

### ADA Consultant Services (CA) - https://adaconsultantservices.com/
- **Strongest pain-point-first messaging**
- **Opens with:** "You've been notified of a Disabled Access violation, What do you do now?"
- **Positions compliance as:** "Asset protection" and cost-avoidance
- **Risk messaging:** "Much less expensive to comply on your own than to pay fines"
- **Free lead magnet:** Free exterior audit
- **Video content:** Embedded YouTube videos (parking violations, free audit walkthrough)
- **Services:** CASp Inspections, Expert Witness, Consultation, EV Charging Station Reviews, Plan Review
- **Unique service:** EV Charging Station accessibility reviews (emerging niche)
- **Founder credentials:** "Represented hundreds of clients", "performed more than 400 accessibility evaluations", admitted to practice in CA/NV/federal courts
- **What ACS should copy:** Pain-point-first homepage headline, free audit lead magnet, video content strategy, the EV charging angle as a new service opportunity

### TERPconsulting - https://terpconsulting.com/
- **Model:** Fire protection engineering + accessibility (multi-discipline)
- **Project portfolio hero slider:** 10 completed projects (Fontainebleau, University of Colorado, LA Chargers facility)
- **Stats:** "15 licensed engineers", "Celebrating 15 years", multi-office
- **4 testimonials** from named individuals with companies
- **Contact form** embedded at footer with project detail fields
- **CTA:** "Contact Us Today" repeated strategically
- **What ACS should copy:** Project portfolio as hero content, testimonial format with names/titles/companies

### Jensen Hughes - https://www.jensenhughes.com/services/accessibility
- **Large firm model** - accessibility is one service line among many
- **Four service segments:** New Construction, Existing Facilities, Specialty Areas, Additional Offerings
- **Expert profiles** with direct contact info, certifications (NCARB, CASp, RAS)
- **Framing:** Accessibility as "holistic design improvement" benefiting all users, not compliance burden
- **Pain point acknowledged:** "Accessibility is impacted by overlapping laws, codes, standards, and initiatives which can make it more challenging"
- **Related content strategy:** Articles on EV charging accessibility, sensory rooms, Canadian standards
- **Geographic reach:** US regions + Australia
- **What ACS should learn:** The framing of accessibility as design improvement (not compliance burden) is sophisticated. The related content/blog strategy drives SEO.

### Accessibility Consultants (LA) - https://www.accessibilityconsultants.com/
- **Clean, modern aesthetic** - best-looking site in the competitor set
- **Tagline:** "Accessibility should be empowering, not complicated"
- **Services:** On-site assessments, drawing reviews, progressive site visits, CASp reviews, multi-site portfolio management
- **Soft CTA:** "Let's Work Together"
- **Tone:** Consultative, reassurance-based messaging focused on reducing complexity/stress
- **Weakness:** No testimonials, no stats, no pricing, no quantified anything
- **What ACS should learn:** Modern design aesthetic and the "empowering not complicated" framing. But don't copy the lack of social proof.

### CASp Inspectors - https://caspinspectors.com/
- **Lead generation focused** - prominent forms for lead capture
- **FAQ section** addressing common CASp concerns
- **Certification authority positioning**
- **No explicit pricing** - requires form submission
- **Multi-contact methods** for accessibility

### ECD Design (Austin TX) - https://www.ecd-design.com/
- **25+ years** interpreting Texas Accessibility Standards (founded 1995)
- **Services:** Accessibility Plan Review, Site Inspection, Consulting
- **Minimal website** - relies on credentials over marketing
- **RAS #00000048** - one of the earliest registered specialists

---

## 5. Messaging Strategy Recommendations

### Current ACS messaging (feature-first):
- "Making Our Built Environment Accessible"
- "We offer site assessment, design consultation, plan review, expert witness"
- "We have decades of experience"

### Recommended messaging shift (pain-point-first):

**Homepage hero options:**
1. "Facing an ADA Compliance Deadline? We Make Buildings Accessible."
2. "Don't Let Accessibility Violations Derail Your Project."
3. "One Team. Every Accessibility Code. From Plans to Certificate of Occupancy."

**Per-service pain points:**
| Service | Current messaging | Recommended pain-point |
|---------|------------------|----------------------|
| Site Assessment | "One of our trained professionals will tour the facility" | "Not sure if your building is compliant? Get a clear answer." |
| Design & Consultation | "We can develop conceptual drawings" | "Struggling to balance design vision with ADA requirements?" |
| Plan/Code Review | "Comprehensive review of your plans" | "Avoid costly redesigns. Catch accessibility issues before construction." |
| Expert Witness | "Knowledgeable on ADA compliance matters" | "Facing an accessibility lawsuit? Our experts have your back." |
| TX RAS | (doesn't exist yet) | "Need a Texas RAS review before your TDLR deadline?" |
| CASp | (doesn't exist yet) | "Received an ADA lawsuit in California? A CASp report is your best defense." |
| Inspection | (doesn't exist yet) | "Need a certified accessibility inspection before opening day?" |
| Technical Assistance | (doesn't exist yet) | "Have a quick accessibility question? We're here to help." |
| Universal Design | (doesn't exist yet) | "Want to go beyond minimum compliance? Design for everyone." |

### Unique differentiators to emphasize (ACS has these, competitors don't):
1. **Helped write the ADA** -- This is massive. No competitor can claim this.
2. **Forbes Accessibility 100** -- Brand-name third-party validation
3. **Program of United Spinal Association** -- Nonprofit backing, mission-driven credibility
4. **Marsha Mazz headed the US Access Board** -- Government-level authority
5. **Both attorneys and architects on staff** -- Legal + technical combined (Higgins has engineers, not attorneys)
6. **National scope with state specializations** -- TX RAS + CASp + NY-based HQ

---

## 6. Image Strategy

### Current images (downloaded to /public/images/):
- `hero-skyscrapers.jpg` - Generic city skyline (1MB)
- `about-image.jpg` - Unknown/generic (781KB)
- `logo.jpg` - ACS logo (12KB)
- `favicon.jpg` - Small icon (5KB)
- `training.jpg` - Dominic at conference (184KB)
- `contact.gif` - Contact graphic (5KB)
- 4 service images (assessment, design, planning, witness)
- 11 team photos
- 3 blog images
- 1 project logos strip

### Priorities document imagery guidance:
**Architectural/construction aesthetic:**
- Images of design and construction drawings
- Images of construction sites
- Images of buildings

**Accessibility emphasis:**
- Individuals using mobility aids
- Accessible ramps
- Accessible lifts
- Accessible parking spaces

### Recommended image sourcing:
- **Stock photos:** Unsplash, Pexels, or Adobe Stock for architectural/accessibility images
- **Team on-site photos:** ACS should commission or provide real photos of team doing inspections/consultations
- **Project photos:** If clients allow, photos of completed accessible features at notable projects
- **Credential/badge images:** AIA, ICC, CASp, RAS official logos (need to verify usage permissions)

### Specific images needed for new pages:
1. `/public/images/services/tx-ras.jpg` - Texas construction/accessibility context
2. `/public/images/services/casp.jpg` - California building/accessibility context
3. `/public/images/services/inspection.jpg` - Inspector on site
4. `/public/images/services/technical-assistance.jpg` - Consultation/phone/remote work
5. `/public/images/services/universal-design.jpg` - Inclusive design examples
6. Better hero image replacing generic skyscrapers
7. Credential/accreditation badge images (AIA, ICC, Forbes 100, United Spinal)

---

## 7. Technical Notes

### WordPress-to-Next.js migration notes:
- Original site uses Pardot tracking (Salesforce). Consider whether new contact form should POST to Pardot endpoint in addition to email.
- Original Clicky analytics (site ID 207007) could be replaced with Vercel Analytics or kept alongside.
- The Yoast SEO schema.org markup should be replicated using Next.js metadata API + JSON-LD.
- Original site loads 60+ Google Font families (massive performance waste). Our Next.js site correctly loads only Source Sans 3 and Poppins.

### Vercel deployment considerations:
- Static pages (all current pages) will be served from edge CDN
- API routes (Phase 5 contact form) will run as serverless functions
- Image optimization via next/image is already in use
- Environment variables needed: `RESEND_API_KEY` (Phase 5), `STRIPE_SECRET_KEY` (Phase 6)
- Custom domain setup: accessibility-services.com DNS will need to point to Vercel

### WCAG compliance (self-practice):
Since ACS is an accessibility firm, their website MUST be WCAG 2.1 AA compliant:
- All images need meaningful alt text (some current alt texts are empty)
- Color contrast ratios must meet 4.5:1 for normal text, 3:1 for large text
- All interactive elements must be keyboard accessible
- Focus indicators must be visible
- Form inputs need proper labels and error messages
- Skip navigation link needed
- Language attribute set (already done: `lang="en-US"`)
- Consider adding an accessibility statement page

### Current site performance baseline:
- Build compiles in ~2 seconds (Turbopack)
- All 16 routes are statically generated
- Dev server starts in ~500ms on port 3020
- No external JS dependencies beyond React/Next.js

---

## 8. Phasing Dependencies & Parallel Work

```
Content from ACS ──────────────────────────────────────────────┐
(testimonials, stats, credentials, fee schedules, images)      │
                                                               │
Phase 1A (data types) ──> Phase 1B (components) ──> Phase 1C   │
         │                        │               (tokens)     │
         └────────────────────────┴───────────────────┘        │
                                  │                            │
                           Phase 1D-1E (refactor)              │
                                  │                            │
                    ┌─────────────┼─────────────┐              │
                    │             │              │              │
              Phase 2         Phase 3        Phase 4  ◄────────┘
           (homepage)    (new services)  (enhanced pages)
                    │             │              │
                    └─────────────┼──────────────┘
                                  │
                              Phase 5
                          (contact & leads)
                                  │
                              Phase 6
                          (dream features)
```

**Key insight:** Phases 2, 3, and 4 can run in parallel after Phase 1. However, Phase 3 (new service pages) is blocked on content from ACS for TX RAS details, CASp details, and fee schedules. Phase 2 and 4 can proceed with placeholder testimonials/stats that get swapped for real content later.

**Recommended implementation order within parallel phases:**
1. Phase 2 (homepage) first -- highest visibility, establishes new patterns
2. Phase 4F-4G (header/footer) next -- affects every page
3. Phase 4A-4E (interior pages) -- one at a time
4. Phase 3 (new services) -- as content arrives from ACS
5. Phase 5 (contact/leads) -- after pages are solid
6. Phase 6 -- as time/budget allows
