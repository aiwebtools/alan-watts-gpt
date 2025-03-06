
import React from 'react';
import { Brain } from 'lucide-react';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  size?: 'small' | 'medium' | 'large';
};

const Logo = ({ className, size = 'medium' }: LogoProps) => {
  const sizeClasses = {
    small: 'text-lg',
    medium: 'text-xl md:text-2xl',
    large: 'text-2xl md:text-3xl',
  };

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <div className="relative">
        <Brain 
          className={cn(
            'text-cyberpunk-teal animate-pulse',
            {
              'h-5 w-5': size === 'small',
              'h-6 w-6': size === 'medium',
              'h-8 w-8': size === 'large',
            }
          )} 
        />
        <div className="absolute inset-0 blur-md bg-cyberpunk-teal/30 rounded-full animate-pulse" />
      </div>
      <div className="flex flex-col">
        <h2 className={cn('font-bold tracking-tight text-white', sizeClasses[size])}>
          Alan Watts <span className="text-cyberpunk-teal">GPT</span>
        </h2>
        {size !== 'small' && (
          <p className="text-xs text-muted-foreground">
            Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-cyberpunk-teal hover:text-cyberpunk-blue transition-colors">AiWebTools.Ai</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Logo;
