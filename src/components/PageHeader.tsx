import Container from "./Container";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  compact?: boolean;
}

export default function PageHeader({ title, subtitle, compact }: PageHeaderProps) {
  return (
    <section className={`bg-bg-light ${compact ? "py-5" : "py-12"}`}>
      <Container>
        <h1 className={`text-3xl md:text-4xl font-bold text-center ${compact ? "mb-0" : "mb-4"}`}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
