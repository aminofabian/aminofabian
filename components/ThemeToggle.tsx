'use client';

import { useTheme } from '@/context/ThemeContext';
import { HiMoon, HiSun } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-emerald-100/20 hover:bg-emerald-100/30 dark:bg-emerald-900/20 dark:hover:bg-emerald-900/30 transition-colors"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <HiSun className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
      ) : (
        <HiMoon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
      )}
    </motion.button>
  );
}
