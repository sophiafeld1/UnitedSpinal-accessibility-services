"use client";

import Link from "next/link";

const serviceLinks = [
  { label: "Site Assessment", href: "/services/site-assessment" },
  { label: "Design & Consultation", href: "/services/design-and-consultation" },
  { label: "Plan/Code Review", href: "/services/code-review" },
  { label: "Expert Witness", href: "/services/expert-witness" },
  { label: "TX RAS Review", href: "/services/tx-ras" },
  { label: "CASp Inspection", href: "/services/casp" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Meet the Team", href: "/team" },
  { label: "Projects", href: "/projects" },
  { label: "Training", href: "/training" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-primary text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: About */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">
                Accessibility Services
              </h4>
              <p className="text-sm leading-relaxed mb-4">
                A program of United Spinal Association, exclusively devoted to
                making our built environment accessible to people with
                disabilities.
              </p>
              <p className="text-sm leading-relaxed">
                <strong className="text-white">
                  AIA/CES Approved Provider
                </strong>{" "}
                of Continuing Education &bull; ICC Registered Provider
              </p>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm">
                <p>
                  102 Duane Road
                  <br />
                  Fort Totten, NY 11359
                </p>
                <p>
                  <a
                    href="mailto:info@accessibility-services.com"
                    className="hover:text-white transition-colors"
                  >
                    info@accessibility-services.com
                  </a>
                </p>
              </div>

              {/* Accreditation badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 bg-white/10 rounded text-xs">
                  AIA
                </span>
                <span className="px-2 py-1 bg-white/10 rounded text-xs">
                  ICC
                </span>
                <span className="px-2 py-1 bg-white/10 rounded text-xs">
                  United Spinal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-text text-gray-400 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm gap-2">
          <p>
            &copy; {new Date().getFullYear()} Accessibility Services, a program
            of{" "}
            <Link
              href="https://www.unitedspinal.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              United Spinal Association
            </Link>
            .
          </p>
          <p className="text-gray-500">
            All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <BackToTop />
    </footer>
  );
}

function BackToTop() {
  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className="fixed bottom-6 right-22 bg-bg-gray/80 text-white w-10 h-10 rounded-full shadow-lg hover:bg-bg-gray transition-colors flex items-center justify-center z-40"
      aria-label="Back to top"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
}
