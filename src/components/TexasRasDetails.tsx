"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getServiceBySlug } from "@/data/services";
import { getTeamMemberBySlug } from "@/data/team";
import { getFAQsByService } from "@/data/faqs";
import {
  texasCoreServices,
  texasHeroImage,
  texasHeroIntro,
  texasHowToBegin,
  texasProjectsPromo,
  texasRelatedIntro,
  texasRelatedServices,
  texasResources,
  texasTeamSpotlight,
  texasTerms,
  type TexasRecipientIntent,
} from "@/data/texasRas";
import Container from "@/components/Container";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TexasContactPanel from "@/components/TexasContactPanel";
import TexasServiceCard from "@/components/TexasServiceCard";
import TexasTermsReveal from "@/components/TexasTermsReveal";
import ScrollReveal from "@/components/ScrollReveal";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function TexasRasDetails() {
  const service = getServiceBySlug("tx-ras");
  const faqs = getFAQsByService("tx-ras");
  const [contactIntent, setContactIntent] =
    useState<TexasRecipientIntent>("both");
  const [dialogOpen, setDialogOpen] = useState(false);
  const team = texasTeamSpotlight
    .map((spotlight) => {
      const member = getTeamMemberBySlug(spotlight.slug);
      if (!member) return null;
      return {
        member,
        pageBio: spotlight.pageBio,
        intent: spotlight.intent,
        email: member.email,
      };
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

  const openContact = (intent: TexasRecipientIntent) => {
    setContactIntent(intent);
    setDialogOpen(true);
  };

  useEffect(() => {
    if (!dialogOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDialogOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [dialogOpen]);

  const heroImage = texasHeroImage || service?.image;

  return (
    <div>
      <section className="relative min-h-[22rem] md:min-h-[26rem] flex items-center">
        {heroImage && (
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        )}
        <div className="absolute inset-0 hero-overlay" />
        <Container className="relative py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Texas RAS Services
            </h1>
            <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
              {texasHeroIntro}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#texas-contact"
                className="hero-cta inline-block bg-accent text-white px-8 py-3 font-semibold rounded hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Discuss Your Texas Project
              </a>
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

      <section className="bg-[#f4f4f4] py-16">
        <Container>
          <h2 className="text-3xl font-bold mb-3">Core Services</h2>
          <div
            className="h-1 w-14 bg-accent rounded-full mb-8"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {texasCoreServices.map((item, index) => (
              <ScrollReveal
                key={item.title}
                className="scroll-reveal-slow h-full"
                delayMs={index * 140}
              >
                <TexasServiceCard {...item} onOpenContact={openContact} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <TexasTermsReveal terms={texasTerms} />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-3">
              {texasRelatedIntro.heading}
            </h2>
            <div
              className="h-1 w-14 bg-accent rounded-full mb-3"
              aria-hidden="true"
            />
            {texasRelatedIntro.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-gray-700 text-lg leading-relaxed mb-2 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {texasRelatedServices.map((item, index) => (
              <TexasServiceCard
                key={item.title}
                {...item}
                number={index + 1}
                onOpenContact={openContact}
              />
            ))}
          </div>
        </Container>
      </section>

      <section
        id="texas-contact"
        className="scroll-mt-24 bg-[#f4f4f4] py-16"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-3">
                {texasHowToBegin.heading}
              </h2>
              <div
                className="h-1 w-14 bg-accent rounded-full mb-6"
                aria-hidden="true"
              />
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {texasHowToBegin.line}
              </p>
              <a
                href="#texas-contact-form"
                className={`hero-cta inline-block bg-accent text-white px-8 py-3 font-semibold rounded hover:bg-accent-hover ${focusRing} focus-visible:outline-black`}
              >
                Contact the Texas team
              </a>
            </div>
            <TexasContactPanel id="texas-contact-form" intent="both" />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch overflow-hidden border border-[#e2e2e2] bg-white">
            <div className="relative min-h-56 lg:min-h-full">
              <Image
                src={texasProjectsPromo.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-3">
                {texasProjectsPromo.heading}
              </h2>
              <div
                className="h-1 w-14 bg-accent rounded-full mb-6"
                aria-hidden="true"
              />
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {texasProjectsPromo.body}
              </p>
              <Link
                href={texasProjectsPromo.href}
                className={`inline-block bg-accent text-white px-8 py-3 font-semibold rounded hover:bg-accent-hover w-fit ${focusRing} focus-visible:outline-black`}
              >
                {texasProjectsPromo.cta}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section id="resources" className="scroll-mt-24 bg-[#f4f4f4] py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-3">TDLR Forms & Resources</h2>
            <div
              className="h-1 w-14 bg-accent rounded-full mb-6"
              aria-hidden="true"
            />
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Find current TDLR forms and guidance directly from the state.
              Clients may register their own projects or ask our team to
              register on their behalf.
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
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {team.length > 0 && (
        <section className="py-16">
          <Container>
            <h2 className="text-3xl font-bold mb-3">
              Meet Your Texas Accessibility Team
            </h2>
            <div
              className="h-1 w-14 bg-accent rounded-full mb-8"
              aria-hidden="true"
            />
            <ul className="space-y-6">
              {team.map(({ member, pageBio, intent, email }) => (
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
                      {member.name}
                      {member.credentials?.length
                        ? ` (${member.credentials.join(", ")})`
                        : ""}
                    </p>
                    <p className="text-gray-700 mt-1">{member.title}</p>
                    {member.location && (
                      <p className="text-gray-700">{member.location}</p>
                    )}
                    <p className="text-gray-700 leading-relaxed mt-3">
                      {pageBio}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => openContact(intent)}
                        className={`bg-accent text-white px-6 py-2.5 rounded font-semibold hover:bg-accent-hover ${focusRing} focus-visible:outline-black`}
                      >
                        Contact {member.name.split(" ")[0]}
                      </button>
                      <a
                        href={`mailto:${email}`}
                        className={`text-accent hover:underline ${focusRing}`}
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="bg-[#f4f4f4] py-16">
          <Container>
            <FAQAccordion faqs={faqs} variant="strong" />
          </Container>
        </section>
      )}

      <CTASection
        headline="Let's Discuss Your Texas Project"
        description="Need help with project registration, paperwork, plan review, or an inspection? Tell us about your project and we'll connect you with the appropriate team member."
        buttonText="Discuss Your Texas Project"
        buttonHref="#texas-contact"
      />

      {dialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close contact form"
            className="absolute inset-0 bg-black/50"
            onClick={() => setDialogOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="texas-contact-dialog-title"
            className="relative z-10 w-full max-w-xl max-h-[92vh] overflow-y-auto shadow-xl"
          >
            <div className="absolute right-3 top-3 z-10">
              <button
                type="button"
                onClick={() => setDialogOpen(false)}
                className={`bg-white text-heading px-3 py-1.5 rounded font-semibold border border-[#e2e2e2] hover:bg-[#f4f4f4] ${focusRing}`}
              >
                Close
              </button>
            </div>
            <h2 id="texas-contact-dialog-title" className="sr-only">
              Texas project contact
            </h2>
            <TexasContactPanel intent={contactIntent} />
          </div>
        </div>
      )}
    </div>
  );
}
