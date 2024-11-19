'use client';

import React from 'react';
import { IconType } from 'react-icons';
import { 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiNestjs, 
  SiPrisma, 
  SiPostgresql, 
  SiMongodb, 
  SiRedis, 
  SiDocker, 
  SiKubernetes,
  SiGithubactions, 
  SiJenkins,
  SiAmazonwebservices, 
  SiSvelte, 
  SiGo,
  SiMysql, 
  SiSqlite
} from 'react-icons/si';

interface TechSkill {
  name: string;
  icon: IconType;
  color: string;
}

interface TechCategory {
  name: string;
  icon: IconType;
  skills: TechSkill[];
}

const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    icon: SiReact,
    skills: [
      { name: "React", icon: SiReact, color: "text-emerald-500" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-emerald-600" },
      { name: "TypeScript", icon: SiTypescript, color: "text-emerald-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-emerald-400" },
      { name: "Svelte", icon: SiSvelte, color: "text-emerald-500" }
    ]
  },
  {
    name: "Backend",
    icon: SiNodedotjs,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-600" },
      { name: "Express", icon: SiExpress, color: "text-emerald-500" },
      { name: "NestJS", icon: SiNestjs, color: "text-emerald-400" },
      { name: "Prisma", icon: SiPrisma, color: "text-emerald-500" },
      { name: "Golang", icon: SiGo, color: "text-emerald-600" }
    ]
  },
  {
    name: "Databases",
    icon: SiPostgresql,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-emerald-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-600" },
      { name: "Redis", icon: SiRedis, color: "text-emerald-500" },
      { name: "MySQL", icon: SiMysql, color: "text-emerald-400" },
      { name: "SQLite", icon: SiSqlite, color: "text-emerald-600" }
    ]
  },
  {
    name: "DevOps",
    icon: SiDocker,
    skills: [
      { name: "Docker", icon: SiDocker, color: "text-emerald-500" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-emerald-600" },
      { name: "AWS", icon: SiAmazonwebservices, color: "text-emerald-500" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-emerald-400" },
      { name: "Jenkins", icon: SiJenkins, color: "text-emerald-500" }
    ]
  }
];

function TechList() {
  return (
    <div className="relative w-full min-h-[800px] p-8">
      {techCategories.map((category) => (
        <div key={category.name} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative inline-flex items-center gap-3 group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/80 via-white/40 to-emerald-50/80 dark:from-emerald-900/30 dark:via-gray-800/30 dark:to-emerald-900/30 rounded-lg backdrop-blur-[1px] -z-10 transform transition-all duration-300 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent dark:from-emerald-400/5 rounded-lg -z-20"></div>
              {/* Decorative elements */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-full"></div>
              <div className="absolute -right-1 top-0 w-6 h-6 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-sm"></div>
              <category.icon className="w-6 h-6 text-emerald-500 dark:text-emerald-400 relative z-10" />
              <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-200 relative z-10 px-3 py-1">{category.name}</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {category.skills.map((skill) => (
              <div key={skill.name} className="group cursor-pointer">
                <div className="relative">
                  {/* Hexagon background */}
                  <div 
                    className="absolute -inset-[2px] bg-gradient-to-r from-emerald-600/20 to-emerald-400/20 dark:from-emerald-600/30 dark:to-emerald-400/30 rounded-lg group-hover:from-emerald-600/30 group-hover:to-emerald-400/30 dark:group-hover:from-emerald-600/40 dark:group-hover:to-emerald-400/40 transition-all duration-300" 
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  />
                  
                  {/* Content */}
                  <div 
                    className="relative p-4 rounded-lg transform transition-all duration-300"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  >
                    <div className="flex flex-col items-center justify-center gap-2 py-2">
                      <skill.icon className={`w-8 h-8 ${skill.color} group-hover:scale-110 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-all duration-300`} />
                      <span className="text-xs font-semibold tracking-wide text-gray-800 dark:text-gray-200 text-center whitespace-nowrap antialiased group-hover:text-emerald-600 dark:group-hover:text-emerald-300 group-hover:-translate-y-0.5 transition-all duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const TechStack: React.FC = () => {
  return (
    <div className="relative z-30 w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16 relative">
        <div className="relative z-10 space-y-4 inline-flex flex-col items-center">
          <div className="relative inline-block">
            <h2 className="text-4xl font-bold text-emerald-900 dark:text-emerald-100 mb-4 relative">
              <span className="relative z-10 px-6 py-2 inline-block">Tech Stack</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/90 via-white/60 to-emerald-50/90 dark:from-emerald-900/40 dark:via-gray-800/40 dark:to-emerald-900/40 rounded-lg backdrop-blur-[2px] border border-emerald-100/20 dark:border-emerald-500/10"></div>
              {/* Decorative dots */}
              <div className="absolute -right-2 -top-2 w-2 h-2 bg-emerald-400/40 rounded-full"></div>
              <div className="absolute -left-2 -bottom-2 w-2 h-2 bg-emerald-400/40 rounded-full"></div>
            </h2>
          </div>
          
          <div className="relative inline-block">
            <p className="text-lg text-emerald-700 dark:text-emerald-300">
              <span className="relative z-10 px-4 py-2 inline-block">Technologies I work with to bring ideas to life</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-emerald-50/30 to-white/50 dark:from-gray-800/50 dark:via-emerald-900/20 dark:to-gray-800/50 rounded-lg backdrop-blur-[1px] border border-emerald-100/10 dark:border-emerald-500/5"></div>
              {/* Decorative line */}
              <div className="absolute left-1/2 -bottom-2 w-16 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent transform -translate-x-1/2"></div>
            </p>
          </div>
        </div>
      </div>
      
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 dark:bg-emerald-900/30 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-800/30 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
        
        <TechList />
      </div>
    </div>
  );
};

export default TechStack;
