
import React from 'react';
import { 
  Code, 
  Languages, 
  LayoutGrid,
  Wrench,
  Brain
} from 'lucide-react';

const skillCategories = [
  {
    name: "Languages",
    icon: <Languages className="text-cyber-blue" size={28} />,
    skills: ["C", "C++", "Python", "JavaScript", "R", "SQL","HTML and CSS"]
  },
  {
    name: "Frameworks",
    icon: <LayoutGrid className="text-cyber-purple" size={28} />,
    skills: [ "Tableau", "Frameworks", "React", "Node.js", "Django", "Flask"]
  },
  {
    name: "Libraries",
    icon: <Languages className="text-cyber-blue" size={28} />,
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "Keras", "PyTorch"]
  },
  {
    name: "Tools/Platforms",
    icon: <Wrench className="text-cyber-pink" size={28} />,
    skills: ["Git","Github","Pycharm" ,"MySQL", "Excel", "Adobe Photoshop", "Davinci"]
  },
  {
    name: "Soft Skills",
    icon: <Brain className="text-cyber-blue" size={28} />,
    skills: ["Problem-Solving Skills", "Team Player", "Project Management", "Adaptability"]
  }
];

const SkillCard = ({ category }: { category: typeof skillCategories[0] }) => {
  return (
    <div className="glass p-6 rounded-2xl">
      <div className="flex items-center gap-3 mb-4">
        {category.icon}
        <h3 className="text-xl font-bold">{category.name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <span 
            key={index}
            className="text-xs px-3 py-1 bg-white/5 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-cyber-dark">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="cyber-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
