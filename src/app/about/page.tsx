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
    "Mission-focused accessibility experts. A program of United Spinal Association; we work with architects, contractors, and developers.",
};

const servicesList = [
  "Plan reviews for new buildings and alterations, from schematic design through construction drawings",
  "Site inspections throughout construction for new buildings and renovations",
  "Existing building inspections to ensure compliance with current codes and laws",
  "Expert witness services to help businesses become as accessible as possible and support efforts when facing legal action",
  "Ongoing technical assistance and guidance so your facility remains accessible and compliant",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" compact />

      {/* About intro + what we do */}
      <section className="py-8 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-5">
            <p className="text-gray-800 text-lg leading-relaxed">
              We are mission-focused experts who work with architects,
              contractors, and developers to make buildings and sites
              accessible and compliant. As a program of United Spinal
              Association, we bring deep, practical knowledge of accessibility
              needs to every project.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We&apos;re proud to be recognized on the first-ever Forbes
              Accessibility 100 List for our commitment to inclusive design and
              accessibility.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We helped write the landmark Americans with Disabilities Act, the
              Air Carrier Access Act, and the Fair Housing Amendments Act. Today
              we work with local and state jurisdictions to update building
              codes and with the International Code Council on IBC and IEBC
              accessibility requirements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With our decades of experience, we help you navigate the often
              conflicting requirements of aesthetics and accessibility, keep you
              updated on changes and revisions in building codes at all levels,
              and offer innovative solutions for any facility.
            </p>
            <h2 className="text-xl font-bold text-gray-900 pt-2">We offer:</h2>
            <ul className="space-y-2">
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

      <StatBar />

      {/* History timeline */}
      <section className="py-10">
        <Container>
          <SectionHeading title="Our History" />
          <div className="max-w-4xl mx-auto">
            <Timeline />
          </div>
        </Container>
      </section>

      {/* Accreditations */}
      <section className="py-10">
        <Container>
          <SectionHeading
            title="Our Accreditations"
            subtitle="We are recognized by leading industry organizations."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center min-w-[200px]">
              <p className="text-lg font-bold mb-1">AIA/CES</p>
              <p className="text-sm text-gray-600">
                Approved Provider of Continuing Education
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center min-w-[200px]">
              <p className="text-lg font-bold mb-1">ICC</p>
              <p className="text-sm text-gray-600">
                Registered Provider
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center min-w-[200px]">
              <p className="text-lg font-bold mb-1">United Spinal</p>
              <p className="text-sm text-gray-600">
                Program of United Spinal Association
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <CTAButton href="/contact">Contact Us</CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
