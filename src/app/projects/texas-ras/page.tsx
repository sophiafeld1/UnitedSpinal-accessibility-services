import type { Metadata } from "next";
import Link from "next/link";
import { texasProjectCategories } from "@/data/texasRas";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import TexasRasProjects from "@/components/TexasRasProjects";

export const metadata: Metadata = {
  title: "Texas RAS Projects",
  description:
    "Texas-specific project examples for TDLR and Fair Housing accessibility work.",
};

export default function TexasRasProjectsPage() {
  return (
    <>
      <PageHeader
        title="Texas RAS Projects"
        subtitle="Texas-specific examples of TDLR and Fair Housing accessibility work. Named case studies will appear here once permissions are confirmed."
      />

      <section className="py-10">
        <Container>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/services/tx-ras"
              className="text-accent font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Back to Texas RAS Services
            </Link>
            <Link
              href="/projects"
              className="text-accent font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              All projects
            </Link>
          </div>
        </Container>
      </section>

      <TexasRasProjects categories={texasProjectCategories} />

      <section className="pb-16">
        <Container>
          <p className="text-gray-600 text-sm">
            Looking for the service overview? Visit{" "}
            <Link
              href="/services/tx-ras"
              className="text-accent hover:underline"
            >
              Texas RAS Services
            </Link>{" "}
            or browse the{" "}
            <Link href="/projects" className="text-accent hover:underline">
              general projects page
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
