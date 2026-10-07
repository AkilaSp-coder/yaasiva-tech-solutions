import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { NeuralBackground } from './components/NeuralBackground';

export default function App() {
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('AI Solutions');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForInquiry(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-[#050814] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Ambient Neural Particle Canvas */}
      <NeuralBackground />

      {/* Top Bar Navigation */}
      <Navbar onOpenContact={() => scrollToSection('contact')} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section with Interactive 3D AI Sphere */}
        <Hero
          onExploreClick={() => scrollToSection('services')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Services: 3D Cards for the 6 Core Capabilities */}
        <ServicesSection onSelectServiceForContact={handleSelectService} />

        {/* About: Mission, The 3 Pillars (Innovate, Build, Grow) & Tech Stack */}
        <AboutSection />

        {/* Portfolio: High-Fidelity Case Studies with Verified Metrics */}
        <PortfolioSection />

        {/* Development Methodology: 5-Phase Interactive Stepper */}
        <ProcessSection />

        {/* Why Choose Us: Asymmetric Bento Grid */}
        <WhyChooseUs />

        {/* Testimonials: Attributable Evidence & Verified ROI Metrics */}
        <TestimonialsSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Validated Contact Form with Direct WhatsApp Integration */}
        <ContactSection initialService={selectedServiceForInquiry} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
