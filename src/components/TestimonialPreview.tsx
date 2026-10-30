const quotes = [
  {
    author: "Client Name",
    quote: "Client Testimonial Here",
  },
  {
    author: "Client Name",
    quote: "A second quote will scroll into this card.",
  },
  {
    author: "Client Name",
    quote: "Real client words will replace this sample.",
  },
];

function QuoteRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="testimonial-rail-row" aria-hidden={hidden || undefined}>
      {quotes.map((item) => (
        <li
          key={`${item.quote}-${hidden ? "copy" : "main"}`}
          className="testimonial-rail-card bg-white rounded-lg p-8 shadow-sm border border-gray-100"
        >
          <svg
            className="w-8 h-8 text-accent/30 mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
          </svg>
          <p className="text-gray-700 leading-relaxed mb-4 italic">
            &ldquo;{item.quote}&rdquo;
          </p>
          <p className="font-semibold text-sm">{item.author}</p>
        </li>
      ))}
    </ul>
  );
}

export default function TestimonialPreview() {
  return (
    <div className="testimonial-rail" aria-label="Sample client testimonials">
      <div className="testimonial-rail-track">
        <QuoteRow />
        <QuoteRow hidden />
      </div>
    </div>
  );
}
