
import React from 'react';
import { Brain, Lightbulb, Compass, Infinity, Key, Beaker } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const features = [
  {
    title: "AI-Powered Critical Thinking",
    description: "Advanced AI tool that challenges established thinking patterns through philosophical inquiry and consciousness expansion exercises.",
    icon: Brain,
    delay: 1,
  },
  {
    title: "Multi-Perspective AI Analysis",
    description: "Our AI web tool explores philosophical, scientific, and cultural viewpoints using cutting-edge artificial intelligence technology.",
    icon: Compass,
    delay: 2,
  },
  {
    title: "Free AI Philosophy Tool",
    description: "Break free from conventional thinking with this revolutionary AI tool designed for mind liberation and consciousness development.",
    icon: Key,
    delay: 3,
  },
  {
    title: "Advanced AI Exploration",
    description: "Push boundaries with our premium AI web tool that combines philosophical wisdom with modern artificial intelligence capabilities.",
    icon: Infinity,
    delay: 4,
  },
  {
    title: "AI-Enhanced Scientific Analysis",
    description: "Utilize Python-powered AI calculations and advanced probability analysis within our comprehensive AI tools ecosystem.",
    icon: Beaker,
    delay: 5,
  },
  {
    title: "AI-Guided Self-Discovery",
    description: "Unlock deeper understanding through AI-powered philosophical conversations and consciousness-expanding AI technology.",
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
          <p className="text-cyberpunk-teal text-sm font-medium uppercase tracking-wider mb-4">Premium AI Web Tools Features</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient mb-6 animate-neon-pulse">
            Why Choose Our AI Tools for Mind Expansion
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            AIWEBTOOLS.AI presents cutting-edge AI technology combined with timeless philosophical wisdom. 
            Our AI web tools collection offers the most advanced artificial intelligence solutions for consciousness development and critical thinking.
          </p>
          
          {/* SEO-focused keyword section */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-3 py-1 bg-cyberpunk-teal/10 text-cyberpunk-teal rounded-full border border-cyberpunk-teal/20">
              #1 AI Philosophy Tool
            </span>
            <span className="px-3 py-1 bg-cyberpunk-purple/10 text-cyberpunk-purple rounded-full border border-cyberpunk-purple/20">
              Free AI Web Tools
            </span>
            <span className="px-3 py-1 bg-cyberpunk-pink/10 text-cyberpunk-pink rounded-full border border-cyberpunk-pink/20">
              Advanced AI Technology
            </span>
            <span className="px-3 py-1 bg-cyberpunk-blue/10 text-cyberpunk-blue rounded-full border border-cyberpunk-blue/20">
              AIWEBTOOLS.AI Premium
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
        
        {/* Additional SEO content section */}
        <div className="mt-16 text-center">
          <div className="glass-card p-6 max-w-4xl mx-auto neon-border">
            <h3 className="text-2xl font-bold text-white mb-4">
              Leading AI Web Tools Platform - AIWEBTOOLS.AI
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Discover why millions trust AIWEBTOOLS.AI for premium AI tools and artificial intelligence solutions. 
              Our comprehensive collection of AI web tools includes philosophy AI, consciousness expansion tools, 
              critical thinking enhancers, and advanced AI-powered analysis platforms. Join the AI revolution today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
