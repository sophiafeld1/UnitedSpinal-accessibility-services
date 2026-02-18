import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "From giant sports stadiums to mom-and-pop restaurants, we have provided accessibility consulting services for a wide range of projects.",
};

const serviceAreas = [
  "Architectural Firms",
  "Commerce and Industry",
  "Education Facilities",
  "Hotels",
  "Local, State, and Federal Government Administration",
  "Mass Transit",
  "Medical Facilities",
  "Museums",
  "Recreation",
];

export default function ProjectsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#f8f8f8] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Projects
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-gray-700 leading-relaxed text-lg">
              From giant sports stadiums to mom-and-pop restaurants, we have
              provided accessibility consulting services for a wide range of
              projects. While we respect our clients&apos; privacy and sign
              non-disclosure agreements upon request, we are proud to share these
              notable projects:
            </p>
          </div>

          {/* Client Logos */}
          <div className="mb-16">
            <Image
              src="/images/projects/project-logos.jpg"
              alt="Notable client logos including United Nations, Highmark Stadium, San Diego Zoo, Marriott, and Urban Edge Properties"
              width={1000}
              height={200}
              className="w-full max-w-4xl mx-auto h-auto"
            />
          </div>

          {/* Service Areas */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              Service Areas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center"
                >
                  <p className="font-medium text-gray-700">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
