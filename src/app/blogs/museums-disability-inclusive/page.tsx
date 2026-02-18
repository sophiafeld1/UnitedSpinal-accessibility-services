import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Accessibility Services Helps Museums Like This One Become Disability-Inclusive",
  description:
    "How Accessibility Services works with museums to create inclusive experiences for visitors with disabilities.",
};

export default function MuseumsPost() {
  return (
    <>
      <section className="bg-[#f8f8f8] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Accessibility Services Helps Museums Like This One Become
            Disability-Inclusive
          </h1>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <Image
            src="/images/blog/wheelchair-simulator.jpg"
            alt="Boy in wheelchair simulator at museum"
            width={730}
            height={500}
            className="w-full h-auto rounded-lg mb-8"
          />
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Accessibility Services works with museums and cultural institutions
            to create inclusive experiences for visitors with disabilities,
            ensuring that everyone can enjoy and benefit from these important
            community resources.
          </p>
          <div className="mt-8">
            <Link
              href="/blogs"
              className="text-[#dd3333] hover:underline font-medium"
            >
              &larr; Back to Blogs
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
