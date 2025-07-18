import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { List, X } from 'phosphor-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen) {
      // Open animation
      gsap.set(".mobile-menu", { display: "block" });
      gsap.fromTo(".mobile-menu", 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(".mobile-menu-item", 
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, delay: 0.1, ease: "power2.out" }
      );
    } else {
      // Close animation
      gsap.to(".mobile-menu", {
        opacity: 0,
        y: -20,
        duration: 0.2,
        ease: "power2.inOut",
        onComplete: () => gsap.set(".mobile-menu", { display: "none" })
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'glass-panel backdrop-blur-xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-300"
              aria-label="Go to home section"
            >
              Tejas
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-foreground/80 hover:text-foreground transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              
              {/* CTA Button */}
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-neon"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors duration-300"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <List size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-xl hidden">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="mobile-menu-item text-left text-xl font-medium text-foreground/80 hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="mobile-menu-item btn-neon w-fit"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-background/50 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navigation;