'use client';

import { motion } from 'framer-motion';
import { 
  Github, Twitter, Linkedin, Instagram, 
  Mail, Heart, ArrowUp, ExternalLink 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [
  { 
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/aminofabian',
    color: 'hover:text-gray-800'
  },
  { 
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/aminofabian',
    color: 'hover:text-blue-400'
  },
  { 
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/aminofabian',
    color: 'hover:text-blue-600'
  },
  { 
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/aminofabian',
    color: 'hover:text-pink-500'
  },
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-10">
      {/* Creative background pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] mix-blend-soft-light" 
          style={{
            backgroundImage: `radial-gradient(#10b981 0.5px, transparent 0.5px), radial-gradient(#10b981 0.5px, transparent 0.5px)`,
            backgroundSize: '24px 24px, 16px 16px',
            backgroundPosition: '0 0, 12px 12px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/5 to-emerald-100/10 dark:from-transparent dark:via-emerald-900/10 dark:to-emerald-900/20 backdrop-blur-[1px]" />
      </div>

      {/* Top accent line with glow */}
      <div className="absolute top-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        <div className="h-8 bg-gradient-to-b from-emerald-500/5 to-transparent dark:from-emerald-400/10" />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-500/30 dark:ring-emerald-400/40 shadow-lg shadow-emerald-500/10 dark:shadow-emerald-400/20"
              >
                <Image
                  src="/cartoon.png"
                  alt="Fabian Amino"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Fabian Amino
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed relative">
              <span className="relative z-10">Crafting beautiful digital experiences with modern web technologies and creative design solutions.</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent dark:from-gray-800/50 rounded-lg backdrop-blur-[1px] -z-10" />
            </p>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
              <span>Back to top</span>
            </motion.button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 relative inline-flex items-center">
              <span className="relative z-10 px-3 py-1">Quick Links</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/80 to-transparent dark:from-emerald-900/30 rounded-lg backdrop-blur-[1px]" />
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 text-sm flex items-center gap-1.5 group w-fit relative"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1 relative z-10">
                      {link.name}
                    </span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-emerald-50/0 dark:to-emerald-900/0 group-hover:to-emerald-50/80 dark:group-hover:to-emerald-900/30 rounded-lg backdrop-blur-[1px] transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 relative inline-flex items-center">
              <span className="relative z-10 px-3 py-1">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/80 to-transparent dark:from-emerald-900/30 rounded-lg backdrop-blur-[1px]" />
            </h3>
            <motion.a
              href="mailto:hello@aminofabian.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 ring-1 ring-gray-200/80 dark:ring-gray-700/80 hover:ring-emerald-200 dark:hover:ring-emerald-700 transition-all duration-300 relative group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Say Hello</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent dark:from-gray-800/50 rounded-lg backdrop-blur-[1px] group-hover:bg-emerald-50/50 dark:group-hover:bg-emerald-900/30 transition-all duration-300" />
            </motion.a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 relative inline-flex items-center">
              <span className="relative z-10 px-3 py-1">Follow Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/80 to-transparent dark:from-emerald-900/30 rounded-lg backdrop-blur-[1px]" />
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg ring-1 ring-gray-200/80 dark:ring-gray-700/80 text-gray-600 dark:text-gray-400 ${social.color} dark:hover:text-white hover:ring-emerald-200 dark:hover:ring-emerald-700 transition-all duration-300 relative group`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-5 h-5 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-gray-800/50 rounded-lg backdrop-blur-[1px] group-hover:bg-emerald-50/50 dark:group-hover:bg-emerald-900/30 transition-all duration-300" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-800/50 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 relative group">
              <span className="relative z-10">Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="relative z-10"
              >
                <Heart className="w-4 h-4 text-emerald-500 dark:text-emerald-400 drop-shadow-lg" />
              </motion.div>
              <span className="relative z-10">by Fabian Amino</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent dark:from-gray-800/30 rounded-lg backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 relative group">
              <span className="relative z-10">{new Date().getFullYear()} All rights reserved</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent dark:from-gray-800/30 rounded-lg backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line with glow */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-8 bg-gradient-to-t from-emerald-500/5 to-transparent dark:from-emerald-400/10" />
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
