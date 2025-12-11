import React, { useState } from 'react';
import { Code, Smartphone, Settings, GraduationCap, Wrench, Mail, Phone, MapPin, Menu, X, CheckCircle } from 'lucide-react';

export default function ITServicesApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Full-stack web solutions using modern technologies",
      technologies: ["MERN Stack", "MEAN Stack", "React.js", "Node.js", "MongoDB", "Express.js"],
      pricing: {
        basic: "$500 - $1,500",
        standard: "$1,500 - $3,500",
        premium: "$3,500 - $10,000+"
      }
    },
    {
      id: 2,
      icon: <Smartphone className="w-12 h-12" />,
      title: "App Development",
      description: "Native Android applications with robust performance",
      technologies: ["Kotlin", "Java", "Android SDK", "Firebase", "REST APIs"],
      pricing: {
        basic: "$800 - $2,000",
        standard: "$2,000 - $5,000",
        premium: "$5,000 - $15,000+"
      }
    },
    {
      id: 3,
      icon: <Settings className="w-12 h-12" />,
      title: "Software Development",
      description: "Enterprise-grade software solutions",
      technologies: [".NET Framework", "C#", "ASP.NET", "SQL Server", "WPF"],
      pricing: {
        basic: "$1,000 - $3,000",
        standard: "$3,000 - $7,000",
        premium: "$7,000 - $20,000+"
      }
    },
    {
      id: 4,
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Student Projects",
      description: "Final year projects and academic assistance",
      technologies: ["All Technologies", "Documentation", "Presentation", "Code Explanation"],
      pricing: {
        basic: "$200 - $500",
        standard: "$500 - $1,200",
        premium: "$1,200 - $3,000"
      }
    },
    {
      id: 5,
      icon: <Wrench className="w-12 h-12" />,
      title: "Maintenance & Support",
      description: "Ongoing support for websites, apps, and software",
      technologies: ["Bug Fixes", "Updates", "Performance Optimization", "Security Patches"],
      pricing: {
        basic: "$50 - $150/month",
        standard: "$150 - $400/month",
        premium: "$400 - $1,000+/month"
      }
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">TechSolutions</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-blue-400 transition">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 transition">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-blue-500/20">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-300 hover:text-blue-400">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-300 hover:text-blue-400">Services</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-blue-400">About</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-blue-400">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Professional IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your ideas into reality with our expert development team.
            From web apps to mobile solutions, we deliver excellence.
          </p>
          <button
            onClick={() => scrollToSection('services')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
          >
            Explore Our Services
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Our Services</h2>
          <p className="text-gray-400 text-center mb-12">Comprehensive IT solutions tailored to your needs</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="bg-slate-900/80 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 transition cursor-pointer transform hover:scale-105"
              >
                <div className="text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-blue-400 hover:text-blue-300 font-semibold">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
          <div className="bg-slate-900 rounded-xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="text-blue-400">{selectedService.icon}</div>
                <h3 className="text-3xl font-bold text-white">{selectedService.title}</h3>
              </div>
              <button onClick={() => setSelectedService(null)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-gray-300 mb-6">{selectedService.description}</p>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-white mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-blue-900/30 text-blue-300 px-4 py-2 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Pricing Plans</h4>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-4 border border-blue-500/20">
                  <h5 className="text-lg font-semibold text-blue-400 mb-2">Basic</h5>
                  <p className="text-2xl font-bold text-white">{selectedService.pricing.basic}</p>
                  <p className="text-gray-400 text-sm mt-2">Perfect for small projects and startups</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-4 border border-blue-500/40">
                  <h5 className="text-lg font-semibold text-blue-400 mb-2">Standard</h5>
                  <p className="text-2xl font-bold text-white">{selectedService.pricing.standard}</p>
                  <p className="text-gray-400 text-sm mt-2">Ideal for medium-sized businesses</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-4 border border-blue-500/60">
                  <h5 className="text-lg font-semibold text-blue-400 mb-2">Premium</h5>
                  <p className="text-2xl font-bold text-white">{selectedService.pricing.premium}</p>
                  <p className="text-gray-400 text-sm mt-2">Enterprise solutions with full support</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Us?</h2>
              <p className="text-gray-300 mb-6">
                We are a team of passionate developers committed to delivering high-quality IT solutions
                that drive business growth and innovation.
              </p>
              <div className="space-y-4">
                {[
                  "Expert team with 5+ years experience",
                  "On-time delivery guaranteed",
                  "24/7 customer support",
                  "Competitive pricing",
                  "Latest technology stack"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Process</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Consultation", desc: "Understand your requirements" },
                  { step: "2", title: "Planning", desc: "Create detailed project roadmap" },
                  { step: "3", title: "Development", desc: "Build with best practices" },
                  { step: "4", title: "Delivery", desc: "Deploy and provide support" }
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-blue-100 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-center mb-12">Ready to start your project? Contact us today!</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-400">contact@techsolutions.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">123 Tech Street, Digital City</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-900 border border-blue-500/20 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-900 border border-blue-500/20 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full bg-slate-900 border border-blue-500/20 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
              ></textarea>
              <button
                onClick={(e) => e.preventDefault()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-blue-500/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2024 TechSolutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}