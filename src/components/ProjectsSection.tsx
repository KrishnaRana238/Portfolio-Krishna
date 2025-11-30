import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image1 from './images/freelancia.jpg';
// Import other images as needed
 import Image2 from './images/ecommerse.jpg';
import Image3 from './images/weather.jpg';
import Image4 from './images/car.jpg';
import Image5 from './images/chatbot.jpg';
import Image6 from './images/quiz.jpg';
import Image7 from './images/facebook.png';


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
    title: "Agentic Facebook Analyst",
    description: "Developed an autonomous multi-agent system comprising a Planner, Data Analyst, Insight Generator, Evaluator, and Creative Generator to diagnose Facebook Ads ROAS fluctuations and recommend targeted creative improvements. The system integrates quantitative performance metrics with messaging-level creative data using a synthetic eCommerce dataset. Implemented robust statistical validation including t-tests, confidence scoring, and retry logic to ensure only grounded, high-certainty insights are produced. Leveraged clustering techniques for creative pattern discovery and automated generation of new ad concepts. Ensured full reproducibility through seeded randomness, pinned dependencies, and a sample/full dataset execution toggle. The system outputs structured artifacts such as insights.json, creatives.json, and report.md, along with comprehensive observability logs for transparency. Maintained clean, modular, and testable code, supported by complete unit test coverage (100% pass rate) and full compliance with evaluation rubrics for agentic reasoning, insight quality, validation rigor, and creative recommendation effectiveness. write in resume description",
    tags: ["Python", "SciPy", "Pandas","Scikit_Learn", "LangFuse", "Pytest","PyYAML"],
    image: { src: Image7, alt: "Freelancia Platform" },
    githubUrl: "https://github.com/KrishnaRana238/kasparro-agentic-fb-analyst--Krishna-Rana-",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Clang - AI Chatbot",
    description: "The Enhanced Clang AI Chatbot System is a full-stack AI solution developed using Django REST Framework and Python, integrating capabilities such as NLP processing, grammar correction, mathematical problem solving, and code generation. It features a robust multi-LLM architecture utilizing Cohere, Groq, Mistral, and Together APIs with intelligent fallback mechanisms and asynchronous processing to ensure 99.9% uptime and sub-3 second response times. The system incorporates an advanced NLP pipeline built with SpaCy, NLTK, TextBlob, and SymPy to support real-time sentiment analysis, intent recognition, grammar checking, and symbolic computation. A scalable microservices architecture supports session management via UUIDs, a SQLite-based knowledge base, and RESTful APIs for seamless, real-time conversational AI capabilities.",
    tags: ["Python", "Django", "RESTful Api","SQLite", "NLP", "AI"],
    image: { src: Image5, alt: "Freelancia Platform" },
    githubUrl: "https://github.com/KrishnaRana238/clang_chatbot_ai",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Quizmaster - Online Quiz Platform",
    description: "Developed a dynamic web application named Quiz Master using Django, Python, SQLite, and RESTful APIs to deliver an interactive quiz experience. The platform supports user authentication, quiz creation, real-time scoring, and result tracking. Backend APIs were tested and documented using Postman to ensure reliable performance and smooth integration. The project demonstrates strong backend development skills, REST API design, and full-stack implementation with efficient data handling through SQLite.",
    tags: ["Django", "Python", "SQLite","RESTful API", "Postman"],
    image: { src: Image6, alt: "Freelancia Platform" },
    githubUrl: "https://github.com/KrishnaRana238/QuizMaster",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Freelancia",
    description: "Developed a responsive freelancing web platform using React and Tailwind CSS, emphasizing modern UI design and an intuitive user experience. Implemented direct login functionality to ensure smooth and secure user authentication. Integrated RESTful APIs to enable efficient communication between the frontend and backend, supporting real-time data interaction. The platform delivers seamless functionality across devices, showcasing strong frontend development and API integration skills.",
    tags: ["React", "Tailwind CSS", "MongoDB", "Postman"],
    image: { src: Image1, alt: "Freelancia Platform" },
    githubUrl: "https://github.com/KrishnaRana238/Freelancia",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "Mestore",
    description: "Mestore is a feature-rich e-commerce website offering a wide range of products through an intuitive and visually appealing user interface. The platform is built with a fully responsive design, ensuring a seamless and consistent shopping experience across all devices. It includes essential e-commerce functionalities such as product browsing, cart management, and secure checkout, optimized for performance and user engagement. The project highlights strong frontend design principles and user-centered development for modern online retail.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: { src: Image2, alt: "Mestore Interface" }, // Replace with actual image
    githubUrl: "https://github.com/KrishnaRana238/MESTORE-WEBSITE_",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "Weather Prediction Model Comparison",
    description: "Developed weather prediction model using KNN, SVM, Decision Tree, Random Forest, and Naive Bayes. \nConducting data preprocessing and split the dataset into training (70%) and testing (30%) sets. \nImplement and evaluate model using matrices such as accuracy, precision, recall F1-score, and ROC-AUC. ",
    tags: ["R", "Machine Learning"],
    image: { src: Image3, alt: "Weather Model Dashboard" }, // Replace with actual image
    githubUrl: "https://github.com/KrishnaRana238/Weather_Prediction_Model",
    liveUrl: "#"
  },
  {
    id: 7,
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