
import React from 'react';
import { cn } from '@/lib/utils';

type GlassmorphicCardProps = {
  children: React.ReactNode;
  className?: string;
  hasNeonBorder?: boolean;
  animateIn?: boolean;
  delay?: 1 | 2 | 3 | 4 | 5;
};

const GlassmorphicCard = ({ 
  children, 
  className, 
  hasNeonBorder = false,
  animateIn = false,
  delay = 1,
}: GlassmorphicCardProps) => {
  return (
    <div
      className={cn(
        'glass-card p-6 relative overflow-hidden',
        hasNeonBorder && 'neon-border',
        animateIn && 'opacity-0 animate-fade-in',
        animateIn && `delay-${delay}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassmorphicCard;
