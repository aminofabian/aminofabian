'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence, useInView } from 'framer-motion';
import { Briefcase, Terminal, ExternalLink, Code2, Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import {
  SiTypescript, SiJavascript, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiPython, SiGit,
  SiMongodb, SiPostgresql, SiDocker, SiAew,
  SiRedux, SiGraphql, SiFirebase, SiVercel,
  SiVite, SiPrisma, SiSupabase, SiStripe
} from 'react-icons/si';

interface CodeLine {
  code: string;
  color: string;
}

const FloatingElement = ({ delay = 0, children }: { delay: number; children: React.ReactNode }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const CreativeCode = () => {
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const codeLines: CodeLine[] = [
    {
      code: '// Innovation meets code',
      color: 'text-gray-400'
    },
    {
      code: 'class Developer extends Creative {',
      color: 'text-emerald-600'
    },
    {
      code: '  constructor() {',
      color: 'text-emerald-600'
    },
    {
      code: '    this.name = "Fabian Amino";',
      color: 'text-emerald-600'
    },
    {
      code: '    this.role = "Senior Engineer";',
      color: 'text-emerald-600'
    },
    {
      code: '    this.skills = new Set([',
      color: 'text-emerald-600'
    },
    {
      code: '      "Full Stack",',
      color: 'text-emerald-600'
    },
    {
      code: '      "Cloud Architecture",',
      color: 'text-emerald-600'
    },
    {
      code: '      "System Design"',
      color: 'text-emerald-600'
    },
    {
      code: '    ]);',
      color: 'text-emerald-600'
    },
    {
      code: '  }',
      color: 'text-emerald-600'
    },
    {
      code: '  createSolution(problem) {',
      color: 'text-emerald-600'
    },
    {
      code: '    return innovative.solve(problem);',
      color: 'text-emerald-600'
    },
    {
      code: '  }',
      color: 'text-emerald-600'
    },
    {
      code: '}',
      color: 'text-emerald-600'
    }
  ];
  
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentLine((prev: number) => 
          prev < codeLines.length - 1 ? prev + 1 : 0
        );
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);
  
  return (
    <motion.div 
      className="font-mono text-sm leading-relaxed relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="backdrop-blur-lg rounded-xl shadow-xl border border-gray-100">
        {/* Editor Header */}
        <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex space-x-2">
              <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-emerald-500"></motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-emerald-500"></motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-gray-300"></motion.div>
            </div>
            <Code2 size={16} className="text-gray-400" />
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xs text-gray-500 font-mono">developer.tsx</div>
            <Sparkles size={14} className="text-emerald-500" />
          </div>
        </div>
        
        {/* Editor Content */}
        <div className="p-6 overflow-hidden relative">
          <div className="relative z-10">
            {codeLines.slice(0, currentLine + 1).map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`${line.color} whitespace-pre font-mono mb-1`}
              >
                {line.code}
              </motion.div>
            ))}
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface TechSkill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const techSkills: TechSkill[] = [
  { name: "React", icon: SiReact, color: "text-emerald-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-emerald-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-emerald-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-emerald-500" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-emerald-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-500" },
  { name: "Python", icon: SiPython, color: "text-emerald-500" },
  { name: "Git", icon: SiGit, color: "text-emerald-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-emerald-500" },
  { name: "Docker", icon: SiDocker, color: "text-emerald-500" },
  { name: "AWS", icon: SiAew, color: "text-emerald-500" },
  { name: "Redux", icon: SiRedux, color: "text-emerald-500" },
  { name: "GraphQL", icon: SiGraphql, color: "text-emerald-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-emerald-500" },
  { name: "Vercel", icon: SiVercel, color: "text-emerald-500" },
  { name: "Vite", icon: SiVite, color: "text-emerald-500" },
  { name: "Prisma", icon: SiPrisma, color: "text-emerald-500" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
  { name: "Stripe", icon: SiStripe, color: "text-emerald-500" },
];

const getRandomPosition = () => {
  return {
    x: (Math.random() - 0.5) * window.innerWidth,
    y: (Math.random() - 0.5) * window.innerHeight,
    rotate: Math.random() * 360,
    scale: Math.random() * 0.3 + 0.7,
  };
};

const TechItem = ({ skill, index }: { skill: TechSkill; index: number }) => {
  const position = getRandomPosition();
  const Icon = skill.icon;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: position.x,
        y: position.y,
        rotate: position.rotate,
        scale: position.scale,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
          type: "spring",
          stiffness: 100
        }
      }}
      whileHover={{
        opacity: 1,
        scale: position.scale * 1.2,
        transition: { duration: 0.2 }
      }}
    >
      <div className="group relative flex items-center gap-2 rounded-lg bg-white/30 p-2 backdrop-blur-sm hover:bg-white/50 transition-all">
        <Icon className={`h-6 w-6 ${skill.color}`} />
        <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
};

const Particle = ({ color }: { color: string }) => (
  <motion.div
    className={`absolute w-1.5 h-1.5 rounded-full ${color}`}
    initial={{ scale: 0 }}
    animate={{
      scale: [0, 1.5, 0],
      x: [0, (Math.random() - 0.5) * 100],
      y: [0, (Math.random() - 0.5) * 100],
    }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
  />
);

const FireworkEffect = ({ color, isVisible }: { color: string; isVisible: boolean }) => {
  const particles = Array.from({ length: 12 });
  
  return isVisible ? (
    <div className="absolute inset-0">
      {particles.map((_, i) => (
        <Particle key={i} color={color} />
      ))}
    </div>
  ) : null;
};

interface FloatingChatButtonProps {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  hoverColor: string;
  href: string;
  text: string;
  delay: number;
  particleColor: string;
}

const FloatingChatButton = ({ 
  icon: Icon, 
  color, 
  hoverColor, 
  href, 
  text, 
  delay,
  particleColor
}: FloatingChatButtonProps) => {
  const [showText, setShowText] = useState(false);
  const [showFirework, setShowFirework] = useState(false);
  const buttonAnimation = useAnimation();
  const buttonRef = useRef(null);
  const isInView = useInView(buttonRef, { once: true });

  useEffect(() => {
    const animate = async () => {
      // Initial entrance animation
      await buttonAnimation.start({
        scale: [0, 1.2, 1],
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.8, ease: "easeOut" }
      });

      // Trigger firework effect
      setShowFirework(true);
      setTimeout(() => setShowFirework(false), 800);

      // Start continuous attention-grabbing animation
      while (true) {
        await buttonAnimation.start({
          y: [0, -8, 0],
          scale: [1, 1.1, 1],
          transition: { duration: 2, ease: "easeInOut" }
        });
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // Randomly trigger firework effect
        if (Math.random() > 0.7) {
          setShowFirework(true);
          setTimeout(() => setShowFirework(false), 800);
        }
      }
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
        {showText && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 whitespace-nowrap"
          >
            <div className="text-sm font-medium text-gray-700">
              {text}
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white border-t border-r border-gray-100 transform rotate-45" />
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
        <FireworkEffect color={particleColor} isVisible={showFirework} />
        <motion.div
          className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          initial={false}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.a>
    </motion.div>
  );
};

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="min-h-screen relative overflow-visible">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

        {/* Tech Stack Background */}
        <div className="absolute inset-0">
          {isInView && techSkills.map((skill, index) => (
            <TechItem key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile Info */}
          <div className="space-y-8 relative">
            <FloatingElement delay={0}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Profile Picture */}
                <motion.div 
                  className="relative w-32 h-32 mb-6"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-500 rounded-3xl rotate-6 opacity-20"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/fab.jpg"
                      alt="Fabian Amino"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>

                <div className="inline-block">
                  <motion.div
                    className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-emerald-500/10 text-emerald-800 hover:from-emerald-500/20 hover:to-emerald-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="bg-gradient-to-r from-emerald-600 to-emerald-600 bg-clip-text text-transparent">
                      Available for exciting projects
                    </span>
                  </motion.div>
                </div>

                <h1 className="text-6xl font-bold mt-6">
                  <span className="block text-gray-800">Fabian</span>
                  <span className="block mt-1 bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                    Amino
                  </span>
                </h1>

                <p className="mt-6 text-2xl text-gray-700 font-medium leading-relaxed">
                  Senior Software Engineer
                </p>

                <p className="mt-4 text-lg text-gray-600 max-w-lg leading-relaxed">
                  Transforming complex challenges into elegant solutions. 
                  Specializing in scalable architectures and innovative user experiences.
                </p>

                {/* CTA Section */}
                <motion.div 
                  className="mt-8 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <div className="flex flex-col space-y-4">
                    <div className="flex gap-4 flex-wrap">
                      <motion.a
                        href="/resume.pdf"
                        className="inline-flex hidden items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-500 text-white rounded-lg font-medium shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Terminal className="w-5 h-5" />
                        View Resume
                      </motion.a>
                    
                      <motion.a
                        href="/hire-me"
                        className="relative group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-500 text-white rounded-lg font-medium shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Briefcase className="w-5 h-5" />
                        Hire Me
                      </motion.a>
                      <motion.a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-medium shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Get in Touch
                        <ArrowRight className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href="#portfolio"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-lg font-medium border border-gray-200 hover:border-emerald-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Portfolio
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </FloatingElement>
          </div>

          {/* Right Column - Social Links */}
          <div className="relative">
            <FloatingElement delay={0.2}>
              <div className="relative group overflow-hidden bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50">
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-emerald-600/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                  style={{
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 2s linear infinite',
                  }}
                />
                
                {/* Content */}
                <div className="relative">
                  <SocialLinks />
                </div>
              </div>

              {/* Book Lessons Button */}
              <div className="mt-6">
                <motion.a
                  href="/book-lessons"
                  className="relative group block"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"
                    initial={false}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="relative flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300">
                    <Sparkles className="w-5 h-5" />
                    <span className="font-semibold">Book Coding Lessons</span>
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-white/80"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.a>
                
                {/* Limited Spots Text */}
                <div className="mt-3 text-center">
                  <span className="text-sm text-emerald-700 font-medium bg-emerald-50/50 px-3 py-1 rounded-full">
                    Limited spots available
                  </span>
                </div>
              </div>
            </FloatingElement>
          </div>
        </div>

        {/* Code Animation Section */}
        <div className="mt-16">
          <CreativeCode />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;