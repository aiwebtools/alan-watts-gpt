
import React from 'react';
import Logo from './Logo';
import AnimatedButton from './AnimatedButton';
import { Mail, Phone, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-cyberpunk-purple/20 rounded-full blur-3xl"></div>
      
      <div id="disclaimer" className="container mx-auto px-4 md:px-6 mb-16">
        <div className="glass-card p-6 mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-4 text-white">Legal Disclaimer</h3>
          <div className="text-muted-foreground space-y-4 text-sm">
            <p>
              Alan Watts GPT is an AI simulation inspired by the philosophical teachings of Alan Watts but is not affiliated with or endorsed by the estate of Alan Watts or any official Alan Watts organization. The views expressed by this AI do not necessarily reflect the actual views of Alan Watts.
            </p>
            <p>
              This tool is provided for educational and entertainment purposes only. While it encourages philosophical exploration and critical thinking, it is not a substitute for professional philosophical, psychological, or medical advice. Users should exercise their own judgment when considering the perspectives offered.
            </p>
            <p>
              The creators of Alan Watts GPT make no warranties about the completeness, reliability, or accuracy of the content generated. User interactions are subject to OpenAI's usage policies and data practices.
            </p>
            <p>
              By using Alan Watts GPT, you acknowledge that you understand these limitations and agree to use the tool responsibly and at your own discretion.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Logo size="medium" />
            <p className="text-muted-foreground text-sm">
              Explore philosophical perspectives and engage in critical thinking with our AI tool inspired by Alan Watts.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">AI Tools</h4>
            <ul className="space-y-2">
              <li>
                <AnimatedButton 
                  href="https://chatgpt.com/g/g-6781575cbb1881919ed8453766f5a750-alan-watts-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  type="ghost"
                  className="text-sm px-0 py-1 hover:translate-x-1"
                >
                  Alan Watts GPT
                </AnimatedButton>
              </li>
              <li>
                <AnimatedButton 
                  href="https://teslaeinsteingpt.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  type="ghost"
                  className="text-sm px-0 py-1 hover:translate-x-1"
                >
                  Nikola Tesla GPT
                </AnimatedButton>
              </li>
              <li>
                <AnimatedButton 
                  href="https://teslaeinsteingpt.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  type="ghost"
                  className="text-sm px-0 py-1 hover:translate-x-1"
                >
                  Albert Einstein GPT
                </AnimatedButton>
              </li>
              <li>
                <AnimatedButton 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  type="ghost"
                  className="text-sm px-0 py-1 hover:translate-x-1"
                >
                  More AI Tools
                </AnimatedButton>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <AnimatedButton 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  type="ghost"
                  className="text-sm px-0 py-1 hover:translate-x-1"
                >
                  Privacy Policy
                </AnimatedButton>
              </li>
              <li>
                <AnimatedButton 
                  href="https://aiwebtools.ai/terms-of-services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  type="ghost"
                  className="text-sm px-0 py-1 hover:translate-x-1"
                >
                  Terms of Service
                </AnimatedButton>
              </li>
              <li>
                <AnimatedButton 
                  href="#disclaimer" 
                  type="ghost"
                  className="text-sm px-0 py-1 hover:translate-x-1"
                >
                  Disclaimer
                </AnimatedButton>
              </li>
              <li>
                <AnimatedButton 
                  href="#faq" 
                  type="ghost"
                  className="text-sm px-0 py-1 hover:translate-x-1"
                >
                  FAQ
                </AnimatedButton>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-cyberpunk-teal" />
                <a href="tel:4758008096" className="text-muted-foreground hover:text-white transition-colors">
                  (475) 800-8096
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-cyberpunk-teal" />
                <a href="mailto:Contact@ai-webtools.com" className="text-muted-foreground hover:text-white transition-colors">
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-cyberpunk-teal/10 text-cyberpunk-teal hover:bg-cyberpunk-teal/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-5 w-5" />
            </button>
            
            <AnimatedButton 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              type="primary"
              className="rounded-full"
            >
              More AI Tools
            </AnimatedButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
