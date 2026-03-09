export default function DesignSystemPage() {
  return (
    <div className="min-h-screen">
      {/* ================================================================
          HEADER
          ================================================================ */}
      <header className="dark-section bg-teal-700 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-body text-sm font-semibold uppercase tracking-widest text-teal-200">
            Design System v1.0
          </p>
          <h1 className="text-5xl md:text-7xl">
            Jima Personal Coach
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            A warm, approachable design system built for personal coaching.
            Deep teal grounds the brand in trust. Cream adds warmth. Coral
            provides energy. Fraunces gives display type an elegant, refined
            serif voice while DM Sans keeps body copy clean and readable.
          </p>
        </div>
      </header>

      {/* ================================================================
          COLOR PALETTE — TEAL
          ================================================================ */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl">Color System</h2>
          <p className="mt-3 max-w-2xl text-base text-teal-800/70">
            Three scales — primary teal, warm cream neutrals, and coral accent —
            plus five decorative spot colors for cards, badges, and illustrations.
          </p>

          {/* Teal */}
          <h3 className="mb-4 mt-12 text-xl">Primary — Teal</h3>
          <p className="mb-6 text-sm text-teal-800/60">
            The brand anchor. Used for navigation, hero backgrounds, headings,
            buttons, and dark sections. The 700 shade is the primary brand color.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-11">
            {[
              { shade: "50", hex: "#F0FAF8", dark: false },
              { shade: "100", hex: "#D4F2ED", dark: false },
              { shade: "200", hex: "#AAE5DB", dark: false },
              { shade: "300", hex: "#72D3C5", dark: false },
              { shade: "400", hex: "#40BDAC", dark: false },
              { shade: "500", hex: "#24A393", dark: true },
              { shade: "600", hex: "#198678", dark: true },
              { shade: "700", hex: "#0D6E62", dark: true },
              { shade: "800", hex: "#0B5A50", dark: true },
              { shade: "900", hex: "#094A42", dark: true },
              { shade: "950", hex: "#042E29", dark: true },
            ].map((c) => (
              <div key={c.shade} className="flex flex-col">
                <div
                  className="aspect-square rounded-card"
                  style={{ backgroundColor: c.hex }}
                />
                <p className="mt-2 font-body text-xs font-semibold text-teal-900">
                  {c.shade}
                  {c.shade === "700" && (
                    <span className="ml-1 text-coral-500">*</span>
                  )}
                </p>
                <p className="font-body text-xs text-teal-700/60">{c.hex}</p>
              </div>
            ))}
          </div>

          {/* Cream */}
          <h3 className="mb-4 mt-14 text-xl">Warm Neutrals — Cream</h3>
          <p className="mb-6 text-sm text-teal-800/60">
            Warm backgrounds that feel inviting rather than sterile. The 200
            shade is the primary warm section background.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-11">
            {[
              { shade: "50", hex: "#FDFBF8", dark: false },
              { shade: "100", hex: "#FAF6F0", dark: false },
              { shade: "200", hex: "#F5EDE3", dark: false },
              { shade: "300", hex: "#EBE0D2", dark: false },
              { shade: "400", hex: "#DDD0BC", dark: false },
              { shade: "500", hex: "#CCBDA6", dark: false },
              { shade: "600", hex: "#B3A48B", dark: true },
              { shade: "700", hex: "#9A8A71", dark: true },
              { shade: "800", hex: "#7F7260", dark: true },
              { shade: "900", hex: "#695E50", dark: true },
              { shade: "950", hex: "#3D3630", dark: true },
            ].map((c) => (
              <div key={c.shade} className="flex flex-col">
                <div
                  className="aspect-square rounded-card border border-cream-300/50"
                  style={{ backgroundColor: c.hex }}
                />
                <p className="mt-2 font-body text-xs font-semibold text-teal-900">
                  {c.shade}
                </p>
                <p className="font-body text-xs text-teal-700/60">{c.hex}</p>
              </div>
            ))}
          </div>

          {/* Coral */}
          <h3 className="mb-4 mt-14 text-xl">Accent — Coral</h3>
          <p className="mb-6 text-sm text-teal-800/60">
            Energetic warmth for CTAs, highlights, and moments of emphasis.
            The 500 shade is the primary accent.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-11">
            {[
              { shade: "50", hex: "#FEF5F2" },
              { shade: "100", hex: "#FCEAE3" },
              { shade: "200", hex: "#F8D2C6" },
              { shade: "300", hex: "#F2B5A0" },
              { shade: "400", hex: "#E89478" },
              { shade: "500", hex: "#D4775E" },
              { shade: "600", hex: "#C0604A" },
              { shade: "700", hex: "#A14B39" },
              { shade: "800", hex: "#853E30" },
              { shade: "900", hex: "#6E3429" },
              { shade: "950", hex: "#3B1A13" },
            ].map((c) => (
              <div key={c.shade} className="flex flex-col">
                <div
                  className="aspect-square rounded-card"
                  style={{ backgroundColor: c.hex }}
                />
                <p className="mt-2 font-body text-xs font-semibold text-teal-900">
                  {c.shade}
                </p>
                <p className="font-body text-xs text-teal-700/60">{c.hex}</p>
              </div>
            ))}
          </div>

          {/* Decorative Accents */}
          <h3 className="mb-4 mt-14 text-xl">Decorative Accents</h3>
          <p className="mb-6 text-sm text-teal-800/60">
            Spot colors for stat cards, badges, illustrations, and playful
            moments. Use sparingly to add life without overwhelming.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {[
              { name: "Yellow", hex: "#F2D06B", cls: "bg-accent-yellow" },
              { name: "Sage", hex: "#8DB580", cls: "bg-accent-sage" },
              { name: "Sky", hex: "#7CB8C9", cls: "bg-accent-sky" },
              { name: "Lavender", hex: "#B8A9D0", cls: "bg-accent-lavender" },
              { name: "Peach", hex: "#F5C4A1", cls: "bg-accent-peach" },
            ].map((c) => (
              <div key={c.name} className="flex flex-col">
                <div
                  className="h-20 rounded-card-lg"
                  style={{ backgroundColor: c.hex }}
                />
                <p className="mt-2 font-body text-sm font-semibold text-teal-900">
                  {c.name}
                </p>
                <p className="font-body text-xs text-teal-700/60">{c.hex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          TYPOGRAPHY
          ================================================================ */}
      <section className="bg-cream-100 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl">Typography</h2>
          <p className="mt-3 max-w-2xl text-base text-teal-800/70">
            Fraunces (serif) for display headings — elegant, refined, trustworthy.
            DM Sans (geometric sans-serif) for body copy — clean, modern, readable.
          </p>

          {/* Display Font Showcase */}
          <div className="mt-12 rounded-card-lg border border-cream-300 bg-white p-8 md:p-12">
            <p className="mb-8 font-body text-xs font-semibold uppercase tracking-widest text-teal-600">
              Display — Fraunces (font-display)
            </p>

            <div className="space-y-8">
              <div>
                <p className="mb-1 font-body text-xs text-teal-600/60">
                  Hero — text-5xl / md:text-7xl · bold
                </p>
                <h1 className="text-5xl md:text-7xl">
                  Find your path forward
                </h1>
              </div>

              <div>
                <p className="mb-1 font-body text-xs text-teal-600/60">
                  Hero with mixed weight — bold + normal
                </p>
                <h1 className="text-4xl md:text-6xl">
                  Personal coaching for{" "}
                  <span className="font-normal italic">real life</span>
                </h1>
              </div>

              <hr className="border-cream-200" />

              <div>
                <p className="mb-1 font-body text-xs text-teal-600/60">
                  Section Heading — text-3xl / md:text-5xl · bold
                </p>
                <h2 className="text-3xl md:text-5xl">
                  Here&rsquo;s how it works
                </h2>
              </div>

              <div>
                <p className="mb-1 font-body text-xs text-teal-600/60">
                  Subsection — text-2xl / md:text-3xl · semibold
                </p>
                <h3 className="text-2xl font-semibold md:text-3xl">
                  What members say about coaching
                </h3>
              </div>

              <div>
                <p className="mb-1 font-body text-xs text-teal-600/60">
                  Card Heading — text-xl · semibold
                </p>
                <h4 className="text-xl font-semibold">
                  Personalized guidance for every stage
                </h4>
              </div>

              <div>
                <p className="mb-1 font-body text-xs text-teal-600/60">
                  Small Heading — text-lg · semibold
                </p>
                <h5 className="text-lg font-semibold">
                  Backed by research and empathy
                </h5>
              </div>
            </div>
          </div>

          {/* Body Font Showcase */}
          <div className="mt-8 rounded-card-lg border border-cream-300 bg-white p-8 md:p-12">
            <p className="mb-8 font-body text-xs font-semibold uppercase tracking-widest text-teal-600">
              Body — DM Sans (font-body)
            </p>

            <div className="space-y-8">
              <div>
                <p className="mb-1 font-body text-xs text-teal-600/60">
                  Body Large — text-lg · regular
                </p>
                <p className="font-body text-lg leading-relaxed">
                  Working with a personal coach means having a dedicated partner
                  who listens, challenges, and supports you through life&rsquo;s
                  transitions. Whether you&rsquo;re navigating career changes,
                  building confidence, or finding balance, coaching creates space
                  for meaningful growth.
                </p>
              </div>

              <div>
                <p className="mb-1 font-body text-xs text-teal-600/60">
                  Body — text-base · regular
                </p>
                <p className="font-body text-base leading-relaxed">
                  Coaching sessions are tailored to your unique goals and
                  circumstances. Through guided conversation and proven
                  techniques, we help you uncover insights, develop strategies,
                  and take confident steps toward the life you want.
                </p>
              </div>

              <div>
                <p className="mb-1 font-body text-xs text-teal-600/60">
                  Body Small — text-sm · regular
                </p>
                <p className="font-body text-sm leading-relaxed text-teal-800/70">
                  All sessions are confidential. Coaching is not therapy or
                  counseling. If you are in crisis, please contact emergency
                  services or a licensed mental health professional.
                </p>
              </div>

              <hr className="border-cream-200" />

              <div>
                <p className="mb-1 font-body text-xs text-teal-600/60">
                  Label / Overline — text-xs · semibold · uppercase · tracking-widest
                </p>
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-teal-600">
                  Featured coaching programs
                </p>
              </div>

              <div>
                <p className="mb-1 font-body text-xs text-teal-600/60">
                  Caption — text-xs · regular
                </p>
                <p className="font-body text-xs text-teal-700/60">
                  Rated 4.9/5 by over 2,000 clients since 2021
                </p>
              </div>
            </div>
          </div>

          {/* Typography on dark background */}
          <div className="dark-section mt-8 rounded-card-lg bg-teal-700 p-8 md:p-12">
            <p className="mb-8 font-body text-xs font-semibold uppercase tracking-widest text-teal-200">
              Typography on Dark Teal
            </p>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl">
                See a coach today to get started
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-white/75">
                Take the first step toward a more intentional, fulfilling life.
                Connect with a coach who understands where you are and where you
                want to be.
              </p>
              <p className="text-sm text-white/50">
                No commitment required. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          BUTTONS
          ================================================================ */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl">Buttons</h2>
          <p className="mt-3 max-w-2xl text-base text-teal-800/70">
            Pill-shaped with generous padding. Four color variants and three sizes.
            Always use the <code className="rounded bg-teal-50 px-1.5 py-0.5 font-body text-sm text-teal-700">btn</code> base
            class plus a variant class.
          </p>

          {/* Light background buttons */}
          <div className="mt-12 rounded-card-lg border border-cream-300 bg-white p-8 md:p-12">
            <p className="mb-6 font-body text-xs font-semibold uppercase tracking-widest text-teal-600">
              On Light Backgrounds
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-coral">Book a Session</button>
              <button className="btn btn-outline">Learn More</button>
            </div>

            <p className="mb-4 mt-10 font-body text-xs font-semibold uppercase tracking-widest text-teal-600">
              Sizes
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="btn btn-primary btn-sm">Small</button>
              <button className="btn btn-primary">Default</button>
              <button className="btn btn-primary btn-lg">Large</button>
            </div>
          </div>

          {/* Dark background buttons */}
          <div className="dark-section mt-6 rounded-card-lg bg-teal-700 p-8 md:p-12">
            <p className="mb-6 font-body text-xs font-semibold uppercase tracking-widest text-teal-200">
              On Dark Teal Backgrounds
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="btn btn-coral">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>

          {/* Cream background buttons */}
          <div className="mt-6 rounded-card-lg bg-cream-200 p-8 md:p-12">
            <p className="mb-6 font-body text-xs font-semibold uppercase tracking-widest text-teal-600">
              On Cream Backgrounds
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CARDS
          ================================================================ */}
      <section className="bg-teal-50 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl">Cards</h2>
          <p className="mt-3 max-w-2xl text-base text-teal-800/70">
            Crisp corners with subtle rounding, clean shadows. Cards adapt to
            their background context — white on color, colored on white.
          </p>

          {/* Standard Cards */}
          <h3 className="mb-4 mt-12 text-xl">Standard Content Cards</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "1:1 Coaching",
                desc: "Personalized sessions tailored to your goals, schedule, and pace of growth.",
              },
              {
                title: "Group Programs",
                desc: "Shared learning experiences that build community and accelerate your development.",
              },
              {
                title: "Self-Guided Tools",
                desc: "Worksheets, journals, and exercises you can use between sessions.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-card-lg bg-white p-8 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <h4 className="text-xl font-semibold">{card.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-teal-800/70">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stat Cards */}
          <h3 className="mb-4 mt-14 text-xl">Stat / Highlight Cards</h3>
          <p className="mb-6 text-sm text-teal-800/60">
            Use decorative accent backgrounds for visual variety in stats,
            testimonials, or research highlights.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: "2,000+", label: "Clients coached", bg: "bg-accent-yellow" },
              { num: "4.9/5", label: "Average rating", bg: "bg-accent-sage" },
              { num: "98%", label: "Recommend coaching", bg: "bg-accent-sky" },
              { num: "12+", label: "Years experience", bg: "bg-accent-lavender" },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`${stat.bg} rounded-card-lg p-8`}
              >
                <p className="font-display text-4xl font-bold text-teal-950">
                  {stat.num}
                </p>
                <p className="mt-2 font-body text-sm font-medium text-teal-900/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Feature Card with teal background */}
          <h3 className="mb-4 mt-14 text-xl">Feature Card — Dark</h3>
          <div className="dark-section rounded-card-lg bg-teal-700 p-8 md:p-12">
            <div className="max-w-lg">
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-teal-200">
                Featured
              </p>
              <h3 className="mt-3 text-2xl md:text-3xl">
                More than 60,000 5-star reviews
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Real people sharing real transformations. Read stories from
                clients who found clarity, confidence, and purpose through
                coaching.
              </p>
              <button className="btn btn-coral mt-6">Read Reviews</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION BACKGROUNDS
          ================================================================ */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl">Section Backgrounds</h2>
          <p className="mt-3 max-w-2xl text-base text-teal-800/70">
            Alternate between these four section backgrounds to create visual
            rhythm and clearly separate content areas.
          </p>

          <div className="mt-12 space-y-4">
            {/* White */}
            <div className="rounded-card-lg border border-cream-200 bg-white p-8 md:p-12">
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-teal-600">
                White — bg-white
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Clean, open sections
              </h3>
              <p className="mt-2 text-sm text-teal-800/70">
                Default background for most content. Feels spacious and clear.
              </p>
            </div>

            {/* Light Teal */}
            <div className="rounded-card-lg bg-teal-50 p-8 md:p-12">
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-teal-600">
                Light Teal — bg-teal-50
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Subtle brand presence
              </h3>
              <p className="mt-2 text-sm text-teal-800/70">
                A whisper of teal to differentiate sections without heaviness.
                Great for card grids and feature lists.
              </p>
            </div>

            {/* Cream */}
            <div className="rounded-card-lg bg-cream-200 p-8 md:p-12">
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-teal-600">
                Cream — bg-cream-200
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Warm and inviting
              </h3>
              <p className="mt-2 text-sm text-teal-800/70">
                Perfect for FAQ sections, testimonials, and content that should
                feel cozy and human. Avoids the sterility of pure white.
              </p>
            </div>

            {/* Dark Teal */}
            <div className="dark-section rounded-card-lg bg-teal-700 p-8 md:p-12">
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-teal-200">
                Dark Teal — bg-teal-700
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Bold and immersive
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Used for hero sections, CTA bands, navigation, and footer.
                White text on deep teal creates strong contrast and brand impact.
              </p>
            </div>

            {/* Darkest Teal */}
            <div className="dark-section rounded-card-lg bg-teal-900 p-8 md:p-12">
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-teal-300">
                Darkest Teal — bg-teal-900
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Footer territory
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Reserved for the footer and ultra-dark bands. Adds depth below
                the teal-700 CTA sections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          COMPONENT PATTERNS
          ================================================================ */}
      <section className="bg-cream-100 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl">Component Patterns</h2>
          <p className="mt-3 max-w-2xl text-base text-teal-800/70">
            Reusable layout patterns derived from the reference design. These
            are the building blocks for assembling full pages.
          </p>

          {/* Nav bar pattern */}
          <h3 className="mb-4 mt-12 text-xl">Navigation Bar</h3>
          <div className="dark-section overflow-hidden rounded-card-lg bg-teal-700">
            <nav className="flex items-center justify-between px-6 py-4 md:px-8">
              <span className="font-display text-xl font-bold">Jima</span>
              <div className="hidden items-center gap-8 md:flex">
                <a href="#" className="font-body text-sm text-white/80 transition-colors hover:text-white">
                  About
                </a>
                <a href="#" className="font-body text-sm text-white/80 transition-colors hover:text-white">
                  Services
                </a>
                <a href="#" className="font-body text-sm text-white/80 transition-colors hover:text-white">
                  Testimonials
                </a>
                <a href="#" className="font-body text-sm text-white/80 transition-colors hover:text-white">
                  FAQ
                </a>
              </div>
              <button className="btn btn-coral btn-sm">Get Started</button>
            </nav>
          </div>

          {/* Hero pattern */}
          <h3 className="mb-4 mt-14 text-xl">Hero Section</h3>
          <div className="dark-section overflow-hidden rounded-card-lg bg-teal-700">
            <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12 lg:p-16">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl">
                  Personal coaching for{" "}
                  <span className="font-normal italic">real life</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  Find clarity, build confidence, and create a life that feels
                  authentically yours — with a coach who truly listens.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button className="btn btn-coral btn-lg">
                    Book a Free Consultation
                  </button>
                  <button className="btn btn-secondary">Learn More</button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="aspect-[3/4] w-full max-w-sm rounded-card-lg bg-teal-600/50" />
              </div>
            </div>
          </div>

          {/* How it works pattern */}
          <h3 className="mb-4 mt-14 text-xl">How It Works — Step Cards</h3>
          <div className="rounded-card-lg border border-cream-300 bg-white p-8 md:p-12">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl">Here&rsquo;s how it works</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Schedule a call",
                  desc: "Choose a time that works for you. Your first consultation is always free.",
                },
                {
                  step: "02",
                  title: "Create your roadmap",
                  desc: "Together we'll identify your goals and design a personalized coaching plan.",
                },
                {
                  step: "03",
                  title: "Start growing",
                  desc: "Regular sessions, actionable tools, and ongoing support to keep you moving forward.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-card-lg bg-teal-50 p-8 text-center"
                >
                  <span className="font-display text-4xl font-bold text-teal-300">
                    {item.step}
                  </span>
                  <h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-teal-800/70">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Band pattern */}
          <h3 className="mb-4 mt-14 text-xl">CTA Band</h3>
          <div className="dark-section rounded-card-lg bg-teal-700 p-8 text-center md:p-16">
            <h2 className="text-3xl md:text-4xl">
              Ready to take the first step?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/70">
              Book a free 30-minute consultation and discover how coaching can
              help you create meaningful change.
            </p>
            <button className="btn btn-coral btn-lg mt-8">
              Book Your Free Call
            </button>
          </div>

          {/* FAQ pattern */}
          <h3 className="mb-4 mt-14 text-xl">FAQ Section</h3>
          <div className="rounded-card-lg bg-cream-200 p-8 md:p-12">
            <h2 className="mb-8 text-center text-2xl md:text-3xl">
              Any questions?
            </h2>
            <div className="mx-auto max-w-2xl divide-y divide-cream-400">
              {[
                "What is personal coaching?",
                "How is coaching different from therapy?",
                "How long are coaching sessions?",
                "What if I need to reschedule?",
              ].map((q) => (
                <div key={q} className="py-5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold">{q}</h4>
                    <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-teal-700 text-teal-700">
                      +
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SPACING & RADIUS REFERENCE
          ================================================================ */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl">Spacing & Radius</h2>
          <p className="mt-3 max-w-2xl text-base text-teal-800/70">
            Consistent spacing and border-radius tokens keep the design cohesive.
          </p>

          <h3 className="mb-4 mt-12 text-xl">Border Radius</h3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { name: "rounded-card", val: "0.375rem", cls: "rounded-card" },
              { name: "rounded-card-lg", val: "0.5rem", cls: "rounded-card-lg" },
              { name: "rounded-pill", val: "9999px", cls: "rounded-pill" },
              { name: "rounded-full", val: "50%", cls: "rounded-full" },
            ].map((r) => (
              <div key={r.name} className="text-center">
                <div
                  className={`mx-auto h-24 w-24 bg-teal-200 ${r.cls}`}
                />
                <p className="mt-3 font-body text-sm font-semibold text-teal-900">
                  {r.name}
                </p>
                <p className="font-body text-xs text-teal-700/60">{r.val}</p>
              </div>
            ))}
          </div>

          <h3 className="mb-4 mt-14 text-xl">Section Spacing</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-4">
              <span className="w-32 font-body font-semibold text-teal-900">Section gap</span>
              <span className="text-teal-700/70">py-20 (5rem / 80px)</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-32 font-body font-semibold text-teal-900">Content max-w</span>
              <span className="text-teal-700/70">max-w-6xl (72rem / 1152px)</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-32 font-body font-semibold text-teal-900">Page gutter</span>
              <span className="text-teal-700/70">px-6 md:px-12 lg:px-20</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-32 font-body font-semibold text-teal-900">Card padding</span>
              <span className="text-teal-700/70">p-8 md:p-12 (2rem → 3rem)</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-32 font-body font-semibold text-teal-900">Card grid gap</span>
              <span className="text-teal-700/70">gap-6 (1.5rem / 24px)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          FOOTER / END
          ================================================================ */}
      <footer className="dark-section bg-teal-900 px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-body text-sm text-white/40">
            Jima Personal Coach — Design System v1.0
          </p>
        </div>
      </footer>
    </div>
  );
}
