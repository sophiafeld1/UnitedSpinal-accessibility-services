"use client";

import { useEffect, useState } from "react";
import type { TexasProjectCategory } from "@/data/texasRas";
import Container from "@/components/Container";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

interface TexasRasProjectsProps {
  categories: TexasProjectCategory[];
}

export default function TexasRasProjects({
  categories,
}: TexasRasProjectsProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "tdlr");

  useEffect(() => {
    const fromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (categories.some((category) => category.id === hash)) {
        setActiveId(hash as TexasProjectCategory["id"]);
      }
    };

    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [categories]);

  const active =
    categories.find((category) => category.id === activeId) ?? categories[0];

  if (!active) return null;

  return (
    <section className="pb-16">
      <Container>
        <div
          role="tablist"
          aria-label="Texas project categories"
          className="flex flex-wrap gap-3 mb-10"
        >
          {categories.map((category) => {
            const selected = category.id === active.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`tab-${category.id}`}
                aria-selected={selected}
                aria-controls={category.id}
                tabIndex={selected ? 0 : -1}
                onClick={() => {
                  setActiveId(category.id);
                  window.history.replaceState(
                    null,
                    "",
                    `#${category.id}`
                  );
                }}
                className={`px-5 py-2.5 font-semibold rounded border transition-colors ${focusRing} ${
                  selected
                    ? "bg-accent text-white border-accent"
                    : "bg-white text-heading border-[#e2e2e2] hover:border-accent"
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        {categories.map((category) => {
          const selected = category.id === active.id;
          return (
            <div
              key={category.id}
              id={category.id}
              role="tabpanel"
              aria-labelledby={`tab-${category.id}`}
              hidden={!selected}
              className="scroll-mt-24"
            >
              {selected && (
                <>
                  <h2 className="text-2xl font-bold mb-3">{category.title}</h2>
                  <div
                    className="h-1 w-14 bg-accent rounded-full mb-4"
                    aria-hidden="true"
                  />
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl">
                    {category.pageIntro}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.placeholders.map((project, index) => (
                      <li
                        key={`${category.id}-${index}`}
                        className="border border-[#e2e2e2] bg-white p-6"
                      >
                        <p className="text-lg font-bold mb-2">
                          {project.title}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {project.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          );
        })}
      </Container>
    </section>
  );
}
