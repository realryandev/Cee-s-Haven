import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixelifySans = Pixelify_Sans ({
  variable: "--font-pixelify-sans",
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Cee's Haven",
  description: "Made by Ryan for Kea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pixelifySans.className}>
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
