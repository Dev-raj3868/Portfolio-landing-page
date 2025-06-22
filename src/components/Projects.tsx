
const Projects = () => {
  return (
    <section className="py-16 sm:py-20 relative" id="projects">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="glow-text">Featured Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Coming soon! Stay tuned for amazing projects showcasing expertise across different technologies and domains.
          </p>
        </div>

        <div className="text-center">
          <div className="glass-card p-8 sm:p-12 rounded-2xl max-w-2xl mx-auto">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="text-2xl sm:text-3xl">🚀</div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Projects Coming Soon</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I'm currently working on some exciting projects that will showcase my skills in web development, 
              design, and various technologies. Check back soon to see what I've been building!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
