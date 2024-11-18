'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogIn } from 'lucide-react';
import Image from 'next/image';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Tech', href: '#tech' },
  { name: 'Blog', href: '#blog' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth animation
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.95, 
              y: 10,
              transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1]
              }
            }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-6 z-50 w-full max-w-md"
          >
            <div className="relative">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-0 p-2 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </motion.button>
              <div className="text-center mt-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-500 rounded-full mx-auto flex items-center justify-center"
                >
                  <LogIn className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">Coming Soon!</h3>
                  <p className="mt-2 text-gray-600">
                    The login feature is currently under development. Stay tuned for updates!
                  </p>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    duration: 0.2,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  onClick={onClose}
                  className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-500 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-600 transition-all duration-300"
                >
                  Got it
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const sectionId = href.slice(1); // Remove the '#' from the href
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-white/90 backdrop-blur-md border-b border-gray-100/50 shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/cartoon.png"
              alt="Fabian Amino"
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            />
          </motion.div>

          {/* Desktop Menu */}
          <motion.ul 
            variants={navVariants}
            className="hidden md:flex justify-center space-x-1"
          >
            {navItems.map((item) => (
              <motion.li 
                key={item.name} 
                variants={itemVariants}
              >
                <a
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'text-white bg-gradient-to-r from-emerald-500 to-emerald-500 shadow-lg shadow-emerald-500/20'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  <motion.span
                    initial={false}
                    animate={activeSection === item.href.slice(1) ? {
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    } : { scale: 1 }}
                  >
                    {item.name}
                  </motion.span>
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Login Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-500 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-xl"
          >
            <motion.span
              animate={{ x: [0, 2, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <LogIn className="w-4 h-4" />
            </motion.span>
            <span>Login</span>
          </motion.button>

          {/* Mobile menu button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-emerald-50 transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-gray-600" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="text-gray-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: "auto",
                transition: {
                  height: {
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: {
                  height: {
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
              className="md:hidden mt-4"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  y: -20,
                  transition: {
                    duration: 0.2,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100/50 overflow-hidden"
              >
                <ul className="py-2 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: {
                          delay: index * 0.1,
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1]
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        x: -20,
                        transition: {
                          duration: 0.2,
                          ease: [0.22, 1, 0.36, 1]
                        }
                      }}
                    >
                      <a
                        href={item.href}
                        className={`block py-2 px-4 text-sm font-medium transition-all duration-300 ${
                          activeSection === item.href.slice(1)
                            ? 'bg-gradient-to-r from-emerald-500 to-emerald-500 text-white shadow-md shadow-emerald-500/20'
                            : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: {
                        delay: navItems.length * 0.1,
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setIsOpen(false);
                        setIsModalOpen(true);
                      }}
                      className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-500 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-xl flex items-center gap-2 justify-center"
                    >
                      <motion.span
                        animate={{ x: [0, 2, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      >
                        <LogIn className="w-4 h-4" />
                      </motion.span>
                      <span>Login</span>
                    </motion.button>
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </motion.nav>
  );
};

export default Navbar;