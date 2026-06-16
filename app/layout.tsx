import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alekhya Atyam | Product Designer & Full Stack Developer",
  description:
    "A modern section-based portfolio built with Next.js, featuring clean motion, case studies, and contact details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
