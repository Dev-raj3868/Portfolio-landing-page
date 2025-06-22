
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
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
    <section className="py-16 sm:py-20 relative overflow-hidden" id="about">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="glow-text">About Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          <div className="animate-slide-in-left order-2 lg:order-1">
            <div className="glass-card p-6 sm:p-8 rounded-2xl hover-glow">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 glow-text">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Started as a curious student fascinated by the possibilities of code, 
                I've evolved into a full-stack developer who thrives on creating 
                innovative solutions. My experience spans from startups to enterprise 
                applications, always focused on delivering exceptional user experiences.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-glow"></div>
                  <span className="text-gray-200 text-sm sm:text-base">5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-glow" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-gray-200 text-sm sm:text-base">50+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-glow" style={{animationDelay: '1s'}}></div>
                  <span className="text-gray-200 text-sm sm:text-base">Always Learning</span>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right order-1 lg:order-2">
            <div className="relative">
              <div className="glass-card p-6 sm:p-8 rounded-2xl animated-border">
                <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden mb-4">
                  <img 
                    src="/lovable-uploads/fe7b02fb-6940-45d8-95bf-1a0ccc5e21a7.png" 
                    alt="AKASH NAYAR Portrait" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">AKASH NAYAR</h4>
                  <p className="text-gray-400 text-sm sm:text-base">Full-Stack Developer & Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </div>
    </section>
  );
};

export default About;
