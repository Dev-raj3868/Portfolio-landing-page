
import { useState } from 'react';
import ResumeTabs from './resume/ResumeTabs';
import EducationTab from './resume/EducationTab';
import ExperienceTab from './resume/ExperienceTab';
import SkillsTab from './resume/SkillsTab';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Professional Skills' },
    { id: 'experience', label: 'Experience' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'education':
        return <EducationTab />;
      case 'experience':
        return <ExperienceTab />;
      case 'skills':
        return <SkillsTab />;
      default:
        return <EducationTab />;
    }
  };

  return (
    <section className="py-16 sm:py-20 relative" id="resume">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-sm uppercase tracking-wider text-yellow-500 mb-4">5+ YEARS OF EXPERIENCE</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">My Resume</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <ResumeTabs 
            tabs={tabs} 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />

          <div className="min-h-[400px] sm:min-h-[600px]">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
