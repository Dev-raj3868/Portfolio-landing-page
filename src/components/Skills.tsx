
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "TypeScript", level: 90, color: "from-blue-500 to-blue-700" },
        { name: "Next.js", level: 85, color: "from-gray-600 to-gray-800" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-cyan-600" },
        { name: "Vue.js", level: 80, color: "from-green-400 to-green-600" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88, color: "from-green-500 to-green-700" },
        { name: "Python", level: 85, color: "from-yellow-400 to-yellow-600" },
        { name: "PostgreSQL", level: 82, color: "from-blue-600 to-blue-800" },
        { name: "MongoDB", level: 80, color: "from-green-600 to-green-800" },
        { name: "GraphQL", level: 75, color: "from-pink-500 to-pink-700" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Docker", level: 85, color: "from-blue-500 to-blue-700" },
        { name: "AWS", level: 80, color: "from-orange-400 to-orange-600" },
        { name: "Git", level: 95, color: "from-red-500 to-red-700" },
        { name: "Figma", level: 85, color: "from-purple-400 to-purple-600" },
        { name: "Firebase", level: 78, color: "from-yellow-500 to-yellow-700" }
      ]
    }
  ];

  return (
    <section className="py-20 relative" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold mb-6">
            <span className="glow-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across different technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="glass-card p-8 rounded-2xl hover-glow animate-scale-in"
              style={{animationDelay: `${categoryIndex * 0.2}s`}}
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <Badge 
                        variant="outline"
                        className="border-blue-500/30 text-blue-300 text-xs"
                      >
                        {skill.level}%
                      </Badge>
                    </div>
                    
                    <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Currently Learning</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Rust", "WebAssembly", "Three.js", "Blockchain", "Machine Learning", "Kubernetes"].map((tech, index) => (
                <Badge 
                  key={index}
                  className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300 px-4 py-2 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 animate-glow"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
