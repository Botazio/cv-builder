import { Dispatch } from "@reduxjs/toolkit";
import { SnackBarDisplayState } from "../display-utils";
import { SetDisplaySnackBar, SET_DISPLAY_SNACKBAR } from "../display.actions";
import { Personal, PersonalField } from "./personal.reducer";

export function areRequiredFieldsPopulated(state: Personal): boolean {
  let areRequiredFieldsPopulated = true;
  const fields: PersonalField[] = Object.values(state);

  for (const field of fields) {
    if (field.isRequired && field.value === '') {
      areRequiredFieldsPopulated = false;
      break;
    }
  }

  return areRequiredFieldsPopulated;
};

export function dispatchSnackbarMissingRequiredFields(dispatch: Dispatch<SetDisplaySnackBar>) {
  const snackBarMissingRequiredFields: SnackBarDisplayState = {
    display: true,
    value: "Please fill in all required fields",
    type: "error"
  };

  dispatch({ type: SET_DISPLAY_SNACKBAR, payload: snackBarMissingRequiredFields });
}