'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Building Modern Web Applications with Next.js 13",
    description: "Explore the latest features in Next.js 13 and learn how to build performant web applications with the App Router.",
    date: "2023-12-15",
    readTime: "5 min read",
    imageUrl: "/modern.png",
    tags: ["Next.js", "React", "Web Development"],
    link: "/blog/nextjs-13"
  },
  {
    title: "Mastering TypeScript: Advanced Patterns",
    description: "Deep dive into advanced TypeScript patterns and best practices for large-scale applications.",
    date: "2023-12-10",
    readTime: "8 min read",
    imageUrl: "/typescript.jpg",
    tags: ["TypeScript", "JavaScript", "Programming"],
    link: "/blog/typescript-patterns"
  },
  {
    title: "Cloud Architecture: AWS Best Practices",
    description: "Learn about AWS architecture patterns and best practices for scalable cloud applications.",
    date: "2023-12-05",
    readTime: "10 min read",
    imageUrl: "/aws.jpg",
    tags: ["AWS", "Cloud", "DevOps"],
    link: "/blog/aws-architecture"
  }
];

const BlogCard: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.2s ease-out',
      }}
      className="relative group"
    >
      <Link href={post.link} className="block">
        {/* Floating Elements */}
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? -5 : 0,
          }}
          className="absolute -top-2 -right-2 w-12 h-12 bg-emerald-400/20 dark:bg-emerald-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          className="absolute -bottom-2 -left-2 w-16 h-16 bg-emerald-600/20 dark:bg-emerald-600/20 rounded-full blur-xl"
        />

        {/* Main Card */}
        <div className="relative backdrop-blur-xl rounded-2xl p-6 border border-emerald-50/20 dark:border-emerald-950/20 shadow-lg shadow-emerald-500/5 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
          
          {/* Image Container */}
          <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="relative">
            {/* Meta Info with Creative Shapes */}
            <div className="relative flex items-center gap-4 mb-4">
              {/* Date Container */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full" />
                  <div className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full" />
                  <div className="relative p-1 bg-gray-50 dark:bg-gray-900 rounded-full">
                    <Calendar size={12} className="text-gray-500 dark:text-gray-400" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Read Time Container */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full" />
                  <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full" />
                  <div className="relative p-1 bg-gray-50 dark:bg-gray-900 rounded-full">
                    <Clock size={12} className="text-gray-500 dark:text-gray-400" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -right-1 -top-1 w-6 h-6 border border-dashed border-gray-200 dark:border-gray-800 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -left-1 -bottom-1 w-4 h-4 border border-dotted border-gray-200 dark:border-gray-800 rounded-full"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-3 py-1 text-xs font-xs text-emerald-600 dark:text-emerald-400 backdrop-blur-sm rounded-full border border-emerald-100/50 dark:border-emerald-800/50 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-all duration-300 hover:scale-105"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
              {post.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600/90 dark:text-gray-300 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
              {post.description}
            </p>

            {/* Read More Link */}
            <motion.div 
              className="flex items-center text-emerald-600 dark:text-emerald-400 font-xs"
              animate={{ x: isHovered ? 5 : 0 }}
            >
              <span>Read More</span>
              <ArrowRight 
                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const BlogList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <div className="relative z-30 w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-emerald-900 dark:text-white mb-4">
          Latest Articles
        </h2>
        <p className="text-lg text-gray-600/80 dark:text-gray-300">
          Insights and tutorials about modern web development
        </p>
      </motion.div>

      {/* Blog Grid */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts
              .slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage)
              .map((post, index) => (
                <BlogCard key={post.title} post={post} index={index} />
              ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevPage}
              className="p-2 rounded-full text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextPage}
              className="p-2 rounded-full text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;