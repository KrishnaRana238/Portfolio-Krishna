
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
            <p className="text-cyber-light mb-6">
            
            I am a motivated and ambitious final-year Computer Science Engineering student with a minor in Data Science at Lovely Professional University. Driven by curiosity and a commitment to continuous learning, I am passionate about data analysis, software development, and building innovative, impactful solutions to real-world problems.
            </p>
            <p className="text-cyber-light mb-6">
            Throughout my academic journey, I have gained hands-on experience in machine learning, full-stack development, backend APIs, data visualization, and cloud-integrated projects. I enjoy transforming raw data into meaningful insights and developing clean, efficient, and scalable software systems.
            </p>
            <p className="text-cyber-light mb-6">
            I am currently seeking internship and full-time opportunities where I can contribute my skills, grow under experienced mentors, and work on cutting-edge technologies that create meaningful impact.
            </p>
            <p className="text-cyber-light mb-6">
            Beyond academics, I thrive in collaborative environments—working with like-minded peers, exchanging ideas, participating in hackathons, and staying updated with modern tools and industry trends. I am always open to connecting with students, professionals, and tech enthusiasts to learn, innovate, and build solutions that make a difference.
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
