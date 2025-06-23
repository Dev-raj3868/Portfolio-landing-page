
import { Code, Palette, Zap, Users } from 'lucide-react';

const AboutSkills = () => {
  const skills = [
    { 
      icon: Code, 
      title: "Full-Stack Development", 
      description: "Expertise in React, Node.js, Python, and modern web technologies",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Palette, 
      title: "UI/UX Design", 
      description: "Creating beautiful, intuitive user interfaces with modern design principles",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Zap, 
      title: "Performance Optimization", 
      description: "Building fast, scalable applications with optimal user experience",
      color: "from-yellow-500 to-orange-500"
    },
    { 
      icon: Users, 
      title: "Team Collaboration", 
      description: "Strong communication skills and experience working in agile environments",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {skills.map((skill, index) => (
        <div 
          key={index} 
          className="glass-card p-4 sm:p-6 rounded-xl hover-glow transition-all duration-300 hover:scale-105 animate-scale-in"
          style={{animationDelay: `${index * 0.1}s`}}
        >
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-3 sm:mb-4`}>
            <skill.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{skill.title}</h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{skill.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutSkills;
