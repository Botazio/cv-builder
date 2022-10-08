import produce from 'immer';
import { PERSONALactions, SET_FORM_FIELD } from "./personal.actions";


interface PersonalField {
  value: string;
  required: boolean;
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
    required: false
  },
  name: {
    value: '',
    required: true
  },
  surname: {
    value: '',
    required: true
  },
  profession: {
    value: '',
    required: true
  },
  mobile: {
    value: '',
    required: false
  },
  email: {
    value: '',
    required: false
  },
  address: {
    value: '',
    required: false
  },
  linkedin: {
    value: '',
    required: false
  },
  website: {
    value: '',
    required: false
  },
  license: {
    value: '',
    required: false
  },
  nationality: {
    value: '',
    required: false
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
