import type { Service } from "./types";

export const services: Service[] = [
  {
    title: "Site Assessment",
    slug: "site-assessment",
    image: "/images/services/assessment.jpg",
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
    image: "/images/services/design.jpg",
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
    image: "/images/services/planning.jpg",
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
    image: "/images/services/witness.jpg",
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
    title: "TX RAS Review",
    slug: "tx-ras",
    image: "/images/services/assessment.jpg",
    description:
      "Our Texas Registered Accessibility Specialists (RAS) provide TDLR-required accessibility reviews for commercial and public building projects throughout Texas.",
    painPointHeadline:
      "Need a Texas RAS review before your TDLR deadline?",
    category: "state-specific",
    featured: false,
    metaTitle: "Texas RAS Accessibility Review",
    metaDescription:
      "Texas Registered Accessibility Specialist reviews for TDLR compliance. Expert RAS services for commercial and public building projects.",
    longDescription: [
      "Our Texas Registered Accessibility Specialists (RAS) provide TDLR-required accessibility reviews for commercial and public building projects throughout Texas.",
      "Texas requires that all commercial and public buildings be reviewed by a Registered Accessibility Specialist before a building permit can be issued. Our RAS team ensures your project meets all Texas Accessibility Standards (TAS) requirements.",
    ],
    stateSpecific: {
      state: "Texas",
      regulatoryBody: "Texas Department of Licensing and Regulation (TDLR)",
      regulatoryLinks: [
        {
          label: "TDLR Elimination of Architectural Barriers",
          url: "https://www.tdlr.texas.gov/ab/ab.htm",
        },
        {
          label: "Texas Accessibility Standards (TAS)",
          url: "https://www.tdlr.texas.gov/ab/abtas.htm",
        },
      ],
      feeSchedule: [
        {
          tier: "Small Projects (under 5,000 sq ft)",
          description: "Plan review and inspection for small commercial projects",
          price: "Contact us for pricing",
        },
        {
          tier: "Medium Projects (5,000-50,000 sq ft)",
          description: "Comprehensive review for mid-size commercial buildings",
          price: "Contact us for pricing",
        },
        {
          tier: "Large Projects (over 50,000 sq ft)",
          description: "Full-scope review for large commercial and public facilities",
          price: "Contact us for pricing",
        },
      ],
    },
  },
  {
    title: "CASp Inspection",
    slug: "casp",
    image: "/images/services/assessment.jpg",
    description:
      "Our Certified Access Specialists (CASp) provide California-specific accessibility inspections that give property owners legal benefits under SB 1608 and SB 269.",
    painPointHeadline:
      "Received an ADA lawsuit in California? A CASp report is your best defense.",
    category: "state-specific",
    featured: false,
    metaTitle: "CASp Inspection - California Accessibility",
    metaDescription:
      "Certified Access Specialist inspections for California properties. Get qualified defendant status and legal protections under SB 1608.",
    longDescription: [
      "Our Certified Access Specialists (CASp) provide California-specific accessibility inspections that give property owners significant legal benefits under SB 1608 and SB 269.",
      'Under California law, a property owner who obtains a CASp inspection report becomes a "qualified defendant" in any subsequent ADA lawsuit. This status provides important procedural advantages including an automatic stay of the lawsuit, an early evaluation conference, and reduced statutory damages.',
    ],
    stateSpecific: {
      state: "California",
      regulatoryBody:
        "California Division of the State Architect (DSA)",
      regulatoryLinks: [
        {
          label: "DSA CASp Program",
          url: "https://www.dgs.ca.gov/DSA/Programs/programCASp",
        },
      ],
      feeSchedule: [
        {
          tier: "Small Business (under 2,500 sq ft)",
          description: "CASp inspection for small retail or office spaces",
          price: "Contact us for pricing",
        },
        {
          tier: "Medium Facility (2,500-25,000 sq ft)",
          description: "CASp inspection for mid-size commercial properties",
          price: "Contact us for pricing",
        },
        {
          tier: "Large Facility (over 25,000 sq ft)",
          description: "CASp inspection for large commercial or public facilities",
          price: "Contact us for pricing",
        },
      ],
    },
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
