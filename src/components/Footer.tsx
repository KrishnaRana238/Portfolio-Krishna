import React from 'react';
import { Github, Twitter, Linkedin, Code, FileCode } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-darker pt-12 pb-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold cyber-text">PORTFOLIO</a>
            <p className="text-cyber-light mt-2 max-w-xs">
              Creating futuristic digital experiences with modern web technologies.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/KrishnaRana238" 
              target="_blank" // Add this attribute
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-cyber-light hover:text-cyber-blue transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/krishna-rana-b38265231" 
              target="_blank" // Add this attribute
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-cyber-light hover:text-cyber-purple transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://x.com/KrishnaRana4821"
              target="_blank" // Add this attribute
              rel="noopener noreferrer" 
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-cyber-light hover:text-cyber-blue transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="https://leetcode.com/u/rana345212/" 
              target="_blank" // Add this attribute
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-cyber-light hover:text-cyber-pink transition-colors"
              aria-label="LeetCode"
            >
              <Code size={18} />
            </a>
            <a 
              href="https://www.geeksforgeeks.org/user/krishna4801a/"
              target="_blank" // Add this attribute
              rel="noopener noreferrer" 
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-cyber-light hover:text-cyber-purple transition-colors"
              aria-label="GeeksforGeeks"
            >
              <FileCode size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-cyber-light">
          <p>© {currentYear} Krishna Rana. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
