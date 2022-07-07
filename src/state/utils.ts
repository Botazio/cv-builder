import { storageAvailable } from "common/utils/functions";

const STORE: string = "cv_builder_store";

export function getPersistedState() {
  if (storageAvailable('localStorage')) {
    const state = JSON.parse(localStorage.getItem(STORE));
    if (state) {
      return state;
    }
  }
}

export function saveState(state) {
  if (storageAvailable('localStorage')) {
    localStorage.setItem(STORE, JSON.stringify(state));
  }
}