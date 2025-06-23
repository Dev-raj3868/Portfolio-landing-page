
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projectsData';

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {projectsData.map((project, index) => (
        <ProjectCard 
          key={index}
          project={project}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;
