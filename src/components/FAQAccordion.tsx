"use client";

import { useState } from "react";
import type { FAQ } from "@/data/types";

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  variant?: "default" | "strong" | "texas";
}

export default function FAQAccordion({
  faqs,
  title = "Frequently Asked Questions",
  variant = "default",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (faqs.length === 0) return null;

  if (variant === "texas") {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        <div
          className="h-1 w-14 bg-accent rounded-full mb-8"
          aria-hidden="true"
        />
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div
                key={i}
                className={`texas-faq-item group border border-[#e2e2e2] bg-white ${
                  open ? "is-open" : ""
                }`}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between text-left p-5 md:p-6 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
                >
                  <span className="font-semibold text-heading pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                      open ? "rotate-180" : "group-hover:rotate-180"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className="texas-faq-answer"
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const strong = variant === "strong";

  return (
    <div>
      <h2 className={`${strong ? "text-3xl" : "text-2xl"} font-bold mb-6`}>
        {title}
      </h2>
      <div className={strong ? "space-y-0 border-y-2 border-heading" : "space-y-3"}>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={
              strong
                ? "border-b-2 border-heading last:border-b-0"
                : "border border-gray-200 rounded-lg overflow-hidden"
            }
          >
            <button
              type="button"
              aria-expanded={openIndex === i}
              aria-controls={`faq-panel-${i}`}
              id={`faq-button-${i}`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={`w-full flex items-center justify-between text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent ${
                strong
                  ? "p-5 md:p-6 hover:bg-white"
                  : "p-4 hover:bg-gray-50"
              }`}
            >
              <span className="font-medium pr-4">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === i && (
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-button-${i}`}
                className={strong ? "px-5 md:px-6 pb-5 md:pb-6" : "px-4 pb-4"}
              >
                <p className={`${strong ? "text-gray-700" : "text-gray-600"} leading-relaxed`}>
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
