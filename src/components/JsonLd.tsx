'use client';

const JsonLd = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RedApp',
    url: 'https://redapp.co.il',
    logo: 'https://redapp.co.il/logo.png',
    description: 'פיתוח אפליקציות ואתרים מותאמים אישית עם טכנולוגיות מתקדמות',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IL',
    },
    sameAs: [
      'https://www.facebook.com/redapp',
      'https://www.instagram.com/redapp',
      'https://www.linkedin.com/company/redapp',
    ],
    offers: {
      '@type': 'Offer',
      description: 'פיתוח אפליקציות ואתרים',
      priceRange: '₪₪₪',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Israel',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
