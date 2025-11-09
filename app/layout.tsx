// app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import ModernNavbar from "@/components/navbar/navbar";
import { AnnouncementBar } from "@/components/annoucement-bar/AnnoucementBar";
import { ContactForm } from "@/components/contact/ContactUs";
import Footer from "@/components/footer/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keizer Group",
  description:
    "Multinational Conglomerate Specializing in Security, Energy, and Infrastructure Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        <link rel="preconnect" href="https://unpkg.com" />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <ModernNavbar />
        <main className="flex-1">{children}</main>
        <ContactForm />
        <Footer text="Copyright © 2025 keizer-group.com - All Rights Reserved." />
      </body>
    </html>
  );
}
