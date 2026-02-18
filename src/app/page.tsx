import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Site Assessment",
    href: "/services/site-assessment",
    image: "/images/services/assessment.jpg",
  },
  {
    title: "Design and Consultation",
    href: "/services/design-and-consultation",
    image: "/images/services/design.jpg",
  },
  {
    title: "Plan/Code Review",
    href: "/services/code-review",
    image: "/images/services/planning.jpg",
  },
  {
    title: "Expert Witness",
    href: "/services/expert-witness",
    image: "/images/services/witness.jpg",
  },
];

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

const blogPosts = [
  {
    title: "Accessibility Services Named in Forbes' first-ever Accessibility 100.",
    href: "/blogs/forbes-accessibility-100",
    image: "/images/blog/forbes-top100.jpg",
  },
  {
    title: "What is required for a business to make its doorway accessible?",
    href: "/blogs/doorway-accessible",
    image: "/images/blog/woman-opening-door.jpg",
  },
  {
    title: "Accessibility Services Helps Museums Like This One Become Disability-Inclusive",
    href: "/blogs/museums-disability-inclusive",
    image: "/images/blog/wheelchair-simulator.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px]">
        <Image
          src="/images/hero-skyscrapers.jpg"
          alt="Modern skyscrapers representing accessible built environment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Making Our Built Environment Accessible
              </h2>
              <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
                Accessibility Services is a team of certified accessibility
                specialists, plan examiners, attorneys, architects, and code
                enforcement officials who are skilled in applying state and
                federal accessibility requirements, including, the 2010 ADA
                Standards, the Fair Housing Act Accessibility Guidelines, UFAS,
                and state/local accessibility requirements to your project.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#dd3333] text-white px-8 py-3 font-semibold rounded hover:bg-[#bb2222] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#333333] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="service-card group block bg-[#2a2a2a] rounded-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <h5 className="text-white text-sm font-semibold">
                    {service.title}
                  </h5>
                  <span className="text-[#dd3333] group-hover:translate-x-1 transition-transform text-xl">
                    &rsaquo;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">About Us</h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Accessibility Services is proud to be recognized on the Forbes
              Accessibility 100 List for our commitment to inclusive design and
              accessibility. We&apos;re a Registered Provider for the
              International Code Council and an American Institute of Architects
              Approved Provider of Continuing Education
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {aboutItems.map((item) => (
                  <div
                    key={item.title}
                    className="about-box p-6 rounded-lg border border-gray-100"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-[#dd3333] about-icon">
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
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Blogs</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="blog-card bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <div className="relative h-52">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h5 className="text-sm font-semibold leading-snug hover:text-[#dd3333] transition-colors">
                    {post.title}
                  </h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
