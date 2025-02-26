import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative w-32 h-32">
        <Image
          src="/logo.png"
          alt="Logo"
          width={128}
          height={128}
          className="animate-pulse object-contain w-auto h-auto"
          priority
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
