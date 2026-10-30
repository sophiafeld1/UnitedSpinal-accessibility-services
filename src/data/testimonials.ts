import type { Testimonial } from "./types";

// Real client quotes are still being gathered. Do not put sample quotes on the site.
export const testimonials: Testimonial[] = [];

export function getTestimonialsByService(
  serviceSlug: string
): Testimonial[] {
  return testimonials.filter((t) => t.serviceSlug === serviceSlug);
}
