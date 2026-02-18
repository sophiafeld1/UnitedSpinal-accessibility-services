import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is required for a business to make its doorway accessible?",
  description:
    "Understanding the requirements for making business doorways accessible under the ADA.",
};

export default function DoorwayPost() {
  return (
    <>
      <section className="bg-[#f8f8f8] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            What is required for a business to make its doorway accessible?
          </h1>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <Image
            src="/images/blog/woman-opening-door.jpg"
            alt="Woman opening accessible doorway"
            width={782}
            height={534}
            className="w-full h-auto rounded-lg mb-8"
          />
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Understanding the requirements for making business doorways
            accessible under the ADA and other applicable codes is essential for
            any business owner.
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
