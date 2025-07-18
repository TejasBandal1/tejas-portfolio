import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Eye, 
  Users, 
  Heart, 
  Music, 
  TrendingUp, 
  BarChart3,
  ExternalLink,
  Github,
  Calendar,
  Target,
  Zap
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate project cards
      gsap.fromTo(".project-card",
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Section title animation
      gsap.fromTo(".projects-title",
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-title",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Automated Facial Recognition Attendance System",
      description: "A Python-based attendance system that uses real-time facial recognition to log attendance via webcam. Implemented with OpenCV and the face_recognition library.",
      impact: "Improved attendance tracking accuracy by 25%; reduced manual errors",
      tech: ["Python", "OpenCV", "Tkinter", "Face Recognition"],
      icon: Eye,
      color: "text-electric-blue",
      bgGradient: "from-electric-blue/10 to-cyber-cyan/5"
    },
    {
      id: 2,
      title: "Role-Based Ticketing System",
      description: "A full-stack ticket management platform with different user roles—admin, employee, and users. Streamlines request submission and issue resolution workflows.",
      impact: "Increased issue response efficiency by 40%",
      tech: ["Python", "MongoDB", "React.js", "Full Stack"],
      icon: Users,
      color: "text-neon-purple",
      bgGradient: "from-neon-purple/10 to-plasma-pink/5"
    },
    {
      id: 3,
      title: "Heart Disease Prediction System",
      description: "A machine learning app that predicts heart disease likelihood using patient health metrics with Logistic Regression and Decision Trees.",
      impact: "Achieved 85% accuracy on test data",
      tech: ["Machine Learning", "Python", "Logistic Regression", "Decision Trees"],
      icon: Heart,
      color: "text-plasma-pink",
      bgGradient: "from-plasma-pink/10 to-electric-blue/5"
    },
    {
      id: 4,
      title: "Music Recommender System",
      description: "A content-based music suggestion engine using user preferences and track metadata. Implemented using cosine similarity and pandas.",
      impact: "Created a personalized user experience for music lovers",
      tech: ["Python", "Pandas", "Cosine Similarity", "Content-Based Filtering"],
      icon: Music,
      color: "text-cyber-cyan",
      bgGradient: "from-cyber-cyan/10 to-matrix-green/5"
    },
    {
      id: 5,
      title: "Sales & Marketing Performance Dashboard",
      description: "Interactive Tableau dashboards visualizing monthly sales, marketing performance, regional data, and customer segmentation.",
      impact: "Enabled better data-driven decisions for business growth and forecasting",
      tech: ["Tableau", "Data Visualization", "Business Intelligence", "Analytics"],
      icon: TrendingUp,
      color: "text-matrix-green",
      bgGradient: "from-matrix-green/10 to-neon-purple/5"
    },
    {
      id: 6,
      title: "Spotify User Behavior Dashboard",
      description: "A Power BI dashboard analyzing Spotify user behavior including listening habits, top genres/artists, and session duration patterns.",
      impact: "Provided insights to optimize marketing campaigns and user targeting",
      tech: ["Power BI", "Data Analysis", "User Behavior", "Marketing Analytics"],
      icon: BarChart3,
      color: "text-electric-blue",
      bgGradient: "from-electric-blue/10 to-cyber-cyan/5"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-cyan/5 rounded-full blur-3xl animate-floating" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-plasma-pink/5 rounded-full blur-3xl animate-floating" style={{animationDelay: '-3s'}} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="projects-title text-4xl lg:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="projects-title text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my portfolio of data science projects, machine learning applications, 
            and full-stack solutions that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`project-card glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden bg-gradient-to-br ${project.bgGradient}`}
            >
              {/* Icon */}
              <div className="mb-6">
                <project.icon 
                  size={40} 
                  className={`${project.color} group-hover:scale-110 transition-transform duration-300`} 
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Metric */}
                <div className="flex items-center gap-2 p-3 rounded-lg bg-background/30 backdrop-blur-sm">
                  <Target size={16} className={project.color} />
                  <span className="text-sm font-medium">{project.impact}</span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-muted/30 backdrop-blur-sm rounded-full border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button className="btn-ghost text-sm inline-flex items-center gap-2 group-hover:border-primary/50 transition-all duration-300">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="btn-ghost text-sm inline-flex items-center gap-2 group-hover:border-primary/50 transition-all duration-300">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} blur-xl`} />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-neon group inline-flex items-center gap-3"
          >
            <Zap size={20} />
            Let's Build Something Amazing
            <ExternalLink 
              size={20} 
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;