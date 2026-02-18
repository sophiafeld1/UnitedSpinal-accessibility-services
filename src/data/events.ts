import type { TrainingEvent } from "./types";

// Placeholder events - replace with real schedule when available
export const events: TrainingEvent[] = [
  {
    title: "ADA Compliance Essentials for Architects",
    date: "2026-04-15",
    format: "virtual",
    description:
      "A comprehensive overview of ADA Standards for Accessible Design, covering the most common compliance issues in new construction and renovations.",
    credits: "AIA/CES 4.0 LU|HSW",
  },
  {
    title: "Fair Housing Act Accessibility Requirements",
    date: "2026-05-20",
    format: "virtual",
    description:
      "Detailed training on the Fair Housing Act design and construction requirements for multifamily housing.",
    credits: "AIA/CES 3.0 LU|HSW",
  },
  {
    title: "Texas Accessibility Standards Workshop",
    date: "2026-06-10",
    format: "in-person",
    location: "Dallas, TX",
    description:
      "In-depth workshop covering Texas Accessibility Standards (TAS) and TDLR compliance requirements.",
    credits: "ICC 6.0 CEU",
  },
];

export function getUpcomingEvents(): TrainingEvent[] {
  const now = new Date().toISOString().split("T")[0];
  return events.filter((e) => e.date >= now);
}
