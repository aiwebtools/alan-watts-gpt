
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import DisclaimerPopup from '@/components/DisclaimerPopup';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';

const Index = () => {
  // Ensure the page starts at the top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
      <DisclaimerPopup />
      <ElevenLabsWidget />
    </div>
  );
};

export default Index;
