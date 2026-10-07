import logo from '../assets/images/yaasiva-logo.png';
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquareCode } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['services', 'about', 'portfolio', 'process', 'why-us', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello YAASIVA TECH SOLUTIONS team! I'm interested in discussing an AI, web, or custom software project."
    );
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050814]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        
{/* Zone 1: Yaasiva Tech Solutions Logo */}
<a
  href="#hero"
  className="group flex items-center shrink-0"
  aria-label="Yaasiva Tech Solutions - Home"
>
  <img
    src={logo}
    alt="Yaasiva Tech Solutions"
    className="h-12 sm:h-14 w-auto max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105"
  />
</a>
        {/* Zone 2: 4–7 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors whitespace-nowrap ${
                  isActive ? 'text-cyan-400 font-semibold' : 'hover:text-white text-slate-300'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1–2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick WhatsApp trigger */}
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 rounded-lg transition-all"
            title="Chat directly on WhatsApp"
          >
            <MessageSquareCode className="w-3.5 h-3.5 text-emerald-400" />
            <span className="whitespace-nowrap">WhatsApp</span>
          </button>

          {/* Primary Action CTA */}
          <a
            href="#contact"
            onClick={onOpenContact}
            className="btn-glow-cyan flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white rounded-lg whitespace-nowrap shadow-sm shadow-cyan-500/20"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-[#070B19]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-cyan-400 py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-lg"
            >
              <MessageSquareCode className="w-4 h-4" />
              <span>Direct WhatsApp Contact</span>
            </button>

            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact?.();
              }}
              className="btn-glow-cyan w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white rounded-lg text-center"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
