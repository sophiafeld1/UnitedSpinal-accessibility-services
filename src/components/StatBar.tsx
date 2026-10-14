import Container from "./Container";
import { stats } from "@/data/stats";

export default function StatBar() {
  return (
    <section className="bg-accent-light py-10 border-y border-accent-soft">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold text-accent mb-1">
                {stat.value}
              </p>
              <p className="text-gray-600 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
