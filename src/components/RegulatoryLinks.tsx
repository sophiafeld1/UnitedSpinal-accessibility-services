interface RegulatoryLink {
  label: string;
  url: string;
}

interface RegulatoryLinksProps {
  links: RegulatoryLink[];
  regulatoryBody?: string;
}

export default function RegulatoryLinks({
  links,
  regulatoryBody,
}: RegulatoryLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className="bg-bg-light rounded-lg p-6">
      {regulatoryBody && (
        <p className="font-semibold mb-3">{regulatoryBody}</p>
      )}
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline inline-flex items-center gap-1"
            >
              {link.label}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
