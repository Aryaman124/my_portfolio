// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Aryaman Sarcar — Portfolio",
  description: "Personal portfolio of Aryaman Sarcar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // NOTE: No client-only logic here. Keep it static/SSR-safe.
  return (
    <html lang="en">
      {/* suppressHydrationWarning avoids dev-only noise if the class list differs slightly
         (e.g., font var ordering) between server and client */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
