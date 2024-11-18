'use client';

import React from 'react';
import { IconType } from 'react-icons';
import { 
  SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiNestjs, SiPrisma, SiPostgresql, 
  SiMongodb, SiRedis, SiDocker, SiKubernetes,
  SiGithubactions, SiJenkins,
  SiAmazonwebservices, SiSvelte, SiGo,
  SiMysql, SiSqlite
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
            <category.icon className="w-6 h-6 text-emerald-500" />
            <h3 className="text-xl font-semibold text-emerald-800">{category.name}</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {category.skills.map((skill) => (
              <div key={skill.name} className="group">
                <div className="relative">
                  {/* Hexagon background */}
                  <div 
                    className="absolute -inset-[2px] bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg opacity-40 group-hover:opacity-80 transition-all duration-700" 
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  />
                  
                  {/* Content */}
                  <div 
                    className="relative bg-white p-4 rounded-lg transform transition-all duration-700"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  >
                    <div className="flex flex-col items-center justify-center gap-2 py-2">
                      <skill.icon className={`w-8 h-8 ${skill.color} group-hover:scale-105 transition-transform duration-700`} />
                      <span className="text-sm font-medium text-gray-700 text-center whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity duration-700">
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
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-emerald-900 mb-4">
          Tech Stack
        </h2>
        <p className="text-lg text-emerald-700 opacity-80">
          Technologies I work with to bring ideas to life
        </p>
      </div>
      
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        </div>
        
        <TechList />
      </div>
    </div>
  );
};

export default TechStack;
