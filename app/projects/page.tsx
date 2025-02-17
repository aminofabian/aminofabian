"use client"
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon, ChevronRightIcon, LinkIcon } from '@heroicons/react/24/outline';
import ProjectCalendar from '@/components/ProjectCalendar';

interface Project {
  title: string;
  description: string;
  url: string;
  date: string;
  tags: string[];
  image?: string;
}

interface ProjectsByMonth {
  [key: string]: Project[];
}

const projects: Project[] = [
  {
    title: "Scope Markets",
    description: "Revolutionary fractional stock trading platform offering a 10% bonus on first deposits. Enables investors to start small with fractional shares while providing professional trading tools and market insights.",
    url: "https://www.scopemarkets.co.ke/en",
    date: "January 2025",
    tags: ["Finance", "Trading", "Investment", "Stocks"],
  },
  {
    title: "Diralink",
    description: "An intelligent ISP management platform offering advanced network infrastructure solutions with real-time analytics, automated optimization, and comprehensive monitoring capabilities.",
    url: "https://www.diralink.co.ke/",
    date: "January 2025",
    tags: ["ISP", "Network Management", "Analytics", "Automation"],
  },
  {
    title: "Technical Writer HQ",
    description: "A comprehensive platform for technical writing certifications and training. Features interactive courses, certification tracks, and professional development resources.",
    url: "https://technicalwriterhq.com/",
    date: "December 2024",
    tags: ["Education", "Technical Writing", "Certification"],
  },
  {
    title: "SecurePort",
    description: "Enterprise-grade cybersecurity platform offering advanced protection for digital infrastructure. Features real-time monitoring, threat prevention, and automated security protocols with a modern command-line interface for granular control.",
    url: "https://secureport-shey.vercel.app/",
    date: "December 2024",
    tags: ["Cybersecurity", "Enterprise Security", "Real-time Monitoring", "CLI"],
  },
  {
    title: "IgleadGen",
    description: "Lead generation and business development platform with advanced analytics and customer tracking capabilities.",
    url: "https://app.igleadgen.com",
    date: "December 2024",
    tags: ["Lead Generation", "Business", "Analytics"],
  },
  {
    title: "Media Masses",
    description: "Digital media platform focused on content creation, distribution, and audience engagement analytics.",
    url: "#",
    date: "November 2024",
    tags: ["Media", "Content", "Analytics"],
  },
  {
    title: "Mavuno Church",
    description: "Modern church management system with event scheduling, community engagement, and resource management features.",
    url: "#",
    date: "October 2024",
    tags: ["Church", "Community", "Management"],
  },
  {
    title: "Emerald Dental",
    description: "Dental practice management solution with patient scheduling, treatment planning, and billing integration.",
    url: "#",
    date: "September 2024",
    tags: ["Healthcare", "Dental", "Management"],
  },
  {
    title: "Fitrii",
    description: "Fitness tracking and wellness platform with personalized workout plans and nutrition guidance.",
    url: "#",
    date: "August 2024",
    tags: ["Fitness", "Health", "Tracking"],
  },
  {
    title: "Eppico Interiors",
    description: "Interior design portfolio and project management platform with 3D visualization capabilities.",
    url: "#",
    date: "July 2024",
    tags: ["Interior Design", "Portfolio", "3D"],
  },
  {
    title: "Alexawriters",
    description: "AI-powered content creation platform for professional writers and content marketers.",
    url: "#",
    date: "June 2024",
    tags: ["AI", "Content", "Writing"],
  },
  {
    title: "Staroot Kenya",
    description: "E-commerce platform for local Kenyan products with integrated payment and delivery systems.",
    url: "#",
    date: "May 2024",
    tags: ["E-commerce", "Local", "Kenya"],
  },
  {
    title: "Pulse Labs AI",
    description: "AI research and development platform focusing on machine learning applications and data analytics.",
    url: "#",
    date: "April 2024",
    tags: ["AI", "Research", "Analytics"],
  },
  {
    title: "Reddit Growth",
    description: "Analytics and growth hacking tool for Reddit community management and engagement optimization.",
    url: "#",
    date: "March 2024",
    tags: ["Social Media", "Analytics", "Growth"],
  },
  {
    title: "SQUL",
    description: "SQL learning platform with interactive tutorials and real-world database management scenarios.",
    url: "#",
    date: "February 2024",
    tags: ["Education", "Database", "SQL"],
  },
];

// Group projects by month
const groupProjectsByMonth = (projects: Project[]): ProjectsByMonth => {
  return projects.reduce((acc: ProjectsByMonth, project) => {
    const month = project.date;
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(project);
    return acc;
  }, {});
};

export default function ProjectsPage() {
  const [expandedMonths, setExpandedMonths] = useState<{ [key: string]: boolean }>({});
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>({});
  const projectsByMonth = groupProjectsByMonth(projects);

  const toggleMonth = (month: string) => {
    setExpandedMonths(prev => ({
      ...prev,
      [month]: !prev[month]
    }));
  };

  const toggleProject = (projectId: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,rgba(16,185,129,0.05)_0%,rgba(16,185,129,0)_100%)]" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-gradient-to-b from-emerald-200 to-emerald-600 dark:from-emerald-900 dark:to-emerald-600" />
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400 py-2">
            Project Timeline
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A journey through innovation and development
          </p>
        </div>

        {/* Add the calendar here */}
        <ProjectCalendar />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 to-emerald-200 dark:from-emerald-400 dark:to-emerald-900" />

          <div className="space-y-8">
            {Object.entries(projectsByMonth).map(([month, monthProjects]) => (
              <div key={month} className="relative pl-8">
                {/* Timeline dot */}
                <div className="absolute -left-[5px] top-6 h-[10px] w-[10px] rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-lg shadow-emerald-500/50" />

                <button
                  onClick={() => toggleMonth(month)}
                  className="w-full flex items-center justify-between p-6 bg-white/80 dark:bg-gray-800/80 
                           backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
                           border border-gray-200/50 dark:border-gray-700/50 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                                   from-emerald-600 to-emerald-400 dark:from-emerald-400 dark:to-emerald-200">
                      {month}
                    </span>
                    <span className="px-3 py-1 text-sm font-medium rounded-full 
                                   bg-emerald-100 dark:bg-emerald-900/40
                                   text-emerald-700 dark:text-emerald-300
                                   border border-emerald-200 dark:border-emerald-800">
                      {monthProjects.length} project{monthProjects.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="transform transition-transform duration-300 group-hover:scale-110">
                    {expandedMonths[month] ? (
                      <ChevronDownIcon className="w-6 h-6 text-emerald-500" />
                    ) : (
                      <ChevronRightIcon className="w-6 h-6 text-emerald-500" />
                    )}
                  </div>
                </button>

                {expandedMonths[month] && (
                  <div className="mt-4 space-y-4 animate-fadeIn">
                    {monthProjects.map((project, index) => (
                      <div key={index} className="ml-4 transform transition-all duration-300">
                        <button
                          onClick={() => toggleProject(`${month}-${index}`)}
                          className="w-full text-left p-5 bg-white/50 dark:bg-gray-800/50 
                                   backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg 
                                   transition-all duration-300 border border-gray-100/50 
                                   dark:border-gray-700/50 group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-lg text-gray-900 dark:text-white 
                                         group-hover:text-emerald-500 dark:group-hover:text-emerald-400 
                                         transition-colors duration-300">
                              {project.title}
                            </span>
                            <div className="transform transition-transform duration-300 group-hover:scale-110">
                              {expandedProjects[`${month}-${index}`] ? (
                                <ChevronDownIcon className="w-5 h-5 text-emerald-500" />
                              ) : (
                                <ChevronRightIcon className="w-5 h-5 text-emerald-500" />
                              )}
                            </div>
                          </div>
                        </button>

                        {expandedProjects[`${month}-${index}`] && (
                          <div className="mt-2 ml-4 p-6 bg-white/30 dark:bg-gray-800/30 
                                        backdrop-blur-sm rounded-xl border border-gray-100/50 
                                        dark:border-gray-700/50 animate-slideDown">
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                              {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-4 py-1.5 text-sm rounded-full 
                                           bg-emerald-50 dark:bg-emerald-900/20
                                           text-emerald-700 dark:text-emerald-300
                                           border border-emerald-100 dark:border-emerald-800
                                           transition-all duration-300 hover:scale-105"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <Link
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 text-sm font-medium
                                       text-emerald-600 dark:text-emerald-400 
                                       hover:text-emerald-700 dark:hover:text-emerald-300
                                       transition-all duration-300 hover:scale-105
                                       bg-emerald-50 dark:bg-emerald-900/20 rounded-lg"
                            >
                              <LinkIcon className="w-4 h-4 mr-2" />
                              Visit Project
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 