"use client";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

/**
 * FaqAccordion — client component.
 *
 * Renders a single-open accordion: clicking an item opens it and
 * collapses any previously open item. Null means nothing is open.
 */
export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b border-teal-200 py-5">
            {/* Question row — full-width clickable trigger */}
            <div
              className="flex cursor-pointer items-center justify-between gap-4"
              onClick={() => handleToggle(index)}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleToggle(index);
                }
              }}
            >
              <h3 className="font-display text-lg font-bold text-teal-900 md:text-xl">
                {item.question}
              </h3>

              {/* Toggle indicator — simple plus sign */}
              <span
                className="ml-4 shrink-0 text-2xl text-teal-700"
                aria-hidden="true"
              >
                {isOpen ? "\u2212" : "+"}
              </span>
            </div>

            {/* Answer — conditionally rendered */}
            {isOpen && (
              <p className="mt-3 pb-2 text-base leading-relaxed text-teal-800/70">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
