import produce from 'immer';
import { SnackBarDisplayState } from './display-utils';
import { DISPLAYactions, RESET_DISPLAY_SNACKBAR, SET_DISPLAY_REQUIRED_FIELDS_ERROR, SET_DISPLAY_SNACKBAR } from './display.actions';


export interface Display {
  snackBar: SnackBarDisplayState;
  displayRequiredFieldsError: boolean;
  displaySampleDataInTemplates: boolean;
};

const initialState: Display = {
  snackBar: {
    display: false,
    value: '',
    type: 'success',
  },
  displayRequiredFieldsError: false,
  displaySampleDataInTemplates: false,
};

/**
 * Controls the state of different UI components
 * For example, the display of the "Information has been saved" message.
 */
export function displayReducer(state = initialState, action: DISPLAYactions) {
  switch (action.type) {
    case SET_DISPLAY_SNACKBAR: {
      const nextState = produce(state, draft => {
        draft["snackBar"] = action.payload;
      });

      return nextState;
    }
    case RESET_DISPLAY_SNACKBAR: {
      const nextState = produce(state, draft => {
        draft["snackBar"] = initialState.snackBar;
      });

      return nextState;
    }
    case SET_DISPLAY_REQUIRED_FIELDS_ERROR: {
      const nextState = produce(state, draft => {
        draft["displayRequiredFieldsError"] = action.payload;
      });

      return nextState;
    }
    default:
      return state;
  }
}
