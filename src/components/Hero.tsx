
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
    
    // Slight delay to ensure DOM is ready
    const timer = setTimeout(loadVideo, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
      <div className="absolute top-20 -left-28 w-64 h-64 bg-cyberpunk-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-28 w-64 h-64 bg-cyberpunk-teal/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-8 pt-12 md:pt-16">
          <div className="animate-fade-in">
            <Logo size="large" className="mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gradient leading-tight max-w-3xl mx-auto mb-4">
              Liberate Your Mind with Philosophical AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Explore various philosophical perspectives and engage in critical thinking exercises guided by Alan Watts' wisdom
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl mx-auto animate-fade-in delay-2">
            <AnimatedButton 
              href="https://chatgpt.com/g/g-6781575cbb1881919ed8453766f5a750-alan-watts-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              type="primary"
              className="w-full"
            >
              Try Alan Watts GPT <ArrowRight className="ml-2 h-4 w-4" />
            </AnimatedButton>
            <AnimatedButton 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              type="outline"
              className="w-full"
            >
              Discover More AI Tools
            </AnimatedButton>
          </div>
          
          <div className="w-full max-w-4xl mx-auto mt-8 animate-fade-in delay-3">
            <div className="youtube-container">
              <iframe
                ref={videoRef}
                title="Alan Watts Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
