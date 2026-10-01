import Image from "next/image";
import Link from "next/link";
import { getFeaturedServices } from "@/data/services";
import { blogPosts } from "@/data/blogs";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import StatBar from "@/components/StatBar";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import ScrollReveal from "@/components/ScrollReveal";

const aboutItems = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a7 7 0 017 7c0 2.862-1.782 5.526-3.999 7.834A33.3 33.3 0 0112 19.5a33.3 33.3 0 01-3.001-2.666C6.782 14.526 5 11.862 5 9a7 7 0 017-7zm0 4a3 3 0 100 6 3 3 0 000-6z" />
      </svg>
    ),
    title: "Accessibility Services",
    text: "With our decades of experience, Accessibility Services can help you navigate the often conflicting requirements of aesthetics and accessibility. We will keep you updated on changes and revisions in building codes at all levels, offering innovative solutions to accessibility for any facility.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
      </svg>
    ),
    title: "Accessibility Consulting",
    text: "We work with you throughout your project, from reviewing architectural plans to site inspections and every step in between. Frequently overlooked aspects of building design, such as the placement of grab bars, doorway widths and ramp slopes, can create insurmountable difficulties for people with disabilities.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
      </svg>
    ),
    title: "Accessibility Training",
    text: "Accessibility Services is a widely respected, registered provider of continuing education for the American Institute of Architects (AIA) and the International Code Council (ICC). We offer custom-designed training programs tailored to your needs and conveniently presented at your facility or virtually.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
    title: "A Program of United Spinal Association",
    text: "Accessibility Services is renowned for its exclusive dedication to making our built environment accessible to people with disabilities. A proud program of United Spinal Association, a national nonprofit serving wheelchair users, our unique expertise sets us apart and instills confidence in our clients.",
  },
];

export default function Home() {
  const featuredServices = getFeaturedServices();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px]">
        <Image
          src="/images/new/accessible_round_bldg_exterior.webp"
          alt="Modern accessible round building exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Facing an ADA Compliance Deadline?
              </h1>
              <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
                Accessibility Services is a team of certified accessibility
                specialists, plan examiners, attorneys, architects, and code
                enforcement officials who are skilled in applying state and
                federal accessibility requirements to your project.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="hero-cta inline-block bg-accent text-white px-8 py-3 font-semibold rounded hover:bg-accent-hover"
                >
                  Free Consultation
                </Link>
                <Link
                  href="/consulting"
                  className="hero-cta inline-block border-2 border-white text-white px-8 py-3 font-semibold rounded hover:bg-white hover:text-accent"
                >
                  View Services
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Stats Bar */}
      <StatBar />

      {/* Services Section */}
      <section className="bg-bg-gray py-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                variant="dark"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* About Us / Why Choose ACS Section */}
      <section className="py-16 bg-white overflow-hidden">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="About Us"
              subtitle="Accessibility Services is proud to be recognized on the Forbes Accessibility 100 List for our commitment to inclusive design and accessibility. We're a Registered Provider for the International Code Council and an American Institute of Architects Approved Provider of Continuing Education"
            />

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {aboutItems.map((item) => (
                    <div
                      key={item.title}
                      className="about-box p-6 rounded-lg border border-gray-100"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-accent about-icon">
                          {item.icon}
                        </span>
                        <h5 className="font-semibold text-sm">{item.title}</h5>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/3">
                <Image
                  src="/images/about-image.jpg"
                  alt="Accessibility consultation"
                  width={400}
                  height={500}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-bg-light">
        <Container>
          <SectionHeading title="What Our Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.slice(0, 2).map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading title="Latest Insights" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blogs"
              className="text-accent hover:underline font-medium"
            >
              View All Posts &rarr;
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Band */}
      <CTASection
        headline="Schedule Your Free Consultation"
        description="Our team of certified specialists is ready to help ensure your project meets all accessibility requirements."
      />
    </>
  );
}
