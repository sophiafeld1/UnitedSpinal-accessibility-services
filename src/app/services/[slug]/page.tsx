import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import { getTestimonialsByService } from "@/data/testimonials";
import { getFAQsByService } from "@/data/faqs";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCard from "@/components/ServiceCard";
import FeeScheduleTable from "@/components/FeeScheduleTable";
import RegulatoryLinks from "@/components/RegulatoryLinks";
import CaspDetails from "@/components/CaspDetails";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle ?? service.title,
    description: service.metaDescription ?? service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const testimonials = getTestimonialsByService(slug);
  const faqs = getFAQsByService(slug);
  const related = getRelatedServices(slug);

  return (
    <>
      <section className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
        <Image
          src={service.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {service.title}
            </h1>
            <div
              className="h-1 w-14 bg-accent rounded-full mx-auto"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {slug === "casp" ? (
        <>
          <CaspDetails />
          {related.length > 0 && (
            <section className="pb-16">
              <Container>
                <h2 className="text-2xl font-bold mb-6">Related Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {related.map((s) => (
                    <ServiceCard key={s.slug} service={s} variant="light" />
                  ))}
                </div>
              </Container>
            </section>
          )}
        </>
      ) : (
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Pain-point headline */}
            <p className="text-xl text-accent font-medium italic mb-6">
              {service.painPointHeadline}
            </p>

            {/* Description paragraphs */}
            {service.longDescription?.map((para, i) => (
              <p key={i} className="text-gray-700 text-lg leading-relaxed mb-6">
                {para}
              </p>
            ))}

            {/* State-specific sections */}
            {service.stateSpecific && (
              <div className="mt-12 space-y-8">
                {service.stateSpecific.regulatoryLinks &&
                  service.stateSpecific.regulatoryLinks.length > 0 && (
                    <RegulatoryLinks
                      links={service.stateSpecific.regulatoryLinks}
                      regulatoryBody={service.stateSpecific.regulatoryBody}
                    />
                  )}

                {service.stateSpecific.feeSchedule &&
                  service.stateSpecific.feeSchedule.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Fee Schedule</h2>
                      <FeeScheduleTable
                        rows={service.stateSpecific.feeSchedule}
                      />
                    </div>
                  )}
              </div>
            )}

            {/* Testimonials */}
            {testimonials.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6">
                  What Our Clients Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials.map((t, i) => (
                    <TestimonialCard key={i} testimonial={t} />
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {faqs.length > 0 && (
              <div className="mt-16">
                <FAQAccordion faqs={faqs} />
              </div>
            )}

            {/* Related Services */}
            {related.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6">Related Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {related.map((s) => (
                    <ServiceCard key={s.slug} service={s} variant="light" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
      )}

      {slug !== "casp" && (
        <CTASection
          headline={`Get a Free Consultation About ${service.title}`}
          description="Our team of certified specialists is ready to help with your project."
          buttonHref={`/contact?service=${service.slug}`}
        />
      )}
    </>
  );
}
