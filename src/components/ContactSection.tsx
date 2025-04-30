import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a mailto link with the email address
    const email = 'rana345212@gmail.com';
    const subject = e.target.elements.subject.value;
    const body = e.target.elements.message.value;

    // Construct the mailto URL
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the default email client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 bg-cyber-dark">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="cyber-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-cyber-light mb-8">
              Feel free to reach out to me for collaborations, job opportunities, or just to say hello! 
              I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center mt-1">
                  <Mail className="text-cyber-blue" size={18} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-cyber-light">rana345212@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center mt-1">
                  <MapPin className="text-cyber-purple" size={18} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-cyber-light">Soro, Balasore, Odisha</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center mt-1">
                  <Phone className="text-cyber-pink" size={18} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-cyber-light">+91-9668582461</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 glass rounded-2xl border border-white/10 focus:outline-none focus:border-cyber-blue/50 transition-colors bg-white/5"
                    placeholder="John Doe"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 glass rounded-2xl border border-white/10 focus:outline-none focus:border-cyber-blue/50 transition-colors bg-white/5"
                    placeholder="john@example.com"
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 glass rounded-2xl border border-white/10 focus:outline-none focus:border-cyber-blue/50 transition-colors bg-white/5"
                  placeholder="Project Inquiry"
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 glass rounded-2xl border border-white/10 focus:outline-none focus:border-cyber-blue/50 transition-colors bg-white/5"
                  placeholder="I'd like to talk about..."
                  required 
                />
              </div>
              
              <button 
                type="submit" 
                className="cyber-gradient px-6 py-3 rounded-2xl text-white font-medium flex items-center gap-2 hover:scale-[1.02] transition-transform"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;