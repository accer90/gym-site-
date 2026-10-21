import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { contactData } from "@/data/contact";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ACE GYM | NEVER GIVE UP | Premier Fitness & Hardcore Gym in Ramnagar, Nainital",
  description:
    "Transform your physique and mindset at ACE GYM, Ramnagar, Bharatpuri (Nainital), Uttarakhand. High-intensity strength training, CrossFit turf, cardio cinema, and certified coaches. Book your 1-day free trial!",
  keywords: [
    "ACE GYM",
    "ACE GYM Ramnagar",
    "gym in Ramnagar",
    "gym in Bharatpuri",
    "fitness club Nainital",
    "best gym in Ramnagar Uttarakhand",
    "gym near Jim Corbett",
    "hardcore gym Ramnagar",
    "strength training Ramnagar",
    "crossfit Ramnagar",
  ],
  authors: [{ name: "ACE GYM" }],
  creator: "ACE GYM",
  publisher: "ACE GYM",
  metadataBase: new URL("https://acegymramnagar.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ACE GYM | NEVER GIVE UP | Premier Fitness & Hardcore Gym in Ramnagar",
    description:
      "Transform your physique and mindset at ACE GYM, Bharatpuri, Ramnagar (Nainital). Claim your 1-day free trial pass today!",
    url: "https://acegymramnagar.com",
    siteName: "ACE GYM Ramnagar",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "ACE GYM Heavy Lifting Arena Ramnagar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACE GYM | NEVER GIVE UP | Premier Fitness in Ramnagar",
    description:
      "Ramnagar's hardcore yet luxury fitness arena in Bharatpuri. Strength, cardio, CrossFit, and certified trainers.",
    images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// JSON-LD Structured Data for LocalBusiness / ExerciseGym
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "ACE GYM",
  alternateName: "ACE GYM Ramnagar",
  description:
    "Premier luxury and hardcore gym in Ramnagar, Bharatpuri (Nainital), Uttarakhand. Equipped with Olympic barbells, cardio cinema, CrossFit turf, and certified coaches.",
  slogan: "NEVER GIVE UP",
  telephone: `+91-${contactData.phone}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: contactData.address.street,
    addressLocality: contactData.address.city,
    addressRegion: contactData.address.state,
    postalCode: contactData.address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "29.395758",
    longitude: "79.117454",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "04:30",
      closes: "10:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "16:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "06:00",
      closes: "12:00",
    },
  ],
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-[#F5F5F5] font-sans antialiased selection:bg-[#FF2D2D] selection:text-white">
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
