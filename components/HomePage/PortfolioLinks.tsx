'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { HiCode, HiColorSwatch } from 'react-icons/hi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

interface PortfolioSite {
  name: string;
  url: string;
  description: string;
  tech: string[];
  category: 'webapp' | 'wordpress';
}

const portfolioSites: PortfolioSite[] = [
  {
    name: "1. SQUL",
    url: "https://squl.co.ke",
    description: "Comprehensive school management system with mobile app integration",
    tech: ["Next.js", "NestJS", "PostgreSQL", "React Native"],
    category: "webapp"
  },
  {
    name: "2. Reddit Growth",
    url: "https://app.redditgrowth.com",
    description: "Analytics and growth platform for Reddit communities",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "webapp"
  },
  {
    name: "3. Pulse Labs AI",
    url: "https://www.pulselabs.ai/",
    description: "AI-powered platform for voice app testing and analytics",
    tech: ["Next.js", "React", "AI Integration"],
    category: "webapp"
  },
  {
    name: "4. Staroot Kenya",
    url: "https://www.staroot.co.ke",
    description: "Real estate and property management platform in Kenya",
    tech: ["React", "Node.js", "MongoDB"],
    category: "webapp"
  },
  {
    name: "5. Alexawriters",
    url: "https://alexawriters.com/",
    description: "Professional content writing and SEO services platform",
    tech: ["React", "Express", "PostgreSQL"],
    category: "webapp"
  },
  {
    name: "6. Duka Connect",
    url: "https://dukaconnect.co.ke",
    description: "E-commerce platform connecting local shops with customers",
    tech: ["Next.js", "Node.js", "MongoDB"],
    category: "webapp"
  },
  {
    name: "7. Safiri Car Hire",
    url: "https://safiricarshire.com",
    description: "Car rental and booking platform for Kenya",
    tech: ["WordPress", "WooCommerce", "Custom Theme"],
    category: "wordpress"
  },
  {
    name: "8. Nairobi Dev School",
    url: "https://nairobidevschool.com",
    description: "Coding bootcamp and tech education platform",
    tech: ["Next.js", "Strapi", "PostgreSQL"],
    category: "webapp"
  },
  {
    name: "9. Afya Connect",
    url: "https://afyaconnect.co.ke",
    description: "Healthcare provider directory and appointment booking system",
    tech: ["React", "Firebase", "Cloud Functions"],
    category: "webapp"
  },
  {
    name: "10. Tech Tribe",
    url: "https://techtribe.africa",
    description: "Community platform for African tech professionals",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    category: "webapp"
  }
];

const PortfolioLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'webapp' | 'wordpress'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [textPhase, setTextPhase] = useState(0);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    const startAnimation = () => {
      // Clear existing timeouts
      timeouts.forEach(clearTimeout);
      timeouts = [];
      
      // Reset to start
      setTextPhase(0);
      
      // Schedule new animation sequence with longer delays
      timeouts.push(setTimeout(() => setTextPhase(1), 2000)); // First text
      timeouts.push(setTimeout(() => setTextPhase(2), 5000)); // Second text
      timeouts.push(setTimeout(() => setTextPhase(3), 8000)); // Final text
      
      // Wait for 12 seconds before restarting
      timeouts.push(setTimeout(() => {
        startAnimation();
      }, 12000));
    };

    if (isInView) {
      startAnimation();
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [isInView]);

  const projectsPerPage = 3;

  const filteredSites = portfolioSites.filter(site => site.category === selectedCategory || selectedCategory === 'all');

  const totalPages = Math.ceil(filteredSites.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const visibleProjects = filteredSites.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`
            w-8 h-8 rounded-full text-sm font-medium transition-all duration-200
            ${currentPage === i 
              ? 'bg-emerald-500 text-white shadow-lg' 
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }
          `}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const num1 = currentPage === 1 ? totalPages : currentPage - 1;
  const num2 = currentPage;
  const num3 = currentPage === totalPages ? 1 : currentPage + 1;

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600">Let&apos;s explore some of my recent projects</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Project Categories */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={() => setSelectedCategory('all')}
              className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-200
                ${selectedCategory === 'all' 
                  ? 'bg-emerald-500 text-white shadow-lg' 
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
            >
              <div className="flex items-center space-x-3">
                <HiColorSwatch className="w-5 h-5" />
                <span className="font-medium">All Projects</span>
              </div>
            </button>
            <button
              onClick={() => setSelectedCategory('webapp')}
              className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-200
                ${selectedCategory === 'webapp' 
                  ? 'bg-emerald-500 text-white shadow-lg' 
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
            >
              <div className="flex items-center space-x-3">
                <HiCode className="w-5 h-5" />
                <span className="font-medium">Web Applications</span>
              </div>
            </button>
            <button
              onClick={() => setSelectedCategory('wordpress')}
              className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-200
                ${selectedCategory === 'wordpress' 
                  ? 'bg-emerald-500 text-white shadow-lg' 
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
            >
              <div className="flex items-center space-x-3">
                <HiColorSwatch className="w-5 h-5" />
                <span className="font-medium">WordPress Sites</span>
              </div>
            </button>

            {/* Animated Text and Image Section */}
            <div className="mt-16 pt-8 border-t border-gray-100 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1,
                  scale: 1
                }}
                transition={{ 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                className="relative"
              >
                <Image
                  src="/gif.png"
                  alt="Satisfaction guarantee"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                
                {/* Speech bubble container */}
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                  <div className="relative bg-white p-4 rounded-lg shadow-md min-w-[200px]">
                    {/* Speech bubble pointer */}
                    <div className="absolute bottom-0 left-6 transform translate-y-full">
                      <div className="w-4 h-4 bg-white transform rotate-45" />
                    </div>
                    
                    {/* Animated text container */}
                    <div className="relative h-16 font-['Caveat'] text-lg">
                      <motion.div
                        initial={{ display: "block", opacity: 0 }}
                        animate={{ 
                          display: textPhase >= 1 ? "block" : "none",
                          opacity: textPhase >= 1 && textPhase < 2 ? 1 : 0 
                        }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 flex items-center text-gray-600"
                      >
                        Lemme think...
                      </motion.div>
                      <motion.div
                        initial={{ display: "block", opacity: 0 }}
                        animate={{ 
                          display: textPhase >= 2 ? "block" : "none",
                          opacity: textPhase >= 2 && textPhase < 3 ? 1 : 0 
                        }}
                        transition={{ duration: 2.0 }}
                        className="absolute inset-0 flex items-center text-gray-600"
                      >
                        ...of any disappointed client...
                      </motion.div>
                      <motion.div
                        initial={{ display: "block", opacity: 0 }}
                        animate={{ 
                          display: textPhase >= 3 ? "block" : "none",
                          opacity: textPhase >= 3 ? 1 : 0 
                        }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 flex items-center text-emerald-600 font-bold"
                      >
                        <motion.span
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15,
                            duration: 1
                          }}
                        >
                          Oops, zero! 😊
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Middle Column - Complete List of Numbered Links */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {filteredSites.map((site, index) => (
              <motion.a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handlePageChange(Math.floor(index / projectsPerPage) + 1)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        delay: index * 0.1 
                      }}
                      className="relative"
                    >
                      {/* Background circle */}
                      <div className="absolute inset-0 bg-emerald-100/0 rounded-full transform group-hover:bg-emerald-100/50 transition-all duration-300" />
                      
                      {/* Number */}
                      <div className="relative px-2 py-1">
                        <span className="text-lg font-semibold bg-gradient-to-br from-emerald-600 to-emerald-400 bg-clip-text text-transparent group-hover:from-emerald-500 group-hover:to-emerald-300 transition-all duration-300">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </motion.div>
                    
                    <span className="text-gray-900 font-medium group-hover:text-emerald-600 transition-colors">
                      {site.name}
                    </span>
                  </div>
                  <FiExternalLink className="w-4 h-4 text-gray-500 group-hover:text-emerald-500 transition-colors" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right Column - Project Details with Pagination */}
          <div className="space-y-6">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {visibleProjects.map((site) => (
                <motion.div
                  key={site.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{site.name}</h3>
                  <p className="text-gray-600 mb-4">{site.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {site.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center space-x-2 pt-4">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200
                  ${currentPage === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                <FiChevronLeft className="w-4 h-4" />
              </button>

              {renderPaginationButtons()}

              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200
                  ${currentPage === totalPages 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                <FiChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="text-sm">Don&apos;t see what you&apos;re looking for?</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioLinks;
