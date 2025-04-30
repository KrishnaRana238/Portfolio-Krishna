import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type Certificate = {
  id: number;
  name: string;
  issuer: string;
  date: string;
  skills: string[];
  credentialLink?: string;
  image?: string;
  description?: string;
};

// Sample certificates data - you can add your real certificates here
const certificates: Certificate[] = [
  {
    id: 1,
    name: "Data Structure And Algorithms",
    issuer: "Udemy",
    date: "August 2024",
    skills: ["CPP", "Data Structure", "Algorithms"],
    credentialLink: "https://www.udemy.com/certificate/UC-ffca5e34-76f3-4c03-9a6e-680704af27c2/",
    description: "Comprehensive training on data structure and algorithms using C/C++"
  },
  {
    id: 2,
    name: "Google Ai Essentials",
    issuer: "Coursera",
    date: "January 2025",
    skills: ["Critical Thinking","Large Language Models (LLMs)", "AI"],
    credentialLink: "https://www.coursera.org/account/accomplishments/verify/IEUQVCH33LQA",
    description: "Develop strategies to stay up-to-date in the emerging landscape of AI"
  },
  {
    id: 3,
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    date: "November 2024",
    skills: ["Calculus", "Statistical Machine Learning", "Data Analysis"],
    credentialLink: "https://www.coursera.org/account/accomplishments/verify/9TA39HC4OEP1",
    description: "Build machine learning models in Python"
  },
  {
    id: 4,
    name: "Data Analysis with Tableau",
    issuer: "Coursera",
    date: "November 2024",
    skills: ["Tableau Software"],
    credentialLink: "https://www.coursera.org/account/accomplishments/verify/411QSTK15PAB",
    description: "Perform exploratory data analysis using Tableau and report insights using descriptive statistics and visualizations.."
  },
  {
    id: 5,
    name: "Excel Skills for Business: Essentials",
    issuer: "Coursera",
    date: "May 2024",
    skills: ["Spreadsheet Software", "Microsft Excel"],
    credentialLink: "https://coursera.org/share/97bce09c022d019af7d8fad82d92cd3e",
    description: "Develop job-relevant skills with hands-on projects"
  },
  {
    id: 6,
    name: "R Programming",
    issuer: "Coursera",
    date: "April 2024",
    skills: ["R Programming", "Statistical Programming", "Data Model"],
    credentialLink: "https://coursera.org/share/07e0e26385360413ae7bc85c56c1e61c",
    description: "Understand critical programming language concepts."
  }
  
];

const CertificateCard = ({ certificate }: { certificate: Certificate }) => {
  return (
    <div className="glass p-6 rounded-2xl hover:shadow-lg hover:shadow-cyber-blue/20 transition-all duration-300">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold">{certificate.name}</h3>
        <Award className="text-cyber-purple" size={24} />
      </div>
      
      <div className="mb-3">
        <p className="text-cyber-blue font-medium">{certificate.issuer}</p>
        <p className="text-sm text-cyber-light">{certificate.date}</p>
      </div>
      
      {certificate.description && (
        <p className="mb-4 text-cyber-light">{certificate.description}</p>
      )}
      
      <div className="flex flex-wrap gap-2 mb-4">
        {certificate.skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="bg-cyber-blue/10 text-cyber-blue border-cyber-blue/30">
            {skill}
          </Badge>
        ))}
      </div>
      
      {certificate.credentialLink && (
        <Button variant="outline" className="w-full mt-2 border-cyber-purple/50 hover:bg-cyber-purple/20" asChild>
          <a href={certificate.credentialLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            <span>View Certificate</span>
            <ExternalLink size={16} />
          </a>
        </Button>
      )}
    </div>
  );
};

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 bg-grid">
      <div className="section-container">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="cyber-text">Certificates</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-6"></div>
          <p className="text-cyber-light max-w-2xl mx-auto">
            A collection of my professional certifications, achievements, and completed courses that demonstrate my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map(certificate => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
