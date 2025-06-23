
const AboutJourney = () => {
  return (
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
  );
};

export default AboutJourney;
