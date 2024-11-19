'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FormHeaderProps {
  isInView: boolean;
}

const FormHeader: React.FC<FormHeaderProps> = ({ isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-8 w-full"
    >
      <span className="inline-block text-sm font-medium tracking-wider text-emerald-600 mb-2 uppercase">Contact Me</span>
      <h2 className="text-3xl font-bold text-emerald-900 mb-3">Get in Touch</h2>
      <p className="text-lg text-emerald-700 opacity-80">Have a project in mind? Let's discuss it!</p>
    </motion.div>
  );
};

export default FormHeader;
