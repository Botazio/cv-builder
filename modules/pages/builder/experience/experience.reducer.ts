import produce from "immer";
import { createNewElement, moveFormInArray, setFormField } from "./experience-utils";
import { ADD_FORM, DELETE_FORM, EXPERIENCEactions, MOVE_FORM_DOWN, MOVE_FORM_UP, SAVE_FORM, SET_DESCRIPTION, SET_FORM_FIELD, UPDATE_FORM } from "./experience.actions";
import { Education } from "./sections/education/education-utils";
import { Language } from "./sections/languages/languages-utils";
import { Reference } from "./sections/references/references-utils";
import { Skill } from "./sections/skills/skills-utils";
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
  skills: {
    activeElementID: string;
    elements: Skill[];
  };
  languages: {
    activeElementID: string;
    elements: Language[];
  };
  references: {
    activeElementID: string;
    elements: Reference[];
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
  },
  skills: {
    activeElementID: '',
    elements: []
  },
  languages: {
    activeElementID: '',
    elements: []
  },
  references: {
    activeElementID: '',
    elements: []
  }
};

export function experienceReducer(state = initialState, action: EXPERIENCEactions) {
  switch (action.type) {
    case SET_DESCRIPTION: {
      return { ...state, description: action.payload };
    }
    case SET_FORM_FIELD: {
      return setFormField(state, action.payload, action.field, action.section);
    }
    case ADD_FORM: {
      const newElement = createNewElement(action.section);

      const nextState = produce(state, draft => {
        const draftState = draft[action.section];

        draftState.activeElementID = newElement.id;
        // It is safe to ignore this error
        // @ts-ignore
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