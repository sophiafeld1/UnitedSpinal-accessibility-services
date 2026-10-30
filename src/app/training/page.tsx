import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Accessibility Services provides tailored accessibility training and continuing education credits for design professionals. Contact us to schedule a session.",
};

const offerings = [
  {
    id: "ada-training",
    label: "ADA Training",
    title: "ADA Training",
    description:
      "Training on the ADA Standards for Accessible Design, focused on the issues that come up most often in new construction and renovations.",
  },
  {
    id: "housing-training",
    label: "Housing",
    title: "Housing Training",
    description:
      "Training on Fair Housing Act design and construction requirements for multifamily housing.",
  },
  {
    id: "state-local-training",
    label: "State and Local Codes",
    title: "State and Local Code Training",
    description:
      "State and local accessibility training, including the Texas Accessibility Standards and the California Building Code.",
  },
  {
    id: "continuing-education",
    label: "Continuing Education",
    title: "Continuing Education Credits",
    description:
      "We provide continuing education for design professionals who need hours for licenses and certifications. Accessibility Services is a recognized provider for the American Institute of Architects (AIA) and the International Code Council (ICC). Sessions can include a certificate with the hours completed, the topic, and the date, including for people who do not need formal credits.",
  },
  {
    id: "custom-training",
    label: "Custom Training",
    title: "Custom Training",
    description:
      "Trainings are tailored to the group. A session can be one hour, several hours, a full day, or several days, in your office or online. Topics can focus on residential work, commercial work, the ADA, or a mix you choose.",
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageHeader title="Training" />

      <section className="border-b border-gray-200 bg-bg-light py-8">
        <Container>
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-gray-600">
            Training offerings
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {offerings.map((offering) => (
              <a
                key={offering.id}
                href={`#${offering.id}`}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-200"
              >
                {offering.label}
              </a>
            ))}
          </div>
          <div className="mt-6 text-center">
            <CTAButton href="/contact?service=training">
              Contact us about training
            </CTAButton>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-col items-start gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <Image
                src="/images/training.jpg"
                alt="Dominic Marinelli, VP of Accessibility Services, training at a conference in Florida"
                width={600}
                height={400}
                className="h-auto w-full rounded-lg shadow-md"
              />
              <p className="mt-2 text-center text-sm italic text-gray-500">
                Dominic Marinelli, VP of Accessibility Services, training at a
                conference in Florida.
              </p>
            </div>

            <div className="lg:w-1/2">
              <h2 className="mb-6 text-2xl font-bold">Accessible Training</h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                Accessibility Services provides training for teams that need
                accessibility education, including continuing education for
                design professionals. Right now, trainings are scheduled when
                you contact us. We can come to your office or host the session
                online.
              </p>
              <p className="mb-6 leading-relaxed text-gray-700">
                Tell us the topic, the audience, and how long you have. A
                session can be short or run for several days, and it can focus
                on residential work, commercial work, the ADA, or another
                accessibility topic you need covered.
              </p>
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                  AIA/CES Provider
                </span>
                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-800">
                  ICC Registered Provider
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-bg-light py-16">
        <Container>
          <SectionHeading title="Training Offerings" />
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {offerings.map((offering) => (
              <div
                key={offering.id}
                id={offering.id}
                className="scroll-mt-28 rounded-lg border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 text-lg font-bold">{offering.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        headline="Request a Consultation or Training"
        description="Contact us to schedule a training, ask for a session tailored to your team, or request a free project consultation."
        buttonText="Request a Free Consultation or Training"
        buttonHref="/contact?service=training"
      />
    </>
  );
}
