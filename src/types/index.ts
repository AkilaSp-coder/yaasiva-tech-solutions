export type ServiceId = 
  | 'web-development' 
  | 'mobile-apps' 
  | 'ai-solutions' 
  | 'custom-software' 
  | 'ui-ux' 
  | 'ecommerce';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tagline: string;
  keyFeatures: string[];
  techStack: string[];
  deliverables: string[];
  metrics: string;
}

export type ProjectCategory = 'all' | 'ai' | 'web' | 'mobile' | 'ecommerce';

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  techStack: string[];
  year: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
  deliverables: string[];
  keyHighlight: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  metricLabel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}
