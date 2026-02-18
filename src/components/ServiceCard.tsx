import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/types";

interface ServiceCardProps {
  service: Service;
  variant?: "dark" | "light";
}

export default function ServiceCard({
  service,
  variant = "dark",
}: ServiceCardProps) {
  if (variant === "dark") {
    return (
      <Link
        href={`/services/${service.slug}`}
        className="service-card group block bg-bg-gray rounded-lg overflow-hidden"
      >
        <div className="relative h-48">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <h5 className="text-white text-sm font-semibold">{service.title}</h5>
            <span className="text-accent group-hover:translate-x-1 transition-transform text-xl">
              &rsaquo;
            </span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
            {service.painPointHeadline}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="relative h-52">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-gray-500 italic mb-3">
          {service.painPointHeadline}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </Link>
  );
}
