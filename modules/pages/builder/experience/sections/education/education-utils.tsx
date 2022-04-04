
export interface Education {
  id: string,
  title: string;
  startDate: string;
  endDate: string;
  place: string;
  location: string;
  description: string;
}

export function createEmptyEducation(id: string): Education {
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