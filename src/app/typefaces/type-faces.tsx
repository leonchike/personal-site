import localFont from "next/font/local";

export const elzaVariable = localFont({
  src: "./elzavariable-upright.woff2",
  display: "swap",
  variable: "--font-elzavariable",
});

export const gallient = localFont({
  src: "./gallient-regular.woff",
  display: "swap",
  variable: "--font-gallient",
});

export const gesturaText = localFont({
  src: [
    {
      path: "./GesturaText-Regular.woff2",
      weight: "400",
    },
    {
      path: "./GesturaText-Semibold.woff2",
      weight: "600",
    },
  ],
  display: "swap",
  variable: "--font-gestura",
});
