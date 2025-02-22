import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoSectionProps {
  videoSrc: string;
}

const CreativeCTAButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group overflow-hidden 
        px-8 py-3 rounded-full 
        bg-gradient-to-r from-red-500 to-red-700
        text-white font-bold
        flex items-center justify-center
        transform transition-all duration-500
        hover:scale-105 hover:shadow-2xl"
    >
      <span className="relative  flex items-center">
        התחל את המהפכה
        <motion.span
          animate={{ 
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.5 }}
          className="ml-2 inline-block"
        >
          🚀
        </motion.span>
      </span>
      
      {/* Animated Gradient Overlay */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ 
          x: isHovered ? '0%' : '-100%',
          opacity: isHovered ? 0.3 : 0
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="absolute inset-0 
          bg-gradient-to-r from-white/20 via-white/10 to-transparent"
      />
    </motion.button>
  );
};

const VideoSection: React.FC<VideoSectionProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, [videoSrc]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div 
      className="relative w-screen h-[500px] py-10  -mx-[calc(50vw-50%)] overflow-hidden bg-transparent"
    >
      {/* Video Background */}
      <video 
        ref={videoRef}
        src={videoSrc}
        className="absolute inset-0 w-full h-full object-cover filter brightness-50"
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
      />

      {/* Animated Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 
          bg-gradient-to-br from-black/40 to-black/10 
          backdrop-blur-sm 
          flex items-center justify-center"
      >
        {/* Content Container */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 50 }}
          className="w-full max-w-6xl px-6 flex flex-col items-center justify-center text-center"
        >
          {/* Text Content */}
          <div className="mb-6 text-center mt-[120px]">
            <motion.h2 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl font-bold mb-4 
                bg-gradient-to-r from-red-300 to-red-100 
                bg-clip-text text-transparent"
            >
              מהפכת הטכנולוגיה מתחילה כאן
            </motion.h2>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
            >
              גלו את העתיד של חדשנות דיגיטלית עם פתרונות AI מהפכניים
            </motion.p>
          </div>

          {/* Creative CTA Button */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <CreativeCTAButton onClick={openModal} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Modal with Bento Grid Layout */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center 
              bg-black/70 backdrop-blur-lg"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-black/30 p-8 max-w-2xl w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Decorative Bento Block */}
                <div className="flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🚀</span>
                  </div>
                </div>
                {/* Right Text Block */}
                <div className="flex flex-col items-center md:items-end justify-center space-y-2">
                  <h3 className="text-3xl font-bold text-white text-center md:text-right bg-gradient-to-r from-red-300 to-red-100 bg-clip-text text-transparent">
                    מוכנים להתחיל?
                  </h3>
                  <p className="text-white/80 text-center md:text-right">
                    השאירו פרטים ונחזור אליכם עם פתרון מותאם אישית
                  </p>
                </div>
              </div>
              {/* Input Fields in a Bento Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="שם מלא" 
                  className="w-full p-3 rounded-lg bg-black/30 text-white border border-white/20 text-right"
                />
                <input 
                  type="tel" 
                  placeholder="טלפון" 
                  className="w-full p-3 rounded-lg bg-black/30 text-white border border-white/20 text-right"
                />
              </div>
              <button
                onClick={closeModal}
                className="w-full mt-6 p-3 rounded-lg bg-gradient-to-r from-red-500 to-red-700 text-white font-bold hover:from-red-600 hover:to-red-800 transition-all duration-300"
              >
                שלח
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoSection;
