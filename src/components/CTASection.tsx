import Container from "./Container";
import CTAButton from "./CTAButton";

interface CTASectionProps {
  headline: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  headline,
  description,
  buttonText = "Schedule a Free Consultation",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-accent py-16">
      <Container className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{headline}</h2>
        {description && (
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            {description}
          </p>
        )}
        <CTAButton href={buttonHref} variant="outline">
          {buttonText}
        </CTAButton>
      </Container>
    </section>
  );
}
