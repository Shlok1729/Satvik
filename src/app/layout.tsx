import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Satvik Yoga Classes — Find Your Inner Peace",
    template: "%s | Satvik Yoga",
  },
  description:
    "Embrace the Sattvic path with expert-led yoga classes. Ashtanga, Hatha, Prenatal, Meditation & more in a serene, welcoming studio. Inquire via WhatsApp today.",
  keywords: [
    "yoga classes",
    "satvik yoga",
    "hatha yoga",
    "ashtanga yoga",
    "prenatal yoga",
    "meditation",
    "breathwork",
    "pranayama",
    "wellness",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased overflow-x-hidden", "font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
