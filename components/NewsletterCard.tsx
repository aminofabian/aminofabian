'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, CheckCircle } from 'lucide-react';

const NewsletterCard = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Implement your newsletter subscription logic here
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '100%' }}
          animate={{ opacity: 1, y: 0, x: '0%' }}
          exit={{ opacity: 0, y: 50, x: '100%' }}
          transition={{ type: 'spring', damping: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <div className="relative">
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl" />
            
            {/* Main content */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/10 border border-white/20 p-6 rounded-2xl shadow-xl w-80">
              {/* Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={16} />
              </button>

              {!isSubmitted ? (
                <>
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-emerald-500" />
                    <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 mb-4">
                    Get weekly insights on web development, creative coding, and tech innovations.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-2 bg-white/5 border border-emerald-600/10 rounded-lg text-emerald-700 placeholder-gray-400 text-xm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={16} />
                          Subscribe
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-2">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <h3 className="text-lg font-semibold text-white">Thank You!</h3>
                  </div>
                  <p className="text-sm text-gray-300">
                    You've been successfully subscribed to our newsletter.
                  </p>
                </div>
              )}

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterCard;
