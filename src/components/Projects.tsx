
import ProjectCard from './projects/ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  return (
    <section className="py-16 sm:py-20 relative" id="projects">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <span className="text-lg text-gray-400 mb-4 block">Visit my portfolio and keep your feedback</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="glow-text">My Portfolio</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
