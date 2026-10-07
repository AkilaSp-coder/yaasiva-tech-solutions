import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  Bot, 
  Cpu, 
  Layout, 
  ShoppingBag, 
  ArrowRight, 
  CheckCircle2, 
  X,
  ExternalLink,
  Code2,
  Sparkles
} from 'lucide-react';
import { ServiceItem, ServiceId } from '../types';

interface ServicesSectionProps {
  onSelectServiceForContact?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'web-development',
      title: 'Web Development',
      shortDesc: 'Ultra-fast, responsive web applications engineered with modern cloud frameworks and server-rendered micro-frontends.',
      fullDesc: 'We construct high-velocity web platforms engineered for maximum concurrency, sub-second First Contentful Paint (FCP), and uncompromising responsiveness. From complex enterprise SaaS portals to interactive WebGL experiences, our web architectures are built on clean code, automated CI/CD pipelines, and continuous optimization.',
      iconName: 'Globe',
      tagline: 'Modern Full-Stack & Cloud Architecture',
      keyFeatures: [
        'React 19, Next.js App Router & Vite Architectures',
        'Server-Side Rendering (SSR) & Dynamic Edge Caching',
        'API Gateway & Resilient Micro-Frontend Design',
        'Lighthouse 95+ Core Web Vitals Optimization',
      ],
      techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'GraphQL', 'Docker'],
      deliverables: [
        'Production Web Application Source Code',
        'Cloud Deployment Infrastructure as Code (IaC)',
        'Comprehensive Test Suite & CI/CD Pipeline',
        'Performance & Security Audit Report',
      ],
      metrics: '3.4x Faster Average Load Times',
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Apps',
      shortDesc: 'Cross-platform iOS and Android applications combining native fluid performance with offline-first synchronizations.',
      fullDesc: 'We develop native and high-performance cross-platform mobile applications that provide intuitive user experiences. Leveraging React Native, Flutter, and native Swift/Kotlin modules, our mobile products feature offline synchronization, biometric authentication, push notification engines, and on-device AI model inferencing.',
      iconName: 'Smartphone',
      tagline: 'Native iOS & Android Engineering',
      keyFeatures: [
        'Cross-Platform Codebases with 90%+ Code Sharing',
        'Offline-First Local Database & Conflict Resolution',
        'Biometric Auth, Apple Pay & Google Wallet Integration',
        'Edge AI Inference & CoreML / TensorFlow Lite',
      ],
      techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'SQLite', 'Fastlane'],
      deliverables: [
        'App Store & Google Play Store Ready Builds',
        'Complete Multi-Platform Codebase',
        'Automated Release Pipeline Configuration',
        'Deep Linking & Push Notification Backend',
      ],
      metrics: '4.9 Star Average App Store Rating',
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      shortDesc: 'Custom LLM fine-tuning, autonomous agentic workflows, computer vision, and predictive machine learning models.',
      fullDesc: 'We transform theoretical artificial intelligence into high-ROI enterprise production workflows. Whether fine-tuning open-source LLMs, building multi-agent autonomous chains, or implementing high-accuracy computer vision for diagnostics and quality control, our AI engineering is grounded in low-latency APIs and strict enterprise data privacy.',
      iconName: 'Bot',
      tagline: 'Autonomous Agents & Intelligent Systems',
      keyFeatures: [
        'Enterprise RAG & Domain Fine-Tuned LLMs',
        'Autonomous Multi-Agent Task Orchestration',
        'Computer Vision, OCR & Visual Object Tracking',
        'Zero-Data Retention Enterprise AI Security',
      ],
      techStack: ['PyTorch', 'FastAPI', 'LangChain', 'OpenAI', 'Gemini API', 'vLLM', 'Qdrant / Milvus'],
      deliverables: [
        'Custom Fine-Tuned Model Weights & Adapter Files',
        'Low-Latency Inference Microservice API',
        'Vector Database & Semantic Indexing Topology',
        'Safety & Hallucination Mitigation Guardrails',
      ],
      metrics: '82% Reduction in Manual Workflows',
    },
    {
      id: 'custom-software',
      title: 'Custom Software',
      shortDesc: 'Tailored enterprise ERPs, distributed microservices, streaming pipelines, and mission-critical backend systems.',
      fullDesc: 'Off-the-shelf software often forces businesses into rigid constraints. We architect and build custom distributed systems that align precisely with your proprietary business logic. Built with domain-driven design, event-driven streaming, and modular services, our custom solutions scale gracefully alongside your growth.',
      iconName: 'Cpu',
      tagline: 'Distributed Systems & Enterprise Platforms',
      keyFeatures: [
        'Event-Driven Microservices with Kafka & RabbitMQ',
        'High-Throughput Streaming & Real-Time WebSockets',
        'Custom ERP, CRM & Logistics Orchestration',
        'Multi-Tenant Role-Based Access Control (RBAC)',
      ],
      techStack: ['Go', 'Rust', 'Node.js', 'PostgreSQL', 'Redis', 'Kafka', 'Kubernetes'],
      deliverables: [
        'Scalable Backend Architecture & Source Code',
        'Interactive OpenAPI / Swagger Documentation',
        'Database Schema & Automated Migration Scripts',
        'Zero-Downtime Deployment Runbooks',
      ],
      metrics: '99.99% Core Service Reliability',
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      shortDesc: 'Intuitive, futuristic user interfaces and design systems engineered for cognitive clarity and visual prestige.',
      fullDesc: 'Great design is the intersection of cognitive psychology, technical elegance, and brand distinction. We build comprehensive design systems, interactive prototypes, and spatial user interfaces that minimize cognitive load while maximizing product conversion and user delight.',
      iconName: 'Layout',
      tagline: 'Human-Centered Spatial & Digital Design',
      keyFeatures: [
        'Atomic Design Systems in Figma with Code Tokens',
        'Micro-Interactions, 3D Spatial Renders & Fluid Motion',
        'WCAG 2.1 AAA Accessibility & Usability Testing',
        'Interactive Production-Ready Prototyping',
      ],
      techStack: ['Figma', 'Tokens Studio', 'Framer', 'Three.js / WebGL', 'Tailwind CSS', 'Storybook'],
      deliverables: [
        'Complete Multi-Theme Figma Design System',
        'Responsive Component Library Specification',
        'High-Fidelity Interactive Clickable Prototypes',
        'Developer Hand-off Documentation & Motion Curves',
      ],
      metrics: '+64% User Engagement & Task Completion',
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce',
      shortDesc: 'High-converting headless commerce, 3D product visualizers, and AI-driven personalized shopping experiences.',
      fullDesc: 'We construct modern digital storefronts that turn visitors into loyal customers. By combining headless architectures, 3D interactive product inspection, AI recommendation carousels, and localized checkout flows, our e-commerce solutions consistently outperform standard template stores in conversion and average order value.',
      iconName: 'ShoppingBag',
      tagline: 'Headless Commerce & 3D Visualizers',
      keyFeatures: [
        'Headless Commerce with Shopify Plus & MedusaJS',
        'Interactive 360° 3D WebGL Product Customizers',
        'AI Personalized Upsell & Predictive Search',
        'Global Multi-Currency & Omnichannel Checkout',
      ],
      techStack: ['Shopify Storefront API', 'Medusa', 'Next.js', 'Three.js', 'Stripe', 'Algolia'],
      deliverables: [
        'Headless Storefront Frontend & Edge Hosting',
        'Product Information Management (PIM) Integration',
        '3D Interactive Product Models & Canvas Viewer',
        'Analytics & Conversion Funnel Tracking Setup',
      ],
      metrics: '+42% Increase in Average Order Value',
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe': return Globe;
      case 'Smartphone': return Smartphone;
      case 'Bot': return Bot;
      case 'Cpu': return Cpu;
      case 'Layout': return Layout;
      case 'ShoppingBag': return ShoppingBag;
      default: return Code2;
    }
  };

  const handleConsultService = (service: ServiceItem) => {
    setSelectedService(null);
    onSelectServiceForContact?.(service.title);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
              <span>Core Capabilities</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400 font-normal">Full-Lifecycle Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
              Comprehensive Technology Solutions Built for Tomorrow
            </h2>
          </div>

          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            From initial artificial intelligence architecture to scaled deployment, we bring elite engineering to every phase of your product lifecycle.
          </p>
        </div>

        {/* 3D Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group relative glass-panel rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1.5 shadow-xl shadow-black/20"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Top glow border on hover */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-cyan-400 group-hover:text-cyan-300 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-cyan-300/80 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/5">
                      {service.metrics}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-cyan-400/90 mb-1">
                    {service.tagline}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300/90 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.06]">
                    {service.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors focus-visible:ring-1 focus-visible:ring-cyan-400 rounded py-1"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => handleConsultService(service)}
                    className="text-xs font-medium text-slate-400 hover:text-white px-2.5 py-1 rounded-md bg-white/[0.03] hover:bg-white/10 transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Architecture Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close service modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-8">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
                {selectedService.tagline}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {selectedService.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedService.fullDesc}
              </p>
            </div>

            {/* Architecture Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Core Features */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Key Capabilities
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {selectedService.keyFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  Enterprise Deliverables
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {selectedService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="mb-8">
              <div className="text-xs font-mono text-slate-400 mb-2">
                Engineered with:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedService.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="text-xs text-slate-400 font-mono">
                Outcome Metric: <span className="text-cyan-300 font-semibold">{selectedService.metrics}</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => handleConsultService(selectedService)}
                  className="btn-glow-cyan w-full sm:w-auto px-5 py-2 text-xs font-semibold text-white rounded-lg flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <span>Build with {selectedService.title}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
