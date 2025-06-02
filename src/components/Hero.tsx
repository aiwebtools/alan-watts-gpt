
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import Logo from './Logo';

const Hero = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const loadVideo = () => {
      if (videoRef.current) {
        videoRef.current.src = "https://www.youtube.com/embed/zdKfwsQwOLE?autoplay=1&mute=0&controls=1&rel=0&showinfo=0&hd=1&iv_load_policy=3";
      }
    };
    
    const timer = setTimeout(loadVideo, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Enhanced Magical Background Effects */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40"></div>
      
      {/* Floating Magical Orbs */}
      <div className="absolute top-20 -left-28 w-80 h-80 bg-gradient-to-br from-cyberpunk-purple/30 via-cyberpunk-pink/20 to-cyberpunk-teal/25 rounded-full blur-3xl animate-magical-float floating-orbs"></div>
      <div className="absolute bottom-20 -right-28 w-96 h-96 bg-gradient-to-br from-cyberpunk-teal/30 via-cyberpunk-blue/25 to-cyberpunk-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyberpunk-pink/20 via-cyberpunk-purple/15 to-cyberpunk-teal/20 rounded-full blur-3xl animate-glow transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }}></div>
      
      {/* Additional Ambient Lights */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-cyberpunk-teal/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyberpunk-purple/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-12 pt-16 md:pt-20">
          <div className="animate-fade-in">
            <Logo size="large" className="mb-8 animate-glow" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gradient leading-tight max-w-4xl mx-auto mb-6 animate-neon-pulse">
              Liberate Your Mind with Philosophical AI
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
              Explore various philosophical perspectives and engage in critical thinking exercises guided by Alan Watts' wisdom
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mx-auto animate-fade-in delay-2">
            <AnimatedButton 
              href="https://chatgpt.com/g/g-6781575cbb1881919ed8453766f5a750-alan-watts-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              type="primary"
              className="w-full py-4 px-8 text-lg font-semibold rounded-xl neon-border shine-effect transform transition-all duration-300 hover:scale-105"
            >
              Try Alan Watts GPT <ArrowRight className="ml-2 h-5 w-5" />
            </AnimatedButton>
            <AnimatedButton 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              type="outline"
              className="w-full py-4 px-8 text-lg font-semibold rounded-xl neon-border transform transition-all duration-300 hover:scale-105"
            >
              Discover More AI Tools
            </AnimatedButton>
          </div>
          
          <div className="w-full max-w-5xl mx-auto mt-12 animate-fade-in delay-3">
            <div className="youtube-container relative">
              <iframe
                ref={videoRef}
                title="Alan Watts Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="shadow-magical"
              ></iframe>
              
              {/* Video Frame Enhancement */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyberpunk-teal/20 via-cyberpunk-purple/20 to-cyberpunk-pink/20 rounded-2xl blur-xl animate-glow -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyberpunk-teal/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
