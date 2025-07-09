import React from 'react';
import { Award, ExternalLink, ArrowUpRight } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'MERN Stack Trainee',
      issuer: 'Zeetron Networks',
      link: 'https://drive.google.com/file/d/1YQOim5EWxfTjfyqp89_5fpx8oiiTLzmE/view?usp=sharing',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Web Development Internship',
      issuer: 'CodSoft',
      link: 'https://drive.google.com/file/d/1hHVvjlUFpRl4CLSDyZbQMKTsryEiIsUk/view?usp=sharing',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'SQL Basics',
      issuer: 'HackerRank',
      link: 'https://drive.google.com/file/d/1mR6NhJTEKhjWRqO_CklCyjIWSyLpbdSy/view?usp=sharing',
      gradient: 'from-pink-400 to-red-500'
    },
    {
      title: 'Java Essentials',
      issuer: 'Infosys',
      link: 'https://drive.google.com/file/d/1LKaCgveZN3U-Sb_UACPnGvzJC048Expw/view?usp=sharing',
      gradient: 'from-green-400 to-cyan-500'
    },
    {
      title: 'C Programming',
      issuer: 'NPTEL',
      link: 'https://drive.google.com/file/d/1Jvuv1eBtg7330Pa1nvsmtQ3yb2PLOPTd/view?usp=sharing',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Java Programming',
      issuer: 'NPTEL',
      link: 'https://drive.google.com/file/d/1Jvuv1eBtg7330Pa1nvsmtQ3yb2PLOPTd/view?usp=sharing',
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      title: 'Machine Learning',
      issuer: 'NPTEL',
      link: 'https://drive.google.com/file/d/10HMD6fjGwTI1IZHUGLesTEtEphntJh0u/view?usp=sharing',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      link: 'https://drive.google.com/file/d/1QXxnidzsvEGNU_vdnyh9IFI9Uk-XOX-D/view?usp=sharing',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'MongoDB Developer Toolkit',
      issuer: 'GeeksforGeeks',
      link: 'https://drive.google.com/file/d/1pG6NMO-BEJHDtv-mu_ELh2w1gr6Yfjx-/view?usp=sharing',
      gradient: 'from-pink-400 to-red-500'
    },
    {
      title: 'National Volleyball Player',
      issuer: 'AIU',
      link: 'https://drive.google.com/file/d/1ljmHcWREjAbawebRvqHhZct3FGaouYJM/view?usp=sharing',
      gradient: 'from-green-400 to-cyan-500'
    },
    {
      title: 'Best Sportsperson',
      issuer: 'PIET Annual Function 2024',
      link: 'https://drive.google.com/file/d/1_piLnAmAhBJwtXGc0Txa5lsNiFiaV9Qs/view?usp=sharing',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Girls Wanna Code',
      issuer: 'Flipkart',
      link: 'https://drive.google.com/file/d/1rOHi18H3nGMDfPiVcN0JVDdfVkX7zzvM/view?usp=sharing',
      gradient: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-r ${cert.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {cert.issuer}
                  </p>
                </div>
                
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full justify-center px-4 py-3 bg-gray-700/50 text-gray-300 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white transition-all duration-300 font-medium border border-gray-600/50 hover:border-transparent group-hover:transform group-hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </a>
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

export default Certifications;