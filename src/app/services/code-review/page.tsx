import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plan/Code Review",
  description:
    "Comprehensive and accurate review of your plans for compliance with applicable accessibility codes.",
};

export default function CodeReviewPage() {
  return (
    <>
      <section className="bg-[#f8f8f8] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Plan/Code Review
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Image
            src="/images/services/planning.jpg"
            alt="Plan/Code Review"
            width={1000}
            height={595}
            className="w-full h-auto rounded-lg mb-8"
          />
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We will perform a comprehensive and accurate review of your plans,
            in a timely fashion, for compliance with applicable accessibility
            codes. Our review covers all occupancy classifications, with
            documented deficiencies and graphic solutions provided.
          </p>
          <div className="mt-8">
            <Link
              href="/consulting"
              className="text-[#dd3333] hover:underline font-medium"
            >
              &larr; Back to Accessibility Consulting
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
