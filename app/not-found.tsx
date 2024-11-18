'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold text-emerald-600 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              Return Home
            </Link>
            
            <div className="flex justify-center space-x-4 mt-8">
              <Link 
                href="/#projects"
                className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"
              >
                View Projects
              </Link>
              <Link 
                href="/#contact"
                className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Contact Me
              </Link>
              <Link 
                href="/#about"
                className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"
              >
                About Me
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
