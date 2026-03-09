"use client";

import { useLanguage } from "@/i18n/LanguageContext";

/* Scattered positions — slot-based x for even distribution */
const SCATTER = [
  { slot: 0, y: 20, rotate: -3.5 },
  { slot: 1, y: -12, rotate: 2.2 },
  { slot: 2, y: 22, rotate: -1.8 },
  { slot: 3, y: -6, rotate: 3 },
];

export default function QuoteStack() {
  const { t } = useLanguage();

  const quotes = [t.quotes.quote1, t.quotes.quote2, t.quotes.quote3, t.quotes.quote4];

  return (
    <div className="quote-section">
      <div className="quote-section__inner">
        <div className="quote-scatter">
          {quotes.map((quote, i) => {
            const scatter = SCATTER[i];

            return (
              <div
                key={i}
                className="quote-card-landscape is-expanded"
                style={
                  {
                    "--stack-x": "0px",
                    "--stack-y": "0px",
                    "--stack-r": "0deg",
                    "--scatter-x": `calc(${scatter.slot} * (100% - var(--card-w)) / 3)`,
                    "--scatter-y": `${scatter.y}px`,
                    "--scatter-r": `${scatter.rotate}deg`,
                    zIndex: i + 1,
                  } as React.CSSProperties
                }
              >
                <p className="quote-card-landscape__text">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <p className="quote-card-landscape__author">{quote.author}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
