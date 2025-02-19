import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollCircle = () => {
  const [sectionRange, setSectionRange] = useState({ projectsStart:0, projectsEnd: 0 });
  
  useEffect(() => {
    const updateRange = () => {
      const projectsSection = document.getElementById('projects');
      const projectsTitle = document.querySelector('#projects h2');
      const testimonialsSection = document.getElementById('testimonials-section');
      
      if (projectsSection && projectsTitle && testimonialsSection) {
        const projectsStart = projectsTitle.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.5;
        const projectsEnd = testimonialsSection.offsetTop - window.innerHeight * 0.1;
        setSectionRange({ projectsStart, projectsEnd });
      }
    };

    updateRange();
    window.addEventListener('resize', updateRange);
    window.addEventListener('scroll', updateRange);
    
    return () => {
      window.removeEventListener('resize', updateRange);
      window.removeEventListener('scroll', updateRange);
    };
  }, []);

  const { scrollY } = useScroll();

  const size = Math.max(window.innerWidth, window.innerHeight) * 0.1;
  
  const isMobile = window.innerWidth < 768;

  const calculateTargetScale = () => {
    if (isMobile) {
      return window.innerWidth / size * 5; 
    }
    return window.innerWidth * 3.5 / size;
  };

  // Calculate the midpoint for the animation
  const midPoint = sectionRange.projectsStart + (sectionRange.projectsEnd - sectionRange.projectsStart) * 0.6;

  const scale = useTransform(
    scrollY,
    [
      sectionRange.projectsStart,
      sectionRange.projectsStart + window.innerHeight * 0.83,
      midPoint,
      sectionRange.projectsEnd - window.innerHeight * 0.7,
      sectionRange.projectsEnd - window.innerHeight * 0.2,
      sectionRange.projectsEnd
    ],
    isMobile 
      ? [1, calculateTargetScale() * 1.2, calculateTargetScale() * 1.2, calculateTargetScale() * 1.2, 1, 0.2]
      : [1, calculateTargetScale(), calculateTargetScale(), calculateTargetScale(), 1, 0.2]
  );

  const opacity = useTransform(
    scrollY,
    [
      sectionRange.projectsStart - 100,
      sectionRange.projectsStart,
      midPoint,
      sectionRange.projectsEnd - window.innerHeight * 0.3,
      sectionRange.projectsEnd - window.innerHeight * 0.1
    ],
    [0, 1, 1, 1, 0]
  );

  const xPosition = useTransform(
    scrollY,
    [
      sectionRange.projectsStart - 100,
      sectionRange.projectsStart,
      sectionRange.projectsStart + window.innerHeight * 0.3,
      midPoint,
      sectionRange.projectsEnd - window.innerHeight * 0.3,
      sectionRange.projectsEnd - window.innerHeight * 0.1,
      sectionRange.projectsEnd
    ],
    ['-100%', '-50%', '0%', '0%', '0%', '50%', '100%']
  );

  const yPosition = useTransform(
    scrollY,
    [
      sectionRange.projectsStart - 150,
      sectionRange.projectsStart,
      sectionRange.projectsStart + window.innerHeight * 0.8,
      midPoint,
      sectionRange.projectsEnd - window.innerHeight * 0.8,
      sectionRange.projectsEnd - window.innerHeight * 0.1,
      sectionRange.projectsEnd
    ],
    ['60%', '20%', '10%', '0%', '0%', '20%', '40%']
  );

  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{
        width: size,
        height: size,
        scale,
        opacity,
        x: xPosition,
        y: yPosition,
        top: '-20%',
        left: '50%',
        background: 'rgba(239, 68, 68, 0.8)',
        borderRadius: '50%',
        translateX: '-10%',
        translateY: '-10%',
        boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)'
      }}
    />
  );
};

export default ScrollCircle;
