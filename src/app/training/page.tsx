import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Accessibility Services is a recognized continuing education provider for the AIA and the ICC, delivering specialized training programs.",
};

export default function TrainingPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#f8f8f8] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Training
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Image */}
            <div className="lg:w-1/2">
              <Image
                src="/images/training.jpg"
                alt="Dominic Marinelli, VP of Accessibility Services, training at a conference in Florida"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto shadow-md"
              />
              <p className="text-sm text-gray-500 mt-2 italic text-center">
                Dominic Marinelli, VP of Accessibility Services, training at a
                conference in Florida.
              </p>
            </div>

            {/* Content */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold mb-6">
                Accessibility Training
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Accessibility Services is a recognized continuing education
                provider for both the American Institute of Architects (AIA) and
                the International Code Council (ICC). We deliver specialized
                training programs customized to your requirements, offered either
                at your location or via virtual formats.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Our experienced staff provides customized online webinars and
                in-firm accredited training and technical assistance on the
                latest city, state and federal accessibility requirements
                throughout the country.
              </p>
              <div className="bg-[#f8f8f8] p-6 rounded-lg">
                <p className="text-gray-700 font-medium mb-4">
                  Contact us for additional information and pricing for virtual
                  and in-person presentations.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#dd3333] text-white px-6 py-3 rounded font-semibold hover:bg-[#bb2222] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
