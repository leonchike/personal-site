import type { Metadata } from "next";
import { elzaVariable, gallient } from "./typefaces/type-faces";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${elzaVariable.variable} ${gallient.variable} min-h-screen font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
