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
    <footer className="relative mt-10 bg-gray-50/50">
      {/* Subtle dot pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(#10b981 0.5px, transparent 0.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-500/20"
              >
                <Image
                  src="/cartoon.png"
                  alt="Fabian Amino"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900">
                Fabian Amino
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Crafting beautiful digital experiences with modern web technologies and creative design solutions.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-500 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
              <span>Back to top</span>
            </motion.button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-emerald-500 text-sm flex items-center gap-1.5 group w-fit"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.name}
                    </span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Get in Touch
            </h3>
            <motion.a
              href="mailto:hello@aminofabian.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 ring-1 ring-gray-200 hover:ring-emerald-200 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              Say Hello
            </motion.a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Follow Me
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
                    className={`p-2 rounded-lg bg-white ring-1 ring-gray-200 text-gray-600 ${social.color} hover:ring-emerald-200 transition-all duration-300`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1.5 text-sm text-gray-600">
              <span>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Heart className="w-4 h-4 text-emerald-500" />
              </motion.div>
              <span>by Fabian Amino</span>
            </div>
            <div className="text-sm text-gray-600">
              {new Date().getFullYear()} All rights reserved
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
    </footer>
  );
};

export default Footer;
