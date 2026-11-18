import type { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  "Registration Support": (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm1 7V3.5L18.5 9H15zM8 12h8v2H8v-2zm0 4h8v2H8v-2z" />
    </svg>
  ),
  "Plan Review": (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l6.59-6.58L20 9l-8 8z" />
    </svg>
  ),
  "On-Site Inspections": (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
  ),
  "Technical Assistance": (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
    </svg>
  ),
  "Existing Conditions": (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.7L17 10v9h-2v-6H9v6H7v-9l5-4.3z" />
    </svg>
  ),
  "Fair Housing": (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
    </svg>
  ),
};

const fallbackIcon = (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

interface TexasServiceCardProps {
  title: string;
  hover: string;
}

/** Homepage-style informational box — not a link or button. */
export default function TexasServiceCard({
  title,
  hover,
}: TexasServiceCardProps) {
  return (
    <article className="h-full bg-white p-6 rounded-lg border border-gray-100">
      <div className="flex items-center gap-4 mb-3">
        <span className="text-accent shrink-0">
          {icons[title] ?? fallbackIcon}
        </span>
        <h3 className="font-semibold text-base text-heading">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{hover}</p>
    </article>
  );
}
