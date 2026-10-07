import React from 'react';
import { ArrowRight, Sparkles, Terminal, ChevronDown, CheckCircle2 } from 'lucide-react';
import { SphereCanvas } from './SphereCanvas';

interface HeroProps {
  onExploreClick?: () => void;
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background radial spotlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full radial-glow-cyan pointer-events-none opacity-70" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] rounded-full radial-glow-purple pointer-events-none opacity-60" />
      
      {/* Grid line accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography, Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            
            {/* Tagline kicker with clean typographic dot separators */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-semibold text-white tracking-wider">YAASIVA TECH SOLUTIONS</span>
              <span aria-hidden="true" className="text-cyan-500/60">·</span>
              <span className="text-cyan-200/90 font-mono uppercase tracking-widest text-[11px] sm:text-xs">
                Innovate · Build · Grow
              </span>
            </div>

            {/* Hero Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
              Building the Future with{' '}
              <span className="text-gradient-cyan block sm:inline">
                Intelligent Technology
              </span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed">
              We design and deploy next-generation artificial intelligence, mission-critical web applications, high-performance mobile systems, and bespoke cloud architectures engineered for exponential enterprise growth.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#services"
                onClick={onExploreClick}
                className="btn-glow-cyan inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white text-sm shadow-lg shadow-cyan-500/20 group"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 transition-all text-sm backdrop-blur-sm"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Schedule Consultation</span>
              </a>
            </div>

            {/* Proof Metrics Bar */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums tracking-tight">
                  99.98<span className="text-cyan-400 text-lg sm:text-xl">%</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Uptime SLA Guaranteed</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums tracking-tight">
                  45<span className="text-cyan-400 text-lg sm:text-xl">+</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Enterprise Deployments</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums tracking-tight">
                  &lt; 85<span className="text-cyan-400 text-lg sm:text-xl">ms</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">AI Inference Latency</div>
              </div>
            </div>

            {/* Trust highlights */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>End-to-End Source Ownership</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero-Trust Enterprise Security</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Rapid Prototyping in 14 Days</span>
              </span>
            </div>

          </div>

          {/* Right Column: 3D Interactive AI Sphere (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Backing Disc */}
            <div className="absolute inset-0 m-auto w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl pointer-events-none" />

            {/* Glass frame container for 3D AI Neural Core */}
            <div className="w-full relative glass-panel rounded-2xl p-2 sm:p-4 overflow-hidden border border-white/10 shadow-2xl shadow-cyan-950/30">
              {/* Header inside frame */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-slate-300">NEURAL CORE MATRIX</span>
                </div>
                <span className="font-mono text-[11px] text-cyan-400/80">3D REALTIME</span>
              </div>

              {/* The Three.js Canvas */}
              <SphereCanvas />

              {/* Micro-interaction caption */}
              <div className="text-center text-[11px] text-slate-500 font-mono py-1">
                Drag to rotate · Scroll to zoom · Hover to stimulate synaptic paths
              </div>
            </div>

          </div>

        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pt-12">
          <a
            href="#services"
            className="inline-flex flex-col items-center text-xs text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Scroll down to services"
          >
            <span className="text-[11px] font-mono uppercase tracking-wider mb-1">Explore Services</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
