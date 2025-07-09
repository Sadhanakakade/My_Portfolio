import React, { useEffect, useState } from 'react';
import { Github, Linkedin, ExternalLink, Download, ArrowDown } from 'lucide-react';
import profileImg from '../assets/profile.jpg.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-spin-slow"></div>
              <img
                src={profileImg}
                alt="Sadhana Kakade"
                className="w-44 h-44 rounded-full object-cover border-4 border-gray-900 absolute top-2 left-2 shadow-2xl"
              />
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Hello, I'm </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Sadhana Kakade
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              Building AI-Powered Web & Automation Solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into <span className="text-cyan-400 font-semibold">scalable, smart, and user-focused solutions</span> with AI & Web
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { href: "https://www.linkedin.com/in/sadhana-kakade-715780276", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/Sadhanakakade/", icon: Github, label: "GitHub" },
              { href: "#", icon: ExternalLink, label: "Portfolio" }
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <social.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              View My Projects
            </button>
            <a
              href="https://drive.google.com/file/d/1N765il4urjjS5dYE0BGaEIBzlGMWhNJD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white font-semibold rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 hover:bg-gray-700/50"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;