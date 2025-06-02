
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				cyberpunk: {
					dark: '#0a0a0f',
					darker: '#050508',
					black: '#000000',
					blue: '#0fa0ce',
					teal: '#00f0ff',
					purple: '#8b5cf6',
					pink: '#d946ef',
					green: '#06d6a0',
					yellow: '#ffd166',
					orange: '#f97316',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				pulse: {
					'0%, 100%': { opacity: '1', transform: 'scale(1)' },
					'50%': { opacity: '0.8', transform: 'scale(1.05)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'25%': { transform: 'translateY(-20px) rotate(90deg)' },
					'50%': { transform: 'translateY(-10px) rotate(180deg)' },
					'75%': { transform: 'translateY(-15px) rotate(270deg)' },
				},
				glow: {
					'0%, 100%': { 
						boxShadow: '0 0 10px rgba(0, 240, 255, 0.5), 0 0 30px rgba(0, 240, 255, 0.3), 0 0 50px rgba(0, 240, 255, 0.1)' 
					},
					'33%': { 
						boxShadow: '0 0 15px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)' 
					},
					'66%': { 
						boxShadow: '0 0 20px rgba(217, 70, 239, 0.7), 0 0 50px rgba(217, 70, 239, 0.5), 0 0 70px rgba(217, 70, 239, 0.3)' 
					},
				},
				'neon-pulse': {
					'0%, 100%': { 
						textShadow: '0 0 10px rgba(0, 240, 255, 0.8), 0 0 20px rgba(0, 240, 255, 0.6), 0 0 30px rgba(0, 240, 255, 0.4)' 
					},
					'33%': { 
						textShadow: '0 0 15px rgba(139, 92, 246, 0.9), 0 0 25px rgba(139, 92, 246, 0.7), 0 0 35px rgba(139, 92, 246, 0.5)' 
					},
					'66%': { 
						textShadow: '0 0 20px rgba(217, 70, 239, 1), 0 0 30px rgba(217, 70, 239, 0.8), 0 0 40px rgba(217, 70, 239, 0.6)' 
					},
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-30px) scale(0.95)' },
					'100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(30px) scale(0.95)' },
					'100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.8) rotate(-5deg)' },
					'100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
				},
				'magical-float': {
					'0%, 100%': { 
						transform: 'translateY(0) translateX(0) rotate(0deg)',
						filter: 'hue-rotate(0deg)'
					},
					'25%': { 
						transform: 'translateY(-15px) translateX(10px) rotate(90deg)',
						filter: 'hue-rotate(90deg)'
					},
					'50%': { 
						transform: 'translateY(-5px) translateX(-5px) rotate(180deg)',
						filter: 'hue-rotate(180deg)'
					},
					'75%': { 
						transform: 'translateY(-20px) translateX(-10px) rotate(270deg)',
						filter: 'hue-rotate(270deg)'
					},
				},
				'aurora': {
					'0%, 100%': { 
						background: 'linear-gradient(45deg, rgba(0, 240, 255, 0.1), rgba(139, 92, 246, 0.1))',
					},
					'25%': { 
						background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(217, 70, 239, 0.1))',
					},
					'50%': { 
						background: 'linear-gradient(225deg, rgba(217, 70, 239, 0.12), rgba(0, 240, 255, 0.08))',
					},
					'75%': { 
						background: 'linear-gradient(315deg, rgba(0, 240, 255, 0.08), rgba(139, 92, 246, 0.12))',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'float': 'float 8s ease-in-out infinite',
				'glow': 'glow 6s ease-in-out infinite',
				'neon-pulse': 'neon-pulse 4s ease-in-out infinite',
				'fade-in': 'fade-in 0.8s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.8s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.8s ease-out forwards',
				'scale-in': 'scale-in 0.6s ease-out forwards',
				'magical-float': 'magical-float 12s ease-in-out infinite',
				'aurora': 'aurora 15s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'cyber-grid': 'linear-gradient(rgba(0, 240, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.2) 1px, transparent 1px)',
				'magical-gradient': 'linear-gradient(45deg, rgba(0, 240, 255, 0.1), rgba(139, 92, 246, 0.1), rgba(217, 70, 239, 0.1))',
			},
			transitionTimingFunction: {
				'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
				'magical': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
			},
			boxShadow: {
				'neon-blue': '0 0 10px rgba(0, 240, 255, 0.5), 0 0 30px rgba(0, 240, 255, 0.3), 0 0 50px rgba(0, 240, 255, 0.1)',
				'neon-purple': '0 0 10px rgba(139, 92, 246, 0.5), 0 0 30px rgba(139, 92, 246, 0.3), 0 0 50px rgba(139, 92, 246, 0.1)',
				'neon-pink': '0 0 10px rgba(217, 70, 239, 0.5), 0 0 30px rgba(217, 70, 239, 0.3), 0 0 50px rgba(217, 70, 239, 0.1)',
				'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
				'magical': '0 0 20px rgba(0, 240, 255, 0.3), 0 0 40px rgba(139, 92, 246, 0.2), 0 0 60px rgba(217, 70, 239, 0.1)',
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
