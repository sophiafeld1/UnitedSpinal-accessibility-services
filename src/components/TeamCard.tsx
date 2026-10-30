"use client";

import { useState } from "react";
import Image from "next/image";
import type { TeamMember } from "@/data/types";

interface TeamCardProps {
  member: TeamMember;
  selected: boolean;
  onSelect: () => void;
}

const BIO_WIDTH = 280;

export default function TeamCard({ member, selected, onSelect }: TeamCardProps) {
  const [openLeft, setOpenLeft] = useState(false);

  function placeBio(current: HTMLElement) {
    const rect = current.getBoundingClientRect();
    const spaceRight = window.innerWidth - rect.right;
    setOpenLeft(spaceRight < BIO_WIDTH + 24);
  }

  return (
    <div
      className={`team-card-wrap relative ${openLeft ? "team-card-wrap-left" : ""}`}
      onMouseEnter={(event) => placeBio(event.currentTarget)}
      onFocus={() => {
        const node = document.getElementById(`team-card-${member.slug}`);
        if (node?.parentElement) placeBio(node.parentElement);
      }}
    >
    <button
      id={`team-card-${member.slug}`}
      type="button"
      onClick={onSelect}
      aria-controls={`profile-${member.slug}`}
      aria-describedby={`bio-pop-${member.slug}`}
      className={`team-card w-full text-left bg-[#e6e6e6] rounded-lg overflow-hidden border shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
        selected ? "border-black" : "border-transparent"
      }`}
    >
      <div className="relative aspect-[4/5] bg-[#d9d9d9]">
        {member.image ? (
          <Image
            src={member.image}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 50vw"
          />
        ) : null}
      </div>
      <div className="p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-700 leading-snug line-clamp-2 min-h-8">
          {member.title}
        </p>
        <h3 className="text-sm font-bold text-black mt-1">{member.name}</h3>
        {member.location && (
          <p className="text-xs text-gray-500 mt-1">{member.location}</p>
        )}
      </div>
    </button>
      <div id={`bio-pop-${member.slug}`} className="team-bio" role="tooltip">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 leading-snug">
          {member.title}
        </p>
        <p className="mt-1 text-base font-bold text-black">{member.name}</p>
        {member.location && (
          <p className="mt-1 text-xs text-gray-500">{member.location}</p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-gray-700">{member.bio}</p>
      </div>
    </div>
  );
}
