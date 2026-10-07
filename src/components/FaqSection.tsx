import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: 'Intellectual Property',
      question: 'Who owns the custom software, trained AI models, and source code?',
      answer:
        'You retain 100% full intellectual property and source code ownership from day one. Upon project completion and milestone sign-off, all Git repositories, trained neural network weights, vector embeddings, infrastructure scripts, and documentation are transferred unconditionally to your organization.',
    },
    {
      category: 'Data Privacy & Security',
      question: 'How do you safeguard proprietary enterprise data when building AI solutions?',
      answer:
        'We adhere to zero-data-retention and zero-trust engineering standards. We deploy dedicated private VPC instances (AWS, GCP, Azure, or on-premise hardware) where model training and inference take place. Your proprietary business data is never transmitted to public training pools or third-party multi-tenant caches.',
    },
    {
      category: 'Engagement Models',
      question: 'What engagement models does YAASIVA offer?',
      answer:
        'We offer two primary partnership models: (1) Milestone-Based Fixed Scope for well-defined MVPs, architecture builds, and complete product launches with guaranteed delivery dates; and (2) Dedicated AI & Engineering Squads for fast-moving startups and enterprises requiring sustained high-velocity sprint capacity.',
    },
    {
      category: 'Timelines & Velocity',
      question: 'How quickly can we launch a production MVP or AI system?',
      answer:
        'Our rapid prototyping phase delivers clickable high-fidelity interactive prototypes and validated baseline data models in 14 days. Production-ready MVPs typically launch within 6 to 10 weeks, backed by automated CI/CD pipelines and comprehensive end-to-end test suites.',
    },
    {
      category: 'Post-Launch SLA',
      question: 'What ongoing maintenance and SLA support do you provide after deployment?',
      answer:
        'Every release includes our 60-day post-launch warranty period covering bug fixes and minor optimizations. Following launch, we offer dedicated tier-1 engineering SLAs with 24/7 cloud uptime monitoring, continuous model drift monitoring, dependency patching, and sub-4-hour emergency response times.',
    },
    {
      category: 'Integration',
      question: 'Can you modernize or integrate with our existing legacy codebase and APIs?',
      answer:
        'Yes. A significant portion of our work involves refactoring legacy monoliths into cloud-native microservices, adding real-time AI layers to existing SQL/ERP databases, or building modern high-performance React frontends on top of legacy backend systems.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#070B19]/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            Everything You Need to Know Before We Build
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            Transparent answers regarding our engineering standards, data privacy, IP ownership, and delivery cadences.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors focus-visible:ring-1 focus-visible:ring-cyan-400"
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`p-2 rounded-lg bg-white/5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-cyan-400 bg-cyan-500/10' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-white/[0.05] animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
