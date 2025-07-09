import React from 'react';
import { Github, Linkedin, ExternalLink, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Sadhana Kakade
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI & Web Developer passionate about building innovative solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              {[
                { href: "https://www.linkedin.com/in/sadhana-kakade-715780276", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/Sadhanakakade/", icon: Github, label: "GitHub" },
                { href: "#", icon: ExternalLink, label: "Portfolio" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#experience', label: 'Experience' },
                { href: '#certifications', label: 'Certifications' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Python', 'AI/ML', 'MongoDB', 'TailwindCSS'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 text-cyan-400 text-sm rounded-full hover:border-cyan-500/50 hover:bg-gray-700/50 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 flex items-center mb-4 md:mb-0">
              Made with <Heart className="w-4 h-4 text-red-500 mx-2" /> by Sadhana Kakade
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-gray-500 text-sm">
                © 2024 Sadhana Kakade. All rights reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="p-2 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 group"
              >
                <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;