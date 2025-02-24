'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after everything is loaded
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', () => {
        setIsLoading(false);
      });

      // Fallback in case load event doesn't trigger
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => {
        window.removeEventListener('load', () => setIsLoading(false));
        clearTimeout(timer);
      };
    }
  }, []);

  return isLoading ? <LoadingScreen /> : children;
}
