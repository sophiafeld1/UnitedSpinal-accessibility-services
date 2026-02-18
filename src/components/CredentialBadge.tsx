interface CredentialBadgeProps {
  credential: string;
}

const colors: Record<string, string> = {
  AIA: "bg-blue-100 text-blue-800",
  CASp: "bg-green-100 text-green-800",
  ICC: "bg-purple-100 text-purple-800",
  "ICC-AIPE": "bg-purple-100 text-purple-800",
  MCP: "bg-amber-100 text-amber-800",
  "NYS-CEO": "bg-orange-100 text-orange-800",
  RAS: "bg-teal-100 text-teal-800",
};

export default function CredentialBadge({ credential }: CredentialBadgeProps) {
  const colorClass = colors[credential] ?? "bg-gray-100 text-gray-800";
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${colorClass}`}
    >
      {credential}
    </span>
  );
}
