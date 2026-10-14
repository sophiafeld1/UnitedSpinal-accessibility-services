import Image from "next/image";
import type { TeamMember } from "@/data/types";

interface TeamCardProps {
  member: TeamMember;
  selected: boolean;
  onSelect: () => void;
}

export default function TeamCard({ member, selected, onSelect }: TeamCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-controls={`profile-${member.slug}`}
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
            sizes="(min-width: 1024px) 14vw, (min-width: 640px) 25vw, 50vw"
          />
        ) : null}
      </div>
      <div className="p-2">
        <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-700 leading-snug line-clamp-2 min-h-6">
          {member.title}
        </p>
        <h3 className="text-xs font-bold text-black mt-1">{member.name}</h3>
        {member.location && (
          <p className="text-[10px] text-gray-500 mt-1">{member.location}</p>
        )}
      </div>
    </button>
  );
}
