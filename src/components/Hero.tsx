import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Download } from 'phosphor-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      
      // Animate hero content in
      tl.fromTo(titleRef.current, 
        { 
          opacity: 0, 
          y: 50, 
          filter: "blur(10px)" 
        },
        { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out"
        }
      )
      .fromTo(subtitleRef.current,
        { 
          opacity: 0, 
          y: 30 
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        },
        "-=0.6"
      )
      .fromTo(ctaRef.current?.children,
        { 
          opacity: 0, 
          y: 20,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)"
        },
        "-=0.4"
      );

      // Floating animation for CTA buttons
      gsap.to(".cta-primary", {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onSplineLoad = () => {
    setSplineLoaded(true);
    console.log('Spline iframe loaded successfully');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0">
        {/* Spline 3D Scene via Iframe */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${splineLoaded ? 'opacity-100' : 'opacity-50'}`}>
          <iframe 
            src='https://my.spline.design/orb-iAt5h31ld7u1UaDG9PBdN6dY/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            onLoad={onSplineLoad}
            className="absolute inset-0 w-full h-full"
            style={{ 
              border: 'none',
              background: 'transparent'
            }}
            title="3D Orb Background"
          />
        </div>
        
        {/* Enhanced Fallback Background - Complements the 3D scene */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${
          splineLoaded ? 'opacity-30' : 'opacity-100'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-neon-purple/5">
            {/* Large Animated Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyber-cyan/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }} />
            </div>
            
            {/* Radial Glow Effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial rounded-full blur-3xl" />
          </div>
        </div>

        {/* Loading indicator for Spline iframe */}
        {!splineLoaded && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-electric-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground text-sm">Loading 3D Orb...</p>
            </div>
          </div>
        )}
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-electric-blue/20 rounded-full blur-xl animate-floating" />
        <div className="absolute bottom-1/3 right-1/5 w-24 h-24 bg-neon-purple/20 rounded-full blur-xl animate-floating" style={{animationDelay: '-2s'}} />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-cyber-cyan/20 rounded-full blur-xl animate-floating" style={{animationDelay: '-4s'}} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="text-gradient">Tejas</span>
            <br />
            <span className="text-foreground/80">Data Scientist</span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting digital experiences that inspire and engage through 
            innovative design and cutting-edge technology.
          </p>

          {/* Call to Action Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={scrollToProjects}
              className="cta-primary btn-neon group inline-flex items-center gap-3"
            >
              View My Work
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </button>

            <a
  href="/Tejas-Resume.pdf"
  download
  className="btn-ghost group inline-flex items-center gap-3"
>
  <Download size={20} />
  Download Resume
</a>

          </div>

       {/*
  Scroll Indicator
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
    </div>
  </div>
*/}

        </div>
      </div>

      {/* Custom Cursor Effect for Hero */}
      <div className="cursor-glow opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </section>
  );
};

export default Hero;