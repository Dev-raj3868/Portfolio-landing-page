
import { useState } from 'react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Professional Skills' },
    { id: 'experience', label: 'Experience' }
  ];

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

  const experienceData = [
    {
      period: '2017 - Present',
      title: 'Job Experience',
      items: [
        {
          position: 'Jr Website Developer',
          company: 'Opaldoor Softwares',
          duration: 'Jun 2017 - March 2019',
          description: 'Opaldoor Softwares is one of the leading companies in India providing Technological solutions to our customers since our inception. We help our customers transform themselves and we bridge the gap between our customer and their growth.'
        },
        {
          position: 'Website Developer',
          company: 'HeyTutor',
          duration: 'March 2019 - Sep 2019',
          description: 'At HeyTutor, our goal is to ensure that you have the best learning experience possible. We thought that other tutoring companies weren\'t providing a level of service to justify their price tag.'
        },
        {
          position: 'Frontend Developer',
          company: 'Spayee | Graphy by Unacademy',
          duration: 'Sep 2019 - Dec 2022',
          description: 'An Unacademy group company, Graphy or Spayee is a platform that helps creators grow their audience, monetise their skills and host live cohort-based courses.'
        }
      ]
    }
  ];

  return (
    <section className="py-20 relative" id="resume">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-wider text-yellow-500 mb-4">5+ YEARS OF EXPERIENCE</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">My Resume</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="glass-card rounded-full p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-yellow-500 text-black font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {activeTab === 'education' && (
              <div className="animate-fade-in">
                {educationData.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-12">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-yellow-500 font-semibold">{section.period}</span>
                      <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                    </div>
                    
                    <div className="space-y-8">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex gap-6">
                          <div className="flex flex-col items-center">
                            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                            {itemIndex < section.items.length - 1 && (
                              <div className="w-0.5 h-24 bg-gray-600 mt-2"></div>
                            )}
                          </div>
                          <div className="flex-1 glass-card p-6 rounded-xl">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h4 className="text-xl font-semibold text-white mb-2">{item.institution}</h4>
                                <p className="text-gray-400">{item.details}</p>
                              </div>
                              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
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
            )}

            {activeTab === 'experience' && (
              <div className="animate-fade-in">
                {experienceData.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-12">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-yellow-500 font-semibold">{section.period}</span>
                      <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                    </div>
                    
                    <div className="space-y-8">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex gap-6">
                          <div className="flex flex-col items-center">
                            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                            {itemIndex < section.items.length - 1 && (
                              <div className="w-0.5 h-32 bg-gray-600 mt-2"></div>
                            )}
                          </div>
                          <div className="flex-1 glass-card p-6 rounded-xl">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h4 className="text-xl font-semibold text-white mb-2">{item.position}</h4>
                                <p className="text-gray-400 mb-2">{item.duration}</p>
                              </div>
                              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                                {item.company}
                              </span>
                            </div>
                            <p className="text-gray-300 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="animate-fade-in text-center py-20">
                <div className="glass-card p-12 rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-4">Professional Skills</h3>
                  <p className="text-gray-300">Skills section content will be displayed here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
