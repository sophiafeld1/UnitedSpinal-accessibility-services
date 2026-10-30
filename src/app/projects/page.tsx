import type { Metadata } from "next";
import { serviceAreas } from "@/data/projects";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import VerticalFilter from "@/components/VerticalFilter";
import LogoMarquee from "@/components/LogoMarquee";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "From giant sports stadiums to mom-and-pop restaurants, we have provided accessibility consulting services for a wide range of projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" />

      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-gray-700 leading-relaxed text-lg">
              Overview of projects will be added here.
            </p>
          </div>

          <VerticalFilter />
        </Container>
      </section>

      <LogoMarquee />

      <section className="pt-16 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              Service Areas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center"
                >
                  <p className="font-medium text-gray-700">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
