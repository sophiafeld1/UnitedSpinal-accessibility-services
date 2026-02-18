import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expert Witness",
  description:
    "Our expert witnesses are knowledgeable on matters related to ADA Compliance, providing advice on accommodation and accessibility consulting.",
};

export default function ExpertWitnessPage() {
  return (
    <>
      <section className="bg-[#f8f8f8] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Expert Witness
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Image
            src="/images/services/witness.jpg"
            alt="Expert Witness Services"
            width={1000}
            height={595}
            className="w-full h-auto rounded-lg mb-8"
          />
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our expert witnesses are knowledgeable on matters related to
            Americans with Disabilities Act (ADA) Compliance. We provide advice
            on accommodation, accessibility consulting, and expert testimonies
            regarding accessibility designs, ADA Facility Accessibility Surveys,
            and building code requirements.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The work of our team has become essential in responding to the
            growing number of accessibility-based lawsuits. We support United
            Spinal Association&apos;s philosophy of collaborative work with
            building owners and architects to achieve genuine accessibility
            improvements.
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
