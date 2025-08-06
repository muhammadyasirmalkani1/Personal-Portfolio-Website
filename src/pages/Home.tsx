import { useEffect, useState } from 'react';
import { ArrowRight, Download, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../utils/data';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    // Set initial visibility after a short delay
    setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-teal-900/10 dark:from-purple-900/20 dark:to-teal-900/20"
          aria-hidden="true"
        ></div>
        
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-30 dark:opacity-20">
            <svg width="100%" height="100%">
              <defs>
                <pattern 
                  id="grid" 
                  width="40" 
                  height="40" 
                  patternUnits="userSpaceOnUse"
                >
                  <path 
                    d="M 40 0 L 0 0 0 40" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="0.5" 
                    className="text-gray-400 dark:text-gray-700"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Hi, I'm</span>
                <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
                  M Yasir Malkani
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
                Full Stack Developer
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                I'm passionate about creating beautiful, user-friendly applications that solve real-world problems. 
                With expertise in both frontend and backend development, I bring ideas to life through clean code 
                and thoughtful design.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                
                <a href="https://www.canva.com/design/DAGvAfM5OC4/GCxEulTjSfxfuMaXLNACOg/view?utm_content=DAGvAfM5OC4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9c770a379d" className="btn btn-outline" download>
                  Download CV
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a 
                  href="https://www.linkedin.com/in/unique-developers/" 
                  target="linkedin" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:azdhapk2@gmail.com" 
                  className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-teal-500/80 opacity-90 mix-blend-multiply"></div>
                <img
                  src="https://images.unsplash.com/photo-1746464201641-7d3d5fe00aec?w=100&amp;auto=compress&cs=tinysrgb&w=1100&h=600&dpr=2"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-200 dark:bg-purple-900/30 rounded-full opacity-70"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-200 dark:bg-teal-900/30 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="section py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Check out some of my recent work"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="fade-in">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/projects" className="flex btn btn-outline">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-teal-900/90 dark:from-purple-900 dark:to-teal-900"></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
          <Link to="/contact" className="flex btn-bg-white text-purple-700 hover:bg-gray-100">
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;