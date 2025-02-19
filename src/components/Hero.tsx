import React from 'react';
import { motion } from 'framer-motion';
import { containerStyles, textStyles, buttonStyles } from '../styles/design-system';
import FloatingWhatsApp from './FloatingWhatsApp';

const Hero: React.FC = () => {
  return (
    <div className={`relative w-full h-screen overflow-hidden`} id="home">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b dark:from-black/70 dark:via-black/50 dark:to-black/70 from-white/70 via-white/50 to-white/70" />
      </div>

      {/* Content */}
      <div className={containerStyles.mainContent}>
        <motion.div 
          className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title */}
          <motion.h1
            className="text-4xl sm:text-4xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary-500 to-primary-900 dark:from-primary-300 dark:to-primary-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            מובילים את המהפכה הדיגיטלית שלך 
          </motion.h1>
          <motion.h1
            className="text-2xl sm:text-2xl md:text-2xl  mt-4  text-center bg-gradient-to-r from-primary-300 to-primary-600 dark:from-primary-200 dark:to-primary-300 text-transparent bg-clip-text"
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
          <div className="flex flex-row items-center justify-center gap-4 mt-8">
            <motion.button
              className={`group relative px-8 py-4 text-lg font-medium bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl 
                shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200
                before:absolute before:inset-0 before:bg-white before:origin-bottom before:scale-y-0 before:transition-transform
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
                rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/10 transform hover:-translate-y-1 transition-all duration-200`}
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
    </div>
  );
};

export default Hero;