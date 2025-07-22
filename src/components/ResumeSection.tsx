import React from 'react';
import { FileText, Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import KrishnaResume from './resume/Krishna-Web.pdf';

const experienceData = [
  {
    id: 1,
    role: "Graphic Designer",
    company: "Zepp Media",
    period: "March 2022 - December 2023",
    description: "Involved in creating social media post, editing videos and designing thumbnails with managing both YouTube and Instagram platforms. Tech: Canva, Adobe Photoshop, Davinci, Capcut"
  }
];

const trainingData = [
  {
    id: 1,
    role: "Python Full Stack Development",
    company: "ByteXl",
    period: "June 2025 - July 2025",
    description: "Developed a sales report for Diwali saree sales, the project involves data cleaning processing, statistical analysis derives insights into sales performance on Jupyter Notebook. Tech: Python, Data Analytics tools"
  },
  {
    id: 2,
    role: "Data Science Intern",
    company: "Coding Block",
    period: "June 2024 - August 2024",
    description: "Developed a sales report for Diwali saree sales, the project involves data cleaning processing, statistical analysis derives insights into sales performance on Jupyter Notebook. Tech: Python, Data Analytics tools"
  }
];

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology - Computer Science and Engineering",
    institution: "Lovely Professional University Punjab, India",
    period: "September 2022 - March 2026",
    description: "CGPA: 7.09"
  },
  {
    id: 2,
    degree: "Intermediate",
    institution: "Khaira Higher Secondary School Khaira, Balasore, Odisha",
    period: "March 2019 - June 2021",
    description: "Percentage: 72.33%"
  },
  {
    id: 3,
    degree: "Matriculation",
    institution: "Happy Home School Soro, Balasore, Odisha",
    period: "Not Specified",
    description: "Percentage: 72.67%"
  }
];

const TimelineItem = ({ item, type }: { item: any, type: 'experience' | 'education' }) => {
  return (
    <div className="relative pl-10 pb-10 last:pb-0">
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-cyber-blue to-cyber-purple"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 rounded-full bg-cyber-blue"></div>
      
      <div className="glass p-6 rounded-2xl">
        <div className="flex flex-wrap justify-between items-center mb-3">
          <h3 className="text-lg font-bold">{type === 'experience' ? item.role : item.degree}</h3>
          <span className="text-sm text-cyber-light">{item.period}</span>
        </div>
        <div className="mb-3 text-cyber-blue font-medium">
          {type === 'experience' ? item.company : item.institution}
        </div>
        <p className="text-cyber-light text-sm">{item.description}</p>
      </div>
    </div>
  );
};

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-grid">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Krishna Rana's <span className="cyber-text">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-6"></div>
          
          <a 
            href={KrishnaResume} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-2xl border border-cyber-blue/50 text-white hover:bg-cyber-blue/20 transition-all duration-300"
          >
            <FileText size={18} />
            <span>Download CV</span>
            <Download size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center">
                <Briefcase className="text-cyber-blue" size={20} />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            
            <div className="timeline">
              {experienceData.map((item) => (
                <TimelineItem key={item.id} item={item} type="experience" />
              ))}
            </div>

            {/* Training Section */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center">
                  <Award className="text-cyber-purple" size={20} />
                </div>
                <h3 className="text-2xl font-bold">Training</h3>
              </div>
              
              <div className="timeline">
                {trainingData.map((item) => (
                  <TimelineItem key={item.id} item={item} type="experience" />
                ))}
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center">
                <GraduationCap className="text-cyber-purple" size={20} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="timeline">
              {educationData.map((item) => (
                <TimelineItem key={item.id} item={item} type="education" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
