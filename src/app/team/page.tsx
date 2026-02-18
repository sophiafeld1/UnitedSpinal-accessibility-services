import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the Accessibility Services team of certified accessibility specialists, plan examiners, attorneys, architects, and code enforcement officials.",
};

const teamMembers = [
  {
    name: "Adam Berger",
    title: "Senior Accessibility Consultant",
    email: "aberger@accessibility-services.com",
    bio: "Adam has extensive experience in the accessibility field.",
    image: "/images/team/adam-berger.jpg",
  },
  {
    name: "Bernardo Deschamps",
    title: "Accessibility Compliance Specialist",
    email: "bdeschamps@accessibility-services.com",
    bio: "Bernardo's background includes both architecture and real estate.",
    image: "/images/team/bernardo-deschamps.png",
  },
  {
    name: "Bill Hudson",
    title: "Accessibility Compliance Specialist",
    email: "whudson@accessibility-services.com",
    bio: "As one of approximately 800 certified Master Code Professionals worldwide, Bill has decades of experience in code enforcement and accessibility compliance.",
    image: "/images/team/bill-hudson.jpg",
  },
  {
    name: "Dominic Marinelli",
    title: "Vice President",
    email: "DMarinelli@accessibility-services.com",
    bio: "Dominic heads our Accessibility Services program. He has over 35 years of experience in the accessibility field, working with architects, designers, and building owners to ensure compliance with all applicable codes and standards.",
    image: "/images/team/dominic-marinelli.jpg",
  },
  {
    name: "Ivan Heredia, AIA",
    title: "Architect",
    email: "IHeredia@accessibility-services.com",
    bio: "Ivan is a registered architect with 11 years of comprehensive experience in architectural design, project management, and accessibility consulting.",
    image: "/images/team/ivan-heredia.jpg",
  },
  {
    name: "Jimmy Zuehl",
    title: "Senior Accessibility Compliance Specialist (CASp, NYS-CEO, ICC-AIPE)",
    email: "jzuehl@accessibility-services.com",
    bio: "Jimmy's over 20 years of experience in architecture gives him a comprehensive understanding of the design and construction process, enabling him to provide practical accessibility solutions.",
    image: "/images/team/jimmy-zuehl.jpg",
  },
  {
    name: "Kleo King",
    title: "Senior Director of Accessibility Operations & Counsel",
    email: "kking@unitedspinal.org",
    bio: "Kleo began her career with United Spinal in 1987. She provides legal counsel and oversees the operational aspects of the Accessibility Services program.",
    image: "/images/team/kleo-king.jpg",
  },
  {
    name: "Marsha Mazz",
    title: "Director of Accessibility Codes and Standards",
    email: "mmazz@accessibility-services.com",
    bio: "Before joining United Spinal, Marsha headed the United States Access Board's Office of Technical and Information Services, where she was responsible for developing and implementing accessibility guidelines and standards.",
    image: "/images/team/marsha-mazz.jpg",
  },
  {
    name: "Nathan Roether",
    title: "Accessibility Compliance Specialist, Accessibility Inspector/Plans Examiner",
    email: "nroether@accessibility-services.com",
    bio: "Nathan is a focal point of Accessibility Services operations in the Midwest, bringing extensive experience in building inspection and accessibility compliance.",
    image: "/images/team/nathan-roether.jpg",
  },
  {
    name: "Patrick Joksimovic",
    title: "Accessibility Compliance Specialist",
    email: "PJoksimovic@accessibility-services.com",
    bio: "Patrick's experience includes helping clients keep current with applicable code requirements and providing practical solutions for accessibility challenges.",
    image: "/images/team/patrick-joksimovic.jpg",
  },
  {
    name: "Travis Monroe",
    title: "Accessibility Compliance Specialist",
    email: "tmonroe@accessibility-services.com",
    bio: "Travis's experience as a project manager and architect has taken him from residential to commercial projects, giving him a broad understanding of accessibility requirements across all building types.",
    image: "/images/team/travis-monroe.jpg",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#f8f8f8] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Meet the Team
          </h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Accessibility Services is exclusively devoted to making our built
            environment accessible to people with disabilities. We assist
            property owners and designers with federal and state accessibility
            requirements including ADA, Fair Housing, Section 504, and
            state/local codes.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="team-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="relative h-72 bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-[#dd3333] text-sm font-medium mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sm text-[#dd3333] hover:underline"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
