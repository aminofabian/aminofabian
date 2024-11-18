// Centralized imports for commonly used components and utilities
import dynamic from 'next/dynamic';

// Components with dynamic imports
export const DynamicHeroSection = dynamic(() => import('@/components/HomePage/HeroSection'), {
  loading: () => null,
  ssr: true
});

export const DynamicPortfolioLinks = dynamic(() => import('@/components/HomePage/PortfolioLinks'), {
  loading: () => null,
  ssr: true
});

export const DynamicWorkflowSection = dynamic(() => import('@/components/HomePage/WorkflowSection'), {
  loading: () => null,
  ssr: true
});

export const DynamicIdeContactForm = dynamic(() => import('@/components/HomePage/IdeContactForm'), {
  loading: () => null,
  ssr: false
});

export const DynamicNewsletterCard = dynamic(() => import('@/components/NewsletterCard'), {
  loading: () => null,
  ssr: false
});

// Icons with dynamic imports
export const DynamicIcons = {
  Briefcase: dynamic(() => import('lucide-react').then(mod => mod.Briefcase)),
  Terminal: dynamic(() => import('lucide-react').then(mod => mod.Terminal)),
  ExternalLink: dynamic(() => import('lucide-react').then(mod => mod.ExternalLink)),
  Code2: dynamic(() => import('lucide-react').then(mod => mod.Code2)),
  Sparkles: dynamic(() => import('lucide-react').then(mod => mod.Sparkles)),
  ArrowRight: dynamic(() => import('lucide-react').then(mod => mod.ArrowRight)),
  Send: dynamic(() => import('lucide-react').then(mod => mod.Send)),
  X: dynamic(() => import('lucide-react').then(mod => mod.X)),
  CheckCircle: dynamic(() => import('lucide-react').then(mod => mod.CheckCircle))
};
