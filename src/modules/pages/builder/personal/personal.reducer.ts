import produce from 'immer';
import { PERSONALactions, SET_FORM_FIELD } from "./personal.actions";


export interface PersonalField {
  value: string;
  isRequired: boolean;
}

export interface Personal {
  photoURL: PersonalField;
  name: PersonalField;
  surname: PersonalField;
  profession: PersonalField;
  mobile: PersonalField;
  email: PersonalField;
  address: PersonalField;
  linkedin: PersonalField;
  website: PersonalField;
  license: PersonalField;
  nationality: PersonalField;
};

const initialState: Personal = {
  photoURL: {
    value: '',
    isRequired: false
  },
  name: {
    value: '',
    isRequired: true
  },
  surname: {
    value: '',
    isRequired: true
  },
  profession: {
    value: '',
    isRequired: true
  },
  mobile: {
    value: '',
    isRequired: false
  },
  email: {
    value: '',
    isRequired: false
  },
  address: {
    value: '',
    isRequired: false
  },
  linkedin: {
    value: '',
    isRequired: false
  },
  website: {
    value: '',
    isRequired: false
  },
  license: {
    value: '',
    isRequired: false
  },
  nationality: {
    value: '',
    isRequired: false
  },
};

export function personalReducer(state = initialState, action: PERSONALactions) {
  switch (action.type) {
    case SET_FORM_FIELD: {
      const nextState = produce(state, draft => {
        draft[action.field]['value'] = action.payload;
      });

      return nextState;
    }
    default:
      return state;
  }
}
