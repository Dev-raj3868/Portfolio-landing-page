
const Skills = () => {
  return (
    <section className="py-20 relative" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="glass-card p-8 sm:p-12 rounded-2xl max-w-2xl mx-auto">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="text-2xl sm:text-3xl">🚀</div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Skills Section</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              This section can be customized to showcase specific skills or achievements as needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
