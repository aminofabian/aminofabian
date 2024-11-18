'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <motion.div 
      className={`relative ${className}`}
      whileHover="hover"
      initial="initial"
      animate="animate"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" className="w-full h-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#34d399', stopOpacity: 0.9 }} />
          </linearGradient>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#34d399', stopOpacity: 0.2 }} />
            <stop offset="50%" style={{ stopColor: '#10b981', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 0.2 }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="blur" in2="SourceGraphic" operator="over" />
          </filter>
          <clipPath id="circleClip">
            <circle cx="60" cy="60" r="45"/>
          </clipPath>
          <pattern id="dotPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1" fill="#10b981" fillOpacity="0.1" />
          </pattern>
          <linearGradient id="nameGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#059669' }} />
            <stop offset="50%" style={{ stopColor: '#10b981' }} />
            <stop offset="100%" style={{ stopColor: '#34d399' }} />
          </linearGradient>
        </defs>
        
        <rect width="400" height="120" fill="url(#dotPattern)" opacity="0.5" />
        
        {/* Glow effect */}
        <motion.circle
          cx="60"
          cy="60"
          r="50"
          fill="url(#glowGradient)"
          filter="url(#glow)"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.1, 0.8],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated outer ring */}
        <motion.circle
          cx="60"
          cy="60"
          r="48"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ 
            pathLength: 1,
            rotate: 360,
          }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut" },
            rotate: { duration: 20, ease: "linear", repeat: Infinity }
          }}
        />
        
        {/* Background circle with subtle gradient */}
        <motion.circle 
          cx="60" 
          cy="60" 
          r="45" 
          fill="url(#logoGradient)"
          fillOpacity="0.1"
          stroke="url(#logoGradient)"
          strokeWidth="1"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          variants={{
            hover: {
              scale: 1.05,
              transition: { duration: 0.3 }
            }
          }}
        />
        
        {/* Image container with improved animation */}
        <foreignObject x="15" y="15" width="90" height="90" clipPath="url(#circleClip)">
          <motion.div 
            className="w-full h-full relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.5,
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <Image
              src="/cartoon.png"
              alt="Fabian"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
              priority
            />
          </motion.div>
        </foreignObject>

        {/* Text part with enhanced animation */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            delay: 0.8,
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          <motion.text 
            x="170" 
            y="50" 
            className="text-2xl font-bold tracking-wider"
            fill="url(#nameGradient)"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            AMINO FABIAN
          </motion.text>
          <motion.text 
            x="170" 
            y="80" 
            className="text-xl tracking-wide"
            fill="#64748b"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            Full Stack Developer
          </motion.text>
        </motion.g>
        
        {/* Subtle interaction effects */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          variants={{
            hover: {
              opacity: 0.6,
              transition: { duration: 0.2 }
            },
            initial: {
              opacity: 0
            }
          }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-500 rounded-full"
              variants={{
                hover: {
                  x: Math.random() * 80 - 40,
                  y: Math.random() * 80 - 40,
                  opacity: [0.4, 0],
                  transition: {
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: i * 0.15
                  }
                }
              }}
              style={{
                left: '60px',
                top: '60px'
              }}
            />
          ))}
        </motion.div>
      </svg>
    </motion.div>
  );
};

export default Logo;
