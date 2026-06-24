import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alekhya Atyam | Full Stack Developer",
  description:
    "A premium portfolio for Alekhya Atyam, featuring full stack work, project highlights, resume access, and direct contact links.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alekhya Atyam | Full Stack Developer",
    description:
      "Portfolio highlights across Next.js, Laravel, C#, C++, PostgreSQL, and product-focused web delivery.",
    url: "/",
    siteName: "Alekhya Atyam Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Alekhya Atyam portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alekhya Atyam | Full Stack Developer",
    description:
      "Portfolio highlights across web apps, backend features, and polished product delivery.",
    images: ["/og-image.svg"],
  },
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
