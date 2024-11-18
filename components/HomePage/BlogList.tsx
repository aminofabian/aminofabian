'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

const BlogList: React.FC = () => {
  return (
    <div className="relative z-30 w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent mb-4">
          Latest Articles
        </h2>
        <p className="text-lg text-gray-600/80">
          Insights and tutorials about modern web development
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link 
            href={post.link} 
            key={post.title}
            className="group relative block"
          >
            {/* Card Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-2xl opacity-0 blur-xl group-hover:opacity-30 transition-all duration-500" />
            
            {/* Card Border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

            {/* Card Content */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col border border-gray-100/20 shadow-lg shadow-emerald-500/5 group-hover:shadow-emerald-500/10 transition-all duration-300">
              {/* Image Container */}
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                {/* Meta Info */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-emerald-600 bg-emerald-50/80 backdrop-blur-sm rounded-full border border-emerald-100/50 group-hover:bg-emerald-100/80 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600/90 text-sm mb-4 line-clamp-2">
                  {post.description}
                </p>

                {/* Read More Link */}
                <div className="mt-auto flex items-center text-emerald-600 font-medium group/link">
                  <span className="group-hover:mr-2 transition-all duration-300">Read More</span>
                  <svg 
                    className="w-0 h-5 group-hover:w-5 transition-all duration-300 overflow-hidden" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;