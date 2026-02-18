import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Consulting",
  description:
    "We will get your project through the myriad of state and federal accessibility requirements to successful completion.",
};

const consultingServices = [
  {
    title: "Plan/Code Review",
    href: "/services/code-review",
    image: "/images/services/planning.jpg",
    description:
      "We will perform a comprehensive and accurate review of your plans, in a timely fashion, for compliance with applicable accessibility codes. Our review covers all occupancy classifications, with documented deficiencies and graphic solutions provided.",
  },
  {
    title: "Design and Consultation",
    href: "/services/design-and-consultation",
    image: "/images/services/design.jpg",
    description:
      "Depending on your requirements, we can develop conceptual drawings for your project as well as construction documents. We are a premier resource for architects and building owners for design assistance to incorporating accessible elements into a project.",
  },
  {
    title: "Site Assessment",
    href: "/services/site-assessment",
    image: "/images/services/assessment.jpg",
    description:
      "One of our trained professionals will tour the facility and discuss your concerns. A comprehensive report is prepared which summarizes the site visit and contains design solutions in the form of plans and specifications.",
  },
];

export default function ConsultingPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#f8f8f8] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Accessibility Consulting
          </h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
            We will get your project through the myriad of state and federal
            accessibility requirements to successful completion.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Using current standards, our team evaluates existing building sites
              or design documents and provides recommendations to ensure that
              your project is in compliance with applicable codes. We serve
              architects, engineers, code officials, building owners, developers,
              facility managers, and other professionals responsible for built
              environment accessibility.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you work with Accessibility Services, you get an entire team
              for the same cost as a single consultant. We apply our 50+ years of
              combined experience and provide appropriate attention to your
              project regardless of size. Our disability attorneys back all
              recommendations, and fee-for-service accessible design services are
              available.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultingServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-52">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#dd3333] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
