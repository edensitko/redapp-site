import React, { FC } from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  locale?: string;
  keywords?: string | string[];
}

const SEO: FC<SEOProps> = ({
  title = 'רדאפ RedApp - פתרונות טכנולוגיים',
  description = 'בית תוכנה המוביל בישראל לפיתוח פתרונות דיגיטליים מתקדמים. אנחנו מספקים שירותי פיתוח תוכנה, עיצוב UI/UX, ופתרונות טכנולוגיים מותאמים אישית לצרכי העסק שלך. צוות המומחים שלנו מלווה אותך מהרעיון ועד ליישום.',
  image = '/logo.png',
  url = 'https://red-softwares.com',
  type = 'website',
  locale = 'he_IL',
  keywords = [
    'redapp',
    'red app',
    'פיתוח אפליקציות',
    'פיתוח תוכנה',
    'בניית אתרים',    
    'אפליקציות מובייל',
    'פיתוח אתרים',
    'פיתוח אפליקציות iOS',
    'פיתוח אפליקציות Android',
    'פיתוח אפליקציות סטארטאפ',
    'פתרונות טכנולוגיים',
    'עיצוב אפליקציות',
    'חברת הייטק',
    'software development',
    'app development',
    'web development',
  ]
}) => {
  // Convert keywords to string if it's an array
  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content="RedApp" />
      <meta name="application-name" content="RedApp" />

      {/* Structured Data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'RedApp',
            alternateName: 'רדאפ',
            url: url,
            logo: `${url}${image}`,
            description: description,
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'IL',
              addressRegion: 'Israel'
            },
            sameAs: [
              'https://www.linkedin.com/company/redapp',
              'https://www.facebook.com/redapp.co.il'
            ]
          })
        }}
      />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="RedApp" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />

      {/* Additional Meta Tags for SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Hebrew" />
      <meta name="geo.region" content="IL" />
      <meta name="geo.placename" content="Israel" />

      {/* Additional tags for mobile apps */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="format-detection" content="telephone=no" />

      {/* Alternate names for search engines */}
      <link rel="alternate" hrefLang="he" href={url} title="רדאפ" />
      <link rel="alternate" hrefLang="en" href={url} title="רדאפ" />

      {/* Favicon and App Icons */}
      <link rel="icon" type="image/png" sizes="12x32" href="/logo.s.png" />
      <link rel="icon" type="image/png" sizes="10x16" href="/logo.s.png" />
      <link rel="apple-touch-icon" sizes="120x180" href="/logo.s.png" />
      <link rel="shortcut icon" href="/logo.png" />
      <meta name="theme-color" content="#ffffff" />
      
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEO;
