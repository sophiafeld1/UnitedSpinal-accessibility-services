import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import StatBar from "@/components/StatBar";
import Timeline from "@/components/Timeline";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Accessibility Services specializes exclusively in making built environments accessible for people with disabilities, operating as a program of United Spinal Association.",
};

const servicesList = [
  "Plan reviews for new construction and renovations",
  "Construction site inspections for compliance monitoring",
  "Existing building accessibility assessments",
  "Expert witness services for legal compliance support",
  "Ongoing technical assistance throughout projects",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" />

      {/* Mission callout */}
      <section className="py-12 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
              <p className="text-gray-800 text-lg font-medium">
                Accessibility Services specializes exclusively in making built
                environments accessible for people with disabilities. A proud
                program of United Spinal Association, our unique expertise sets
                us apart.
              </p>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Operating as a program of United Spinal Association, we bring
              distinctive expertise that reassures clients about their
              accessibility needs. We were featured on the inaugural Forbes
              Accessibility 100 List in recognition of our commitment to
              inclusive design.
            </p>
          </div>
        </Container>
      </section>

      <StatBar />

      {/* History timeline */}
      <section className="py-16">
        <Container>
          <SectionHeading title="Our History" />
          <div className="max-w-4xl mx-auto">
            <Timeline />
          </div>
        </Container>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-bg-light">
        <Container>
          <div className="max-w-4xl mx-auto">
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
              {servicesList.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
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
          </div>
        </Container>
      </section>

      {/* Accreditations */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title="Our Accreditations"
            subtitle="We are recognized by leading industry organizations."
          />
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center min-w-[200px]">
              <p className="text-lg font-bold mb-1">AIA/CES</p>
              <p className="text-sm text-gray-600">
                Approved Provider of Continuing Education
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center min-w-[200px]">
              <p className="text-lg font-bold mb-1">ICC</p>
              <p className="text-sm text-gray-600">
                Registered Provider
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center min-w-[200px]">
              <p className="text-lg font-bold mb-1">United Spinal</p>
              <p className="text-sm text-gray-600">
                Program of United Spinal Association
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton href="/contact">Contact Us</CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
