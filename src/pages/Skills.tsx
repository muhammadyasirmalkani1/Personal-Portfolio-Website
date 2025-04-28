import { useEffect, useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { skills } from '../utils/data';

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, 200);
    
    return () => clearTimeout(timer);
  }, [level]);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'technical', label: 'Technical' },
    { id: 'tools', label: 'Tools' },
    { id: 'soft', label: 'Soft Skills' },
    { id: 'language', label: 'Languages' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
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

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="My technical capabilities and professional competencies"
        />
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 fade-in">
          {/* Left Column */}
          <div>
            {filteredSkills.slice(0, Math.ceil(filteredSkills.length / 2)).map(skill => (
              <SkillBar key={skill.id} name={skill.name} level={skill.level} />
            ))}
          </div>
          
          {/* Right Column */}
          <div>
            {filteredSkills.slice(Math.ceil(filteredSkills.length / 2)).map(skill => (
              <SkillBar key={skill.id} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
        
        {/* Technical Expertise Areas */}
        <div className="mt-20 fade-in">
          <SectionHeading 
            title="Technical Expertise Areas" 
            subtitle="Specialized knowledge and focus domains"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Development',
                skills: ['React', 'TypeScript', 'Redux', 'Next.js', 'HTML/CSS', 'Tailwind CSS'],
                description: 'Building responsive, accessible, and performant user interfaces with modern JavaScript frameworks.',
              },
              {
                title: 'Backend Development',
                skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
                description: 'Developing scalable and secure server-side applications and APIs.',
              },
              {
                title: 'DevOps',
                skills: ['Docker', 'CI/CD', 'AWS', 'Git', 'GitHub Actions'],
                description: 'Implementing automation, deployment pipelines, and infrastructure management.',
              },
              {
                title: 'Performance Optimization',
                skills: ['Lazy Loading', 'Code Splitting', 'Image Optimization', 'Caching Strategies'],
                description: 'Enhancing application speed, responsiveness, and overall user experience.',
              },
              {
                title: 'Responsive Design',
                skills: ['Mobile-First Design', 'CSS Grid', 'Flexbox', 'Media Queries'],
                description: 'Creating layouts that work seamlessly across all device sizes and platforms.',
              },
              {
                title: 'Testing & Quality',
                skills: ['Jest', 'React Testing Library', 'Cypress', 'TDD Methodologies'],
                description: 'Ensuring code quality, reliability, and functionality through comprehensive testing.',
              },
            ].map((area, index) => (
              <div key={index} className="card p-6 hover:border-purple-400 transition-all">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{area.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;