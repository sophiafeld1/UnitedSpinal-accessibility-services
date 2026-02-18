import type { Metadata } from "next";
import Image from "next/image";
import { events } from "@/data/events";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Accessibility Services is a recognized continuing education provider for the AIA and the ICC, delivering specialized training programs.",
};

const offerings = [
  {
    title: "ADA Compliance Training",
    description:
      "Comprehensive training on the 2010 ADA Standards for Accessible Design, covering the most common compliance issues.",
  },
  {
    title: "Fair Housing Act Training",
    description:
      "Detailed training on Fair Housing Act design and construction requirements for multifamily housing.",
  },
  {
    title: "State Code Training",
    description:
      "State-specific accessibility training covering Texas Accessibility Standards, California Building Code, and more.",
  },
  {
    title: "Custom Programs",
    description:
      "Tailored training programs designed for your team's specific needs, delivered at your location or virtually.",
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageHeader title="Training" />

      <section className="py-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
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
              <p className="text-gray-700 leading-relaxed mb-6">
                Our experienced staff provides customized online webinars and
                in-firm accredited training and technical assistance on the
                latest city, state and federal accessibility requirements
                throughout the country.
              </p>

              {/* Accreditation badges */}
              <div className="flex gap-4 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                  AIA/CES Provider
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold">
                  ICC Registered Provider
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Training offerings */}
      <section className="py-16 bg-bg-light">
        <Container>
          <SectionHeading title="Training Offerings" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-bold mb-2">{o.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {o.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Upcoming Events */}
      {events.length > 0 && (
        <section className="py-16">
          <Container>
            <SectionHeading title="Upcoming Events" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard key={event.title} event={event} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        headline="Need Custom Training?"
        description="Contact us for additional information and pricing for virtual and in-person presentations."
        buttonText="Contact Us"
      />
    </>
  );
}
