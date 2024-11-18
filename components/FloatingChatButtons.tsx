'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence, useInView } from 'framer-motion';
import {
  SiWhatsapp,
  SiTelegram,
  SiDiscord
} from 'react-icons/si';

const Particle = ({ color, index }: { color: string; index: number }) => {
  const angle = (index / 12) * Math.PI * 2;
  const radius = 100;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className={`absolute w-2 h-2 rounded-full ${color}`}
      initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
      animate={{
        scale: [0, 1.2, 0.8, 0],
        x: [0, x * 0.5, x * (0.8 + Math.random() * 0.4)],
        y: [0, y * 0.5, y * (0.8 + Math.random() * 0.4)],
        opacity: [1, 0.8, 0],
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        times: [0, 0.3, 0.8, 1],
      }}
    />
  );
};

const FireworkEffect = ({ colors, isVisible }: { colors: string[]; isVisible: boolean }) => {
  const particles = Array.from({ length: 16 });
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {particles.map((_, i) => (
            <Particle 
              key={i} 
              color={colors[i % colors.length]} 
              index={i} 
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FloatingChatButton = ({ 
  icon: Icon, 
  color, 
  hoverColor, 
  href, 
  text, 
  delay,
  particleColors,
  gradientFrom,
  gradientTo
}: { 
  icon: any; 
  color: string; 
  hoverColor: string; 
  href: string; 
  text: string;
  delay: number;
  particleColors: string[];
  gradientFrom: string;
  gradientTo: string;
}) => {
  const [showText, setShowText] = useState(false);
  const [showFirework, setShowFirework] = useState(false);
  const buttonAnimation = useAnimation();
  const buttonRef = useRef(null);
  const isInView = useInView(buttonRef, { once: true });
  const [autoShowText, setAutoShowText] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const animate = async () => {
      await new Promise(resolve => setTimeout(resolve, delay * 100));
      
      // Initial entrance animation
      await buttonAnimation.start({
        scale: [0, 1.3, 0.9, 1],
        rotate: [0, -15, 15, 0],
        transition: { 
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
          times: [0, 0.4, 0.7, 1]
        }
      });

      // Initial delay before animations
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Continuous subtle floating animation
      buttonAnimation.start({
        y: [0, -8, 0],
        transition: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }
      });

      // Periodic effects
      const effects = async () => {
        while (true) {
          await new Promise(resolve => setTimeout(resolve, 5000 + Math.random() * 3000));
          
          if (Math.random() > 0.4) {
            setShowFirework(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setShowFirework(false);
          }

          if (Math.random() > 0.6) {
            setAutoShowText(true);
            await new Promise(resolve => setTimeout(resolve, 2000));
            setAutoShowText(false);
          }
        }
      };

      effects();
    };

    if (isInView) {
      animate();
    }
  }, [isInView, buttonAnimation, delay]);

  return (
    <motion.div
      ref={buttonRef}
      className="relative"
      animate={buttonAnimation}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg
          transition-colors duration-300 ${color} hover:${hoverColor}`}
        onHoverStart={() => {
          setShowText(true);
          setIsHovered(true);
        }}
        onHoverEnd={() => {
          setShowText(false);
          setIsHovered(false);
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
        }}
        whileTap={{
          scale: 0.95,
          rotate: [-5, 0],
          transition: { duration: 0.3 }
        }}
      >
        <motion.div
          animate={isHovered ? {
            rotate: [0, -10, 10, 0],
            transition: {
              duration: 0.6,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1]
            }
          } : {}}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        <FireworkEffect colors={particleColors} isVisible={showFirework} />
      </motion.a>
      
      <AnimatePresence>
        {(showText || autoShowText) && (
          <motion.div
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap overflow-hidden"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 px-2.5 py-1.5 rounded-lg">
              <span className="text-xs font-light text-white/90">
                {text}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FloatingChatButtons: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <FloatingChatButton
        icon={SiWhatsapp}
        color="bg-emerald-500"
        hoverColor="hover:bg-emerald-600"
        href="https://wa.me/254714282874"
        text="Talk to me +254714282874"
        delay={0.2}
        particleColors={["bg-emerald-400", "bg-emerald-300", "bg-green-400", "bg-lime-400"]}
        gradientFrom="from-emerald-400"
        gradientTo="to-green-500"
      />
      <FloatingChatButton
        icon={SiTelegram}
        color="bg-orange-500"
        hoverColor="hover:bg-orange-600"
        href="https://t.me/aminofabian"
        text="Chat on Telegram"
        delay={0.4}
        particleColors={["bg-orange-400", "bg-sky-400", "bg-cyan-400", "bg-indigo-400"]}
        gradientFrom="from-orange-400"
        gradientTo="to-cyan-500"
      />
      <FloatingChatButton
        icon={SiDiscord}
        color="bg-indigo-500"
        hoverColor="hover:bg-indigo-600"
        href="https://discord.gg/aminofabian"
        text="Join my Discord"
        delay={0.6}
        particleColors={["bg-indigo-400", "bg-purple-400", "bg-violet-400", "bg-fuchsia-400"]}
        gradientFrom="from-indigo-400"
        gradientTo="to-purple-500"
      />
    </div>
  );
};

export default FloatingChatButtons;
