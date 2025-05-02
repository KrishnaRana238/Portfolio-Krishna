
import React from 'react';
import { User, Code, Mail } from 'lucide-react';
import KrishnaImage from './images/krishna.jpeg';
const AboutSection = () => {
  return (
    <section id="about" className="bg-cyber-dark py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="cyber-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="col-span-1 lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border-2 border-x-cyber-light/30 w-64 h-60 md:w-80 md:h-80 animate-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber/20 to-cyber-light/20"></div>
                {/* Replace with your actual image */}
                 <img 
                  src={KrishnaImage} // Use the imported image
                  alt="Krishna" 
                  className="w-full h-full object-cover"
                  />
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <User size={80} className="text-cyber-light/50" />
                </div>
              </div>
              
              <div className="absolute -bottom-5 -right-5 w-24 h-24 glass rounded-2xl grid place-items-center">
                <Code size={36} className="text-cyber-blue" />
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <h3 className="text-2xl font-bold mb-4">Developer & Graphic Designer</h3>
            <p className="text-cyber-light mb-6">
            
            I have been dedicated to enhancing my skills and knowledge in various fields since class 10, consistently demonstrating a strong commitment to personal growth and professional development. My goal has been to gain hands-on experience and strengthen my technical skills—particularly in data analysis and programming—while striving to deliver high-quality results that exceed client expectations.
            </p>
            <p className="text-cyber-light mb-6">
            To achieve this, I pursued multiple internships and freelance opportunities, actively working on projects that required strong problem-solving abilities. I sharpened my proficiency in programming languages such as C++, Java, and Python through regular participation in hackathons and competitive coding on platforms like LeetCode, GeeksforGeeks, and HackerRank. I also expanded my expertise in data analysis by using tools like Excel, R, and Tableau, along with a range of specialized software designed to meet diverse analytical needs.
            </p>
            <p className="text-cyber-light mb-6">
            I thrive in collaborative environments and am committed to continuous learning. I am eager to contribute my skills to innovative projects that address real-world challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <Mail className="text-cyber-purple mt-1" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-cyber-light text-sm">rana345212@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="glass p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <Code className="text-cyber-blue mt-1" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Experience</h4>
                    <p className="text-cyber-light text-sm">Fresher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
