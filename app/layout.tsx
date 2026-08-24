import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const title = "Mustafa Khoso — Software Developer & AI Builder";
const description =
  "Mustafa Khoso is a software developer and AI builder building practical software, AI-powered developer tools, and native applications — from Myko, an AI-native dev workspace, to CORE, an in-development AI developer environment.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title: {
    default: title,
    template: "%s — Mustafa Khoso",
  },
  description,
  keywords: [
    "Mustafa Khoso",
    "Software Developer",
    "AI Builder",
    "Product Engineer",
    "Rust Developer",
    "React Developer",
    "Myko AI",
    "CORE",
    "Tauri",
    "Developer Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.website }],
  creator: profile.name,
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: profile.website,
    siteName: `${profile.name} — Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
