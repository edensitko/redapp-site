import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="he" dir="rtl">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="application-name" content="RedApp" />
        <meta name="apple-mobile-web-app-title" content="RedApp" />
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/logo.s.png"
          as="image"
          type="image/png"
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Defer non-critical CSS */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap"
          media="print"
          onLoad={(e) => {
            const target = e.currentTarget as HTMLLinkElement;
            target.media = 'all';
          }}
        />
      </Head>
      <body className="font-heebo">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}