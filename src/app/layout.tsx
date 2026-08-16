import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const BASE_URL = "https://www.tejasbyte.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Tejasbyte Technologies — AI, Web & Software Development Company",
    template: "%s | Tejasbyte Technologies",
  },

  description:
    "Tejasbyte Technologies is a US-based software engineering company with offices in Richmond, California and Kathmandu, Nepal. We build AI-powered software, scalable web apps, mobile applications, and cloud infrastructure for startups and enterprises worldwide.",

  keywords: [
    // Core brand
    "Tejasbyte", "Tejasbyte Technologies", "Tejasbyte Technologies Pvt Ltd",
    // AI / ML
    "AI software development", "artificial intelligence development company",
    "machine learning development", "LLM integration", "RAG pipeline",
    "AI web application", "custom AI solutions", "OpenAI integration",
    "ChatGPT integration", "AI startup", "AI agency",
    // Web development
    "web development company", "custom web application development",
    "Next.js development", "React development company",
    "full stack web development", "SaaS development company",
    "web app development Nepal", "software development company Nepal",
    // Mobile
    "mobile app development", "React Native development",
    "iOS app development", "Android app development",
    "cross-platform mobile app",
    // Cloud / DevOps
    "cloud infrastructure", "AWS development", "DevOps services",
    "Kubernetes", "cloud migration", "scalable software",
    // General software
    "software engineering company", "software development agency",
    "custom software development", "enterprise software",
    "startup software development", "software outsourcing Nepal",
    // Location
    "software company Kathmandu", "IT company Nepal",
    "tech company Nepal", "software agency Nepal",
  ],

  authors: [{ name: "Tejasbyte Technologies", url: BASE_URL }],
  creator: "Tejasbyte Technologies",
  publisher: "Tejasbyte Technologies",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Tejasbyte Technologies",
    title: "Tejasbyte Technologies — AI, Web & Software Development Company",
    description:
      "We build AI-powered software, scalable web apps, mobile applications, and cloud systems for businesses worldwide. Senior engineers. Full-stack ownership.",
    images: [
      {
        url: "/logos/social-media-cover-image.png",
        width: 1200,
        height: 630,
        alt: "Tejasbyte Technologies — AI, Web & Software Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tejasbyte Technologies — AI, Web & Software Development",
    description:
      "AI software, web apps, mobile, and cloud engineering for startups and enterprises. US-based company with offices in California and Nepal. Senior-only team.",
    images: ["/logos/social-media-cover-image.png"],
    creator: "@tejasbyte",
    site: "@tejasbyte",
  },

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: [
      { url: "/favicon.ico",          type: "image/x-icon"  },
      { url: "/favicon-16x16.png",    type: "image/png",    sizes: "16x16" },
      { url: "/favicon-32x32.png",    type: "image/png",    sizes: "32x32" },
      { url: "/icon-512.png",         type: "image/png",    sizes: "512x512" },
    ],
    apple:    "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  category: "technology",

  verification: {
    google: "google9a97a5d62925d02a",
  },
};

export const viewport: Viewport = {
  themeColor: "#5B30E8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
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
        {/* JSON-LD Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tejasbyte Technologies",
              alternateName: "Tejasbyte Technologies Pvt. Ltd.",
              url: BASE_URL,
              logo: `${BASE_URL}/logos/full-color-primary.png`,
              image: `${BASE_URL}/logos/social-media-cover-image.png`,
              description:
                "Tejasbyte Technologies is a US-based software engineering company with offices in Richmond, California and Kathmandu, Nepal. We build AI-powered applications, scalable web platforms, mobile apps, and cloud infrastructure for global clients.",
              foundingDate: "2020",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "2420 Rheem Ave",
                  addressLocality: "Richmond",
                  addressRegion: "CA",
                  postalCode: "94804",
                  addressCountry: "US",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Kathmandu",
                  addressCountry: "NP",
                },
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+977-9849627282",
                  contactType: "customer service",
                  email: "contact@tejasbyte.com",
                  availableLanguage: ["English", "Nepali"],
                },
              ],
              sameAs: [
                "https://www.linkedin.com/company/tejasbyte",
                "https://github.com/tejasbytetech",
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Web Development",
                "Mobile App Development",
                "Cloud Infrastructure",
                "Software Engineering",
                "Next.js",
                "React",
                "React Native",
                "Node.js",
                "AWS",
                "Kubernetes",
              ],
              areaServed: "Worldwide",
              numberOfEmployees: { "@type": "QuantitativeValue", value: "15" },
            }),
          }}
        />
        {/* JSON-LD — WebSite with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Tejasbyte Technologies",
              url: BASE_URL,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

