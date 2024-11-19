'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={`relative ${className}`} />;
  }

  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 400 120" 
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.2))' }}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#34d399', stopOpacity: 0.9 }} />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="url(#logoGradient)"
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
        </text>
      </svg>
    </motion.div>
  );
};

export default Logo;
