import type { Metadata } from 'next';

import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/ui/CookieConsent';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

const neueRegrade = localFont({
  src: [
    { path: '../fonts/Neue-Regrade-Light.otf', weight: '300', style: 'normal' },
    { path: '../fonts/Neue-Regrade-Regular.otf', weight: '400', style: 'normal' },
    { path: '../fonts/Neue-Regrade-Medium.otf', weight: '500', style: 'normal' },
    { path: '../fonts/Neue-Regrade-Semibold.otf', weight: '600', style: 'normal' },
    { path: '../fonts/Neue-Regrade-Bold.otf', weight: '700', style: 'normal' },
    { path: '../fonts/Neue-Regrade-Extrabold.otf', weight: '900', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-neue-regrade',
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Cogniify - AI Solutions for Modern Business',
  description: 'Transform your business with cutting-edge AI solutions',
  keywords: 'AI, artificial intelligence, machine learning, automation, business solutions'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`relative overflow-x-hidden ${neueRegrade.variable} ${montserrat.variable}`}>
        <Header />
        {children}
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
