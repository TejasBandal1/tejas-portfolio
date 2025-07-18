import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { gsap } from 'gsap';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize GSAP and set initial states
    gsap.set("main", { opacity: 0 });
  }, []);

  const handleLoadComplete = () => {
    setIsLoading(false);
    
    // Animate main content in
    gsap.to("main", {
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    });
  };

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      
      {/* Main Content */}
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
