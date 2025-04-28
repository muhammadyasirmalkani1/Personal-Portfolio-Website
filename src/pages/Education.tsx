import { useEffect } from 'react';
import { Calendar, GraduationCap, Award } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { education } from '../utils/data';

const Education = () => {
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
          title="Education & Qualifications" 
          subtitle="My academic background and ongoing learning journey"
        />
        
        <div className="mt-12">
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              className={`fade-in timeline-item ${index === education.length - 1 ? 'border-l-transparent' : ''}`}
            >
              <div className="timeline-dot"></div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mr-4">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar size={16} className="mr-1" />
                    <span>{edu.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <GraduationCap size={16} className="mr-2 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">
                    {edu.institution}
                  </h4>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {edu.description}
                </p>
                
                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <h5 className="font-medium text-gray-800 dark:text-gray-200 flex items-center mb-3">
                      <Award size={16} className="mr-2 text-purple-600 dark:text-purple-400" />
                      Achievements & Activities
                    </h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Certifications Section */}
        <div className="mt-20 fade-in">
          <SectionHeading 
            title="Certifications & Continued Education" 
            subtitle="Professional development and specialized training"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AWS Certified Developer',
                organization: 'Amazon Web Services',
                date: '2023',
                description: 'Expertise in developing, deploying, and debugging cloud-based applications using AWS.',
              },
              {
                title: 'Professional Scrum Master I',
                organization: 'Scrum.org',
                date: '2022',
                description: 'Certified in implementing Scrum principles and practices in development teams.',
              },
              {
                title: 'React Advanced Patterns',
                organization: 'Frontend Masters',
                date: '2021',
                description: 'Mastery of advanced React patterns, state management, and performance optimization.',
              },
              {
                title: 'UI/UX Design Fundamentals',
                organization: 'Interaction Design Foundation',
                date: '2021',
                description: 'Understanding of user-centered design principles and user experience best practices.',
              },
              {
                title: 'GraphQL Certified Developer',
                organization: 'Apollo GraphQL',
                date: '2020',
                description: 'Proficiency in building and optimizing GraphQL APIs and client applications.',
              },
              {
                title: 'Google Analytics Certification',
                organization: 'Google',
                date: '2019',
                description: 'Expertise in implementing and analyzing web analytics for data-driven decisions.',
              },
            ].map((cert, index) => (
              <div key={index} className="card p-6 hover:border-purple-400 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{cert.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                </div>
                <h4 className="text-purple-600 dark:text-purple-400 font-medium mb-3">{cert.organization}</h4>
                <p className="text-gray-600 dark:text-gray-400">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;