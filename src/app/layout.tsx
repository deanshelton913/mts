import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mukilteo Technical Solutions - Small Business IT Services",
  description: "Professional technical solutions for small businesses. 20+ years of expertise helping businesses get online and stay competitive.",
  keywords: "small business IT, technical solutions, Mukilteo, business technology, IT services, web development, technical consulting",
  authors: [{ name: "Mukilteo Technical Solutions" }],
  openGraph: {
    title: "Mukilteo Technical Solutions",
    description: "Professional technical solutions for small businesses",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
