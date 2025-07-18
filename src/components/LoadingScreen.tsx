import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    // Enable skip option after 1 second
    const skipTimer = setTimeout(() => setCanSkip(true), 1000);

    // Animate progress bar
    const progressTween = gsap.to({}, {
      duration: 2.5,
      ease: "power2.out",
      onUpdate: function() {
        const currentProgress = Math.round(this.progress() * 100);
        setProgress(currentProgress);
      },
      onComplete: () => {
        setTimeout(() => {
          animateOut();
        }, 500);
      }
    });

    return () => {
      clearTimeout(skipTimer);
      progressTween.kill();
    };
  }, []);

  const animateOut = () => {
    const tl = gsap.timeline();
    
    tl.to(".progress-container", {
      opacity: 0,
      y: -30,
      duration: 0.5,
      ease: "power2.inOut"
    })
    .to(".loading-logo", {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut"
    }, "-=0.3")
    .to(".preloader", {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: onLoadComplete
    }, "-=0.2");
  };

  const handleSkip = () => {
    if (canSkip) {
      gsap.killTweensOf({});
      setProgress(100);
      setTimeout(animateOut, 100);
    }
  };

  return (
    <div className="preloader fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl animate-floating" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-neon-purple/10 rounded-full blur-3xl animate-floating" style={{animationDelay: '-2s'}} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyber-cyan/10 rounded-full blur-3xl animate-floating" style={{animationDelay: '-4s'}} />
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Loading Logo/Text */}
        <div className="loading-logo mb-12">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">Tejas</span>
          </h1>
          <p className="text-muted-foreground text-lg tracking-wide">
            Data Scientist
          </p>
        </div>

        {/* Progress Container */}
        <div className="progress-container space-y-6">
          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-primary transition-all duration-100 ease-out rounded-full shadow-glow"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-3 text-sm text-muted-foreground font-mono">
              {progress}%
            </div>
          </div>

          {/* Skip Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSkip}
              disabled={!canSkip}
              className={`text-sm text-muted-foreground hover:text-foreground transition-all duration-300 ${
                canSkip ? 'opacity-100 cursor-pointer' : 'opacity-0 cursor-not-allowed'
              }`}
              aria-label="Skip loading animation"
            >
              Skip →
            </button>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Loading portfolio, {progress}% complete
      </div>
    </div>
  );
};

export default LoadingScreen;