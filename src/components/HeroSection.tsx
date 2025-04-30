
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyber-blue/20 filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyber-purple/20 filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-cyber-pink/20 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Hi, I'm</span>
            <span className="cyber-text text-6xl md:text-8xl font-extrabold">Krishna Rana</span>
          </h1>
          
          <div className="space-y-4 mb-8">
            <p className="text-xl md:text-2xl text-cyber-light max-w-2xl">
            Aspiring SDE & Data Analyst. Turning Complex Data into Actionable Insights 
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#projects" 
              className="glass px-8 py-3 rounded-2xl border border-cyber-blue/50 text-white hover:bg-cyber-blue/20 transition-all duration-300 animate-glow"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="glass px-8 py-3 rounded-2xl border border-cyber-purple/50 text-white hover:bg-cyber-purple/20 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
          
          <a 
            href="#about" 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300 flex flex-col items-center"
          >
            <span className="mb-0.1 text-sm">Scroll Down</span>
            <ArrowDown className="animate-bounce" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
