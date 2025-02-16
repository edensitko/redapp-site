import React from 'react';
import { motion } from 'framer-motion';
import { containerStyles, backgroundEffects, gradients, shadows } from '../../styles/design-system';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  withBackground?: boolean;
  withDecorations?: boolean;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = '',
  withBackground = true,
  withDecorations = true,
}) => {
  return (
    <section className={`${containerStyles.section} ${className}`} dir="rtl">
      {/* Grid background */}
      {withBackground && (
        
        <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(#fff_30%,transparent)]">
          
          <div className={backgroundEffects.grid} />
          
          
        </div>
        
      )}

      {/* Main content container */}
      <div className={containerStyles.mainContent}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={containerStyles.innerContainer}
        >
          {children}
        </motion.div>

       
      </div>
    </section>
  );
};

export default SectionContainer;
