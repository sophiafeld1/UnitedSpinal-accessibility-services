"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { teamMembers } from "@/data/team";
import type { TeamMember } from "@/data/types";
import TeamCard from "./TeamCard";

const states = [
  "All",
  ...Array.from(
    new Set(teamMembers.map((m) => m.state).filter(Boolean)),
  ).sort() as string[],
];

function profileLead(member: TeamMember): string {
  const credentials = member.credentials?.filter(Boolean) ?? [];
  return credentials.length
    ? `${member.name} (${credentials.join(", ")})`
    : member.name;
}

export default function TeamFilter() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const [contactMember, setContactMember] = useState<TeamMember | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!contactMember) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setContactMember(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [contactMember]);

  async function copyEmail(email: string) {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const field = document.createElement("textarea");
      field.value = email;
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
  }

  const filtered =
    active === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.state === active);

  function openMember(slug: string) {
    setSelected(slug);
    const target = document.getElementById(`profile-${slug}`);
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {states.map((state) => (
          <button
            key={state}
            type="button"
            onClick={() => setActive(state)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === state
                ? "bg-accent text-white"
                : "bg-white text-gray-800 hover:bg-gray-200"
            }`}
          >
            {state}
          </button>
        ))}
      </div>

      <div id="team-grid" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((member) => (
          <TeamCard
            key={member.slug}
            member={member}
            selected={selected === member.slug}
            onSelect={() => openMember(member.slug)}
          />
        ))}
      </div>

      <div className="mt-16 space-y-10">
        {filtered.map((member) => {
          return (
            <article
              key={member.slug}
              id={`profile-${member.slug}`}
              className="scroll-mt-6 border-t border-gray-300 pt-10"
            >
              <div className="flex gap-6 md:gap-12">
                <div className="w-28 sm:w-44 md:w-52 shrink-0">
                  <div className="relative aspect-[4/5] bg-[#eceae6]">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="208px"
                      />
                    ) : null}
                  </div>
                  {member.location && (
                    <p className="text-xs text-gray-600 mt-3">{member.location}</p>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setCopied(false);
                      setContactMember(member);
                    }}
                    className="mt-3 inline-flex items-center justify-center bg-black px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-gray-800"
                  >
                    Contact
                  </button>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-3">
                    {member.title}
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    <span className="font-bold text-black">{profileLead(member)}.</span>{" "}
                    {member.bio}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {contactMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setContactMember(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-contact-title"
            className="w-full max-w-sm bg-white p-6 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              {contactMember.title}
            </p>
            <h3 id="team-contact-title" className="mt-1 text-xl font-bold text-black">
              {contactMember.name}
            </h3>
            {contactMember.location && (
              <p className="mt-1 text-sm text-gray-600">{contactMember.location}</p>
            )}
            <button
              type="button"
              onClick={() => copyEmail(contactMember.email)}
              className={`mt-5 w-full border border-gray-200 px-4 py-3 text-left transition duration-200 ease-out ${
                copied
                  ? "-translate-y-2 bg-gray-100 shadow-md"
                  : "hover:-translate-y-1 hover:bg-gray-100"
              }`}
            >
              <span className="block text-xs uppercase tracking-wide text-gray-500">
                Email
              </span>
              <span className="mt-1 block text-sm font-medium text-black">
                {contactMember.email}
              </span>
              <span className="mt-1 block text-xs text-gray-500">
                {copied ? "Copied" : "Click to copy"}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setContactMember(null)}
              className="mt-4 text-sm text-gray-600 hover:text-black"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
