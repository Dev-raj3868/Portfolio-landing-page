
import ProjectsHeader from './projects/ProjectsHeader';
import ProjectsGrid from './projects/ProjectsGrid';

const Projects = () => {
  return (
    <section className="py-16 sm:py-20 relative" id="projects">
      <div className="container mx-auto px-4 sm:px-6">
        <ProjectsHeader />
        <ProjectsGrid />
      </div>
    </section>
  );
};

export default Projects;
