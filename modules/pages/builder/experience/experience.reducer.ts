import { EXPERIENCEactions, SET_DESCRIPTION } from "./experience.actions";


export interface Experience {
  description: string;
};

const initialState: Experience = {
  description: ''
};

export function experienceReducer(state = initialState, action: EXPERIENCEactions) {
  switch (action.type) {
    case SET_DESCRIPTION:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
}

export const getDescription = (state: Experience) => state.description;