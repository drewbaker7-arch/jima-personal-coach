"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Benefits", href: "#benefits" },
  { label: "Who It's For", href: "#personas" },
  { label: "Testimonials", href: "#quotes" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  return (
    <nav
      className="bg-white fixed top-0 left-0 right-0 z-50 border-b border-teal-200/40"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between px-6 md:px-8 py-4">

        {/* Spacer for centering on desktop */}
        <div className="hidden md:block md:w-[120px]" />

        {/* Desktop nav links — centered */}
        <ul className="hidden md:flex items-center justify-center gap-7 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm font-medium text-teal-700 hover:text-teal-900 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — hidden on mobile */}
        <div className="hidden md:block md:w-[120px] text-right">
          <a href="#pricing" className="btn btn-primary btn-sm">
            Get Started
          </a>
        </div>

        {/* Mobile hamburger button — visible only on mobile */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center text-teal-700 hover:text-teal-900 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white rounded-card-lg"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? (
            /* X icon when open */
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger icon when closed */
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-teal-200/40 bg-white px-6 pb-5 pt-4">
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm font-medium text-teal-700 hover:text-teal-900 transition-colors block"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <a
              href="#pricing"
              className="btn btn-primary btn-sm w-full justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
