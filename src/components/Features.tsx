
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
      className="h-full" 
      hasNeonBorder={true} 
      animateIn={true} 
      delay={delay as 1 | 2 | 3 | 4 | 5}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 p-2 w-12 h-12 rounded-full bg-cyberpunk-teal/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-cyberpunk-teal" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </GlassmorphicCard>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30 z-0"></div>
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-cyberpunk-purple/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-cyberpunk-teal/20 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-cyberpunk-teal text-sm font-medium uppercase tracking-wider mb-2">How it works</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient mb-4">Expand Your Consciousness</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Alan Watts GPT combines advanced AI with timeless philosophical wisdom to create a unique mind-expanding experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
