import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Jima Personal Coach — Real Coaching. Real Change.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function CheckItem({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
      }}
    >
      <div
        style={{
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          backgroundColor: "#005C65",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: "22px",
          color: "#0A3D3D",
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default async function Image() {
  const heroBuffer = await readFile(
    join(process.cwd(), "public/images/og-hero.jpg")
  );
  const heroSrc = `data:image/jpeg;base64,${heroBuffer.toString("base64")}`;

  const fontData = await fetch(
    "https://fonts.gstatic.com/s/solway/v19/AMOTz46Cs2uTAOCuLlgZmg.ttf"
  ).then((res) => res.arrayBuffer());

  const fontBoldData = await fetch(
    "https://fonts.gstatic.com/s/solway/v19/AMOTz46Cs2uTAOCuIlwZmg.ttf"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#9DEAB2",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 50px 60px 70px",
            width: "58%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "SolwayBold",
              fontSize: "72px",
              color: "#005C65",
              lineHeight: 1.05,
            }}
          >
            <span>Real Coaching.</span>
            <span>Real Change.</span>
          </div>

          <div
            style={{
              fontFamily: "Solway",
              fontSize: "32px",
              fontStyle: "italic",
              color: "#004D55",
              marginTop: "10px",
            }}
          >
            with Jima
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginTop: "36px",
              fontFamily: "Solway",
            }}
          >
            <CheckItem text="Overcome procrastination" />
            <CheckItem text="Build better habits" />
            <CheckItem text="Map out your goals" />
          </div>

          <div style={{ display: "flex", marginTop: "40px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#005C65",
                color: "#ffffff",
                fontFamily: "SolwayBold",
                fontSize: "22px",
                padding: "18px 36px",
                borderRadius: "8px",
              }}
            >
              Book Your Free 20-Minute Consult
            </div>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroSrc}
          alt=""
          style={{
            width: "42%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 20%",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Solway",
          data: fontData,
          weight: 300 as const,
          style: "normal" as const,
        },
        {
          name: "SolwayBold",
          data: fontBoldData,
          weight: 800 as const,
          style: "normal" as const,
        },
      ],
    }
  );
}
