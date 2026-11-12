"use client";

import Image from "next/image";
import type { TexasRecipientIntent } from "@/data/texasRas";

interface TexasServiceCardProps {
  title: string;
  hover: string;
  image: string;
  intent: TexasRecipientIntent;
  onOpenContact: (intent: TexasRecipientIntent) => void;
  number?: number;
  showDetail?: boolean;
}

export default function TexasServiceCard({
  title,
  hover,
  image,
  intent,
  onOpenContact,
  number,
  showDetail = false,
}: TexasServiceCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpenContact(intent)}
      className="texas-service-card group relative block w-full overflow-hidden text-left aspect-[4/3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
      <span className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        {number != null && (
          <span className="block text-sm font-semibold text-accent mb-2">
            {String(number).padStart(2, "0")}
          </span>
        )}
        <span className="block text-xl font-bold text-white">{title}</span>
        <span
          className={`mt-2 block text-sm text-white/90 leading-relaxed ${
            showDetail ? "" : "texas-service-card-detail"
          }`}
        >
          {hover}
        </span>
      </span>
    </button>
  );
}
