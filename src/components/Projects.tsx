
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      liveDemo: "#",
      github: "#",
      featured: true
    },
    {
      id: 2,
      title: "AI Task Manager",
      description: "Intelligent task management app with AI-powered prioritization and scheduling. Features natural language processing for task creation.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["React", "Python", "FastAPI", "OpenAI", "PostgreSQL"],
      liveDemo: "#",
      github: "#",
      featured: true
    },
    {
      id: 3,
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for real-time data visualization with customizable widgets and automated reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "D3.js", "WebSockets", "Redis", "Express"],
      liveDemo: "#",
      github: "#",
      featured: false
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Full-featured social platform with real-time messaging, content sharing, and advanced privacy controls.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      technologies: ["React Native", "Firebase", "Node.js", "GraphQL"],
      liveDemo: "#",
      github: "#",
      featured: false
    }
  ];

  return (
    <section className="py-20 relative" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold mb-6">
            <span className="glow-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across different technologies and domains.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div 
                className={`${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                } animate-slide-in-left`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative group">
                  <div className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-500 group-hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button 
                          size="lg"
                          className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
                        >
                          <Play className="mr-2 h-5 w-5" />
                          View Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className={`${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                } animate-slide-in-right`}
                style={{animationDelay: `${index * 0.2 + 0.1}s`}}
              >
                <div className="space-y-6">
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 px-4 py-1">
                      Featured Project
                    </Badge>
                  )}
                  
                  <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="glass-card p-6 rounded-xl">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline" 
                        className="border-blue-500/30 text-blue-300 hover:border-blue-500/60 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full hover-glow"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline"
                      className="glass-card border-white/20 hover:border-white/40 text-white rounded-full"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
