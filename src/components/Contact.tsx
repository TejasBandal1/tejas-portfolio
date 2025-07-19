import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Phone,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-form", { opacity: 0, x: -50 }, {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: formRef.current, start: "top 85%", end: "bottom 20%", toggleActions: "play none none reverse" }
      });

      gsap.fromTo(".contact-info", { opacity: 0, x: 50 }, {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: infoRef.current, start: "top 85%", end: "bottom 20%", toggleActions: "play none none reverse" }
      });

      gsap.fromTo(".contact-item", { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".contact-item", start: "top 85%", end: "bottom 20%", toggleActions: "play none none reverse" }
      });

      gsap.fromTo(".contact-title", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".contact-title", start: "top 85%", end: "bottom 20%", toggleActions: "play none none reverse" }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "b200f176-bfcf-499d-bf6f-afe508d06951",
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const data = await res.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const contactInfo = [
    {
      icon: User,
      label: "Full Name",
      value: "Tejas Bandal",
      color: "text-electric-blue"
    },
    {
      icon: Mail,
      label: "Email",
      value: "tejas25t@gmail.com",
      link: "mailto:tejas25t@gmail.com",
      color: "text-neon-purple"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      color: "text-cyber-cyan"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/TejasBandal1",
      color: "text-foreground hover:text-electric-blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "www.linkedin.com/in/tejas-bandal-b23525282",
      color: "text-foreground hover:text-neon-purple"
    },
    {
      icon: Phone,
      label: "Phone",
      url: "tel:+91 8624891891",
      color: "text-foreground hover:text-cyber-cyan"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl animate-floating" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-electric-blue/5 rounded-full blur-3xl animate-floating" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="contact-title text-4xl lg:text-6xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="contact-title text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform data into insights? Let's collaborate on your next 
            data science project or discuss exciting opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div ref={formRef} className="contact-form">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="text-electric-blue" size={28} />
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Your Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pl-12 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pl-12 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 pl-12 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                    <MessageSquare className="absolute left-4 top-4 text-muted-foreground" size={18} />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-neon group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <Send size={20} />
                      Send Message
                    </div>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-matrix-green/10 border border-matrix-green/30 rounded-lg">
                    <CheckCircle className="text-matrix-green" size={20} />
                    <span className="text-matrix-green font-medium">Message sent successfully!</span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                    <AlertCircle className="text-destructive" size={20} />
                    <span className="text-destructive font-medium">Failed to send message. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info + Social + Collaborate */}
          <div ref={infoRef} className="contact-info space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item flex items-center gap-4 group">
                    <div className={`p-3 rounded-lg bg-background/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={info.color} size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="font-medium hover:text-gradient transition-all duration-300">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`contact-item p-4 rounded-lg bg-background/30 backdrop-blur-sm hover:scale-110 hover:shadow-glow transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Let's Collaborate</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to work on innovative data science projects, 
                machine learning applications, and full-stack solutions. Whether 
                you have a challenging problem to solve or an interesting 
                opportunity to discuss, I'd love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
