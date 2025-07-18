import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Palette, 
  Cpu, 
  Lightning, 
  Globe, 
  Rocket 
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Profile image animation
      gsap.fromTo(profileRef.current,
        {
          opacity: 0,
          scale: 0.8,
          rotateY: -15
        },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: profileRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Skills grid animation
      gsap.fromTo(".skill-card",
        {
          opacity: 0,
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Text content animation
      gsap.fromTo(".about-text",
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-text",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { 
      icon: Code, 
      name: 'Python', 
      description: 'Data analysis & ML',
      color: 'text-electric-blue'
    },
    { 
      icon: Cpu, 
      name: 'Machine Learning', 
      description: 'Deep learning & AI',
      color: 'text-neon-purple'
    },
    { 
      icon: Globe, 
      name: 'Web Development', 
      description: 'React & TypeScript',
      color: 'text-cyber-cyan'
    },
    { 
      icon: Lightning, 
      name: 'Data Visualization', 
      description: 'Interactive dashboards',
      color: 'text-plasma-pink'
    },
    { 
      icon: Palette, 
      name: 'UI/UX Design', 
      description: 'User-centered design',
      color: 'text-matrix-green'
    },
    { 
      icon: Rocket, 
      name: 'Cloud Computing', 
      description: 'AWS & deployment',
      color: 'text-electric-blue'
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-electric-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <div ref={profileRef} className="relative">
            {/* Profile Image */}
            <div className="relative w-80 h-80 mx-auto lg:mx-0 mb-8">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30"></div>
              <div className="relative glass-card p-2 rounded-2xl group cursor-pointer">
                <img 
                 src="/lovable-uploads/a856e8e7-3641-4de3-95ca-1b1b3c0a28e4.png"

                  alt="Tejas - Data Scientist"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl"></div>
              </div>
            </div>

          

            <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-xl animate-floating hidden lg:block" style={{animationDelay: '-2s'}}>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">10+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="about-text">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed about-text">
                I'm a passionate data scientist with a love for transforming complex data 
                into meaningful insights. With expertise in machine learning, web development, 
                and data visualization, I create solutions that bridge the gap between 
                technical innovation and user experience.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed about-text">
                When I'm not diving deep into datasets or building predictive models, 
                you'll find me exploring the latest in AI technology, contributing to 
                open-source projects, or designing intuitive interfaces that make 
                data accessible to everyone.
              </p>
            </div>

            {/* Skills Grid */}
            <div ref={skillsRef}>
              <h3 className="text-2xl font-bold mb-6 about-text">
                Skills & <span className="text-gradient">Expertise</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="skill-card glass-card p-6 rounded-xl group hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <skill.icon 
                      size={32} 
                      className={`${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300`} 
                    />
                    <h4 className="font-semibold mb-2">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="about-text">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-neon group inline-flex items-center gap-3"
              >
                Let's Work Together
                <Rocket 
                  size={20} 
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;