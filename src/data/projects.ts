import type { Project, ProjectVertical } from "./types";

export const projects: Project[] = [
  {
    name: "Sports stadium",
    vertical: "entertainment",
    description:
      "Accessibility consulting for a large sports venue, including seating, routes, and restrooms.",
  },
  {
    name: "Museum and cultural campus",
    vertical: "recreation",
    description:
      "Assessment and design consultation for exhibit spaces, paths, and visitor amenities.",
  },
  {
    name: "Hotel properties",
    vertical: "hotel",
    description:
      "Ongoing accessibility consulting across a group of hotel properties.",
  },
];

export const projectVerticals: { value: ProjectVertical; label: string }[] = [
  { value: "residential", label: "Residential" },
  { value: "hotel", label: "Hotels" },
  { value: "retail", label: "Retail" },
  { value: "educational", label: "Education" },
  { value: "civic", label: "Civic & Government" },
  { value: "office", label: "Office" },
  { value: "entertainment", label: "Entertainment" },
  { value: "healthcare", label: "Healthcare" },
  { value: "transit", label: "Transit" },
  { value: "recreation", label: "Recreation" },
];

export const serviceAreas = [
  "Architectural Firms",
  "Commerce and Industry",
  "Education Facilities",
  "Hotels",
  "Local, State, and Federal Government Administration",
  "Mass Transit",
  "Medical Facilities",
  "Museums",
  "Recreation",
];

export function getProjectsByVertical(vertical: ProjectVertical): Project[] {
  return projects.filter((p) => p.vertical === vertical);
}
