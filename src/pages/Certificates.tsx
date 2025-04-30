import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
    name: "Data Science Fundamentals",
    issuer: "Coding Block",
    date: "August 2024",
    skills: ["Python", "Data Analytics", "Machine Learning"],
    credentialLink: "https://example.com/cert1",
    description: "Comprehensive training on data analysis, visualization, and statistical methods using Python."
  },
  {
    id: 2,
    name: "Graphic Design Masterclass",
    issuer: "Zepp Media",
    date: "November 2023",
    skills: ["Adobe Photoshop", "Canva", "Video Editing"],
    credentialLink: "https://example.com/cert2",
    description: "Advanced training in digital design, social media content creation, and video production."
  },
  {
    id: 3,
    name: "Web Development Bootcamp",
    issuer: "LPU Tech Hub",
    date: "May 2023",
    skills: ["HTML", "CSS", "JavaScript"],
    credentialLink: "https://example.com/cert3",
    description: "Intensive course covering modern frontend development techniques and responsive design principles."
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

const Certificates = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cyber-darker">
        <section className="py-20 bg-grid">
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
      </main>
      <Footer />
    </>
  );
};

export default Certificates;
