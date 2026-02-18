interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const milestones: TimelineItem[] = [
  {
    year: "1946",
    title: "United Spinal Association Founded",
    description:
      "United Spinal Association was established as a nonprofit serving wheelchair users and people with spinal cord injuries.",
  },
  {
    year: "1988",
    title: "Fair Housing Amendments Act",
    description:
      "Our team helped draft the Fair Housing Amendments Act, extending accessibility requirements to multifamily housing.",
  },
  {
    year: "1990",
    title: "Americans with Disabilities Act",
    description:
      "We helped write the landmark Americans with Disabilities Act, the most comprehensive civil rights law for people with disabilities.",
  },
  {
    year: "2024",
    title: "Forbes Accessibility 100",
    description:
      "Accessibility Services was named to the inaugural Forbes Accessibility 100 List in recognition of our commitment to inclusive design.",
  },
];

export default function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 -translate-x-1/2" />

      <div className="space-y-12">
        {milestones.map((item, i) => (
          <div
            key={item.year}
            className={`relative flex flex-col md:flex-row gap-8 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 mt-1 z-10" />

            {/* Content */}
            <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
              <span className="text-accent font-bold text-lg">
                {item.year}
              </span>
              <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Spacer for the other side */}
            <div className="hidden md:block md:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
