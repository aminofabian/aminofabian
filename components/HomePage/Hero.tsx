import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Briefcase, Terminal, ExternalLink } from 'lucide-react';

interface CodeLine {
  code: string;
  color: string;
}

const CreativeCode = () => {
  const [currentLine, setCurrentLine] = useState<number>(0);
  const codeLines: CodeLine[] = useMemo(() => [
    {
      code: '// Welcome to my portfolio',
      color: 'text-gray-400'
    },
    {
      code: 'const developer = {',
      color: 'text-cyan-600'
    },
    {
      code: '  name: "Fabian Amino",',
      color: 'text-rose-500'
    },
    {
      code: '  role: "Senior Software Engineer",',
      color: 'text-rose-500'
    },
    {
      code: '  expertise: [',
      color: 'text-cyan-600'
    },
    {
      code: '    "Full Stack Development",',
      color: 'text-teal-500'
    },
    {
      code: '    "Cloud Architecture",',
      color: 'text-teal-500'
    },
    {
      code: '    "UI/UX Design"',
      color: 'text-teal-500'
    },
    {
      code: '  ],',
      color: 'text-cyan-600'
    },
    {
      code: '  passion: () => {',
      color: 'text-cyan-700'
    },
    {
      code: '    return "Building impactful solutions";',
      color: 'text-rose-500'
    },
    {
      code: '  }',
      color: 'text-cyan-700'
    },
    {
      code: '};',
      color: 'text-cyan-600'
    }
  ], []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev: number) => 
        prev < codeLines.length - 1 ? prev + 1 : 0
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [codeLines]);
  
  return (
    <div className="font-mono text-sm leading-relaxed">
      <div className="bg-white rounded-lg shadow-xl border border-gray-200">
        {/* Editor Header */}
        <div className="bg-gradient-to-r from-cyan-50 to-teal-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-teal-400"></div>
          </div>
          <div className="text-xs text-gray-500">portfolio.tsx</div>
        </div>
        
        {/* Editor Content */}
        <div className="p-6 bg-gradient-to-br from-white to-cyan-50">
          {codeLines.slice(0, currentLine + 1).map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`${line.color} whitespace-pre font-mono mb-1`}
            >
              {line.code}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CodeHeroSection: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-br from-cyan-50 via-white to-rose-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-teal-500">
                Fabian Amino
              </h1>
              <p className="mt-4 text-2xl text-gray-700 font-medium">
                Senior Software Engineer
              </p>
              <p className="mt-6 text-lg text-gray-600 max-w-lg">
                Crafting elegant digital solutions with clean code and innovative design.
                Specialized in building scalable web applications and intuitive user experiences.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="mailto:aminofabian@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-500 text-white rounded-lg shadow-lg hover:from-cyan-700 hover:to-teal-600 transition-all duration-300"
              >
                <Terminal className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center px-6 py-3 bg-white text-cyan-700 border-2 border-cyan-600 rounded-lg hover:bg-cyan-50 hover:border-teal-500 hover:text-teal-600 transition-all duration-300"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Portfolio
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex space-x-6"
            >
              {[
                { Icon: Github, href: "https://github.com/aminofabian", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com/in/fabian-amino", label: "LinkedIn" },
                { Icon: Instagram, href: "https://www.instagram.com/fabian_amino", label: "Instagram" },
                { Icon: Briefcase, href: "#portfolio", label: "Portfolio" }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Code Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CreativeCode />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CodeHeroSection;