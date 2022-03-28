import { DESCRIPTIONactions, SET_DESCRIPTION } from "./description.actions";


export interface Description {
  description: string;
};

const initialState: Description = {
  description: '',
};

export function descriptionReducer(state = initialState, action: DESCRIPTIONactions) {
  switch (action.type) {
    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.payload
      };
    default:
      return state;
  }
}

export const getDescription = (state: Description) => state.description;