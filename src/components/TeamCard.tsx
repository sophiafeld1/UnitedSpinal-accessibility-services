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
      className={`team-card w-full text-left bg-white rounded-lg overflow-hidden border shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
        selected ? "border-black" : "border-transparent"
      }`}
    >
      <div className="relative aspect-[4/5] bg-[#eceae6]">
        {member.image ? (
          <Image
            src={member.image}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          />
        ) : null}
      </div>
      <div className="p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-700 leading-snug line-clamp-2 min-h-8">
          {member.title}
        </p>
        <h3 className="text-base font-bold text-black mt-1">{member.name}</h3>
        {member.location && (
          <p className="text-xs text-gray-500 mt-1">{member.location}</p>
        )}
      </div>
    </button>
  );
}
