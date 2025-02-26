'use client';

import HomePage from '@/components/HomePage';
import PageLoader from '@/components/PageLoader';

export default function RootPage() {
  return (
    <PageLoader>
      <HomePage />
    </PageLoader>
  );
}
