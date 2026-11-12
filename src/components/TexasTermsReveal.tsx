"use client";

import { useEffect, useRef, useState } from "react";
import type { TexasTerm } from "@/data/texasRas";

interface TexasTermsRevealProps {
  terms: TexasTerm[];
}

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function TexasTermsReveal({ terms }: TexasTermsRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ol
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ${
        visible ? "is-visible" : ""
      }`}
    >
      {terms.map((item, index) => (
        <li
          key={item.term}
          className="texas-term border-t-4 border-t-accent bg-[#f4f4f4] px-5 py-6"
          style={{ transitionDelay: `${index * 90}ms` }}
        >
          <span className="block text-sm font-semibold text-accent mb-3">
            {String(index + 1).padStart(2, "0")}
          </span>
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`texas-term-acronym inline-block text-3xl md:text-4xl font-bold tracking-tight text-heading hover:underline [font-family:var(--font-condensed)] ${focusRing}`}
            >
              {item.term}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <p className="texas-term-acronym text-3xl md:text-4xl font-bold tracking-tight text-heading [font-family:var(--font-condensed)]">
              {item.term}
            </p>
          )}
          <p className="texas-term-meaning text-base text-gray-600 mt-2 leading-snug">
            {item.meaning}
          </p>
        </li>
      ))}
    </ol>
  );
}
