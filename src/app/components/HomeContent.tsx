"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import FaqAccordion from "./FaqAccordion";
import Navbar from "./Navbar";
import PersonaCarousel from "./PersonaCarousel";
import QuoteStack from "./QuoteStack";

export default function HomeContent() {
  const { t } = useLanguage();

  return (
    <main>
      <Navbar />

      {/* ================================================================
          SECTION 1: HERO
          ================================================================ */}
      <section className="bg-accent-sage min-h-[90vh] pt-[64px]">
        <div className="grid md:grid-cols-[3fr_2fr] min-h-[calc(90vh-64px)]">

          {/* Left column: headline, checkmark list, CTA */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-20">
            <div className="max-w-lg">
              <h1 className="font-display text-4xl font-extrabold md:text-6xl tracking-tight text-teal-700">
                {t.hero.headlineLine1}<br />{t.hero.headlineLine2}
              </h1>
              <p className="font-display mt-3 text-2xl font-light italic text-teal-800 md:text-3xl">
                {t.hero.subline}
              </p>

              {/* Descriptor checkmark list */}
              <ul className="mt-8 space-y-3">
                {[t.hero.check1, t.hero.check2, t.hero.check3].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-700">
                      <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-base text-teal-900">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Primary CTA */}
              <div className="mt-10">
                <a href="#pricing" className="btn btn-primary btn-lg">
                  {t.hero.cta}
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Jima hero image */}
          <div className="relative min-h-[400px] md:min-h-0">
            <Image
              src="/images/jima-hero.webp"
              alt={t.hero.imageAlt}
              fill
              priority
              className="object-cover object-[center_20%]"
            />
          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 2: SOCIAL PROOF STATS BAR
          ================================================================ */}
      <section className="bg-cream-200 py-20 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <p className="mb-10 text-center text-xs font-medium uppercase tracking-widest text-teal-700">
            {t.stats.overline}
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { value: t.stats.stat1Value, text: t.stats.stat1Text, source: t.stats.stat1Source, bg: "bg-accent-yellow/20" },
              { value: t.stats.stat2Value, text: t.stats.stat2Text, source: t.stats.stat2Source, bg: "bg-accent-sage/20" },
              { value: t.stats.stat3Value, text: t.stats.stat3Text, source: t.stats.stat3Source, bg: "bg-accent-sky/20" },
              { value: t.stats.stat4Value, text: t.stats.stat4Text, source: t.stats.stat4Source, bg: "bg-accent-lavender/20" },
            ].map((stat) => (
              <div key={stat.value + stat.source} className={`rounded-card-lg ${stat.bg} p-6 text-center`}>
                <p className="font-display text-4xl font-bold text-teal-700">{stat.value}</p>
                <p className="mt-3 text-sm text-teal-900/70">{stat.text}</p>
                <p className="mt-3 text-xs italic text-teal-700/60">{stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3: BENEFITS OF COACHING
          ================================================================ */}
      <section id="benefits" className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <h2 className="font-display text-3xl font-extrabold text-teal-950 md:text-5xl">
            {t.benefits.headline}
          </h2>

          <div className="mt-12 grid gap-5 grid-cols-2 md:grid-cols-3">
            {[
              { text: t.benefits.benefit1, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Z" />, icon2: <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 8.25-3.004 4.496L8.25 15.75l3.004-4.496L15.75 8.25Z" /> },
              { text: t.benefits.benefit2, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" /> },
              { text: t.benefits.benefit3, icon: <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /> },
              { text: t.benefits.benefit4, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" /> },
              { text: t.benefits.benefit5, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /> },
              { text: t.benefits.benefit6, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /> },
            ].map((benefit) => (
              <div key={benefit.text} className="rounded-card-lg bg-teal-50 p-6 md:p-8">
                <svg className="mb-4 h-9 w-9 text-teal-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  {benefit.icon}
                  {benefit.icon2}
                </svg>
                <p className="font-display text-base md:text-lg font-medium leading-snug text-teal-900">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4: WHO IS COACHING FOR?
          ================================================================ */}
      <section id="personas" className="bg-teal-50 pt-20 pb-14">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
          <h2 className="font-display text-3xl font-extrabold text-teal-950 md:text-5xl">
            {t.personas.headline}
          </h2>
          <p className="mt-3 text-lg text-teal-800/70">
            {t.personas.subline}
          </p>
        </div>
        <div className="mx-auto max-w-6xl">
          <PersonaCarousel />
        </div>
      </section>

      {/* ================================================================
          SECTION 5: FEATURED QUOTES
          ================================================================ */}
      <section id="quotes" className="bg-teal-50">
        <QuoteStack />
      </section>

      {/* ================================================================
          SECTION 6: PRICING
          ================================================================ */}
      <section id="pricing" className="bg-cream-200 py-20 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <h2 className="font-display text-3xl font-bold text-teal-950 text-center md:text-5xl">
            {t.pricing.headline}
          </h2>
          <p className="text-lg text-teal-800/70 text-center mt-3">
            {t.pricing.subline}
          </p>

          <div className="grid gap-6 md:grid-cols-3 mt-12 items-start">

            {/* Tier 1 — Free Consult */}
            <div className="rounded-card-lg bg-white p-8 text-center shadow-card">
              <h3 className="font-display text-2xl font-bold text-teal-900">
                {t.pricing.freeTitle}
              </h3>
              <p className="font-display text-4xl font-bold text-teal-700 mt-4">
                {t.pricing.freePrice}
              </p>
              <p className="text-sm leading-relaxed text-teal-800/70 mt-4">
                {t.pricing.freeDesc}
              </p>
              <a href="#" className="btn btn-outline mt-6">
                {t.pricing.freeCta}
              </a>
            </div>

            {/* Tier 2 — Single Session */}
            <div className="rounded-card-lg bg-white p-8 text-center shadow-card">
              <h3 className="font-display text-2xl font-bold text-teal-900">
                {t.pricing.singleTitle}
              </h3>
              <p className="font-display text-4xl font-bold text-teal-700 mt-4">
                {t.pricing.singlePrice}
              </p>
              <p className="text-sm leading-relaxed text-teal-800/70 mt-4">
                {t.pricing.singleDesc}
              </p>
              <a href="#" className="btn btn-outline mt-6">
                {t.pricing.singleCta}
              </a>
            </div>

            {/* Tier 3 — Monthly Coaching (emphasized) */}
            <div className="rounded-card-lg bg-accent-sage p-8 text-center">
              <span className="inline-block rounded-card-lg bg-teal-700 text-white text-xs font-medium px-3 py-1 mb-4">
                {t.pricing.monthlyBadge}
              </span>
              <h3 className="font-display text-2xl font-bold text-teal-700">
                {t.pricing.monthlyTitle}
              </h3>
              <p className="font-display text-4xl font-bold text-teal-700 mt-4">
                {t.pricing.monthlyPrice}
              </p>
              <p className="text-sm leading-relaxed text-teal-900 mt-4">
                {t.pricing.monthlyDesc}
              </p>
              <a href="#" className="btn btn-primary btn-lg mt-6">
                {t.pricing.monthlyCta}
              </a>
            </div>

          </div>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10">
            {[t.pricing.pill1, t.pricing.pill2, t.pricing.pill3].map((pill) => (
              <span key={pill} className="inline-flex items-center gap-2 text-sm font-medium text-teal-700">
                <svg className="h-4 w-4 text-teal-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {pill}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 7: GROUP COACHING
          ================================================================ */}
      <section className="dark-section bg-teal-700 py-20 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-extrabold text-center md:text-5xl">
            {t.group.headline}
          </h2>
          <p className="text-lg leading-relaxed text-white/80 text-center max-w-2xl mx-auto mt-6">
            {t.group.body}
          </p>
          <div className="text-center mt-8">
            <a href="#" className="btn btn-secondary btn-lg">
              {t.group.cta}
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 8: FAQ
          ================================================================ */}
      <section id="faq" className="bg-teal-50 py-20 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-start">

            {/* Left column: headline, subtext, illustration */}
            <div>
              <h2 className="font-display text-3xl font-light text-teal-950 md:text-5xl">
                {t.faq.headlineLight} <span className="font-extrabold">{t.faq.headlineBold}</span>
              </h2>
              <p className="mt-4 text-base text-teal-800/70">
                {t.faq.subline}
              </p>
              <div className="mt-8 hidden md:block">
                <Image
                  src="/images/faq-illustration.webp"
                  alt={t.faq.illustrationAlt}
                  width={400}
                  height={400}
                  className="w-full max-w-[340px]"
                />
              </div>
            </div>

            {/* Right column: accordion */}
            <div>
              <FaqAccordion items={t.faq.items as unknown as { question: string; answer: string }[]} />
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 9: FOOTER / FINAL CTA
          ================================================================ */}
      <section className="dark-section bg-teal-900 py-20 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-5xl">
            {t.footer.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            {t.footer.subline}
          </p>
          <a href="#pricing" className="btn btn-lg mt-8 bg-white text-teal-700 hover:bg-cream-200 hover:shadow-card">
            {t.footer.cta}
          </a>
          <p className="mt-16 text-sm text-white/40">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </section>
    </main>
  );
}
