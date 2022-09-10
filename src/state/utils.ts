import { storageAvailable } from "common/utils/functions";
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