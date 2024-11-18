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
      initial={{ scale: 0, x: 0, y: 0 }}
      animate={{
        scale: [0, 1.5, 0],
        x: [0, x * (0.8 + Math.random() * 0.4)],
        y: [0, y * (0.8 + Math.random() * 0.4)],
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    />
  );
};

const FireworkEffect = ({ colors, isVisible }: { colors: string[]; isVisible: boolean }) => {
  const particles = Array.from({ length: 12 });
  
  return isVisible ? (
    <div className="absolute inset-0">
      {particles.map((_, i) => (
        <Particle key={i} color={colors[i % colors.length]} index={i} />
      ))}
    </div>
  ) : null;
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

  useEffect(() => {
    const animate = async () => {
      // Initial entrance animation
      await buttonAnimation.start({
        scale: [0, 1.2, 1],
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.8, ease: "easeOut" }
      });

      // Initial delay before starting text animations
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Trigger initial firework effect
      setShowFirework(true);
      setTimeout(() => setShowFirework(false), 1000);

      // Start continuous animations
      const fireworkInterval = setInterval(() => {
        if (Math.random() > 0.3) {
          setShowFirework(true);
          setTimeout(() => setShowFirework(false), 1000);
        }
      }, 2000);

      // Text display interval with longer cycle
      const textInterval = setInterval(() => {
        setAutoShowText(true);
        setTimeout(() => setAutoShowText(false), 3000);
      }, 10000);

      // Continuous floating animation
      while (true) {
        await buttonAnimation.start({
          y: [0, -8, 0],
          scale: [1, 1.1, 1],
          transition: { duration: 1.5, ease: "easeInOut" }
        });
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      return () => {
        clearInterval(fireworkInterval);
        clearInterval(textInterval);
      };
    };
    
    if (isInView) {
      animate();
    }
  }, [buttonAnimation, isInView]);

  return (
    <motion.div
      ref={buttonRef}
      className="relative"
      onHoverStart={() => setShowText(true)}
      onHoverEnd={() => setShowText(false)}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <AnimatePresence>
        {(showText || autoShowText) && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut"
            }}
            className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gradient-to-r ${gradientFrom} ${gradientTo} p-[1px] rounded-xl shadow-lg overflow-hidden`}
            style={{
              backgroundSize: '200% 100%',
            }}
          >
            <div className="relative bg-white/95 backdrop-blur-md px-4 py-2 rounded-[11px]">
              <motion.div 
                className="text-xs font-light"
                animate={{
                  scale: autoShowText ? [1, 1.03, 1] : 1,
                  opacity: autoShowText ? [0.8, 1, 0.8] : 1
                }}
                transition={{
                  duration: 2,
                  repeat: autoShowText ? Infinity : 0,
                  ease: "easeInOut"
                }}
              >
                <span className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent font-semibold`}>
                  {text}
                </span>
              </motion.div>
              <motion.div 
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-gradient-to-br ${gradientFrom} ${gradientTo} transform rotate-45`}
                animate={{
                  scale: autoShowText ? [1, 1.1, 1] : 1
                }}
                transition={{
                  duration: 2,
                  repeat: autoShowText ? Infinity : 0,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center w-14 h-14 ${color} ${hoverColor} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-visible`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={buttonAnimation}
      >
        <Icon className="w-6 h-6 relative z-10" />
        <FireworkEffect colors={particleColors} isVisible={showFirework} />
        <motion.div
          className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          initial={false}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full opacity-50 blur-md"
          style={{ background: color }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.a>
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
