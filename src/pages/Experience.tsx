import { useEffect } from 'react';
import { Calendar, Briefcase } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { experiences } from '../utils/data';

const Experience = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
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
          title="Professional Experience" 
          subtitle="My journey as a developer and the companies I've worked with"
        />
        
        <div className="mt-12">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className={`fade-in timeline-item ${index === experiences.length - 1 ? 'border-l-transparent' : ''}`}
            >
              <div className="timeline-dot"></div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mr-4">
                    {experience.position}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar size={16} className="mr-1" />
                    <span>{experience.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <Briefcase size={16} className="mr-2 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">
                    {experience.company}
                  </h4>
                </div>
                
                <div className="space-y-4 mb-6">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200">Key Responsibilities:</h5>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Accomplishments Section */}
        <div className="mt-20 fade-in">
          <SectionHeading 
            title="Additional Professional Accomplishments" 
            subtitle="Notable achievements and contributions throughout my career"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Leadership',
                description: 'Led a team of 5 developers in building a customer-facing dashboard that increased client satisfaction by 40%.',
              },
              {
                title: 'Innovation',
                description: 'Implemented a CI/CD pipeline that reduced deployment time by 60% and improved code quality through automated testing.',
              },
              {
                title: 'Technical Excellence',
                description: 'Optimized application performance, reducing load times by 70% and improving overall user experience.',
              },
              {
                title: 'Mentorship',
                description: 'Mentored 10+ junior developers, helping them grow their skills and advance their careers.',
              },
              {
                title: 'Client Relations',
                description: 'Managed relationships with key clients, ensuring project requirements were met and expectations were exceeded.',
              },
              {
                title: 'Award Recognition',
                description: 'Received "Employee of the Year" award for outstanding contributions to company projects and culture.',
              },
            ].map((item, index) => (
              <div key={index} className="card p-6 hover:border-purple-400 transition-all">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;