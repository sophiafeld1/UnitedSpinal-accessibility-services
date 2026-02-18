export interface TeamMember {
  name: string;
  title: string;
  email: string;
  bio: string;
  image: string;
  slug: string;
  location?: string;
  credentials?: string[];
}

export type ServiceCategory = "core" | "state-specific" | "specialized";

export interface Service {
  title: string;
  slug: string;
  image: string;
  description: string;
  painPointHeadline: string;
  category: ServiceCategory;
  featured: boolean;
  metaTitle?: string;
  metaDescription?: string;
  longDescription?: string[];
  stateSpecific?: {
    state: string;
    regulatoryBody?: string;
    regulatoryLinks?: { label: string; url: string }[];
    feeSchedule?: { tier: string; description: string; price: string }[];
  };
}

export type ProjectVertical =
  | "residential"
  | "hotel"
  | "retail"
  | "educational"
  | "civic"
  | "office"
  | "entertainment"
  | "healthcare"
  | "transit"
  | "recreation";

export interface Project {
  name: string;
  client?: string;
  vertical: ProjectVertical;
  location?: string;
  description: string;
  logo?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  date: string;
  author?: string;
  content: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company?: string;
  serviceSlug?: string;
}

export interface FAQ {
  question: string;
  answer: string;
  serviceSlug?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface OfficeLocation {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone?: string;
  email?: string;
  isPrimary?: boolean;
}

export interface TrainingEvent {
  title: string;
  date: string;
  format: "in-person" | "virtual" | "hybrid";
  location?: string;
  description: string;
  registrationUrl?: string;
  credits?: string;
}
