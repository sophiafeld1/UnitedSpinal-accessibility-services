"use client";

import { useState } from "react";
import { projects, projectVerticals } from "@/data/projects";
import type { ProjectVertical } from "@/data/types";
import ProjectCard from "./ProjectCard";

export default function VerticalFilter() {
  const [active, setActive] = useState<ProjectVertical | "all">("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.vertical === active);

  // Only show verticals that have projects
  const usedVerticals = new Set(projects.map((p) => p.vertical));
  const availableVerticals = projectVerticals.filter((v) =>
    usedVerticals.has(v.value)
  );

  return (
    <>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <button
          onClick={() => setActive("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            active === "all"
              ? "bg-accent text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {availableVerticals.map((v) => (
          <button
            key={v.value}
            onClick={() => setActive(v.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === v.value
                ? "bg-accent text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </>
  );
}
