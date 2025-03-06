
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import AnimatedButton from './AnimatedButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Logo size="medium" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
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
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            type="primary"
          >
            More AI Tools
          </AnimatedButton>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-morphism animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <AnimatedButton 
              href="https://chatgpt.com/g/g-6781575cbb1881919ed8453766f5a750-alan-watts-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              type="ghost"
              className="w-full"
            >
              Alan Watts GPT
            </AnimatedButton>
            <AnimatedButton 
              href="https://teslaeinsteingpt.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              type="ghost"
              className="w-full"
            >
              Nikola Tesla GPT
            </AnimatedButton>
            <AnimatedButton 
              href="https://teslaeinsteingpt.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              type="ghost"
              className="w-full"
            >
              Albert Einstein GPT
            </AnimatedButton>
            <AnimatedButton 
              href="#faq" 
              type="ghost"
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </AnimatedButton>
            <AnimatedButton 
              href="#disclaimer" 
              type="ghost"
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Disclaimer
            </AnimatedButton>
            <AnimatedButton 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              type="primary"
              className="w-full"
            >
              More AI Tools
            </AnimatedButton>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
