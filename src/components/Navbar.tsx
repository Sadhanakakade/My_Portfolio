import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#home')}
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-cyan-500/50 animate-gradient">
                  <Sparkles className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                  Sadhana.AI
                </span>
                <div className="text-xs text-gray-400 font-medium tracking-wider">
                  AI & Web Developer
                </div>
              </div>
            </button>
          </div>
          
          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 bg-gray-800/50 backdrop-blur-xl rounded-2xl p-2 border border-gray-700/50">
            {navItems.map((item) => {
              const sectionName = item.href.substring(1);
              const isActive = activeSection === sectionName;
              
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-50 animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Enhanced Resume Button */}
          <div className="hidden md:block">
            <a
              href="https://drive.google.com/file/d/1N765il4urjjS5dYE0BGaEIBzlGMWhNJD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-cyan-500/50 animate-gradient overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 blur opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <Download className="w-5 h-5 mr-2 relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Resume</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-3 text-gray-300 hover:text-white rounded-xl hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div className={`md:hidden transition-all duration-500 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-6 pt-4 pb-6 space-y-3 bg-gray-900/98 backdrop-blur-xl border-t border-gray-800/50">
          {navItems.map((item) => {
            const sectionName = item.href.substring(1);
            const isActive = activeSection === sectionName;
            
            return (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isActive 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4">
            <a
              href="https://drive.google.com/file/d/1N765il4urjjS5dYE0BGaEIBzlGMWhNJD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center w-full justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 transform hover:scale-105 shadow-lg animate-gradient"
            >
              <Download className="w-5 h-5 mr-2" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;