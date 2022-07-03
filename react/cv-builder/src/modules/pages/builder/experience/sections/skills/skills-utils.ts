
export interface Skill {
  id: string,
  title: string;
}

export function createEmptySkill(id: string): Skill {
  return {
    id: id,
    title: ''
  };
};