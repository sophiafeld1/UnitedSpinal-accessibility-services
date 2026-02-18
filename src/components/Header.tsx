"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Meet the Team", href: "/team" },
  { label: "Consulting", href: "/consulting", hasDropdown: true },
  { label: "Projects", href: "/projects" },
  { label: "Training", href: "/training" },
  { label: "Blogs", href: "/blogs" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = {
  "Core Services": [
    { label: "Site Assessment", href: "/services/site-assessment" },
    { label: "Design & Consultation", href: "/services/design-and-consultation" },
    { label: "Plan/Code Review", href: "/services/code-review" },
    { label: "Expert Witness", href: "/services/expert-witness" },
  ],
  "State-Specific": [
    { label: "TX RAS Review", href: "/services/tx-ras" },
    { label: "CASp Inspection", href: "/services/casp" },
  ],
  "Specialized": [
    { label: "Inspection & Certification", href: "/services/inspection" },
    { label: "Technical Assistance", href: "/services/technical-assistance" },
    { label: "Universal Design", href: "/services/universal-design" },
  ],
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full">
      {/* Top bar with phone */}
      <div className="bg-bg-dark text-gray-400 text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-end items-center gap-4">
          <a
            href="mailto:info@accessibility-services.com"
            className="hover:text-white transition-colors"
          >
            info@accessibility-services.com
          </a>
        </div>
      </div>

      {/* Logo bar */}
      <div className="bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center py-4">
            <Link href="/">
              <Image
                src="/images/logo.jpg"
                alt="Accessibility Services"
                width={350}
                height={99}
                priority
                className="h-auto"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-bg-dark sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Desktop nav */}
            <div className="hidden lg:flex items-center flex-1">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && setMegaMenuOpen(true)
                  }
                  onMouseLeave={() =>
                    item.hasDropdown && setMegaMenuOpen(false)
                  }
                >
                  <Link
                    href={item.href}
                    className={`px-3 py-4 text-sm font-medium transition-colors inline-block ${
                      pathname === item.href ||
                      (item.hasDropdown && pathname.startsWith("/services"))
                        ? "text-accent border-b-2 border-accent"
                        : "text-white hover:text-accent"
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg
                        className="w-3 h-3 inline-block ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Mega menu dropdown */}
                  {item.hasDropdown && megaMenuOpen && (
                    <div className="absolute top-full left-0 bg-white shadow-xl rounded-b-lg z-50 w-[600px] p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {Object.entries(serviceLinks).map(
                          ([category, links]) => (
                            <div key={category}>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                                {category}
                              </p>
                              <ul className="space-y-2">
                                {links.map((link) => (
                                  <li key={link.href}>
                                    <Link
                                      href={link.href}
                                      className="text-sm text-gray-700 hover:text-accent transition-colors"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <Link
                          href="/consulting"
                          className="text-sm text-accent hover:underline font-medium"
                        >
                          View All Services &rarr;
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side: CTA + Search */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/contact"
                className="bg-accent text-white px-4 py-2 text-sm font-semibold rounded hover:bg-accent-hover transition-colors"
              >
                Free Consultation
              </Link>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-white p-3 hover:text-accent transition-colors"
                aria-label="Search"
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile: search + hamburger */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-white p-4 hover:text-accent transition-colors"
                aria-label="Search"
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-white p-4"
                aria-label="Open menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Search overlay */}
        {searchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 p-4">
            <div className="max-w-3xl mx-auto flex items-center">
              <input
                type="search"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-accent"
                autoFocus
              />
              <button className="bg-accent text-white px-6 py-2 rounded-r hover:bg-accent-hover transition-colors">
                Search
              </button>
              <button
                onClick={() => setSearchOpen(false)}
                className="ml-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                X
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <span className="font-bold text-sm">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-6 py-3 text-sm font-medium border-b border-gray-100 ${
                    pathname === item.href
                      ? "text-accent bg-gray-50"
                      : "text-gray-700 hover:text-accent hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile service submenu */}
              <div className="px-6 py-3 border-b border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Services
                </p>
                {Object.entries(serviceLinks).map(([category, links]) => (
                  <div key={category} className="mb-3">
                    <p className="text-xs text-gray-400 mb-1">{category}</p>
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-sm text-gray-600 hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="p-6">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center bg-accent text-white px-6 py-3 rounded font-semibold hover:bg-accent-hover transition-colors"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
