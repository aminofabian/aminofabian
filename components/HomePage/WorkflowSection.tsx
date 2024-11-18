'use client';

import { motion, useInView } from 'framer-motion';
import { 
  Lightbulb, 
  FileSearch, 
  Code2, 
  TestTube, 
  Rocket, 
  DollarSign,
  CheckCircle2,
  HeartHandshake
} from 'lucide-react';
import { useRef } from 'react';

interface WorkflowStep {
  title: string;
  description: string;
  icon: React.ElementType;
  details: string[];
  position: {
    x: number;
    y: number;
  };
  step: number;
}

const workflowSteps: WorkflowStep[] = [
  {
    title: "Discovery & Scoping",
    description: "Understanding your vision",
    icon: Lightbulb,
    details: [
      "Client consultation",
      "Requirements analysis",
      "Feasibility assessment",
      "Timeline planning"
    ],
    position: { x: 50, y: 0 },
    step: 1
  },
  {
    title: "Planning & Research",
    description: "Building the foundation",
    icon: FileSearch,
    details: [
      "Tech stack selection",
      "Architecture design",
      "Resource planning",
      "Risk analysis"
    ],
    position: { x: 100, y: 25 },
    step: 2
  },
  {
    title: "Development",
    description: "Crafting your solution",
    icon: Code2,
    details: [
      "Iterative development",
      "Progress updates",
      "Code documentation",
      "Version control"
    ],
    position: { x: 100, y: 65 },
    step: 3
  },
  {
    title: "Testing & QA",
    description: "Ensuring excellence",
    icon: TestTube,
    details: [
      "Unit testing",
      "Performance testing",
      "Browser testing",
      "Security checks"
    ],
    position: { x: 50, y: 90 },
    step: 4
  },
  {
    title: "Deployment",
    description: "Going live",
    icon: Rocket,
    details: [
      "Server setup",
      "Domain config",
      "SSL setup",
      "Monitoring"
    ],
    position: { x: 0, y: 65 },
    step: 5
  },
  {
    title: "Support & Pricing",
    description: "Ongoing partnership",
    icon: DollarSign,
    details: [
      "Flexible pricing",
      "Milestone payments",
      "24/7 support",
      "Updates & maintenance"
    ],
    position: { x: 0, y: 25 },
    step: 6
  }
];

const WorkflowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const drawPath = (start: WorkflowStep, end: WorkflowStep) => {
    const startX = start.position.x;
    const startY = start.position.y;
    const endX = end.position.x;
    const endY = end.position.y;

    return `M ${startX} ${startY} C ${(startX + endX) / 2} ${startY}, ${(startX + endX) / 2} ${endY}, ${endX} ${endY}`;
  };

  return (
    <section ref={ref} className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            My Development Workflow
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A systematic approach to delivering high-quality software solutions
          </motion.p>
        </div>

        {/* Desktop Flowchart */}
        <div className="hidden lg:block relative w-full aspect-[2/1] max-w-5xl mx-auto mb-32">
          {/* Connection Paths */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {workflowSteps.map((step, i) => {
              const nextStep = workflowSteps[(i + 1) % workflowSteps.length];
              return (
                <motion.path
                  key={`path-${i}`}
                  d={drawPath(step, nextStep)}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: i * 0.2 }}
                />
              );
            })}
          </svg>

          {/* Workflow Steps */}
          {workflowSteps.map((step, index) => (
            <motion.div
              key={`desktop-${step.title}`}
              className="absolute w-64 bg-white rounded-xl shadow-lg p-4 transform -translate-x-1/2 -translate-y-1/2 hover:shadow-xl transition-shadow"
              style={{
                left: `${step.position.x}%`,
                top: `${step.position.y}%`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-2">
                <div className="relative p-2 bg-emerald-100 rounded-lg mr-3">
                  {<step.icon className="w-5 h-5 text-emerald-600" />}
                  <div className="absolute -top-2 -left-2 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">{step.description}</p>
              
              <ul className="space-y-1">
                {step.details.map((detail, detailIndex) => (
                  <motion.li 
                    key={detailIndex}
                    className="flex items-start text-xs text-gray-600"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (detailIndex * 0.1) }}
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Vertical Layout */}
        <div className="lg:hidden space-y-4 mb-16">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={`mobile-${step.title}`}
              className="relative bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Connecting Line */}
              {index < workflowSteps.length - 1 && (
                <div className="absolute left-1/2 bottom-0 w-0.5 h-4 bg-emerald-500 transform translate-x-[-50%] translate-y-full" />
              )}
              
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    {<step.icon className="w-6 h-6 text-emerald-600" />}
                  </div>
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.li 
                        key={detailIndex}
                        className="flex items-start text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (detailIndex * 0.1) }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-600 mb-6">Here&apos;s how I bring your ideas to life</p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
          >
            <HeartHandshake className="w-5 h-5 mr-2" />
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowSection;
