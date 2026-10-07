import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      quote:
        'YAASIVA engineered our autonomous AI underwriting engine in just 10 weeks. They cut our loan application review latency from 36 hours down to 4 minutes while strictly adhering to our zero-trust banking compliance standards. Truly world-class engineers.',
      author: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'Vanguard Capital Partners',
      metric: '4 min',
      metricLabel: 'Underwriting Turnaround (from 36h)',
    },
    {
      id: '2',
      quote:
        'We evaluated five engineering consultancies before selecting YAASIVA for our distributed telehealth mobile platform. Their technical depth in edge AI quantization allowed our diagnostic computer vision model to run entirely on user phones with zero lag. Our active patient retention jumped by 54%.',
      author: 'Dr. Elena Rostova',
      role: 'VP of Product Engineering',
      company: 'Aura Health Technologies',
      metric: '+54%',
      metricLabel: 'Patient Retention & Engagement',
    },
    {
      id: '3',
      quote:
        'YAASIVA transformed our high-traffic e-commerce infrastructure with a custom headless React architecture and interactive 3D WebGL visualizer. Our average order value rose by 42% in the first quarter post-launch, and server hosting expenses fell by 30%.',
      author: 'Siddharth Nair',
      role: 'Head of Global Digital Commerce',
      company: 'Lumina Luxury Goods',
      metric: '+42%',
      metricLabel: 'Increase in Average Order Value',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
              <span>Client Evidence</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400 font-normal">Attributable Commercial Impact</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
              Trusted by Technical Leaders Across the Globe
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Active Display */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/20 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Quote and Author (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-1 text-cyan-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyan-400" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-2xl text-slate-100 font-medium leading-relaxed italic">
                "{current.quote}"
              </blockquote>

              <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-lg">
                  {current.author.charAt(0)}
                </div>
                <div>
                  <div className="text-base font-bold text-white">
                    {current.author}
                  </div>
                  <div className="text-xs text-slate-400">
                    {current.role} · <span className="text-cyan-300">{current.company}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric Callout Card (4 cols) */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-cyan-500/30 flex flex-col justify-center text-center">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Verified Outcome
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-cyan-400 font-mono tabular-nums mb-2">
                {current.metric}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">
                {current.metricLabel}
              </div>
            </div>

          </div>

          {/* Stepper Dots */}
          <div className="flex justify-center gap-2 mt-8 pt-6 border-t border-white/5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
