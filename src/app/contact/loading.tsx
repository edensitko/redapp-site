import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" dir="rtl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-center"
      >
        <div className="inline-block w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">טוען...</p>
      </motion.div>
    </div>
  );
}
