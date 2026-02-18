"use client";

import { useState } from "react";
import { teamMembers } from "@/data/team";
import TeamCard from "./TeamCard";

const locations = ["All", ...Array.from(new Set(teamMembers.map((m) => m.location).filter(Boolean))) as string[]];

export default function TeamFilter() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.location === active);

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => setActive(loc)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === loc
                ? "bg-accent text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {loc}
          </button>
        ))}
      </div>

      {/* Team grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((member) => (
          <TeamCard key={member.slug} member={member} />
        ))}
      </div>
    </>
  );
}
