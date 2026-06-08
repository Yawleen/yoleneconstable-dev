import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const space_Grotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Yolène Constable | Développeuse Front-End React & Next.js',
  description:
    'Développeuse Front-End spécialisée React & Next.js. Découvrez mon portfolio, mes projets web, mon expérience et mes services de création de sites vitrines, e-commerce et landing pages.',
  openGraph: {
    title: 'Yolène Constable | Développeuse Front-End React & Next.js',
    description:
      'Découvrez mon portfolio, mes projets web, mon expérience et mes services de création de sites vitrines, e-commerce et landing pages.',
    url: SITE_URL,
    siteName: 'Yolène Constable',
    images: [
      {
        url: 'images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yolène Constable - Développeuse Front-End React & Next.js',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yolène Constable | Développeuse Front-End React & Next.js',
    description:
      'Découvrez mon portfolio, mes projets web, mon expérience et mes services de création de sites vitrines, e-commerce et landing pages.',
    images: ['images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${space_Grotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
