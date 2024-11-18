'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

interface SocialLink {
  name: string;
  icon: React.ElementType;
  href: string;
  color: string;
  hoverColor: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/aminofabian',
    color: 'text-emerald-600',
    hoverColor: 'hover:text-emerald-500'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    href: 'https://twitter.com/aminofabian',
    color: 'text-emerald-600',
    hoverColor: 'hover:text-emerald-500'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    href: 'https://linkedin.com/in/aminofabian',
    color: 'text-emerald-600',
    hoverColor: 'hover:text-emerald-500'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    href: 'https://instagram.com/aminofabian',
    color: 'text-emerald-600',
    hoverColor: 'hover:text-emerald-500'
  },
  {
    name: 'Email',
    icon: HiMail,
    href: 'mailto:aminofabian@gmail.com',
    color: 'text-emerald-600',
    hoverColor: 'hover:text-emerald-500'
  }
];

const SocialLinks: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <div ref={ref} className="relative z-30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-emerald-900 mb-3">Connect With Me</h2>
        <p className="text-emerald-700 opacity-80">Let's build something amazing together</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            className="group relative"
          >
            {/* Hexagonal background with gradient */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-xl opacity-40 group-hover:opacity-80 transition-all duration-700"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />
            
            {/* Content container */}
            <div className="relative bg-white p-4 rounded-xl transition-all duration-700"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              <div className="flex flex-col items-center gap-2 p-2">
                <link.icon className={`w-6 h-6 ${link.color} group-hover:scale-105 transition-transform duration-700`} />
                <span className="text-sm font-medium text-emerald-800 opacity-90 group-hover:opacity-100 transition-opacity duration-700">
                  {link.name}
                </span>
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-700 rounded-xl"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />
          </motion.a>
        ))}
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-0"
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-0"
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SocialLinks;
