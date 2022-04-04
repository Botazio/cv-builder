import { arrayMoveImmutable } from 'array-move';
import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import { IterativeExperienceSections } from './experience-sections.enum';
import { Experience } from './experience.reducer';
import { createEmptyWorkExperience } from "./sections/work/work-utils";

export function setFormField(state: Experience, payload: string, section: IterativeExperienceSections, field) {
  const nextState = produce(state, draft => {
    const draftState = draft[section];

    const index = draftState.elements.findIndex(element => element.id === draftState.activeElementID);
    if (index !== -1) draftState.elements[index][field] = payload;
  });

  return nextState;
};

export function moveFormInArray(state: Experience, payload: string, section: IterativeExperienceSections, direction: number) {
  const nextState = produce(state, draft => {
    const draftState = draft[section];

    const index = draftState.elements.findIndex(element => element.id === payload);
    if (index !== -1) {
      const newArray = arrayMoveImmutable(draftState.elements, index, index + direction);
      draftState.elements = newArray;
    }
  });

  return nextState;
}


export function createNewElement(section: IterativeExperienceSections) {
  const id: string = uuidv4();

  switch (section) {
    case IterativeExperienceSections.WORK: {
      return createEmptyWorkExperience(id);
    }
    default:
      return null;
  }
}