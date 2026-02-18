import { getRelatedServices } from "@/data/services";
import ServiceCard from "./ServiceCard";

interface RelatedServicesProps {
  currentSlug: string;
}

export default function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const related = getRelatedServices(currentSlug);
  if (related.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Related Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {related.map((service) => (
          <ServiceCard key={service.slug} service={service} variant="light" />
        ))}
      </div>
    </div>
  );
}
