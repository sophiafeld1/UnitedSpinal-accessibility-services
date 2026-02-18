import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Accessibility Services specializes exclusively in making built environments accessible for people with disabilities, operating as a program of United Spinal Association.",
};

const services = [
  "Plan reviews for new construction and renovations",
  "Construction site inspections for compliance monitoring",
  "Existing building accessibility assessments",
  "Expert witness services for legal compliance support",
  "Ongoing technical assistance throughout projects",
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#f8f8f8] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About Us
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Accessibility Services specializes exclusively in making built
            environments accessible for people with disabilities. Operating as a
            program of United Spinal Association, we bring distinctive expertise
            that reassures clients about their accessibility needs.
          </p>

          <div className="bg-[#dd3333]/10 border-l-4 border-[#dd3333] p-6 rounded-r-lg mb-8">
            <p className="text-gray-800 font-medium">
              Accessibility Services was featured on the inaugural Forbes
              Accessibility 100 List in recognition of our commitment to
              inclusive design.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4">Our History</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We helped write the landmark Americans with Disabilities Act, as
            well as the Air Carrier Access Act and Fair Housing Amendments Act.
            We actively collaborate with jurisdictions on building code updates
            and partner with the International Building Code Council on
            accessibility standards.
          </p>

          <h2 className="text-2xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            With our decades of experience, Accessibility Services can help you
            navigate the often conflicting requirements of aesthetics and
            accessibility. We will keep you updated on changes and revisions in
            building codes at all levels, offering innovative solutions to
            accessibility for any facility.
          </p>

          <h3 className="text-xl font-bold mb-4">Our Services Include:</h3>
          <ul className="space-y-3 mb-8">
            {services.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#dd3333] mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{service}</span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-[#dd3333] text-white px-8 py-3 rounded font-semibold hover:bg-[#bb2222] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
