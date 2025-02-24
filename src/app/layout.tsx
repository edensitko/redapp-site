import type { Metadata, Viewport } from 'next/types';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocialMenu from '@/components/FloatingWhatsApp';
import Providers from './providers';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import JsonLd from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RedApp - פיתוח אפליקציות ואתרים',
  description: 'פיתוח אפליקציות ואתרים מותאמים אישית עם טכנולוגיות מתקדמות',
  manifest: '/manifest.json',
  metadataBase: new URL('https://redapp.co.il'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'NvO2jxOAdcFONxOWB3-YerlG9IfXFYGKlb95c0ctY68',
  },
  authors: [{ name: 'RedApp' }],
  creator: 'RedApp',
  publisher: 'RedApp',
  keywords: [
    'RedApp',
    'red app ',
    'רד אפ',
    'רדאפ',
    'פיתוח אפליקציות', 
    'פיתוח אתרים', 'אפליקציות',
     'אתרים', 'פיתוח תוכנה', 'עיצוב אתרים', 
     'בניית אתרים'],
  openGraph: {
    title: 'RedApp - פיתוח אפליקציות ואתרים',
    description: 'פיתוח אפליקציות ואתרים מותאמים אישית עם טכנולוגיות מתקדמות',
    url: 'https://redapp.co.il',
    siteName: 'RedApp',
    locale: 'he_IL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RedApp - פיתוח אפליקציות ואתרים',
    description: 'פיתוח אפליקציות ואתרים מותאמים אישית עם טכנולוגיות מתקדמות',
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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <GoogleAnalytics />
          <JsonLd />
          <Navbar />
          <main>{children}</main>
          <FloatingSocialMenu />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
