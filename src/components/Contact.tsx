import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-cyan-400" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'sadhanakakade@example.com',
                    gradient: 'from-cyan-400 to-blue-500'
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+917877274477',
                    gradient: 'from-purple-400 to-pink-500'
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'Jaipur, Rajasthan, India',
                    gradient: 'from-pink-400 to-red-500'
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center group">
                    <div className={`p-3 bg-gradient-to-r ${contact.gradient} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-4">Let's Connect!</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and innovation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Feel free to reach out through the contact form or connect with me on social media.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Send className="w-6 h-6 mr-3 text-cyan-400" />
              Send me a message
            </h3>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">Google Form Contact</h4>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Click the button below to access my contact form and send me a message directly.
                </p>
                <a
                  href="https://forms.google.com/your-form-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Open Contact Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;