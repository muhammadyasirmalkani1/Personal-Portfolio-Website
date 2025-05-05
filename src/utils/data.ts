export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  description: string;
  achievements?: string[];
}

export interface Skill {
  id: number;
  name: string;
  level: number; // 0-100
  category: 'technical' | 'soft' | 'language' | 'tools';
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  image: string;
}

// Sample data
export const projects: Project[] = [
  {
    id: 1,
    title: 'SecureAPI',
    description: 'A fully responsive e-commerce platform built with React, Node.js, and MongoDB.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://secure-api-website.vercel.app/',
    github: 'https://github.com',
  },
  {
    id: 2,
    title: 'Medical Health',
    description: 'A collaborative task management app with real-time updates using Socket.io.',
    image: 'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
    link: 'https://medical-health-device-landing-page.vercel.app/',
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current and forecasted weather using the OpenWeather API.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['JavaScript', 'HTML/CSS', 'API Integration'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Tech Innovations Inc.',
    position: 'Senior Frontend Developer',
    duration: 'Jan 2021 - Present',
    description: [
      'Led a team of 5 developers in building a new customer-facing dashboard',
      'Implemented CI/CD pipelines that reduced deployment time by 40%',
      'Optimized application performance, improving load times by 60%',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'Jest', 'GraphQL'],
  },
  {
    id: 2,
    company: 'Digital Solutions LLC',
    position: 'Frontend Developer',
    duration: 'May 2018 - Dec 2020',
    description: [
      'Developed responsive web applications for clients in various industries',
      'Created reusable component libraries that increased development efficiency',
      'Collaborated with UX/UI designers to implement pixel-perfect designs',
      'Integrated third-party APIs and services',
    ],
    technologies: ['React', 'JavaScript', 'SCSS', 'RESTful APIs'],
  },
  {
    id: 3,
    company: 'StartUp Ventures',
    position: 'Junior Web Developer',
    duration: 'Feb 2017 - Apr 2018',
    description: [
      'Built and maintained client websites using modern web technologies',
      'Assisted in developing the company\'s internal management system',
      'Participated in daily stand-ups and sprint planning',
      'Fixed bugs and implemented new features',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'PHP'],
  },
];

export const education: Education[] = [
  {
    id: 1,
    institution: 'University of Technology',
    degree: 'Master of Computer Science',
    duration: '2015 - 2017',
    description: 'Specialized in Software Engineering and Full-Stack Development',
    achievements: [
      'Graduated with Distinction',
      'Published research on efficient front-end architecture',
      'Teaching Assistant for Web Development courses',
    ],
  },
  {
    id: 2,
    institution: 'Digital Institute',
    degree: 'Bachelor of Science in Web Development',
    duration: '2011 - 2015',
    description: 'Focused on Front-End Development and User Experience Design',
    achievements: [
      'Dean\'s List for 4 consecutive semesters',
      'Winner of the Annual Coding Competition',
      'President of the Web Development Club',
    ],
  },
];

export const skills: Skill[] = [
  // Technical Skills
  { id: 1, name: 'JavaScript', level: 90, category: 'technical' },
  { id: 2, name: 'TypeScript', level: 85, category: 'technical' },
  { id: 3, name: 'React', level: 90, category: 'technical' },
  { id: 4, name: 'Node.js', level: 80, category: 'technical' },
  { id: 5, name: 'HTML/CSS', level: 95, category: 'technical' },
  { id: 6, name: 'Tailwind CSS', level: 85, category: 'technical' },
  { id: 7, name: 'GraphQL', level: 75, category: 'technical' },
  { id: 8, name: 'RESTful APIs', level: 85, category: 'technical' },
  
  // Tools
  { id: 9, name: 'Git', level: 90, category: 'tools' },
  { id: 10, name: 'Docker', level: 70, category: 'tools' },
  { id: 11, name: 'Webpack', level: 80, category: 'tools' },
  { id: 12, name: 'Jest', level: 85, category: 'tools' },
  
  // Soft Skills
  { id: 13, name: 'Team Leadership', level: 85, category: 'soft' },
  { id: 14, name: 'Communication', level: 90, category: 'soft' },
  { id: 15, name: 'Problem Solving', level: 95, category: 'soft' },
  { id: 16, name: 'Time Management', level: 80, category: 'soft' },
  
  // Languages
  { id: 17, name: 'English', level: 100, category: 'language' },
  { id: 18, name: 'Spanish', level: 70, category: 'language' },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jane Smith',
    position: 'CTO',
    company: 'Tech Innovations Inc.',
    text: 'An exceptional developer who consistently delivers high-quality code and innovative solutions. Their ability to lead a team and mentor junior developers is outstanding.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 2,
    name: 'Michael Johnson',
    position: 'Project Manager',
    company: 'Digital Solutions LLC',
    text: 'Working with this developer was a pleasure. They have a deep understanding of web technologies and always meet deadlines with high-quality deliverables.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
];