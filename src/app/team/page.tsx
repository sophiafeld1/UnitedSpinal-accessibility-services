import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import TeamFilter from "@/components/TeamFilter";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the Accessibility Services team of certified accessibility specialists, plan examiners, attorneys, architects, and code enforcement officials.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Meet the Team"
        subtitle="Accessibility Services is exclusively devoted to making our built environment accessible to people with disabilities. We assist property owners and designers with federal and state accessibility requirements including ADA, Fair Housing, Section 504, and state/local codes."
      />

      <section className="py-16">
        <Container>
          <TeamFilter />
        </Container>
      </section>
    </>
  );
}
