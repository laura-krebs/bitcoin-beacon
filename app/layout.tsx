import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bitcoin Beacon — Cycle Score",
  description:
    "An educational Bitcoin market cycle tracker. One score, updated daily, with plain-language context.",
  manifest: "/manifest.json",
  themeColor: "#F7931A",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Bitcoin Beacon",
  },
  openGraph: {
    title: "Bitcoin Beacon",
    description: "Educational Bitcoin market cycle tracker.",
    url: "https://bitcoinbeacon.live",
    siteName: "Bitcoin Beacon",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
