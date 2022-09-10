import produce from 'immer';
import { LEGALactions, SET_CONDITIONS } from "./legal.actions";


export interface Legal {
  areConditionsAccepted: boolean;
};

const initialState: Legal = {
  areConditionsAccepted: false
};

export function legalReducer(state = initialState, action: LEGALactions) {
  switch (action.type) {
    case SET_CONDITIONS: {
      const nextState = produce(state, draft => {
        draft['areConditionsAccepted'] = action.payload;
      });

      return nextState;
    }
    default:
      return state;
  }
}
