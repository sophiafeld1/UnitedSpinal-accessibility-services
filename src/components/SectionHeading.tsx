interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      <div
        className={`h-1 w-14 bg-accent rounded-full mb-4 ${centered ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {subtitle && (
        <p className="text-gray-600 max-w-4xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
