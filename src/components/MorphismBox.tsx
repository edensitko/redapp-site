import React from 'react';
import { motion } from 'framer-motion';

interface MorphismBoxProps {
  children: React.ReactNode;
  className?: string;
}

const MorphismBox: React.FC<MorphismBoxProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative w-full py-16 ${className}`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(#fff_30%,transparent)]">
        <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(to_right,theme(colors.red.400)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.red.500)_1px,transparent_1px)]" />
      </div>

      {/* Content container with morphism effect */}
      <div className="relative z-10 w-full rounded-3xl 
                    bg-gradient-to-br from-white/[0.08] to-white/[0.03]
                    backdrop-blur-xl border border-white/10
                    shadow-[0_8px_32px_-4px_rgba(0,0,0,0.2)]
                    overflow-hidden">
        {/* Frosted glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-purple-500/5" />
        
        {/* Content */}
        <div className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MorphismBox;
