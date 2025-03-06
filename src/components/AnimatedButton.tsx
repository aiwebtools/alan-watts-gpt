
import React from 'react';
import { cn } from '@/lib/utils';

type AnimatedButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'primary' | 'secondary' | 'outline' | 'ghost';
  onClick?: () => void;
};

const AnimatedButton = ({ 
  children, 
  className,
  href, 
  target, 
  rel,
  type = 'primary',
  onClick
}: AnimatedButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyberpunk-teal/50 focus:ring-offset-2 focus:ring-offset-cyberpunk-dark active:scale-95';
  
  const typeStyles = {
    primary: 'bg-gradient-to-r from-cyberpunk-teal to-cyberpunk-blue hover:from-cyberpunk-blue hover:to-cyberpunk-teal text-white shadow-neon-blue hover:shadow-lg py-2 px-6',
    secondary: 'bg-cyberpunk-purple/10 text-cyberpunk-purple hover:bg-cyberpunk-purple/20 hover:text-white shadow-neon-purple hover:shadow-lg py-2 px-6',
    outline: 'bg-transparent border border-cyberpunk-teal/50 text-cyberpunk-teal hover:bg-cyberpunk-teal/10 py-2 px-6',
    ghost: 'bg-transparent text-white hover:bg-white/10 py-2 px-4',
  };

  const Component = href ? 'a' : 'button';
  
  const props = href
    ? { href, target, rel }
    : { onClick };

  return (
    <Component
      className={cn(baseStyles, typeStyles[type], 'shine-effect', className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedButton;
