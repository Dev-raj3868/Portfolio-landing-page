
import { educationProjects } from './projects/educationProjects';
import { financeProjects } from './projects/financeProjects';
import { personalDevelopmentProjects } from './projects/personalDevelopmentProjects';
import { professionalServicesProjects } from './projects/professionalServicesProjects';

export const projectsData = [
  ...educationProjects,
  ...financeProjects,
  ...personalDevelopmentProjects,
  ...professionalServicesProjects
];

// Export individual categories for potential future use
export {
  educationProjects,
  financeProjects,
  personalDevelopmentProjects,
  professionalServicesProjects
};
