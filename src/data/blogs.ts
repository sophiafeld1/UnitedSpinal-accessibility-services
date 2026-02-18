import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    title:
      "Accessibility Services Named in Forbes' first-ever Accessibility 100.",
    slug: "forbes-accessibility-100",
    image: "/images/blog/forbes-top100.jpg",
    excerpt:
      "Accessibility Services is proud to be recognized on the Forbes Accessibility 100 List for our commitment to inclusive design and accessibility.",
    date: "2024-12-15",
    author: "Accessibility Services",
    content: [
      "Accessibility Services is proud to be recognized on the Forbes Accessibility 100 List for our commitment to inclusive design and accessibility.",
    ],
    metaTitle:
      "Accessibility Services Named in Forbes' first-ever Accessibility 100",
    metaDescription:
      "Accessibility Services is proud to be recognized on the Forbes Accessibility 100 List.",
  },
  {
    title: "What is required for a business to make its doorway accessible?",
    slug: "doorway-accessible",
    image: "/images/blog/woman-opening-door.jpg",
    excerpt:
      "Understanding the requirements for making business doorways accessible under the ADA and other applicable codes.",
    date: "2024-10-08",
    author: "Accessibility Services",
    content: [
      "Understanding the requirements for making business doorways accessible under the ADA and other applicable codes is essential for any business owner.",
    ],
    metaTitle:
      "What is required for a business to make its doorway accessible?",
    metaDescription:
      "Understanding the requirements for making business doorways accessible under the ADA.",
  },
  {
    title:
      "Accessibility Services Helps Museums Like This One Become Disability-Inclusive",
    slug: "museums-disability-inclusive",
    image: "/images/blog/wheelchair-simulator.jpg",
    excerpt:
      "How Accessibility Services works with museums and cultural institutions to create inclusive experiences for visitors with disabilities.",
    date: "2024-08-22",
    author: "Accessibility Services",
    content: [
      "Accessibility Services works with museums and cultural institutions to create inclusive experiences for visitors with disabilities, ensuring that everyone can enjoy and benefit from these important community resources.",
    ],
    metaTitle:
      "Accessibility Services Helps Museums Like This One Become Disability-Inclusive",
    metaDescription:
      "How Accessibility Services works with museums to create inclusive experiences for visitors with disabilities.",
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((b) => b.slug === slug);
}
