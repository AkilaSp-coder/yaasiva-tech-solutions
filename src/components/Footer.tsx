import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Twitter, 
  MessageSquareCode, 
  Mail, 
  ShieldCheck, 
  Globe2 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hello YAASIVA TECH SOLUTIONS! I would like to schedule a technology consultation.");
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="relative bg-[#04060E] border-t border-white/[0.08] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-2 text-white font-bold text-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span className="font-display tracking-tight">YAASIVA TECH SOLUTIONS</span>
            </a>

            <div className="text-cyan-300 font-mono text-xs uppercase tracking-widest">
              Innovate · Build · Grow
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Premium AI technology startup engineering intelligent web, cross-platform mobile platforms, autonomous AI systems, and high-concurrency enterprise software.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <button
                onClick={handleWhatsApp}
                className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/50 transition-colors"
                aria-label="WhatsApp Contact"
                title="Connect on WhatsApp"
              >
                <MessageSquareCode className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs font-mono uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">AI & Autonomous Agents</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">Mobile Applications</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">Custom Software & ERP</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">UI/UX Spatial Design</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">3D E-Commerce Systems</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs font-mono uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-300 transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#process" className="hover:text-cyan-300 transition-colors">Methodology</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-300 transition-colors">The YAASIVA Advantage</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-300 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">Architecture Consultation</a>
              </li>
            </ul>
          </div>

          {/* Engineering Standards */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs font-mono uppercase tracking-wider">
              Security & SLA
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li className="flex items-center gap-1.5 text-cyan-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero-Trust Architecture</span>
              </li>
              <li>100% IP & Code Ownership</li>
              <li>SOC-2 Aligned Engineering</li>
              <li>24/7 Global Incident SLA</li>
              <li>Sub-100ms API Benchmarking</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} YAASIVA TECH SOLUTIONS. All rights reserved. Innovate. Build. Grow.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-400 font-mono">
              Designed & Engineered for High Concurrency
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
              aria-label="Scroll back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
