
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GlassmorphicCard from './GlassmorphicCard';

const faqs = [
  {
    question: "What is Alan Watts GPT?",
    answer: "Alan Watts GPT is an AI tool inspired by the philosophical teachings of Alan Watts. It engages users in critical thinking exercises, encouraging them to question established dogmas and ideologies by exploring various philosophical, scientific, and cultural perspectives."
  },
  {
    question: "How does Alan Watts GPT work?",
    answer: "Alan Watts GPT leverages advanced AI to simulate conversations that challenge conventional thinking. It provides nuanced, balanced viewpoints across various philosophical traditions, facilitating meaningful discussions that help users explore their own consciousness and understanding of reality."
  },
  {
    question: "Can Alan Watts GPT help with specific philosophical questions?",
    answer: "Yes, Alan Watts GPT can address specific philosophical questions by offering multiple perspectives and encouraging critical analysis. It avoids promoting any single ideology, instead fostering an open and exploratory environment for philosophical inquiry."
  },
  {
    question: "Is Alan Watts GPT suitable for beginners in philosophy?",
    answer: "Absolutely. Alan Watts GPT adapts to the user's level of philosophical knowledge, making complex concepts accessible to beginners while still offering depth for those with more advanced understanding."
  },
  {
    question: "Does Alan Watts GPT use actual quotes from Alan Watts?",
    answer: "While Alan Watts GPT is inspired by Alan Watts' philosophical approach and teaching style, it generates original responses rather than directly quoting him. The AI aims to capture the essence of his perspective while engaging with contemporary questions."
  },
  {
    question: "Can Alan Watts GPT perform calculations or analyze data?",
    answer: "Yes, Alan Watts GPT can utilize Python for theoretical calculations and data analysis, particularly when exploring philosophical concepts that benefit from mathematical or statistical illustration."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-cyberpunk-blue/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-cyberpunk-teal text-sm font-medium uppercase tracking-wider mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about Alan Watts GPT and how it can help expand your consciousness.
          </p>
        </div>
        
        <GlassmorphicCard className="max-w-3xl mx-auto" hasNeonBorder={true} animateIn={true}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-white hover:text-cyberpunk-teal transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </GlassmorphicCard>
      </div>
    </section>
  );
};

export default FAQ;
