import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md transition-all duration-300';
  
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700',
  };

  const buttonContent = (
    <motion.span
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick}>
      {buttonContent}
    </button>
  );
};

export default Button;
