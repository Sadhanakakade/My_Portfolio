import React from 'react';
import { Briefcase, Calendar, ArrowUpRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI/ML & Full Stack Intern',
      company: 'Linux World',
      description: 'Worked on Linux, ML models & algorithms, Python automation, web scraping, Gen AI, Gen AI OOPs, prompt engineering, feature engineering, data analysis training.',
      technologies: ['Linux', 'Python', 'Machine Learning', 'AI', 'Web Scraping', 'Data Analysis'],
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'MERN Stack Developer Intern',
      company: 'Zeetron Networks Pvt. Ltd.',
      description: 'Full-stack development using MongoDB, Express, React, and Node. Led a team project, built APIs, and tested backend workflows.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'APIs', 'Team Leadership'],
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Frontend Developer Intern',
      company: 'CodSoft',
      description: 'Designed and developed responsive interfaces with HTML, CSS, JS, and Bootstrap. Focused on clean, reusable UI design.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design', 'UI/UX'],
      gradient: 'from-pink-400 to-red-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 transform hover:scale-[1.01] hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center mb-4 lg:mb-0">
                  <div className={`p-3 bg-gradient-to-r ${exp.gradient} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      {exp.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Recent</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-4 py-2 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50 group-hover:border-cyan-500/30 group-hover:text-white group-hover:bg-gray-600/50 transition-all duration-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;