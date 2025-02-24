import type { Metadata, Viewport } from 'next/types';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from './providers';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import JsonLd from '@/components/JsonLd';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'רדאפ - RedApp פיתוח אפליקציות ואתרים',
  description: 'חברת פיתוח אפליקציות ואתרים מובילה בישראל. אנו מתמחים בפיתוח אפליקציות לאנדרואיד ואייפון, אתרי אינטרנט ומערכות מידע.',
  keywords: 'פיתוח אפליקציות, פיתוח אתרים, פיתוח אפליקציות לאנדרואיד, פיתוח אפליקציות לאייפון, פיתוח מערכות מידע, פיתוח תוכנה',
  authors: [{ name: 'רדאפ' }],
  creator: 'רדאפ',
  publisher: 'רדאפ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
  openGraph: {
    title: 'רדאפ - RedApp פיתוח אפליקציות ואתרים',
    description: 'חברת פיתוח אפליקציות ואתרים מובילה בישראל. אנו מתמחים בפיתוח אפליקציות לאנדרואיד ואייפון, אתרי אינטרנט ומערכות מידע.',
    url: 'https://redapp.co.il',
    siteName: 'רדאפ',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'רדאפ Logo',
      },
    ],
    locale: 'he_IL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'רדאפ - RedApp פיתוח אפליקציות ואתרים',
    description: 'חברת פיתוח אפליקציות ואתרים מובילה בישראל. אנו מתמחים בפיתוח אפליקציות לאנדרואיד ואייפון, אתרי אינטרנט ומערכות מידע.',
    creator: '@redapp',
    images: ['/logo.png'],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo.s.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo.s.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.s.png', sizes: 'any' },
    ],
    apple: [
      { url: '/logo.s.png' },
    ],
    shortcut: ['/logo.s.png'],
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.s.png" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.s.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.s.png" />
        <link rel="apple-touch-icon" href="/logo.s.png" />
        <link rel="shortcut icon" href="/logo.s.png" />
      </head>
      <body className={inter.className}>
        <Providers>
          <GoogleAnalytics />
          <JsonLd />
          <Navbar />
          <main>{children}</main>
          <FloatingWhatsApp />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
