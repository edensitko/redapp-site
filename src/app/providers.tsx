'use client';

import { ThemeProvider } from 'next-themes';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen relative bg-white dark:bg-[#1e1e1e]">
        {children}
      </div>
    </ThemeProvider>
  );
}
