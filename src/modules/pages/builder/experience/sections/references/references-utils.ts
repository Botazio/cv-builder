
export interface Reference {
  id: string,
  name: string;
  place: string;
  mobile: string;
  email: string;
  description: string;
}

export function createEmptyReference(id: string): Reference {
  return {
    id: id,
    name: '',
    place: '',
    mobile: '',
    email: '',
    description: ''
  };
};