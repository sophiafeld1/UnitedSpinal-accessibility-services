"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Meet the Team", href: "/team" },
  { label: "Accessibility Consulting", href: "/consulting" },
  { label: "Projects", href: "/projects" },
  { label: "Training", href: "/training" },
  { label: "Blogs", href: "/blogs" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full">
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
      <nav className="bg-[#141414] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Desktop nav */}
            <div className="hidden lg:flex items-center space-x-1 flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-4 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-[#dd3333] border-b-2 border-[#dd3333]"
                      : "text-white hover:text-[#dd3333]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Search icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white p-4 hover:text-[#dd3333] transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-white p-4"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search overlay */}
        {searchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 p-4">
            <div className="max-w-3xl mx-auto flex items-center">
              <input
                type="search"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-[#dd3333]"
                autoFocus
              />
              <button className="bg-[#dd3333] text-white px-6 py-2 rounded-r hover:bg-[#bb2222] transition-colors">
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
          <div className="fixed right-0 top-0 bottom-0 w-72 bg-white shadow-xl">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
                      ? "text-[#dd3333] bg-gray-50"
                      : "text-gray-700 hover:text-[#dd3333] hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
