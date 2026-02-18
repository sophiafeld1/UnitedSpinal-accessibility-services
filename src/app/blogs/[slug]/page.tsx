import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogBySlug } from "@/data/blogs";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.excerpt,
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <PageHeader title={post.title} />

      <article className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            {post.date && (
              <p className="text-sm text-gray-400 mb-6">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                {post.author && ` | ${post.author}`}
              </p>
            )}

            <Image
              src={post.image}
              alt={post.title}
              width={785}
              height={540}
              className="w-full h-auto rounded-lg mb-8"
            />

            {post.content.map((para, i) => (
              <p
                key={i}
                className="text-gray-700 text-lg leading-relaxed mb-6"
              >
                {para}
              </p>
            ))}

            <div className="mt-8">
              <Link
                href="/blogs"
                className="text-accent hover:underline font-medium"
              >
                &larr; Back to Blogs
              </Link>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
