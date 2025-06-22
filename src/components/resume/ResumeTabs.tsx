
import { Button } from '@/components/ui/button';

interface ResumeTab {
  id: string;
  label: string;
}

interface ResumeTabsProps {
  tabs: ResumeTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const ResumeTabs = ({ tabs, activeTab, onTabChange }: ResumeTabsProps) => {
  return (
    <div className="flex justify-center mb-8 sm:mb-12">
      <div className="glass-card rounded-full p-1">
        <div className="flex flex-wrap justify-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-sm whitespace-nowrap ${
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
    </div>
  );
};

export default ResumeTabs;
