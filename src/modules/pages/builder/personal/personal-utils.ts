import { Dispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "state/hooks";
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


export default function useAreRequiredFieldsPopulated() {

  const state = useAppSelector(state => state.builder.personal);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/builder/personal' && !areRequiredFieldsPopulated(state)) {
      navigate('/builder/personal');
    }
  }, []);

}


export function dispatchSnackbarMissingRequiredFields(dispatch: Dispatch<SetDisplaySnackBar>) {
  const snackBarMissingRequiredFields: SnackBarDisplayState = {
    display: true,
    value: "Please fill in all required fields",
    type: "error"
  };

  dispatch({ type: SET_DISPLAY_SNACKBAR, payload: snackBarMissingRequiredFields });
}