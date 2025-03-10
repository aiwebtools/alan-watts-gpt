
import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import AnimatedButton from './AnimatedButton';

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if the user has already seen the disclaimer
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    
    // If not, show the disclaimer
    if (!hasAgreed) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgree = () => {
    // Save to localStorage so we don't show this again
    localStorage.setItem('disclaimerAgreed', 'true');
    setIsOpen(false);
    
    // Show success toast
    toast({
      title: "Agreement Confirmed",
      description: "Welcome to Alan Watts GPT - Free your mind.",
      duration: 5000,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div 
        className="w-full max-w-lg transform rounded-xl bg-gradient-to-b from-cyberpunk-darker to-cyberpunk-dark border border-cyberpunk-teal/30 shadow-neon-blue p-6 transition-all"
        style={{
          animation: 'scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-cyberpunk-teal" />
            <h2 className="text-2xl font-bold text-gradient-blue">Disclaimer</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="mb-6 glass-card p-4 text-white/90 text-sm">
          <p className="mb-3">
            <span className="text-cyberpunk-teal font-medium">Alan Watts GPT</span> is designed for philosophical exploration and critical thinking exercises. All content generated is for educational and entertainment purposes only.
          </p>
          <p className="mb-3">
            By proceeding, you acknowledge that views expressed by this AI are not professional advice and may not represent the views of its creators. You agree to use this tool responsibly.
          </p>
          <p>
            This tool does not encourage harmful behaviors or promote specific ideologies, political views, or radical thoughts, but rather encourages intellectual freedom through philosophical inquiry.
          </p>
        </div>
        
        <div className="flex justify-center">
          <AnimatedButton
            onClick={handleAgree}
            className="relative group py-3 px-8 text-lg font-medium overflow-hidden animate-pulse"
          >
            <span className="relative z-10 uppercase tracking-wider">I Agree</span>
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-r from-cyberpunk-teal via-cyberpunk-blue to-cyberpunk-purple"></span>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-cyberpunk-teal blur-xl"></span>
            </span>
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
