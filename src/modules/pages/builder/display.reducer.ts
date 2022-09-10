import produce from 'immer';
import { DISPLAYactions, SET_DISPLAY } from './display.actions';


export interface Display {
  displayStateHasBeenSaved: boolean;
};

const initialState: Display = {
  displayStateHasBeenSaved: false,
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
    case SET_DISPLAY: {
      const nextState = produce(state, draft => {
        draft[action.field] = action.payload;
      });

      return nextState;
    }
    default:
      return state;
  }
}
