import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { containerStyles, textStyles, buttonStyles } from '../styles/design-system';
import FloatingWhatsApp from './FloatingWhatsApp';
import LoadingScreen from './LoadingScreen';

const Hero: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className={`relative w-full h-screen overflow-hidden`} id="home">
      <AnimatePresence>
        {!isVideoLoaded && <LoadingScreen />}
      </AnimatePresence>

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          playsInline
          onLoadedData={handleVideoLoad}
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70 dark:from-[#1e1e1e]/70 dark:via-[#1e1e1e]/50 dark:to-[#1e1e1e]/70" />
      </div>

      {/* Content */}
      <div className={containerStyles.mainContent}>
        <motion.div 
          className="relative flex  z-10 flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title */}
          <motion.h1
            className="text-4xl sm:text-4xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary-600 to-primary-900 dark:from-primary-300 dark:to-primary-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            מובילים את המהפכה הדיגיטלית שלך 
          </motion.h1>
          <motion.h1
            className="text-2xl sm:text-2xl md:text-2xl  mt-4  text-center font-medium bg-gradient-to-r from-primary-600 to-primary-900 dark:from-primary-200 dark:to-primary-300 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
             פיתוח בסטנדרט חדש
          </motion.h1>
          {/* Subtitle */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
          
            <p className={`${textStyles.accentText} text-gray-700 dark:text-gray-300`}>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <div className="z-20 flex flex-row items-center justify-center gap-4 mt-8">
            <motion.button
              className={`group relative px-8 py-4 text-lg font-medium bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl 
                shadow-[0_10px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transform hover:-translate-y-1 transition-all duration-200
                before:absolute before:inset-0 before:bg-white/80 before:origin-bottom before:scale-y-0 before:transition-transform
                before:duration-300 before:hover:scale-y-100 before:rounded-xl overflow-hidden`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 group-hover:text-primary-600 transition-colors duration-200">
                צור קשר
              </span>
            </motion.button>
            <motion.button
              className={`group relative px-8 py-4 text-lg font-medium border-2 border-primary-600 text-primary-600 dark:text-white 
                rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/10 transform hover:-translate-y-1 transition-all duration-200
                shadow-[0_10px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">
                עוד עלינו
              </span>
            </motion.button>
          </div>
      
          {/* WhatsApp Button */}
          <div className="mt-8 flex justify-center">
            <FloatingWhatsApp />
          </div>
        </motion.div>
      </div>
      {/* make layer shadow full width  gradiend from button to top with theme bg */}
      <div className="absolute top-0 left-0 right-0 h-full z-1 bg-gradient-to-t from-white/100 via-white/60 to-transparent dark:from-[#1e1e1e]/90 dark:via-[#1e1e1e]/90 dark:to-transparent"></div>

    </div>
  );
};

export default Hero;