import type { Metadata } from "next";
import AppProviders from "@/context/contextProviders";
import { elzaVariable, gallient, gesturaText } from "./typefaces/type-faces";
import "./globals.css";
import Header from "@/components/header";
import GoogleAnalytics from "@/lib/google-analytics";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Leon Nwankwo - Personal Site",
  description: "A space to showcase my experiences and projects.",
  openGraph: {
    title: "Leon Nwanwko - Personal Site",
    description: "A space to showcase my experiences and projects.",

    url: "https://leonchike.me",
    siteName: "Leon Nwankwo - Personal Site",
    images: [
      {
        url: "https://imagedelivery.net/camphNQlX5poswEZJbu_Cw/5e091063-f025-4510-b7f9-5039b381dd00/public",
        width: 1200,
        height: 630,
        alt: "Leon Nwankwo - Personal Site",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "./images/favicon.png",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${elzaVariable.variable} ${gallient.variable} ${gesturaText.variable} min-h-screen font-sans text-primary-dark pt-[56px] tracking-[0.015em]`}
      >
        <AppProviders>
          <GoogleAnalytics />
          <Header />
          {children}
          <Script
            defer
            data-domain="leonchike.me"
            src="https://plausible.io/js/script.js"
          />
        </AppProviders>
      </body>
    </html>
  );
}
