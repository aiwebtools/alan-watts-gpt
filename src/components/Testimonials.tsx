
import React from 'react';
import GlassmorphicCard from './GlassmorphicCard';

const testimonials = [
  {
    name: "Alex Morgan",
    title: "Philosophy Student",
    quote: "Alan Watts GPT has completely transformed my understanding of Eastern philosophy. The nuanced perspectives and critical thinking exercises have been invaluable in my studies.",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Samantha Chen",
    title: "Mindfulness Coach",
    quote: "I recommend Alan Watts GPT to all my clients. It offers profound insights that help break through mental barriers and expand consciousness in meaningful ways.",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Kumar",
    title: "Software Engineer",
    quote: "As someone who codes all day, Alan Watts GPT helps me step back and question my assumptions about technology and its role in our lives. It's refreshing and enlightening.",
    avatarUrl: "https://randomuser.me/api/portraits/men/62.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-cyberpunk-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-cyberpunk-teal/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-cyberpunk-teal text-sm font-medium uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient mb-4">Liberated Minds Share Their Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how Alan Watts GPT has helped others expand their consciousness and challenge conventional thinking.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <GlassmorphicCard 
              key={index}
              className="relative"
              hasNeonBorder={true}
              animateIn={true}
              delay={(index + 1) as 1 | 2 | 3}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="relative mr-4">
                    <img 
                      src={testimonial.avatarUrl} 
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover border border-white/10"
                    />
                    <div className="absolute inset-0 rounded-full border border-cyberpunk-teal/30 animate-pulse"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-cyberpunk-teal text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic relative">
                  <span className="text-4xl text-cyberpunk-teal/20 absolute -top-2 -left-1">"</span>
                  {testimonial.quote}
                  <span className="text-4xl text-cyberpunk-teal/20 absolute -bottom-5 -right-1">"</span>
                </blockquote>
              </div>
            </GlassmorphicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
