import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports for client-side components
const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="h-16" />,
  ssr: false,
});

const Logo = dynamic(() => import('@/components/Logo'), {
  loading: () => <div className="w-[250px] h-[80px]" />,
  ssr: false,
});

const FloatingChatButtons = dynamic(() => import('@/components/FloatingChatButtons'), {
  loading: () => null,
  ssr: false,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-16" />,
  ssr: false,
});

const {
  DynamicHeroSection,
  DynamicPortfolioLinks,
  DynamicWorkflowSection,
  DynamicIdeContactForm,
  DynamicNewsletterCard,
  DynamicTechStack,
  DynamicBlogList
} = {
  DynamicHeroSection: dynamic(() => import('@/components/HomePage/HeroSection'), {
    loading: () => <div className="min-h-screen flex items-center justify-center">Loading hero section...</div>,
    ssr: false,
  }),
  DynamicPortfolioLinks: dynamic(() => import('@/components/HomePage/PortfolioLinks'), {
    loading: () => <div className="min-h-screen flex items-center justify-center">Loading portfolio...</div>,
    ssr: false,
  }),
  DynamicWorkflowSection: dynamic(() => import('@/components/HomePage/WorkflowSection'), {
    loading: () => <div className="min-h-screen flex items-center justify-center">Loading workflow section...</div>,
    ssr: false,
  }),
  DynamicIdeContactForm: dynamic(() => import('@/components/HomePage/ContactForm/IdeContactForm'), {
    loading: () => <div className="w-full h-96 flex items-center justify-center">Loading contact form...</div>,
    ssr: false,
  }),
  DynamicNewsletterCard: dynamic(() => import('@/components/NewsletterCard'), {
    loading: () => null,
    ssr: false,
  }),
  DynamicTechStack: dynamic(() => import('@/components/HomePage/TechStack'), {
    loading: () => <div className="min-h-screen flex items-center justify-center">Loading tech stack...</div>,
    ssr: false,
  }),
  DynamicBlogList: dynamic(() => import('@/components/HomePage/BlogList'), {
    loading: () => <div className="min-h-screen flex items-center justify-center">Loading blog posts...</div>,
    ssr: false,
  }),
};

export default function HomePage(): JSX.Element {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Shared background pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background dark:from-gray-950 dark:to-gray-900">
          {/* Grid lines with perspective */}
          <div className="absolute inset-0 blur-[0.5px] dark:blur-[1px] origin-center transform-gpu perspective-[1000px] rotate-x-12" style={{
            backgroundImage: `
              linear-gradient(to right, var(--grid-line-color) 1.5px, transparent 1.5px),
              linear-gradient(to bottom, var(--grid-line-color) 1.5px, transparent 1.5px)
            `,
            backgroundSize: '40px 40px',
            mask: 'radial-gradient(circle at center, var(--mask-color) 30%, transparent 70%)',
            transform: 'scale(1.5) rotateX(12deg) translateY(5%)'
          }} />

          {/* Hexagonal pattern with floating effect */}
          <div 
            className="absolute inset-0 opacity-[0.12] dark:opacity-[0.5] rounded-3xl blur-[0.5px] dark:blur-[1.5px] origin-center transform-gpu perspective-[1000px]" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' stroke-width='3' stroke='%2310B981' fill='none' opacity='.3'/%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px',
              transform: 'scale(1.2) rotateX(12deg) translateY(-2%)',
              animation: 'float 20s ease-in-out infinite'
            }} 
          />

          {/* Added subtle depth gradient */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40 dark:from-transparent dark:via-gray-900/30 dark:to-gray-900/60"
            style={{
              transform: 'translateZ(-10px)'
            }}
          />
        </div>
      </div>

      {/* Floating Chat Buttons */}
      <div className="fixed top-24 right-8 z-50 float-right md:mr-8">
        <Suspense fallback={null}>
          <FloatingChatButtons />
        </Suspense>
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
        <Suspense fallback={<div className="h-16" />}>
          <Navbar />
        </Suspense>
        
        {/* Main content */}
        <div className="relative space-y-4 md:space-y-8 rounded-3xl">
          {/* Home section with Logo */}
          <section id="home" className="min-h-screen flex flex-col justify-center items-center transition-all duration-500 ease-out">
            <div className="container mx-auto px-4 space-y-4 animate-fade-in">
              <Suspense fallback={<div className="w-[250px] h-[80px]" />}>
                <Logo className="w-[250px] h-auto mb-4 hover:scale-105 transition-transform duration-300" />
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
                <DynamicHeroSection />
              </Suspense>
            </div>
          </section>
          
          {/* Workflow Section */}
          <section id="workflow" className="min-h-screen transition-all duration-500 ease-out">
            <div className="container mx-auto px-4">
              <div className="transform hover:scale-[1.01] transition-all duration-300 ease-in-out">
                <Suspense fallback={<div>Loading...</div>}>
                  <DynamicWorkflowSection />
                </Suspense>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section id="tech" className="relative z-30 min-h-screen py-20 flex items-center justify-center transition-all duration-500 ease-out">
            <div className="container mx-auto px-4">
              <div className="transform hover:scale-[1.01] transition-all duration-300 ease-in-out">
                <Suspense fallback={<div>Loading...</div>}>
                  <DynamicTechStack />
                </Suspense>
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" className="min-h-screen transition-all duration-500 ease-out">
            <div className="container mx-auto px-4">
              <div className="transform hover:scale-[1.01] transition-all duration-300 ease-in-out">
                <Suspense fallback={<div>Loading...</div>}>
                  <DynamicBlogList />
                </Suspense>
              </div>
            </div>
          </section>

          {/* Portfolio Links Section */}
          <section id="portfolio" className="py-20 transition-all duration-500 ease-out">
            <div className="container mx-auto px-4">
              <div className="transform hover:scale-[1.01] transition-all duration-300 ease-in-out">
                <Suspense fallback={<div>Loading...</div>}>
                  <DynamicPortfolioLinks />
                </Suspense>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section id="contact" className="py-20 transition-all duration-500 ease-out">
            <div className="container mx-auto px-4">
              <div className="transform hover:scale-[1.01] transition-all duration-300 ease-in-out">
                <Suspense fallback={<div>Loading...</div>}>
                  <DynamicIdeContactForm />
                </Suspense>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Suspense fallback={null}>
        <FloatingChatButtons />
      </Suspense>
      <Suspense fallback={null}>
        <DynamicNewsletterCard />
      </Suspense>
      <Suspense fallback={<div className="h-16" />}>
        <Footer />
      </Suspense>
    </main>
  );
}