'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import PageLoader from '@/components/PageLoader';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for content to be ready
    const handleLoad = () => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <ThemeProvider attribute="class">
      {isLoading ? <PageLoader children={children} /> : children}
    </ThemeProvider>
  );
}