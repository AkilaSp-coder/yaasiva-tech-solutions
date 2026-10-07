import React, { useState } from 'react';
import { Search, Compass, Cpu, ShieldCheck, Rocket, CheckCircle2, Clock, Calendar, ArrowRight } from 'lucide-react';
import { ProcessStep } from '../types';

export const ProcessSection: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  const steps: ProcessStep[] = [
    {
      step: '01',
      title: 'Discovery & AI Strategy',
      subtitle: 'Feasibility, Data Topology & Value Mapping',
      description: 'We conduct a deep forensic audit of your technical landscape, existing data pipelines, user requirements, and commercial goals to identify high-leverage opportunities for automation and software acceleration.',
      timeline: '1 – 2 Weeks',
      deliverables: [
        'Technical Feasibility & ROI Assessment',
        'Data Pipeline & Security Compliance Audit',
        'Solution Architecture Blueprint & Milestone Roadmap',
        'Fixed-Scope Engineering Proposal & SLA Agreement',
      ],
      keyHighlight: 'Zero ambiguity: Transparent deliverables, tech choices, and fixed timelines.',
    },
    {
      step: '02',
      title: 'Architecture & Rapid Prototyping',
      subtitle: 'Spatial UX, Interactive Prototypes & Schema Design',
      description: 'We design high-fidelity clickable Figma prototypes, define strict database schemas, configure microservice topologies, and validate AI models on test benchmark datasets before writing production code.',
      timeline: '2 – 3 Weeks',
      deliverables: [
        'Interactive High-Fidelity UI/UX Prototype',
        'Database Schema & OpenAPI Specification',
        'AI Model Benchmark & Baseline Evaluation',
        'Cloud Infrastructure as Code (IaC) Skeleton',
      ],
      keyHighlight: 'Clickable prototypes and validated baseline data models in 14 days.',
    },
    {
      step: '03',
      title: 'Agile Engineering & Model Training',
      subtitle: 'Sprint Velocity, Type-Safe Full-Stack & Model Tuning',
      description: 'Our senior engineers execute in bi-weekly sprints with continuous integration, automated unit testing, fine-tuning of machine learning models, and regular staging previews for stakeholder feedback.',
      timeline: '4 – 10 Weeks',
      deliverables: [
        'Clean, Documented TypeScript & Python Repositories',
        'Fine-Tuned Model Weights & Quantized Embeddings',
        'Staging Environment Previews per Sprint',
        'Comprehensive Automated Unit & Integration Tests',
      ],
      keyHighlight: 'Working software delivered and demonstrated every 14 days.',
    },
    {
      step: '04',
      title: 'Rigorous Security & Load Testing',
      subtitle: 'Penetration Testing, Chaos Engineering & Core Web Vitals',
      description: 'Before production release, we subject systems to rigorous penetration audits, synthetic traffic loads up to 50,000 requests/second, zero-trust vulnerability scanning, and cross-device QA testing.',
      timeline: '1 – 2 Weeks',
      deliverables: [
        'Third-Party Penetration Test Audit Log',
        'Synthetic Stress & Concurrency Load Test Reports',
        'OWASP Top 10 Security Hardening Certification',
        'Core Web Vitals & Sub-second Performance Signoff',
      ],
      keyHighlight: 'Bank-grade zero-trust validation before a single user touches production.',
    },
    {
      step: '05',
      title: 'Autonomous Deployment & Scale',
      subtitle: 'Zero-Downtime Blue/Green Release & 24/7 SLA Support',
      description: 'We orchestrate zero-downtime blue/green rollouts to global edge clusters, configure real-time telemetry alerting, provide comprehensive source code handover, and maintain a 24/7 engineering SLA.',
      timeline: 'Ongoing Partnership',
      deliverables: [
        'Automated Production Cloud Infrastructure Deployment',
        'Complete Source Code, IP Rights & Repository Transfer',
        'Real-Time Telemetry & Error Alerting Dashboard',
        'Dedicated 24/7 Tier-1 Engineering Maintenance SLA',
      ],
      keyHighlight: '100% source code ownership transferred directly to your organization.',
    },
  ];

  const currentStep = steps[selectedStepIndex];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span>Development Methodology</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400 font-normal">Predictable Execution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 [text-wrap:balance]">
            From Strategic Blueprint to Scaled Production
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We operate with mathematical precision. Our agile engineering framework eliminates guesswork through transparent milestones, continuous verification, and rapid sprint cycles.
          </p>
        </div>

        {/* Step Navigation Pill/Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-10">
          {steps.map((s, idx) => {
            const isActive = idx === selectedStepIndex;
            return (
              <button
                key={s.step}
                onClick={() => setSelectedStepIndex(idx)}
                className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all relative ${
                  isActive
                    ? 'bg-cyan-500/10 border-cyan-500/60 shadow-lg shadow-cyan-950/40'
                    : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-cyan-400' : 'text-slate-400'}`}>
                    STEP {s.step}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />}
                </div>
                <div className={`text-xs font-semibold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Stage Showcase */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 border border-cyan-500/30 relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stage Overview (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-3xl sm:text-4xl font-mono font-bold text-cyan-400">
                  {currentStep.step}
                </span>
                <span className="w-px h-8 bg-white/10 hidden sm:block" />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {currentStep.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-300/80">
                    {currentStep.subtitle}
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentStep.description}
              </p>

              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs sm:text-sm text-cyan-200">
                <span className="font-semibold text-white">Engineering Principle: </span>
                {currentStep.keyHighlight}
              </div>

              {/* Progress Stepper Controls */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                <button
                  disabled={selectedStepIndex === 0}
                  onClick={() => setSelectedStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 text-xs font-medium rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Previous Step
                </button>
                <button
                  disabled={selectedStepIndex === steps.length - 1}
                  onClick={() => setSelectedStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="btn-glow-cyan px-4 py-2 text-xs font-semibold rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs text-slate-400 font-mono ml-auto">
                  Phase {selectedStepIndex + 1} of {steps.length}
                </span>
              </div>
            </div>

            {/* Right Column: Key Deliverables & Timeline (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-white/[0.03] border border-white/10 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Estimated Timeline
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-500/30">
                  <Clock className="w-3.5 h-3.5" />
                  {currentStep.timeline}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Phase Deliverables
                </h4>

                <div className="space-y-3">
                  {currentStep.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
