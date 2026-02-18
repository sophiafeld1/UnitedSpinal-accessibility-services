import type { Project, ProjectVertical } from "./types";

export const projects: Project[] = [
  {
    name: "United Nations Headquarters",
    client: "United Nations",
    vertical: "civic",
    location: "New York, NY",
    description:
      "Comprehensive accessibility assessment and consulting for the United Nations headquarters renovation project.",
  },
  {
    name: "Highmark Stadium",
    client: "Buffalo Bills",
    vertical: "entertainment",
    location: "Orchard Park, NY",
    description:
      "Accessibility consulting for one of the NFL's premier stadium facilities.",
  },
  {
    name: "San Diego Zoo",
    client: "San Diego Zoo Wildlife Alliance",
    vertical: "recreation",
    location: "San Diego, CA",
    description:
      "Accessibility assessment and design consultation for zoo facilities and exhibits.",
  },
  {
    name: "Marriott Hotels",
    client: "Marriott International",
    vertical: "hotel",
    location: "Multiple Locations",
    description:
      "Ongoing accessibility consulting for hotel properties nationwide.",
  },
  {
    name: "Urban Edge Properties",
    client: "Urban Edge Properties",
    vertical: "retail",
    location: "Multiple Locations",
    description:
      "Accessibility compliance services for a portfolio of retail properties.",
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
