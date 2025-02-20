import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

interface ServicePageProps {
  params: {
    id: string;
  };
}

export const metadata = {
  title: 'Service Details - RedApp',
  description: 'Learn more about our professional services and how we can help your business grow.',
};

// Pre-render these paths at build time
export function generateStaticParams() {
  return [
    { id: 'web-development' },
    { id: 'mobile-development' },
    { id: 'digital-marketing' },
    { id: 'ecommerce' },
    { id: 'ui-ux' },
    { id: 'consulting' }
  ];
}

export default function ServicePage({ params }: ServicePageProps) {
  return (
    <main className="min-h-screen">
      <ServiceDetail id={params.id} />
    </main>
  );
}
