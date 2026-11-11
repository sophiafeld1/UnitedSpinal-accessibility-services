import Image from "next/image";
import Link from "next/link";
import { getServiceBySlug } from "@/data/services";
import { getTeamMembersByState } from "@/data/team";
import { getFAQsByService } from "@/data/faqs";
import {
  texasContactHref,
  texasCoreServices,
  texasProjectExamples,
  texasProjectTypes,
  texasRelatedServices,
  texasResources,
  texasTerms,
} from "@/data/texasRas";
import Container from "@/components/Container";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function TexasRasDetails() {
  const service = getServiceBySlug("tx-ras");
  const team = getTeamMembersByState("Texas");
  const faqs = getFAQsByService("tx-ras");

  return (
    <div>
      <section className="relative min-h-[32rem] flex items-center">
        {service?.image && (
          <Image
            src={service.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        )}
        <div className="absolute inset-0 hero-overlay" />
        <Container className="relative py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Texas RAS Services
            </h1>
            <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
              Accessibility Services helps project teams navigate Texas
              accessibility requirements through project registration support,
              plan reviews, and on-site inspections. Our team also offers
              broader accessibility consulting, including fair housing reviews
              and facility assessments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={texasContactHref}
                className="hero-cta inline-block bg-accent text-white px-8 py-3 font-semibold rounded hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Discuss Your Texas Project
              </Link>
              <Link
                href="#resources"
                className="hero-cta inline-block border-2 border-white text-white px-8 py-3 font-semibold rounded hover:bg-white hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Find Forms & Resources
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-3">
              Support Through the Texas Accessibility Process
            </h2>
            <div
              className="h-1 w-14 bg-accent rounded-full mb-6"
              aria-hidden="true"
            />
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {texasTerms.map((item) => (
                <div
                  key={item.term}
                  className="border border-[#e2e2e2] bg-[#f4f4f4] p-4"
                >
                  <dt className="font-bold">{item.term}</dt>
                  <dd className="text-gray-700 mt-1">{item.meaning}</dd>
                </div>
              ))}
            </dl>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our Registered Accessibility Specialists support projects through
              the TDLR architectural barriers process. We help clients
              understand the required paperwork, coordinate project
              registration, and arrange accessibility plan reviews and
              inspections.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Applicable projects with estimated construction costs of $50,000
              or more generally require registration and submission for
              accessibility review. Projects below this threshold may still
              have accessibility obligations. Contact our team to discuss your
              project&apos;s requirements.{" "}
              <a
                href="https://www.tdlr.texas.gov/ab/abfaq.htm"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-accent hover:underline ${focusRing}`}
              >
                Read TDLR&apos;s official guidance
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f4f4] py-16">
        <Container>
          <h2 className="text-3xl font-bold mb-3">Core Services</h2>
          <div
            className="h-1 w-14 bg-accent rounded-full mb-8"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {texasCoreServices.map((item) => (
              <article
                key={item.title}
                className="bg-white border border-[#e2e2e2] border-t-4 border-t-accent p-6 md:p-8"
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold mb-3">
              Coordinate More of Your Accessibility Needs With One Team
            </h2>
            <div
              className="h-1 w-14 bg-accent rounded-full mb-6"
              aria-hidden="true"
            />
            <p className="text-gray-700 text-lg leading-relaxed">
              A project&apos;s accessibility needs may extend beyond the TDLR
              process. Our team can coordinate Texas RAS services with
              additional reviews and consulting, helping clients work with one
              team across multiple accessibility needs.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {texasRelatedServices.map((item) => (
              <li
                key={item.title}
                className="border border-[#e2e2e2] bg-white p-6"
              >
                <h3 className="text-xl font-bold mb-3">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`hover:text-accent hover:underline ${focusRing}`}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed mt-6 max-w-3xl">
            These are additional services, and the scope is determined for each
            project. Fair housing and other applicable codes are reviewed
            separately from the TDLR process.
          </p>
        </Container>
      </section>

      <section className="bg-[#f4f4f4] py-16">
        <Container>
          <h2 className="text-3xl font-bold mb-3">Project Types</h2>
          <div
            className="h-1 w-14 bg-accent rounded-full mb-8"
            aria-hidden="true"
          />
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {texasProjectTypes.map((item) => (
              <li key={item.title} className="bg-white border border-[#e2e2e2] p-6">
                <h3 className="text-xl font-bold">{item.title}</h3>
                {item.description && (
                  <p className="text-gray-700 leading-relaxed mt-3">
                    {item.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
          {texasProjectExamples.length > 0 && (
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6">Project Examples</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {texasProjectExamples.map((example) => (
                  <li
                    key={example.name}
                    className="bg-white border border-[#e2e2e2] p-6"
                  >
                    <h4 className="text-xl font-bold mb-3">{example.name}</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {example.summary}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </section>

      <section id="resources" className="scroll-mt-24 py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-3">Texas Forms & Resources</h2>
            <div
              className="h-1 w-14 bg-accent rounded-full mb-6"
              aria-hidden="true"
            />
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Find current TDLR forms and guidance directly from the state. If
              you are unsure which documents apply or need help completing
              them, contact our team.
            </p>
            <ul className="space-y-4">
              {texasResources.map((resource) => (
                <li key={resource.url}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-accent font-medium hover:underline inline-flex items-center gap-1 ${focusRing}`}
                  >
                    {resource.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  {resource.note && (
                    <p className="text-gray-700 leading-relaxed mt-2">
                      {resource.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed mt-6">
              The state fee schedule lists TDLR fees. It is separate from
              Accessibility Services professional fees.
            </p>
          </div>
        </Container>
      </section>

      {team.length > 0 && (
        <section className="bg-[#f4f4f4] py-16">
          <Container>
            <h2 className="text-3xl font-bold mb-3">
              Meet Your Texas Accessibility Team
            </h2>
            <div
              className="h-1 w-14 bg-accent rounded-full mb-8"
              aria-hidden="true"
            />
            <ul className="space-y-6">
              {team.map((member) => (
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
                        className={`hover:underline ${focusRing}`}
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
                    <p className="text-gray-700 leading-relaxed mt-3">
                      {member.bio}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="py-16">
          <Container>
            <div className="max-w-3xl">
              <FAQAccordion faqs={faqs} />
            </div>
          </Container>
        </section>
      )}

      <CTASection
        headline="Let's Discuss Your Texas Project"
        description="Need help with project registration, paperwork, plan review, or an inspection? Tell us about your project and we'll connect you with the appropriate team member."
        buttonText="Discuss Your Texas Project"
        buttonHref={texasContactHref}
      />
    </div>
  );
}
