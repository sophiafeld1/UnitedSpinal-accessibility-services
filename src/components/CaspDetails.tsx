import Link from "next/link";
import { getTeamMembersByState } from "@/data/team";

const sections: { title: string; paragraphs: string[] }[] = [
  {
    title: "CASp Reviews for “Qualified Defendant” status.",
    paragraphs: [
      "Having a business/property reviewed by a CASp shows that business owners care about ensuring equal access for all customers, and the intent to follow the law. A CASp will know which standards apply to a property based on the age of the facility and its history of improvements. While a licensed design professional, such as an architect or engineer, can provide an access compliance evaluation of a facility, only a CASp can provide services that offer “qualified defendant” status in a construction-related accessibility lawsuit. The good-faith effort of hiring a CASp may lessen a business or property owner's liability and provide certain legal benefits if an accessibility claim is filed against them.",
      "What is a CASp? A Certified Access Specialist (CASp) is a professional who has passed an examination and has been certified by the State of California to have specialized knowledge of the applicability of state and federal construction-related accessibility standards. A CASp will know which standards apply to your property based on the age of your facility and its history of improvements. While a licensed design professional, such as an architect or engineer, can provide you an access compliance evaluation of your facility, only a CASp can provide services that offer you “qualified defendant” status in a construction-related accessibility lawsuit.",
    ],
  },
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
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-gray-700 text-lg leading-relaxed mb-6 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <section>
        <h2 className="text-2xl font-bold mb-4">Southern California</h2>
        <ul className="space-y-6">
          {southernCalifornia.map((member) => (
            <li key={member.slug}>
              <p className="text-lg font-bold text-black">
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
              <p className="text-gray-700">{member.title}</p>
              {member.location && (
                <p className="text-gray-700">{member.location}</p>
              )}
              <p className="text-gray-700 leading-relaxed mt-2">{member.bio}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Continuing Education</h2>
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
        <p className="mt-6">
          <Link href="/training" className="text-accent hover:underline">
            Training
          </Link>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">
          CA specific clients/projects
        </h2>
        <p>
          <Link href="/projects" className="text-accent hover:underline">
            CA specific clients/projects
          </Link>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>
          <Link href="/contact" className="text-accent hover:underline">
            Contact
          </Link>
        </p>
      </section>
    </div>
  );
}
