import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Services Named in Forbes' first-ever Accessibility 100",
  description:
    "Accessibility Services is proud to be recognized on the Forbes Accessibility 100 List.",
};

export default function ForbesPost() {
  return (
    <>
      <section className="bg-[#f8f8f8] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Accessibility Services Named in Forbes&apos; first-ever Accessibility 100.
          </h1>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <Image
            src="/images/blog/forbes-top100.jpg"
            alt="Forbes Accessibility 100"
            width={785}
            height={540}
            className="w-full h-auto rounded-lg mb-8"
          />
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Accessibility Services is proud to be recognized on the Forbes
            Accessibility 100 List for our commitment to inclusive design and
            accessibility.
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
