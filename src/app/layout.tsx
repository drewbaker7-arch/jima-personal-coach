import type { Metadata } from "next";
import { Solway } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

const solway = Solway({
  variable: "--font-solway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jima Personal Coach — Real Coaching. Real Change.",
  description:
    "Overcome procrastination, build better habits, and map out your goals with personalized 1-on-1 coaching. Book your free 20-minute consult today.",
  metadataBase: new URL("https://jima-personal-coach.vercel.app"),
  openGraph: {
    title: "Jima Personal Coach — Real Coaching. Real Change.",
    description:
      "Overcome procrastination, build better habits, and map out your goals with personalized 1-on-1 coaching.",
    siteName: "Jima Personal Coach",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jima Personal Coach — Real Coaching. Real Change.",
    description:
      "Overcome procrastination, build better habits, and map out your goals with personalized 1-on-1 coaching.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${solway.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
