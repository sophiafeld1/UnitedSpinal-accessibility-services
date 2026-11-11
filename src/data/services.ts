import type { Service } from "./types";

export const services: Service[] = [
  {
    title: "Site Assessment",
    slug: "site-assessment",
    image: "/images/siteassessment.png",
    description:
      "One of our trained professionals will tour the facility and discuss your concerns. A comprehensive report is prepared which summarizes the site visit and contains design solutions in the form of plans and specifications that address all the issues discovered during the site visit.",
    painPointHeadline:
      "Unsure if your facility meets ADA requirements? Get a comprehensive assessment.",
    category: "core",
    featured: true,
    metaTitle: "Site Assessment",
    metaDescription:
      "Our trained professionals tour your facility, discuss concerns, and prepare comprehensive reports with design solutions.",
    longDescription: [
      "One of our trained professionals will tour the facility and discuss your concerns. A comprehensive report is prepared which summarizes the site visit and contains design solutions in the form of plans and specifications that address all the issues discovered during the site visit.",
    ],
  },
  {
    title: "Design and Consultation",
    slug: "design-and-consultation",
    image: "/images/designandconsulatation.png",
    description:
      "Depending on your requirements, we can develop conceptual drawings for your project as well as construction documents. We are a premier resource for architects and building owners for design assistance to incorporating accessible elements into a project.",
    painPointHeadline:
      "Need accessible design that doesn't compromise your vision? We can help.",
    category: "core",
    featured: true,
    metaTitle: "Design and Consultation",
    metaDescription:
      "We develop conceptual drawings and construction documents, serving as a premier resource for architects and building owners.",
    longDescription: [
      "Depending on your requirements, we can develop conceptual drawings for your project as well as construction documents. We are a premier resource for architects and building owners for design assistance to incorporating accessible elements into a project.",
    ],
  },
  {
    title: "Plan/Code Review",
    slug: "code-review",
    image: "/images/plan-code-review.png",
    description:
      "We will perform a comprehensive and accurate review of your plans, in a timely fashion, for compliance with applicable accessibility codes. Our review covers all occupancy classifications, with documented deficiencies and graphic solutions provided.",
    painPointHeadline:
      "Worried your plans won't pass accessibility review? Let us check before you build.",
    category: "core",
    featured: true,
    metaTitle: "Plan/Code Review",
    metaDescription:
      "Comprehensive and accurate review of your plans for compliance with applicable accessibility codes.",
    longDescription: [
      "We will perform a comprehensive and accurate review of your plans, in a timely fashion, for compliance with applicable accessibility codes. Our review covers all occupancy classifications, with documented deficiencies and graphic solutions provided.",
    ],
  },
  {
    title: "Expert Witness",
    slug: "expert-witness",
    image: "/images/expertwitness.png",
    description:
      "Our expert witnesses are knowledgeable on matters related to Americans with Disabilities Act (ADA) Compliance. We provide advice on accommodation, accessibility consulting, and expert testimonies.",
    painPointHeadline:
      "Facing an ADA-related lawsuit? Our expert witnesses can support your case.",
    category: "core",
    featured: true,
    metaTitle: "Expert Witness",
    metaDescription:
      "Our expert witnesses are knowledgeable on matters related to ADA Compliance, providing advice on accommodation and accessibility consulting.",
    longDescription: [
      "Our expert witnesses are knowledgeable on matters related to Americans with Disabilities Act (ADA) Compliance. We provide advice on accommodation, accessibility consulting, and expert testimonies regarding accessibility designs, ADA Facility Accessibility Surveys, and building code requirements.",
      "The work of our team has become essential in responding to the growing number of accessibility-based lawsuits. We support United Spinal Association's philosophy of collaborative work with building owners and architects to achieve genuine accessibility improvements.",
    ],
  },
  {
    title: "Texas RAS Services",
    slug: "tx-ras",
    image: "/images/services/assessment.jpg",
    description:
      "Accessibility Services helps project teams navigate Texas accessibility requirements through project registration support, plan reviews, and on-site inspections.",
    painPointHeadline:
      "Need help with Texas project registration, plan review, or an inspection?",
    category: "state-specific",
    featured: false,
    metaTitle: "Texas RAS Services",
    metaDescription:
      "Texas Registered Accessibility Specialist support for project registration, plan review, and inspections, plus related accessibility consulting.",
    longDescription: [
      "Accessibility Services helps project teams navigate Texas accessibility requirements through project registration support, plan reviews, and on-site inspections.",
      "Our Registered Accessibility Specialists support projects through the TDLR architectural barriers process. We help clients understand the required paperwork, coordinate project registration, and arrange accessibility plan reviews and inspections.",
    ],
    stateSpecific: {
      state: "Texas",
      regulatoryBody: "Texas Department of Licensing and Regulation (TDLR)",
      regulatoryLinks: [
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
      ],
    },
  },
  {
    title: "CASp Inspection",
    slug: "casp",
    image: "/images/CASp.png",
    description:
      "While a licensed design professional, such as an architect or engineer, can provide an access compliance evaluation of a facility, only a CASp can provide services that offer “qualified defendant” status in a construction-related accessibility lawsuit.",
    painPointHeadline:
      "Having a business/property reviewed by a CASp shows that business owners care about ensuring equal access for all customers, and the intent to follow the law.",
    category: "state-specific",
    featured: false,
    metaTitle: "CASp Inspection",
    metaDescription:
      "Having a business/property reviewed by a CASp shows that business owners care about ensuring equal access for all customers, and the intent to follow the law.",
  },
  {
    title: "Inspection & Certification",
    slug: "inspection",
    image: "/images/services/assessment.jpg",
    description:
      "Our certified inspectors verify that completed construction meets all applicable accessibility standards, providing formal certification for occupancy and compliance documentation.",
    painPointHeadline:
      "Need a certified accessibility inspection before opening day?",
    category: "specialized",
    featured: false,
    metaTitle: "Accessibility Inspection & Certification",
    metaDescription:
      "Certified accessibility inspections to verify your construction meets all applicable standards. Get formal compliance documentation.",
    longDescription: [
      "Our certified inspectors verify that completed construction meets all applicable accessibility standards, providing formal certification for occupancy and compliance documentation.",
      "Whether you need pre-occupancy inspection, ongoing compliance monitoring, or certification for renovated spaces, our team ensures your facility meets every requirement.",
    ],
  },
  {
    title: "Technical Assistance",
    slug: "technical-assistance",
    image: "/images/services/design.jpg",
    description:
      "Quick-turnaround guidance for specific accessibility questions. Our specialists are available to review details, interpret code requirements, and provide practical solutions.",
    painPointHeadline:
      "Have a quick accessibility question? We're here to help.",
    category: "specialized",
    featured: false,
    metaTitle: "Accessibility Technical Assistance",
    metaDescription:
      "Quick-turnaround guidance for specific accessibility questions. Expert code interpretation and practical solutions.",
    longDescription: [
      "Quick-turnaround guidance for specific accessibility questions. Our specialists are available to review details, interpret code requirements, and provide practical solutions.",
      "Our experienced staff provides customized online webinars and in-firm accredited training and technical assistance on the latest city, state and federal accessibility requirements throughout the country.",
    ],
  },
  {
    title: "Universal Design",
    slug: "universal-design",
    image: "/images/services/design.jpg",
    description:
      "Go beyond minimum ADA compliance with design that works for everyone. We help create spaces that are inherently accessible, intuitive, and welcoming to all users.",
    painPointHeadline:
      "Want to go beyond minimum compliance? Design for everyone.",
    category: "specialized",
    featured: false,
    metaTitle: "Universal Design Consulting",
    metaDescription:
      "Go beyond ADA compliance with universal design. Create spaces that are accessible, intuitive, and welcoming to all users.",
    longDescription: [
      "Go beyond minimum ADA compliance with design that works for everyone. We help create spaces that are inherently accessible, intuitive, and welcoming to all users.",
      "Universal Design is about creating environments that can be used by everyone, to the greatest extent possible, without the need for adaptation or specialized design. Our team integrates these principles into your project from the earliest design stages.",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}

export function getServicesByCategory(
  category: Service["category"]
): Service[] {
  return services.filter((s) => s.category === category);
}

export function getRelatedServices(
  currentSlug: string,
  limit = 3
): Service[] {
  const current = getServiceBySlug(currentSlug);
  if (!current) return services.filter((s) => s.slug !== currentSlug).slice(0, limit);
  return services
    .filter((s) => s.slug !== currentSlug && s.category === current.category)
    .slice(0, limit);
}
