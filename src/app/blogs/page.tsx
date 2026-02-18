import type { Metadata } from "next";
import { blogPosts } from "@/data/blogs";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Latest blog posts from Accessibility Services on accessibility consulting, ADA compliance, and inclusive design.",
};

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        title="Blogs"
        subtitle="Insights on ADA compliance, inclusive design, and the latest in accessibility standards from our team of certified specialists."
      />

      <section className="py-16">
        <Container>
          <SectionHeading title="Latest Articles" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      {/* Topics section to add visual weight */}
      <section className="py-16 bg-bg-light">
        <Container>
          <SectionHeading
            title="Topics We Cover"
            subtitle="Our team writes about the issues that matter most to architects, developers, and facility managers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "ADA Compliance", desc: "Federal standards and requirements" },
              { label: "State Regulations", desc: "TX RAS, CASp, and local codes" },
              { label: "Inclusive Design", desc: "Universal design principles" },
              { label: "Industry News", desc: "Awards, events, and updates" },
            ].map((topic) => (
              <div
                key={topic.label}
                className="bg-white p-6 rounded-lg border border-gray-100 text-center"
              >
                <h4 className="font-bold mb-1">{topic.label}</h4>
                <p className="text-sm text-gray-500">{topic.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        headline="Have a Question About Accessibility?"
        description="Our team is here to help. Reach out for a free consultation on your project's accessibility requirements."
      />
    </>
  );
}
