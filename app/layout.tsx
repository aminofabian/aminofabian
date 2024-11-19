import { Jost } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import { ThemeProvider } from '@/context/ThemeContext';

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#059669" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <div className="relative min-h-screen overflow-hidden">
          {/* Background decorative elements */}
          <div className="fixed inset-0 pointer-events-none">
            {/* Top right glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            {/* Bottom left glow */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            {/* Center ambient light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-primary/2 to-transparent"></div>
          </div>
          
          {/* Content */}
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
