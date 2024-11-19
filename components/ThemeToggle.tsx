'use client';

import { useTheme } from '@/context/ThemeContext';
import { HiMoon, HiSun } from 'react-icons/hi';
import { FaStar, FaCloud } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full p-1 transition-colors duration-500"
      style={{
        backgroundColor: isDark ? '#1a1a1a' : '#87CEEB',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Background decorations */}
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="dark-decorations"
            className="absolute inset-0 overflow-hidden rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="light-decorations"
            className="absolute inset-0 overflow-hidden rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute right-2 top-1"
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <FaCloud className="w-3 h-3 text-white/80" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle switch */}
      <motion.div
        className="relative w-6 h-6 rounded-full shadow-lg"
        animate={{
          x: isDark ? "calc(100% - 2px)" : "2px",
          rotate: isDark ? 360 : 0,
          backgroundColor: isDark ? "#1a1a1a" : "#FFD700",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.2 }}
            >
              <HiMoon className="w-4 h-4 text-emerald-300" />
              <motion.div
                className="absolute right-1 top-1 w-1.5 h-1.5 rounded-full bg-emerald-300/50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -180 }}
              transition={{ duration: 0.2 }}
            >
              <HiSun className="w-4 h-4 text-amber-500" />
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-amber-300/50 rounded-full"
                  style={{
                    rotate: `${i * 90}deg`,
                    translateX: '12px',
                  }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
}
