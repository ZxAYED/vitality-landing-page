import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const viewport: Viewport = {
  themeColor: "#0A0B0D",
};

export const metadata: Metadata = {
  title: "Vitalyze â€” AI Health & Mental Wellness App | Body & Mind Tracking",
  description:
    "The first app that connects what your body data tells you about your mental health â€” and what your mind reveals about your physical performance. Join 12,000+ early members.",
  icons: {
    icon: "/vitalyze-icon.png",
    shortcut: "/vitalyze-icon.png",
    apple: "/vitalyze-icon.png",
  },
  keywords: [
    "health app",
    "mental wellness",
    "body tracking",
    "mind tracking",
    "AI health",
    "wellness score",
    "mood tracking",
    "biometrics",
  ],
  openGraph: {
    title: "Vitalyze â€” Your Body Talks. Your Mind Matters.",
    description:
      "The first app that connects what your body data tells you about your mental health.",
    type: "website",
    url: "https://vitalyze.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

