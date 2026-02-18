import type { FAQ } from "./types";

export const faqs: FAQ[] = [
  // General
  {
    question: "What is the ADA and who does it apply to?",
    answer:
      "The Americans with Disabilities Act (ADA) is a federal civil rights law that prohibits discrimination against people with disabilities. It applies to places of public accommodation, commercial facilities, state and local government buildings, and other public spaces.",
  },
  {
    question: "When is an accessibility assessment needed?",
    answer:
      "An accessibility assessment is recommended before any new construction, renovation, or change of use of a facility. It is also advisable when responding to a complaint, planning for future improvements, or as part of a proactive compliance program.",
  },
  {
    question: "What standards does ACS use for compliance reviews?",
    answer:
      "We apply the 2010 ADA Standards for Accessible Design, Fair Housing Act Accessibility Guidelines, UFAS, ICC/ANSI A117.1, and applicable state and local accessibility codes.",
  },
  {
    question:
      "How long does a typical site assessment take?",
    answer:
      "The duration depends on the size and complexity of the facility. A small retail space may take a few hours, while a large campus or multi-building complex could take several days. We provide a timeline estimate during the initial consultation.",
  },
  // Site Assessment
  {
    question: "What is included in a site assessment report?",
    answer:
      "Our comprehensive report summarizes the site visit findings, identifies all accessibility deficiencies, and provides design solutions in the form of plans and specifications to address each issue.",
    serviceSlug: "site-assessment",
  },
  // Code Review
  {
    question: "At what stage should I submit plans for accessibility review?",
    answer:
      "We recommend submitting plans for review during the design development phase, before construction documents are finalized. This allows time to incorporate any required changes without costly redesign.",
    serviceSlug: "code-review",
  },
  // Expert Witness
  {
    question:
      "What types of cases do your expert witnesses handle?",
    answer:
      "Our expert witnesses handle cases involving ADA compliance disputes, Fair Housing Act violations, building code non-compliance, personal injury claims related to accessibility barriers, and other disability rights litigation.",
    serviceSlug: "expert-witness",
  },
  // TX RAS
  {
    question: "What is a Texas Registered Accessibility Specialist (RAS)?",
    answer:
      "A RAS is a professional registered with the Texas Department of Licensing and Regulation (TDLR) who is qualified to review construction documents and inspect buildings for compliance with Texas Accessibility Standards (TAS).",
    serviceSlug: "tx-ras",
  },
  {
    question:
      "Is a RAS review required for all construction projects in Texas?",
    answer:
      "Texas requires a RAS review for most commercial and public building projects, including new construction, renovations, and additions. Some exemptions apply for certain project types and sizes.",
    serviceSlug: "tx-ras",
  },
  // CASp
  {
    question: 'What is a CASp inspection and what is "qualified defendant" status?',
    answer:
      'A CASp (Certified Access Specialist) inspection is a California-specific accessibility assessment. Under SB 1608, property owners who obtain a CASp report become "qualified defendants," which provides legal benefits including an automatic stay of ADA lawsuits, an early evaluation conference, and potentially reduced statutory damages.',
    serviceSlug: "casp",
  },
  // Design
  {
    question:
      "Can you create construction documents for accessibility modifications?",
    answer:
      "Yes. Depending on your requirements, we can develop conceptual drawings as well as construction documents. We are a premier resource for architects and building owners for incorporating accessible design elements.",
    serviceSlug: "design-and-consultation",
  },
];

export function getFAQsByService(serviceSlug: string): FAQ[] {
  return faqs.filter((f) => f.serviceSlug === serviceSlug);
}

export function getGeneralFAQs(): FAQ[] {
  return faqs.filter((f) => !f.serviceSlug);
}
