import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  MessageSquareCode, 
  Mail, 
  Phone, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    service: initialService || 'AI Solutions',
    budget: '$3k – $5k',
    message: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Validation logic
  const validate = (data: ContactFormData) => {
    const errs: Record<string, string> = {};
    if (!data.name.trim() || data.name.trim().length < 2) {
      errs.name = 'Please provide your full name (minimum 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim() || !emailRegex.test(data.email.trim())) {
      errs.email = 'Please provide a valid work email address.';
    }
    if (!data.service) {
      errs.service = 'Please select a service focus.';
    }
    if (!data.message.trim() || data.message.trim().length < 10) {
      errs.message = 'Please share a brief project summary (minimum 10 characters).';
    }
    return errs;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const currentErrors = validate(formData);
    setErrors(currentErrors);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (touched[name]) {
      const currentErrors = validate(updated);
      setErrors(currentErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      company: true,
      service: true,
      budget: true,
      message: true,
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    
    // Simulate reliable API submission
    
setIsSubmitting(true);

try {
  const scriptURL = "https://script.google.com/macros/s/AKfycbw7SKl9CP0LiQonIrJNvXFMVCcEur79yV5KB7aV4mz71b8OWRwV9HAdgKUU0Vu1SJ_k/exec";

  const formBody = new URLSearchParams({
    name: formData.name,
    email: formData.email,
    company: formData.company,
    service: formData.service,
    budget: formData.budget,
    message: formData.message,
  });

  await fetch(scriptURL, {
    method: "POST",
    mode: "no-cors",
    body: formBody,
  });

  setIsSubmitted(true);

  // Trigger celebratory confetti
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#06B6D4", "#3B82F6", "#8B5CF6"],
  });

} catch (error) {
  console.error("Form submission error:", error);
  alert("Unable to submit your inquiry. Please try again.");
} finally {
  setIsSubmitting(false);
}

  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello YAASIVA TECH SOLUTIONS!\n\n` +
      `Name: ${formData.name || 'Prospective Client'}\n` +
      `Company: ${formData.company || 'Enterprise'}\n` +
      `Service: ${formData.service}\n` +
      `Budget Range: ${formData.budget}\n` +
      `Project Brief: ${formData.message || 'I would like to discuss a new technology project.'}`
    );
    window.open(`https://wa.me/917904372822?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      service: 'AI Solutions',
      budget: '$15k – $35k',
      message: '',
    });
    setTouched({});
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span>Direct Engagement</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400 font-normal">Innovate. Build. Grow.</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 [text-wrap:balance]">
            Let's Engineer Your Competitive Advantage
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Ready to deploy transformative AI, high-performance web systems, or custom enterprise architecture? Schedule an architecture discovery session with our senior engineering team.
          </p>
        </div>

        {/* Main Grid: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact & WhatsApp Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Highlight Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-emerald-900/20 to-slate-900/60 border border-emerald-500/30 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                  <MessageSquareCode className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Direct WhatsApp Dispatch
                  </h3>
                  <div className="text-xs text-emerald-300 font-mono">
                    Instant Connect with Tech Lead
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prefer real-time chat over email? Tap below to launch a pre-formatted message directly to our engineering coordination line.
              </p>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-950/50 hover:shadow-emerald-500/30 active:scale-[0.99]"
              >
                <MessageSquareCode className="w-4 h-4" />
                <span>Chat with Senior Architect on WhatsApp</span>
              </button>
            </div>

            {/* Direct Channels Glass Box */}
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 space-y-5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 pb-3 border-b border-white/10">
                Direct Channels & SLAs
              </h4>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-slate-400">General & Technical Inquiries</div>
                    <a
  href="mailto:akila21mk@gmail.com"
  className="font-mono text-white hover:text-cyan-300 transition-colors"
>
  akila21mk@gmail.com
</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-slate-400">Global Hotline & WhatsApp</div>
<a
  href="tel:+917904372822"
  className="font-mono text-white hover:text-cyan-300 transition-colors"
>
  +91 79043 72822
</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-slate-400">Guaranteed Response Window</div>
                    <span className="font-mono text-cyan-300 font-semibold">
                      Under 4 business hours
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] text-xs text-slate-400">
                Non-Disclosure Agreements (NDAs) signed prior to confidential technical disclosures.
              </div>
            </div>

          </div>

          {/* Right Column: Validated Contact Form (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl relative">
            
            {isSubmitted ? (
              <div className="py-12 px-4 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>. A senior solutions architect from YAASIVA TECH SOLUTIONS has been notified and will review your specifications within 4 hours.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 max-w-md mx-auto text-left text-xs font-mono text-slate-300 space-y-1.5">
                  <div><span className="text-slate-400">Selected Service:</span> {formData.service}</div>
                  <div><span className="text-slate-400">Target Budget:</span> {formData.budget}</div>
                  <div><span className="text-slate-400">Reply Sent To:</span> {formData.email}</div>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 text-xs font-semibold"
                  >
                    <MessageSquareCode className="w-3.5 h-3.5" />
                    <span>Follow Up on WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="border-b border-white/[0.08] pb-4 mb-2">
                  <h3 className="text-xl font-bold text-white">
                    Request Architecture Proposal
                  </h3>
                  <div className="text-xs text-slate-400">
                    Fill in your project parameters for a detailed roadmap & estimation.
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="name">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur('name')}
                      placeholder="e.g. Alex Henderson"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-slate-500 transition-colors focus:outline-none ${
                        touched.name && errors.name
                          ? 'border-rose-500/60 focus:border-rose-400'
                          : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {touched.name && errors.name && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="email">
                      Work Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      placeholder="alex@enterprise.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-slate-500 transition-colors focus:outline-none ${
                        touched.email && errors.email
                          ? 'border-rose-500/60 focus:border-rose-400'
                          : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Company & Service Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="company">
                      Organization / Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Health Corp"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 text-sm text-white placeholder-slate-500 transition-colors focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="service">
                      Core Service Required <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B112C] border border-white/10 focus:border-cyan-400 text-sm text-white transition-colors focus:outline-none"
                    >
                      <option value="AI Solutions">AI Solutions & Autonomous Agents</option>
                      <option value="Web Development">Web Development & Cloud Platforms</option>
                      <option value="Mobile Apps">Mobile Apps (iOS & Android)</option>
                      <option value="Custom Software">Custom Enterprise Software & ERP</option>
                      <option value="UI/UX Design">UI/UX Design & Spatial Systems</option>
                      <option value="E-Commerce">E-Commerce & 3D WebGL Storefronts</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range Selector */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Estimated Budget Allocation
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
  '$3k – $5k',
  '$5k – $10k',
  '$10k – $25k',
  '$25k – $50k',
  '$50k – $100k',
  '$100k+'
].map((range) => (
                      <button
                        type="button"
                        key={range}
                        onClick={() => setFormData({ ...formData, budget: range })}
                        className={`py-2 px-3 rounded-lg text-xs font-mono transition-colors text-center ${
                          formData.budget === range
                            ? 'bg-cyan-500 text-slate-950 font-bold border border-cyan-400'
                            : 'bg-white/[0.03] text-slate-300 border border-white/10 hover:bg-white/[0.08]'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Brief Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="message">
                    Project Brief & Objectives <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                    placeholder="Briefly describe what you're looking to build, any existing technical constraints, and desired launch timeframes..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-slate-500 transition-colors focus:outline-none resize-none ${
                      touched.message && errors.message
                        ? 'border-rose-500/60 focus:border-rose-400'
                        : 'border-white/10 focus:border-cyan-400'
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Free architectural review & estimate</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-glow-cyan w-full sm:w-auto px-7 py-3 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="font-mono text-xs">Transmitting...</span>
                    ) : (
                      <>
                        <span>Submit Architecture Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
