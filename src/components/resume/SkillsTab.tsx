
const SkillsTab = () => {
  const skillsData = {
    designSkills: [
      { name: 'PHOTOSHOP', percentage: 100 },
      { name: 'FIGMA', percentage: 95 },
      { name: 'ADOBE XD', percentage: 60 },
      { name: 'ADOBE ILLUSTRATOR', percentage: 70 },
      { name: 'DESIGN', percentage: 90 }
    ],
    developmentSkills: [
      { name: 'HTML', percentage: 85 },
      { name: 'CSS', percentage: 80 },
      { name: 'JAVASCRIPT', percentage: 90 },
      { name: 'SOFTWARE', percentage: 75 },
      { name: 'PLUGIN', percentage: 70 }
    ]
  };

  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Design Skills */}
        <div>
          <div className="mb-6 sm:mb-8">
            <h4 className="text-sm uppercase tracking-wider text-yellow-500 mb-4">Features</h4>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Design Skill</h3>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            {skillsData.designSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider">{skill.name}</span>
                  <span className="text-white font-semibold text-sm sm:text-base">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-pink-500 to-red-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Skills */}
        <div>
          <div className="mb-6 sm:mb-8">
            <h4 className="text-sm uppercase tracking-wider text-yellow-500 mb-4">Features</h4>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Development Skill</h3>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            {skillsData.developmentSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider">{skill.name}</span>
                  <span className="text-white font-semibold text-sm sm:text-base">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-pink-500 to-red-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsTab;
