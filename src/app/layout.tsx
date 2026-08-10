import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tejasbyte Technologies — Innovate. Build. Elevate.",
  description:
    "Tejasbyte Technologies Pvt. Ltd. delivers scalable, secure and intelligent software solutions that drive growth and transform businesses.",
  keywords: [
    "software development", "web development", "mobile apps", "Next.js", "React",
    "cloud", "DevOps", "AI", "Tejasbyte", "Tejasbyte Technologies", "Nepal",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Tejasbyte Technologies — Innovate. Build. Elevate.",
    description: "Scalable, secure and intelligent software solutions that drive growth and transform businesses.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/logos/social-media-cover-image.png", width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
