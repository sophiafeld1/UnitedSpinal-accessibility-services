import Image from "next/image";
import Link from "next/link";
import { getTeamMembersByState } from "@/data/team";
import Container from "@/components/Container";

const qualifiedDefendant = {
  title: "CASp Reviews for “Qualified Defendant” status.",
  paragraphs: [
    "Having a business/property reviewed by a CASp shows that business owners care about ensuring equal access for all customers, and the intent to follow the law. A CASp will know which standards apply to a property based on the age of the facility and its history of improvements. While a licensed design professional, such as an architect or engineer, can provide an access compliance evaluation of a facility, only a CASp can provide services that offer “qualified defendant” status in a construction-related accessibility lawsuit. The good-faith effort of hiring a CASp may lessen a business or property owner's liability and provide certain legal benefits if an accessibility claim is filed against them.",
    "What is a CASp? A Certified Access Specialist (CASp) is a professional who has passed an examination and has been certified by the State of California to have specialized knowledge of the applicability of state and federal construction-related accessibility standards. A CASp will know which standards apply to your property based on the age of your facility and its history of improvements. While a licensed design professional, such as an architect or engineer, can provide you an access compliance evaluation of your facility, only a CASp can provide services that offer you “qualified defendant” status in a construction-related accessibility lawsuit.",
  ],
};

const services: { title: string; paragraphs: string[] }[] = [
  {
    title: "Plan Reviews.",
    paragraphs: [
      "Design professionals manage complex responsibilities, and navigating the 35 chapters of the California Building Code (CBC) is a heavy lift for any individual. Let us simplify your code compliance. We provide comprehensive plan review services to ensure alignment with all applicable accessibility standards, including the CBC, ADA, and FHA.",
    ],
  },
  {
    title: "Construction and As-Built Inspections",
    paragraphs: [
      "With certified inspectors located across the U.S.—including California—we ensure your sites and buildings are constructed according to plan and in full compliance with all applicable accessibility codes and standards.",
    ],
  },
  {
    title: "Technical Assistance.",
    paragraphs: [
      "Have an accessibility question? Accessibility Services has been deeply involved in developing accessibility codes and standards for over 75 years.",
      "We help you navigate the complex web of city, state, and federal requirements, including the California Building Code (CBC), Section 504 of the Rehabilitation Act, the Americans with Disabilities Act (ADA), and the Fair Housing Act (FHA). Beyond compliance, our team actively shapes the industry by helping develop accessibility standards for the International Building Code (IBC), International Existing Building Code (IEBC), and ICC A117.1.",
    ],
  },
  {
    title: "Expert Witness Services",
    paragraphs: [
      "Facing an accessibility lawsuit? We have decades of experience serving as expert witnesses, working alongside your defense counsel to build a strong case or minimize financial exposure. Looking to prevent litigation altogether? Years of defending developers, property owners, builders, and design professionals give us unique insight into compliance risks. Let us help you identify vulnerabilities and reduce your exposure before a complaint is filed.",
    ],
  },
];

export default function CaspDetails() {
  const southernCalifornia = getTeamMembersByState("California");

  return (
    <div>
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-center">{qualifiedDefendant.title}</h2>
            <div className="h-1 w-14 bg-accent rounded-full mb-6 mx-auto" aria-hidden="true" />
            {qualifiedDefendant.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-gray-700 text-lg leading-relaxed mb-6 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f4f4] py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="bg-white border border-[#e2e2e2] border-t-4 border-t-accent p-6 md:p-8"
              >
                <h2 className="text-xl font-bold mb-4">{service.title}</h2>
                {service.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-gray-700 leading-relaxed mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold mb-3">Southern California</h2>
          <div className="h-1 w-14 bg-accent rounded-full mb-8" aria-hidden="true" />
          <ul className="space-y-6">
            {southernCalifornia.map((member) => (
              <li
                key={member.slug}
                className="flex flex-col sm:flex-row gap-6 border border-[#e2e2e2] bg-white p-6"
              >
                {member.image && (
                  <div className="relative w-28 sm:w-36 shrink-0 aspect-[4/5] bg-[#d9d9d9]">
                    <Image
                      src={member.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="144px"
                    />
                  </div>
                )}
                <div>
                  <p className="text-xl font-bold text-black">
                    <Link
                      href={`/team#profile-${member.slug}`}
                      className="hover:underline"
                    >
                      {member.name}
                    </Link>
                    {member.credentials?.length
                      ? ` (${member.credentials.join(", ")})`
                      : ""}
                  </p>
                  <p className="text-gray-700 mt-1">{member.title}</p>
                  {member.location && (
                    <p className="text-gray-700">{member.location}</p>
                  )}
                  <p className="text-gray-700 leading-relaxed mt-3">{member.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-[#f4f4f4] py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-3">Continuing Education</h2>
            <div className="h-1 w-14 bg-accent rounded-full mb-6" aria-hidden="true" />
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We offer continuing education credits and certificates for design
              professionals and can provide custom trainings to suit clients
              continuing education needs.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              As one of the longest-standing continuing education providers for the
              American Institute of Architects (AIA), Accessibility Services
              delivers accredited training across a broad range of accessibility
              topics.
            </p>
            <Link
              href="/training"
              className="mt-8 inline-block bg-black px-8 py-3 font-semibold text-white hover:bg-gray-800"
            >
              Training
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/projects"
              className="border border-[#e2e2e2] bg-white p-8 text-xl font-bold hover:border-black"
            >
              CA specific clients/projects
            </Link>
            <Link
              href="/contact"
              className="bg-accent p-8 text-xl font-bold text-white hover:bg-accent-hover"
            >
              Contact
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
