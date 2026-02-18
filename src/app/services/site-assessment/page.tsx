import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Site Assessment",
  description:
    "Our trained professionals tour your facility, discuss concerns, and prepare comprehensive reports with design solutions.",
};

export default function SiteAssessmentPage() {
  return (
    <>
      <section className="bg-[#f8f8f8] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Site Assessment
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Image
            src="/images/services/assessment.jpg"
            alt="Site Assessment"
            width={1000}
            height={595}
            className="w-full h-auto rounded-lg mb-8"
          />
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            One of our trained professionals will tour the facility and discuss
            your concerns. A comprehensive report is prepared which summarizes
            the site visit and contains design solutions in the form of plans
            and specifications that address all the issues discovered during the
            site visit.
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
