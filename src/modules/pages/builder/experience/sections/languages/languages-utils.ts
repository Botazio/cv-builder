
export interface Language {
  id: string,
  title: string;
}

export function createEmptyLanguage(id: string): Language {
  return {
    id: id,
    title: ''
  };
};