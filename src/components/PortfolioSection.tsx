import React, { useState } from 'react';
import { ExternalLink, ArrowRight, X, CheckCircle2, TrendingUp, Layers, Cpu } from 'lucide-react';
import { PortfolioProject, ProjectCategory } from '../types';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const projects: PortfolioProject[] = [
    {
      id: 'aegis-ai-agents',
      title: 'Aegis AI — Autonomous Enterprise Agent Platform',
      client: 'Aegis Global Intelligence',
      category: 'ai',
      categoryLabel: 'Artificial Intelligence',
      description: 'Distributed multi-agent pipeline orchestrating autonomous document intelligence, compliance audits, and automated reconciliation across 14 enterprise data warehouses.',
      image: '/src/assets/images/portfolio_ai_agent_platform_1790761095099.jpg',
      metrics: [
        { label: 'Manual Audit Reduction', value: '78%' },
        { label: 'Inference Latency', value: '< 92ms' },
        { label: 'Weekly Records Handled', value: '4.2M' },
      ],
      challenge: 'The enterprise client processed over 4 million unstructured financial and regulatory records weekly, requiring 40+ full-time analysts and suffering a 48-hour audit turnaround delay.',
      solution: 'We engineered a resilient multi-agent architecture using fine-tuned open weights, semantic vector clustering, and deterministic validation guardrails with complete provenance tracking.',
      techStack: ['PyTorch', 'vLLM', 'FastAPI', 'Qdrant Vector DB', 'React 19', 'PostgreSQL', 'Docker'],
      year: '2026',
    },
    {
      id: 'horizon-cloud-fintech',
      title: 'Horizon Cloud — High-Throughput Financial Analytics',
      client: 'Horizon Capital & Treasury',
      category: 'web',
      categoryLabel: 'Web & Distributed Cloud',
      description: 'Institutional-grade treasury execution and predictive liquidity monitoring dashboard serving 120,000 active concurrent enterprise transactions.',
      image: '/src/assets/images/portfolio_fintech_cloud_1790761107767.jpg',
      metrics: [
        { label: 'Peak Concurrency', value: '120k' },
        { label: 'Sub-second UI Paint', value: '0.4s' },
        { label: 'Service Uptime SLA', value: '99.995%' },
      ],
      challenge: 'Legacy analytics software experienced latency spikes up to 4.2 seconds during high market volatility, threatening trading execution accuracy.',
      solution: 'YAASIVA engineered a Next.js App Router frontend with WebAssembly acceleration, WebSocket streaming channels, and a Go microservice event bus.',
      techStack: ['Next.js', 'Go', 'WebAssembly', 'WebSockets', 'Tailwind CSS', 'Redis', 'AWS ECS'],
      year: '2025',
    },
    {
      id: 'synapse-biometric-mobile',
      title: 'Synapse Vision — Mobile Biometric AI Suite',
      client: 'Synapse HealthTech Inc.',
      category: 'mobile',
      categoryLabel: 'Mobile App & Edge AI',
      description: 'Cross-platform iOS and Android medical vision scanner providing real-time dermatological analysis and patient telemetry directly on-device without cloud transmission.',
      image: '/src/assets/images/portfolio_mobile_neural_1790761130627.jpg',
      metrics: [
        { label: 'Diagnostic Precision', value: '96.8%' },
        { label: 'On-Device Inference', value: '45ms' },
        { label: 'App Store Rating', value: '4.9 ★' },
      ],
      challenge: 'Strict HIPAA and GDPR regulations prevented raw medical imagery from leaving user devices for cloud diagnostics, requiring high-accuracy ML models to run locally.',
      solution: 'We quantized a custom vision transformer model to 8-bit precision, integrating it natively into a React Native framework using CoreML and TensorFlow Lite hardware accelerators.',
      techStack: ['React Native', 'CoreML', 'TensorFlow Lite', 'SQLite', 'TypeScript', 'Tailwind'],
      year: '2026',
    },
    {
      id: 'aura-luxury-ecommerce',
      title: 'Aura Luxury — 3D Spatial E-Commerce Platform',
      client: 'Aura Atelier Paris',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce & 3D Spatial',
      description: 'Next-generation luxury digital boutique featuring photorealistic 3D interactive WebGL garment inspection and an AI hyper-personalized styling assistant.',
      image: '/src/assets/images/portfolio_ecommerce_luxury_1790761144149.jpg',
      metrics: [
        { label: 'Checkout Conversion', value: '+68%' },
        { label: 'Session Dwell Time', value: '4.8 min' },
        { label: 'Return Rate Reduction', value: '-34%' },
      ],
      challenge: 'High-end luxury goods experienced high abandonment rates due to static 2D imagery failing to convey material textures, drape, and tactile scale.',
      solution: 'Built an interactive Three.js 3D model customizer integrated seamlessly with headless Shopify Plus, dynamic lighting controls, and localized instant checkout.',
      techStack: ['Three.js', 'React', 'Shopify Storefront API', 'Tailwind CSS', 'GLTF / Draco', 'Vercel Edge'],
      year: '2025',
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-[#070B19]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
              <span>Interactive Portfolio</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400 font-normal">Real Business Impact</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
              Proven Systems Deployed at Scale
            </h2>
          </div>

          {/* Interactive Filter Tabs (Functional Button Controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveCategory('ai')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'ai'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              AI & Agents
            </button>
            <button
              onClick={() => setActiveCategory('web')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'web'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Web & Cloud
            </button>
            <button
              onClick={() => setActiveCategory('mobile')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'mobile'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Mobile
            </button>
            <button
              onClick={() => setActiveCategory('ecommerce')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'ecommerce'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              E-Commerce
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between shadow-xl shadow-black/30"
            >
              {/* Media Thumbnail Container with Zero-Broken-Image Fallback */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Styled Fallback Container if image fails
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-tr', 'from-navy-900', 'to-slate-900');
                    }
                  }}
                />
                
                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B19] via-[#070B19]/30 to-transparent" />

                {/* Top metadata tags */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-mono text-cyan-300 border border-white/10">
                    {project.categoryLabel}
                  </span>
                  <span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-white/10">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-1">
                    Client: {project.client}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Quantitative Proof Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-4 pb-5 border-t border-white/[0.08] bg-white/[0.01] rounded-xl px-3 my-2">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-cyan-400 font-mono tabular-nums">
                        {metric.value}
                      </div>
                      <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer action */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[11px] font-mono text-slate-400 self-center">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors focus-visible:ring-1 focus-visible:ring-cyan-400 px-2 py-1 rounded"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl max-h-[92vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close case study modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative aspect-[16/8] rounded-xl overflow-hidden mb-6 bg-slate-900 border border-white/10">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B19] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  {activeModalProject.categoryLabel} · {activeModalProject.year}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activeModalProject.title}
                </h3>
              </div>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6 text-center">
              {activeModalProject.metrics.map((m, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-bold text-cyan-400 font-mono tabular-nums">
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Case Study Challenge & Solution */}
            <div className="space-y-5 mb-6 text-sm text-slate-300">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  The Business Challenge
                </h4>
                <p className="leading-relaxed text-slate-300/90 pl-3 border-l-2 border-slate-700">
                  {activeModalProject.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  YAASIVA Architectural Solution
                </h4>
                <p className="leading-relaxed text-slate-300/90 pl-3 border-l-2 border-cyan-500/50">
                  {activeModalProject.solution}
                </p>
              </div>
            </div>

            {/* Full Stack Chips */}
            <div className="mb-6">
              <div className="text-xs font-mono text-slate-400 mb-2">Technologies Used:</div>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.techStack.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-lg bg-white/5 hover:bg-white/10"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setActiveModalProject(null)}
                className="btn-glow-cyan px-5 py-2 text-xs font-semibold text-white rounded-lg flex items-center gap-1.5"
              >
                <span>Discuss Similar Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
