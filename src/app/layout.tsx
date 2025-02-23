import type { Metadata, Viewport } from 'next/types';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocialMenu from '@/components/FloatingWhatsApp';
import Providers from './providers';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RedApp - פיתוח אפליקציות ואתרים',
  description: 'פיתוח אפליקציות ואתרים מותאמים אישית עם טכנולוגיות מתקדמות',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <GoogleAnalytics />
          <Navbar />
          <main>{children}</main>
          <FloatingSocialMenu />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
