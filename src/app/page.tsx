import Image from "next/image";
import FaqAccordion from "./components/FaqAccordion";
import Navbar from "./components/Navbar";
import PersonaCarousel from "./components/PersonaCarousel";
import QuoteStack from "./components/QuoteStack";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* ================================================================
          SECTION 1: HERO
          bg-teal-700 dark-section — full-bleed 2-col split, text left,
          image right (bleeds to viewport edge, no radius, fill layout)
          ================================================================ */}
      <section className="bg-accent-sage min-h-[90vh] pt-[64px]">
        <div className="grid md:grid-cols-[3fr_2fr] min-h-[calc(90vh-64px)]">

          {/* Left column: headline, checkmark list, CTA */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-20">
            <div className="max-w-lg">
              <h1 className="font-display text-4xl font-extrabold md:text-6xl tracking-tight text-teal-700">
                Real Coaching.<br />Real Change.
              </h1>
              <p className="font-display mt-3 text-2xl font-light italic text-teal-800 md:text-3xl">
                with Jima
              </p>

              {/* Descriptor checkmark list */}
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-700">
                    <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-base text-teal-900">Overcome procrastination</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-700">
                    <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-base text-teal-900">Build better habits</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-700">
                    <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-base text-teal-900">Map out your goals</span>
                </li>
              </ul>

              {/* Primary CTA */}
              <div className="mt-10">
                <a href="#pricing" className="btn btn-primary btn-lg">
                  Book Your Free 20-Minute Consult
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Jima hero image — full-bleed, no radius, fill layout */}
          <div className="relative min-h-[400px] md:min-h-0">
            <Image
              src="/images/jima-hero.webp"
              alt="Jima, personal coach"
              fill
              priority
              className="object-cover object-[center_20%]"
            />
          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 2: SOCIAL PROOF STATS BAR
          bg-cream-200 — 4-column stat cards with decorative accent bgs
          ================================================================ */}
      <section className="bg-cream-200 py-20 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">

          {/* Overline */}
          <p className="mb-10 text-center text-xs font-medium uppercase tracking-widest text-teal-700">
            What the research says about coaching
          </p>

          {/* Stat card grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-card-lg bg-accent-yellow/20 p-6 text-center">
              <p className="font-display text-4xl font-bold text-teal-700">85%</p>
              <p className="mt-3 text-sm text-teal-900/70">
                of coaching clients report improved self-confidence
              </p>
              <p className="mt-3 text-xs italic text-teal-700/60">ICF</p>
            </div>

            <div className="rounded-card-lg bg-accent-sage/20 p-6 text-center">
              <p className="font-display text-4xl font-bold text-teal-700">70%</p>
              <p className="mt-3 text-sm text-teal-900/70">
                report improvements in work performance
              </p>
              <p className="mt-3 text-xs italic text-teal-700/60">ICF</p>
            </div>

            <div className="rounded-card-lg bg-accent-sky/20 p-6 text-center">
              <p className="font-display text-4xl font-bold text-teal-700">7x</p>
              <p className="mt-3 text-sm text-teal-900/70">
                average ROI of coaching
              </p>
              <p className="mt-3 text-xs italic text-teal-700/60">PriceWaterhouseCoopers</p>
            </div>

            <div className="rounded-card-lg bg-accent-lavender/20 p-6 text-center">
              <p className="font-display text-4xl font-bold text-teal-700">70%</p>
              <p className="mt-3 text-sm text-teal-900/70">
                increase in individual performance from coaching programs
              </p>
              <p className="mt-3 text-xs italic text-teal-700/60">American University / ICF</p>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3: BENEFITS OF COACHING
          bg-white — icon + text benefit cards
          ================================================================ */}
      <section id="benefits" className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">

          {/* Section headline */}
          <h2 className="font-display text-3xl font-extrabold text-teal-950 md:text-5xl">
            What changes when you have a coach in your corner?
          </h2>

          {/* Benefits card grid */}
          <div className="mt-12 grid gap-5 grid-cols-2 md:grid-cols-3">

            <div className="rounded-card-lg bg-teal-50 p-6 md:p-8">
              {/* Compass icon — clarity */}
              <svg className="mb-4 h-9 w-9 text-teal-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 8.25-3.004 4.496L8.25 15.75l3.004-4.496L15.75 8.25Z" />
              </svg>
              <p className="font-display text-base md:text-lg font-medium leading-snug text-teal-900">
                Clarity on what you actually want
              </p>
            </div>

            <div className="rounded-card-lg bg-teal-50 p-6 md:p-8">
              {/* Checkmark clipboard icon — accountability */}
              <svg className="mb-4 h-9 w-9 text-teal-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
              </svg>
              <p className="font-display text-base md:text-lg font-medium leading-snug text-teal-900">
                Accountability that sticks
              </p>
            </div>

            <div className="rounded-card-lg bg-teal-50 p-6 md:p-8">
              {/* Bolt icon — confidence */}
              <svg className="mb-4 h-9 w-9 text-teal-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
              <p className="font-display text-base md:text-lg font-medium leading-snug text-teal-900">
                Confidence to act
              </p>
            </div>

            <div className="rounded-card-lg bg-teal-50 p-6 md:p-8">
              {/* Map icon — plan */}
              <svg className="mb-4 h-9 w-9 text-teal-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
              </svg>
              <p className="font-display text-base md:text-lg font-medium leading-snug text-teal-900">
                A plan, not just a dream
              </p>
            </div>

            <div className="rounded-card-lg bg-teal-50 p-6 md:p-8">
              {/* Users icon — someone in your corner */}
              <svg className="mb-4 h-9 w-9 text-teal-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
              <p className="font-display text-base md:text-lg font-medium leading-snug text-teal-900">
                Someone in your corner
              </p>
            </div>

            <div className="rounded-card-lg bg-teal-50 p-6 md:p-8">
              {/* Chart trending up icon — measurable progress */}
              <svg className="mb-4 h-9 w-9 text-teal-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
              </svg>
              <p className="font-display text-base md:text-lg font-medium leading-snug text-teal-900">
                Real, measurable progress
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4: WHO IS COACHING FOR?
          bg-teal-50 — 4 colorful persona cards with real photos
          ================================================================ */}
      <section id="personas" className="bg-teal-50 pt-20 pb-14">

        {/* Constrained header */}
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
          <h2 className="font-display text-3xl font-extrabold text-teal-950 md:text-5xl">
            You don&rsquo;t need to be in crisis to benefit from coaching.
          </h2>
          <p className="mt-3 text-lg text-teal-800/70">
            Coaching meets you wherever you are.
          </p>
        </div>

        {/* 4-card grid */}
        <div className="mx-auto max-w-6xl">
          <PersonaCarousel />
        </div>

      </section>

      {/* ================================================================
          SECTION 5: FEATURED QUOTES
          bg-white — stacked card deck with fan-out interaction
          ================================================================ */}
      <section id="quotes" className="bg-teal-50">
        <QuoteStack />
      </section>

      {/* ================================================================
          SECTION 6: PRICING
          bg-cream-200 — 3-column tier cards (free / single / monthly)
          ================================================================ */}
      <section id="pricing" className="bg-cream-200 py-20 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">

          {/* Section headline */}
          <h2 className="font-display text-3xl font-bold text-teal-950 text-center md:text-5xl">
            Simple, flexible, no-commitment options.
          </h2>
          <p className="text-lg text-teal-800/70 text-center mt-3">
            Start wherever feels right for you.
          </p>

          {/* Pricing tier grid */}
          <div className="grid gap-6 md:grid-cols-3 mt-12 items-start">

            {/* Tier 1 — Free Consult */}
            <div className="rounded-card-lg bg-white p-8 text-center shadow-card">
              <h3 className="font-display text-2xl font-bold text-teal-900">
                Free Consult
              </h3>
              <p className="font-display text-4xl font-bold text-teal-700 mt-4">
                Free
              </p>
              <p className="text-sm leading-relaxed text-teal-800/70 mt-4">
                20 minutes, no pressure, no pitch. Just a conversation to see if we&rsquo;re a good fit.
              </p>
              <a href="#" className="btn btn-outline mt-6">
                Book My Free Call
              </a>
            </div>

            {/* Tier 2 — Single Session */}
            <div className="rounded-card-lg bg-white p-8 text-center shadow-card">
              <h3 className="font-display text-2xl font-bold text-teal-900">
                Single Session
              </h3>
              <p className="font-display text-4xl font-bold text-teal-700 mt-4">
                $20
              </p>
              <p className="text-sm leading-relaxed text-teal-800/70 mt-4">
                60 minutes, one-on-one. Great for a specific challenge or if you want to try before committing.
              </p>
              <a href="#" className="btn btn-primary mt-6">
                Book a Session
              </a>
            </div>

            {/* Tier 3 — Monthly Coaching (emphasized) */}
            <div className="dark-section rounded-card-lg bg-teal-700 p-8 text-center">
              <span className="inline-block rounded-card-lg bg-coral-500 text-white text-xs font-medium px-3 py-1 mb-4">
                Most Popular
              </span>
              <h3 className="font-display text-2xl font-bold">
                Monthly Coaching
              </h3>
              <p className="font-display text-4xl font-bold mt-4">
                $60/mo
              </p>
              <p className="text-sm leading-relaxed text-white/70 mt-4">
                Weekly 60-minute sessions. Ongoing support, accountability, and momentum. That&rsquo;s 4 sessions a month &mdash; less than $1 a day to invest in yourself.
              </p>
              <a href="#" className="btn btn-coral btn-lg mt-6">
                Start Monthly Coaching
              </a>
            </div>

          </div>

          {/* Fine-print note */}
          <p className="text-sm italic text-teal-800/60 text-center mt-8">
            All sessions are conducted via video call. Scheduling is flexible.
          </p>

        </div>
      </section>

      {/* ================================================================
          SECTION 7: GROUP COACHING
          bg-teal-700 dark-section — centered CTA band
          ================================================================ */}
      <section className="dark-section bg-teal-700 py-20 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">

          {/* Section headline */}
          <h2 className="font-display text-3xl font-extrabold text-center md:text-5xl">
            Rather grow with a community?
          </h2>

          {/* Body copy */}
          <p className="text-lg leading-relaxed text-white/80 text-center max-w-2xl mx-auto mt-6">
            Sometimes the most powerful thing is realizing you&rsquo;re not alone in your challenges. Group sessions bring together people with shared goals &mdash; so you get coaching and the energy of a group moving forward together. Join the waitlist to be first to know when spots open.
          </p>

          {/* CTA */}
          <div className="text-center mt-8">
            <a href="#" className="btn btn-secondary btn-lg">
              Join the Waitlist
            </a>
          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 8: FAQ
          bg-teal-50 — Talkspace-style 2-column: illustration left, accordion right
          ================================================================ */}
      <section id="faq" className="bg-teal-50 py-20 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <div className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-start">

            {/* Left column: headline, subtext, illustration */}
            <div>
              <h2 className="font-display text-3xl font-light text-teal-950 md:text-5xl">
                Any <span className="font-extrabold">questions?</span>
              </h2>
              <p className="mt-4 text-base text-teal-800/70">
                Find honest answers about coaching with Jima.
              </p>

              {/* Illustration */}
              <div className="mt-8 hidden md:block">
                <Image
                  src="/images/faq-illustration.webp"
                  alt="Hands nurturing a lightbulb with a growing plant — representing growth through coaching"
                  width={400}
                  height={400}
                  className="w-full max-w-[340px]"
                />
              </div>
            </div>

            {/* Right column: accordion */}
            <div>
              <FaqAccordion
                items={[
                  {
                    question: "What is coaching, exactly?",
                    answer:
                      "Coaching is a forward-focused partnership. Your coach helps you identify where you want to go, uncover what\u2019s getting in the way, and build a clear plan to move forward. It\u2019s not advice-giving \u2014 it\u2019s guided self-discovery.",
                  },
                  {
                    question: "What is coaching NOT?",
                    answer:
                      "Coaching is not therapy, counseling, or mentorship. A coach doesn\u2019t diagnose, treat, or prescribe. If you\u2019re dealing with mental health challenges, a licensed therapist is the right resource. Coaching is for people who are functional and motivated, but want more clarity, direction, or accountability.",
                  },
                  {
                    question: "Do I need to have a major problem to start coaching?",
                    answer:
                      "Not at all. Most coaching clients aren\u2019t in crisis \u2014 they\u2019re people who want to grow faster, get unstuck, or stop repeating old patterns.",
                  },
                  {
                    question: "How is this different from just talking to a friend?",
                    answer:
                      "A coach is trained to ask the right questions, not just listen. And unlike a friend, a coach has no stake in your decisions \u2014 they\u2019re 100% focused on what\u2019s best for you.",
                  },
                  {
                    question: "What happens in a session?",
                    answer:
                      "Sessions are typically 60 minutes via video call. You\u2019ll set an intention for the session, explore what\u2019s holding you back, and leave with concrete next steps. Every session is different because you bring the agenda.",
                  },
                  {
                    question: "How long until I see results?",
                    answer:
                      "Many clients leave their very first session with new clarity. Deeper, lasting changes typically emerge over weeks of consistent work. That\u2019s why the monthly option tends to create the most transformation.",
                  },
                  {
                    question: "What if I\u2019m not sure coaching is right for me?",
                    answer:
                      "That\u2019s exactly what the free 20-minute consult is for. No pressure \u2014 just a real conversation.",
                  },
                ]}
              />
            </div>

          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 9: FOOTER / FINAL CTA
          bg-teal-900 dark-section — centered headline + coral CTA + copyright
          ================================================================ */}
      <section className="dark-section bg-teal-900 py-20 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl text-center">

          {/* Headline */}
          <h2 className="font-display text-3xl font-extrabold md:text-5xl">
            Ready to start?
          </h2>

          {/* Subline */}
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Book a free 20-minute call with Jima &mdash; no commitment, no pressure.
          </p>

          {/* Primary CTA */}
          <a href="#pricing" className="btn btn-coral btn-lg mt-8">
            Book Your Free Consult
          </a>

          {/* Copyright */}
          <p className="mt-16 text-sm text-white/40">
            © {new Date().getFullYear()} Jima Personal Coach
          </p>

        </div>
      </section>
    </main>
  );
}
