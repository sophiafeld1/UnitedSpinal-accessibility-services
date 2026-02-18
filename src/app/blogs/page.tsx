import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Latest blog posts from Accessibility Services on accessibility consulting, ADA compliance, and inclusive design.",
};

const blogPosts = [
  {
    title:
      "Accessibility Services Named in Forbes' first-ever Accessibility 100.",
    slug: "forbes-accessibility-100",
    image: "/images/blog/forbes-top100.jpg",
    excerpt:
      "Accessibility Services is proud to be recognized on the Forbes Accessibility 100 List for our commitment to inclusive design and accessibility.",
  },
  {
    title:
      "What is required for a business to make its doorway accessible?",
    slug: "doorway-accessible",
    image: "/images/blog/woman-opening-door.jpg",
    excerpt:
      "Understanding the requirements for making business doorways accessible under the ADA and other applicable codes.",
  },
  {
    title:
      "Accessibility Services Helps Museums Like This One Become Disability-Inclusive",
    slug: "museums-disability-inclusive",
    image: "/images/blog/wheelchair-simulator.jpg",
    excerpt:
      "How Accessibility Services works with museums and cultural institutions to create inclusive experiences for visitors with disabilities.",
  },
];

export default function BlogsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#f8f8f8] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Blogs
          </h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="blog-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="relative h-52">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 hover:text-[#dd3333] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
