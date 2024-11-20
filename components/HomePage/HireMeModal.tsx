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
        <div className="relative z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-md"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.95, 
                y: 20,
                transition: {
                  duration: 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
              className="bg-white/10 backdrop-blur-xl dark:bg-gray-900/90 rounded-2xl shadow-2xl border border-white/10 dark:border-gray-700/30 p-6 sm:p-8 w-full max-w-lg pointer-events-auto"
            >
              <div className="relative">
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -right-2 -top-2 p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full shadow-lg"
                >
                  <X className="w-4 h-4" />
                </motion.button>

                <div className="text-center mt-2">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">Let's Work Together!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">Choose your preferred way to connect with me:</p>

                  <div className="space-y-4">
                    <motion.a
                      href={upworkLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-6 py-3.5 bg-[#6FDA44] text-white rounded-xl hover:bg-[#5ec934] transition-all duration-200 font-medium relative overflow-hidden group shadow-lg shadow-[#6FDA44]/20"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                      <span className="relative flex items-center justify-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        Hire me on Upwork
                      </span>
                    </motion.a>

                    <motion.a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-6 py-3.5 bg-[#25D366] text-white rounded-xl hover:bg-[#20bd5a] transition-all duration-200 font-medium relative overflow-hidden group shadow-lg shadow-[#25D366]/20"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                      <span className="relative flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        Chat me on WhatsApp
                      </span>
                    </motion.a>

                    <motion.a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="block w-full px-6 py-3.5 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all duration-200 font-medium relative overflow-hidden group shadow-lg shadow-emerald-500/20"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                      <span className="relative flex items-center justify-center gap-2">
                        <Mail className="w-5 h-5" />
                        Send me an Email
                      </span>
                    </motion.a>
                  </div>

                  <p className="mt-6 text-xs text-gray-50 dark:text-gray-400">
                    Looking forward to discussing your project with you
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default HireMeModal;
