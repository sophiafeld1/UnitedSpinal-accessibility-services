import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="blog-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
    >
      <div className="relative h-52">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        {post.date && (
          <p className="text-xs text-gray-400 mb-2">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            {post.author && ` | ${post.author}`}
          </p>
        )}
        <h3 className="text-lg font-bold mb-2 hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
      </div>
    </Link>
  );
}
