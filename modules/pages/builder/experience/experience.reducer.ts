import produce from "immer";
import { createNewElement, moveFormInArray, setFormField } from "./experience-utils";
import { ADD_FORM, DELETE_FORM, EXPERIENCEactions, MOVE_FORM_DOWN, MOVE_FORM_UP, SAVE_FORM, SET_DESCRIPTION, SET_FORM_DESCRIPTION, SET_FORM_END_DATE, SET_FORM_LOCATION, SET_FORM_PLACE, SET_FORM_START_DATE, SET_FORM_TITLE, UPDATE_FORM } from "./experience.actions";
import { Education } from "./sections/education/education-utils";
import { Work } from "./sections/work/work-utils";

export interface Experience {
  description: string;
  work: {
    activeElementID: string;
    elements: Work[];
  };
  education: {
    activeElementID: string;
    elements: Education[];
  };
}

const initialState: Experience = {
  description: '',
  work: {
    activeElementID: '',
    elements: []
  },
  education: {
    activeElementID: '',
    elements: []
  }
};

export function experienceReducer(state = initialState, action: EXPERIENCEactions) {
  switch (action.type) {
    case SET_DESCRIPTION: {
      return { ...state, description: action.payload };
    }
    case SET_FORM_TITLE: {
      return setFormField(state, action.payload, action.section, 'title');
    }
    case SET_FORM_LOCATION: {
      return setFormField(state, action.payload, action.section, 'location');
    }
    case SET_FORM_PLACE: {
      return setFormField(state, action.payload, action.section, 'place');
    }
    case SET_FORM_START_DATE: {
      return setFormField(state, action.payload, action.section, 'startDate');
    }
    case SET_FORM_END_DATE: {
      return setFormField(state, action.payload, action.section, 'endDate');
    }
    case SET_FORM_DESCRIPTION: {
      return setFormField(state, action.payload, action.section, 'description');
    }
    case ADD_FORM: {
      const newElement = createNewElement(action.section);

      const nextState = produce(state, draft => {
        const draftState = draft[action.section];

        draftState.activeElementID = newElement.id;
        draftState.elements.push(newElement);
      });

      return nextState;
    }
    case DELETE_FORM: {
      const prevState = state[action.section];
      const newActiveID = action.payload === prevState.activeElementID ? '' : prevState.activeElementID;

      const nextState = produce(state, draft => {
        const draftState = draft[action.section];

        draftState.activeElementID = newActiveID;
        const index = draftState.elements.findIndex(element => element.id === action.payload);
        if (index !== -1) draftState.elements.splice(index, 1);
      });

      return nextState;
    }
    case UPDATE_FORM: {
      const nextState = produce(state, draft => {
        draft[action.section].activeElementID = action.payload;
      });

      return (
        nextState
      );
    }
    case SAVE_FORM: {
      const nextState = produce(state, draft => {
        draft[action.section].activeElementID = '';
      });

      return (
        nextState
      );
    }
    case MOVE_FORM_UP: {
      return moveFormInArray(state, action.payload, action.section, -1);
    }
    case MOVE_FORM_DOWN: {
      return moveFormInArray(state, action.payload, action.section, +1);
    }
    default:
      return state;
  }
}