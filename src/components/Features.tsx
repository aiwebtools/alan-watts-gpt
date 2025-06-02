
import React from 'react';
import { Brain, Lightbulb, Compass, Infinity, Key, Beaker } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const features = [
  {
    title: "Critical Thinking Development",
    description: "Engage in exercises that challenge established dogmas and expand your perspective through philosophical inquiry.",
    icon: Brain,
    delay: 1,
  },
  {
    title: "Multi-Perspective Analysis",
    description: "Explore philosophical, scientific, and cultural viewpoints to gain a more comprehensive understanding of complex topics.",
    icon: Compass,
    delay: 2,
  },
  {
    title: "Free Thought Liberation",
    description: "Break free from conventional thinking patterns and discover new dimensions of consciousness and awareness.",
    icon: Key,
    delay: 3,
  },
  {
    title: "Unbound Exploration",
    description: "Push the boundaries of the norm through open-minded curiosity and philosophical experimentation.",
    icon: Infinity,
    delay: 4,
  },
  {
    title: "Scientific Simulation",
    description: "Utilize Python for theoretical calculations and test hypotheses with advanced probability analysis.",
    icon: Beaker,
    delay: 5,
  },
  {
    title: "Self-Discovery Journey",
    description: "Unlock deeper understanding of yourself and reality through guided philosophical conversations.",
    icon: Lightbulb,
    delay: 5,
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const { title, description, icon: Icon, delay } = feature;
  
  return (
    <GlassmorphicCard 
      className="h-full transform transition-all duration-500 hover:scale-105 hover:shadow-magical" 
      hasNeonBorder={true} 
      animateIn={false}
      delay={delay as 1 | 2 | 3 | 4 | 5}
    >
      <div className="relative z-10 flex flex-col h-full p-2">
        <div className="mb-6 p-3 w-16 h-16 rounded-full bg-gradient-to-br from-cyberpunk-teal/20 to-cyberpunk-purple/20 flex items-center justify-center animate-glow">
          <Icon className="h-8 w-8 text-cyberpunk-teal animate-pulse" />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-white text-gradient-blue">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </GlassmorphicCard>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40 z-0"></div>
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-gradient-to-br from-cyberpunk-purple/30 via-cyberpunk-pink/20 to-cyberpunk-teal/25 rounded-full blur-3xl z-0 animate-magical-float"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-cyberpunk-teal/30 via-cyberpunk-blue/25 to-cyberpunk-purple/20 rounded-full blur-3xl z-0 animate-float"></div>
      
      {/* Additional Ambient Effects */}
      <div className="absolute top-10 left-1/4 w-24 h-24 bg-cyberpunk-pink/20 rounded-full blur-xl animate-pulse z-0"></div>
      <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-cyberpunk-teal/20 rounded-full blur-xl animate-glow z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-cyberpunk-teal text-sm font-medium uppercase tracking-wider mb-4">How it works</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient mb-6 animate-neon-pulse">Expand Your Consciousness</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Alan Watts GPT combines advanced AI with timeless philosophical wisdom to create a unique mind-expanding experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
