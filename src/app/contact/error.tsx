'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          משהו השתבש
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          מצטערים, אירעה שגיאה בטעינת העמוד. אנא נסו שוב.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
          >
            נסה שוב
          </button>
          <Link
            href="/"
            className="px-6 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors"
          >
            חזור לדף הבית
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
