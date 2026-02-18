import Image from "next/image";
import type { TeamMember } from "@/data/types";
import CredentialBadge from "./CredentialBadge";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="team-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      <div className="relative h-72 bg-gray-100">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold">{member.name}</h3>
        <p className="text-accent text-sm font-medium mb-1">{member.title}</p>
        {member.credentials && member.credentials.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {member.credentials.map((c) => (
              <CredentialBadge key={c} credential={c} />
            ))}
          </div>
        )}
        {member.location && (
          <p className="text-xs text-gray-400 mb-2">
            Based in {member.location}
          </p>
        )}
        <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
        <a
          href={`mailto:${member.email}`}
          className="text-sm text-accent hover:underline"
        >
          {member.email}
        </a>
      </div>
    </div>
  );
}
