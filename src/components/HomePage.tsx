'use client';

import dynamic from 'next/dynamic';
import CallToAction from '@/components/CallToAction';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import HomeBlog from '@/components/HomeBlog';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';

// Dynamic imports for better performance
const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: true
});

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <Process />
      <Projects />
      <HomeBlog />
      <FAQ />
      <Pricing />
      <Testimonials />
      <Contact />
      <CallToAction />
    </div>
  );
}
