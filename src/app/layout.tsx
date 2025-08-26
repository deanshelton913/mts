import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mukilteo Technical Solutions - Small Business IT Services & Web Development",
  description: "Transform your small business with professional IT services, web development, and technical consulting in Mukilteo, WA. 20+ years of expertise helping businesses establish online presence, optimize operations, and drive growth through innovative technology solutions.",
  keywords: "small business IT services, web development Mukilteo, technical consulting, IT support Washington, business technology solutions, e-commerce development, digital transformation, cloud services, cybersecurity, local IT company, Mukilteo tech services, business website design, IT consulting small business, technical support services",
  authors: [{ name: "Mukilteo Technical Solutions" }],
  creator: "Mukilteo Technical Solutions",
  publisher: "Mukilteo Technical Solutions",
  robots: "index, follow",
  openGraph: {
    title: "Mukilteo Technical Solutions - Small Business IT Services",
    description: "Professional IT services and web development for small businesses in Mukilteo, WA. 20+ years of expertise helping businesses get online and stay competitive with custom technical solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Mukilteo Technical Solutions",
    url: "https://mukilteotech.com",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Mukilteo Technical Solutions - Professional IT Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukilteo Technical Solutions - Small Business IT Services",
    description: "Professional IT services and web development for small businesses in Mukilteo, WA. 20+ years of expertise helping businesses get online and stay competitive.",
    images: ["/logo1.png"],
  },
  alternates: {
    canonical: "https://mukilteotech.com",
  },
  category: "Technology",
  classification: "Business Services",
  other: {
    "geo.region": "US-WA",
    "geo.placename": "Mukilteo",
    "geo.position": "47.9445;-122.3046",
    "ICBM": "47.9445, -122.3046",
    "DC.title": "Mukilteo Technical Solutions",
    "DC.creator": "Mukilteo Technical Solutions",
    "DC.subject": "IT Services, Web Development, Technical Consulting",
    "DC.description": "Professional technical solutions for small businesses in Mukilteo, Washington",
    "DC.publisher": "Mukilteo Technical Solutions",
    "DC.contributor": "Mukilteo Technical Solutions",
    "DC.date": "2024",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://mukilteotech.com",
    "DC.language": "en",
    "DC.coverage": "Mukilteo, Washington, United States",
    "DC.rights": "Copyright 2024 Mukilteo Technical Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mukilteotech.com";
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const isProd = process.env.NODE_ENV === 'production';
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mukilteo Technical Solutions',
    url: siteUrl,
    logo: `${siteUrl}/logo1.png`,
    email: 'info@mukilteotech.com',
    sameAs: [],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mukilteo Technical Solutions',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Google Ads tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-1005222920"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'AW-1005222920');
          `}
        </Script>
        {/* Google Analytics 4 (loaded in production when GA_ID is set) */}
        {isProd && GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        ) : null}
        <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(orgJsonLd)}
        </Script>
        <Script id="website-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteJsonLd)}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
