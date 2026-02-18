import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design and Consultation",
  description:
    "We develop conceptual drawings and construction documents, serving as a premier resource for architects and building owners.",
};

export default function DesignConsultationPage() {
  return (
    <>
      <section className="bg-[#f8f8f8] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Design and Consultation
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Image
            src="/images/services/design.jpg"
            alt="Design and Consultation"
            width={1000}
            height={595}
            className="w-full h-auto rounded-lg mb-8"
          />
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Depending on your requirements, we can develop conceptual drawings
            for your project as well as construction documents. We are a premier
            resource for architects and building owners for design assistance to
            incorporating accessible elements into a project.
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
