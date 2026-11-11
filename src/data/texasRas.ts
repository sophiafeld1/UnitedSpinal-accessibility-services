/**
 * Public copy for the Texas RAS service page.
 * Update this file when the team approves new wording, resources, or examples.
 *
 * Unpublished until confirmed — do not render these on the page:
 * - Experience figures. Rachel reported about 10 years working with TDLR and
 *   becoming a RAS around 2020. Confirm dates before publishing.
 * - Kate Waters' fair housing expertise. Highlight it only after she confirms
 *   how it should be described. Her existing profile credentials may be shown.
 * - Other staff RAS credentials. The interview did not confirm them.
 *   Nathan Roether has Texas accessibility experience and is not a RAS.
 *   Do not label him as one or make him the default contact.
 * - Dominic Marinelli should confirm how broader code-review services are described.
 *   Public copy may say the team can coordinate more than one review.
 *   Do not claim the team covers all codes or is one of the only providers in Texas.
 * - Client names, logos, photos, and case studies. Rachel mentioned University of
 *   Texas facilities, H-E-B, and apartment projects. Public use still needs
 *   permission from Cleo.
 * - Accessibility Services professional fees. Rachel requested a fee schedule.
 *   Pricing needs confirmation with Cleo. If fees are added later, label them
 *   as professional service fees, separate from TDLR state fees.
 * - Form-specific instructions. Rachel wants notes for difficult forms.
 *   Add them on `texasResources[].note` only after she approves the text.
 * - Detailed regulatory FAQs beyond the initial set.
 *
 * Inquiry routing is not configured. Do not invent recipients.
 * Intended once confirmed:
 * - Registration and paperwork: Rachel (Rachael Block).
 * - Technical and inspection questions: the designated Texas technical contact.
 * Do not send every technical inquiry to all staff.
 *
 * Future possibilities — do not build in phase one, and do not show controls
 * that imply they are available:
 * - Construction-document and signed-form uploads.
 * - A client document portal.
 * - Inspection scheduling connected to staff calendars.
 * - Consultation or meeting scheduling.
 * - Chat functionality.
 */

export interface TexasTerm {
  term: string;
  meaning: string;
}

export interface TexasServiceCard {
  title: string;
  description: string;
}

export interface TexasRelatedService {
  title: string;
  description: string;
  /** Existing site route. Omit when no relevant page exists. */
  href?: string;
}

export interface TexasProjectType {
  title: string;
  description?: string;
}

export interface TexasProjectExample {
  name: string;
  summary: string;
}

export interface TexasResource {
  label: string;
  url: string;
  /** Approved explanation. Leave unset until the team supplies it. */
  note?: string;
}

export const texasContactHref = "/contact?service=tx-ras";

export const texasTerms: TexasTerm[] = [
  {
    term: "RAS",
    meaning: "Registered Accessibility Specialist.",
  },
  {
    term: "TDLR",
    meaning: "Texas Department of Licensing and Regulation.",
  },
  {
    term: "TAS",
    meaning: "Texas Accessibility Standards.",
  },
];

export const texasCoreServices: TexasServiceCard[] = [
  {
    title: "Project Registration Support",
    description:
      "Help with the information and paperwork needed to register a project with TDLR. Clients may register their own projects or ask our team to assist.",
  },
  {
    title: "Accessibility Plan Review",
    description:
      "Review construction documents for compliance with the Texas Accessibility Standards.",
  },
  {
    title: "On-Site Inspections",
    description:
      "Inspect completed work for compliance with applicable Texas accessibility requirements.",
  },
  {
    title: "Administrative Guidance",
    description:
      "Help clients navigate required forms, project documentation, and communication throughout the state process.",
  },
];

export const texasRelatedServices: TexasRelatedService[] = [
  {
    title: "Fair Housing Reviews",
    description:
      "An additional review of fair housing requirements, scoped for the project.",
  },
  {
    title: "Facility Assessments",
    description:
      "An additional assessment of an existing facility. Scope is set for each project.",
    href: "/services/site-assessment",
  },
  {
    title: "Stadium & Assembly Accessibility",
    description:
      "Additional consulting for stadium and assembly spaces, scoped for each project.",
  },
];

export const texasProjectTypes: TexasProjectType[] = [
  {
    title: "Multifamily housing",
    description:
      "Different accessibility requirements may apply to different areas. Our team can help determine the appropriate scope.",
  },
  {
    title: "Retail and commercial facilities",
  },
  {
    title: "Stadiums and university facilities",
  },
];

/** Approved public examples only. The section stays hidden while this is empty. */
export const texasProjectExamples: TexasProjectExample[] = [];

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

export const texasInquiryOptions = [
  {
    value: "registration",
    label: "Texas RAS: Registration & Paperwork",
  },
  {
    value: "technical",
    label: "Texas RAS: Technical & Inspection Questions",
  },
] as const;
