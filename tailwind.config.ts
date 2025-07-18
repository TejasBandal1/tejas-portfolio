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
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Neon Electric Palette
				'electric-blue': 'hsl(var(--electric-blue))',
				'neon-purple': 'hsl(var(--neon-purple))',
				'cyber-cyan': 'hsl(var(--cyber-cyan))',
				'plasma-pink': 'hsl(var(--plasma-pink))',
				'matrix-green': 'hsl(var(--matrix-green))',
				
				// Glass Materials
				glass: 'hsl(var(--glass))',
				'glass-border': 'hsl(var(--glass-border))',
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-glow': 'var(--gradient-glow)',
				'gradient-radial': 'var(--gradient-radial)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'neon': 'var(--shadow-neon)',
				'glass': 'var(--shadow-glass)',
				'floating': 'var(--shadow-floating)'
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'floating': 'floating 6s ease-in-out infinite',
				'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
				'fade-in': 'fadeIn 0.8s ease-out forwards',
				'slide-up': 'slideUp 0.8s ease-out forwards',
				'scale-in': 'scaleIn 0.6s ease-out forwards'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				floating: {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-20px) rotate(2deg)' },
					'66%': { transform: 'translateY(-10px) rotate(-2deg)' }
				},
				pulseGlow: {
					'0%, 100%': { boxShadow: '0 0 20px hsla(195, 100%, 50%, 0.4)' },
					'50%': { boxShadow: '0 0 40px hsla(195, 100%, 50%, 0.8)' }
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(30px)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0)' 
					}
				},
				scaleIn: {
					'0%': { 
						opacity: '0', 
						transform: 'scale(0.9)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'scale(1)' 
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
