"use client";

import { useEffect, useState } from "react";

const quotes = [
  {
    author: "Client Name",
    quote: "Client Testimonial Here",
  },
  {
    author: "Client Name",
    quote: "A second quote will scroll into this card.",
  },
  {
    author: "Client Name",
    quote: "Real client words will replace this sample.",
  },
];

export default function TestimonialPreview() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % quotes.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const current = quotes[reduceMotion ? 0 : index];

  return (
    <div className="mx-auto max-w-md">
      <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 min-h-[220px]">
        <svg
          className="w-8 h-8 text-accent/30 mb-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
        </svg>
        <p
          key={current.quote}
          className="testimonial-preview-quote text-gray-700 leading-relaxed mb-4 italic"
        >
          &ldquo;{current.quote}&rdquo;
        </p>
        <p className="font-semibold text-sm">{current.author}</p>
      </div>
    </div>
  );
}
