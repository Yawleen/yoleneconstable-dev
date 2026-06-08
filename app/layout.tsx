import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';

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
