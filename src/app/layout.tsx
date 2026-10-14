import type { Metadata } from "next";
import { Fira_Sans, Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  variable: "--font-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Accessibility Services",
    template: "%s - Accessibility Services",
  },
  description:
    "Accessibility Services provides consulting services devoted exclusively to making our built environment accessible to people with disabilities.",
  openGraph: {
    siteName: "Accessibility Services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className={`${firaSans.variable} ${oswald.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
