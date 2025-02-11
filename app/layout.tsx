import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Slider from "@/components/common/slider";
import { GET } from "@/app/api/slides/route";
import QueryProvider from "@/providers/query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hanteo",
  description: "hanteo-test",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await GET();
  const slides = await response.json();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-[600px] m-auto h-screen bg-background overflow-hidden">
          <Slider slides={slides} />
          <QueryProvider>{children}</QueryProvider>
        </div>
      </body>
    </html>
  );
}
