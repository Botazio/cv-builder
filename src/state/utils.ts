import { storageAvailable } from "common/utils/functions";
import { Dispatch } from "react";
import { SnackBarDisplayState } from "state/display/display-utils";
import { SetDisplaySnackBar, SET_DISPLAY_SNACKBAR } from "./display/display.actions";
import { RootState } from "./store";

const STORE: string = "cv_builder_store";

export function getPersistedState() {
  if (storageAvailable('localStorage')) {
    const state = JSON.parse(localStorage.getItem(STORE));
    if (state) {
      return state;
    }
  }
}

export function saveState(state: RootState): boolean {
  let hasStateBeenSaved: boolean = false;

  if (storageAvailable('localStorage')) {
    try {
      localStorage.setItem(STORE, JSON.stringify(state));
      hasStateBeenSaved = true;
    } catch (e) {
      console.error(e);
    }
  }

  return hasStateBeenSaved;
}

export function saveStateAndDispatchSnackBarDisplay(state: RootState, dispatch: Dispatch<SetDisplaySnackBar>) {
  const snackBarStateHasBeenSaved: SnackBarDisplayState = {
    display: true,
    value: "Your information has been correctly saved",
    type: "success"
  };

  const hasStateBeenSaved: boolean = saveState(state);

  if (hasStateBeenSaved) {
    dispatch({ type: SET_DISPLAY_SNACKBAR, payload: snackBarStateHasBeenSaved });
  }
}