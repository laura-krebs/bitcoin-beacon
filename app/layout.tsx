import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Schibsted_Grotesk, Goudy_Bookletter_1911, Quicksand } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted-grotesk",
  display: "swap",
});

const goudyBookletter = Goudy_Bookletter_1911({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-goudy",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});


export const viewport: Viewport = {
  themeColor: "#F7931A",
};

export const metadata: Metadata = {
  title: "Bitcoin Beacon — Cycle Score",
  description:
    "An educational Bitcoin market cycle tracker. One score, updated daily, with plain-language context.",
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
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
    <html lang="en" className={`${spaceGrotesk.variable} ${schibstedGrotesk.variable} ${goudyBookletter.variable} ${quicksand.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
