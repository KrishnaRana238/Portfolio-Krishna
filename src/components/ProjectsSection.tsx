import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image1 from './images/freelancia.jpg';
// Import other images as needed
 import Image2 from './images/ecommerse.jpg';
import Image3 from './images/weather.jpg';
import Image4 from './images/car.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: { src: string; alt: string } | string; // Can be image object or gradient string
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Freelancia",
    description: "A freelancing website with direct login authentication and seamless API integration with MongoDB database. Tested using Postman for reliability.",
    tags: ["React", "Tailwind CSS", "MongoDB", "Postman"],
    image: { src: Image1, alt: "Freelancia Platform" },
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Mestore",
    description: "E-commerce website offering various products with intuitive user interface and responsive design for seamless shopping experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: { src: Image2, alt: "Mestore Interface" }, // Replace with actual image
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Weather Prediction Model Comparison",
    description: "Developed weather prediction model using KNN, SVM, Decision Tree, Random Forest, and Naive Bayes. \nConducting data preprocessing and split the dataset into training (70%) and testing (30%) sets. \nImplement and evaluate model using matrices such as accuracy, precision, recall F1-score, and ROC-AUC. ",
    tags: ["R", "Machine Learning"],
    image: { src: Image3, alt: "Weather Model Dashboard" }, // Replace with actual image
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Car and Bike Accident Report Dashboard",
    description: "Developed an interactive dashboard utilizing R libraries such as flex dashboard, knitr, DT, pivot table and ggplot2 for dynamic data visualization of car and bike accidents across the USA. \nThe dashboard allow user to explore trends through graphical representations and offers interactive tables for comprehensive data filtering. \nIt provides actionable insights and strategies based on trends to help reduce accident rates.",
    tags: ["R", "Machine Learning Libraries"],
    image: { src: Image4, alt: "Accident Dashboard" }, // Replace with actual image
    githubUrl: "#",
    liveUrl: "#"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="glass rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-cyber-blue/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 relative overflow-hidden">
        {/* Conditionally render image or gradient background */}
        {typeof project.image === 'object' ? (
          <img 
            src={project.image.src} 
            alt={project.image.alt} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className={`${project.image} absolute inset-0`} />
        )}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-white/30">{project.title.split(" ")[0]}</span>
        </div>

        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href={project.githubUrl} 
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="View GitHub repository"
          >
            <Github size={18} className="text-white" />
          </a>
          <a 
            href={project.liveUrl} 
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="View live project"
          >
            <ExternalLink size={18} className="text-white" />
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-cyber-light mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs px-3 py-1 glass rounded-full text-cyber-blue">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-grid">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="cyber-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;