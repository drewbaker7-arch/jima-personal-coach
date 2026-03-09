import Image from "next/image";

/* --------------------------------------------------------------------------
   QuoteStack
   4 testimonial quote cards displayed in a scattered layout.
   -------------------------------------------------------------------------- */

const QUOTES = [
  {
    text: "Coaching is unlocking a person\u2019s potential to maximize their own performance.",
    author: "Timothy Gallwey",
  },
  {
    text: "One of the biggest contributors to my self-confidence has been private coaching.",
    author: "Stephen Curry",
  },
  {
    text: "Sometimes they just need a little nudge, a little direction, a little coaching, and the greatest things can happen.",
    author: "Pete Carroll",
  },
  {
    text: "A life coach does for the rest of your life what a personal trainer does for your health and fitness.",
    author: "Elaine MacDonald",
  },
];

/* Scattered positions — slot-based x for even distribution */
const SCATTER = [
  { slot: 0, y: 20, rotate: -3.5 },
  { slot: 1, y: -12, rotate: 2.2 },
  { slot: 2, y: 22, rotate: -1.8 },
  { slot: 3, y: -6, rotate: 3 },
];

export default function QuoteStack() {
  return (
    <div className="quote-section">
      <div className="quote-section__inner">
        <div className="quote-scatter">
          {QUOTES.map((quote, i) => {
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
