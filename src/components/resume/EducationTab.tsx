
const EducationTab = () => {
  const educationData = [
    {
      period: '2014 - 2020',
      title: 'Education Quality',
      items: [
        {
          institution: 'Hierank Business School',
          details: 'CCSU University (2014 - 2017)',
          degree: 'BCA'
        },
        {
          institution: 'Global Educational Institutes',
          details: 'AKTU University (2018 - 2020)',
          degree: 'MCA'
        }
      ]
    }
  ];

  return (
    <div className="animate-fade-in">
      {educationData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <span className="text-yellow-500 font-semibold text-sm sm:text-base">{section.period}</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{section.title}</h3>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  {itemIndex < section.items.length - 1 && (
                    <div className="w-0.5 h-20 sm:h-24 bg-gray-600 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 glass-card p-4 sm:p-6 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.institution}</h4>
                      <p className="text-gray-400 text-sm sm:text-base">{item.details}</p>
                    </div>
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs sm:text-sm font-semibold self-start">
                      {item.degree}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationTab;
