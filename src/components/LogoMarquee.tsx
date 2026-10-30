import Image from "next/image";

const logos = [
  {
    src: "/images/projects/logos/united-nations.png",
    alt: "United Nations",
    width: 255,
    height: 91,
  },
  {
    src: "/images/projects/logos/highmark-stadium.png",
    alt: "Highmark Stadium",
    width: 206,
    height: 75,
  },
  {
    src: "/images/projects/logos/san-diego-zoo.png",
    alt: "San Diego Zoo",
    width: 203,
    height: 106,
  },
  {
    src: "/images/projects/logos/marriott.png",
    alt: "Marriott Hotels & Resorts",
    width: 179,
    height: 78,
  },
  {
    src: "/images/projects/logos/urban-edge.png",
    alt: "Urban Edge Properties",
    width: 175,
    height: 104,
  },
];

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="logo-marquee-row" aria-hidden={hidden || undefined}>
      {logos.map((logo) => (
        <li key={`${logo.alt}-${hidden ? "copy" : "main"}`}>
          <Image
            src={logo.src}
            alt={hidden ? "" : logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-12 w-auto max-w-[180px] object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

export default function LogoMarquee() {
  return (
    <section
      className="border-y border-gray-200 bg-white py-10"
      aria-label="Organizations we've worked with"
    >
      <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
        Organizations we&apos;ve worked with
      </p>
      <div className="logo-marquee-viewport">
        <div className="logo-marquee-track">
          <LogoRow />
          <LogoRow hidden />
        </div>
      </div>
    </section>
  );
}
