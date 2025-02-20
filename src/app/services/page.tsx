import React from 'react';
import ServicesList from '@/components/ServicesList';

export const metadata = {
  title: 'Services - RedApp',
  description: 'Explore our comprehensive range of digital services including web development, mobile apps, and digital marketing solutions.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesList />
    </main>
  );
}
