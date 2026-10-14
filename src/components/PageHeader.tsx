import Container from "./Container";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  compact?: boolean;
}

export default function PageHeader({ title, subtitle, compact }: PageHeaderProps) {
  return (
    <section className={`bg-accent-light ${compact ? "py-5" : "py-12"}`}>
      <Container>
        <h1 className={`text-3xl md:text-4xl font-bold text-center ${compact ? "mb-2" : "mb-3"}`}>
          {title}
        </h1>
        <div
          className={`h-1 w-14 bg-accent rounded-full mx-auto ${compact ? "mb-0" : "mb-4"}`}
          aria-hidden="true"
        />
        {subtitle && (
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
