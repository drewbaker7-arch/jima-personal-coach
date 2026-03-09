"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/* --------------------------------------------------------------------------
   PersonaCards
   4 colorful cards with real photos showing who coaching is for.
   Each card has a distinct accent color, a portrait image, a quote headline,
   and a short description of how coaching helps.
   -------------------------------------------------------------------------- */

interface Persona {
  slug: string;
  quote: string;
  description: string;
  alt: string;
  /** Accent color class for the card background */
  colorClass: string;
}

const PERSONAS: Persona[] = [
  {
    slug: "recent-grad",
    quote: "\u201cI have a degree but no direction.\u201d",
    description:
      "Clarifying career paths, building confidence, navigating first steps",
    alt: "Young man looking ahead with purpose",
    colorClass: "persona-card--sage",
  },
  {
    slug: "career-changer",
    quote:
      "\u201cI know I want something different \u2014 I just don\u2019t know what.\u201d",
    description: "Identifying values, exploring options, making a plan",
    alt: "Professional woman smiling in office",
    colorClass: "persona-card--yellow",
  },
  {
    slug: "ambitious-starter",
    quote: "\u201cI have big goals but keep getting in my own way.\u201d",
    description:
      "Accountability, breaking goals into action, mindset work",
    alt: "Confident man smiling at camera",
    colorClass: "persona-card--coral",
  },
  {
    slug: "life-transitioner",
    quote:
      "\u201cI\u2019m going through a big change and need to find my footing.\u201d",
    description: "Grounding, clarity, building forward momentum",
    alt: "Woman laughing with joy and confidence",
    colorClass: "persona-card--sky",
  },
];

export default function PersonaCarousel() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("persona-card--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="persona-grid">
      {PERSONAS.map((persona, index) => (
        <div
          key={persona.slug}
          ref={(el) => {
            cardRefs.current[index] = el;
          }}
          className={`persona-card ${persona.colorClass}`}
          style={{ animationDelay: `${index * 120}ms` }}
        >
          {/* Photo */}
          <div className="persona-card__photo">
            <Image
              src={`/images/persona-${persona.slug}.webp`}
              alt={persona.alt}
              width={400}
              height={500}
              className="persona-card__image"
              unoptimized
            />
          </div>

          {/* Text content */}
          <div className="persona-card__body">
            <h3 className="persona-card__quote">{persona.quote}</h3>
            <p className="persona-card__description">{persona.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
