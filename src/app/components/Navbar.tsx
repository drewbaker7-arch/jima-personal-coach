"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-1.5 rounded-card-lg border border-teal-200 bg-teal-50/60 px-2.5 py-1 text-xs font-medium text-teal-700 hover:bg-teal-100 transition-colors"
      aria-label={lang === "en" ? "Cambiar a espa\u00f1ol" : "Switch to English"}
    >
      <span className="text-sm leading-none">{lang === "en" ? "\ud83c\uddea\ud83c\uddf8" : "\ud83c\uddfa\ud83c\uddf8"}</span>
      <span>{lang === "en" ? "ES" : "EN"}</span>
    </button>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.nav.benefits, href: "#benefits" },
    { label: t.nav.whoItsFor, href: "#personas" },
    { label: t.nav.testimonials, href: "#quotes" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.faq, href: "#faq" },
  ];

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

        {/* Desktop left: language toggle (spacer for centering) */}
        <div className="hidden md:flex md:w-[140px] items-center">
          <LanguageToggle />
        </div>

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

        {/* Desktop CTA */}
        <div className="hidden md:block md:w-[140px] text-right">
          <a href="#pricing" className="btn btn-primary btn-sm">
            {t.nav.getStarted}
          </a>
        </div>

        {/* Mobile: hamburger left, toggle right */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="flex items-center justify-center text-teal-700 hover:text-teal-900 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white rounded-card-lg"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile: language toggle on right side, always visible */}
        <div className="md:hidden">
          <LanguageToggle />
        </div>

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
              {t.nav.getStarted}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
