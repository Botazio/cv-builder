import { PERSONALactions, SET_FORM_FIELD } from "./personal.actions";
import produce from 'immer';


export interface Personal {
  name: string;
  surname: string;
  profession: string;
  mobile: string;
  email: string;
  address: string;
  linkedin: string;
  website: string;
  license: string;
  nationality: string;
};

const initialState: Personal = {
  name: '',
  surname: '',
  profession: '',
  mobile: '',
  email: '',
  address: '',
  linkedin: '',
  website: '',
  license: '',
  nationality: '',
};

export function personalReducer(state = initialState, action: PERSONALactions) {
  switch (action.type) {
    case SET_FORM_FIELD: {
      const nextState = produce(state, draft => {
        draft[action.field] = action.payload;
      });

      return nextState;
    }
    default:
      return state;
  }
}
