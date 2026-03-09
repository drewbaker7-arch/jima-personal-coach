"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface PersonaConfig {
  slug: string;
  translationKey: "recentGrad" | "careerChanger" | "ambitiousStarter" | "lifeTransitioner";
  colorClass: string;
}

const PERSONA_CONFIGS: PersonaConfig[] = [
  { slug: "recent-grad", translationKey: "recentGrad", colorClass: "persona-card--sage" },
  { slug: "career-changer", translationKey: "careerChanger", colorClass: "persona-card--yellow" },
  { slug: "ambitious-starter", translationKey: "ambitiousStarter", colorClass: "persona-card--coral" },
  { slug: "life-transitioner", translationKey: "lifeTransitioner", colorClass: "persona-card--sky" },
];

export default function PersonaCarousel() {
  const { t } = useLanguage();
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
      {PERSONA_CONFIGS.map((config, index) => {
        const persona = t.personas[config.translationKey];
        return (
          <div
            key={config.slug}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`persona-card ${config.colorClass}`}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="persona-card__photo">
              <Image
                src={`/images/persona-${config.slug}.webp`}
                alt={persona.alt}
                width={400}
                height={500}
                className="persona-card__image"
                unoptimized
              />
            </div>
            <div className="persona-card__body">
              <h3 className="persona-card__quote">{persona.quote}</h3>
              <p className="persona-card__description">{persona.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
