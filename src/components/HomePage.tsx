'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingScreen from '@/components/LoadingScreen';

const Hero = dynamic(() => import('@/components/Hero'), { ssr: true });
const About = dynamic(() => import('@/components/About'), { ssr: true });
const Services = dynamic(() => import('@/components/Services'), { ssr: true });
const Process = dynamic(() => import('@/components/Process'), { ssr: true });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: true });
const HomeBlog = dynamic(() => import('@/components/HomeBlog'), { ssr: true });
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });
const Pricing = dynamic(() => import('@/components/Pricing'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });
const CallToAction = dynamic(() => import('@/components/CallToAction'), { ssr: true });

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Suspense fallback={<LoadingScreen />}>
        <Hero />
        <CallToAction />
        <About />
        <Services />
        <Process />
        <Projects />
        <HomeBlog />
        <FAQ />
        <Pricing />
        <Testimonials />
        <Contact />
      </Suspense>
    </div>
  );
}
