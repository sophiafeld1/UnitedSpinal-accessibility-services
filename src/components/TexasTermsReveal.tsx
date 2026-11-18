import type { TexasTerm } from "@/data/texasRas";

interface TexasTermsRevealProps {
  terms: TexasTerm[];
}

/** Quiet glossary strip — acronyms as definitions, not feature cards. */
export default function TexasTermsReveal({ terms }: TexasTermsRevealProps) {
  return (
    <dl className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4 md:gap-x-10 md:gap-y-3 text-center">
      {terms.map((item) => (
        <div
          key={item.term}
          className="flex flex-wrap items-baseline justify-center gap-x-2"
        >
          <dt className="font-bold text-heading">{item.term}</dt>
          <dd className="text-gray-600">{item.meaning}</dd>
        </div>
      ))}
    </dl>
  );
}
