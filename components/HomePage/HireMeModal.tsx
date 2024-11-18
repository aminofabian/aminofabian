'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HireMeModal = ({ isOpen, onClose }: HireMeModalProps) => {
  const upworkLink = "https://www.upwork.com/freelancers/~01fe78f7d40f11e05e?viewMode=1&s=1044578476142100494";
  const whatsappLink = `https://wa.me/254714282874`;

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
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 z-50 w-full max-w-md"
          >
            <div className="relative">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-0 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="text-center mt-4">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">Let's Work Together!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">Choose your preferred way to connect with me:</p>

                <div className="space-y-4">
                  <motion.a
                    href={upworkLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-4 bg-[#6FDA44] text-white rounded-lg hover:bg-[#5ec934] transition-all duration-200 font-medium relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-300" />
                    <span className="relative flex items-center justify-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      Hire me on Upwork
                    </span>
                  </motion.a>

                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#20bd5a] transition-all duration-200 font-medium relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-300" />
                    <span className="relative flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      Chat on WhatsApp
                    </span>
                  </motion.a>

                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block w-full px-6 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all duration-200 font-medium relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-300" />
                    <span className="relative flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      Fill Contact Form
                    </span>
                  </motion.a>
                </div>

                <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                  Looking forward to discussing your project!
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HireMeModal;
