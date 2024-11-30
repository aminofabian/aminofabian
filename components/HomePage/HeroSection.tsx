'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence, useInView } from 'framer-motion';
import { Briefcase, Terminal, ExternalLink, Code2, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import HireMeModal from './HireMeModal';
import IdeContactForm from './ContactForm/IdeContactForm';
import {
  SiTypescript, SiJavascript, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiPython, SiGit,
  SiMongodb, SiPostgresql, SiDocker, SiAew,
  SiRedux, SiGraphql, SiFirebase, SiVercel,
  SiVite, SiPrisma, SiSupabase, SiStripe
} from 'react-icons/si';
import { HiPaperAirplane } from 'react-icons/hi';
import NeonCursor from '../NeonCursor/NeonCursor';

interface CodeLine {
  code: string;
  color: string;
}

interface FloatingElementProps {
  delay?: number;
  children: React.ReactNode;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ delay = 0, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        delay: delay,
        ease: [0.21, 1.02, 0.73, 0.96]
      }}
    >
      {children}
    </motion.div>
  );
};

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div>
      <NeonCursor />
      <div ref={ref} className="min-h-screen relative overflow-visible">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div> */}
          {/* <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div> */}
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full blur-3xl"></div> */}

          {/* Tech Stack Background */}
          {/* <div className="absolute inset-0">
            {isInView && techSkills.map((skill, index) => (
              <TechItem key={skill.name} skill={skill} index={index} />
            ))}
          </div> */}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative rounded-3xl">
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
                      className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-emerald-500/10 dark:from-emerald-400/10 dark:to-emerald-400/10 text-emerald-800 dark:text-emerald-300 hover:from-emerald-500/20 hover:to-emerald-500/20 dark:hover:from-emerald-400/20 dark:hover:to-emerald-400/20 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="bg-gradient-to-r from-emerald-600 to-emerald-600 dark:from-emerald-400 dark:to-emerald-300 bg-clip-text text-transparent">
                        Available for exciting projects
                      </span>
                    </motion.div>
                  </div>

                  <h1 className="text-6xl font-bold mt-6">
                    <span className="block text-gray-800 dark:text-gray-100">Fabian</span>
                    <span className="block mt-1 bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-300 bg-clip-text text-transparent">
                      Amino
                    </span>
                  </h1>

                  <h1 className="mt-6 text-2xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed relative">
                    <span className="relative z-10">Full Stack Software Developer & Creative Technologist</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/80 to-white/40 dark:from-emerald-900/30 dark:to-gray-900/30 backdrop-blur-[2px] -z-0 rounded-lg transform -skew-x-2"></div>
                  </h1>

                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed relative group">
                    <span className="relative z-10 px-4 py-2 block">
                      Transforming complex challenges into elegant solutions. 
                      Specializing in scalable architectures and innovative user experiences.
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-emerald-50/30 to-white/50 dark:from-gray-800/50 dark:via-emerald-900/20 dark:to-gray-800/50 opacity-80 group-hover:opacity-100 backdrop-blur-[1px] rounded-xl transition-all duration-300 border border-emerald-100/20 dark:border-emerald-500/10"></div>
                    {/* Decorative Elements */}
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-full"></div>
                    <div className="absolute -right-1 top-0 w-8 h-8 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-sm"></div>
                    <div className="absolute -bottom-1 right-4 w-6 h-6 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-full blur-sm"></div>
                  </p>

                  {/* CTA Section */}
                  <motion.div 
                    className="mt-8 space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    <div className="flex flex-col space-y-4">
                      <div className="flex flex-wrap justify-center gap-4">
                        <motion.button
                          onClick={() => setIsHireMeOpen(true)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-500 text-white rounded-lg font-medium shadow-lg shadow-emerald-500/30 dark:shadow-emerald-500/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Briefcase className="w-5 h-5" />
                          Hire Me
                        </motion.button>

                        <motion.a
                          href="/#contact"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-500 text-white rounded-lg font-medium shadow-lg shadow-emerald-500/30 dark:shadow-emerald-500/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <HiPaperAirplane className="w-5 h-5 transform rotate-90" />
                          Get in Touch
                        </motion.a>

                        <motion.a
                          href="#portfolio"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium border border-gray-200 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
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
                <div className="relative group overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50 dark:border-gray-700/50">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-emerald-600/10 to-emerald-500/10 dark:from-emerald-400/20 dark:via-emerald-500/20 dark:to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
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
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 dark:from-emerald-600 dark:to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"
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
                    <div className="relative flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-500/25 dark:shadow-emerald-500/20 transition-all duration-300">
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
                    <span className="text-sm text-emerald-700 dark:text-emerald-300 font-medium bg-emerald-50/50 dark:bg-emerald-900/50 px-3 py-1 rounded-full">
                      Limited spots available
                    </span>
                  </div>
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <IdeContactForm onClose={() => setShowContactForm(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hire Me Modal */}
      <HireMeModal isOpen={isHireMeOpen} onClose={() => setIsHireMeOpen(false)} />
    </div>
  );
};

export default HeroSection;
