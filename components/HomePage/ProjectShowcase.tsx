'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Clock, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ProjectStats {
  stars: number;
  forks: number;
  contributors: number;
  lastUpdated: string;
}

interface ProjectLinks {
  github: string;
  live: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  links: ProjectLinks;
  stats: ProjectStats;
  highlights: string[];
  status: 'completed' | 'in-progress' | 'planned';
  duration: string;
  role: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio website built with Next.js 13, React, and Tailwind CSS. Features dynamic animations, responsive design, and modern UI components.",
    longDescription: "A showcase of my professional work and skills, built with performance and accessibility in mind. Implements modern web development practices including Server-Side Rendering (SSR), optimized images, and semantic HTML.",
    image: "/portfolio-preview.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    links: {
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com"
    },
    stats: {
      stars: 45,
      forks: 12,
      contributors: 3,
      lastUpdated: "2024-02-15"
    },
    highlights: [
      "Achieved 98+ Lighthouse score",
      "Implemented dark mode support",
      "Added internationalization"
    ],
    status: "completed",
    duration: "3 months",
    role: "Lead Developer",
    category: "Web Development"
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card 
        className={`group backdrop-blur-md transition-all duration-300 cursor-pointer
          ${isHovered ? 'ring-1 ring-indigo-300 shadow-lg shadow-indigo-100' : 'shadow-md border border-slate-200'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            {/* Project Image */}
            <div className="lg:col-span-1">
              <div className="relative h-24 w-24 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            
            {/* Main Project Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
                  <p className="text-slate-600">{project.description}</p>
                </div>
                <div className="flex space-x-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full hover:bg-slate-50 border border-slate-200 
                            transform transition-all duration-300 hover:shadow-md"
                        >
                          <Github className="w-5 h-5 text-indigo-500" />
                        </motion.a>
                      </TooltipTrigger>
                      <TooltipContent>View Source</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, index: number) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="bg-white/50 hover:bg-white transition-colors duration-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Project Stats */}
              <div className="flex items-center space-x-4 text-sm text-slate-600">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>{project.stats.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GitFork className="w-4 h-4" />
                  <span>{project.stats.forks}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{project.stats.contributors}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{project.duration}</span>
                </div>
              </div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2"
              >
                <h4 className="font-semibold text-slate-800">Highlights</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  {project.highlights.map((highlight: string, index: number) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectShowcase: React.FC = () => {
  const [isExpanded] = useState(false);
  return (
    <div className="w-full space-y-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectShowcase;