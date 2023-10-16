import { Metadata } from "next";
import AppProviders from "@/context/contextProviders";
import localFont from "next/font/local";
import "@/styles/global.css";
import Footer from "@/components/Footer";

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
    icon: "./favicon.png",
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

const MDSystem = localFont({
  src: "../styles/fonts/MDSystem-VF.woff2",
  variable: "--MDSystem",
  fallback: [
    "Helvetica",
    "Franklin Gothic Medium",
    "Franklin Gothic",
    "ITC Franklin Gothic",
    "sans-serif",
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={MDSystem.className}>
        <AppProviders>{children}</AppProviders>
        <Footer />
      </body>
    </html>
  );
}
