import type { Testimonial } from "@/data/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
      <svg
        className="w-8 h-8 text-accent/30 mb-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
      </svg>
      <p className="text-gray-700 leading-relaxed mb-4 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div>
        <p className="font-semibold text-sm">{testimonial.author}</p>
        {testimonial.company && (
          <p className="text-gray-500 text-xs">{testimonial.company}</p>
        )}
      </div>
    </div>
  );
}
