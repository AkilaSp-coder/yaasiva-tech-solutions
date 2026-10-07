import React, { useState } from 'react';
import { Cpu, Layers, TrendingUp, ShieldCheck, Code2, Database, Cloud, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeStackTab, setActiveStackTab] = useState<'all' | 'ai' | 'web' | 'cloud' | 'mobile'>('all');

  const pillars = [
    {
      index: '01',
      title: 'Innovate',
      tagline: 'Applied Artificial Intelligence & Research',
      description:
        'We translate cutting-edge AI research into pragmatic commercial advantages. From autonomous task agents and custom fine-tuned LLMs to real-time computer vision, we invent intelligent workflows that keep our partners ahead of the curve.',
      icon: Cpu,
      accentColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      bgGlow: 'from-cyan-500/10 to-transparent',
      highlights: ['Autonomous Agents & RAG', 'Computer Vision & Biometrics', 'Predictive Recommendation Engines'],
    },
    {
      index: '02',
      title: 'Build',
      tagline: 'Resilient Engineering & Zero-Debt Systems',
      description:
        'We craft software built to last. Our engineering philosophy is grounded in type-safe languages, micro-frontend architecture, zero-trust cloud topologies, and sub-100 millisecond response benchmarks under heavy concurrent traffic.',
      icon: Layers,
      accentColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
      bgGlow: 'from-blue-500/10 to-transparent',
      highlights: ['Distributed Cloud Microservices', 'Sub-second Web & Mobile Native', 'Comprehensive Test Coverage (>90%)'],
    },
    {
      index: '03',
      title: 'Grow',
      tagline: 'Measurable Velocity & Commercial Impact',
      description:
        'Technology is a vehicle for compounding enterprise value. Every line of code, cloud blueprint, and machine learning model we deploy is directly indexed to operational efficiency, user retention, and accelerated time-to-market.',
      icon: TrendingUp,
      accentColor: 'text-purple-400',
      borderColor: 'border-purple-500/30',
      bgGlow: 'from-purple-500/10 to-transparent',
      highlights: ['Predictable Sprint Velocity', 'Enterprise Cloud Cost Optimization', 'Dedicated Post-Launch Engineering SLA'],
    },
  ];

  const technologies = [
    { name: 'PyTorch / TensorFlow', category: 'ai', level: 'Model Training & Inferencing' },
    { name: 'LangChain & LlamaIndex', category: 'ai', level: 'RAG & Autonomous Agents' },
    { name: 'OpenAI & Gemini APIs', category: 'ai', level: 'Foundation Model Integration' },
    { name: 'React 19 & Next.js', category: 'web', level: 'High-Performance Frontend' },
    { name: 'TypeScript & Node.js', category: 'web', level: 'Type-Safe Full Stack' },
    { name: 'Tailwind CSS & Motion', category: 'web', level: 'Fluid Modern Design Systems' },
    { name: 'React Native & Flutter', category: 'mobile', level: 'Native iOS & Android' },
    { name: 'FastAPI & Python', category: 'ai', level: 'Microsecond Model Serving' },
    { name: 'Go & Rust Services', category: 'cloud', level: 'Ultra-High Throughput Systems' },
    { name: 'PostgreSQL & pgvector', category: 'cloud', level: 'Relational & Semantic Embeddings' },
    { name: 'Docker & Kubernetes', category: 'cloud', level: 'Cloud-Native Containerization' },
    { name: 'AWS & Google Cloud', category: 'cloud', level: 'Zero-Trust Infrastructure' },
  ];

  const filteredTechnologies =
    activeStackTab === 'all'
      ? technologies
      : technologies.filter((tech) => tech.category === activeStackTab);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070B19]/70">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span>About YAASIVA TECH SOLUTIONS</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400 font-normal">Our DNA & Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 [text-wrap:balance]">
            Engineering Intelligent Systems with Relentless Craftsmanship
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            YAASIVA TECH SOLUTIONS was founded to bridge the gap between high-level artificial intelligence research and production-grade software. We partner with ambitious startups and forward-thinking enterprises worldwide to turn complex technological challenges into sustainable market leadership.
          </p>
        </div>

        {/* The Three Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.index}
                className="relative glass-panel rounded-2xl p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 shadow-lg shadow-black/20 group"
              >
                {/* Subtle top indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold font-mono text-slate-600 group-hover:text-cyan-400 transition-colors">
                    {pillar.index}
                  </span>
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${pillar.accentColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 font-display">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-medium text-cyan-300/80 mb-4 font-mono">
                    {pillar.tagline}
                  </div>
                  <p className="text-sm text-slate-300/90 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] space-y-2">
                  {pillar.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
                {/* Founder & CEO */}
        <div className="mb-20">
          <div className="glass-panel rounded-2xl p-7 lg:p-8 border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                  Founder & CEO
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Akila Mariappan
                </h3>

                <p className="text-slate-300 leading-relaxed max-w-2xl">
                  Founder & CEO of YAASIVA TECH SOLUTIONS, focused on building
                  innovative AI-powered and software solutions for modern businesses.
                </p>
              </div>

              <a
                href="https://www.linkedin.com/in/yaa-siva-b40472441"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 font-semibold hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 whitespace-nowrap"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>
        </div>

        
        {/* Technology Ecosystem Showcase */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
                Battle-Tested Stack
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Modern Technologies Engineered for Scale
              </h3>
            </div>

            {/* Interactive Filter Tabs (functional buttons) */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10 self-start md:self-auto">
              <button
                onClick={() => setActiveStackTab('all')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeStackTab === 'all'
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                All Tech
              </button>
              <button
                onClick={() => setActiveStackTab('ai')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeStackTab === 'ai'
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                AI & Machine Learning
              </button>
              <button
                onClick={() => setActiveStackTab('web')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeStackTab === 'web'
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Web & Frontend
              </button>
              <button
                onClick={() => setActiveStackTab('mobile')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeStackTab === 'mobile'
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Mobile & Edge
              </button>
              <button
                onClick={() => setActiveStackTab('cloud')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeStackTab === 'cloud'
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Cloud & Data
              </button>
            </div>
          </div>

          {/* Technology Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredTechnologies.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
              >
                <div className="font-semibold text-white group-hover:text-cyan-300 transition-colors text-sm">
                  {tech.name}
                </div>
                <div className="text-xs text-slate-400 mt-2 font-mono">
                  {tech.level}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
