import React from 'react';
import { ShieldCheck, Zap, Lock, Headphones, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-[#070B19]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span>The YAASIVA Advantage</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400 font-normal">Why Visionary Leaders Partner with Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 [text-wrap:balance]">
            Built Different. Engineered for Dominance.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We reject fragile boilerplate templates and superficial wrappers. We architect defensible, high-performance technology moats that empower your enterprise to lead your sector.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Deep AI Specialization (Col-span 7) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-7 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Sparkles className="w-6 h-6" />
                </span>
                <span className="text-xs font-mono text-cyan-300/80 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                  Deep AI Specialization
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                Proprietary AI Engineering Beyond Superficial Wrappers
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Most agencies simply connect a third-party chat endpoint. YAASIVA engineers full-pipeline AI: fine-tuning domain models, building deterministic safety guardrails, orchestrating autonomous agentic tool calls, and quantizing neural weights for sub-100ms inference.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/[0.08] text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Custom RAG Pipelines</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Autonomous Agents</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sub-100ms Inference</span>
              </div>
            </div>
          </div>

          {/* Bento Item 2: 100% IP & Code Ownership (Col-span 5) */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-7 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  <Lock className="w-6 h-6" />
                </span>
                <span className="text-xs font-mono text-blue-300/80 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                  Zero Lock-In
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                100% Intellectual Property & Source Ownership
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                You retain complete, unencumbered ownership of all custom source code, trained neural model weights, database schemas, and architectural documentation from day one.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] text-xs text-slate-400 font-mono">
              Unrestricted Commercial & Enterprise Licensing
            </div>
          </div>

          {/* Bento Item 3: Zero-Trust Security (Col-span 4) */}
          <div className="lg:col-span-4 glass-panel rounded-2xl p-7 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 w-fit mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                Bank-Grade Zero-Trust Security
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Architected with defense-in-depth principles: end-to-end encryption at rest and in transit, automated vulnerability pipelines, strict RBAC, and zero data leakage.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] text-xs text-cyan-300/90 font-mono">
              OWASP & SOC-2 Compliant Topology
            </div>
          </div>

          {/* Bento Item 4: Sub-Second Concurrency & High Performance (Col-span 4) */}
          <div className="lg:col-span-4 glass-panel rounded-2xl p-7 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 w-fit mb-4">
                <Zap className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                Extreme Velocity & Concurrency
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Engineered with typed compilers, edge streaming, and connection-pooled microservices tested to withstand 50,000+ requests per second without latency degradation.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] text-xs text-cyan-300/90 font-mono">
              99.98% High-Availability SLA
            </div>
          </div>

          {/* Bento Item 5: Direct Senior Engineering Access (Col-span 4) */}
          <div className="lg:col-span-4 glass-panel rounded-2xl p-7 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit mb-4">
                <Headphones className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                Dedicated Senior Engineering SLA
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Direct Slack/Teams channel with senior software architects and AI researchers. No junior relay, no bureaucratic ticketing delays, and sub-4-hour emergency SLA.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] text-xs text-emerald-400 font-mono">
              24/7 Global Incident Response
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
