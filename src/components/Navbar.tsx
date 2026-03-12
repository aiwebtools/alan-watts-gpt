
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import AnimatedButton from './AnimatedButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'glass-morphism py-2 sm:py-3' : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Logo size="medium" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          <AnimatedButton 
            href="https://chatgpt.com/g/g-6781575cbb1881919ed8453766f5a750-alan-watts-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            type="ghost"
          >
            Alan Watts GPT
          </AnimatedButton>
          <AnimatedButton 
            href="https://teslaeinsteingpt.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            type="ghost"
          >
            Nikola Tesla GPT
          </AnimatedButton>
          <AnimatedButton 
            href="https://teslaeinsteingpt.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            type="ghost"
          >
            Albert Einstein GPT
          </AnimatedButton>
          <AnimatedButton 
            href="#faq" 
            type="ghost"
          >
            FAQ
          </AnimatedButton>
          <AnimatedButton 
            href="#disclaimer" 
            type="ghost"
          >
            Disclaimer
          </AnimatedButton>
          <AnimatedButton 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
            type="primary"
          >
            More AI Tools
          </AnimatedButton>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white focus:outline-none p-2 -mr-2 touch-manipulation"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      <div 
        className={`lg:hidden fixed inset-0 top-0 z-40 transition-transform duration-200 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ background: 'rgba(10, 10, 15, 0.98)' }}
      >
        {/* Close button inside overlay */}
        <div className="flex justify-end p-4">
          <button 
            className="text-white p-2 touch-manipulation"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        
        <nav className="flex flex-col items-center justify-center space-y-6 px-6 pt-8">
          <AnimatedButton 
            href="https://chatgpt.com/g/g-6781575cbb1881919ed8453766f5a750-alan-watts-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            type="ghost"
            className="w-full max-w-xs text-center text-lg py-3"
            onClick={closeMobileMenu}
          >
            Alan Watts GPT
          </AnimatedButton>
          <AnimatedButton 
            href="https://teslaeinsteingpt.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            type="ghost"
            className="w-full max-w-xs text-center text-lg py-3"
            onClick={closeMobileMenu}
          >
            Nikola Tesla GPT
          </AnimatedButton>
          <AnimatedButton 
            href="https://teslaeinsteingpt.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            type="ghost"
            className="w-full max-w-xs text-center text-lg py-3"
            onClick={closeMobileMenu}
          >
            Albert Einstein GPT
          </AnimatedButton>
          <AnimatedButton 
            href="#faq" 
            type="ghost"
            className="w-full max-w-xs text-center text-lg py-3"
            onClick={closeMobileMenu}
          >
            FAQ
          </AnimatedButton>
          <AnimatedButton 
            href="#disclaimer" 
            type="ghost"
            className="w-full max-w-xs text-center text-lg py-3"
            onClick={closeMobileMenu}
          >
            Disclaimer
          </AnimatedButton>
          <AnimatedButton 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
            type="primary"
            className="w-full max-w-xs text-center text-lg py-3"
            onClick={closeMobileMenu}
          >
            More AI Tools
          </AnimatedButton>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
