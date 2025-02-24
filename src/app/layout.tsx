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
  metadataBase: new URL('https://redapp.co.il'),
  title: 'רדאפ - RedApp פיתוח אפליקציות ואתרים מקצועי בישראל',
  description: 'רדאפ - חברת פיתוח אפליקציות ואתרים מובילה בישראל. אנו מתמחים בפיתוח אפליקציות לאנדרואיד ואייפון, אתרי אינטרנט ומערכות מידע מתקדמות עם מעל 10 שנות ניסיון.',
  keywords: [
    'רדאפ',
    'redapp',
    'רד אפ',
    'red app',
    'פיתוח אפליקציות',
    'פיתוח אתרים',
    'פיתוח אפליקציות לאנדרואיד',
    'פיתוח אפליקציות לאייפון',
    'פיתוח מערכות מידע',
    'פיתוח תוכנה',
    'חברת הייטק',
    'סטארטאפ ישראלי',
    'פיתוח אפליקציות בתל אביב',
    'בניית אתרים',
    'עיצוב אפליקציות'
  ],
  authors: [
    { 
      name: 'רדאפ',
      url: 'https://redapp.co.il/about'
    }
  ],
  creator: 'רדאפ - RedApp Development Team',
  publisher: 'רדאפ Technologies Ltd.',
  category: 'technology',
  alternates: {
    canonical: 'https://redapp.co.il',
    languages: {
      'en-US': 'https://redapp.co.il/en',
      'he-IL': 'https://redapp.co.il'
    }
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    other: {
      me: ['mailto:contact@redapp.co.il', 'https://linkedin.com/company/redapp']
    }
  },
  openGraph: {
    title: 'רדאפ - RedApp | פיתוח אפליקציות ואתרים מקצועי',
    description: 'רדאפ - חברת פיתוח אפליקציות ואתרים מובילה בישראל. אנו מתמחים בפיתוח אפליקציות לאנדרואיד ואייפון, אתרי אינטרנט ומערכות מידע מתקדמות.',
    url: 'https://redapp.co.il',
    siteName: 'רדאפ - RedApp',
    images: [
      {
        url: 'https://redapp.co.il/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'רדאפ - RedApp Development',
        type: 'image/jpeg',
      },
      {
        url: 'https://redapp.co.il/og-image-square.jpg',
        width: 600,
        height: 600,
        alt: 'רדאפ - RedApp Logo',
        type: 'image/jpeg',
      }
    ],
    locale: 'he_IL',
    type: 'website',
    countryName: 'Israel',
    emails: ['contact@redapp.co.il'],
    phoneNumbers: ['+972-XX-XXX-XXXX'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'רדאפ - RedApp | פיתוח אפליקציות ואתרים',
    description: 'חברת פיתוח אפליקציות ואתרים מובילה בישראל. התמחות בפיתוח אפליקציות, אתרים ומערכות מידע.',
    site: '@redapp',
    creator: '@redapp',
    images: [
      {
        url: 'https://redapp.co.il/twitter-image.jpg',
        alt: 'רדאפ - RedApp Development',
        width: 1200,
        height: 600,
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ],
  },
  manifest: '/manifest.json',
  applicationName: 'RedApp',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'RedApp',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#2b5797',
    'msapplication-config': '/browserconfig.xml'
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  userScalable: false,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Remove any preload for Google Analytics */}
        <link rel="icon" href="/logo.s.png" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.s.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.s.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.s.png" />
        <link rel="shortcut icon" href="/logo.s.png" />
        <script 
          async 
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
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