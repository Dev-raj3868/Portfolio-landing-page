
import { ExternalLink, Heart } from 'lucide-react';

interface Project {
  title: string;
  url: string;
  description: string;
  image: string;
  likes: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div 
      className="glass-card rounded-xl overflow-hidden hover-glow transition-all duration-300 hover:scale-105 animate-scale-in group"
      style={{animationDelay: `${index * 0.1}s`}}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={`${project.title} - Website Development by Akash Nayar`}
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs sm:text-sm text-blue-400 font-medium">
            {project.description}
          </span>
          <div className="flex items-center gap-1 text-gray-400">
            <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm">{project.likes}</span>
          </div>
        </div>
        
        <h4 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-200">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            {project.title}
            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </a>
        </h4>
      </div>
    </div>
  );
};

export default ProjectCard;
