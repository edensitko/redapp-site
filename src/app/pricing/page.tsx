import React from 'react';
import PricingList from '@/components/PricingList';

export const metadata = {
  title: 'Pricing - RedApp',
  description: 'Choose from our flexible pricing plans designed to meet your business needs.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <PricingList />
    </main>
  );
}
