"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { getServiceBySlug } from "@/data/services";
import { getTeamMemberBySlug } from "@/data/team";
import { getFAQsByService } from "@/data/faqs";
import {
  getTexasContactHref,
  texasContactHref,
  texasCoreServices,
  texasHeroImage,
  texasHeroIntro,
  texasHowToBegin,
  texasProjectCategories,
  texasProjectsHref,
  texasRelatedIntro,
  texasResources,
  texasTeamSpotlight,
  texasTerms,
} from "@/data/texasRas";
import Container from "@/components/Container";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TexasServiceCard from "@/components/TexasServiceCard";
import TexasTermsReveal from "@/components/TexasTermsReveal";
import ScrollReveal from "@/components/ScrollReveal";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const resourceIcons: Record<string, ReactNode> = {
  "Forms and help sheets": (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm1 7V3.5L18.5 9H15zM8 13h8v2H8v-2zm0 4h5v2H8v-2z" />
    </svg>
  ),
  "Frequently asked questions": (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 17h-2v-2h2v2zm1.07-7.75l-.9.92A1.99 1.99 0 0012 14h-1v-1c0-.55.22-1.05.59-1.41l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
    </svg>
  ),
  "State fee schedule": (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
    </svg>
  ),
  default: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
    </svg>
  ),
};

function teamContactHref(
  intent: "kate" | "rachael"
): string {
  if (intent === "kate") return getTexasContactHref("fair-housing");
  return getTexasContactHref("registration");
}

export default function TexasRasDetails() {
  const service = getServiceBySlug("tx-ras");
  const faqs = getFAQsByService("tx-ras");
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
                <TexasServiceCard title={item.title} hover={item.hover} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-10 pb-4">
        <Container>
          <TexasTermsReveal terms={texasTerms} />
        </Container>
      </section>

      <section className="pt-6 pb-16">
        <Container>
          <div className="mb-8 bg-[#f4f4f4] px-6 py-8 md:px-10">
            <h2 className="text-3xl font-bold mb-3">
              {texasRelatedIntro.heading}
            </h2>
            <div
              className="h-1 w-14 bg-accent rounded-full mb-5"
              aria-hidden="true"
            />
            {texasRelatedIntro.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-gray-700 text-lg leading-relaxed mb-3 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {texasProjectCategories.map((category) => (
              <Link
                key={category.id}
                href={`${texasProjectsHref}#${category.id}`}
                className="group relative block overflow-hidden aspect-[4/3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
                <span className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <span className="block text-xl font-bold text-white">
                    {category.title}
                  </span>
                  <span className="mt-2 block text-sm text-white/90 leading-relaxed">
                    {category.teaserBlurb}
                  </span>
                  <span className="mt-4 inline-block text-sm font-semibold text-accent">
                    View Texas RAS projects
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f4f4] py-16">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
            <div className="md:max-w-xl lg:max-w-2xl">
              <h2 className="text-3xl font-bold mb-3">
                {texasHowToBegin.heading}
              </h2>
              <div
                className="h-1 w-14 bg-accent rounded-full mb-6"
                aria-hidden="true"
              />
              <p className="text-gray-700 text-lg leading-relaxed">
                {texasHowToBegin.line}
              </p>
            </div>
            <div className="md:shrink-0">
              <Link
                href={texasContactHref}
                className={`hero-cta inline-block bg-accent text-white px-8 py-3 font-semibold rounded hover:bg-accent-hover ${focusRing} focus-visible:outline-black`}
              >
                Contact the Texas team
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section id="resources" className="scroll-mt-24 py-16">
        <Container>
          <div className="mb-8 md:max-w-3xl">
            <h2 className="text-3xl font-bold mb-3">TDLR Forms & Resources</h2>
            <div
              className="h-1 w-14 bg-accent rounded-full mb-6"
              aria-hidden="true"
            />
            <p className="text-gray-700 text-lg leading-relaxed">
              Find current TDLR forms and guidance directly from the state.
              Clients may register their own projects or ask our team to
              register on their behalf.
            </p>
          </div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            TDLR official website links
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {texasResources.map((resource) => (
              <li key={resource.url}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex h-full flex-col gap-3 border border-[#e2e2e2] bg-white p-5 hover:border-accent hover:-translate-y-0.5 transition-transform duration-200 ${focusRing}`}
                >
                  <span className="text-accent" aria-hidden="true">
                    {resourceIcons[resource.label] ?? resourceIcons.default}
                  </span>
                  <span className="font-semibold text-heading group-hover:text-accent">
                    {resource.label}
                  </span>
                  <span className="mt-auto text-sm text-gray-500 inline-flex items-center gap-1">
                    Opens on TDLR.gov
                    <svg
                      className="w-3.5 h-3.5"
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
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
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
                      <Link
                        href={teamContactHref(intent)}
                        className={`bg-accent text-white px-6 py-2.5 rounded font-semibold hover:bg-accent-hover ${focusRing} focus-visible:outline-black`}
                      >
                        Contact {member.name.split(" ")[0]}
                      </Link>
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
        <section className="py-16">
          <Container>
            <FAQAccordion faqs={faqs} variant="strong" />
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
