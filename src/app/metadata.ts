import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'רד אפ - RedApp | פיתוח אפליקציות ותוכנה מותאמת אישית',
  description: 'רד אפ מתמחה בפיתוח אפליקציות מתקדמות ופתרונות טכנולוגיים חדשניים. אנו מספקים שירותי פיתוח מקצועיים, מעיצוב ועד השקה, עם דגש על חווית משתמש מעולה וביצועים מיטביים.',
  keywords: [
    'רד אפ',
    'RedApp',
    'פיתוח אפליקציות',
    'פיתוח תוכנה',
    'אפליקציות מובייל',
    'פיתוח אפליקציות iOS',
    'פיתוח אפליקציות אנדרואיד',
    'פיתוח אתרים',
    'עיצוב אפליקציות',
    'חברת פיתוח אפליקציות',
    'פיתוח אפליקציות בישראל'
  ],
  openGraph: {
    title: 'רד אפ - RedApp | פיתוח אפליקציות ותוכנה מותאמת אישית',
    description: 'רד אפ מתמחה בפיתוח אפליקציות מתקדמות ופתרונות טכנולוגיים חדשניים.',
    url: 'https://redapp.co.il',
    siteName: 'RedApp',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'he_IL',
    type: 'website',
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
  twitter: {
    title: 'רד אפ - RedApp',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code here
  },
};
