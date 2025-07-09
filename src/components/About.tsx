import React from 'react';
import { Sparkles, Target, Rocket, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Mission-Driven Developer",
      description: "Creating AI-powered solutions that solve real-world problems and enhance user experiences.",
      gradient: "from-emerald-400 via-cyan-500 to-blue-600"
    },
    {
      icon: Rocket,
      title: "Innovation Enthusiast",
      description: "Constantly exploring cutting-edge technologies in AI/ML, web development, and automation.",
      gradient: "from-purple-400 via-pink-500 to-red-500"
    },
    {
      icon: Award,
      title: "Achievement Focused",
      description: "Best Sportsperson 2024 with a track record of successful internships and open-source contributions.",
      gradient: "from-yellow-400 via-orange-500 to-red-600"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm border border-cyan-500/30">
            <Sparkles className="w-6 h-6 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-semibold text-lg">About Me</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Passionate About{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Innovation
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-700 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-500">
                  Hello! I'm <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Sadhana Kakade</span>, 
                  a B.Tech student at Poornima Institute of Engineering and Technology, passionate about building innovative and impactful software solutions.
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  With a strong foundation in <span className="text-cyan-400 font-semibold">Java, Web Development, and SQL</span>, 
                  I've explored technologies from the MERN stack to AI/ML, creating solutions that make a real difference.
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  I completed a MERN stack internship at <span className="text-purple-400 font-semibold">Zeetron Networks Pvt. Ltd.</span>, 
                  led team projects, and contributed to open-source through GirlScript Summer of Code 2024.
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  When I'm not coding, I enjoy sports and was honored as the <span className="text-yellow-400 font-semibold">Best Sportsperson of the Year 2024</span>, 
                  representing my college in kabaddi, kho-kho, throwball, and football tournaments.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-700 transform hover:scale-[1.03] hover:shadow-xl hover:shadow-cyan-500/10"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-4 bg-gradient-to-r ${highlight.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <highlight.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-500">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;