import type { Metadata } from "next";
import { getServicesByCategory } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { getGeneralFAQs } from "@/data/faqs";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Accessibility Consulting",
  description:
    "We will get your project through the myriad of state and federal accessibility requirements to successful completion.",
};

export default function ConsultingPage() {
  const coreServices = getServicesByCategory("core");
  const stateServices = getServicesByCategory("state-specific");
  const specializedServices = getServicesByCategory("specialized");
  const generalFaqs = getGeneralFAQs();

  return (
    <>
      <PageHeader
        title="Accessibility Consulting"
        subtitle="We will get your project through the myriad of state and federal accessibility requirements to successful completion."
      />

      <section className="py-16">
        <Container>
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

          {/* Core Services */}
          <SectionHeading title="Our Services" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {coreServices.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                variant="light"
              />
            ))}
          </div>

          {/* State-Specific Services */}
          <SectionHeading
            title="State-Specific Services"
            subtitle="Specialized compliance services for states with unique accessibility requirements."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
            {stateServices.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                variant="light"
              />
            ))}
          </div>

          {/* Specialized Services */}
          {specializedServices.length > 0 && (
            <>
              <SectionHeading
                title="Specialized Services"
                subtitle="Additional expertise for specific project needs."
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {specializedServices.map((service) => (
                  <ServiceCard
                    key={service.slug}
                    service={service}
                    variant="light"
                  />
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-bg-light">
        <Container>
          <SectionHeading title="What Our Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.slice(0, 4).map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={generalFaqs} />
          </div>
        </Container>
      </section>

      <CTASection
        headline="Ready to Get Started?"
        description="Contact us for a free consultation about your accessibility needs."
      />
    </>
  );
}
