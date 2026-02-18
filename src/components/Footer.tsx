"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-[#1a1a1a] text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-sm leading-relaxed max-w-3xl mx-auto">
              <strong className="text-white">
                We are an AIA/CES Approved Provider of Continuing Education
              </strong>{" "}
              for the American Institute of Architects (AIA) as well as a
              registered provider for the International Code Council (ICC) and
              other professional organizations.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-[#111111] text-gray-400 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>
            Accessibility Services is a program of{" "}
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
      className="fixed bottom-6 right-6 bg-[#dd3333] text-white w-10 h-10 rounded-full shadow-lg hover:bg-[#bb2222] transition-colors flex items-center justify-center z-40"
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
