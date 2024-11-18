import { Jost } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

const inter = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://aminofabian.com'),
  title: {
    default: 'Fabian Amino | Full Stack Developer & Creative Technologist',
    template: '%s | Fabian Amino'
  },
  description: 'Full Stack Developer specializing in innovative web solutions and interactive experiences. Expert in React, Next.js, Three.js, and modern web technologies.',
  keywords: ['Full Stack Developer', 'Web Development', 'React', 'Next.js', 'Three.js', 'Interactive Design', 'Kenya Developer', 'Creative Technology'],
  authors: [{ name: 'Fabian Amino' }],
  creator: 'Fabian Amino',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aminofabian.com',
    title: 'Fabian Amino | Full Stack Developer & Creative Technologist',
    description: 'Full Stack Developer specializing in innovative web solutions and interactive experiences.',
    siteName: 'Fabian Amino Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fabian Amino - Full Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fabian Amino | Full Stack Developer',
    description: 'Full Stack Developer specializing in innovative web solutions and interactive experiences.',
    creator: '@amino_fabian',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#059669" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
