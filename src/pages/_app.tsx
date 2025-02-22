import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollCircle from '../components/ScrollCircle';
import '../styles/tailwind.css';
import '../styles/patterns.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div dir="rtl" className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 text-gray-900 dark:text-gray-100">
        {/* Background Effects */}
        <div className="fixed inset-0 -z-5">
          <div className="absolute inset-0 bg-gray-100 bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-20"></div>
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-gray-100 via-gray-100 to-transparent blur-3xl dark:from-gray-900 dark:via-gray-900 dark:to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="fixed inset-0 -z-5 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gray-200 bg-opacity-30 rounded-full blur-[128px] animate-pulse dark:bg-gray-700 dark:bg-opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-300 bg-opacity-30 rounded-full blur-[128px] animate-pulse delay-1000 dark:bg-gray-600 dark:bg-opacity-30"></div>
        </div>

        {/* ScrollCircle */}
        <ScrollCircle />

        {/* Navbar */}
        <div className={`sticky top-0 z-50 w-full bg-white bg-opacity-80 backdrop-blur-lg border-b border-gray-100 transition-all duration-300 ${scrolled ? 'shadow-md' : ''} dark:bg-gray-900 dark:bg-opacity-80 dark:border-gray-700`}>
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <Navbar scrolled={scrolled} />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
