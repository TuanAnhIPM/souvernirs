import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Kindness Vietnam | Vietnam Local Gifts",
  description:
    "Beautiful Vietnamese agricultural gifts for travelers, tour companies, and souvenir partners. Vietnam Local Gifts by Kindness Vietnam.",
  icons: {
    icon: "/kindness-vietnam-logo.svg",
    shortcut: "/kindness-vietnam-logo.svg",
    apple: "/kindness-vietnam-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} bg-sand-50 font-sans text-coffee-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}