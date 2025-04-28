import { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowRight, Calendar, Github, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

interface FutureProject {
  id: number;
  title: string;
  description: string;
  timeline: string;
  features: string[];
  technologies: string[];
  mockupImage: string;
  status: 'planning' | 'in-progress' | 'upcoming';
}

const futureProjects: FutureProject[] = [
  {
    id: 1,
    title: "AI-Powered Content Generator",
    description: "A sophisticated content generation platform leveraging OpenAI's GPT-4 to create high-quality, context-aware content for various purposes.",
    timeline: "Q3 2024",
    features: [
      "Multiple content types support (blog posts, social media, emails)",
      "Custom training on brand voice and style",
      "SEO optimization suggestions",
      "Content performance analytics"
    ],
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "TypeScript"],
    mockupImage: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    status: "planning"
  },
  {
    id: 2,
    title: "Blockchain-based Supply Chain",
    description: "A transparent supply chain management system using blockchain technology to track products from origin to delivery.",
    timeline: "Q4 2024",
    features: [
      "Real-time product tracking",
      "Smart contract integration",
      "QR code scanning system",
      "Supplier verification"
    ],
    technologies: ["Ethereum", "Solidity", "React", "Node.js", "Web3.js"],
    mockupImage: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg",
    status: "upcoming"
  },
  {
    id: 3,
    title: "Virtual Event Platform",
    description: "An immersive virtual event platform with real-time interaction, networking capabilities, and analytics.",
    timeline: "Q2 2024",
    features: [
      "3D virtual environments",
      "Live streaming integration",
      "Networking rooms",
      "Interactive workshops"
    ],
    technologies: ["Three.js", "WebRTC", "React", "Node.js", "Socket.io"],
    mockupImage: "https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg",
    status: "in-progress"
  }
];

const ProjectOverview = ({ project }: { project: FutureProject }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        <img 
          src={project.mockupImage} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 right-4">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
            project.status === 'in-progress' ? 'bg-green-500/80 text-white' :
            project.status === 'planning' ? 'bg-yellow-500/80 text-white' :
            'bg-blue-500/80 text-white'
          }`}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Calendar size={16} className="mr-2" />
            {project.timeline}
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight size={16} className="mr-2 mt-1 text-purple-600 dark:text-purple-400" />
                <span className="text-gray-600 dark:text-gray-400">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FutureProjects = () => {
  const [filter, setFilter] = useState<'all' | 'planning' | 'in-progress' | 'upcoming'>('all');
  const location = useLocation();
  
  const filteredProjects = filter === 'all' 
    ? futureProjects 
    : futureProjects.filter(project => project.status === filter);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Future Projects" 
          subtitle="Explore the innovative projects I'm planning to build"
        />
        
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {(['all', 'planning', 'in-progress', 'upcoming'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                filter === status
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectOverview key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FutureProjects;