import type { TrainingEvent } from "@/data/types";

interface EventCardProps {
  event: TrainingEvent;
}

const formatBadge: Record<string, string> = {
  "in-person": "bg-green-100 text-green-800",
  virtual: "bg-blue-100 text-blue-800",
  hybrid: "bg-purple-100 text-purple-800",
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold pr-4">{event.title}</h3>
        <span
          className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold capitalize flex-shrink-0 ${
            formatBadge[event.format] ?? "bg-gray-100 text-gray-800"
          }`}
        >
          {event.format}
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-2">
        {new Date(event.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        {event.location && ` | ${event.location}`}
      </p>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">
        {event.description}
      </p>
      {event.credits && (
        <p className="text-xs text-accent font-medium">{event.credits}</p>
      )}
      {event.registrationUrl && (
        <a
          href={event.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm text-accent hover:underline font-medium"
        >
          Register &rarr;
        </a>
      )}
    </div>
  );
}
