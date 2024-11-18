import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HomePage/HeroSection';
import TechStack from '@/components/HomePage/TechStack';
import PortfolioLinks from '@/components/HomePage/PortfolioLinks';
import BlogList from '@/components/HomePage/BlogList';
import Logo from '@/components/Logo';
import ProjectShowcase from '@/components/HomePage/ProjectShowcase';
import FloatingChatButtons from '@/components/FloatingChatButtons';
import Footer from '@/components/Footer';
import WorkflowSection from '@/components/HomePage/WorkflowSection';

const IDEContactForm = dynamic(() => import('@/components/HomePage/IdeContactForm'), {
  loading: () => <div>Loading...</div>,
  ssr: true,
});

export default function HomePage(): JSX.Element {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Shared background pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 3px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 3px)
            `,
            backgroundSize: '40px 40px',
            mask: 'radial-gradient(circle at center, emerald 20%, transparent 80%)'
          }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />
        </div>
      </div>

      {/* Floating Chat Buttons - Now sticky */}
      <div className="fixed top-24 right-8 z-50 float-right md:mr-8">
        <FloatingChatButtons />
      </div>

      {/* Content */}
      <div className="relative z-20">
        {/* Creative Pattern Background */}
        <div className="fixed inset-0 -z-5 pointer-events-none overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                radial-gradient(#1E90FF 1px, transparent 1px),
                radial-gradient(#FFD700 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 20px 20px',
              opacity: 0.05
            }}
          />
          
          {/* Floating Shapes */}
          <div className="absolute top-0 right-0 w-96 h-96" 
            style={{
              background: 'radial-gradient(circle at center, #1E90FF 0%, transparent 70%)',
              opacity: 0.03,
              filter: 'blur(60px)',
              transform: 'translate(20%, -20%)'
            }}
          />
          
          <div className="absolute bottom-0 left-0 w-96 h-96" 
            style={{
              background: 'radial-gradient(circle at center, #FF4500 0%, transparent 70%)',
              opacity: 0.03,
              filter: 'blur(60px)',
              transform: 'translate(-20%, 20%)'
            }}
          />
          
          {/* Geometric Shapes */}
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E90FF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Navbar */}
        <Navbar />
        
        {/* Main content */}
        <div className="relative space-y-4 md:space-y-8">
          {/* Home section with Logo */}
          <section id="home" className="min-h-screen flex flex-col justify-center items-center transition-all duration-500 ease-out">
            <div className="container mx-auto px-4 space-y-4 animate-fade-in">
              <Logo className="w-[250px] h-auto mb-4 hover:scale-105 transition-transform duration-300" />
              <HeroSection />
            </div>
          </section>
          
          {/* Workflow Section */}
          <section id="workflow" className="min-h-screen transition-all duration-500 ease-out">
            <div className="container mx-auto px-4">
              <div className="transform hover:scale-[1.01] transition-all duration-300 ease-in-out">
                <WorkflowSection />
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section id="tech" className="relative z-30 min-h-screen py-20 flex items-center justify-center transition-all duration-500 ease-out">
            <div className="container mx-auto px-4">
              <div className="transform hover:scale-[1.01] transition-all duration-300 ease-in-out">
                <TechStack />
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" className="min-h-screen transition-all duration-500 ease-out">
            <div className="container mx-auto px-4">
              <div className="transform hover:scale-[1.01] transition-all duration-300 ease-in-out">
                <BlogList />
              </div>
            </div>
          </section>

          {/* Portfolio Links Section */}
          <section id="portfolio" className="min-h-screen transition-all duration-500 ease-out">
            <div className="container mx-auto px-4">
              <div className="transform hover:scale-[1.01] transition-all duration-300 ease-in-out">
                <PortfolioLinks />
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section id="contact" className="min-h-screen transition-all duration-500 ease-out">
            <div className="container mx-auto px-4">
              <div className="transform hover:scale-[1.01] transition-all duration-300 ease-in-out">
                <Suspense fallback={<div>Loading contact form...</div>}>
                  <IDEContactForm />
                </Suspense>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}