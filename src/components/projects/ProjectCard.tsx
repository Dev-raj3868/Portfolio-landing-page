
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
      className="project-card rounded-xl overflow-hidden group stagger-animation"
      style={{animationDelay: `${index * 0.15}s`}}
    >
      <div className="relative overflow-hidden h-56 sm:h-64">
        <img 
          src={project.image} 
          alt={`${project.title} - Website Development by Akash Nayar`}
          className="project-image w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-all duration-500"></div>
        
        {/* Hover overlay with shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 shimmer-effect"></div>
        
        {/* Floating action button */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <ExternalLink className="h-5 w-5 text-white" />
          </a>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 relative">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs sm:text-sm text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200 line-clamp-2">
            {project.description}
          </span>
          <div className="flex items-center gap-1 text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110 cursor-pointer">
            <Heart className="h-3 w-3 sm:h-4 sm:w-4 hover:fill-current" />
            <span className="text-xs sm:text-sm font-semibold">{project.likes}</span>
          </div>
        </div>
        
        <h4 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline group/link"
          >
            {project.title}
            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 group/link-hover:scale-110" />
          </a>
        </h4>
        
        {/* Animated bottom border */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
