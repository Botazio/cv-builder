import produce from 'immer';
import { SnackBarDisplayState } from './display-utils';
import { DISPLAYactions, RESET_DISPLAY_SNACKBAR, SET_DISPLAY_SNACKBAR } from './display.actions';


export interface Display {
  snackBar: SnackBarDisplayState;
};

const initialState: Display = {
  snackBar: {
    display: false,
    value: '',
    type: 'success',
  },
};

/**
 * Part of the builder reducer. 
 * It controls the display of certain builder components. 
 * For example, the display of the "Information has been saved" message.
 * 
 * This reducer is necessary because the process occurs asynchronically across multiple pages.
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
    default:
      return state;
  }
}
