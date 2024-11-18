import type { Metadata } from "next";
import localFont from "next/font/local";
import { Jost } from 'next/font/google';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
});

export const metadata: Metadata = {
  title: "Fabian Amino | Full Stack Developer & Designer",
  description: "Full Stack Developer specializing in React, Next.js, and modern web technologies. Creating beautiful, performant web experiences with expertise in 3D animations, cloud architecture, and innovative solutions.",
  keywords: [
    "Full Stack Developer",
    "Web Designer",
    "React Developer",
    "Next.js Expert",
    "3D Web Animation",
    "Cloud Architecture",
    "TypeScript",
    "Node.js",
    "Fabian Amino",
  ],
  authors: [{ name: "Fabian Amino" }],
  creator: "Fabian Amino",
  publisher: "Fabian Amino",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aminofabian.com",
    siteName: "Fabian Amino - Portfolio",
    title: "Fabian Amino | Creative Full Stack Developer",
    description: "Explore my portfolio showcasing innovative web development projects, 3D animations, and modern tech solutions. Specialized in React, Next.js, and cloud architecture.",
    images: [
      {
        url: "/fab.jpg",
        width: 1200,
        height: 630,
        alt: "Fabian Amino - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabian Amino | Creative Full Stack Developer",
    description: "Full Stack Developer crafting beautiful web experiences with React, Next.js, and modern technologies.",
    creator: "@aminofabian",
    images: ["/fab.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google verification code here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jost.variable}`}>
      <body className="font-jost antialiased">
        {children}
      </body>
    </html>
  );
}
