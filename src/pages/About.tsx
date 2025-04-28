import { useEffect } from 'react';
import { FileText, MapPin, Calendar, Mail, Phone } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

const About = () => {
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

  const personalInfo = [
    { icon: <FileText size={20} />, label: 'Full Name', value: 'Muhammad Yasir Malkani' },
    { icon: <Calendar size={20} />, label: 'Date of Birth', value: 'September, 23, 1999' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Dera Ghazi Khan, Punjab, Pakistan' },
    { icon: <Mail size={20} />, label: 'Email', value: 'azdhapk2@gmail.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '(+92) 335-488-3737' },
  ];

  const bio = `
    I'm a passionate Full Stack Developer with over 5 years of experience in building 
    web applications that deliver exceptional user experiences. My journey in web development 
    started with a curiosity about how websites work, which led me to pursue formal education 
    in Computer Science.
    
    After graduating, I joined a startup where I honed my skills in frontend and backend 
    development. This experience taught me the importance of writing clean, maintainable code 
    and the value of collaboration in a development team.
    
    My technical expertise includes JavaScript, TypeScript, React, Node.js, and various other 
    modern web technologies. I'm constantly learning and exploring new tools and frameworks to 
    stay updated with the latest industry trends.
    
    When I'm not coding, you can find me hiking, reading science fiction, or experimenting with 
    photography. I believe that a balanced life contributes to better problem-solving and creativity 
    in development work.
  `;

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Me" 
          subtitle="Learn more about my background and what drives me"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div className="fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Bio</h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                {bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
          
          {/* Personal Info Section */}
          <div className="fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personalInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.label}</h4>
                      <p className="text-gray-900 dark:text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Interests & Hobbies</h3>
                <div className="flex flex-wrap gap-3">
                  {['Hiking', 'Photography', 'Reading', 'Travel', 'Cooking', 'Music'].map((hobby, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Why Work With Me Section */}
        <div className="mt-20 fade-in">
          <SectionHeading 
            title="Why Work With Me" 
            subtitle="What I bring to your projects"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Problem Solver',
                description: 'I approach challenges with creativity and persistence, breaking down complex problems into manageable solutions.',
              },
              {
                title: 'Quality Focus',
                description: 'I prioritize writing clean, maintainable code and delivering polished products that exceed expectations.',
              },
              {
                title: 'Continuous Learner',
                description: 'I stay updated with industry trends and continuously expand my knowledge to bring the best solutions to your projects.',
              },
              {
                title: 'Effective Communicator',
                description: 'I value clear, timely communication to ensure project requirements are understood and met.',
              },
              {
                title: 'Detail-Oriented',
                description: 'I pay attention to the small details that make a big difference in user experience and product quality.',
              },
              {
                title: 'Team Player',
                description: 'I collaborate effectively with designers, product managers, and other developers to achieve project goals.',
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

export default About;