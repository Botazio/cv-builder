import { SnackBarDisplayState } from "./display-utils";

export const SET_DISPLAY_SNACKBAR = '[DISPLAY] Display SnackBar';
export const RESET_DISPLAY_SNACKBAR = '[DISPLAY] Reset Display SnackBar';

export class SetDisplaySnackBar {
  readonly type = SET_DISPLAY_SNACKBAR;
  constructor(public payload: SnackBarDisplayState) { }
}

export class ResetDisplaySnackBar {
  readonly type = RESET_DISPLAY_SNACKBAR;
  constructor() { }
}


export type DISPLAYactions = SetDisplaySnackBar | ResetDisplaySnackBar;
