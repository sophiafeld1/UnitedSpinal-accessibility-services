/**
 * Public copy for the Texas RAS service page.
 * Update this file when the team approves new wording, resources, or examples.
 *
 * Unpublished until confirmed — do not render these on the page:
 * - Experience figures. Rachael reported about 10 years working with TDLR and
 *   becoming a RAS around 2020. Confirm dates before publishing.
 * - Other staff RAS credentials. The interview did not confirm them.
 *   Nathan Roether has Texas accessibility experience and is not a RAS.
 *   Do not label him as one or make him the default contact.
 * - Client names, logos, photos, and case studies. Candidate examples pending
 *   permission (Cleo for NDAs; Kate suggested Jimmy or Dominic):
 *   University of Texas stadium projects, apartment complexes, HEB/grocery stores,
 *   Tractor Supply stores, and both market-rate and affordable housing projects.
 * - Accessibility Services professional fees. Rachael requested a fee schedule.
 *   Pricing needs confirmation with Cleo. If fees are added later, label them
 *   as professional service fees, separate from TDLR state fees.
 * - Form-specific instructions. Rachael wants notes for difficult forms.
 *   Add them on `texasResources[].note` only after she approves the text.
 * - Project applicability / dollar threshold. Hold specialist-approved wording
 *   before publishing any dollar amount.
 * - Full team bios. The Texas page bios are placeholders. Kate and Rachael
 *   will send over bios to replace `texasTeamSpotlight[].pageBio`.
 * - Years in the industry. Ask Kate and Rachael for confirmed tenure figures
 *   and use them in `pageBio` once they send bios. Do not invent year counts
 *   for the one-team intro section.
 * - Fair Housing card copy. Ask Rachael what wording, if any, she wants under
 *   Fair Housing. Do not invent a summary. The page shows "[summary here]".
 * - Texas project examples on `/projects/texas-ras`. Keep placeholder slots only
 *   until permissions exist. Do not publish named clients or photos.
 *
 * Email delivery is not connected yet. The sitewide `/contact` form must not
 * claim a Texas message was sent.
 *
 * Contact UX (canonical form, query params, topic → recipient routing) is
 * documented in `docs/contact-form.md`.
 *
 * Future possibilities — do not build in phase one, and do not show controls
 * that imply they are available:
 * - Construction-document and signed-form uploads.
 * - A client document portal.
 * - Inspection scheduling connected to staff calendars.
 * - Consultation or meeting scheduling.
 * - Chat functionality.
 */

export type TexasRecipientIntent = "both" | "kate" | "rachael";

export interface TexasContactPerson {
  slug: "rachael-block" | "kate-waters";
  name: string;
  firstName: string;
  email: string;
  intent: Exclude<TexasRecipientIntent, "both">;
}

export interface TexasTerm {
  term: string;
  meaning: string;
  href?: string;
}

export interface TexasServiceCard {
  title: string;
  hover: string;
  image: string;
  intent: TexasRecipientIntent;
}

export interface TexasResource {
  label: string;
  url: string;
  /** Approved explanation. Leave unset until the team supplies it. */
  note?: string;
}

export interface TexasTeamSpotlight {
  slug: string;
  pageBio: string;
  intent: Exclude<TexasRecipientIntent, "both">;
}

export interface TexasImagePrompt {
  filename: string;
  path: string;
  prompt: string;
}

export interface TexasTopicOption {
  value: string;
  label: string;
  intent: TexasRecipientIntent;
}

export interface TexasProjectPlaceholder {
  title: string;
  description: string;
}

export interface TexasProjectCategory {
  id: "tdlr" | "fair-housing";
  title: string;
  teaserBlurb: string;
  pageIntro: string;
  image: string;
  placeholders: TexasProjectPlaceholder[];
}

export const texasContactHref = "/contact?service=tx-ras";

/** Deep link into the sitewide contact form with Texas RAS preselected. */
export function getTexasContactHref(topic?: string): string {
  if (!topic) return texasContactHref;
  return `${texasContactHref}&topic=${encodeURIComponent(topic)}`;
}

export const texasHeroImage = "/images/texas/texas-hero.jpg";

export const texasProjectsHref = "/projects/texas-ras";

export const texasContactPeople: TexasContactPerson[] = [
  {
    slug: "rachael-block",
    name: "Rachael Block",
    firstName: "Rachael",
    email: "rblock@accessibility-services.com",
    intent: "rachael",
  },
  {
    slug: "kate-waters",
    name: "Kate Waters",
    firstName: "Kate",
    email: "kwaters@accessibility-services.com",
    intent: "kate",
  },
];

export function getTexasRecipients(
  intent: TexasRecipientIntent
): TexasContactPerson[] {
  if (intent === "both") return texasContactPeople;
  return texasContactPeople.filter((person) => person.intent === intent);
}

export function getTexasIntentForTopic(
  topic: string,
  fallback: TexasRecipientIntent = "both"
): TexasRecipientIntent {
  const option = texasTopicOptions.find((item) => item.value === topic);
  return option?.intent ?? fallback;
}

export const texasTerms: TexasTerm[] = [
  {
    term: "RAS",
    meaning: "Registered Accessibility Specialist",
  },
  {
    term: "TDLR",
    meaning: "Texas Department of Licensing and Regulation",
  },
  {
    term: "TAS",
    meaning: "Texas Accessibility Standards",
  },
];

export const texasHeroIntro =
  "Registered Accessibility Specialists helping Texas project teams with TDLR registration, plan review, and inspections.";

export const texasCoreServices: TexasServiceCard[] = [
  {
    title: "Registration Support",
    hover:
      "Paperwork and coordination to register a project with TDLR — or guidance if you register it yourself.",
    image: "/images/texas/registration.jpg",
    intent: "both",
  },
  {
    title: "Plan Review",
    hover:
      "Review of construction documents for compliance with the Texas Accessibility Standards.",
    image: "/images/texas/plan-review.jpg",
    intent: "both",
  },
  {
    title: "On-Site Inspections",
    hover:
      "On-site review of completed work against applicable Texas accessibility requirements.",
    image: "/images/texas/inspection.jpg",
    intent: "both",
  },
  {
    title: "Technical Assistance",
    hover:
      "Guidance on Texas accessibility questions, project documentation, and communication through the state process.",
    image: "/images/texas/technical-assistance.jpg",
    intent: "both",
  },
  {
    title: "Existing Conditions",
    hover:
      "Identify accessibility issues in existing buildings and help purchasers understand potential liabilities.",
    image: "/images/texas/existing-conditions.jpg",
    intent: "both",
  },
  {
    title: "Fair Housing",
    hover: "[summary here]",
    image: "/images/texas/fair-housing.jpg",
    intent: "kate",
  },
];

export const texasRelatedIntro = {
  heading: "Texas Accessibility Specialists for Overlapping Requirements",
  paragraphs: [
    "At Accessibility Services, a program of United Spinal Association, you can work with one team for Texas Accessibility Standards (TAS) plan reviews and inspections, Fair Housing Act consulting, and ADA guidance.",
    "Our Texas Registered Accessibility Specialists help you understand which requirements apply, where they overlap, and how to address them in your design.",
  ],
};

/**
 * Placeholder project slots only. Do not add client names, logos, or photos
 * until permission is confirmed.
 */
export const texasProjectCategories: TexasProjectCategory[] = [
  {
    id: "tdlr",
    title: "TDLR Projects",
    teaserBlurb:
      "Examples of Texas RAS work across registration, plan review, and inspection — published when permissions are confirmed.",
    pageIntro: "",
    image: "/images/texas/projects-promo.jpg",
    placeholders: [
      { title: "Project example", description: "" },
      { title: "Project example", description: "" },
    ],
  },
  {
    id: "fair-housing",
    title: "Fair Housing Projects",
    teaserBlurb:
      "Housing and mixed-use work where Fair Housing review sits alongside Texas accessibility — examples pending approval.",
    pageIntro: "",
    image: "/images/texas/fair-housing-cover.png",
    placeholders: [
      { title: "Project example", description: "" },
      { title: "Project example", description: "" },
    ],
  },
];

export const texasResources: TexasResource[] = [
  {
    label: "Forms and help sheets",
    url: "https://www.tdlr.texas.gov/ab/abforms.htm",
  },
  {
    label: "Frequently asked questions",
    url: "https://www.tdlr.texas.gov/ab/abfaq.htm",
  },
  {
    label: "State fee schedule",
    url: "https://www.tdlr.texas.gov/ab/abfees.htm",
  },
];

/**
 * Page-only bios. Do not change global team profiles for these roles.
 * Placeholder copy until Kate and Rachael send bios.
 */
export const texasTeamSpotlight: TexasTeamSpotlight[] = [
  {
    slug: "rachael-block",
    intent: "rachael",
    pageBio:
      "Rachael leads TDLR registration, state paperwork, and ongoing correspondence with the state.",
  },
  {
    slug: "kate-waters",
    intent: "kate",
    pageBio:
      "Kate combines RAS certification with Fair Housing experience, so housing and mixed-use projects can keep technical Texas review and Fair Housing in the same conversation.",
  },
];

export const texasHowToBegin = {
  heading: "How to Begin a Texas Project",
  line: "Contact the team early so we can help you understand which accessibility requirements may apply.",
};

/** Topic options for the sitewide `/contact` form when service is Texas RAS. */
export const texasTopicOptions: TexasTopicOption[] = [
  {
    value: "registration",
    label: "Registration",
    intent: "both",
  },
  {
    value: "plan-review",
    label: "Plan Review",
    intent: "both",
  },
  {
    value: "inspections",
    label: "Inspections",
    intent: "both",
  },
  {
    value: "technical-assistance",
    label: "Technical Assistance",
    intent: "both",
  },
  {
    value: "existing-conditions",
    label: "Existing Conditions",
    intent: "both",
  },
  {
    value: "fair-housing",
    label: "Fair Housing",
    intent: "kate",
  },
  {
    value: "general-tdlr",
    label: "General / TDLR",
    intent: "both",
  },
];

const sharedImageStyle =
  "photorealistic, warm natural light, United Spinal orange accent used sparingly, no text overlays, no logos, no watermarks, 4:3 landscape, professional accessibility consulting mood";

/** Prompts for generating files in public/images/texas/. */
export const texasImagePrompts: TexasImagePrompt[] = [
  {
    filename: "texas-hero.jpg",
    path: "/images/texas/texas-hero.jpg",
    prompt: `Architects and accessibility specialists reviewing construction plans on a Texas job site in daylight, hard hats optional, collaborative and confident. ${sharedImageStyle}.`,
  },
  {
    filename: "registration.jpg",
    path: "/images/texas/registration.jpg",
    prompt: `Hands organizing official paperwork and a laptop at a clean desk, subtle government-process feel without branding. ${sharedImageStyle}.`,
  },
  {
    filename: "plan-review.jpg",
    path: "/images/texas/plan-review.jpg",
    prompt: `Close overhead of large architectural drawings with a ruler and notes marking accessible routes. ${sharedImageStyle}.`,
  },
  {
    filename: "inspection.jpg",
    path: "/images/texas/inspection.jpg",
    prompt: `Specialist measuring a doorway or ramp slope at a commercial building entrance. ${sharedImageStyle}.`,
  },
  {
    filename: "technical-assistance.jpg",
    path: "/images/texas/technical-assistance.jpg",
    prompt: `Video or desk consult between a consultant and a client pointing at plans on a monitor. ${sharedImageStyle}.`,
  },
  {
    filename: "existing-conditions.jpg",
    path: "/images/texas/existing-conditions.jpg",
    prompt: `Walkthrough of an older commercial corridor with a consultant assessing an entrance or restroom approach. ${sharedImageStyle}.`,
  },
  {
    filename: "fair-housing.jpg",
    path: "/images/texas/fair-housing.jpg",
    prompt: `Multifamily residential courtyard or leasing-office entry that feels welcoming and accessible. ${sharedImageStyle}.`,
  },
  {
    filename: "facility-assessment.jpg",
    path: "/images/texas/facility-assessment.jpg",
    prompt: `Consultant with a tablet surveying a public building lobby. ${sharedImageStyle}.`,
  },
  {
    filename: "stadium-assembly.jpg",
    path: "/images/texas/stadium-assembly.jpg",
    prompt: `Accessible seating aisle or concourse in a modern stadium, people optional and small in frame. ${sharedImageStyle}.`,
  },
  {
    filename: "projects-promo.jpg",
    path: "/images/texas/projects-promo.jpg",
    prompt: `Single collage-friendly shot of mixed Texas project types, campus exterior and retail storefront, without identifiable brand marks. ${sharedImageStyle}.`,
  },
];
