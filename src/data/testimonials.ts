import type { Testimonial } from "./types";

// Placeholder testimonials - replace with real client quotes when available
export const testimonials: Testimonial[] = [
  {
    quote:
      "Accessibility Services provided invaluable guidance throughout our renovation project. Their team identified issues we would have never caught on our own.",
    author: "Project Manager",
    company: "National Hospitality Group",
    serviceSlug: "site-assessment",
  },
  {
    quote:
      "Their expert witness testimony was thorough, credible, and instrumental in resolving our case favorably.",
    author: "Legal Counsel",
    company: "Regional Property Management Firm",
    serviceSlug: "expert-witness",
  },
  {
    quote:
      "The plan review process was seamless. We received detailed, actionable feedback that saved us significant time and cost during construction.",
    author: "Senior Architect",
    company: "Design & Build Firm",
    serviceSlug: "code-review",
  },
  {
    quote:
      "Working with the ACS team on our accessibility training program was outstanding. The customized content was exactly what our staff needed.",
    author: "Director of Operations",
    company: "Cultural Institution",
  },
];

export function getTestimonialsByService(
  serviceSlug: string
): Testimonial[] {
  return testimonials.filter((t) => t.serviceSlug === serviceSlug);
}
