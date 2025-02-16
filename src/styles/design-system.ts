// Common container styles
export const containerStyles = {
  section: "relative bg-white w-full overflow-hidden",
  mainContent: "relative w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8",
  innerContainer: `relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20
    bg-white
    rounded-2xl 
    border border-gray-100
    shadow-xl`,
  glassCard: `backdrop-blur-md 
    bg-white 
    rounded-xl 
    border border-gray-100 
    shadow-lg 
    p-6 
    transition-all 
    duration-300 
    hover:bg-gray-50`,
};

// Background effects
export const backgroundEffects = {
  grid: "absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]",
  dots: "absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-[0.03]",
  noise: "absolute inset-0 bg-noise opacity-[0.02]",
  gradient: "absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent",
};

// Gradients
export const gradients = {
  primary: "bg-gradient-to-r from-red-500 to-red-600",
  secondary: "bg-gradient-to-r from-gray-700 to-gray-800",
  accent: "bg-gradient-to-r from-red-400 to-red-500",
  light: "bg-gradient-to-br from-white to-gray-50",
  dark: "bg-gradient-to-br from-gray-900 to-black",
};

// Shadows
export const shadows = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
  inner: "shadow-inner",
  none: "shadow-none",
};

// Card styles
export const cardStyles = {
  base: `bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-all duration-300`,
  hover: `hover:shadow-xl hover:transform hover:-translate-y-1`,
  glass: `backdrop-blur-md bg-white/80 dark:bg-gray-800/80`,
  bordered: `border border-gray-100 dark:border-gray-700`,
  gradient: `bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900`,
  interactive: `cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700`,
  form: `bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700`,
};

// Common text styles
export const textStyles = {
  sectionTitle: "text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl",
  sectionSubtitle: "mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300",
  cardTitle: "text-base font-semibold leading-7 text-gray-900 dark:text-white",
  cardDescription: "mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300",
  label: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
  accentText: "block mt-2 text-red-500 font-semibold"
};

// Common button styles
export const buttonStyles = {
  primary: `rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm 
    hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600
    dark:bg-red-500 dark:hover:bg-red-400`,
  secondary: `rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
    hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-700`,
  icon: `p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200`,
};

// Form styles
export const formStyles = {
  input: `w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border-0 
    focus:ring-2 focus:ring-red-500 dark:text-white transition-colors duration-200`,
  textarea: `w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border-0 
    focus:ring-2 focus:ring-red-500 dark:text-white transition-colors duration-200 resize-none`,
  label: `block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1`,
};

// Common animation variants
export const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};
