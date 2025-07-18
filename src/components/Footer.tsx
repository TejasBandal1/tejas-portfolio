import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-electric-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gradient">Tejas Bandal</h3>
            <p className="text-muted-foreground mt-2">Data Scientist & Developer</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {['Home', 'About', 'Projects', 'Contact'].map((link) => (
              <button
                key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/30">
            <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
              © {currentYear} Tejas Bandal. Made with 
              <Heart size={16} className="text-plasma-pink animate-pulse" />
              and
              <Code size={16} className="text-electric-blue" />
              using React & TypeScript
            </p>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-electric-blue/30 rounded-full animate-floating" />
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-purple/40 rounded-full animate-floating" style={{animationDelay: '-1s'}} />
            <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyber-cyan/30 rounded-full animate-floating" style={{animationDelay: '-2s'}} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;