import React from 'react';
import { Github, ExternalLink, Brain, Heart, Zap, Home, Eye, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Fashion_GeniAI',
      description: 'AI chatbot that suggests outfits based on user photo, age, gender, and occasion using OpenAI and computer vision.',
      techStack: ['Python', 'OpenCV', 'CVzone', 'OpenAI', 'Google GenerativeAI', 'Gradio', 'Web Scraping', 'Gemini API'],
      github: 'https://github.com/Sadhanakakade/Fashion_GenieAI.git',
      icon: Brain,
      gradient: 'from-cyan-400 to-blue-500',
      features: [
        'AI-based outfit suggestions',
        'Photo and camera input',
        'Age & occasion-based styling',
        'Real-time fashion trends scraping',
        'Gradio chatbot interface'
      ]
    },
    {
      title: 'The Cozy Therapist',
      description: 'Mood-based AI wellness chatbot with secure login, SQL storage, and voice-based interaction for comfort and mental support.',
      techStack: ['Python', 'OpenAI', 'Web Scraping', 'Gradio', 'API Integration'],
      github: '#',
      icon: Heart,
      gradient: 'from-pink-400 to-red-500',
      features: [
        'Mood-based personalized support',
        'Secure login system',
        'SQL database user storage',
        'Voice input/output support',
        'Emotion-aware suggestions'
      ]
    },
    {
      title: 'Smart Task Automator',
      description: 'Menu-driven AI desktop tool for automating tasks like opening apps, searching the web, sending emails, etc., using voice and Python libraries.',
      techStack: ['Linux', 'AI', 'Automation tools', 'Gradio', 'Python', 'OpenAI', 'ChatGPT-3.5-turbo'],
      github: 'https://github.com/Sadhanakakade/Linux-AI-Tools-Smart-Automator.git',
      icon: Zap,
      gradient: 'from-purple-400 to-pink-500',
      features: [
        'Menu-driven automation tool',
        'Voice and text command input',
        'App and browser launcher',
        'AI-powered web search',
        'Email sending automation'
      ]
    },
    {
      title: 'StayMate',
      description: 'StayMate is a hotel booking web application where users can log in, browse hotels, read and post reviews, and book stays based on ratings.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'MongoDB'],
      github: '#',
      icon: Home,
      gradient: 'from-green-400 to-cyan-500',
      features: [
        'Dual login roles: user/renderer',
        'Hotel listing and booking',
        'Post and read hotel reviews',
        'Real-time rating-based suggestions',
        'Responsive and modern UI'
      ]
    },
    {
      title: 'Drowsiness Detection System',
      description: 'Real-time system that detects driver fatigue using facial landmarks and alerts the user to prevent accidents.',
      techStack: ['Python', 'Computer Vision', 'OpenCV', 'CVzone', 'Gradio'],
      github: 'https://github.com/Sadhanakakade/Drowsiness_Detection_System.git',
      icon: Eye,
      gradient: 'from-yellow-400 to-orange-500',
      features: [
        'Real-time eye monitoring',
        'Driver fatigue alert system',
        'Face landmark detection',
        'OpenCV + CVzone integration',
        'Gradio UI for interaction'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="px-6 pb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                <div className="space-y-2">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="px-6 pb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50 group-hover:border-cyan-500/30 group-hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1 bg-gray-700/30 text-gray-400 text-xs rounded-full border border-gray-600/30">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 flex space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 hover:text-white transition-all duration-300 text-sm font-medium border border-gray-600/50 hover:border-gray-500/50"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
                <button className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium transform hover:scale-105">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </button>
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

export default Projects;