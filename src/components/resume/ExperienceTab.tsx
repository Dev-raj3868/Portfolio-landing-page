
const ExperienceTab = () => {
  const experienceData = [
    {
      period: '2017 - Present',
      title: 'Job Experience',
      items: [
        {
          position: 'Software Engineer',
          company: 'Opaldoor Softwares',
          duration: 'Jun 2017 - March 2019',
          description: 'Opaldoor Softwares is one of the leading companies in India providing Technological solutions to our customers since our inception. We help our customers transform themselves and we bridge the gap between our customer and their growth.'
        },
        {
          position: 'Software Engineer',
          company: 'HeyTutor',
          duration: 'March 2019 - Sep 2019',
          description: 'At HeyTutor, our goal is to ensure that you have the best learning experience possible. We thought that other tutoring companies weren\'t providing a level of service to justify their price tag.'
        },
        {
          position: 'Senior Software Engineer',
          company: 'Spayee | Graphy by Unacademy',
          duration: 'Sep 2019 - Dec 2022',
          description: 'An Unacademy group company, Graphy or Spayee is a platform that helps creators grow their audience, monetise their skills and host live cohort-based courses.'
        }
      ]
    }
  ];

  return (
    <div className="animate-fade-in">
      {experienceData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6 sm:mb-8 slide-in-animation">
            <span className="text-yellow-500 font-semibold text-sm sm:text-base glow-text">{section.period}</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{section.title}</h3>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            {section.items.map((item, itemIndex) => (
              <div 
                key={itemIndex} 
                className="flex gap-4 sm:gap-6 stagger-animation"
                style={{ animationDelay: `${itemIndex * 0.2}s` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full pulse-glow"></div>
                  {itemIndex < section.items.length - 1 && (
                    <div className="w-0.5 h-28 sm:h-32 bg-gradient-to-b from-yellow-500 to-gray-600 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 glass-card p-4 sm:p-6 rounded-xl hover-glow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors duration-300">{item.position}</h4>
                      <p className="text-gray-400 mb-2 text-sm sm:text-base">{item.duration}</p>
                    </div>
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs sm:text-sm font-semibold self-start button-hover">
                      {item.company}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTab;
