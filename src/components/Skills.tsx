import React, { useState, useEffect } from 'react';
import { Code, Palette, Brain, Wrench, Sparkles, Cloud, Database, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      iconBg: 'from-cyan-400 to-blue-500',
      skills: [
        'Java (OOPS, DSA)', 'Python', 'C', 'JavaScript', 'React JS'
      ]
    },
    {
      title: 'Frontend Development',
      icon: Palette,
      iconBg: 'from-pink-400 to-purple-500',
      skills: [
        'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'
      ]
    },
    {
      title: 'AI & ML',
      icon: Brain,
      iconBg: 'from-emerald-400 to-teal-500',
      skills: [
        'Data Handling: Numpy, Pandas',
        'Data Visualization: Matplotlib, Seaborn',
        'Computer Vision: OpenCV, CVZone',
        'AI: OpenAI, Gen AI'
      ]
    },
    {
      title: 'DBMS & Tools',
      icon: Database,
      iconBg: 'from-yellow-400 to-orange-500',
      skills: [
        'SQL', 'MongoDB', 'Figma', 'Canva', 'Linux OS'
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-8 backdrop-blur-sm border border-cyan-500/30">
            <Sparkles className="w-6 h-6 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-cyan-400 font-semibold text-lg">Skills & Expertise</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Skills &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
            A comprehensive toolkit for{' '}
            <span className="text-cyan-400 font-semibold">modern development</span>,{' '}
            <span className="text-purple-400 font-semibold">deployment</span>, and{' '}
            <span className="text-pink-400 font-semibold">AI integration</span>
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-700 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`p-4 bg-gradient-to-r ${category.iconBg} rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-500">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full inline-block"></span>
                    <span className="text-lg text-white">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '15+', label: 'Technologies', icon: Zap, color: 'from-cyan-400 to-blue-500' },
            { number: '10+', label: 'Projects', icon: Code, color: 'from-purple-400 to-pink-500' },
            { number: '3+', label: 'Internships', icon: Wrench, color: 'from-emerald-400 to-teal-500' },
            { number: '12+', label: 'Certifications', icon: Sparkles, color: 'from-yellow-400 to-orange-500' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="group text-center p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
              {/* Stat glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;