
export interface Work {
  id: string;
  title: string;
  location: string;
  place: string;
  startDate: string;
  endDate: string;
  description: string;
}

export function createEmptyWorkExperience(id: string): Work {
  return {
    id: id,
    title: '',
    location: '',
    place: '',
    startDate: '',
    endDate: '',
    description: '',
  };
};